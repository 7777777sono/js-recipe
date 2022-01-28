const figure = document.getElementById("figure")
let count=0 

figure.onclick = function() {
    if(count%3==0){
        figure.classList.toggle("rounded")
        count++
    }
    else if(count%3==1){
        figure.classList.toggle("rounded")
        figure.classList.toggle("triangle")
        count++
    }
    else if(count%3==2){
        figure.classList.toggle("triangle")
        figure.classList.toggle("rounded")
        figure.classList.toggle("rounded")
        count++
    }
    console.log(count)
}

document.onkeydown=function(e){
    if(e.key=="Enter"){
        if(count%3==0){
            figure.classList.toggle("rounded")
            count++
        }
        else if(count%3==1){
            figure.classList.toggle("rounded")
            figure.classList.toggle("triangle")
            count++
        }
        else if(count%3==2){
            figure.classList.toggle("triangle")
            figure.classList.toggle("rounded")
            figure.classList.toggle("rounded")
            count++
        }
    }
}
