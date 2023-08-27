function loadPosts()
{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data =>displayPost(data))
}

function displayPost(posts)
{
      for(const post of posts)
      {
        const ul =document.getElementById('list-container');
        const li =document.createElement('li');
        // li.innerText=post.title;

        // ul.appendChild(li)
        li.innerHTML=`
        <h3> user-${post.title}</h3>
        <h2> user-${post.userId}</h2>
        `
        ul.appendChild(li)
      }  
}






loadPosts()