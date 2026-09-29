//local scope vs global scope

let myVar = "Dogs" //global

iLike();
iLikeLocal();
iLikeLocalToo("Bunnies");
function iLike(){
    console.log(`I like ${myVar}`); //accessing global var
}

function iLikeLocal(){
    let myVar = "Cats";
    console.log(`I like ${myVar}`); //accessing local var (global is eclipsed by local)
}

function iLikeLocalToo(myVar){
    console.log(`I like ${myVar}`);
}

function holdingLocalVar(){
    let localVar = "here I am"
}

// console.log(localVar); //error - localVar is out of scope (ReferenceError: localVar is not defined):
//anything declared in {} is scoped within those brackets.
{
    let myScopedVar = "hello";
    console.log(myScopedVar + "inside curlies");
}
//console.log(myScopedVar); //ReferenceError: myScopedVar is not defined
//the danger of global scope is that variables can be changd unitentionally
function dangerousGuy(){
    myVar = "snakes" //changing values of global var
}
dangerousGuy();
iLike();

