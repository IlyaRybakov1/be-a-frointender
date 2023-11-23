<script setup>
import { reactive, ref, onBeforeUpdate } from 'vue';
import API from './API'
defineProps({
  data: {
    type: Object,
    required: true
  }
})
const renderComponent = ref(false);
function clickHandler() {
  renderComponent.value = true;
}
</script>

<template>
  <div class="main">
    <h1 class="name">Name: {{ data.name }}</h1>
    <h2 class="model">Model: {{ data.model }}</h2>
    <h2 class="manufacturer">Manufacturer: {{ data.manufacturer }}</h2>
    <h2 class="cost_in_credits">Cost: {{ data.cost_in_credits }}</h2>
    <h2 class="length">Length: {{ data.length }}m</h2>
    <h2 class="max_atmosphering_speed">Max speed: {{ data.max_atmosphering_speed }}</h2>
    <h2 class="crew">Crew: {{ data.crew }}</h2>
    <h2 class="passengers">Passengers: {{ data.passengers }}</h2>
    <h2 v-if="renderComponent" class="pilot">Pilots info: </h2>
    <h3 v-if="renderComponent" v-for="item in data.pilots" class="pilot">{{ item }}</h3>
    <button v-if="data.pilots.length > 0" class="button" @click="clickHandler">Дивитись пілотів</button>
  </div>
</template>

<style scoped>
.button {
  width: 200px;
  height: 100px;
  margin-left: 30%;
}
.main {
  border: 1px solid grey;
  padding-left: 10%;
  padding-top: 4%;
  padding-bottom: 4%;
}
</style>
