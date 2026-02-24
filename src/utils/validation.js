/**
 * Validation utility functions for form validation
 */

/**
 * Validates email address format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  if (!email || !email.trim()) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) && email.trim().length <= 254;
};

/**
 * Validates Canadian phone number
 * Accepts formats: (XXX) XXX-XXXX, XXX-XXX-XXXX, or XXXXXXXXXX
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid Canadian phone format
 */
export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) return false;
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "");
  // Must be exactly 10 digits
  return digitsOnly.length === 10;
};

/**
 * Validates Canadian postal code
 * Accepts formats: A1A 1A1 or A1A1A1
 * @param {string} postalCode - Postal code to validate
 * @returns {boolean} - True if valid Canadian postal code format
 */
export const validatePostalCode = (postalCode) => {
  if (!postalCode || !postalCode.trim()) return false;
  // Remove spaces and convert to uppercase
  const cleaned = postalCode.replace(/\s/g, "").toUpperCase();
  // Canadian postal code pattern: Letter, Digit, Letter, Digit, Letter, Digit
  const postalCodeRegex = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
  return postalCodeRegex.test(cleaned);
};

/**
 * Validates name (first name, last name)
 * Allows letters, spaces, hyphens, and apostrophes
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name format
 */
export const validateName = (name) => {
  if (!name || !name.trim()) return false;
  // Allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(name.trim()) && name.trim().length >= 1 && name.trim().length <= 50;
};

/**
 * Validates card number using Luhn algorithm
 * @param {string} cardNumber - Card number to validate (with or without spaces)
 * @returns {boolean} - True if valid card number
 */
export const validateCardNumber = (cardNumber) => {
  if (!cardNumber || !cardNumber.trim()) return false;
  
  // Remove spaces and non-digits
  const digitsOnly = cardNumber.replace(/\D/g, "");
  
  // Must be 16 digits
  if (digitsOnly.length !== 16) return false;
  
  // Must start with valid card type digit (3, 4, 5, 6)
  const firstDigit = parseInt(digitsOnly[0]);
  if (![3, 4, 5, 6].includes(firstDigit)) return false;
  
  // Luhn algorithm validation
  let sum = 0;
  let isEven = false;
  
  // Process digits from right to left
  for (let i = digitsOnly.length - 1; i >= 0; i--) {
    let digit = parseInt(digitsOnly[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Validates expiry date format and checks if expired
 * @param {string} expiryDate - Expiry date in MM/YY format
 * @returns {object} - { isValid: boolean, isExpired: boolean, error: string }
 */
export const validateExpiryDate = (expiryDate) => {
  if (!expiryDate || !expiryDate.trim()) {
    return { isValid: false, isExpired: false, error: "Expiry date is required" };
  }
  
  // Clean the date: remove all spaces (react-payment-inputs might add spaces like "02 / 33")
  const cleanedDate = expiryDate.trim().replace(/\s+/g, "");
  
  // Check format MM/YY
  const expiryRegex = /^(\d{2})\/(\d{2})$/;
  const match = cleanedDate.match(expiryRegex);
  
  if (!match) {
    return { isValid: false, isExpired: false, error: "Please enter expiry date in MM/YY format" };
  }
  
  const month = parseInt(match[1]);
  const year = parseInt(match[2]);
  
  // Validate month
  if (month < 1 || month > 12) {
    return { isValid: false, isExpired: false, error: "Month must be between 01 and 12" };
  }
  
  // Convert YY to full year (assuming 20YY for years 00-99)
  const fullYear = 2000 + year;
  
  // Get current date
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11
  
  // Check if expired
  if (fullYear < currentYear || (fullYear === currentYear && month < currentMonth)) {
    return { isValid: true, isExpired: true, error: "Card has expired. Please use a valid card" };
  }
  
  // Check if too far in the future (more than 20 years)
  if (fullYear > currentYear + 20) {
    return { isValid: false, isExpired: false, error: "Please enter a valid expiry date" };
  }
  
  return { isValid: true, isExpired: false, error: "" };
};

/**
 * Validates CVV
 * @param {string} cvv - CVV to validate
 * @returns {boolean} - True if valid CVV (3 or 4 digits)
 */
export const validateCVV = (cvv) => {
  if (!cvv || !cvv.trim()) return false;
  const digitsOnly = cvv.replace(/\D/g, "");
  return digitsOnly.length === 3 || digitsOnly.length === 4;
};

/**
 * Validates date of birth and calculates age
 * @param {string} dob - Date of birth in YYYY-MM-DD format
 * @returns {object} - { isValid: boolean, age: number, error: string }
 */
export const validateDateOfBirth = (dob) => {
  if (!dob || !dob.trim()) {
    return { isValid: false, age: null, error: "Date of birth is required" };
  }
  
  const date = new Date(dob);
  
  // Check if valid date
  if (isNaN(date.getTime())) {
    return { isValid: false, age: null, error: "Please enter a valid date" };
  }
  
  // Check if date is in the future
  const now = new Date();
  if (date > now) {
    return { isValid: false, age: null, error: "Date of birth cannot be in the future" };
  }
  
  // Calculate age
  let age = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) {
    age--;
  }
  
  // Check minimum age (18 years)
  if (age < 18) {
    return { isValid: false, age, error: "You must be at least 18 years old" };
  }
  
  // Check maximum age (120 years)
  if (age >= 120) {
    return { isValid: false, age, error: "Please enter a valid date of birth" };
  }
  
  return { isValid: true, age, error: "" };
};

/**
 * Validates address
 * @param {string} address - Address to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateAddress = (address) => {
  if (!address || !address.trim()) {
    return { isValid: false, error: "Address is required" };
  }
  
  const trimmed = address.trim();
  
  if (trimmed.length < 5) {
    return { isValid: false, error: "Address must be at least 5 characters" };
  }
  
  if (trimmed.length > 200) {
    return { isValid: false, error: "Address must be less than 200 characters" };
  }
  
  return { isValid: true, error: "" };
};

/**
 * Validates city name
 * @param {string} city - City name to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateCity = (city) => {
  if (!city || !city.trim()) {
    return { isValid: false, error: "City is required" };
  }
  
  const trimmed = city.trim();
  
  if (trimmed.length < 2) {
    return { isValid: false, error: "City must be at least 2 characters" };
  }
  
  if (trimmed.length > 100) {
    return { isValid: false, error: "City must be less than 100 characters" };
  }
  
  // Allow letters, spaces, and hyphens
  const cityRegex = /^[a-zA-Z\s-]+$/;
  if (!cityRegex.test(trimmed)) {
    return { isValid: false, error: "City can only contain letters, spaces, and hyphens" };
  }
  
  return { isValid: true, error: "" };
};

/**
 * Canadian provinces and territories
 */
export const CANADIAN_PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
  // Abbreviations
  "AB",
  "BC",
  "MB",
  "NB",
  "NL",
  "NT",
  "NS",
  "NU",
  "ON",
  "PE",
  "QC",
  "SK",
  "YT",
];

/**
 * Validates Canadian province
 * @param {string} province - Province to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateProvince = (province) => {
  if (!province || !province.trim()) {
    return { isValid: false, error: "Province is required" };
  }
  
  const trimmed = province.trim();
  const isValid = CANADIAN_PROVINCES.some(
    (p) => p.toLowerCase() === trimmed.toLowerCase()
  );
  
  if (!isValid) {
    return { isValid: false, error: "Please enter a valid Canadian province" };
  }
  
  return { isValid: true, error: "" };
};
