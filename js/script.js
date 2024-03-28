function submitForm() {
    //mendapatkan form
    let form = document.forms['contactForm'];
    //mendapatkan inputannya
    let userName = form['name'].value;
    
    //conditional validation
    if (userName == ''){
        alert('Periksa Kembali Inputan Anda')
     } else { alert('Selamat Datang' + userName);
}

document.getElementById('send-Button').addEventListener("click", () => submitForm());
}