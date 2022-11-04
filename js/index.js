const a = document.querySelector('.a');
const d = document.querySelector('.d');
const l = document.querySelector('.l');
const i = document.querySelector('.i');
const particles = document.querySelector('#particles-js');
const expand_ai = document.querySelector('#expand-ai');
const ai_box = document.querySelector('.ai-box');

const name_text = document.querySelector('.name');

const text_container = document.querySelector('.text-container');





expand_ai.addEventListener('click', () => {

    ai_box.classList.toggle("expand");
    if (ai_box.classList.contains("expand")) {
        ai_box.style.width = '100vw';
        ai_box.style.height = '100vh';
        ai_box.style.left = '0%';
        ai_box.style.backdropFilter = 'blur(15px)';

    }else{
        ai_box.style.width = '600px';
        ai_box.style.height = '400px';
        ai_box.style.left = '50%';
    }


})



fetch('./assets/ai-particles.json')
    .then(response => response.json())
    .then(data => particles_json = data)
    .catch(error => console.log(error));




a.addEventListener('click', () => {
    text_container.classList.toggle("ai");
    particles.classList.toggle("ai");
    if (particles.className == "ai") {
        particlesJS('particles-js', particles_json);
        particles.style.opacity = 1;

    } else {
        particles.style.opacity = 0;
    }


})


d.addEventListener('click', () => {
    text_container.classList.toggle("deepflow");



    particles.classList.toggle("deepflow");
    if (particles.className == "deepflow") {
        particlesJS('particles-js', particles_json);

        particles.style.opacity = 1;

    } else {
        particles.style.opacity = 0;
    }
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