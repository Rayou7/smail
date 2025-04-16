document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const nav = document.querySelector("nav")
  const burgerMenu = document.querySelector(".burger-menu")
  const burgerIcon = document.querySelector(".burger-icon")
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay")
  const navLinks = document.querySelectorAll("nav a")
  const isMobile = window.innerWidth <= 768

  // Fonction pour vérifier si l'appareil est mobile
  function checkIfMobile() {
    return window.innerWidth <= 768
  }

  // Fonction pour ouvrir/fermer le menu mobile
  function toggleMobileMenu() {
    nav.classList.toggle("mobile-open")
    burgerIcon.classList.toggle("open")
    mobileMenuOverlay.classList.toggle("active")
    document.body.classList.toggle("menu-open")
  }

  // Événement pour le menu burger sur mobile
  if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleMobileMenu()
    })
  }

  // Fermer le menu quand on clique sur l'overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", () => {
      toggleMobileMenu()
    })
  }

  // Fermer le menu quand on clique sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (checkIfMobile() && nav.classList.contains("mobile-open")) {
        toggleMobileMenu()
      }
    })
  })

  // Gestion du survol sur desktop
  if (!isMobile) {
    nav.addEventListener("mouseenter", () => {
      nav.classList.add("expanded")
    })

    nav.addEventListener("mouseleave", () => {
      nav.classList.remove("expanded")
    })
  }

  // Gestion du redimensionnement de la fenêtre
  window.addEventListener("resize", () => {
    const currentIsMobile = checkIfMobile()

    // Si on passe de mobile à desktop
    if (!currentIsMobile && nav.classList.contains("mobile-open")) {
      nav.classList.remove("mobile-open")
      burgerIcon.classList.remove("open")
      mobileMenuOverlay.classList.remove("active")
      document.body.classList.remove("menu-open")
    }
  })
})
