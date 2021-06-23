function mostrarRelatoria(){
    const relatoria = document.getElementById('relatoria')
    const cerrar = document.getElementById('cerrar')
    relatoria.classList.add('mostrar')
}
cerrar.addEventListener('click',this.cerrarModal)
function cerrarModal(){
    relatoria.classList.remove('mostrar')
}