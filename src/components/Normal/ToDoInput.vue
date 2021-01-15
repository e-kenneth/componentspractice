<template>
    <div>
        <input v-on:keyup.enter="emitinput" type="text" v-model="newinput">
    </div>
</template>

<script>
    export default {
        methods: {
            emitinput() {
                this.$emit('newinput', this.newinput);
                this.newinput = '';
            }
        },
        data() {
            return {
                newinput: '',
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>