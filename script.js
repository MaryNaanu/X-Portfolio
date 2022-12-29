const menu = document.queryselector(".menu");
const nav = document.queryselector(".nav");
 menu.addEventListener('click', () => {
                menu.classList.toggle('active');
                nav.classList.toggle('active');
            })