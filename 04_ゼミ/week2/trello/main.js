const list_m=document.getElementById("main-container")
const list_name=["大学","家事"]

const list_create = function(){
    const list_num=2
    for(let i=0;i<list_num;i++){
        const list = document.createElement("div")
        list.className="list-container"
        list_m.append(list)
        const header = document.createElement("div")
        header.className="header-container"
        header.textContent=list_name[i]
        list.append(header)
        const cards = document.createElement("div")
        cards.className="cards-container"
        cards.id="cards-container"+(i+1)
        list.append(cards)
        const footer = document.createElement("div")
        footer.className="list-footer"
        list.append(footer)
        const input = document.createElement("div")
        input.className="input-container"
        footer.append(input)
        const input1 = document.createElement("input")
        input1.className="input-todo"
        input1.type="text"
        input1.id="input-todo"+(i+1)
        input.append(input1)
        const Button = document.createElement("div")
        Button.className="input-button"
        Button.id="add-button"+(i+1)
        Button.textContent="追加"
        input.append(Button)
    }
}

list_create()

const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

const inputElement1 = document.getElementById("input-todo"+(list_name.length-1))
const container1 = document.getElementById("cards-container"+(list_name.length-1))
const addButton1 = document.getElementById("add-button"+(list_name.length-1))

const inputElement2 = document.getElementById("input-todo"+(list_name.length))
const container2 = document.getElementById("cards-container"+(list_name.length))
const addButton2 = document.getElementById("add-button"+(list_name.length))

// 追加ボタンを押したときの処理を登録
addButton.onclick = function() {
    // カードを作成する
    const card = createCard(inputElement.value)
    container.append(card)

    // 入力欄を空にする
    inputElement.value = ""
}

addButton1.onclick = function() {
    // カードを作成する
    const card = createCard(inputElement.value)
    container1.append(card)

    // 入力欄を空にする
    inputElement1.value = ""
}

addButton2.onclick = function() {
    // カードを作成する
    const card = createCard(inputElement.value)
    container2.append(card)

    // 入力欄を空にする
    inputElement2.value = ""
}

inputElement.onkeydown=function(e){
    if(e.key==="Enter"&&inputElement.value!=""){
        // カードを作成する
        const card = createCard(inputElement.value)
        container.append(card)

        // 入力欄を空にする
        inputElement.value = ""
    }
    console.log(e.key)
}

inputElement1.onkeydown=function(e){
    if(e.key==="Enter"&&inputElement1.value!=""){
        // カードを作成する
        const card = createCard(inputElement1.value)
        container1.append(card)

        // 入力欄を空にする
        inputElement1.value = ""
    }
    console.log(e.key)
}

inputElement2.onkeydown=function(e){
    if(e.key==="Enter"&&inputElement2.value!=""){
        // カードを作成する
        const card = createCard(inputElement2.value)
        container2.append(card)

        // 入力欄を空にする
        inputElement2.value = ""
    }
    console.log(e.key)
}


// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
    // カードの枠を作る
    const card = document.createElement("div")
    card.className = "card"

    // テキストを表示する部分を作る
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)

    // 削除ボタンを作る
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    //マウスカーソルがHTML要素に乗ったとき
    deleteButton.addEventListener('mouseover', function() {
        deleteButton.textContent= "削除"
    });

    //マウスカーソルがHTML要素から離れたとき
    deleteButton.addEventListener('mouseout', function() {
        deleteButton.textContent= null
    });

    // 削除ボタンを押したときの処理を登録
    deleteButton.onclick = function() {
        // カードを削除する
        card.remove()
    }
    card.append(deleteButton)
    return card
}
