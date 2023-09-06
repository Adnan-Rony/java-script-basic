const num=[2,3,4,5,6,78,7];

 num.forEach(numbers=>{
    // console.log(numbers);
 })

// 



const number=[1,2,3,4,5,6,7,8,9]

for(const num of number)
{
    // console.log(num);
}

// 


function sum(num1,num2)
{
    const result=num1+num2;
    return result;
}
const result=sum(2,2);
// console.log(result);

//

const summ=(num1,num2)=>{
   return num1+num2;
}
const resultt =summ(3,2);
// console.log(resultt);


//

const person={
    name:'adnan',
    age:23,
    phone:8347873
}
// console.log(person.name);

// console.log(person["age"]);



const isEven=x=>x%2==0;

// console.log(isEven(6));




const summy=(x,y,z)=>{
    const s=x+y+z;

    return s

}
// console.log(summy(1,2,3));


//

const nunu=[2,4,6,8,9]

const newArraya=[...nunu]
nunu.push(100);

console.log(newArraya);



// console.log(nunu);


// 


const personn=[
    {name:'adnan1',age:211,phone:2221},
    {name:'adnan2',age:212,phone:2222},
    {name:'adnan3',age:213,phone:2223},
    {name:'adnan4',age:214,phone:2224}

]

const age=personn.map(p=>p.age)
const name=personn.map(p=>p.name)

// const nameAge=personn.map(p=>console.log(p.name,p.age))
// console.log(age);
// console.log(name);

//

personn.forEach((p)=>{
    // console.log(p.name);
})

const newArray=personn.filter((p)=>p.name.includes("a"));
console.log(newArray);

