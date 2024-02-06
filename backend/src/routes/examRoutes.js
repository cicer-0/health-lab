const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

// Endpoint para crear un examen
router.post('/exams', examController.createExam);

// Endpoint para obtener todos los exámenes
router.get('/exams', examController.getAllExams);

// Endpoint para obtener un examen por ID
router.get('/exams/:id', examController.getExamById);

// Endpoint para actualizar un examen por ID
router.put('/exams/:id', examController.updateExam);

// Endpoint para eliminar un examen por ID
router.delete('/exams/:id', examController.deleteExam);

module.exports = router;
