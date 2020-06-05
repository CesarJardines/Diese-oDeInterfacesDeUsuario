const jugador = "💊";
const computadora = "🦠";

let tabla_llena = false;
let tablero_juego = ["", "", "", "", "", "", "", "", ""];

const contenido_tablero = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  tablero_juego.forEach(element => {
    if (element != jugador && element != computadora) {
      flag = false;
    }
  });
  tabla_llena = flag;
};


const check_line = (a, b, c) => {
  return (
    tablero_juego[a] == tablero_juego[b] &&
    tablero_juego[b] == tablero_juego[c] &&
    (tablero_juego[a] == jugador || tablero_juego[a] == computadora)
  );
};

const check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 1}`).classList.add("win");
      document.querySelector(`#block_${i + 2}`).classList.add("win");
      return tablero_juego[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 3}`).classList.add("win");
      document.querySelector(`#block_${i + 6}`).classList.add("win");
      return tablero_juego[i];
    }
  }
  if (check_line(0, 4, 8)) {
    document.querySelector("#block_0").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_8").classList.add("win");
    return tablero_juego[0];
  }
  if (check_line(2, 4, 6)) {
    document.querySelector("#block_2").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_6").classList.add("win");
    return tablero_juego[2];
  }
  return "";
};

const check_for_winner = () => {
  let res = check_match()
  if (res == jugador) {
    winner.innerText = "¡Ganaste!";
    winner.classList.add("playerWin");
    tabla_llena = true
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "/mesCasa/";

    }, 3000);
  } else if (res == computadora) {
    winner.innerText = "Perdiste :(";
    winner.classList.add("computerWin");
    tabla_llena = true

  } else if (tabla_llena) {
    winner.innerText = "¡Empate!";
    winner.classList.add("draw");
  }
};


const render_board = () => {
  contenido_tablero.innerHTML = ""
  tablero_juego.forEach((e, i) => {
    contenido_tablero.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${tablero_juego[i]}</div>`
    if (e == jugador || e == computadora) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  if (!tabla_llena && tablero_juego[e] == "") {
    tablero_juego[e] = jugador;
    game_loop();
    addComputerMove();
  }
};

const addComputerMove = () => {
  if (!tabla_llena) {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (tablero_juego[selected] != "");
    tablero_juego[selected] = computadora;
    game_loop();
  }
};

const reset_board = () => {
  tablero_juego = ["", "", "", "", "", "", "", "", ""];
  tabla_llena = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  render_board();
};

//initial render
render_board();
