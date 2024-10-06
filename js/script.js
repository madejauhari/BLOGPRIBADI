document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideContainer = document.querySelector('.slide-container');
    
    // Tampilkan slide pertama saat halaman dimuat
    showSlides(slideIndex);

    // Fungsi untuk menavigasi antar slide
    function plusSlides(n) {
        slideIndex = (slideIndex + n + totalSlides) % totalSlides;
        showSlides(slideIndex);
    }

    // Fungsi untuk menampilkan slide berdasarkan index
    function showSlides(n) {
        const percentageMove = slideIndex * (100 / totalSlides);
        slideContainer.style.transform = `translateX(-${percentageMove}%)`;
    }

    // Tambahkan event listener untuk resize window
    window.addEventListener('resize', () => {
        showSlides(slideIndex); // Update ukuran slide saat window di-resize
    });

    // Navigasi slide sebelumnya
    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    // Navigasi slide berikutnya
    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });
});
