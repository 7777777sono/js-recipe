const button = document.getElementById("button")

let count = 0
let i=1

const genkifunction = function(num){
    if(num%3==0){
        console.log(num+"!!!!!!!")
    }
    else{
        console.log(num)
    }
}

const countUp = function() {
    // count を更新
    count += 1
    let second=0
    // count を秒単位にして表示
    second = count / 100
    if(second==i){
        genkifunction(i)
        i++
    }
}

let id=null

button.onclick = function() {
    if (id === null) {
        // start
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    }
    else {
        // stop
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
}
