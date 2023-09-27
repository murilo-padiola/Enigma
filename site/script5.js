function checkPassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.toLowerCase(); // Converta a senha para minúsculas
    const correctPassword = "urso polar"; // Senha correta

    if (password === correctPassword) {
        window.location.href = "fase6.html"; // Redirecionar para a Fase 6 após inserir a senha correta
    } else if (password === "polarni medvjed") {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
