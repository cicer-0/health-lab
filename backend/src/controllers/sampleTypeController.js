// /backend/src/controllers/sampleTypeController.js

const express = require('express');
const router = express.Router();
const sampleTypeService = require('../services/sampleTypeService');

// Endpoint para crear un tipo de muestra
router.post('/', async (req, res) => {
  try {
    const sampleTypeData = req.body;
    const createdSampleType = await sampleTypeService.createSampleType(sampleTypeData);
    res.status(201).json(createdSampleType);
  } catch (error) {
    console.error(`Error creating sample type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los tipos de muestras
router.get('/', async (req, res) => {
  try {
    const sampleTypes = await sampleTypeService.getAllSampleTypes();
    res.json(sampleTypes);
  } catch (error) {
    console.error(`Error getting sample types: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un tipo de muestra por ID
router.get('/:id', async (req, res) => {
  try {
    const sampleTypeId = parseInt(req.params.id);
    const sampleType = await sampleTypeService.getSampleTypeById(sampleTypeId);
    if (!sampleType) {
      res.status(404).json({ error: 'Sample type not found' });
      return;
    }
    res.json(sampleType);
  } catch (error) {
    console.error(`Error getting sample type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un tipo de muestra por ID
router.put('/:id', async (req, res) => {
  try {
    const sampleTypeId = parseInt(req.params.id);
    const updatedSampleType = await sampleTypeService.updateSampleType(sampleTypeId, req.body);
    if (!updatedSampleType) {
      res.status(404).json({ error: 'Sample type not found' });
      return;
    }
    res.json(updatedSampleType);
  } catch (error) {
    console.error(`Error updating sample type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un tipo de muestra por ID
router.delete('/:id', async (req, res) => {
  try {
    const sampleTypeId = parseInt(req.params.id);
    const deletedSampleType = await sampleTypeService.deleteSampleType(sampleTypeId);
    if (!deletedSampleType) {
      res.status(404).json({ error: 'Sample type not found' });
      return;
    }
    res.json({ message: 'Sample type deleted successfully' });
  } catch (error) {
    console.error(`Error deleting sample type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
