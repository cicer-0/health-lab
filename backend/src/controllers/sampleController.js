// /backend/src/controllers/sampleController.js

const express = require('express');
const router = express.Router();
const sampleService = require('../services/sampleService');

// Endpoint para crear una muestra
router.post('/', async (req, res) => {
  try {
    const sampleData = req.body;
    const createdSample = await sampleService.createSample(sampleData);
    res.status(201).json(createdSample);
  } catch (error) {
    console.error(`Error creating sample: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todas las muestras
router.get('/', async (req, res) => {
  try {
    const samples = await sampleService.getAllSamples();
    res.json(samples);
  } catch (error) {
    console.error(`Error getting samples: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener una muestra por ID
router.get('/:id', async (req, res) => {
  try {
    const sampleId = parseInt(req.params.id);
    const sample = await sampleService.getSampleById(sampleId);
    if (!sample) {
      res.status(404).json({ error: 'Sample not found' });
      return;
    }
    res.json(sample);
  } catch (error) {
    console.error(`Error getting sample: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar una muestra por ID
router.put('/:id', async (req, res) => {
  try {
    const sampleId = parseInt(req.params.id);
    const updatedSample = await sampleService.updateSample(sampleId, req.body);
    if (!updatedSample) {
      res.status(404).json({ error: 'Sample not found' });
      return;
    }
    res.json(updatedSample);
  } catch (error) {
    console.error(`Error updating sample: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar una muestra por ID
router.delete('/:id', async (req, res) => {
  try {
    const sampleId = parseInt(req.params.id);
    const deletedSample = await sampleService.deleteSample(sampleId);
    if (!deletedSample) {
      res.status(404).json({ error: 'Sample not found' });
      return;
    }
    res.json({ message: 'Sample deleted successfully' });
  } catch (error) {
    console.error(`Error deleting sample: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
