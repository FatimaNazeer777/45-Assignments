// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//Make a array of your favorite fruits
let favourite_fruits:string[] = ["Apple", "Strawberry", "Litchi"];


//Write a series ofindependent if statements checking for certain fruits
if(favourite_fruits.includes("Apple")){
    console.log("I really like Apple!")
}
if(favourite_fruits.includes("Strawberry")){
    console.log("I really like Strawberry!")
}
if(favourite_fruits.includes("Litchi")){
    console.log("I really like Litchi!")
}
if(favourite_fruits.includes("Mango")){
    console.log("I really don't like Mangoes!")
}
if(favourite_fruits.includes("Grapes")){
    console.log("I really don't like Grapes!")
}

