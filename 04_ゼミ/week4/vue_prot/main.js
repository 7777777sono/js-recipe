Vue.createApp({
    data() {
        return {
            text: "",
            list: JSON.parse(localStorage.list || "[]"), // ["こんにちは", "おっす"]
            message: "ハロー",
        }
    },
    methods: {
        addCard: function() {
            this.list.push(this.text)
            localStorage.list = JSON.stringify(this.list)
        },
        changeMessage: function() {
            this.message = "ナマステ"
        },
    },
}).mount("#app")