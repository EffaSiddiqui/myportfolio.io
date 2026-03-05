document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.content-tab');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetPage = link.getAttribute('data-page');

            // Update Active Class on Links
            navLinks.forEach(l => l.classList.remove('active-tab'));
            link.classList.add('active-tab');

            // Switch Sections
            pages.forEach(page => {
                page.classList.remove('current');
                if (page.id === targetPage) {
                    page.classList.add('current');
                }
            });

            // Scroll to top of content for mobile users
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
