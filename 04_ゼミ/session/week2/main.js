const MemoInput=document.getElementById("memo-input")
const addButton=document.getElementById("add-button")
const cardsContainer=document.getElementById("memo-container")

addButton.onclick=function(){
    console.log(MemoInput.value)
    const card = document.createElement("div") // <div></div>
    const deleteButton= document.createElement("button") // <button></button>
    card.className = "card" // <div class="card></div>
    card.textContent = MemoInput.value // <div class="card>こんばんは</div>
    deleteButton.id="delete-button"
    deleteButton.textContent="削除"
    cardsContainer.append(card)
    card.append(deleteButton)
    deleteButton.onclick=function(){
        card.remove()
    }
    MemoInput.value=null
}

