const loginButton = document.querySelector('#login-button');
const form = document.querySelector('form');
const danger = document.querySelector('.danger');

// console.log(data['arsel']);


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username == '' || password == ''){
        alert("Harap isi semua data")
    }else{
        let userData = localStorage.getItem('userData')
        let data = JSON.parse(userData)

        if (data && data[username] && data[username].password === password) {
            danger.classList.add('invisible')
            alert('Login Sukses!');
            let currentUser = data[username];
            currentUser.username = username;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            window.location.href = 'home/home.html'
        } else {
            danger.classList.remove('invisible')
        }
    }
});