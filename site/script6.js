function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const correctPassword = "20 21 63 8 91 16 17 55 38"; // Senha para a Fase 6

    if (password === correctPassword) {
        window.location.href = "fase7.html"; // Redirecionar para a Fase 7 após inserir a senha correta
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
