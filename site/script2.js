function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const correctPassword = "gato"; // Senha para a Fase 2

    if (password === correctPassword) {
        window.location.href = "fase3.html"; // Redirecionar para a Fase 3
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
