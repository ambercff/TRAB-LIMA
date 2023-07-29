const hamburguer = document.querySelector("#hamburguer");

function addActiveClass() {
    hamburguer.classList.add('fa-solid', 'fa-bars-staggered');
}

function removeActiveClass() {
    hamburguer.classList.remove('fa-solid', 'fa-bars-staggered');
    hamburguer.classList.add('fa-solid', 'fa-bars')
}

hamburguer.addEventListener("click", () => {

    if (hamburguer.classList.contains('fa-bars-staggered')) {
        removeActiveClass();
    } else {
        addActiveClass();
    }
});

hamburguer.addEventListener("mouseover", addActiveClass);
hamburguer.addEventListener("mouseout", removeActiveClass);