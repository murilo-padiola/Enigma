function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const correctPassword = "tadala"; // Senha para a Fase 4

    if (password === correctPassword) {
        window.location.href = "fase5.html"; // Redirecionar para a Fase 5
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
