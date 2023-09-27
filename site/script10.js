function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.toLowerCase(); // Converta a senha para minúsculas
    const correctPassword = "3bx"; // Senha correta

    if (password === correctPassword) {
        window.location.href = "fase11.html"; // Redirecionar para a Fase 9 após inserir a senha correta
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
