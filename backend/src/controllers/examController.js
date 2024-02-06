// /backend/src/controllers/examController.js

const express = require('express');
const router = express.Router();
const examService = require('../services/examService');

// Endpoint para crear un examen
router.post('/', async (req, res) => {
  try {
    const examData = req.body;
    const createdExam = await examService.createExam(examData);
    res.status(201).json(createdExam);
  } catch (error) {
    console.error(`Error creating exam: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener todos los exámenes
router.get('/', async (req, res) => {
  try {
    const exams = await examService.getAllExams();
    res.json(exams);
  } catch (error) {
    console.error(`Error getting exams: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un examen por ID
router.get('/:id', async (req, res) => {
  try {
    const examId = parseInt(req.params.id);
    const exam = await examService.getExamById(examId);
    if (!exam) {
      res.status(404).json({ error: 'Exam not found' });
      return;
    }
    res.json(exam);
  } catch (error) {
    console.error(`Error getting exam: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para actualizar un examen por ID
router.put('/:id', async (req, res) => {
  try {
    const examId = parseInt(req.params.id);
    const updatedExam = await examService.updateExam(examId, req.body);
    if (!updatedExam) {
      res.status(404).json({ error: 'Exam not found' });
      return;
    }
    res.json(updatedExam);
  } catch (error) {
    console.error(`Error updating exam: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para eliminar un examen por ID
router.delete('/:id', async (req, res) => {
  try {
    const examId = parseInt(req.params.id);
    const deletedExam = await examService.deleteExam(examId);
    if (!deletedExam) {
      res.status(404).json({ error: 'Exam not found' });
      return;
    }
    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    console.error(`Error deleting exam: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
