const threeLove=function(number){
    let tenCount=0  //10の何乗か確認する変数
    for(let i=1;i<=number;i++){
        if(Math.floor(i/(10**tenCount))===10){
            tenCount++
        }
        //数値から文字列
        const str=String(i)
        for(let j=tenCount;j>=0;j--){
            //文字列から数値
            if(Number(str[j])==3){
                console.log(i+"!!!!!!!")
                break
            }
            else if(j==0)[
                console.log(i)
            ]
        }
    }
}

threeLove(400)
