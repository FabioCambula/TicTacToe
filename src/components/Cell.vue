<script setup>
const props=defineProps(['value'])
</script>
<template>
<button class="cell" :class="{'cell--x': value === 'X', 'cell--o': value === 'O'}">
    {{ value }}
  </button>
  </template>
<style scoped>
/* .cell {
  width: 100%;
  aspect-ratio: 1;
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.cell:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
} */
.cell {
  aspect-ratio: 1 / 1; 
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #9400d3;
  cursor: pointer;
  user-select: none;
  width: 100%;
  transition: 0.3s;
  margin: 0;
}
.cell:not(.cell--x):not(.cell--o):hover{
  background-color: rgba(255, 255, 255, 0.3);
}

.cell--o {
   color: #00aaff;
  text-shadow: 0 0 10px #00aaff, 0 0 20px #0088cc, 0 0 30px #0066aa;
  background-color: rgba(122, 0, 255, 0.3);
}

.cell--x {
 color: #ff4444;
  text-shadow: 0 0 10px #ff4444, 0 0 20px #cc0000, 0 0 30px #aa0000;
  background-color: rgba(122, 0, 255, 0.3);
}
.cell:active {
  background-color: rgba(122, 0, 255, 0.3);
}

</style>