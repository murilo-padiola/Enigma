function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const correctPassword = "fish bowl cat"; // Senha para a Fase 3

    if (password === correctPassword) {
        window.location.href = "fase4.html"; // Redirecionar para a Fase 4
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
