const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const sendBtn = document.getElementById('send-btn');
const confirmation = document.getElementById('confirmation-msg');
sendBtn.addEventListener('click', () => {
    confirmation.style.display = 'block';
    setTimeout(() => { confirmation.style.display = 'none'; }, 3000);
});