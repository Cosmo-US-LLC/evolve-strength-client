# Validation Enhancement Guide for FounderOfferPayment

## Overview
This guide outlines comprehensive validation enhancements for the FounderOfferPayment form components.

## Validation Requirements

### PrimaryMemberDetails Component

#### First Name & Last Name
- **Required**: Yes
- **Min Length**: 1 character (after trim)
- **Max Length**: 50 characters
- **Pattern**: Only letters, spaces, hyphens, and apostrophes allowed
- **Error Messages**:
  - Empty: "First/Last name is required"
  - Too long: "Name must be less than 50 characters"
  - Invalid characters: "Name can only contain letters, spaces, hyphens, and apostrophes"

#### Email Address
- **Required**: Yes
- **Format**: Standard email regex validation
- **Max Length**: 254 characters (RFC 5321)
- **Error Messages**:
  - Empty: "Email is required"
  - Invalid format: "Please enter a valid email address"
  - Too long: "Email must be less than 254 characters"

#### Phone Number
- **Required**: Yes
- **Format**: Canadian phone number format
- **Pattern**: Accepts formats like:
  - (XXX) XXX-XXXX
  - XXX-XXX-XXXX
  - XXXXXXXXXX (10 digits)
- **Validation**: Must contain exactly 10 digits
- **Error Messages**:
  - Empty: "Phone number is required"
  - Invalid format: "Please enter a valid 10-digit phone number"

#### Address
- **Required**: Yes
- **Min Length**: 5 characters
- **Max Length**: 200 characters
- **Error Messages**:
  - Empty: "Address is required"
  - Too short: "Address must be at least 5 characters"
  - Too long: "Address must be less than 200 characters"

#### Province
- **Required**: Yes
- **Format**: Canadian province/territory codes or full names
- **Validation**: Should match valid Canadian provinces
- **Error Messages**:
  - Empty: "Province is required"
  - Invalid: "Please enter a valid Canadian province"

#### City
- **Required**: Yes
- **Min Length**: 2 characters
- **Max Length**: 100 characters
- **Pattern**: Only letters, spaces, hyphens
- **Error Messages**:
  - Empty: "City is required"
  - Too short: "City must be at least 2 characters"
  - Too long: "City must be less than 100 characters"

#### Postal Code
- **Required**: Yes
- **Format**: Canadian postal code format (A1A 1A1)
- **Pattern**: Accepts with or without space: A1A1A1 or A1A 1A1
- **Validation**: Must match Canadian postal code pattern
- **Error Messages**:
  - Empty: "Postal code is required"
  - Invalid format: "Please enter a valid Canadian postal code (e.g., A1A 1A1)"

#### Date of Birth
- **Required**: Yes
- **Validation**: 
  - Must be a valid date
  - Must be in the past
  - Age must be at least 18 years old
  - Age must be less than 120 years old
- **Error Messages**:
  - Empty: "Date of birth is required"
  - Future date: "Date of birth cannot be in the future"
  - Too young: "You must be at least 18 years old"
  - Too old: "Please enter a valid date of birth"

#### Gender
- **Required**: Yes
- **Options**: Male, Female, Other, Prefer not to say
- **Error Messages**:
  - Empty: "Gender is required"

### PaymentInformation Component

#### Card Number
- **Required**: Yes
- **Format**: 16 digits (with spaces: XXXX XXXX XXXX XXXX)
- **Validation**: 
  - Must be exactly 16 digits (after removing spaces)
  - Must pass Luhn algorithm validation
  - Must start with valid card type digit (3, 4, 5, 6)
- **Error Messages**:
  - Empty: "Card number is required"
  - Invalid length: "Card number must be 16 digits"
  - Invalid Luhn: "Please enter a valid card number"
  - Invalid card type: "Card number must start with a valid digit"

#### Expiry Date
- **Required**: Yes
- **Format**: MM/YY
- **Validation**:
  - Must be valid format (MM/YY)
  - Month must be between 01-12
  - Must not be expired (current date or future)
  - Year must be current year or future (within reasonable range)
- **Error Messages**:
  - Empty: "Expiry date is required"
  - Invalid format: "Please enter expiry date in MM/YY format"
  - Invalid month: "Month must be between 01 and 12"
  - Expired: "Card has expired. Please use a valid card"

#### CVV
- **Required**: Yes
- **Format**: 3 or 4 digits
- **Validation**: 
  - Must be exactly 3 or 4 digits
  - Must be numeric only
- **Error Messages**:
  - Empty: "CVV is required"
  - Invalid format: "CVV must be 3 or 4 digits"

#### Terms and Conditions
- **Required**: Yes (both checkboxes)
- **Error Messages**:
  - Not checked: "Please confirm you have read our Terms and Conditions"
  - Authorization not checked: "Please accept the authorization and agreement"

### AddFamilyMembers Component

#### First Name & Last Name (for each family member)
- **Required**: If family member is added, name is required
- **Min Length**: 1 character (after trim)
- **Max Length**: 50 characters
- **Pattern**: Only letters, spaces, hyphens, and apostrophes
- **Error Messages**: Same as PrimaryMemberDetails

#### Email (for each family member)
- **Required**: If family member is added, email is required
- **Format**: Standard email validation
- **Max Length**: 254 characters
- **Error Messages**: Same as PrimaryMemberDetails

#### Phone (for each family member)
- **Required**: Optional (as per current implementation)
- **Format**: If provided, must be valid Canadian phone number
- **Error Messages**: 
  - Invalid format: "Please enter a valid 10-digit phone number"

## Implementation Notes

1. **Real-time Validation**: Clear errors as user types
2. **Focus Management**: Focus on first error field after validation fails
3. **Consistent Error Styling**: Use existing `input-error` class
4. **Accessibility**: Ensure error messages are properly associated with inputs
5. **User Experience**: Provide helpful, specific error messages

## Validation Helper Functions

Create reusable validation functions:
- `validateEmail(email)`
- `validatePhone(phone)` - Canadian format
- `validatePostalCode(postalCode)` - Canadian format
- `validateCardNumber(cardNumber)` - Luhn algorithm
- `validateExpiryDate(expiryDate)` - Format and expiration check
- `validateAge(dob)` - Age calculation and validation
- `validateName(name)` - Name format validation
