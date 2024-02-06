// /backend/src/controllers/resultController.js

const express = require('express');
const router = express.Router();
const resultService = require('../services/resultService');

// Endpoint para crear un resultado de muestra
router.post('/', async (req, res) => {
  try {
    const resultData = req.body;
    const createdResult = await resultService.createResult(resultData);
    res.status(201).json(createdResult);
  } catch (error) {
    console.error(`Error creating result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los resultados de muestras
router.get('/', async (req, res) => {
  try {
    const results = await resultService.getAllResults();
    res.json(results);
  } catch (error) {
    console.error(`Error getting results: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un resultado de muestra por ID
router.get('/:id', async (req, res) => {
  try {
    const resultId = parseInt(req.params.id);
    const result = await resultService.getResultById(resultId);
    if (!result) {
      res.status(404).json({ error: 'Result not found' });
      return;
    }
    res.json(result);
  } catch (error) {
    console.error(`Error getting result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un resultado de muestra por ID
router.put('/:id', async (req, res) => {
  try {
    const resultId = parseInt(req.params.id);
    const updatedResult = await resultService.updateResult(resultId, req.body);
    if (!updatedResult) {
      res.status(404).json({ error: 'Result not found' });
      return;
    }
    res.json(updatedResult);
  } catch (error) {
    console.error(`Error updating result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un resultado de muestra por ID
router.delete('/:id', async (req, res) => {
  try {
    const resultId = parseInt(req.params.id);
    const deletedResult = await resultService.deleteResult(resultId);
    if (!deletedResult) {
      res.status(404).json({ error: 'Result not found' });
      return;
    }
    res.json({ message: 'Result deleted successfully' });
  } catch (error) {
    console.error(`Error deleting result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
