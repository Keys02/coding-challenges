function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = 0;
    let longestWord = "";

    for (let word of words) {
        if (word.length > longest) {
            longest = word.length;
            longestWord =  word;
        }
    }
    
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));