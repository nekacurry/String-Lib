const sl = require('./index.js')

test('Capitalize', () => {
  expect(sl.capitalize('capitalize')).toBe('Capitalize')
  expect(sl.capitalize('')).toBe('')
  expect(sl.capitalize('Hello world')).toBe('Hello world')
  expect(sl.capitalize('FOO BAR')).toBe('FOO BAR')
})

test('All Caps', () => {
  expect(sl.allCaps('all caps')).toBe('ALL CAPS')
  expect(sl.allCaps('FOO')).toBe('FOO')
  expect(sl.allCaps('')).toBe('')
  expect(sl.allCaps('Foo Bar.')).toBe('FOO BAR.')
})

test('Capitalize Words', () => {
  expect(sl.capitalizeWords('capitalize words')).toBe('Capitalize Words')
  expect(sl.capitalizeWords('capitalize')).toBe('Capitalize')
  expect(sl.capitalizeWords('')).toBe('')
  expect(sl.capitalizeWords('I Am Capitalized')).toBe('I Am Capitalized')
})


test('Remove Extra Spaces', () => {
  expect(sl.removeExtraSpaces('   remove   extra   spaces   ')).toBe('remove extra spaces')
  expect(sl.removeExtraSpaces('')).toBe('')
  expect(sl.removeExtraSpaces('remove space')).toBe('remove space')
  expect(sl.removeExtraSpaces('     ')).toBe('')
})

test('kebobCase', () => {
  expect(sl.kebobCase('kebob case')).toBe('kebob-case')
})

test('snakeCase', () => {
  expect(sl.snakeCase('snake case')).toBe('snake_case')
})

test('camelCase', () => {
  expect(sl.camelCase('camel case')).toBe('camelCase')
})

test('shift', () => {
  expect(sl.shift('shift')).toBe('hifts')
})

test('makeHashTag', () => {
  expect(sl.makeHashTag('Amazing bongo drums for sale')).toStrictEqual(["#Amazing", "#Bongo", "#Drums"])
})

test('isEmpty', () => {
  expect(sl.isEmpty('    ')).toBe(true)
  expect(sl.isEmpty('isempty')).toBe(false)
})