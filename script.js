(() => {
    setInterval(animation_letters, 1000);
})();

function animation_letters() {
    const letters = document.getElementsByClassName("letter");
    var rand = Math.floor(Math.random() * letters.length);
    letters[rand].classList.add("animate");
}