### Organizacion de carpetas

```plaintext
frontend/
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- app.js
|-- assets/
|   |-- images/
|-- layers/
|   |-- presentation/
|   |   |-- views/
|   |   |   |-- register/
|   |   |   |   |-- examRegistration/
|   |   |   |   |   |-- examRegistration.html
|   |   |   |   |   |-- examRegistration.css
|   |   |   |   |   |-- examRegistration.js
|   |   |   |   |-- sampleRegistration/
|   |   |   |   |   |-- sampleRegistration.html
|   |   |   |   |   |-- sampleRegistration.css
|   |   |   |   |   |-- sampleRegistration.js
|   |   |   |   |-- resultRegistration/
|   |   |   |   |   |-- resultRegistration.html
|   |   |   |   |   |-- resultRegistration.css
|   |   |   |   |   |-- resultRegistration.js
|   |   |   |-- visualize/
|   |   |   |   |-- examSummary/
|   |   |   |   |   |-- examSummary.html
|   |   |   |   |   |-- examSummary.css
|   |   |   |   |   |-- examSummary.js
|   |   |   |   |-- visualizePage/
|   |   |   |   |   |-- visualizePage.html
|   |   |   |   |   |-- visualizePage.css
|   |   |   |   |   |-- visualizePage.js
|   |   |   |   |-- patientDetails/
|   |   |   |   |   |-- patientDetails.html
|   |   |   |   |   |-- patientDetails.css
|   |   |   |   |   |-- patientDetails.js
|   |   |   |   |-- examDetails/
|   |   |   |   |   |-- examDetails.html
|   |   |   |   |   |-- examDetails.css
|   |   |   |   |   |-- examDetails.js
|   |   |   |   |-- sampleDetails/
|   |   |   |   |   |-- sampleDetails.html
|   |   |   |   |   |-- sampleDetails.css
|   |   |   |   |   |-- sampleDetails.js
|   |   |   |   |-- resultDetails/
|   |   |   |   |   |-- resultDetails.html
|   |   |   |   |   |-- resultDetails.css
|   |   |   |   |   |-- resultDetails.js
|   |   |   |   |-- measurementDetails/
|   |   |   |   |   |-- measurementDetails.html
|   |   |   |   |   |-- measurementDetails.css
|   |   |   |   |   |-- measurementDetails.js
|-- layers/
|   |-- domain/
|   |   |-- services/
|   |   |   |-- examService.js
|   |   |   |-- sampleService.js
|   |   |   |-- resultService.js
|   |   |   |-- patientService.js
|   |   |-- models/
|   |   |   |-- Exam.js
|   |   |   |-- Sample.js
|   |   |   |-- Result.js
|   |   |   |-- Patient.js
|-- layers/
|   |-- infrastructure/
|   |   |-- api/
|   |   |   |-- examApi.js
|   |   |   |-- sampleApi.js
|   |   |   |-- resultApi.js
|   |   |   |-- patientApi.js
```

**Explicación:**

- **Capa de Presentación (Presentation):** Contiene las vistas de la aplicación.
- **Capa de Dominio (Domain):** Contiene los servicios y modelos que representan la lógica de negocio de la aplicación.
- **Capa de Infraestructura (Infrastructure):** Contiene los módulos que interactúan con la infraestructura, como servicios API.

### Página Principal:
- Bienvenida al sistema de laboratorio.
- Enlaces a las secciones principales: "Registrar" y "Visualizar".

### Sección "Registrar":
1. **Registro de Exámenes:**
   - Formulario para ingresar la información del examen a realizar.
   - Botón "Registrar Examen".

2. **Registro de Muestras:**
   - Formulario para ingresar la información de la muestra.
   - Botón "Registrar Muestra".

3. **Registro de Resultados de Muestras:**
   - Formulario para ingresar los resultados de la muestra.
   - Botón "Registrar Resultados".

### Sección "Visualizar":
* **Resumen de un Registro de Examen:**
  - Muestra todos los tipos de exámenes para el examen seleccionado.
  - Sublista de los detalles de resultados de medida para cada tipo de examen.
* **Página visualizar:**
    * Mostrar la lista de pacientes.
* **Página de detalles del paciente:**
    * Mostrar información del paciente.
    * Mostrar la lista de exámenes realizados por el paciente.
* **Página de detalles del examen:**
    * Mostrar información del examen.
    * un enlace a (Resumen de un Registro de Examen)
    * Mostrar la lista de muestras tomadas para el examen.
* **Página de detalles de la muestra:**
    * Mostrar información detallada de la muestra.
    * Mostrar el resultado de la muestra (si está listo).
* **Página de detalles del resultado:**
    * Mostrar información detallada del resultado.
    * Mostrar la lista de mediciones del resultado.
* **Página de detalles de la medición:**
    * Mostrar información detallada de la medición.

/backend
  /src
    /controllers
      examController.js
      examDetailController.js
      sampleController.js
      examTypeController.js
      sampleTypeController.js
      magnitudeController.js
      resultController.js
      doctorController.js
      patientController.js
      detailResultController.js
    /db
      /migrations
      /prisma
        schema.prisma
    /routes
      index.routes.js
    /services
      examService.js
      examDetailService.js
      sampleService.js
      examTypeService.js
      sampleTypeService.js
      magnitudeService.js
      resultService.js
      doctorService.js
      patientService.js
      detailResultService.js
  .env
  app.js
  server.js
