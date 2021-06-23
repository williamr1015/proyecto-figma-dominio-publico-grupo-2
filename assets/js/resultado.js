//funcion para imprimir desde el localstorage//
const s= localStorage.getItem("seguro");

if(s == "si"){

    let casa = localStorage.getItem("puente");
    console.log(casa);
    document.getElementById('print-resultado').innerText= localStorage.getItem("puente");
}
//Funcion menu Esteban//
function mostrarRelatoria(){
    const relatoria = document.getElementById('relatoria')
    const cerrar = document.getElementById('cerrar')
    relatoria.classList.add('mostrar')
}
cerrar.addEventListener('click',this.cerrarModal)
function cerrarModal(){
    relatoria.classList.remove('mostrar')
}
