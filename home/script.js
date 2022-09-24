const twitter = document.getElementById("twitter-btn");
const facebook = document.getElementById("facebook-btn");

function sendToTwitter() {
    window.location.href = "https://twitter.com/Little_Songhai";
}
function sendToFaceBook() {
    window.location.href = "https://www.facebook.com/MobileAfricanCoffee"
}
facebook.addEventListener('click', sendToFaceBook);
twitter.addEventListener('click', sendToTwitter);