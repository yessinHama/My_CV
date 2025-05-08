// Animation douce lors du défilement
document.addEventListener('DOMContentLoaded', () => {
    // Animation des sections au défilement
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });

    // Gestion du clic sur les liens de contact
    const contactLinks = document.querySelectorAll('.contact-info li');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const text = e.target.textContent;
            if (text.includes('@')) {
                window.location.href = `mailto:${text}`;
            } else if (text.includes('linkedin.com')) {
                window.open(`https://${text}`, '_blank');
            }
        });
    });
}); 