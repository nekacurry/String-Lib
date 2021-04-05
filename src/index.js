
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

// CHALLENGE 5 - Removes extra spaces and replaces them with a hyphen, makes characters lowercase
function kebobCase(str, sep = "-") {
  const lowerStr = str.toLowerCase()
  const chars = lowerStr.split('')
  const filter = chars.filter( (c) => {
    const code = c.charCodeAt(0)
    if (code > 96 && code < 123) { // keep letters
      return true
    } else if (code > 47 && code < 58) { // keep numbers
      return true
    } else if (code === 32 || code === sep.charCodeAt(0)) { // keep space and hypen
      return true
    }
    return false
  })
  const spaceFilter = removeExtraSpaces(filter.join(''))
  return spaceFilter.split(' ').join(sep)
}

// CHALLENGE 6 - Removes extra spaces and replaces them with an underscore, makes all characters lowercase
function snakeCase(str){
  return kebobCase(str, "_")
}

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
console.log(kebobCase('     Hello World!!!    a-hypenated-word    1, 3, 5, and 77     '))
console.log(snakeCase('     Hello World!!!    a-hypenated-word    1, 3, 5, and 77     '))