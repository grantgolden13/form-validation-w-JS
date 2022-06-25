const form = document.querySelector('form');

const email = document.getElementById('email');
const emailErrorSpan = document.querySelector('#email + span.error');

const zip = document.getElementById('zip');
const zipErrorSpan = document.querySelector('#zip + span.error');

email.addEventListener('input', function(e) {
    if (email.validity.valid) {
        emailErrorSpan.textContent = "";
        emailErrorSpan.className = "error";
    } else {
        showEmailError();
    }
});

zip.addEventListener('input', function(e) {
    if(zip.validity.valid) {
        zipErrorSpan.textContent = "";
        zipErrorSpan.className = "error";
    } else {
        showZipError();
    }
});

form.addEventListener('submit', function(e) {
    if (!email.validity.valid) {
        e.preventDefault();
        showEmailError();
    } else if (!zip.validity.valid) {
        e.preventDefault();
        showZipError();
    }
});

const showEmailError = function(e) {
    if (email.validity.valueMissing) {
        emailErrorSpan.textContent = "Please enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailErrorSpan.textContent = "Value needs to be an email address";
    } else if (email.validity.tooShort) {
        emailErrorSpan.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailErrorSpan.className = "error active";
}

const showZipError = function(e) {
    if (zip.validity.valueMissing) {
        zipErrorSpan.textContent = "Please enter your zip code";
    } else if (zip.validity.typeMismatch) {
        zipErrorSpan.textContent = "Value needs to be a zip code";
    } else if(zip.validity.tooShort) {
        zipErrorSpan.textContent = `Zip Code should be at least ${zip.minLength} numbers; you entered ${zip.value.length}.`
    }
 }