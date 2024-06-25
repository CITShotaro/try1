document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('登録が完了しました！');
            window.location.href = 'index.html'; // 登録後にログインページへリダイレクト
        });
    }

    if(document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if(username === storedUsername && password === storedPassword) {
                alert('ログインに成功しました！');
                window.location.href = 'main.html';//ログイン後にBINGO画面へリダイレクト
            } else {
                alert('ユーザー名またはパスワードが間違っています。');
            }
        });
    }
});
