<template>
  <div class="container">
    <Human />
    <Human />
    <Human />
    <Human />
    <Human />
  </div>
</template>

<script>
import Human from "@/components/Human.vue";


export default {
    components: { 
      Human, 
    }
}
</script>

<style>
  .container {
    display: flex;
  }
</style>
