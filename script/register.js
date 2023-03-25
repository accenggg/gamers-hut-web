const form = document.querySelector('form');
const buttonRegister = document.querySelector('#register');

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const usia = document.querySelector('#usia').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    ;
    const motto = document.querySelector('#motto').value;
    const checkbox = document.querySelector('#persetujuan');

    if (confirm("Mendaftar sekarang?")){
        if (checkbox.checked) {
            if(email != '' && username != '' && password != '' && gender != '' && motto != ''){

                let data = JSON.parse(localStorage.getItem('userData')) || {};

                data[username] = { email,password, usia, gender,motto };

                localStorage.setItem('userData', JSON.stringify(data));

                alert("Data berhasil disimpan")

                window.location.href = '../index.html'
            }
            else{
                alert("Harap isi semua data")
            }

        } else {
            alert("Centang syarat dan ketentuan kami!")
            return;
        }
    }
});
