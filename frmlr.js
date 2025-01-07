function validateForm() {
    // Mengambil nilai input dari formulir
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validasi Nama Pengguna
    if (username == "") {
        document.getElementById('error-message').innerText = "Nama Pengguna tidak boleh kosong!";
        return false;
    }

    // Validasi Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        document.getElementById('error-message').innerText = "Email tidak boleh kosong!";
        return false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('error-message').innerText = "Format email tidak valid!";
        return false;
    }

    // Validasi Password
    if (password == "") {
        document.getElementById('error-message').innerText = "Password tidak boleh kosong!";
        return false;
    }

    // Validasi Konfirmasi Password
    if (confirmPassword == "") {
        document.getElementById('error-message').innerText = "Konfirmasi Password tidak boleh kosong!";
        return false;
    }

    // Cek kecocokan password dan konfirmasi password
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = "Password dan Konfirmasi Password tidak cocok!";
        return false;
    }

    // Jika semua validasi berhasil
    document.getElementById('error-message').innerText = ""; // Hapus pesan error jika validasi berhasil
    alert("Formulir berhasil disubmit!");
    return true; // Mengizinkan pengiriman formulir
}
