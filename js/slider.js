var arrowleft = document.querySelector(".arrow-left");
var arrowright = document.querySelector(".arrow-right");
var content1 = document.querySelector(".prew-1");
var content2 = document.querySelector(".prew-2");
var content3 = document.querySelector(".prew-3");

arrowright.addEventListener("click", function() {
    content1.classList.add("none-prew");
    content2.classList.add("show-prew");
});

arrowleft.addEventListener("click", function() {
	content1.classList.remove("none-prew");
    content1.classList.add("show-prew");
    content2.classList.remove("show-prew");
});