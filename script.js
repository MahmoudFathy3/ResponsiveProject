let SwicthLis = document.querySelector(".menu");
let myMenu = document.querySelector(".toggle");
let close = document.querySelector(".close");
myMenu.onclick = function() {;
    SwicthLis.style.display = "flex";
}

close.onclick = function() {
    SwicthLis.style.display = "none";
}

document.onkeyup = function(e) {
    if (e.key === "Escape") {
        SwicthLis.style.display = "none";

        ;
    }
}

// Show button top 
let showBtn = document.querySelector(".up");

window.onscroll = function() {

        this.scrollY >= 1000 ? showBtn.classList.add("show") : showBtn.classList.remove("show");
    }
    // Back to top page
showBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}