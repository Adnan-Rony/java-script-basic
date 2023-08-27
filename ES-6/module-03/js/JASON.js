const user ={id:1,name:'adnan',job:'actor'}

const stringField=JSON.stringify(user);

console.log(stringField);
//{"id":1,"name":"adnan","job":"actor"}



const arr=[1,2,3,4,5];

const stringField2=JSON.stringify(arr);

console.log(stringField2);
//[1,2,3,4,5]




const arrObj=JSON.parse(stringField2);

console.log(arrObj);
//[ 1, 2, 3, 4, 5 ]

