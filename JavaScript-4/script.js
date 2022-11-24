// Followers

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var sameFollowers = [];

for(i = 0; i < JohnFollowers.length; i++) {
    for(j = 0; j < JaneFollowers.length; j++) {
        if(JohnFollowers[i] === JaneFollowers[j]) {
            sameFollowers.push(JohnFollowers[i]);
        }
    }
}
console.log(sameFollowers);


//Mario's Tower

var hashtag = "#";
var tower = hashtag;

for(i = 0; i < 6; i++) {
    console.log(tower);
    tower+=hashtag;
}


//9 Multiplier

for(i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i*9}`);
}


//Tables

for(i = 1; i <= 10; i++) {
    for(j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


