import json
from datetime import datetime, timedelta

def validate_datetime_string(date_string):
    """Validate that a string is a proper ISO datetime format"""
    try:
        datetime.fromisoformat(date_string.replace('Z', '+00:00'))
        return True
    except (ValueError, AttributeError):
        return False

def ensure_proper_dates(item):
    """Ensure CreatedAt and UpdatedAt are proper datetime objects/strings"""
    current_time = datetime.now()
    
    # Handle CreatedAt
    if 'CreatedAt' not in item or not validate_datetime_string(str(item['CreatedAt'])):
        item['CreatedAt'] = current_time.isoformat()
    
    # Handle UpdatedAt
    if 'UpdatedAt' not in item or not validate_datetime_string(str(item['UpdatedAt'])):
        item['UpdatedAt'] = current_time.isoformat()
    
    # Ensure UpdatedAt is not before CreatedAt
    try:
        created_dt = datetime.fromisoformat(item['CreatedAt'].replace('Z', '+00:00'))
        updated_dt = datetime.fromisoformat(item['UpdatedAt'].replace('Z', '+00:00'))
        
        if updated_dt < created_dt:
            item['UpdatedAt'] = created_dt.isoformat()
    except (ValueError, AttributeError):
        # If parsing fails, set both to current time
        item['CreatedAt'] = current_time.isoformat()
        item['UpdatedAt'] = current_time.isoformat()

def update_json_file(file_path, start_time, end_time):
    try:
        with open(file_path, 'r+') as file:
            data = json.load(file)
            start_hour = 8  # 8 AM
            end_hour = 18  # 6 PM
            
            # Calculate time interval
            time_interval = (end_hour - start_hour) / len(data)
            
            for i, item in enumerate(data):
                base_date = datetime(2025, 8, 2)
                created_at_hour = start_hour + (i * time_interval)
                updated_at_hour = created_at_hour + time_interval / 2  # Make UpdatedAt slightly later than CreatedAt
                
                # Ensure the hours are within the bounds and handle minutes properly
                created_hour = int(created_at_hour)
                created_minute = int((created_at_hour % 1) * 60)
                updated_hour = int(updated_at_hour)
                updated_minute = int((updated_at_hour % 1) * 60)
                
                # Handle minute overflow (when minute >= 60)
                if created_minute >= 60:
                    created_hour += 1
                    created_minute = 0
                if updated_minute >= 60:
                    updated_hour += 1
                    updated_minute = 0
                
                # Ensure hours don't exceed 23
                created_hour = min(created_hour, 23)
                updated_hour = min(updated_hour, 23)
                
                # Create proper datetime objects
                created_at = base_date.replace(
                    hour=created_hour, 
                    minute=created_minute, 
                    second=0, 
                    microsecond=0
                )
                updated_at = base_date.replace(
                    hour=updated_hour, 
                    minute=updated_minute, 
                    second=0, 
                    microsecond=0
                )
                
                # Ensure UpdatedAt is always after or equal to CreatedAt
                if updated_at < created_at:
                    updated_at = created_at + timedelta(minutes=1)
                
                # Convert to ISO format string for JSON storage
                item['CreatedAt'] = created_at.isoformat()
                item['UpdatedAt'] = updated_at.isoformat()
                
                # Validate the dates are properly formatted
                ensure_proper_dates(item)
            
            file.seek(0)
            json.dump(data, file, indent=4)
            file.truncate()
        
        print(f"JSON file {file_path} updated successfully.")
    except Exception as e:
        print(f"An error occurred updating {file_path}: {e}")

def fix_all_dates_in_directory(directory_path='.'):
    """Fix dates in all JSON files in the current directory"""
    import os
    
    for filename in os.listdir(directory_path):
        if filename.endswith('.json'):
            file_path = os.path.join(directory_path, filename)
            try:
                with open(file_path, 'r+') as file:
                    data = json.load(file)
                    
                    # Handle both single objects and arrays
                    if isinstance(data, list):
                        for item in data:
                            ensure_proper_dates(item)
                    elif isinstance(data, dict):
                        ensure_proper_dates(data)
                    
                    file.seek(0)
                    json.dump(data, file, indent=4)
                    file.truncate()
                
                print(f"Fixed dates in {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# Usage
if __name__ == "__main__":
    # Fix specific file with time distribution
    file_path = 'data.json'
    update_json_file(file_path, '08:00', '18:00')
    
    # Fix all JSON files to ensure proper date formats
    fix_all_dates_in_directory()