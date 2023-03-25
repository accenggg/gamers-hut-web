const emailOrder = document.querySelector('#email-order');
const fullnameOrder = document.querySelector('#nama-lengkap-order');
const kodePesananOrder = document.querySelector('#kode-pesanan-order');
const kategoriOrder = document.querySelector('#kategori-order');
const tipeOrder = document.querySelector('#tipe-order');
const orderDetailOrder = document.querySelector('#order-detail-order');

const dataSession = JSON.parse(sessionStorage.getItem('orderUser'));
const emailUser = Object.keys(dataSession)[0]
const orderUser = dataSession[emailUser];

// input
emailOrder.value = emailUser
fullnameOrder.value = orderUser.fullname
kodePesananOrder.value = orderUser.kodePesanan
kategoriOrder.value = orderUser.kategoriWebsite
tipeOrder.value = orderUser.tipeWebsite
orderDetailOrder.value = orderUser.orderDetail

console.log(orderUser);