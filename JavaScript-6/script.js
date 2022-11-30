//Paragraph

var paragraph = document.querySelector("p");
paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea repudiandae vitae nam excepturi consequuntur ex quis, accusamus voluptatibus itaque.";


//Button(+, -)

var minus_button = document.getElementById("minus");
var plus_button = document.getElementById("plus");
var span = document.querySelector("span");

minus_button.addEventListener("click", function() {
    span.innerHTML = parseInt(--span.innerHTML);
    if(span.innerHTML <= 0) {
        span.innerHTML = 0;
    }
});

plus_button.addEventListener("click", function() {
    span.innerHTML = parseInt(++span.innerHTML);
    if(span.innerHTML >= 10) {
        span.innerHTML = 10;
    }
});


//Unordered list with programming languages

// var programmingLanguage = document.getElementsByClassName("list-item");
// programmingLanguage[0].innerHTML = "JavaScript";
// programmingLanguage[1].innerHTML = "Python";
// programmingLanguage[2].innerHTML = "C++";
// programmingLanguage[3].innerHTML = "Php";
// programmingLanguage[4].innerHTML = "Java";

var list = document.getElementsByClassName("list-item");
var programmingLanguage = ["Javascript", "Python", "C++", "Php", "Java"];

for(var i = 0; i < list.length; i++) {
    list[i].innerHTML = programmingLanguage[i];
};


//Change image on click

var image = document.querySelector("img");

image.addEventListener("click", function() {
    image.src = "https://picsum.photos/seed/picsum/536/354";
});





