# String-Lib ![npm](https://img.shields.io/npm/v/anneka-string-lib)
 
## Description
npm library of string manipulation functions for FEW 2.1

## Functions
```javascript
capitalize(str) // Capitalize first letter of string

allCaps(str) // Capitalize entire string

capitalizeWords(str) // Capitalize first letter of each word

removeExtraSpace(str) // Remove extra spaces

kebabCase(str, sep = '-') // Removes extra spaces and replaces them with a hyphen (or given separator), makes characters lowercase

snakeCase(str) // Removes extra spaces and replaces them with an underscore, makes all characters lowercase

camelCase(str) // Lowercases the first character of the first word, uppercases the first character of all other words, removes all spaces

shift(str) // Take the first character of a string and move to the end of a string

makeHashTag(str) // Convert the given string to a hash tag

isEmpty(str) // Returns true if the given string is empty or contains only whitespace
```
