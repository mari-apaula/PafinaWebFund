// Datos de usuario simulados para la validación
const users = [
    { email: "admin@floralens.com", password: "admin123", role: "admin" },
    { email: "usuario@floralens.com", password: "user123", role: "user" },
  ];
  
  // Función para validar el inicio de sesión
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      // Si es un administrador
      if (user.role === "admin") {
        window.location.href = "admin.html"; // Redirigir a la página de admin
      }
      // Si es un usuario registrado
      else if (user.role === "user") {
        window.location.href = "user.html"; // Redirigir a la página del usuario
      }
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      document.getElementById("error-message").style.display = "block";
    }
  });
  