// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema. 
let amigos = [];
let indiceSorteado = 0;

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido");
    } else {
        document.getElementById("listaAmigos").innerHTML += `<li>${nombreAmigo}</li>`
        amigos.push(nombreAmigo);
        limpiarCaja();
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        indiceSorteado = Math.floor(Math.random()*amigos.length)+1;
        console.log(indiceSorteado);
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es: ${amigos[indiceSorteado-1]}</li>`;
        limpiarLista();
    } else {
        alert("Por favor, ingrese los nombres de sus amigos");
    }
}
 
function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}

function limpiarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

    