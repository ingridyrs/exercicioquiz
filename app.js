// Declara variáveis globais
let result = document.querySelector( '.result')
let answer = document.querySelector( '.answer')


//Checa a resposta e dá resultado
function checarResposta( event ) {
    if ( event.target.classList.contains ( 'correct') ) {

       result.textContent = 'Certo! ✅' 
 } else {
    result.textContent = 'Errado!  ❌' 
 }
// Mostrar .answer
answer.style.display = 'initial'
}

let alternativas = document.querySelectorAll( 'li' )

for ( let alternativa of alternativas) {

// Evento de click para rodar a função
    alternativa.addEventListener( 'click', checarResposta )
}

