function showMessage(input, message, valid) {
    const msg = input.parentNode.querySelector("#error");
    msg.innerText = message;
    input.className = valid ? "email valid" : "email invalid";
    return valid;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    const emailRegex = /@(gmail|outlook|hotmail|yahoo|).com\s*$/
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

const form = document.querySelector("#demo");

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please make sure this isn’t a personal email address";
const INVALID_ITEMS = ['1']
const INVALID_IMPORTANT = ['storage', 'search', 'price']

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    if (emailValid) {
        if (INVALID_ITEMS.includes(form.elements["radio-select"].value) || INVALID_IMPORTANT.includes(form.elements["important"].value)) {
            window.location.replace('./pages/fail.html');
        } else {
            debugger;
            window.location.replace('./pages/success.html');
        }
    }

});
