// hamburguer mexendo

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

//slider

    let count = 1; 
    document.getElementById("radio1").checked = true; 

    setInterval( function() {
        nextImage();
    }, 2000)

    //função para passar para a proxima imagem

    function nextImage() {
        count++; 

        //Faz voltar para a primeira imagem
        if(count > 3) {
            count = 1; 
        }

        document.getElementById("radio"+count).checked = true;

    }