// Données d'expérience (CV Aïcha Regragui)
const experienceData = [
    {
        title: "Développeuse Web Stagiaire",
        from: "Mai 2025",
        to: "Juillet 2025",
        company: "RMA Assurance, Rabat"
    },
    {
        title: "Développeuse Web Stagiaire",
        from: "Mai 2024",
        to: "Juillet 2024",
        company: "Académie Régionale d'Éducation et de Formation"
    },
    {
        title: "Stagiaire en Sécurité des SI",
        from: "Mai 2023",
        to: "Juillet 2023",
        company: "Direction des Systèmes d'Information"
    }
];

// Gestion des onglets Expérience
document.querySelectorAll('.ide-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.ide-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const index = parseInt(tab.dataset.job) - 1;
        const job = experienceData[index];
        if (job) {
            document.getElementById('job-title').textContent = `"${job.title}"`;
            document.getElementById('job-from').textContent = `"${job.from}"`;
            document.getElementById('job-to').textContent = `"${job.to}"`;
            document.getElementById('job-company').textContent = `"${job.company}"`;
        }
    });
});

// Navigation mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.getElementById('nav');

navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks?.classList.toggle('active');
    document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navLinks?.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Effet au scroll sur la navigation
function handleScroll() {
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Vérifier au chargement

// Animation au scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Éléments à animer
document.querySelectorAll('.skill-card, .project-card, .stat, .about-text, .ide-window, .formation-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
