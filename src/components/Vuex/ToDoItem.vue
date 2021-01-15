<template>
    <div>
        <input type="checkbox" v-model="item.done">
        <input type="text" v-model="item.nama">
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
    }
</script>

<style lang="scss" scoped>

</style>