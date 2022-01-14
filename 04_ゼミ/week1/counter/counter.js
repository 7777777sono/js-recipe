const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

let count=0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
    // ここにクリック後の処理を書く
    count+=1
    display.textContent=count
}

minusButton.onclick=function(){
    count-=1
    display.textContent=count
}

doubleButton.onclick=function(){
    count*=2
    display.textContent=count
}
