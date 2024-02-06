// /backend/src/controllers/patientController.js

const express = require('express');
const router = express.Router();
const patientService = require('../services/patientService');

// Endpoint para crear un paciente
router.post('/', async (req, res) => {
  try {
    const patientData = req.body;
    const createdPatient = await patientService.createPatient(patientData);
    res.status(201).json(createdPatient);
  } catch (error) {
    console.error(`Error creating patient: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (error) {
    console.error(`Error getting patients: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un paciente por ID
router.get('/:id', async (req, res) => {
  try {
    const patientId = parseInt(req.params.id);
    const patient = await patientService.getPatientById(patientId);
    if (!patient) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.json(patient);
  } catch (error) {
    console.error(`Error getting patient: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un paciente por ID
router.put('/:id', async (req, res) => {
  try {
    const patientId = parseInt(req.params.id);
    const updatedPatient = await patientService.updatePatient(patientId, req.body);
    if (!updatedPatient) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.json(updatedPatient);
  } catch (error) {
    console.error(`Error updating patient: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un paciente por ID
router.delete('/:id', async (req, res) => {
  try {
    const patientId = parseInt(req.params.id);
    const deletedPatient = await patientService.deletePatient(patientId);
    if (!deletedPatient) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error(`Error deleting patient: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
