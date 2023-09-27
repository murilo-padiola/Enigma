function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.toLowerCase(); // Converta a senha para minúsculas
    const correctPassword = "bogvmgo"; // Senha correta
    const reversedPassword = "bogvm";

    if (password === correctPassword) {
        window.location.href = "fase8.html"; // Redirecionar para a Fase 8 após inserir a senha correta
    } else if (password === reversedPassword) {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
