// /backend/src/controllers/doctorController.js

const express = require('express');
const router = express.Router();
const doctorService = require('../services/doctorService');

// Endpoint para crear un doctor
router.post('/', async (req, res) => {
  try {
    const doctorData = req.body;
    const createdDoctor = await doctorService.createDoctor(doctorData);
    res.status(201).json(createdDoctor);
  } catch (error) {
    console.error(`Error creating doctor: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los doctores
router.get('/', async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.json(doctors);
  } catch (error) {
    console.error(`Error getting doctors: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un doctor por ID
router.get('/:id', async (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const doctor = await doctorService.getDoctorById(doctorId);
    if (!doctor) {
      res.status(404).json({ error: 'Doctor not found' });
      return;
    }
    res.json(doctor);
  } catch (error) {
    console.error(`Error getting doctor: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un doctor por ID
router.put('/:id', async (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const updatedDoctor = await doctorService.updateDoctor(doctorId, req.body);
    if (!updatedDoctor) {
      res.status(404).json({ error: 'Doctor not found' });
      return;
    }
    res.json(updatedDoctor);
  } catch (error) {
    console.error(`Error updating doctor: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un doctor por ID
router.delete('/:id', async (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const deletedDoctor = await doctorService.deleteDoctor(doctorId);
    if (!deletedDoctor) {
      res.status(404).json({ error: 'Doctor not found' });
      return;
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error(`Error deleting doctor: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
