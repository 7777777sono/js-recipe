Vue.createApp({
    // ...
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        countUp: function() {
            this.count += 1
        },

    },
}).mount("#app")

Vue.createApp({
    data() {
        return {
            seen: false,
        }
    },
    methods: {
        hyouji: function() {
            this.seen = true
        },
    },
}).mount("#v-if")

Vue.createApp({
    data() {
        return {
            user: null,
        }
    },
    methods: {
        signIn() {
            this.user = {
                name: "ギーク太郎",
            }
        },
        signOut() {
            this.user = null
        },
    },
  }).mount("#v-if-sign-in")

  Vue.createApp({
    data() {
        return {
            animals: ["ふらみんご", "ごりら", "らいおん"],
        }
    },
}).mount("#v-for")

Vue.createApp({
    data() {
        return {
            animals: ["ふらみんご", "ごりら", "らいおん"],
        }
    },
    methods: {
        addAnimal: function() {
            this.animals.push("んらいおん")
        },
    },
}).mount("#v-for-push")

Vue.createApp({
    data() {
        return {
            helloClass: "hello",
        }
    },
}).mount("#v-bind")

Vue.createApp({
    data() {
      return {
        items: 
            [
                {
                    name: "りんご",
                    price: 150,
                    amount: 3,
                },
                {
                    name: "みかん",
                    price: 100,
                    amount: 5,
                },
                {
                    name: "ぶどう",
                    price: 400,
                    amount: 1,
                },
            ],
        }
    },
    computed: {
        totalPrice: function() {
            let price = 0
            for (let i = 0; i < this.items.length; i++) {
            price += this.items[i].price * this.items[i].amount
            }
            return price
        },
    },
}).mount("#computed")

Vue.createApp({
    data() {
      return {
        items: 
            [
                {
                    name: "りんご",
                    price: 150,
                    amount: 3,
                },
                {
                    name: "みかん",
                    price: 100,
                    amount: 5,
                },
                {
                    name: "ぶどう",
                    price: 400,
                amount: 1,
                },
            ],
        }
    },
    computed: {
        totalPrice: function() {
            let price = 0
            for (let i = 0; i < this.items.length; i++) {
                price += this.items[i].price * this.items[i].amount
            }
            return price
        },
        },
    methods: {
        addItem: function(item) {
            item.amount += 1
        },
    },
}).mount("#computed-recalculate")

Vue.createApp({
    data() {
        return {
            inputValue: "",
        }
    },
}).mount("#v-model")

Vue.createApp({
    data() {
        return {
            inputValue: "",
            memo: "",
        }
    },
    created: function() {
        const storedMemo = localStorage.memo
        if (storedMemo) {
            this.memo = storedMemo
        }
    },
    methods: {
        save: function() {
            localStorage.memo = this.inputValue
        },
    },
}).mount("#created")