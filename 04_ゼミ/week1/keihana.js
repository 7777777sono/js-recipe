const keihanna = [
    { city: "奈良" },
    { city: "京都" },
    { city: "大阪" }
  ]

// `city`プロパティが"大阪"のオブジェクトのインデックスを取得する
const indexOfNara = keihanna.findIndex(function(obj) {
  // obj には、keihannaの要素が順番に入る。
  // obj.city が '大阪' だったら `true` それ以外は false がreturnされる
  return obj.city === "大阪"
})

console.log(indexOfNara) // => 2
console.log(keihanna[indexOfNara]) // => { city: "奈良" }