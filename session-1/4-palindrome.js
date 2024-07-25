function isPalindrome(word) {
    if (word.length == 0 || typeof word !== 'string') {
        return 'Please enter a word'
    }
    else if (word.length == 1) {
        return true
    }
    while(word.length >= 0) {
        if (word.length < 2) {
            return true
        }
        if (!(word[0] === word.slice(-1))) {
            return false
        }
        else {
            word = word.slice(1, -1)
        }
    }
}

console.log('======PALINDROME======')
wordList = ['racecar', 'nissin', 'tinapay', 5, '']
for (idx = 0; idx < wordList.length; idx++) {
    console.log(`${wordList[idx]}: ${isPalindrome(wordList[idx])}`)
}
const word = 'racecar'
if (isPalindrome(word)) {
  console.log('It is a palindrome!')
} else {
  console.log('It is not a palindrome!')
}
console.log('\n')