// shikokuプロパティを持つオブジェクトの配列
const shikoku = [
    { city: "高松" },
    { city: "松山" },
    { city: "高知" },
    { city: "徳島" },
  ]
  
  // `city`プロパティが "徳島" のオブジェクトを取得
  const tokushima = shikoku.find((obj) => {
    return obj.city === "徳島"
  })
  
  console.log(tokushima) // => { city: "徳島" }