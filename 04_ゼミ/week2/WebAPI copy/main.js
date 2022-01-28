const Button = document.getElementById("update")
const dogBreeds = document.getElementById("dog-breeds")
const imageNum = document.getElementById("image-num")
const inputNum = document.getElementById("input-num")

Button.textContent="更新"

const image_update=function(){
    // https://api.thecatapi.com/v1/images/search
    // https://dog.ceo/api/breeds/image/random
    // 指定したサーバーにデータを取りに行く
    // fetch()を使うときは、ひとつめのthen()の中身は必ず同じで、ふたつめのthen()でdataを使ってなにか処理をする
    for(let i=1;i<=inputNum.value;i++){
        const image = document.createElement("img")
        image.id = "dog-image"+i
        image.src = ""
        imageNum.append(image)
        const imageElement = document.getElementById("dog-image"+i)
        fetch("https://dog.ceo/api/breed/"+dogBreeds.value+"/images/random")  // まず fetch でデータの取得をしにいき、
            .then((res) => {
                // fetch がおわったら１つめの then の中の関数を実行し、
                return res.json() // 結果を json として読み込んで、次の then に渡す
            })
            .then((data) => {
                // dataは配列になっている
                // １つめが終わったら２つめの then の中の関数を実行します。
                console.log(data.message)
                imageElement.src = data.message // 画像を表示するdata[0].url
            })
    }
}

Button.onclick=function(){
    image_update()
    dogBreeds.value=null
    inputNum.value=null
}

image_update()
