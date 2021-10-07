const loadArticle = () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            response = xhr.responseText
            posts = JSON.parse(response)
            canvas = document.getElementById('left')

            posts.forEach(post => {
                // Create div of class 'card'
                card = document.createElement('div')
                card.setAttribute('class', 'card')

                // Add h2 element with title from each post
                titleName = document.createElement('h2')
                titleName.innerHTML = post.title
                card.appendChild(titleName)
                
                // Add paragraph of content from each post
                content = document.createElement('p')
                content.innerHTML = post.body
                card.appendChild(content)

                // Add to left col
                canvas.appendChild(card)
            });
        } else {
            console.log("Could not fetch posts")
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded", loadArticle);