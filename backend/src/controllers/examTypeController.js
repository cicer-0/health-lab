// /backend/src/controllers/examTypeController.js

const express = require('express');
const router = express.Router();
const examTypeService = require('../services/examTypeService');

// Endpoint para crear un tipo de examen
router.post('/', async (req, res) => {
  try {
    const examTypeData = req.body;
    const createdExamType = await examTypeService.createExamType(examTypeData);
    res.status(201).json(createdExamType);
  } catch (error) {
    console.error(`Error creating exam type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los tipos de exámenes
router.get('/', async (req, res) => {
  try {
    const examTypes = await examTypeService.getAllExamTypes();
    res.json(examTypes);
  } catch (error) {
    console.error(`Error getting exam types: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un tipo de examen por ID
router.get('/:id', async (req, res) => {
  try {
    const examTypeId = parseInt(req.params.id);
    const examType = await examTypeService.getExamTypeById(examTypeId);
    if (!examType) {
      res.status(404).json({ error: 'Exam type not found' });
      return;
    }
    res.json(examType);
  } catch (error) {
    console.error(`Error getting exam type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un tipo de examen por ID
router.put('/:id', async (req, res) => {
  try {
    const examTypeId = parseInt(req.params.id);
    const updatedExamType = await examTypeService.updateExamType(examTypeId, req.body);
    if (!updatedExamType) {
      res.status(404).json({ error: 'Exam type not found' });
      return;
    }
    res.json(updatedExamType);
  } catch (error) {
    console.error(`Error updating exam type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un tipo de examen por ID
router.delete('/:id', async (req, res) => {
  try {
    const examTypeId = parseInt(req.params.id);
    const deletedExamType = await examTypeService.deleteExamType(examTypeId);
    if (!deletedExamType) {
      res.status(404).json({ error: 'Exam type not found' });
      return;
    }
    res.json({ message: 'Exam type deleted successfully' });
  } catch (error) {
    console.error(`Error deleting exam type: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
