const imageElement = document.getElementById("dog-image")
const Button = document.getElementById("update")

Button.textContent="更新"

const image_update=function(){
    // 指定したサーバーにデータを取りに行く
    // fetch()を使うときは、ひとつめのthen()の中身は必ず同じで、ふたつめのthen()でdataを使ってなにか処理をする
    fetch("https://dog.ceo/api/breeds/image/random")  // まず fetch でデータの取得をしにいき、
        .then((res) => {
            // fetch がおわったら１つめの then の中の関数を実行し、
            return res.json() // 結果を json として読み込んで、次の then に渡す
        })
        .then((data) => {
            // １つめが終わったら２つめの then の中の関数を実行します。
            imageElement.src = data.message // 画像を表示する
        })
}

Button.onclick=function(){
    image_update()
}

image_update()
