
// Objects Homework

var lasagna = {
    title: "Lasagna",
    servings: 4,
    ingredients: ["ground beef", "bell peppers", "onions", "tomato sauce", "dried basil", "lasagna noodles", "cheese"]
}

console.log(lasagna.title);
console.log("Serves: " + lasagna.servings);
console.log("Ingredients: ");
console.log(lasagna.ingredients[0]);
console.log(lasagna.ingredients[1]);
console.log(lasagna.ingredients[2]);
console.log(lasagna.ingredients[3]);
console.log(lasagna.ingredients[4]);
console.log(lasagna.ingredients[5]);
console.log(lasagna.ingredients[6]);


//Array Homework

var programmingLanguages = ["Javascript", "Java", "Python", "C++", "SQL", "Go", "Swift", "PHP"];

console.log(programmingLanguages.length);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.splice(2, 1, "C")
console.log(programmingLanguages);

