# Two-Factor Authentication API Endpoints

This document outlines the backend API endpoints needed for 2FA functionality.

## Base URL
```
http://localhost:5000/api/Auth
```

## Required Dependencies
- `speakeasy` - for generating and verifying TOTP codes
- `qrcode` - for generating QR code images
- Your authentication middleware

```bash
npm install speakeasy qrcode
```

## API Endpoints

### 1. Get 2FA Status
```http
GET /api/auth/2fa/status
Authorization: Bearer <token>
```

**Response:**
```json
{
  "isEnabled": false,
  "secret": null,
  "qrCode": null
}
```

### 2. Generate 2FA Secret
```http
POST /api/auth/2fa/generate
Authorization: Bearer <token>
```

**Response:**
```json
{
  "secret": "JBSWY3DPEHPK3PXP",
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
```

### 3. Enable 2FA
```http
POST /api/auth/2fa/enable
Authorization: Bearer <token>
Content-Type: application/json

{
  "verificationCode": "123456"
}
```

**Response:**
```json
{
  "message": "2FA enabled successfully"
}
```

### 4. Disable 2FA
```http
POST /api/auth/2fa/disable
Authorization: Bearer <token>
Content-Type: application/json

{
  "verificationCode": "123456"
}
```

**Response:**
```json
{
  "message": "2FA disabled successfully"
}
```

## Backend Implementation Example (Node.js/Express)

```javascript
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

// Get 2FA Status
router.get('/2fa/status', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      isEnabled: user.twoFactorEnabled || false,
      secret: user.twoFactorEnabled ? null : user.twoFactorSecret, // Only return if not enabled
      qrCode: null
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Generate 2FA Secret
router.post('/2fa/generate', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    // Generate secret
    const secret = speakeasy.generateSecret({
      name: `ElectionGabon:${user.username}`,
      issuer: 'ElectionGabon'
    });

    // Generate QR code
    const qrCodeDataURL = await QRCode.toDataURL(secret.otpauth_url);

    // Save temporary secret (don't enable 2FA yet)
    user.twoFactorSecret = secret.base32;
    await user.save();

    res.json({
      secret: secret.base32,
      qrCode: qrCodeDataURL
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate 2FA secret' });
  }
});

// Enable 2FA
router.post('/2fa/enable', authenticateToken, async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.twoFactorSecret) {
      return res.status(400).json({ message: 'No 2FA secret found. Generate secret first.' });
    }

    // Verify the code
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: verificationCode,
      window: 2 // Allow 2 steps of time skew
    });

    if (!verified) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    // Enable 2FA
    user.twoFactorEnabled = true;
    await user.save();

    res.json({ message: '2FA enabled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to enable 2FA' });
  }
});

// Disable 2FA
router.post('/2fa/disable', authenticateToken, async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.twoFactorEnabled) {
      return res.status(400).json({ message: '2FA is not enabled' });
    }

    // Verify the code
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: verificationCode,
      window: 2
    });

    if (!verified) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    // Disable 2FA
    user.twoFactorEnabled = false;
    user.twoFactorSecret = null;
    await user.save();

    res.json({ message: '2FA disabled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to disable 2FA' });
  }
});
```

## Database Schema Updates

Add these fields to your User model:

```javascript
// User Schema additions
{
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String,
    default: null
  }
}
```

## Current Frontend Status

✅ **Frontend Implementation Complete**
- Mock 2FA functionality is working
- Uses localStorage to simulate 2FA state
- Accepts any 6-digit code for testing
- QR code generation using public API
- Profile updates in real-time

## Next Steps

1. **Test the current mock implementation** - The 2FA should now work with any 6-digit code
2. **Implement backend endpoints** - Use the code examples above
3. **Update authService** - Uncomment the real API calls and comment out mock code
4. **Test with real TOTP app** - Google Authenticator, Authy, etc.

## Testing the Mock Implementation

1. Open the profile page
2. Click "Security" button or navigate to Security tab
3. Click "Security & 2FA Settings"
4. Click "Generate 2FA Secret"
5. Enter any 6-digit number (like "123456")
6. Click "Enable 2FA"
7. The status should update throughout the profile interface

The mock implementation allows you to test the full 2FA workflow without needing the backend ready.
