<template>
    <p>hello {{ $store.state.name }}</p>
</template>

<script>
export default {
    name: "ForeverbullBacktests",
    mounted() {
         this.$store.dispatch("getBacktests");
    }
}
</script>

<style>

</style>