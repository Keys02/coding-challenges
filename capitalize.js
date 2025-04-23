// A program that capitalizes a first and letter and leaves the rest of the letters in lower case

function capitalizer(word){
    let newWord = word[0].toUpperCase();
    for(let i=1; i<word.length; i++){
        newWord += word[i].toLowerCase();
    }
    return newWord;
}

console.log(capitalizer("HEAT"));