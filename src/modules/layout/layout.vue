<script setup>
import { onMounted} from 'vue'
onMounted(()=>{
  console.log('layout')
})
</script>

<template>
 <section>
    <router-view></router-view>
 </section>
</template>

<style scoped>
</style>
