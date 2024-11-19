// Datos simulados para las plantas y los usuarios
const plants = [
    { id: 1, commonName: "Orquídea", species: "Cattleya", conservationStatus: "En peligro de extinción", registeredBy: "Administrador" },
    { id: 2, commonName: "Rosa", species: "Rosa gallica", conservationStatus: "Común", registeredBy: "Juan Pérez" },
    { id: 3, commonName: "Tulipán", species: "Tulipa", conservationStatus: "Bajo riesgo", registeredBy: "Ana Gómez" },
  ];
  
  const users = [
    { id: 1, email: "admin@floralens.com", name: "Administrador" },
    { id: 2, email: "usuario@floralens.com", name: "Juan Pérez" }
  ];
  
  // Función para generar la tabla de plantas en la página de admin
  function populatePlantsTable() {
    const plantsTableBody = document.getElementById('plants-table').getElementsByTagName('tbody')[0];
    plantsTableBody.innerHTML = ''; // Limpiar la tabla antes de agregar las plantas
  
    plants.forEach(plant => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${plant.id}</td>
        <td>${plant.commonName}</td>
        <td>${plant.species}</td>
        <td>${plant.conservationStatus}</td>
        <td>${plant.registeredBy}</td>
        <td><button onclick="deletePlant(${plant.id})">Eliminar</button></td>
      `;
      plantsTableBody.appendChild(row);
    });
  }
  
  // Función para generar la tabla de usuarios en la página de admin
  function populateUsersTable() {
    const usersTableBody = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    usersTableBody.innerHTML = ''; // Limpiar la tabla antes de agregar los usuarios
  
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td><button onclick="deleteUser(${user.id})">Eliminar</button></td>
      `;
      usersTableBody.appendChild(row);
    });
  }
  
  // Función para eliminar una planta (solo simulado)
  function deletePlant(plantId) {
    const plantIndex = plants.findIndex(plant => plant.id === plantId);
    if (plantIndex !== -1) {
      plants.splice(plantIndex, 1); // Eliminar la planta de la lista
      populatePlantsTable(); // Actualizar la tabla de plantas
    }
  }
  
  // Función para eliminar un usuario (solo simulado)
  function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1); // Eliminar el usuario de la lista
      populateUsersTable(); // Actualizar la tabla de usuarios
    }
  }
  
  // Cargar las tablas de plantas y usuarios al cargar la página de admin
  populatePlantsTable();
  populateUsersTable();
  