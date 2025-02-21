<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGridStore } from "./stores/gamesStore";
const gridStore=useGridStore();
const { grid, scores,gameOver } = storeToRefs(gridStore);
</script>
<template>
  <h1 class="text-center pt-3">Tic Tac Toe</h1>
<h3 v-if="!gridStore.winner">Turno delle {{ gridStore.currentPlayer }}</h3>
<h3 v-else>
  <span v-if="gridStore.winner !== 'draw'"> Il vincitore è {{ gridStore.winner }}! </span>
  <span v-else>🤝 Pareggio!</span>
</h3>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <!-- Griglia -->
      <div class="col-12 col-md-8 d-flex justify-content-center my-2 ">
        <div class="grid">
          <div
            v-for="(cell, index) in grid"
            :key="index"
            class="cell d-flex align-items-center justify-content-center"
            :class="{ active: cell, 'x-cell': cell === 'X', 'o-cell': cell === 'O' }"
            @click="!gameOver && gridStore.toggleCell(index)"
          >
            {{ cell || "" }}
          </div>
          <button class="btn btn-primary mt-3" @click="gridStore.resetGame">Nuova Partita</button>
        </div>
      </div>

      <!-- tabellone punteggio -->
      <div class="tabellone col-12 col-md-4 text-center mt-4">
        <p class="x fs-4">X: {{ scores.X }}</p>
        <p class="o fs-4">O: {{ scores.O }}</p>
        <p class="draw fs-4">Pareggi: {{ scores.draw }}</p>
        <button class="btn btn-danger" @click="gridStore.resetScore">Reset Punteggio</button>
      </div>
    </div>
  </div>
</template>


<style scoped>


</style>




<!-- <template>
  <h1>Tic Tac Toe</h1>
  <h2>Turno delle {{ gridStore.currentPlayer }}</h2>
  <div class="scoreboard">
    <p>X: {{ scores.X }}</p>
    <p>O: {{ scores.O }}</p>
    <p>Pareggi: {{ scores.draw }}</p>
    <button @click="gridStore.resetScore">Reset punteggio</button>
  </div>
  <div class="grid">
    <div v-for="(cell, index) in grid" :key="index" class="cell" :class="{ active: cell }" @click="gridStore.toggleCell(index)">
      {{ cell || "" }}
    </div>
  </div>
  <button @click="gridStore.resetGame">Reset</button>
</template> -->


