/* DIFFERENCE BETWEEN LET, CONST AND VAR
 * var declarations are scoped globally and can be accessed from both within or outside the scope
 * let declarations are scoped within the block and can only be accessed inside the block
 * const declarations are also block scoped and cannot be reassigned
 * hoisting is a mechanism in javascript where variable declarations are moved to the top of their scope before the code is executed
 */
// var use-case
// function greet() {
//     var isKim = true;
//     if (isKim) {
//         var myName = 'Kim';
//         console.log(myName);
//     }
//     console.log(myName);
// }
// greet();
// function greet() {
//     let isKim = true;
//     if (isKim) {
//         let myName = 'Kim';
//         console.log(myName);
//     }
//     console.log(myName);
// }
// greet();
function greet() {
    const isKim = true;
    if (isKim) {
        const myName = 'Kim';
        const myName = 'Paul';
        console.log(myName);
    }
}
greet();