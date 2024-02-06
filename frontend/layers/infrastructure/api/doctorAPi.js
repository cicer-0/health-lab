import { API_BASE_URL } from '../../infrastructure/config.js';
// Obtener datos de doctores desde el backend
async function getDoctors() {
    try {
        const response = await fetch(`${API_BASE_URL}/doctors`); // Ajusta la ruta según tu configuración
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos de doctores:', error);
        throw error;
    }
}

export { getDoctors };
