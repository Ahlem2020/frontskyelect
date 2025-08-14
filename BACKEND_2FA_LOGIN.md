# Two-Factor Authentication Login Flow

This document outlines the updated login flow with 2FA integration.

## Updated Login Flow

### Standard Login Flow (Without 2FA)
1. User enters username/password
2. Backend validates credentials
3. If user doesn't have 2FA enabled → Complete login immediately
4. Return JWT token and user data

### 2FA-Enabled Login Flow
1. User enters username/password
2. Backend validates credentials
3. If user has 2FA enabled → Return partial success with temp token
4. Frontend shows 2FA input form
5. User enters 6-digit TOTP code
6. Backend verifies TOTP code
7. If valid → Complete login and return final JWT token

## Backend API Endpoints

### 1. Initial Login (Modified)
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}
```

**Response for user WITHOUT 2FA:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "admin",
  "email": "admin@example.com",
  "requiresTwoFA": false
}
```

**Response for user WITH 2FA:**
```json
{
  "success": true,
  "requiresTwoFA": true,
  "tempToken": "temp_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "admin",
  "email": "admin@example.com",
  "message": "2FA verification required"
}
```

### 2. 2FA Verification (New Endpoint)
```http
POST /api/auth/login/verify-2fa
Authorization: Bearer <tempToken>
Content-Type: application/json

{
  "verificationCode": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "admin",
  "email": "admin@example.com",
  "message": "2FA verification successful"
}
```

## Backend Implementation Example

```javascript
const speakeasy = require('speakeasy');
const jwt = require('jsonwebtoken');

// Modified login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Validate credentials
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }

    if (user.twoFactorEnabled) {
      // User has 2FA enabled - return temp token
      const tempToken = jwt.sign(
        { 
          userId: user._id, 
          username: user.username, 
          type: 'temp_2fa' 
        },
        process.env.JWT_SECRET,
        { expiresIn: '5m' } // Short expiry for temp token
      );

      return res.json({
        success: true,
        requiresTwoFA: true,
        tempToken: tempToken,
        username: user.username,
        email: user.email,
        message: '2FA verification required'
      });
    } else {
      // User doesn't have 2FA - complete login
      const token = jwt.sign(
        { 
          userId: user._id, 
          username: user.username 
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Update last login
      user.lastLogin = new Date();
      user.loginCount = (user.loginCount || 0) + 1;
      await user.save();

      return res.json({
        success: true,
        requiresTwoFA: false,
        token: token,
        username: user.username,
        email: user.email
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Login failed' 
    });
  }
});

// New 2FA verification endpoint
router.post('/login/verify-2fa', async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const tempToken = req.headers.authorization?.replace('Bearer ', '');

    if (!tempToken) {
      return res.status(401).json({ 
        success: false, 
        error: 'No temp token provided' 
      });
    }

    // Verify temp token
    let decoded;
    try {
      decoded = jwt.verify(tempToken, process.env.JWT_SECRET);
      if (decoded.type !== 'temp_2fa') {
        throw new Error('Invalid token type');
      }
    } catch (err) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid or expired session' 
      });
    }

    // Get user
    const user = await User.findById(decoded.userId);
    if (!user || !user.twoFactorEnabled) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid user or 2FA not enabled' 
      });
    }

    // Verify TOTP code
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: verificationCode,
      window: 2 // Allow 2 steps of time skew
    });

    if (!verified) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid verification code' 
      });
    }

    // Generate final JWT token
    const finalToken = jwt.sign(
      { 
        userId: user._id, 
        username: user.username 
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update last login
    user.lastLogin = new Date();
    user.loginCount = (user.loginCount || 0) + 1;
    await user.save();

    res.json({
      success: true,
      token: finalToken,
      username: user.username,
      email: user.email,
      message: '2FA verification successful'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to verify 2FA code' 
    });
  }
});
```

## Frontend Implementation Status

✅ **Complete Login Flow**
- Standard username/password login
- 2FA verification step when required
- Proper UI transitions between steps
- Error handling for each step
- Loading states and user feedback

✅ **Real Server Integration**
- Uses actual backend API calls
- Connects to http://localhost:5000/api/Auth
- Handles server errors properly
- Supports both 2FA and non-2FA users

## Backend Requirements

Your backend server must implement these endpoints:

### 1. `/api/Auth/login` - Login endpoint
- Returns `requiresTwoFA: true` with `tempToken` for 2FA users
- Returns `requiresTwoFA: false` with final `token` for non-2FA users

### 2. `/api/Auth/login/verify-2fa` - 2FA verification endpoint  
- Accepts temp token in Authorization header
- Verifies TOTP code and returns final token

### 3. `/api/Auth/2fa/status` - Check 2FA status
### 4. `/api/Auth/2fa/generate` - Generate 2FA secret
### 5. `/api/Auth/2fa/enable` - Enable 2FA
### 6. `/api/Auth/2fa/disable` - Disable 2FA

## Testing the Login Flow

1. **Use your real credentials** from the backend database
2. **Test Standard Login:** Users without 2FA should login directly
3. **Test 2FA Login:** Users with 2FA enabled should see 2FA form
4. **Enter TOTP code** from authenticator app
5. **Test Error Handling:** Try invalid credentials or codes

The login system now connects to your real backend server and uses actual user data from your database!
