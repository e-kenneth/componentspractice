<template>
  <div>
    <button @click="add">{{ count }}</button>
    <input type="text" v-model="count" />
  </div>
</template>

<script>
export default {
  computed: {
    count: {
      //
      get () {
        return this.$store.state.count;
      },
      set (value) {
        this.$store.commit("setcount", value);
      },
    },
  },
  methods: {
    add() {
      //   this.$store.state.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>