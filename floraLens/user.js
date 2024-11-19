// Datos simulados para las plantas del usuario registrado
const userPlants = [
    { id: 1, commonName: "Orquídea", species: "Cattleya", conservationStatus: "En peligro de extinción" },
    { id: 2, commonName: "Rosa", species: "Rosa gallica", conservationStatus: "Común" },
    { id: 3, commonName: "Guayaba", species: "Psidium guajava", conservationStatus: "Común" }
    
];

// Función para generar la tabla de plantas del usuario
function populateUserPlantsTable() {
    const userPlantsTableBody = document.getElementById('user-plants-table').getElementsByTagName('tbody')[0];
    userPlantsTableBody.innerHTML = ''; // Limpiar la tabla antes de agregar las plantas

    userPlants.forEach(plant => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${plant.id}</td>
            <td>${plant.commonName}</td>
            <td>${plant.species}</td>
            <td>${plant.conservationStatus}</td>
            <td><button onclick="removePlant(${plant.id})">Eliminar</button></td>
        `;
        userPlantsTableBody.appendChild(row);
    });
}

// Función para eliminar una planta del usuario
function removePlant(plantId) {
    const plantIndex = userPlants.findIndex(plant => plant.id === plantId);
    if (plantIndex !== -1) {
        userPlants.splice(plantIndex, 1); // Eliminar la planta de la lista
        populateUserPlantsTable(); // Actualizar la tabla de plantas del usuario
    }
}

// Cargar las plantas del usuario al cargar la página
populateUserPlantsTable();
