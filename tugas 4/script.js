// JavaScript untuk halaman profil pribadi

// Fungsi untuk pindah dari halaman welcome ke halaman profil
function goToProfile() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
    // Smooth scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk kembali ke halaman welcome
function backToWelcome() {
    document.getElementById('profile-page').style.display = 'none';
    document.getElementById('welcome-page').style.display = 'flex';
    // Smooth scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener untuk form submission
// Menggunakan DOMContentLoaded untuk memastikan elemen sudah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript sederhana untuk menangani submit form
    const formKontak = document.getElementById('form-kontak');
    
    if (formKontak) {
        formKontak.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Formulir telah dikirim.');
        });
    }
});