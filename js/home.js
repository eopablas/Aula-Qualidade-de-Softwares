const btnPesquisa = document.getElementById("btnPesquisa");
const pesquisaContainer = document.querySelector(".pesquisa-container");
const campoPesquisa = document.getElementById("campoPesquisa");
const btnSair = document.getElementById("btnSair");

btnPesquisa.addEventListener("click", function (event) {

    event.stopPropagation();

    pesquisaContainer.classList.toggle("aberta");

    if (pesquisaContainer.classList.contains("aberta")) {
        campoPesquisa.focus();
    }
});

document.addEventListener("click", function (event) {

    if (!pesquisaContainer.contains(event.target)) {
        pesquisaContainer.classList.remove("aberta");
    }

});

btnSair.addEventListener("click", function () {

    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");

    window.location.href = "../index.html";

});