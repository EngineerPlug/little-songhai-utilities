const twitter = document.getElementById("twitter-btn");
const facebook = document.getElementById("facebook-btn");

function sendToTwitter() {
    window.location.href = "https://twitter.com/Little_Songhai";
}

twitter.addEventListener('click', sendToTwitter);