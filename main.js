let nomeUsuário = "";
let elemento = document.querySelector("#nome-plataforma");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?")
}

if(nomeUsuário == null){
    elemento.textContent = "fique à vontade";
}else{
    elemento.textContent = nomeUsuário;
}


