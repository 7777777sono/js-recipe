const MemoInput=document.getElementById("memo-input")
const addButton=document.getElementById("add-button")
const cardsContainer=document.getElementById("memo-container")

addButton.onclick=function(){
    console.log(MemoInput.value)
    const card = document.createElement("div") // <div></div>
    card.className = "card" // <div class="card></div>
    card.textContent = MemoInput.value // <div class="card>こんばんは</div>
    cardsContainer.append(card)
    MemoInput.value=null
}
