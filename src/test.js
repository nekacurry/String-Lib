const sl = require('./index.js')


// TEST CAPITALIZE FUNCTION
test('Capitalize', () => {
  expect(sl.capitalize('capitalize')).toBe('Capitalize')
  expect(sl.capitalize('')).toBe('')
  expect(sl.capitalize('Hello world')).toBe('Hello world')
  expect(sl.capitalize('FOO BAR')).toBe('FOO BAR')
})


// TEST ALL CAPS FUNCTION
test('All Caps', () => {
  expect(sl.allCaps('all caps')).toBe('ALL CAPS')
  expect(sl.allCaps('FOO')).toBe('FOO')
  expect(sl.allCaps('')).toBe('')
  expect(sl.allCaps('Foo Bar.')).toBe('FOO BAR.')
})


// TEST CAPITALIZE WORDS FUNCTION 
test('Capitalize Words', () => {
  expect(sl.capitalizeWords('capitalize words')).toBe('Capitalize Words')
  expect(sl.capitalizeWords('capitalize')).toBe('Capitalize')
  expect(sl.capitalizeWords('')).toBe('')
  expect(sl.capitalizeWords('I Am Capitalized')).toBe('I Am Capitalized')
})


// TEST REMOVE EXTRA SPACES FUNCTION
test('Remove Extra Spaces', () => {
  expect(sl.removeExtraSpaces('   remove   extra   spaces   ')).toBe('remove extra spaces')
  expect(sl.removeExtraSpaces('')).toBe('')
  expect(sl.removeExtraSpaces('remove space')).toBe('remove space')
  expect(sl.removeExtraSpaces('     ')).toBe('')
})


// TEST KEBOB CASE FUNCTION
test('kebobCase', () => {
  expect(sl.kebobCase('kebob case')).toBe('kebob-case')
  expect(sl.kebobCase('more kebob_case')).toBe('more-kebobcase')
  expect(sl.kebobCase('kebob-case')).toBe('kebob-case')
  expect(sl.kebobCase('')).toBe('')
})


//TEST SNAKE CASE FUNCTION
test('snakeCase', () => {
  expect(sl.snakeCase('snake case')).toBe('snake_case')
  expect(sl.snakeCase('')).toBe('')
  expect(sl.snakeCase('snake_case')).toBe('snake_case')
})


// TEST CAMEL CASE FUNCTION
test('camelCase', () => {
  expect(sl.camelCase('camel case')).toBe('camelCase')
  expect(sl.camelCase('')).toBe('')
  expect(sl.camelCase('camel Case')).toBe('camelCase')
  expect(sl.camelCase('more camel case')).toBe('moreCamelCase')
})


// TEST SHIFTED WORDS FUNCTION
test('shift', () => {
  expect(sl.shift('shift')).toBe('hifts')
  expect(sl.shift('')).toBe('')
  expect(sl.shift('this is a shift function')).toBe('his is a shift functiont')
})


// TEST MAKE HASH TAG FUNCTION
test('makeHashTag', () => {
  expect(sl.makeHashTag('Amazing bongo drums for sale')).toStrictEqual(["#Amazing", "#Bongo", "#Drums"])
  expect(sl.makeHashTag('')).toStrictEqual([])
})


// TEST IS EMPTY FUNCTION
test('isEmpty', () => {
  expect(sl.isEmpty('    ')).toBe(true)
  expect(sl.isEmpty('isempty')).toBe(false)
  expect(sl.isEmpty(' \n    ')).toBe(true)
})