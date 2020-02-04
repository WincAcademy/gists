/*
When you're learning JavaScript it's easy to make the following mistake
where you use a single = character which is "assignment" instead of == or the preferred
=== operator which compares values.
*/

let a = 5;

if (a = 5) {
  console.log("A equals b");
}

/*
To prevent this from happening you can use this "trick" where you first put the value
you want to compare and then the variable name.
*/
let b = 6;

if (6 = b) {
  // This will give a very clear error because you cannot assign something to 6.
  // Error: "Invalid left-hand side in assignment"
  console.log("b equals 6");
}
