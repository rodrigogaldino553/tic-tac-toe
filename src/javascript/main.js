// Guardas as combinações possiveis em array
// Guardar o jogo a cada roda em um array
// a cada rodada rodar pra ver se o jogo chegou em alguma combinação de vitoria

var x = 0
const plays = ['O', 'X']

var buttons_values = {btn_1: '', btn_2: '', btn_3: '',
                      btn_4: '', btn_5: '', btn_6: '',
                      btn_7: '', btn_8: '', btn_9: ''}


function btn_play(event){
  let current_btn = event.target

  if(current_btn.value !== '') return

  set_button_value(current_btn, turn())
  end_game()
}

function turn(){
  x = Number(!x)
  return plays[x]
}

function set_button_value(button, turn_value){
  button.innerHTML = turn_value
  button.value = turn_value

  buttons_values[button.id] = turn_value
}

// Rules to determine the game result

function end_game(){
  if(atie()){
    alert('A TIE!')
  }else{
    return false
  }

  // ações quando o jogo termina
  // zerar variaveis, e dar opção de jogar de novo
}


function atie(){
  for(var btn_id in buttons_values){
    if(buttons_values[btn_id] === '') return false
  }
  return true
}



