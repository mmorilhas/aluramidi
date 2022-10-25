function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);
  
  if( elemento != null && elemento.localName === 'audio') {
    elemento.play();
  }
  else{
    console.log("Elemento não encontrado ou seletor inválido");
  }

//   document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (const element of listaDeTeclas){
  const tecla = element;
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}` //template string
  
  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    if( evento.code === "Space" || evento.code === "Enter"){
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');

  }
}

/*
for (let  indice = 0; indice < listaDeTeclas.length; indice++ ){
  const tecla = listaDeTeclas[indice];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}` //template string
  
  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    if( evento.code === "Space" || evento.code === "Enter"){
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');

  }
}
*/

