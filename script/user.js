const namaUser = document.querySelectorAll('.nama-user');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const gender = document.querySelector('#gender');
const usia = document.querySelector('#usia');
const email = document.querySelector('#email');
const motto = document.querySelector('#motto');

const exit = document.querySelectorAll('.exit');
const sapaUser = document.querySelectorAll('.sapa-user');

exit.forEach(function(element, index){
    element.addEventListener('click', function (e) {
        e.preventDefault()
        sapaUser[index].classList.add('hidden')
    });
})


const username = currentUser.username;


namaUser.forEach(function(el){
    el.innerHTML = username
})

email.innerHTML = currentUser.email
gender.innerHTML = currentUser.gender
usia.innerHTML = currentUser.usia
motto.innerHTML = currentUser.motto

