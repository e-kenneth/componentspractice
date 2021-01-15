<template>
  <div>
    <!-- <input v-on:keyup.enter="additem()" type="text" v-model="input" /> -->
    <ToDoInput v-on:newinput="additem($event)" ></ToDoInput>
    <div v-for="item in item" :key="item.id">
        <ToDoItem :item="item"></ToDoItem>

    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import ToDoInput from "./ToDoInput.vue";
export default {
  components: {
      ToDoItem,
      ToDoInput,
  },  
  data() {
    return {
      item: [
        { id: 1, nama: "kenneth" , done:true},
        { id: 2, nama: "george" , done:true},
        { id: 3, nama: "edwin" , done:false},
      ],
    //   input: "",
      lastid: 4,
    };
  },
  methods: {
    additem(text) {
    //   if (this.input != "") {
        let newitem = { id: this.lastid, nama: text, done:false};
        this.item.push(newitem);
        this.lastid++;
        // this.input = "";
    //   }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>