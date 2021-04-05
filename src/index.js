
// CHALLENGE 1 - Capitalize first letter of string
function capitalize(str) {
  var first = str[0].toUpperCase()
  var rest = str.slice(1)
  return first + rest
}


// CHALLENGE 2 - Capitalize entire string
function allCaps(str) {
  return str.toUpperCase()
}


// CHALLENGE 3 - Capitalize first letter of each word
function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}


// CHALLENGE 4 - Remove extra spaces
function removeExtraSpaces(str) {
  const chars = str.split(' ')
  const filtered = chars.filter( word => word !== '')
  return filtered.join(' ')
}

// CHALLENGE 5 -

// CHALLENGE 6 -

// CHALLENGE 7 -

// CHALLENGE 8 -

// CHALLENGE 9 -

// CHALLENGE 10 -

// CONSOLE LOG TESTS
console.log(capitalize("hello world!"))
console.log(allCaps("hello world!"))
console.log(capitalizeWords("hello world! how are you?"))
console.log(capitalizeWords("it's time to duel"))
console.log(removeExtraSpaces('   Hello    world!   '))