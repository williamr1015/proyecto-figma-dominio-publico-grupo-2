localStorage.setItem("seguro","no");

document.getElementById("buttonIndex").onclick = function () {

    let texto = document.getElementById("inputIndex").value;
    localStorage.setItem("puente",texto);
    console.log(texto);
    localStorage.setItem("seguro","si");

}