
// script for main
const colors = ["green", "red", "rgba(133, 122, 200, 0.8)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandom(){
    return randomNumber = Math.floor(Math.random() * colors.length);
}