const strings = require('./index');

test('capitalize', () => {
    expect(strings.capitalize('mochi')).toBe('Mochi')
    expect(strings.capitalize('bISKIT')).toBe('BISKIT')
})

test('allCaps', () => {
    expect(strings.allCaps('sees')).toBe('SEES')
    expect(strings.allCaps('ymca')).toBe('YMCA')
})

test('capitalizeWords', () => {
    expect(strings.capitalizeWords('my melody')).toBe('My Melody')
    expect(strings.capitalizeWords('i love you')).toBe('I Love You')
})

test('removeExtraSpaces', () => {
    expect(strings.removeExtraSpaces('mary     had     a  little   lamb ')).toBe('mary had a little lamb')
    expect(strings.removeExtraSpaces('little lamb,    little lamb')).toBe('little lamb, little lamb')
})

test('kebabCase', () => {
    expect(strings.kebabCase('meat vegetable meat vegetable')).toBe('meat-vegetable-meat-vegetable')
    expect(strings.kebabCase('once bitten twice confident')).toBe('once-bitten-twice-confident')
})

test('snakeCase', () => {
    expect(strings.snakeCase('meow meow meow')).toBe('meow_meow_meow')
    expect(strings.snakeCase('hill hill hill')).toBe('hill_hill_hill')
})

test('camelCase', () => {
    expect(strings.camelCase('my function')).toBe('my Function')
    expect(strings.camelCase('mischevous Function')).toBe('mischevous Function')
})

test('shift', () => {
    expect(strings.shift('azuremoon')).toBe('zuremoona')
    expect(strings.shift('oliveoil')).toBe('liveoilo')
})

test('makeHashTag', () => {
    expect(strings.makeHashTag('doggy')).toBe('#Doggy')
    expect(strings.makeHashTag('selfie')).toBe('#Selfie')
})