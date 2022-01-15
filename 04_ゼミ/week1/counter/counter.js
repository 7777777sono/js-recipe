const display = document.getElementById("display")
const pulsButton = document.getElementById("puls-button")
const minusButton = document.getElementById("minus-button")
const multiplicationButton = document.getElementById("multiplication-button")
const divisionButton = document.getElementById("division-button")
const equalButton = document.getElementById("equal-button")
const oneButton = document.getElementById("one-button")
const twoButton = document.getElementById("two-button")
const threeButton = document.getElementById("three-button")
const fourButton = document.getElementById("four-button")
const fiveButton = document.getElementById("five-button")
const sixButton = document.getElementById("six-button")
const sevenButton = document.getElementById("seven-button")
const eightButton = document.getElementById("eight-button")
const nineButton = document.getElementById("nine-button")

let count=0
let pre=0  //先に入力した値を格納しておく変数
let operator=""  //演算子を格納する変数 
let equal=false
//let no_num=false

// ボタンをクリックしたときの処理を登録


minusButton.onclick=function(){
    if(equal==false){
        pre=count
    }
    count=0
    operator="-"
    display.textContent=operator
}

pulsButton.onclick=function(){
    if(equal==false){
        pre=count
    }
    count=0
    operator="+"
    display.textContent=operator
}

multiplicationButton.onclick=function(){
    if(equal==false){
        pre=count
    }
    count=0
    operator="*"
    display.textContent=operator
}

divisionButton.onclick=function(){
    if(equal==false){
        pre=count
    }
    count=0
    operator="/"
    display.textContent=operator
}

equalButton.onclick=function(){
    if(operator=="+"){
        count=count+pre
    }
    else if(operator=="-"){
        count=pre-count
    }
    else if(operator=="*"){
        count=count*pre
    }
    else if(operator=="/"){
        count=pre/count
    }
    equal=true
    pre=count
    operator=""
    display.textContent=count
    count=0
}

oneButton.onclick=function(){
    const num=1
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

twoButton.onclick=function(){
    const num=2
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

threeButton.onclick=function(){
    const num=3
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

fourButton.onclick=function(){
    const num=4
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

fiveButton.onclick=function(){
    const num=5
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

sixButton.onclick=function(){
    const num=6
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

sevenButton.onclick=function(){
    const num=7
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

eightButton.onclick=function(){
    const num=8
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}

nineButton.onclick=function(){
    const num=9
    if(count==0){
        count=num
    }
    else{
        count=count*10+num
    }
    display.textContent=count
}
