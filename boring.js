const button = document.querySelector("#lit")
const modal = document.querySelector("#myModal")
const modalImg = document.querySelector("#explosionImg")
const audio = new Audio()
audio.src = "images/sound.mp3"

function explode() {
    audio.play();
    modal.style.display = "block";
    redirect();
}

function redirect () {
    var interval = setInterval(myURL, 2500);
    var result = document.getElementById("result");
    result.innerHTML = "<b> The page will redirect after delay of 5 seconds setInterval() method.";
}

function myURL() {
    document.location.href = 'lit.html';
    clearInterval(interval);
}
