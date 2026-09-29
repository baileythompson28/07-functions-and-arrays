let fruits = ["apple", "orange", "banana"] // square brackets make it an array
console.log(fruits);
//access a specific one:
console.log(fruits[1]); //"indexing"

//change banana to kiwi:
fruits[2] = "kiwi";
console.log(fruits);

//common array methods:
//add an element to the end:
fruits.push("pineapple");
console.log(fruits);

//remove an element from the end:
let lastElement = fruits.pop();
console.log(fruits);

//using push and pop, you can simulate a "stack" (lifo)

//add to the beginning
fruits.unshift("pear");
console.log(fruits);

//remove from beginning
let firstElm = fruits.shift();
console.log(fruits);

//using push and shift, you can simulate a "queue" (fifo)

//find the length of an array:
console.log(fruits.length);

//finding index of an element:
console.log(fruits.indexOf("orange")); //1
console.log(fruits.indexOf("hamburger")); //-1 (not found)

//simple way to loop through array:
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//loop backwards:
for(let i = fruits.length - 1; i=0; i--){
    console.log(fruits[i]);
}

//even cooler loop:
for(let fruit of fruits){
    console.log(fruits);
}

//sort the array:
fruits.sort(); //this sorts the array in place - meaning the original order is lost
console.log(fruits);

//sort the array in reverse:
fruits.sort().reverse(); //this sorts the array in place - meaning the original order is lost
console.log(fruits);

