//THE HELLO WORLD EXERCISE

var code = "de"

if(code == "en") {
    console.log("Hello World");
} else if(code == "de") {
    console.log("Hallo Welt");
} else if(code == "es") {
    console.log("Hola Mundo");
} else {
    console.error("Language not found.")
}


//SEASONS 

var season = prompt("Type in a month:");
var firstLetter = season.slice(0,1);
firstLetter = firstLetter.toUpperCase();
var otherLetters = season.slice(1, season.length);
otherLetters = otherLetters.toLowerCase();
var Season = firstLetter + otherLetters;
console.log(Season);


if(Season == "September" || Season == "October" || Season == "November") {
    console.log("The season is Autumn.");
} else if(Season == "December" || Season == "January" || Season == "February") {
    console.log("The season is Winter.");
} else if(Season == "March" || Season == "April " || Season == "May") {
    console.log("The season is Spring.");
} else if(Season == "June" || Season == "July" || Season == "August") {
    console.log("The season is Summer.");
} else {
    console.error("Error");
}


// MUSICIANS

var band_members_num = 5;

switch(band_members_num) {
    case 1 :
        console.log("This band is a uno.")
    break;
    case 2 :
        console.log("This band is a duo.")
    break;
    case 3 :
        console.log("This band is a trio.")
    break;
    case 4 :
        console.log("This band is a quartet.")
    break;
    case 5 :
        console.log("This band is a quintet.")
    break;
    case 6 :
        console.log("This band is a sextet.")
    break;
    case 7 :
        console.log("This band is a septet.")
    break;
    case 8 :
        console.log("This band is an octet.")
    break;
    case 9 :
        console.log("This band is a nonet.")
    break;
    case 10 :
        console.log("This band is a decet.")
    break;
    default: console.log("error");
}