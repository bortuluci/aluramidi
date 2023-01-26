function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

let contador = 0

//     declaração do contador    --      condição    --   incrementa +1 e reatribui novo valor
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}` //template string

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
}
