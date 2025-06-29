document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk efek scroll-fade
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Berhenti mengamati setelah elemen terlihat
            }
        });
    }, {
        threshold: 0.1 // Ketika 10% dari elemen terlihat, tambahkan kelas 'in-view'
    });

    scrollFadeElements.forEach(el => {
        observer.observe(el);
    });

    // Fungsi untuk navigasi aktif (opsional)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) { // Penyesuaian offset untuk deteksi yang lebih baik
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Anda bisa menambahkan fungsi JavaScript lainnya di sini,
    // seperti validasi formulir kontak (jika Anda menambahkannya),
    // atau efek-efek interaktif lainnya.
});