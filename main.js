let nomeUsuário = "";
let elemento = document.querySelector("#nome-plataforma");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?")
}

if(nomeUsuário == null){
    elemento.textContent = "que bom te ver aqui";
}else{
    elemento.textContent = nomeUsuário;
}


