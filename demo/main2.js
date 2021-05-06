const url = new Url(location.href);
const protocolButton = document.getElementById("protocolButton");
protocolButton.addEventListener('click', () => {
    const input = document.getElementById("protocolinput");
    url.protocol = input.value;
});

const userButton = document.getElementById("userButton");
userButton.addEventListener('click', () => {
    const input = document.getElementById("userinput");
    url.user = input.value;
});

const passButton = document.getElementById("passButton");
passButton.addEventListener('click', () => {
    const input = document.getElementById("passinput");
    url.pass = input.value;
});

const hostButton = document.getElementById("hostButton");
hostButton.addEventListener('click', () => {
    const input = document.getElementById("hostinput");
    url.host = input.value;
});
