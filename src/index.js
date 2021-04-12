
// CHALLENGE 1 - Capitalize first letter of string
function capitalize(str) {
  if (str != ''){
    var first = str[0].toUpperCase()
    var rest = str.slice(1)
  } else {
    return ''
  }
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

// CHALLENGE 7 - Lowercases the first character of the first word, uppercases the first character of all other words, removes all spaces
function camelCase(str) {
  const words = str.split(' ')
  const camelWords = words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase()
    }
    return capitalize(word)
  })
  return camelWords.join('')
}

// CHALLENGE 8 - Take the first character of a string and move to the end of a string
function shift(str) {
  const slice = str.slice(1)
  const first = str[0]
  return slice + first
}

// CHALLENGE 9 - Convert the given string to a hash tag
function makeHashTag(str) {
  const words = removeExtraSpaces(str).split(' ')
  const hashTags = []
  if (words.length > 3) {
    words.sort((a, b) => {
      b.length - a.length
    })
    for (var i = 0; i < 3; i++) {
      hashTags.push('#' + capitalize(words[i]))
    }
  }
  return hashTags
}

// CHALLENGE 10 - Returns true if the given string is empty or contains only whitespace
function isEmpty(str) {
  let empty = true
  const words = str.trim().split('')
  for (let i = 0; i < words.length; i++) {
    if (words[i] != (' ' || '\n' || '\r' || '\t')) {
      empty = false
    } 
    else {
      empty = true
    }
  }
  return empty
}

// CONSOLE LOG TESTS
console.log(capitalize("hello world!")) // 1
console.log(allCaps("hello world!")) // 2
console.log(capitalizeWords("it's time to duel")) // 3
console.log(removeExtraSpaces('   Hello    world!   ')) // 4
console.log(kebobCase('     Hello World!!!    a-hypenated-word    1, 3, 5, and 77     ')) // 5 
console.log(snakeCase('     Hello World!!!    a-hypenated-word    1, 3, 5, and 77     ')) // 6
console.log(camelCase('Hello world foo bar')) // 7
console.log(shift('Hello World')) // 8
console.log(makeHashTag('Amazing bongo drums for sale')) // 9
console.log(isEmpty('     \n            '))

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty
}