function validateForm(event) {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Lūdzu, ievadiet derīgu e-pasta adresi");
        return false;
    }
    return true;
}
function onSubmit(token) {
    document.getElementById("contact-form").submit();
}
