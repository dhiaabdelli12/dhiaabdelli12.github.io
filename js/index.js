const a = document.querySelector('.a');
const d = document.querySelector('.d');
const l = document.querySelector('.l');
const particles = document.querySelector('#particles-js');

const text_container = document.querySelector('.text-container');

a.addEventListener('click', () => {
    text_container.classList.toggle("ai");
    particles.classList.toggle("ai");
    if (particles.className == "ai") {
        particles.style.opacity = 1;

    } else {
        particles.style.opacity = 0;
    }
    particlesJS.load('particles-js', './assets/ai-particles.json');
})


d.addEventListener('click', () => {
    text_container.classList.toggle("deepflow");
    particles.classList.toggle("deepflow");
    if (particles.className == "deepflow") {
        particles.style.opacity = 1;

    } else {
        particles.style.opacity = 0;
    }
    particlesJS.load('particles-js', './assets/deepflow-particles.json');
})

l.addEventListener('click', () => {
    text_container.classList.toggle("scroll");
})






/*window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    text_container.style.backgroundPositionX = `-${x * 0.02}px`;
    text_container.style.backgroundPositionY = `-${y * 0.02}px`;

});*/