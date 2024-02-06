import { API_BASE_URL } from '../../infrastructure/config.js';
// Obtener datos de pacientes desde el backend
async function getPatients() {
    try {
        const response = await fetch(`${API_BASE_URL}/patients`); // Ajusta la ruta según tu configuración
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos de pacientes:', error);
        throw error;
    }
}

export { getPatients };
