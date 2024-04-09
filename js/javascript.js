document.querySelector("#see_gallery").addEventListener("click", function(){
    console.log("this works")
    if(this.checked){
        document.querySelector("#gallery_homepage").style.display="grid"
    }
    else{
        document.querySelector("#gallery_homepage").style.display="none"
    }
})