
const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const examDetailController = require('../controllers/examDetailController');
const sampleController = require('../controllers/sampleController');
const examTypeController = require('../controllers/examTypeController');
const sampleTypeController = require('../controllers/sampleTypeController');
const magnitudeController = require('../controllers/magnitudeController');
const resultController = require('../controllers/resultController');
const doctorController = require('../controllers/doctorController');
const patientController = require('../controllers/patientController');
const detailResultController = require('../controllers/detailResultController');

// Usa los endpoints ya definidos en los controladores
router.use('/exams', examController);
router.use('/examDetails', examDetailController);
router.use('/samples', sampleController);
router.use('/examTypes', examTypeController);
router.use('/sampleTypes', sampleTypeController);
router.use('/magnitudes', magnitudeController);
router.use('/results', resultController);
router.use('/doctors', doctorController);
router.use('/patients', patientController);
router.use('/detailResults', detailResultController);

module.exports = router;
