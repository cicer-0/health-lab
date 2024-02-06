import os

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def create_file(path, content=""):
    with open(path, 'w') as file:
        file.write(content)

# Estructura de directorios
directories = [
    "frontend/css",
    "frontend/js",
    "frontend/assets/images",
    "frontend/layers/presentation/views/register/examRegistration",
    "frontend/layers/presentation/views/register/sampleRegistration",
    "frontend/layers/presentation/views/register/resultRegistration",
    "frontend/layers/presentation/views/visualize/examSummary",
    "frontend/layers/presentation/views/visualize/visualizePage",
    "frontend/layers/presentation/views/visualize/patientDetails",
    "frontend/layers/presentation/views/visualize/examDetails",
    "frontend/layers/presentation/views/visualize/sampleDetails",
    "frontend/layers/presentation/views/visualize/resultDetails",
    "frontend/layers/presentation/views/visualize/measurementDetails",
    "frontend/layers/domain/services",
    "frontend/layers/domain/models",
    "frontend/layers/infrastructure/api"
]

# Crear directorios
for directory in directories:
    create_directory(directory)

# Estructura de archivos
files = [
    {"path": "frontend/index.html"},
    {"path": "frontend/css/styles.css"},
    {"path": "frontend/js/app.js"},
    {"path": "frontend/layers/presentation/views/register/examRegistration/examRegistration.html"},
    {"path": "frontend/layers/presentation/views/register/examRegistration/examRegistration.css"},
    {"path": "frontend/layers/presentation/views/register/examRegistration/examRegistration.js"},
    {"path": "frontend/layers/presentation/views/register/sampleRegistration/sampleRegistration.html"},
    {"path": "frontend/layers/presentation/views/register/sampleRegistration/sampleRegistration.css"},
    {"path": "frontend/layers/presentation/views/register/sampleRegistration/sampleRegistration.js"},
    {"path": "frontend/layers/presentation/views/register/resultRegistration/resultRegistration.html"},
    {"path": "frontend/layers/presentation/views/register/resultRegistration/resultRegistration.css"},
    {"path": "frontend/layers/presentation/views/register/resultRegistration/resultRegistration.js"},
    {"path": "frontend/layers/presentation/views/visualize/examSummary/examSummary.html"},
    {"path": "frontend/layers/presentation/views/visualize/examSummary/examSummary.css"},
    {"path": "frontend/layers/presentation/views/visualize/examSummary/examSummary.js"},
    {"path": "frontend/layers/presentation/views/visualize/visualizePage/visualizePage.html"},
    {"path": "frontend/layers/presentation/views/visualize/visualizePage/visualizePage.css"},
    {"path": "frontend/layers/presentation/views/visualize/visualizePage/visualizePage.js"},
    {"path": "frontend/layers/presentation/views/visualize/patientDetails/patientDetails.html"},
    {"path": "frontend/layers/presentation/views/visualize/patientDetails/patientDetails.css"},
    {"path": "frontend/layers/presentation/views/visualize/patientDetails/patientDetails.js"},
    {"path": "frontend/layers/presentation/views/visualize/examDetails/examDetails.html"},
    {"path": "frontend/layers/presentation/views/visualize/examDetails/examDetails.css"},
    {"path": "frontend/layers/presentation/views/visualize/examDetails/examDetails.js"},
    {"path": "frontend/layers/presentation/views/visualize/sampleDetails/sampleDetails.html"},
    {"path": "frontend/layers/presentation/views/visualize/sampleDetails/sampleDetails.css"},
    {"path": "frontend/layers/presentation/views/visualize/sampleDetails/sampleDetails.js"},
    {"path": "frontend/layers/presentation/views/visualize/resultDetails/resultDetails.html"},
    {"path": "frontend/layers/presentation/views/visualize/resultDetails/resultDetails.css"},
    {"path": "frontend/layers/presentation/views/visualize/resultDetails/resultDetails.js"},
    {"path": "frontend/layers/presentation/views/visualize/measurementDetails/measurementDetails.html"},
    {"path": "frontend/layers/presentation/views/visualize/measurementDetails/measurementDetails.css"},
    {"path": "frontend/layers/presentation/views/visualize/measurementDetails/measurementDetails.js"},
    {"path": "frontend/layers/domain/services/examService.js"},
    {"path": "frontend/layers/domain/services/sampleService.js"},
    {"path": "frontend/layers/domain/services/resultService.js"},
    {"path": "frontend/layers/domain/services/patientService.js"},
    {"path": "frontend/layers/domain/models/Exam.js"},
    {"path": "frontend/layers/domain/models/Sample.js"},
    {"path": "frontend/layers/domain/models/Result.js"},
    {"path": "frontend/layers/domain/models/Patient.js"},
    {"path": "frontend/layers/infrastructure/api/examApi.js"},
    {"path": "frontend/layers/infrastructure/api/sampleApi.js"},
    {"path": "frontend/layers/infrastructure/api/resultApi.js"},
    {"path": "frontend/layers/infrastructure/api/patientApi.js"}
]

# Crear archivos
for file in files:
    create_file(file["path"])

print("Estructura creada exitosamente.")
