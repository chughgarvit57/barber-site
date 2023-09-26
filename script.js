let menuBtn = document.getElementById("menubtn")
let sideNav = document.getElementById("sideNav")
let menuIcon = document.getElementById("menu-icon")

sideNav.style.right = "-250px";

menuBtn.addEventListener("click",function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuIcon.src = "images/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menuIcon.src = "images/menu.png";
    }
})

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});