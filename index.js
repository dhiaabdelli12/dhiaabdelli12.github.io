point = document.getElementById("point");
a = document.querySelector('.a');
text = document.querySelector('.name')
i1 = document.querySelector('.i1');
i2 = document.querySelector('.i2');
h = document.querySelector('.h');
l1 = document.querySelector('.l1')
l2 = document.querySelector('.l2')
container = document.querySelector('.container');
projects = document.querySelector('.projects');

a.addEventListener('click', () => {
   /* text.style.color = "black";
    i1.style.opacity = "0";
    l1.style.opacity = "0";
    l2.style.opacity = "0";
    h.style.opacity = "0";
    point.style.opacity = "0";*/

    //l2.style.width= "70%";
    //l2.style.left= "50%";
    //l2.style.height= "130px";

    //console.log(l2.style.left)


    i1.classList.toggle("inactive");
    l1.classList.toggle("inactive");
    h.classList.toggle("inactive");
    text.classList.toggle("inactive");
    point.classList.toggle("inactive");
    
    l2.classList.toggle("active");
    i2.classList.toggle("active");
    projects.classList.toggle("active");
    

})

point.addEventListener('click', () => {

    console.log(point.className)

    if (point.className == "point") {
        textNode = document.createTextNode("Dhia Abdelli");
        h1 = document.createElement("h1");
        h1.appendChild(textNode);
        point.appendChild(h1);
    } else {

        point.innerHTML = "";
    }

    point.classList.toggle("active")
})