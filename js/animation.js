document.addEventListener("DOMContentLoaded", () => {
  // Animation des éléments au défilement
  function animateOnScroll() {
    const elements = document.querySelectorAll(".slide-up, .fade-in")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        // Appliquer les styles directement car les animations CSS sont déjà définies
        element.style.opacity = "1"
        if (element.classList.contains("slide-up")) {
          element.style.transform = "translateY(0)"
        }
      }
    })
  }

  // Exécuter l'animation au chargement initial
  animateOnScroll()

  // Exécuter l'animation lors du défilement
  window.addEventListener("scroll", animateOnScroll)
})
