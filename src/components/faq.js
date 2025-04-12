export function initializeFaq() {
    const details = document.querySelectorAll('#faq details');

    details.forEach((detail) => {
        detail.addEventListener('click', (e) => {
            e.stopPropagation();

            // Se il details cliccato è già aperto, non fare nulla
            if (e.target.tagName === 'SUMMARY' && !detail.open) {
                // Chiudi tutti gli altri details
                details.forEach((d) => {
                    if (d !== detail) {
                        d.open = false;
                    }
                });
            }
        });
    });
}
