<template>
  <div class="container">
    <Human v-for="cloth in cloths" v-bind:key="cloth" v-bind:cloth="cloth" v-bind:cloths="cloths"/>
  </div>
</template>

<script>
import Human from "@/components/Human.vue"

export default {
  components: { 
    Human 
  },
  data(){
    return {
      cloths: [
        "👚",
        "👘",
        "🧥",
        "👕",
        "👗"
      ],
    }
  },
}
</script>

<style>
  .container {
    display: flex;
  }
</style>
