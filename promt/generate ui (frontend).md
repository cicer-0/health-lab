1. **Entidad: Registro de Exámenes**
   - Atributos:
     - ID de Examen (Clave Primaria)
     - Fecha de Solicitud
     - ID de Médico Solicitante (médico que solicita el examen)
     - ID de Paciente (Clave Externa vinculado a "Información del Paciente")
   - Relaciones:
     - **Uno a muchos con la entidad "Registro de Muestras"** (un examen puede tener varias muestras)
     - **Muchos a uno con la entidad "Información del Paciente"** (un paciente puede tener varios exámenes)
     - **Muchos a uno con la entidad "Información del Médico Solicitante"** (un médico puede solicitar varios exámenes)
     - **Uno a muchos con la entidad "Detalle de Exámenes"** (un examen puede tener varios detalles, y un detalle está asociado a un solo examen)
  
2. **Entidad: Tipo de Examen**
   - Atributos:
     - ID de Tipo de Examen (Clave Primaria)
     - Nombre del Tipo de Examen
     - Descripción del Tipo de Examen
   - Relaciones:
     - **Uno a muchos con la entidad "Detalle de Exámenes"** (un tipo puede estar asociado a varios exámenes)

3. **Entidad de Relación: Detalle de Exámenes**
   - Atributos:
     - ID de Detalle (Clave Primaria)
     - ID de Examen (Clave Externa vinculado al Registro de Exámenes)
     - ID de Tipo de Examen (Clave Externa vinculado a "Tipo de Examen")
   - Relaciones:
     - **Muchos a uno con la entidad "Registro de Exámenes"** (varios detalles pertenecen a un examen)
     - **Muchos a uno con la entidad "Tipo de Examen"** (varios detalles corresponden a un tipo)

4. **Entidad: Registro de Muestras**
   - Atributos:
     - ID de Muestra (Clave Primaria)
     - ID de Examen (Clave Externa vinculado al Registro de Exámenes)
     - Fecha y Hora de Toma de Muestra
     - ID de Tipo de Muestra (Clave Externa vinculado a "Tipo de Muestra")
     - Observaciones de la Muestra (cualquier observación adicional sobre la muestra)
   - Relaciones:
     - **Uno a uno con la entidad "Resultados de Muestras"** (cada muestra tiene un conjunto específico de resultados)
     - **Muchos a uno con la entidad "Tipo de Muestra"** (cada muestra se asocia con un tipo específico de muestra)

5. **Entidad: Tipo de Muestra**
   - Atributos:
     - ID de Tipo de Muestra (Clave Primaria)
     - Nombre del Tipo de Muestra
     - Descripción del Tipo de Muestra
   - Relaciones:
     - **Uno a muchos con la entidad "Registro de Muestras"** (cada tipo de muestra puede estar asociado a varios Registro de Muestras)

6. **Entidad: Magnitud (o Unidad de Medida)**
   - Atributos:
     - ID de Magnitud (Clave Primaria)
     - Nombre de la Magnitud (por ejemplo, Concentración, Recuento Celular, etc.)
     - Unidad de Medida (por ejemplo, mg/dL, células/mm³, etc.)
   - Relaciones:
     - **Uno a muchos con la entidad "DetalleResultadoMedida"** (una magnitud puede tener varios detalles de resultados asociados)

7. **Entidad: Resultados de Muestras**
   - Atributos:
     - ID de Resultado (Clave Primaria)
     - ID de Muestra (Clave Externa vinculado al Registro de Muestras)
     - Fecha y Hora de los Resultados
     - Observaciones Adicionales
   - Relaciones:
     - **Uno a uno con la entidad "Registro de Muestras"** (cada muestra tiene un conjunto específico de resultados)

8. **Entidad de Relación: DetalleResultadoMedida**
   - Atributos:
     - ID de Relación (Clave Primaria)
     - ID de Resultado (Clave Externa vinculado a "Resultados de Muestras")
     - ID de Magnitud (Clave Externa vinculado a "Magnitud")
     - Valor Numérico
     - Interpretación Cualitativa
       - Resultado Cualitativo (por ejemplo, positivo, negativo, anormal)
       - Descripción Cualitativa Adicional
   - Relaciones:
     - **Muchos a uno con la entidad "Resultados de Muestras"** (varios detalles de resultado están asociados a un resultado de muestra)
     - **Muchos a uno con la entidad "Magnitud"** (varios detalles de resultado están asociados a una magnitud específica)

9.  **Entidad: Información del Paciente**
   - Atributos:
     - ID de Paciente (Clave Primaria)
     - Nombre del Paciente
     - Fecha de Nacimiento
     - Género
     - Dirección
     - Número de Teléfono
     - Historial Médico
   - Relaciones:
     - **Uno a muchos con la entidad "Registro de Exámenes"** (un paciente puede tener varios exámenes)

10. **Entidad: Información del Médico Solicitante**
   - Atributos:
     - ID de Médico (Clave Primaria)
     - Nombre del Médico
     - Especialidad
     - Dirección de Consulta
     - Número de Teléfono
     - Correo Electrónico
   - Relaciones:
     - **Uno a muchos con la entidad "Registro de Exámenes"** (un médico puede solicitar varios exámenes)
#############################

necesito un sistema de laboratorio donde involucran los siguientes requisitos:
registrar:
 - registro de examenes a realizar
 - registro de muestras de los examenes
 - registro de resultados de las muestras
visulaizar:
 - visualizar lista de pacientes
 - visualizar lista de examenes de un paciente
 - visualizar lista de muestras de un examen
 - visualizar una muestra tomada
 - visualizar el resultado de la muestra
 - visualizar lista de mediciones de resultado
 - visualizar detalla de medicion
 - vista de resumen de un registro de examen
    - se mostrara todas los tipos de examenes para ese examen
    - como una sublista de los tipos de examenes, debe estar los DetalleResultadoMedida que pertenecen a cada tipo de examen
###########################
ui (frontend) de este software, guiame de manera detallada y didactica, quiero conocer el flujo de navegacion.