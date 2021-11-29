//PARTE DO SCRIPT REFERENTE AO MASCULINO
let menusM = window.document.getElementById('menusM')
function abrirM() {
    menusM.style.display = 'block';
}
function fecharM() {
    menusM.style.display = 'none';
}


//PARTE DO SCRIPT REFERENTE AO FEMININO
let menusF = window.document.getElementById('menusF')
function abrirF() {
    menusF.style.display = 'block';
}
function fecharF() {
    menusF.style.display = 'none';
}


//PARTE DO SCRIPT REFERENTE AO KIDS
let menusK = window.document.getElementById('menusK')
function abrirK() {
    menusK.style.display = 'block';
}
function fecharK() {
    menusK.style.display = 'none';
}

//PARTE DO SCRIPT REFERENTE AO MENU HAMBURGUER
let menu1 = document.querySelector(".menu1");
let fundo = document.querySelector("section");
menu1.addEventListener("click", function () {

    document.querySelector("header").classList.toggle("show-menu")
    fundo.setAttribute('Style', 'opacity: 0.5')

});
menu1.addEventListener("click", function () {
    // document.querySelector("header").classList.toggle("show-menu", false)
    //document.body.style.opacity = "0.5";
});