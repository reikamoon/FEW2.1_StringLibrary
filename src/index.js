// FEW 2.1 String Challenges

// Challenge 1

// capitalize() - makes the first character of a given string uppercase.

// Example: hello world -> Hello world

function capitalize(str) {
    const firstLetter = str[0].toUpperCase()
    const rest = str.slice(1)
    return firstLetter + rest
}

console.log(capitalize('hello world'))

// Challenge 2

// allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())

// Example: foo bar -> FOO BAR

// Strategy: Make a new function that uses str.toUpperCase(). You can make an alias with a shorter easier to remember name.

function allCaps(str) {
    return str.toUpperCase()
}

console.log( allCaps('s.e.e.s'))

// Challenge 3

// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.

// Example: do all the things -> Do All The Things

// Advanced: capitalizeHeadline() - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!

// Example: the most foo in bar -> The Most Foo in Bar

// Strategies:

// Use str.split() and split on a ' ' space, loop through each of the strings in the array and use your capitalize() function on each elemen. You can use array.map() here and use your capitalize() function as the callback. Last, use array.join() to join all of the elements into a single string.

function capitalizeWords(str) {
    const words = str.split(' ')
    const upperWords = words.map( word => capitalize(word) )
    return upperWords.join(' ')
}
console.log( capitalizeWords('foo bar'))