// function loadUser()
// {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUser(data))
// }
// //advanced

// function displayUser(data)
// {
//     console.log(data);
// }





// function loadUser()
// {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUser(data))
// }


// function displayUser(users)
// {
//     for(const user of users)
//     {
//         // console.log(user.name);
//         console.log(user.email);
//     }
// }




//
function loadUser()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

//important
function displayUser(users)
{
   const ul =document.getElementById('list-container')
   for(const user of users)
   {
        const li =document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li)
   }
}



function loadUser2()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))

}
function displayUser2(users)
{
    
    for(const user of users)
    {
        const ul=document.getElementById('list-container2')
        const li =document.createElement('li');
        li.innerText=user.email;
        ul.appendChild(li);
    }
}