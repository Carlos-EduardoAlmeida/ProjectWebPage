var cont = 0
function next() {
    if(cont == 0){
        document.querySelector("div.banner").style.backgroundImage="url(./Images/imagemSutiafeminino.png)"
        cont = 1
    }else{
        document.querySelector("div.banner").style.backgroundImage="url(./Images/Banner3.png)"
        cont = 0
    }
}