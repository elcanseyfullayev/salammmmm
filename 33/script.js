const listopen = document.querySelectorAll(".lists")

const p = document.querySelectorAll(".lists p")

for (let i = 0; i < listopen.length; i++) {
    listopen[i].addEventListener("click",function () {
        p[i].classList.toggle("active")
        
    })
}


