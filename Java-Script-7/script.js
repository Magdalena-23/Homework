// First exercise(Image-add border)

var dogImage = document.querySelector("img");

dogImage.addEventListener("click", function() {
    dogImage.classList.toggle("addBorder");
});


// Second exercise(Paragraphs)

var paragraphs = document.querySelectorAll("p");

for(i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add("description");
};


//  Third exercise

var parent = document.querySelector(".parent h2");
console.log(parent);


// Fourth exercise 

var arr = ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia', 'Japan'];

var ul = document.createElement("ul");

document.body.appendChild(ul);

for(i = 0; i < arr.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var value = document.createTextNode(arr[i]);
    li.appendChild(value);
};


// Fifth exercise

var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var square = document.querySelector(".square");
// console.log(increase);

increase.addEventListener("click", function() {
    square.style.width = "800px";
    square.style.height = "800px";
    localStorage.setItem("size", "bigger");
});

decrease.addEventListener("click", function() {
    square.style.width = "400px";
    square.style.height = "400px";
    localStorage.setItem("size", "smaller"); 
});

//?????







