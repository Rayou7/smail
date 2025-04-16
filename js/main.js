document.addEventListener('DOMContentLoaded', function() {
  // Ajouter la classe active au lien de navigation actuel
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation.includes(linkPath) && linkPath !== '/html/index.html') {
      link.classList.add('active');
    } else if (currentLocation === '/' && linkPath === '/html/index.html') {
      link.classList.add('active');
    }
  });
  
  // Animation des éléments au défilement
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-up, .fade-in');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Exécuter l'animation au chargement initial
  animateOnScroll();
  
  // Exécuter l'animation lors du défilement
  window.addEventListener('scroll', animateOnScroll);
  
  // Animation des barres de compétences
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
  
  // Gestion des formulaires
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    // Vérifier si les champs ont déjà une valeur
    formInputs.forEach(input => {
      if (input.value !== '') {
        input.classList.add('has-value');
      }
      
      // Ajouter des écouteurs d'événements pour les champs
      input.addEventListener('focus', () => {
        input.classList.add('has-value');
      });
      
      input.addEventListener('blur', () => {
        if (input.value === '') {
          input.classList.remove('has-value');
        }
      });
    });
    
    // Gestion de la soumission du formulaire
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      
      // Animation du bouton de soumission
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;
      
      // Simuler l'envoi du formulaire
      setTimeout(() => {
        // Réinitialiser le formulaire
        contactForm.reset();
        
        // Afficher un message de confirmation
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        
        // Restaurer le bouton
        submitBtn.innerHTML = '<span>Envoyer</span><i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
        
        // Réinitialiser les classes des champs
        formInputs.forEach(input => {
          input.classList.remove('has-value');
        });
      }, 1500);
    });
  }
});