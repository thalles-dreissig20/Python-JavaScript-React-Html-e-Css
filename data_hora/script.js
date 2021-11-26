function carregar() {
    var msg = window.document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    var horas = hora + ":" + min + ":" + seg;
    msg.innerHTML = horas;

    if (hora > 0 && hora < 6) {
        img.src = 'imagens/foto1.jpg'

    } else if (hora >= 6 && hora < 9) {
        img.src = 'imagens/foto2.jpg'


    } else if (hora >= 9 && hora < 12) {
        img.src = 'imagens/foto3.jpg'


    } else if (hora >= 12 && hora < 16) {
        img.src = 'imagens/foto4.jpg'

    } else {
        img.src = 'imagens/foto5.jpg'

    }
    var tempo = setInterval(carregar, 1000);
}