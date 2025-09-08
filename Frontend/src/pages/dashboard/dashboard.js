// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Dashboard cargado");

  /* Menú desplegable usuario*/
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    // Cerrar menú si se hace clic fuera
    window.addEventListener("click", (e) => {
      if (!dropdownContent.contains(e.target) && e.target !== dropdownBtn) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  /*Botón "Ver Detalles" en cursos inscritos*/
  document.querySelectorAll(".curso .btn-secondary").forEach((btn) => {
    btn.addEventListener("click", () => {
      const titulo = btn.closest(".curso").querySelector("h3").textContent;
      alert(`📘 Detalles del curso: ${titulo}`);
    });
  });

  /*Botón "Inscribirse" en cursos disponibles*/
  document.querySelectorAll("#cursos-disponibles .btn-primary").forEach((btn) => {
    btn.addEventListener("click", () => {
      const titulo = btn.closest(".curso").querySelector("h3").textContent;
      alert(`🎉 Te inscribiste en: ${titulo}`);
    });
  });

  /*Botones de acciones en perfil*/
  document.querySelectorAll(".perfil-actions button").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert(`⚙️ Acción: ${btn.textContent}`);
    });
  });
});
