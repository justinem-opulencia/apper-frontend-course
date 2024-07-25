function reverse(word) {
    return word.split('').reverse().join('')
}

console.log('======REVERSE USING SPLIT, REVERSE, JOIN======')
wordList = ['Hello World', 'Justine Opulencia', 'Test test testing']
for (idx = 0; idx < wordList.length; idx++) {
    console.log(`${wordList[idx]}: ${reverse(wordList[idx])}`)
}
const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'
console.log('\n')

function reverse2(word) {
    result = ''
    temp = word
    for (idx = 0; idx < word.length; idx++) {
        result += temp.slice(-1)
        temp = temp.slice(0, -1)
    }
    return result
}

console.log('======REVERSE USING FOR======')
for (i = 0; i < wordList.length; i++) {
    console.log(`${wordList[i]}: ${reverse2(wordList[i])}`)
}
const word2 = 'hello'
const reversedWord2 = reverse2(word)
console.log(reversedWord2) // 'olleh'
console.log('\n')