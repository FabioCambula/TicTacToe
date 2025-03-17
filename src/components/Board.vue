<script setup>
import Cell from './Cell.vue';
const props=defineProps(['grid']);
const emit=defineEmits(['move'])
</script>
<template>
  <div class="board">
    <Cell v-for="(cell, index) in grid" :key="index" :value="cell" @click="emit('move', index)"/>
  </div>
</template>
<style scoped>
 .board {
   display: grid;
  justify-items: center;
  box-sizing: border-box;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px #9400d3; 
  max-width: 500px;
  width: 100%;
}
</style>