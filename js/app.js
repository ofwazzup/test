let modal = document.querySelector('.window__call');
const btn = document.querySelector('.block__call');
let span = document.getElementsByClassName('close-img')[0];

btn.onclick = function() {
    modal.style.display = "block";
}
modal.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
span.onclick = function() {
    modal.style.display = "none";
}