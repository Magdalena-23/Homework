// Exclaim

function exclaim(programmingLanguage) {
    return `${programmingLanguage} !`
}

console.log(exclaim("JavaScript"));



//Filter books

var books = [
    {title: "Pride and Prejudice", author: "Jane Austen", price: 300},
    {title: "To Kill A Mockingbird", author: "Harper Lee", price: 250},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 500},
    {title: "Crime and Punishment", author: "Fyodor Dostoyevsky", price: 400},
    {title: "Frankenstein", author: "Mary Shelley", price: 300},
]

var filteredBooks = books.filter(books => {
    return books.price < 400;
})

console.log(filteredBooks);



// CountM's

function CountMs(word) {
    var mCounter = 0;
    for(i = 0; i < word.length; i++) {
        if(word[i].toLowerCase() === "m") {
            mCounter++;
        }
    }
    return `${word} has ${mCounter} m's`;
}

console.log(CountMs("Marmalade"));
console.log(CountMs("Camera"));
console.log(CountMs("Ammonium"));



// CountCharacters 

function countCharacters(aWord, whichCharacter) {
    var charactersCounter = 0 ; 
    for(i = 0; i < aWord.length; i++) {
        if(aWord[i].toLowerCase() === whichCharacter.toLowerCase()) {
            charactersCounter++;
        }
    }
    return `${aWord} has ${charactersCounter} ${whichCharacter.toUpperCase()} characters`;
}

console.log(countCharacters("Marmalade", "r"));
console.log(countCharacters("Camera", "a"));
console.log(countCharacters("Ammonium", "m"));



// LargestNumber

function largestNumber(numbersArray) {
    max = numbersArray[0];
    for(i = 0; i < numbersArray.length; i++) {
        if(numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }
    return `The largest number in the array is ${max}`
}

console.log(largestNumber([2, 54, 6, 14, 30, 15, 243, 82]));
