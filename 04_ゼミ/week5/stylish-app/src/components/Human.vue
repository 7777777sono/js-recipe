<template>
  <div class="human">
    <div class="atama">
      <div>😊</div>
    </div>
    <div class="karada" v-if="judge">
      💪<div class="cloth" v-on:click="change">{{cloth}}</div>💪
    </div>
    <div class="karada" v-on:click="change" v-else>
      💪<div class="cloth" v-on:click="change">{{currentCloth}}</div>💪
    </div>
    <div class="ashi">
      <div>🦵🦵</div>
    </div>
  </div>
</template>

<script>
    export default {
        props:{
            cloth:{
                type: String,
                required: true
            },
            cloths:{
                type: Array,
                required: true
            }
        },
        data() {
            return {
                number: 0,
                currentCloth: ""
            }
        },
        methods: {
            change: function(){
                this.number=Math.floor(Math.random() * this.cloths.length)
                console.log(this.cloth===this.currentCloth)
                this.currentCloth=this.cloths[this.number]
            }
        },
        computed: {
            judge: function(){
                if(this.currentCloth===""){
                    return true
                }
                else{
                    return false
                }
            }
        },
        created() {
            console.log(this.cloths)
        }
    }
</script>

<style>
.human {
  width: 100%;
  font-size: 3rem;
  text-align: center;
}

.cloth{
  display: inline;  
}
</style>