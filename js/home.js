const nome = localStorage.getItem("nomeUsuario");

    document.getElementById("nomeUsuario").textContent =
        nome ? nome : "Usuário";

    function sair() {
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("emailUsuario");

window.location.href = "../index.html";
}