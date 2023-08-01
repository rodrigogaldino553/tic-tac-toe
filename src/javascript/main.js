// Guardas as combinações possiveis em array
// Guardar o jogo a cada roda em um array
// a cada rodada rodar pra ver se o jogo chegou em alguma combinação de vitoria

var x = 0


function btn_play(event){
  let current_btn = event.target
  let current_btn_value = current_btn.value

  if(current_btn_value !== '') return
  
  let play = turn()
  current_btn.innerHTML = play
  current_btn.value = play
}

function turn(){
  let plays = ['O', 'X']
  x = Number(!x)
  return plays[x]
}



