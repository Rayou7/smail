document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea")

  // Gestion des classes pour les champs avec valeur
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("has-value")
      } else {
        this.classList.remove("has-value")
      }
    })
  })

  // Gestion de la soumission du formulaire
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Récupération des valeurs du formulaire
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Affichage d'un état de chargement
      const submitBtn = contactForm.querySelector(".submit-btn")
      const originalContent = submitBtn.innerHTML
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'
      submitBtn.disabled = true

      // Simulation d'envoi (à remplacer par un vrai envoi AJAX)
      setTimeout(() => {
        // Réinitialisation du formulaire
        contactForm.reset()
        inputs.forEach((input) => input.classList.remove("has-value"))

        // Restauration du bouton
        submitBtn.innerHTML = originalContent
        submitBtn.disabled = false

        // Affichage d'un message de confirmation
        alert("Merci pour votre message ! Je vous répondrai dans les plus brefs délais.")
      }, 1500)
    })
  }
})
