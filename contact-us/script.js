const submit = document.getElementById("submit");
const form = document.getElementById("form");
const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe9FGqwBMGg8UT4hCrqvFkzidJBhaCd5_NYX-gALl9wjFXByA/formResponse";

form.addEventListener('submit', e => {
    e.preventDefault();
    submit.disabled = true;
    submit.innerHTML = "Submitting...";
    submit.style.backgroundColor = "pink";
    console.log(form);
    fetch(url, { mode: 'no-cors', method: 'POST', body: new FormData(form)})
    .then(response => { 
        submit.disabled = false;
        submit.innerHTML = "Submit";
        submit.style.backgroundColor = "";
        form.reset();
        alert('Thank you, we will be in touch with you shortly!', response)})
    .catch(error => alert('Error!', error.message))
});