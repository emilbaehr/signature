const nameInput = document.getElementById("name");
const titleInput = document.getElementById("job-title");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone-number");

trackInput(nameInput, document.getElementById("name-value"))
trackInput(titleInput, document.getElementById("title"))
trackEmailInput(emailInput, document.getElementById("email-value"))
trackInput(phoneInput, document.getElementById("phone-value"))

function trackInput(inputField, outputField) {
    inputField.addEventListener("input", () => {
        outputField.innerHTML = inputField.value
    });
}

function trackEmailInput(inputField, outputField) {
    inputField.addEventListener("input", () => {
        outputField.innerHTML = inputField.value
        outputField.href = inputField.value
        let emailLink = document.getElementById("email-value-href");
        emailLink.href = "mailto:" + inputField.value
    });
}

function copyToClipboard(html) {
    var container = document.createElement("div");
    container.innerHTML = html;
    container.style.position = "fixed";
    container.style.pointerEvents = "none";
    container.style.opacity = 0;
    document.body.appendChild(container);
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(container);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.body.removeChild(container);
    alert("Copied");
}

document.querySelector("button").onclick = function () {
    var htmlEditor = document.getElementById("html-to-copy");
    copyToClipboard(htmlEditor.innerHTML);
};
