document.addEventListener('DOMContentLoaded', () => {
    // --- Mobil Menü İşlevselliği ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Menü açıkken bir linke tıklandığında menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // --- Smooth Scroll İşlevselliği ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Header'ın yüksekliğini dikkate alarak kaydırma yap
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Scroll Animasyonları (Intersection Observer) ---
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport'u kök olarak kullan
        rootMargin: '0px',
        threshold: 0.2 // Elementin %20'si görünür olduğunda tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Animasyon bir kez oynadıktan sonra gözlemlemeyi bırak
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Hero bölümündeki özel animasyonlar
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('is-visible'); // Hero içeriği sayfa yüklendiğinde görünür olsun
    }

    // --- İletişim Formu Validasyonu ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Formun varsayılan gönderimini engelle
            let isValid = true;
            formStatus.textContent = '';
            formStatus.style.color = '';

            // Tüm form gruplarını ve hata mesajlarını temizle
            document.querySelectorAll('.form-group .error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => el.classList.remove('is-invalid'));

            // Ad Soyad kontrolü
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                displayError(nameInput, 'Adınız Soyadınız boş bırakılamaz.');
                isValid = false;
            }

            // E-posta kontrolü
            const emailInput = document.getElementById('email');
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailInput.value.trim() === '') {
                displayError(emailInput, 'E-posta adresiniz boş bırakılamaz.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                displayError(emailInput, 'Geçerli bir e-posta adresi giriniz.');
                isValid = false;
            }

            // Konu kontrolü
            const subjectInput = document.getElementById('subject');
            if (subjectInput.value.trim() === '') {
                displayError(subjectInput, 'Konu boş bırakılamaz.');
                isValid = false;
            }

            // Mesaj kontrolü
            const messageTextarea = document.getElementById('message');
            if (messageTextarea.value.trim() === '') {
                displayError(messageTextarea, 'Mesajınız boş bırakılamaz.');
                isValid = false;
            }

            if (isValid) {
                // Başarılı gönderim simülasyonu
                formStatus.textContent = 'Mesajınız başarıyla gönderildi! Teşekkür ederiz.';
                formStatus.style.color = 'var(--primary)';
                contactForm.reset(); // Formu temizle
            } else {
                formStatus.textContent = 'Lütfen tüm alanları doğru şekilde doldurunuz.';
                formStatus.style.color = '#e74c3c';
            }
        });

        function displayError(inputElement, message) {
            const formGroup = inputElement.closest('.form-group');
            if (formGroup) {
                const errorMessageDiv = formGroup.querySelector('.error-message');
                if (errorMessageDiv) {
                    errorMessageDiv.textContent = message;
                }
                inputElement.classList.add('is-invalid');
            }
        }
    }

    // --- Footer Yılını Otomatik Güncelleme ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
