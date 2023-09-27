function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.toLowerCase().trim(); // Converta a senha para minúsculas e remova espaços em branco
    const correctPassword = "cufena"; // Senha correta

    if (password === correctPassword) {
        window.location.href = "fase13.html"; // Redirecionar para a Fase 12 após inserir a senha correta
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
