const s= localStorage.getItem("seguro");

if(s == "si"){

    let casa = localStorage.getItem("puente");
    console.log(casa);
    document.getElementById('print-resultado').innerText= localStorage.getItem("puente");
}