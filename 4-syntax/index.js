let animal = "puppies"

if (animal === "kittens") {
    animal += "!"
} else if (animal === "puppies") {
    animal += "!!"
} else {
    animal = "!" + animal
}

animal === "puppies!!"

/*

Ternary Operators

let x = (expr) ? { true code } : { false code }

*/

let age = 12
//=> undefined

let allowed = (age > 21) ? "yes" : "no"
//=> undefined

console.log(allowed)

//=> "no"

/*

Functions

*/

function speak(words) {
    console.log(words)
}

const alsoSpeak = (words) => {
    console.log(words)
}