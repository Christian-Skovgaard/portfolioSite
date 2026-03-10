const posts = document.querySelectorAll(".post");

posts.forEach(post => {
    post.addEventListener("click", () => {
        post.classList.toggle("active");
    });
});