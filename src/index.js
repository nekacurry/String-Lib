
// CHALLENGE 1 - Capitalize first letter of string
function capitalize(str) {
  var first = str[0].toUpperCase()
  var rest = str.slice(1)
  return first + rest
}

console.log(capitalize("hello world!"))

// CHALLENGE 2 - Capitalize entire string
function allCaps(str) {
  return str.toUpperCase()
}

console.log(allCaps("hello world!"))

// CHALLENGE 3 - Capitalize first letter of each word
function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}

console.log(capitalizeWords("hello world! how are you?"))
console.log(capitalizeWords("it's time to duel"))

// CHALLENGE 4 -

// CHALLENGE 5 -

// CHALLENGE 6 -

// CHALLENGE 7 -

// CHALLENGE 8 -

// CHALLENGE 9 -

// CHALLENGE 10 -