export function initializeMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Open mobile menu
    mobileMenuButton?.addEventListener('click', function () {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    closeMenuButton?.addEventListener('click', function () {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach((link) => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });
}
