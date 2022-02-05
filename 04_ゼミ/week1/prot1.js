// const addAllNumbers = function(str){
//     let num=0
//     let strCount=0
//     let char=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="-"){
//             for(let j=strCount;j<i;j++){
//                 char=char+str[j]
//                 console.log(char)
//                 if(j==i-1){
//                     num=num+Number(char)
//                 }
//                 char=""
//             }
//             strCount=i+1
//         }
//         else if(i==str.length-1&&str[i]!="-"){
//             char=char+str[i]
//             console.log(char)
//             num=num+Number(char)
//         }
//     }
//     console.log(num)
// }

// addAllNumbers("30-20-3")
