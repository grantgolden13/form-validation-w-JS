const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');

email.addEventListener('input', function(e) {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
    }
});

zip.addEventListener('input', function(e) {
    if(zip.validity.valid) {
        zipError.textContent = "";
        zipError.className = "error";
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
        emailError.textContent = "Please enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Value needs to be an email address";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}

const showZipError = function(e) {
    if (zip.validity.valueMissing) {
        zipError.textContent = "Please enter your zip code";
    } else if (zip.validity.typeMismatch) {
        zipError.textContent = "Value needs to be a zip code";
    } else if(zip.validity.tooShort) {
        zipError.textContent = `Zip Code should be at least ${zip.minLength} numbers; you entered ${zip.value.length}.`
    }
 }