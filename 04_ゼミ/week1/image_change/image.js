const figure = document.getElementById("figure")

figure.onclick = function() {
    figure.classList.toggle("rounded")
}

document.onkeydown=function(e){
    if(e.key=="Enter"){
        figure.classList.toggle("rounded")
    }
}
