const navigation = document.querySelector('#navigation');
const navDetail = document.querySelector('#nav-detail');
const containerNav = document.querySelector('#container-nav');

navigation.addEventListener('click', function (e) {
    navigation.classList.toggle('ring-1')
    navigation.classList.toggle('rounded-lg')
    navigation.classList.toggle('ring-black')
    navDetail.classList.toggle('hidden')
    containerNav.classList.toggle('mb-48')
});
