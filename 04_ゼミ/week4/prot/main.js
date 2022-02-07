const input = document.getElementById("input")
const button = document.getElementById("button")
const container = document.getElementById("container")

// データ（状態）
const list = JSON.parse(localStorage.list || "[]")
// 以下と同じ意味
// let list = []
// if (localStorage.list) {
//   list = JSON.parse(localStorage.list)
// }

button.onclick = function() {
  const text = input.value

  // データを更新するコード
  list.push(text)
  localStorage.list = JSON.stringify(list)

  // 表示のロジック
  container.textContent = ""
  for (const text of list) {
    const card = document.createElement("div")
    card.textContent = text
    container.appendChild(card)
  }
}