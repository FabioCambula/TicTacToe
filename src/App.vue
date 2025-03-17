<script setup>
import Board from './components/Board.vue'
import ScoreBoard from './components/ScoreBoard.vue';
import {ref, computed} from 'vue';
//Il gioco inizia con la X
const currentPlayer=ref('X');
//tabellone punteggio
const score=ref({
  X:0,
  O:0,
  pareggio:0
})
//cambio turno
const switchTurn=()=>{
  currentPlayer.value=currentPlayer.value==='X'?'O':'X';
}
//griglia iniziale
const grid=ref(Array(9).fill(""));
const winner=ref(null);
//mosse nella griglie
const makeMove = (index) => {
  if (winner.value || grid.value[index]) return;

  grid.value[index] = currentPlayer.value;

  // Controllo vincitore
  const check = checkWinner(grid.value);
  if (check) {
    winner.value = check; // Salva il vincitore
    score.value[check]++;
    console.log(`Il vincitore è ${winner.value}`);
    return; // Blocca il gioco
  }

  // Controllo pareggio
  if (!grid.value.includes("")) {
    winner.value = "pareggio";
    score.value.pareggio++;
    console.log("Pareggio!");
    return; // Blocca il gioco
  }

  switchTurn();
};
//reset gioco
const resetGame = () => {
  grid.value = Array(9).fill("");
  currentPlayer.value='X';
  winner.value=null;
};
//check del vincitore
const checkWinner=(grid)=>{
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
for (const pattern of winPatterns){
  const[a,b,c]=pattern;
  if(grid[a]&&grid[a]===grid[b]&&grid[a]===grid[c]){
    return grid[a];
  }
}
return null;
}
//reset scoreboard
const resetScore=()=>{
  score.value={X:0, O:0, pareggio:0};
}
</script>

<template>
  <div class="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="row w-100">
      <div class="col-md-8 offset-md-2 d-flex flex-column justify-content-center align-items-center text-center mb-4 mb-md-0">
        <h1 class="mb-3">Tic Tac Toe</h1>
        <h2 class="mb-3">
          <span v-if="!winner">Turno delle {{ currentPlayer }}</span>
          <span v-else-if="winner==='pareggio'">Pareggio!</span>
          <span v-else>Il vincitore è {{ winner }}</span>
        </h2>
        <Board :grid="grid" @move="makeMove" />
        <button class="btn-resetGame btn btn-primary mx-auto mt-4" @click="resetGame">
          Nuova Partita
        </button>
      </div>
      <div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <ScoreBoard :score="score" @reset-score="resetScore" />
      </div>
    </div>
  </div>
</template>




<style scoped>
 h1 {
  
  font-size: 3rem;
  font-weight: bold;
  color: #7195b6; 
  text-shadow: 0 0 10px #9400d3, 
               0 0 20px #9400d3, 
               0 0 40px #8a2be2, 
               0 0 80px #7a00ff;
}


span {
  color: #c8def3;
  text-shadow: 0 0 5px #8819ff, 
               0 0 15px #6a1cad;
  padding: 1rem;
}
.btn-resetGame {
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  width:60%;
  text-align: center;
  font-weight: bold;
  border: 2px solid #00aaff;
  background: none;
  color: white;
  text-shadow: 0 0 5px #00aaff, 0 0 10px #0088cc;
  box-shadow: 0 0 10px #00aaff;
  transition: all 0.3s ease-in-out;
}
.btn-resetGame:hover {
  background: #00aaff;
  color: black;
  text-shadow: none;
  box-shadow: 0 0 20px #00aaff, 0 0 40px #0088cc;
  border-color: #0088cc;
}

.btn-resetGame:active {
  transform: scale(0.95);
  box-shadow: 0 0 5px #00aaff, 0 0 10px #0088cc;
}


</style>