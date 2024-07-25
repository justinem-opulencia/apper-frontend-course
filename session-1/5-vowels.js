function convertToVowels(word) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    wordChars = word.split('')
    for (idx = 0; idx < wordChars.length; idx++) {
        if (!vowels.includes(wordChars[idx])) {
            wordChars[idx] = ''
        }
    }
    return wordChars.join('')
}

console.log('======CONVERT TO VOWEL======')
wordList = ['sdahoiwqeoiqdjaksld', 'racecar', 'nissin', 'tinapay']
for (i = 0; i < wordList.length; i++) {
    console.log(`${wordList[i]}: ${convertToVowels(wordList[i])}`)
}
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo
console.log('\n')

function convertToVowels2(word) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    result = ''
    for (idx = 0; idx < word.length; idx++) {
        if (vowels.includes(word[idx])) {
            result += word[idx]
        }
    }
    return result
}

console.log('======CONVERT TO VOWEL v2======')
wordList = ['sdahoiwqeoiqdjaksld', 'racecar', 'nissin', 'tinapay']
for (i = 0; i < wordList.length; i++) {
    console.log(`${wordList[i]}: ${convertToVowels2(wordList[i])}`)
}
const word2 = 'thisissomeword'
const wordWithOnlyVowels2 = convertToVowels2(word)
console.log(wordWithOnlyVowels2) // iioeo
console.log('\n')