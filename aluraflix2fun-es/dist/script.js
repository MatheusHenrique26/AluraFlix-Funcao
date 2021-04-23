function adicionarFilme(){
  var campoFilme = document.querySelector("#filme")
  var filmeAdicionar = campoFilme.value
  if (filmeAdicionar.endsWith(".jpg")){
    listarFilmesNaTela(filmeAdicionar)
  }else 
    alert("Imagem inválida")
  
  campoFilme.value = "" 
}


function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementoFilme = "<img src = " + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}