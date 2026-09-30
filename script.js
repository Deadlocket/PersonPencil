// ===============================
// PersoPencil - script.js
// ===============================

// Barra de navegación
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 15px 30px rgba(0,0,0,.15)";
        navbar.style.marginTop = "10px";
    } else {
        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        navbar.style.marginTop = "20px";
    }

});


// Animación al cargar
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


document.querySelectorAll(".card,.about-preview,.cta,.hero-image,.hero-text")
.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});


// Efecto en las tarjetas
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


// Botón volver arriba
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#3b82f6";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});