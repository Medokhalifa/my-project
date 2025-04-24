let type = document.getElementById('type')
let text = document.getElementById('text')
let circle = document.getElementById('circle')
let Cercle = document.getElementById('Cercle')
let namess = document.getElementById('namess')

function names(num) {
    type.innerHTML = num
    number = 0
    text.value = number++

}
let number = 0
Cercle.onclick = function() {
    text.value = number++

}
circle.onclick = function() {
    number = 0
    text.value = number++


}