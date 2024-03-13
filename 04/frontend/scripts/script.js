document.addEventListener("DOMContentLoaded", function() {
    const postsList = document.getElementById("posts-list");
  
    fetch('http://localhost:8005/')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const li = document.createElement("li");
          li.textContent = `${post.title} by ${post.author}`;
          postsList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  });
  