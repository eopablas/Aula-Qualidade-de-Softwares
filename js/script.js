const formulario = document.getElementById("formLogin")

formulario.addEventListener("submit", function(event) {

    event.preventDefault(); //impede envio automático

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    //validação do nome
    if (nome === "" || nome.split(" ").length < 2){
        alert("Digite seu nome completo.");
        return;
    }

    //validação do email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    //validação de senha
    if(senha.length < 6) {
        alert("A senga deve conter pelo menos 6 caracteres.");
        return;
    }

    //Caso todas as validações passem
    alert("Login realizado com sucesso!");

    window.location.href = "index.html";
});
