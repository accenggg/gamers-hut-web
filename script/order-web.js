const form = document.querySelector('form');
// const buttonRegister = document.querySelector('#register');

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email').value;
    const fullname = document.querySelector('#nama-lengkap').value;
    const kodePesanan = document.querySelector('#kode-pesanan').value;
    const kategoriWebsite = document.querySelector('#kategori').value;
    const tipeWebsite = document.querySelector('input[name="tipe"]:checked') ? document.querySelector('input[name="tipe"]:checked').value : '';
    ;
    const orderDetail = document.querySelector('#order-detail').value;
    const checkbox = document.querySelector('#persetujuan');

    if (confirm("Order sekarang?")){
        if (checkbox.checked) {
            if(email != '' && fullname != '' && kodePesanan != '' && kategoriWebsite != '' && tipeWebsite != '' && orderDetail != ''){

                let data = JSON.parse(sessionStorage.getItem('orderUser')) || {};

                data[email] = { fullname,kodePesanan,kategoriWebsite, tipeWebsite, orderDetail};

                sessionStorage.setItem('orderUser', JSON.stringify(data));

                alert("Order website berhasil")
            }
            else{
                alert("Harap isi semua data")
            }

        } else {
            alert("Centang kotak konfirmasi!")
            return;
        }
    }
});
