// /backend/src/controllers/examDetailController.js

const express = require('express');
const router = express.Router();
const examDetailService = require('../services/examDetailService');

// Endpoint para crear detalles de examen
router.post('/', async (req, res) => {
  try {
    const examDetailData = req.body;
    const createdExamDetail = await examDetailService.createExamDetail(examDetailData);
    res.status(201).json(createdExamDetail);
  } catch (error) {
    console.error(`Error creating exam detail: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los detalles de examen
router.get('/', async (req, res) => {
  try {
    const examDetails = await examDetailService.getAllExamDetails();
    res.json(examDetails);
  } catch (error) {
    console.error(`Error getting exam details: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un detalle de examen por ID
router.get('/:id', async (req, res) => {
  try {
    const examDetailId = parseInt(req.params.id);
    const examDetail = await examDetailService.getExamDetailById(examDetailId);
    if (!examDetail) {
      res.status(404).json({ error: 'Exam detail not found' });
      return;
    }
    res.json(examDetail);
  } catch (error) {
    console.error(`Error getting exam detail: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un detalle de examen por ID
router.put('/:id', async (req, res) => {
  try {
    const examDetailId = parseInt(req.params.id);
    const updatedExamDetail = await examDetailService.updateExamDetail(examDetailId, req.body);
    if (!updatedExamDetail) {
      res.status(404).json({ error: 'Exam detail not found' });
      return;
    }
    res.json(updatedExamDetail);
  } catch (error) {
    console.error(`Error updating exam detail: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un detalle de examen por ID
router.delete('/:id', async (req, res) => {
  try {
    const examDetailId = parseInt(req.params.id);
    const deletedExamDetail = await examDetailService.deleteExamDetail(examDetailId);
    if (!deletedExamDetail) {
      res.status(404).json({ error: 'Exam detail not found' });
      return;
    }
    res.json({ message: 'Exam detail deleted successfully' });
  } catch (error) {
    console.error(`Error deleting exam detail: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
