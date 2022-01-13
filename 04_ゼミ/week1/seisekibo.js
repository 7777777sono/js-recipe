const seisekibo = [
    { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
    { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
    { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

const undoudekiruSeito=[]

for(let i=0;i<seisekibo.length;i++){
    if(seisekibo[i].taiiku>=3){
        undoudekiruSeito.push(seisekibo[i])
    }
}

console.log(undoudekiruSeito)
