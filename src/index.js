"use strict";
// FEW 2.1 String Challenges
exports.__esModule = true;
// Challenge 1
// capitalize() - makes the first character of a given string uppercase.
// Example: hello world -> Hello world
function capitalize(str) {
    var firstLetter = str[0].toUpperCase();
    var rest = str.slice(1);
    return firstLetter + rest;
}
String.prototype.capitalize = function () {
    return capitalize(this);
};
console.log("challenge 1 [capitalize]: " + capitalize('hello world'));
// Challenge 2
// allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())
// Example: foo bar -> FOO BAR
// Strategy: Make a new function that uses str.toUpperCase(). You can make an alias with a shorter easier to remember name.
function allCaps(str) {
    return str.toUpperCase();
}
String.prototype.allCaps = function () {
    return allCaps(this);
};
console.log("challenge 2 [allCaps]: " + allCaps('s.e.e.s'));
// Challenge 3
// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.
// Example: do all the things -> Do All The Things
// Advanced: capitalizeHeadline() - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!
// Example: the most foo in bar -> The Most Foo in Bar
// Strategies:
// Use str.split() and split on a ' ' space, loop through each of the strings in the array and use your capitalize() function on each elemen. You can use array.map() here and use your capitalize() function as the callback. Last, use array.join() to join all of the elements into a single string.
function capitalizeWords(str) {
    var words = str.split(' ');
    var upperWords = words.map(function (word) { return capitalize(word); });
    return upperWords.join(' ');
}
String.prototype.capitalizeWords = function () {
    return capitalizeWords(this);
};
console.log("challenge 3 [capitalizeWords]: " + capitalizeWords('foo bar'));
// Challenge 4
// removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
function removeExtraSpaces(str) {
    var trimmed = str.trim();
    var chars = trimmed.split(' ');
    var filtered = chars.filter(function (c) { return c !== ''; });
    return filtered.join(' ');
}
String.prototype.removeExtraSpaces = function () {
    return removeExtraSpaces(this);
};
console.log("challenge 4 [removeWhiteSpaces]: " + removeExtraSpaces('     hello  world     '));
// Challenge 5
// kebobCase() - Removes extra spaces and replaces spaces with the hyphen ???-???, and makes all characters lowercase.
function kebabCase(str) {
    var lowercase = str.toLowerCase();
    var chars = lowercase.split(' ');
    var filtered = chars.filter(function (c) {
        var code = c.charCodeAt(0);
        if (code > 96 && code < 123) {
            return true;
        }
        else if (code > 47 && code < 58) {
            return true;
        }
        else if (code === 32 || code === 45) {
            return true;
        }
        return false;
    });
    // remove whitespace
    var removeWhitespace = removeExtraSpaces(filtered.join(' '));
    return removeWhitespace.split(' ').join('-');
}
String.prototype.kebabCase = function () {
    return kebabCase(this);
};
console.log("challenge 5 [kebabCase]: " + kebabCase('meat vegetable meat vegetable'));
// Challenge 6
// snakeCase() - Removes extra space and replaces spaces with an underscore ???_???, and makes all characters lowercase.
function snakeCase(str) {
    return str.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(function (word) { return word.toLowerCase(); })
        .join('_');
}
String.prototype.snakeCase = function () {
    return snakeCase(this);
};
console.log("challenge 6 [snakeCase]: " + snakeCase("Meow meow meow"));
// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    return str.replace(/\W+(.)/g, function (str) {
        return str.toUpperCase();
    });
}
String.prototype.camelCase = function () {
    return camelCase(this);
};
console.log("challenge 7 [camelcase]: " + camelCase("camel case"));
// Challenge 8
// shift() this method will take the first character of a string and move to the end of a string:
function shift(str) {
    var firstLetter = str[0];
    return str.slice(1) + firstLetter;
}
String.prototype.shift = function () {
    return shift(this);
};
console.log("challenge 8 [shift]: " + shift('crimsonsun'));
// Challenge 9
// makeHashTag(str) - This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
// If the give string has more than three words pick the three longest and make the hash tag from those.
function makeHashTag(str) {
    var str_words = str.split(/ |\B(?=[A-Z])/);
    for (var i = 0; i < str_words.length; i++) {
        str_words[i] = '#' + str_words[i][0].toUpperCase() + str_words[i].substr(1);
    }
    return str_words.join();
}
String.prototype.makeHashTag = function () {
    return makeHashTag(this);
};
console.log("challenge 9 [hashtag]: " + makeHashTag('doggy'));
module.exports = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    removeExtraSpaces: removeExtraSpaces,
    kebabCase: kebabCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag
};
exports["default"] = {
    entry: 'src/index.js'
};
