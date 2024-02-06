// /backend/src/controllers/detailResultController.js

const express = require('express');
const router = express.Router();
const detailResultService = require('../services/detailResultService');

// Endpoint para crear un detalle de resultado
router.post('/', async (req, res) => {
  try {
    const detailResultData = req.body;
    const createdDetailResult = await detailResultService.createDetailResult(detailResultData);
    res.status(201).json(createdDetailResult);
  } catch (error) {
    console.error(`Error creating detail result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los detalles de resultados
router.get('/', async (req, res) => {
  try {
    const detailResults = await detailResultService.getAllDetailResults();
    res.json(detailResults);
  } catch (error) {
    console.error(`Error getting detail results: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un detalle de resultado por ID
router.get('/:id', async (req, res) => {
  try {
    const detailResultId = parseInt(req.params.id);
    const detailResult = await detailResultService.getDetailResultById(detailResultId);
    if (!detailResult) {
      res.status(404).json({ error: 'Detail Result not found' });
      return;
    }
    res.json(detailResult);
  } catch (error) {
    console.error(`Error getting detail result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un detalle de resultado por ID
router.put('/:id', async (req, res) => {
  try {
    const detailResultId = parseInt(req.params.id);
    const updatedDetailResult = await detailResultService.updateDetailResult(detailResultId, req.body);
    if (!updatedDetailResult) {
      res.status(404).json({ error: 'Detail Result not found' });
      return;
    }
    res.json(updatedDetailResult);
  } catch (error) {
    console.error(`Error updating detail result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un detalle de resultado por ID
router.delete('/:id', async (req, res) => {
  try {
    const detailResultId = parseInt(req.params.id);
    const deletedDetailResult = await detailResultService.deleteDetailResult(detailResultId);
    if (!deletedDetailResult) {
      res.status(404).json({ error: 'Detail Result not found' });
      return;
    }
    res.json({ message: 'Detail Result deleted successfully' });
  } catch (error) {
    console.error(`Error deleting detail result: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
