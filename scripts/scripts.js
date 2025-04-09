const boutonsModale = document.querySelectorAll('.clic');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++){
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale(){
    //const chemin = this.previousElementSibling.getAttribute("src");
    const div = document.createElement('div');
    const mod = document.createElement('p');
    //image.setAttribute('src', chemin);
    //div.classList.add('blanc');
    mod.textContent = "FIN";
    modale.appendChild(div);
    div.appendChild(mod);
    modale.classList.add('visible');
    div.addEventListener("click", closeModale);
}

function closeModale(event){
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}