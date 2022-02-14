<template>
  <div class="human">
    <div class="atama">
      <div v-if="isLaughing">🤣</div>
      <div v-else>😊</div>
    </div>
    <div class="karada" v-on:click="makeLaugh">
      <div>💪👕💪</div>
    </div>
    <div class="ashi">
      <div>🦵🦵</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLaughing: false,
        }
    },
    methods: {
        makeLaugh: function(){
            this.isLaughing=true
        },
    },
}
</script>

<style>
.human {
  width: 100%;
  font-size: 3rem;
  text-align: center;
}
</style>