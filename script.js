function entrar() {
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha === "20/03") {
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
        digitarTexto();
    } else {
        erro.innerText = "VOCÊ ESQUECEU A SENHA😢";
    }
}
function atualizarContador() {
    const inicio = new Date("2025-03-20T00:00:00");
    const agora = new Date();

    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("tempo").innerText =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
const texto = "Esse site é uma pequena forma de mostrar o quanto você é importante pra mim. Cada detalhe aqui foi feito com carinho, pensando em você ❤️";

let index = 0;

function digitarTexto() {
    if (index < texto.length) {
        document.getElementById("texto-digitando").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitarTexto, 50);
    }
}
window.addEventListener("load", () => { 
    document.getElementById("galeriaBaixo").classiList.add("mostar");
});

