document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    if (username === "1" && password === "1") {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página, por exemplo:
        window.location.href = 'dashboard/dashboard.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});