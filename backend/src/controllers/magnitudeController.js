// /backend/src/controllers/magnitudeController.js

const express = require('express');
const router = express.Router();
const magnitudeService = require('../services/magnitudeService');

// Endpoint para crear una magnitud
router.post('/', async (req, res) => {
  try {
    const magnitudeData = req.body;
    const createdMagnitude = await magnitudeService.createMagnitude(magnitudeData);
    res.status(201).json(createdMagnitude);
  } catch (error) {
    console.error(`Error creating magnitude: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todas las magnitudes
router.get('/', async (req, res) => {
  try {
    const magnitudes = await magnitudeService.getAllMagnitudes();
    res.json(magnitudes);
  } catch (error) {
    console.error(`Error getting magnitudes: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener una magnitud por ID
router.get('/:id', async (req, res) => {
  try {
    const magnitudeId = parseInt(req.params.id);
    const magnitude = await magnitudeService.getMagnitudeById(magnitudeId);
    if (!magnitude) {
      res.status(404).json({ error: 'Magnitude not found' });
      return;
    }
    res.json(magnitude);
  } catch (error) {
    console.error(`Error getting magnitude: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar una magnitud por ID
router.put('/:id', async (req, res) => {
  try {
    const magnitudeId = parseInt(req.params.id);
    const updatedMagnitude = await magnitudeService.updateMagnitude(magnitudeId, req.body);
    if (!updatedMagnitude) {
      res.status(404).json({ error: 'Magnitude not found' });
      return;
    }
    res.json(updatedMagnitude);
  } catch (error) {
    console.error(`Error updating magnitude: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar una magnitud por ID
router.delete('/:id', async (req, res) => {
  try {
    const magnitudeId = parseInt(req.params.id);
    const deletedMagnitude = await magnitudeService.deleteMagnitude(magnitudeId);
    if (!deletedMagnitude) {
      res.status(404).json({ error: 'Magnitude not found' });
      return;
    }
    res.json({ message: 'Magnitude deleted successfully' });
  } catch (error) {
    console.error(`Error deleting magnitude: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
