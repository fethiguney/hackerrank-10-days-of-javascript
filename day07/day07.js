
function regexVar() {
    // Return a RegExp object that matches strings beginning and ending with the same vowel
    const re = /^([aeiou]).*\1$/;
    return re;
}

const re = regexVar();

console.log(re.test('bcd'));    // false
console.log(re.test('abcd'));   // false
console.log(re.test('abcda'));  // true