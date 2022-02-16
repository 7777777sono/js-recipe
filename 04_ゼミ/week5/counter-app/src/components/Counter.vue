<template>
    <div v-if="judge">{{count}}</div>
    <div v-else>初期値が整数ではないので使用できません。</div>
    <button v-on:click="countUp" v-bind:disabled="disabledJudge">+1</button>
</template>

<script>
    export default{
        props: {
            initialValue: {
                type: Number,
                required: true
            },
        },
        data() {
            return {
                count: 0
            }
        },
        methods: {
            countUp: function(){
                this.count++
            }
        },
        computed: {
            judge: function(){
                if(Math.floor(this.count)===this.count){
                    return true
                }
                else{
                    return false
                }
            },
            disabledJudge: function(){
                if(Math.floor(this.count)===this.count){
                    return false
                }
                else{
                    return true
                }
            }
        },
        created() {
            this.count=this.initialValue
            console.log(this.count)
        }
    }
</script>