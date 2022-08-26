var share = document.querySelector("#share");
var tab = document.querySelector(".tab");
var profile = document.querySelector(".profile");
var bottom = document.querySelector(".card-btm");

share.addEventListener('click', function () {
    share.classList.toggle("sharing");
    tab.classList.toggle("active");
    profile.classList.toggle("activated");
    bottom.classList.toggle("no-pad");
})