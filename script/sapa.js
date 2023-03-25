const waktu = document.querySelector('#waktu');

const today = new Date();
const hourNow = today.getHours();

if (hourNow >= 0 && hourNow < 11) {
  waktu.innerHTML = 'Pagi!'
} else if (hourNow >= 11 && hourNow < 15) {
    waktu.innerHTML = 'Siang!'
} else if (hourNow >= 15 && hourNow < 18) {
    waktu.innerHTML = 'Sore!'
} else {
    waktu.innerHTML = 'Malam!'
}
