const buttonPosition=document.getElementById("button-position")
let choice_num=4

const buttonCreate=function(){
    for(let i=1;i<=choice_num;i++){
        const list=document.createElement("button")
        list.id="choice-"+i
        buttonPosition.append(list)
    }
}

buttonCreate()

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4=document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
    text: "このお方のお名前は何でしょう？",
    image: "https://manga-netabare-kanso.com/wp-content/uploads/2020/07/EKI1l3kUcAMq7bf.jpg",
    choices: [
        {
            text: "無惨",
            feedback:
                "残念！そいつではないよ",
        },
        {
            text: "黒死牟",
            feedback: "残念！違うなぁ",
        },
        {
            text: "矢琶羽",
            feedback: "正解！矢琶羽は、鬼滅の刃の人気キャラだよ！",
        },
        {
            text: "サイコロステーキ先輩",
            feedback: "惜しい！そのお方も人気だよ！",
        },
    ],
}
  
// quiz を画面に表示する関数
const reloadQuiz = function() {
    // 問題文を表示
    quizText.textContent = "Q. " + quiz.text
  
    // 画像を表示
    quizImage.src = quiz.image
  
    // 選択肢（ボタン）の中身を表示
    choice1.textContent = quiz.choices[0].text
    choice2.textContent = quiz.choices[1].text
    choice3.textContent = quiz.choices[2].text
    choice4.textContent=quiz.choices[3].text
}
  
// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
    // ゴリアテを選択
    choose(0)
}
choice2.onclick = function() {
    // ゼニガメを選択
    choose(1)
}
choice3.onclick = function() {
    // ガニメデを選択
    choose(2)
}

choice4.onclick = function(){
    choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()