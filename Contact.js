function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");
    
    // Menghapus pesan kesalahan sebelumnya
    errorMessage.innerHTML = "";

    // Validasi nama
    if (name === "") {
        errorMessage.innerHTML = "Nama harus diisi.";
        return false;
    }

    // Validasi email
    if (email === "") {
        errorMessage.innerHTML = "Email harus diisi.";
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage.innerHTML = "Email tidak valid.";
        return false;
    }

    // Validasi pesan
    if (message === "") {
        errorMessage.innerHTML = "Pesan harus diisi.";
        return false;
    }

    // Jika semua input valid
    alert("Terima kasih! Form berhasil dikirim.");
    return true;
}
