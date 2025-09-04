// register.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página de registro cargada");

  const form = document.querySelector("form");
  const firstName = document.getElementById("registerfirstName");
  const lastName = document.getElementById("registerlastName");
  const email = document.getElementById("registeremail");
  const phone = document.getElementById("registerphone");
  const password = document.getElementById("registerpassword");
  const confirmPassword = document.getElementById("registerconfirmPassword");

  //Validar email simple
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
  };

  //Validar teléfono opcional (solo números, 7-15 dígitos)
  const validarTelefono = (tel) => {
    if (!tel) return true; // opcional
    return /^[0-9]{7,15}$/.test(tel);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar envío hasta validar

    //Validar campos obligatorios
    if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
      alert("Todos los campos obligatorios deben estar completos");
      return;
    }

    //Validar email
    if (!validarEmail(email.value)) {
      alert("Ingresa un correo electrónico válido");
      return;
    }

    //Validar teléfono
    if (!validarTelefono(phone.value)) {
      alert("El teléfono debe contener solo números (7 a 15 dígitos)");
      return;
    }

    //Validar contraseña
    if (password.value.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert("Las contraseñas no coinciden");
      return;
    }

    //Si todo está bien → Simulación de envío
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    };

    console.log("Datos listos para enviar:", data);
    alert("Registro exitoso");

    // conectar a la API y enviar datos(backend)
    // fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(result => console.log(result))
    //   .catch(err => console.error("❌ Error:", err));
  });
});
