document.getElementById("icon").onclick = function(){
    if(items.style.display == "none"){
        items.style.display = "block";
    }else{
        items.style.display = "none";
    }
}

document.body.onresize = function(){
    if(document.body.clientWidth > 600){
        items.style.display = "block";
    }
}