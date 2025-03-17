<script setup>
const props=defineProps([
    'score']);
const emit=defineEmits(['reset-score'])
</script>
<template>
<div class="scoreboard">
    <h2>Punteggio:</h2>
    <ul>
        <li class="x">X: {{ score.X }}</li>
        <li class="o">O: {{ score.O }}</li>
        <li class="draw">Pareggio: {{ score.pareggio }}</li>
    </ul>
    <button class="resetScore" @click="emit('reset-score')">Reset</button>
</div>
</template>
<style scoped>
.scoreboard {
  font-size: 1.5rem;
  margin-top: 20px;
  
}
h2{
      text-shadow: 0 0 10px #9400d3, 
               0 0 20px #9400d3, 
               0 0 40px #8a2be2, 
               0 0 80px #7a00ff;
}
.scoreboard ul {
  list-style: none;
  padding: 0;
}

.scoreboard li {
  margin: 5px 0;
}
li.o{
  color: #00aaff;
  text-shadow: 0 0 10px #00aaff, 0 0 20px #0088cc, 0 0 30px #0066aa;
}
li.x{
  color: #ff4444; 
  text-shadow: 0 0 10px #ff4444, 0 0 20px #cc0000, 0 0 30px #aa0000;
}
li.draw{
margin-bottom:30px ;
color: #00ff44; 
text-shadow: 0 0 10px #00ff44, 0 0 20px #00cc33, 0 0 30px #009922;

}
.resetScore{
background-color: red;
width: 100%;
color: rgba(255, 255, 255, 0.823);
margin-bottom: 3rem;
transition: all 0.3s ease-in-out;
box-shadow: 0 0 10px #ff4444, 0 0 20px #cc0000, 0 0 30px #aa0000;
border: 2px solid rgb(219, 66, 66);
border-radius: 10px;
}
.resetScore:active{
transform: scale(0.95);
}
</style>