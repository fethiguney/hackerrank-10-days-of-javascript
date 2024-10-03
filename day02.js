function vowelsAndConsonants(s) {
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // First, print each vowel in order
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }

    // Then, print each consonant in order
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }
}