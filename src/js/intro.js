function introduction() {

    _.id("intro").innerHTML = "Welcome To";
    setTimeout(function () {
        changeintrotxtcolor("antiquewhite", "310%")
    }, 1000)

    setTimeout(function () {
        changeintrotxtcolor("rgb(0,0,0)", "310%")
    }, 3000)

    setTimeout(function () {
        changeintrotxtcolor("rgb(0,0,0)", "300%");
        _.id("intro").innerHTML = "The Walk";
        changeintrotxtcolor("antiquewhite", "310%")
        _.id("intro").id = "menuTitle"
    }, 5050)
    setTimeout(function () {
        _.id("menuTitle").style.top = "30%"
        _.id("menuTitle").style.fontSize = "310%"
        _.id("menuStartButton").style.opacity = "1"
        _.id("menuOptionButton").style.opacity = "1"

    }, 7200)
}

function changeintrotxtcolor(x, y) {
    _.id("intro").style.color = x;
    _.id("intro").style.fontSize = y;
}
wait = function (waitPeriod) {
    setTimeout(function () {}, waitPeriod)
}


function startGame() {
    blinder = document.createElement("div")
    document.body.appendChild(blinder);
    blinder.id = "blinder";
    blinder.style.backgroundColor = "rgba(0,0,0,0)"
    setTimeout(function () {
        blinder.style.backgroundColor = "rgba(0, 0, 0)"
    }, 100)
    setTimeout(function () {

        document.body.innerHTML = "";

        loadingGif = document.createElement("img")
        document.body.appendChild(loadingGif);
        loadingGif.id = "loading";
        loadingGif.src = "./img/loading.gif"
    }, 500)

    setTimeout(function () {

        window.location = "./the_walk/index.html";

    }, 1000)


}

function skipIntro() {

    _.id("intro").innerHTML = "The Walk";
    changeintrotxtcolor("antiquewhite", "310%")
    _.id("intro").id = "menuTitle"
    _.id("menuTitle").style.top = "30%"
    _.id("menuStartButton").style.opacity = "1"
    _.id("menuOptionButton").style.opacity = "1"




}