#!/usr/bin/env python3
"""
Script to validate that all CreatedAt and UpdatedAt fields are proper dates
"""

import json
import os
from datetime import datetime

def validate_datetime_string(date_string):
    """Validate that a string is a proper ISO datetime format"""
    try:
        datetime.fromisoformat(date_string.replace('Z', '+00:00'))
        return True
    except (ValueError, AttributeError):
        return False

def validate_dates_in_file(file_path):
    """Validate dates in a JSON file"""
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            
        issues = []
        total_records = 0
        
        # Handle both single objects and arrays
        if isinstance(data, list):
            records = data
        elif isinstance(data, dict):
            records = [data]
        else:
            return False, ["Invalid JSON structure"]
        
        for i, item in enumerate(records):
            total_records += 1
            
            # Check CreatedAt
            if 'CreatedAt' not in item:
                issues.append(f"Record {i}: Missing CreatedAt field")
            elif not validate_datetime_string(str(item['CreatedAt'])):
                issues.append(f"Record {i}: Invalid CreatedAt format: {item['CreatedAt']}")
            
            # Check UpdatedAt
            if 'UpdatedAt' not in item:
                issues.append(f"Record {i}: Missing UpdatedAt field")
            elif not validate_datetime_string(str(item['UpdatedAt'])):
                issues.append(f"Record {i}: Invalid UpdatedAt format: {item['UpdatedAt']}")
            
            # Check if UpdatedAt >= CreatedAt
            if 'CreatedAt' in item and 'UpdatedAt' in item:
                try:
                    created_dt = datetime.fromisoformat(str(item['CreatedAt']).replace('Z', '+00:00'))
                    updated_dt = datetime.fromisoformat(str(item['UpdatedAt']).replace('Z', '+00:00'))
                    
                    if updated_dt < created_dt:
                        issues.append(f"Record {i}: UpdatedAt ({item['UpdatedAt']}) is before CreatedAt ({item['CreatedAt']})")
                except Exception as e:
                    issues.append(f"Record {i}: Error parsing dates: {e}")
        
        return len(issues) == 0, issues, total_records
        
    except Exception as e:
        return False, [f"Error reading file: {e}"], 0

def main():
    """Main validation function"""
    print("🔍 Validating date fields in JSON files...")
    print("=" * 50)
    
    # List of files to validate
    files_to_validate = ['data.json', 'Candidate', 'Office', 'Vote']
    
    total_files = 0
    total_records = 0
    files_with_issues = 0
    
    for filename in files_to_validate:
        if os.path.exists(filename):
            total_files += 1
            print(f"\n📄 Checking {filename}...")
            
            is_valid, issues, record_count = validate_dates_in_file(filename)
            total_records += record_count
            
            if is_valid:
                print(f"   ✅ All {record_count} records have valid dates")
            else:
                files_with_issues += 1
                print(f"   ❌ Found {len(issues)} issues in {record_count} records:")
                for issue in issues[:10]:  # Show first 10 issues
                    print(f"      • {issue}")
                if len(issues) > 10:
                    print(f"      ... and {len(issues) - 10} more issues")
        else:
            print(f"\n📄 {filename} not found, skipping...")
    
    print("\n" + "=" * 50)
    print("📊 SUMMARY:")
    print(f"   • Total files checked: {total_files}")
    print(f"   • Total records checked: {total_records}")
    print(f"   • Files with issues: {files_with_issues}")
    print(f"   • Files with valid dates: {total_files - files_with_issues}")
    
    if files_with_issues == 0:
        print("\n🎉 All date fields are properly formatted!")
    else:
        print(f"\n⚠️  {files_with_issues} file(s) need attention")

if __name__ == "__main__":
    main()
