let arr1 = [];
let arr2 = [];

// We voegen een item toe aan arr1 met "push", dat is een mutable operatie
let result1 = arr1.push(8);

// Als we arr1 nu loggen zul je zien dat deze "gemuteerd" is
console.log(arr1); // [1]

// Het resultaat van push is de nieuwe lengte van het array
console.log(result1); // 1



////////////////////////////////////////////////////////////////////



// We voegen een item toe aan arr2 met concat, dat is NIET een mutable operatie
let result2 = arr2.concat(9);

// Als we arr2 nu loggen zul je zien dat deze NIET gemuteerd is
console.log(arr2); // []

// Maar: het resultaat van concat is het nieuw aangemaakte array
console.log(result2); // [1]
