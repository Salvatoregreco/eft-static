import { initializeMenu } from '../components/menu';
import { initializeTestimonials } from '../components/testimonials';
import { initializeFaq } from '../components/faq';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeTestimonials();
    initializeFaq();
});
