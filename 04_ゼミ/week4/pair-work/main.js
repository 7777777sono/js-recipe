Vue.createApp({
    data(){
        return{
            inputMoney: 0,
            currentMoney: 0,
            logs: [],
        }
    },

    methods: {
        payment: function(){
            if(this.inputMoney>=0){
                this.currentMoney+=Number(this.inputMoney)
                this.logs.push({date:new Date(),sousa:"入金",money:this.inputMoney})
            }
            this.inputMoney=0
        },
        investment: function(){
            if(this.currentMoney>=this.inputMoney&&this.inputMoney>=0){
                this.currentMoney-=Number(this.inputMoney)
                this.logs.push({date:new Date(),sousa:"出金",money:this.inputMoney})
            }
            this.inputMoney=0
        }
    },

}).mount("#atm")