<script setup>
import { onBeforeUpdate, onMounted, onUpdated, reactive, ref } from 'vue';
import Spaceship from './components/Spaceship.vue'
import API from './components/API'
const renderComponent = ref(false);
let alldata = reactive({})

let url = 'https://swapi.dev/api/starships'
onMounted(async () => {
  (alldata = await API._getData(url)).then(renderComponent.value = true)
})
function loadPage(newUrl) {
  url = newUrl
  renderComponent.value = false
}
onBeforeUpdate(async () => {
  (alldata = await API._getData(url)).then(renderComponent.value = true)
})
</script>

<template>
  <header>

    <div class="wrapper">
      <Spaceship v-if="renderComponent" v-for="item in alldata.results" v-bind:data="item" />
      <div class="buttons">
        <button class="button-first" v-if="renderComponent && alldata.previous != null" @click="loadPage(alldata.previous)">Prev</button>
        <button class="button-second" v-if="renderComponent && alldata.next != null" @click="loadPage(alldata.next)">Next</button>
      </div>
      
    </div>
  </header>
</template>

<style scoped>
.buttons {
  width: 90%;

}
.button-first {
  width: 300px;
  height: 100px;
}
.button-second {
  float: right;
  width: 300px;
  height: 100px;
}
</style>
