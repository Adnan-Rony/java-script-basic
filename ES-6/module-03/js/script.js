// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //jason is not similer but close to jaso.parse
//       .then(json => console.log(json))

     
function loadData()
{
    const url = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}



