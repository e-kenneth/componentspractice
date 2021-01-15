<template>
  <div id="app">
  
       <ToDoList></ToDoList>

  </div>
</template>

<script>
import ToDoList from './components/Testvuex.vue'
// import ToDoList from './components/Normal/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
#app {

}
</style>
