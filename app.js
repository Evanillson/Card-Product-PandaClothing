const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")

const img = document.querySelector(".img")
const btn_fav = document.getElementById("card-fav");

img1.addEventListener("click", function(){
    img.src = "./src/imgs/Imags - Full/Camiseta_Manga_Longa_Basquete_Pink.avif"
})

img2.addEventListener("click", function(){
    img.src = "./src/imgs/Imags - Full/Camiseta_Manga_Longa_Basquete_Black.avif"
})

img3.addEventListener("click", function(){
    img.src = "./src/imgs/Imags - Full/Camiseta_Manga_Longa_Basquete_Gray.avif"
    
})  

img4.addEventListener("click", function(){
    img.src = "./src/imgs/Imags - Full/Camiseta_Manga_Longa_Basquete_Green.avif"
})

btn_fav.addEventListener("click", ()=>{
    btn_fav.classList.toggle('active')
})
