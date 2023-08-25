/* 
how to find out undefined;
1.variable that is not initialized will give undefined.
2.function with no return types
3.paramiter dont pass
*/


//1
let first;

// console.log(first);


//2
function second(a,b)
{
    const total =a+b;
}
const result =second();
// console.log(result);


//3

function third(a,b,c)
{
    const sum=a+b+c
}
const resultt=third(2,3)

// console.log(resultt);



