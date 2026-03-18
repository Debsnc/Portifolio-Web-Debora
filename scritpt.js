document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("formContato");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos.");
return;
}

let validarEmail = /\S+@\S+\.\S+/;

if(!validarEmail.test(email)){
alert("Digite um email válido.");
return;
}

alert("Mensagem enviada com sucesso!");
form.reset();

});

}

});