const twitter = document.getElementById("twitter-btn");
const facebook = document.getElementById("facebook-btn");
const enter = document.getElementById("enter");

function enterHere() {
    window.location.href = "https://MClarkSoftwareEngineer.github.io/little-songhai-utilities/coffee/";
}
function sendToTwitter() {
    window.location.href = "https://twitter.com/Little_Songhai";
}
function sendToFaceBook() {
    window.location.href = "https://www.facebook.com/MobileAfricanCoffee";
}
enter.addEventListener('click', enterHere);
facebook.addEventListener('click', sendToFaceBook);
twitter.addEventListener('click', sendToTwitter);