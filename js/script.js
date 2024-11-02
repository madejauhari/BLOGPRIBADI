document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideContainer = document.querySelector('.slide-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Check if dark mode is saved in LocalStorage and apply it
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌞';
    } else {
        themeToggle.textContent = '🌙';
    }

    // Function to toggle theme and save preference in LocalStorage
    function toggleTheme() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '🌞' : '🌙';
        localStorage.setItem('dark-mode', isDarkMode);
    }

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', toggleTheme);

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

    // Fungsi untuk memeriksa input dan memberikan umpan balik
    function validateInput(input) {
        if (input.checkValidity()) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    }

    // Event listener untuk validasi real-time
    nameInput.addEventListener('input', () => validateInput(nameInput));
    emailInput.addEventListener('input', () => validateInput(emailInput));
    messageInput.addEventListener('input', () => validateInput(messageInput));

    // Event listener untuk submit form
    document.querySelector('.contact-form').addEventListener('submit', (event) => {
        if (!nameInput.checkValidity() || !emailInput.checkValidity() || !messageInput.checkValidity()) {
            event.preventDefault(); // Cegah submit jika ada input yang tidak valid
            alert('Please fill out this field.');
        }
    });
});
