#!/usr/bin/env python3
"""
Enhanced script to fix date formats in all database files
Handles both ISO string dates and MongoDB extended JSON date format
"""

import json
import os
from datetime import datetime, timedelta

def validate_datetime_string(date_string):
    """Validate that a string is a proper ISO datetime format"""
    try:
        datetime.fromisoformat(date_string.replace('Z', '+00:00'))
        return True
    except (ValueError, AttributeError):
        return False

def convert_mongodb_date_to_iso(mongodb_date):
    """Convert MongoDB date format to ISO string"""
    try:
        if isinstance(mongodb_date, dict) and "$date" in mongodb_date:
            if "$numberLong" in mongodb_date["$date"]:
                # Convert timestamp to datetime
                timestamp_ms = int(mongodb_date["$date"]["$numberLong"])
                dt = datetime.fromtimestamp(timestamp_ms / 1000.0)
                return dt.isoformat()
            elif isinstance(mongodb_date["$date"], str):
                # Already in ISO format
                return mongodb_date["$date"]
        elif isinstance(mongodb_date, str):
            # Already a string, validate it
            if validate_datetime_string(mongodb_date):
                return mongodb_date
        
        # If we can't convert, return current time
        return datetime.now().isoformat()
    except Exception:
        return datetime.now().isoformat()

def ensure_proper_dates_mongodb(item):
    """Ensure CreatedAt and UpdatedAt are proper datetime strings for MongoDB format files"""
    current_time = datetime.now()
    
    # Handle CreatedAt
    if 'CreatedAt' in item:
        if isinstance(item['CreatedAt'], dict):
            item['CreatedAt'] = convert_mongodb_date_to_iso(item['CreatedAt'])
        elif not validate_datetime_string(str(item['CreatedAt'])):
            item['CreatedAt'] = current_time.isoformat()
    else:
        item['CreatedAt'] = current_time.isoformat()
    
    # Handle UpdatedAt
    if 'UpdatedAt' in item:
        if isinstance(item['UpdatedAt'], dict):
            item['UpdatedAt'] = convert_mongodb_date_to_iso(item['UpdatedAt'])
        elif not validate_datetime_string(str(item['UpdatedAt'])):
            item['UpdatedAt'] = current_time.isoformat()
    else:
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

def fix_dates_in_file(file_path):
    """Fix dates in a specific file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        # Handle both single objects and arrays
        if isinstance(data, list):
            for item in data:
                ensure_proper_dates_mongodb(item)
        elif isinstance(data, dict):
            ensure_proper_dates_mongodb(data)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=2, ensure_ascii=False)
        
        return True, len(data) if isinstance(data, list) else 1
    except Exception as e:
        return False, f"Error: {e}"

def main():
    """Main function to fix all database files"""
    print("🔧 Fixing date formats in all database files...")
    print("=" * 60)
    
    # List of files to process
    files_to_process = ['data.json', 'Candidate', 'Office', 'Vote']
    
    total_files = 0
    total_records = 0
    files_fixed = 0
    
    for filename in files_to_process:
        if os.path.exists(filename):
            total_files += 1
            print(f"\n📄 Processing {filename}...")
            
            success, result = fix_dates_in_file(filename)
            
            if success:
                files_fixed += 1
                total_records += result
                print(f"   ✅ Fixed {result} records")
            else:
                print(f"   ❌ Failed to process: {result}")
        else:
            print(f"\n📄 {filename} not found, skipping...")
    
    print("\n" + "=" * 60)
    print("📊 SUMMARY:")
    print(f"   • Total files processed: {total_files}")
    print(f"   • Files successfully fixed: {files_fixed}")
    print(f"   • Total records processed: {total_records}")
    
    if files_fixed == total_files:
        print("\n🎉 All database files have been updated with proper date formats!")
    else:
        print(f"\n⚠️  {total_files - files_fixed} file(s) had issues")

if __name__ == "__main__":
    main()
