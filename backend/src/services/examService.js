const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los exámenes
async function getAllExams() {
  try {
    const exams = await prisma.exam.findMany({
      include: {
        doctor: true,
        patient: true,
        samples: true,
        details: true,
      },
    });
    return exams;
  } catch (error) {
    throw new Error(`Error in getAllExams: ${error.message}`);
  }
}

// Obtener un examen por ID
async function getExamById(examId) {
  try {
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: {
        doctor: true,
        patient: true,
        samples: true,
        details: true,
      },
    });
    return exam;
  } catch (error) {
    throw new Error(`Error in getExamById: ${error.message}`);
  }
}

// Crear un nuevo examen
async function createExam(examData) {
  try {
    const newExam = await prisma.exam.create({
      data: examData,
      include: {
        doctor: true,
        patient: true,
        samples: true,
        details: true,
      },
    });
    return newExam;
  } catch (error) {
    throw new Error(`Error in createExam: ${error.message}`);
  }
}

// Actualizar un examen existente
async function updateExam(examId, updatedExamData) {
  try {
    const updatedExam = await prisma.exam.update({
      where: { id: examId },
      data: updatedExamData,
      include: {
        doctor: true,
        patient: true,
        samples: true,
        details: true,
      },
    });
    return updatedExam;
  } catch (error) {
    throw new Error(`Error in updateExam: ${error.message}`);
  }
}

// Eliminar un examen por ID
async function deleteExam(examId) {
  try {
    const deletedExam = await prisma.exam.delete({
      where: { id: examId },
    });
    return deletedExam;
  } catch (error) {
    throw new Error(`Error in deleteExam: ${error.message}`);
  }
}

module.exports = {
  getAllExams,
  getExamById,
  createExam,
  updateExam,
  deleteExam,
};
