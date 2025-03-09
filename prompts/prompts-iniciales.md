# Endpoints para la Gestión de Candidatos en Kanban

# 📌 Índice

## 1️⃣ [ROL](#rol)

## 2️⃣ [REQUERIMIENTOS](#requerimientos)
### 🔹 [Principios de Diseño de Código](#principios-de-diseño-de-código)
- [SOLID](#solid)
  - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp)
  - [Open/Closed Principle (OCP)](#openclosed-principle-ocp)
  - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp)
  - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp)
  - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)

- [DRY (Don't Repeat Yourself)](#dry-dont-repeat-yourself)

## 3️⃣ [Domain-Driven Design (DDD)](#domain-driven-design-ddd)
- [Entidades](#entidades)
- [Value Objects](#value-objects)
- [Agregados](#agregados)
- [Repositorios](#repositorios)
- [Servicios de Dominio](#servicios-de-dominio)
- [Factories](#factories)
- [Eventos de Dominio](#eventos-de-dominio)

## 4️⃣ [Patrones de Diseño](#patrones-de-diseño)
### 🔹 [Creacionales](#creacionales)
- [Singleton](#singleton)
- [Factory](#factory)

### 🔹 [Estructurales](#estructurales)
- [Facade](#facade)

### 🔹 [Comportamiento](#comportamiento)
- [Strategy](#strategy)
- [Observer](#observer)

## 5️⃣ [Buenas Prácticas Generales en Desarrollo Backend](#buenas-prácticas-generales-en-desarrollo-backend)
- [Endpoints RESTful bien diseñados](#endpoints-restful-bien-diseñados)
- [Uso de DTOs (Data Transfer Objects)](#uso-de-dtos-data-transfer-objects)
- [Manejo adecuado de errores y excepciones](#manejo-adecuado-de-errores-y-excepciones)
- [Autenticación y autorización segura](#autenticación-y-autorización-segura)
- [Pruebas unitarias e integración](#pruebas-unitarias-e-integración)
- [Inyección de dependencias](#inyección-de-dependencias)
- [Uso de Logs estructurados](#uso-de-logs-estructurados)
- [Optimización de consultas a la base de datos](#optimización-de-consultas-a-la-base-de-datos)
- [Versionado de APIs](#versionado-de-apis)

## 6️⃣ [Endpoints a desarrollar](#endpoints-a-desarrollar)
### 🔹 [Primer Endpoint: GET /positions/:id/candidates](#primer-endpoint-get-positionsidcandidates)
- [Descripción](#descripción)
- [Datos devueltos](#datos-devueltos)
- [Ejemplo de solicitud](#ejemplo-de-solicitud)
- [Ejemplo de respuesta](#ejemplo-de-respuesta)

### 🔹 [Segundo Endpoint: PUT /candidates/:id/stage](#segundo-endpoint-put-candidatesidstage)
- [Descripción](#descripción-1)
- [Parámetros requeridos](#parámetros-requeridos)
- [Ejemplo de solicitud](#ejemplo-de-solicitud-1)
- [Ejemplo de respuesta](#ejemplo-de-respuesta-1)

---

## ROL
Como experto ingeniero de backend, tienes el objetivo de implementar dos nuevos **endpoints** que permitirán manipular la lista de candidatos en una **interfaz tipo Kanban**. 
Analiza el archivo @README.md y en general el proyecto, para implementar los endpoints siguiendo la estructura que ya existe del proyecto.
Ten en cuenta las buenas prácticas que se citan a continuación.
Además, generar un archivo swagger

---
## REQUERIMIENTOS
Debes tener en cuenta las buenas prácticas de desarrollo backend, organizadas en las siguientes categorías:

### **Principios de Diseño de Código**  

### **SOLID** *(Diseño de software orientado a objetos)*
1. **Single Responsibility Principle (SRP)** - Cada clase debe tener **una única responsabilidad**.  
2. **Open/Closed Principle (OCP)** - El código debe ser **abierto para extensión, pero cerrado para modificación**.  
3. **Liskov Substitution Principle (LSP)** - Las clases derivadas deben poder **sustituir a su clase base** sin afectar la funcionalidad.  
4. **Interface Segregation Principle (ISP)** - Es mejor tener **múltiples interfaces pequeñas y específicas** que una sola interfaz grande.  
5. **Dependency Inversion Principle (DIP)** - Los módulos de **alto nivel** no deben depender de los de **bajo nivel**, ambos deben depender de **abstracciones**.  

### **DRY (Don't Repeat Yourself)**  
- Evitar la **duplicación de código** centralizando la lógica en métodos reutilizables.  
- Mejora la **mantenibilidad y escalabilidad** del sistema.  

---

## **Domain-Driven Design (DDD)**  

1. **Entidades** - Objetos con **identidad única** dentro del dominio.  
2. **Value Objects** - Objetos que **describen aspectos** del dominio pero no tienen identidad propia.  
3. **Agregados** - Conjuntos de objetos que deben tratarse como **una sola unidad**.  
4. **Repositorios** - Interfaces para acceder a entidades y agregados.  
5. **Servicios de Dominio** - Lógica de negocio que **no pertenece a una sola entidad**.  
6. **Factories** - Creación de objetos **complejos** asegurando que cumplan con las reglas del negocio.  
7. **Eventos de Dominio** - Permiten manejar efectos secundarios de manera **desacoplada**.  

---

## **Patrones de Diseño** *(Mejoran la organización y flexibilidad del código)*  

### **Creacionales** *(Gestión de instancias de objetos)*
- **Singleton** - Garantiza que **una clase tenga solo una instancia** en toda la aplicación.  
- **Factory** - Centraliza la **creación de objetos**, permitiendo cambiar implementaciones fácilmente.  

### **Estructurales** *(Optimización de la arquitectura)*
- **Facade** - Simplifica el acceso a un sistema **complejo mediante una única interfaz**.  

### **Comportamiento** *(Facilita la interacción entre objetos)*
- **Strategy** - Permite intercambiar **algoritmos o comportamientos dinámicamente**.  
- **Observer** - Un objeto puede **notificar a otros objetos sobre cambios en su estado**.  

---

## **Buenas Prácticas Generales en Desarrollo Backend**  

1. **Endpoints RESTful bien diseñados** *(Claridad y estructura adecuada)*  
2. **Uso de DTOs (Data Transfer Objects)** para encapsular datos en peticiones/respuestas.  
3. **Manejo adecuado de errores y excepciones** *(evitar mostrar detalles sensibles al usuario final)*.  
4. **Autenticación y autorización segura** *(JWT, OAuth, RBAC, etc.)*.  
5. **Pruebas unitarias e integración** *(para garantizar calidad y evitar regresiones)*.  
6. **Inyección de dependencias** *(mejora la modularidad y testabilidad del código)*.  
7. **Uso de Logs estructurados** *(para facilitar la depuración y monitoreo)*.  
8. **Optimización de consultas a la base de datos** *(uso eficiente de índices y transacciones)*.  
9. **Versionado de APIs** *(para evitar romper compatibilidad con clientes existentes)*.  

---
## Endpoints a desarrollar
### Primer endpoint
**Endpoint:** 
```http
GET /positions/:id/candidates**
```

**Descripción:**  
Este endpoint devuelve todos los candidatos en proceso para una determinada posición, es decir, todas las aplicaciones asociadas a un `positionID` específico.

**Datos devueltos:**  
Cada candidato debe incluir la siguiente información:
- **Nombre completo del candidato** (de la tabla `candidate`).
- **current_interview_step**: La fase actual del proceso de entrevista en la que se encuentra el candidato (de la tabla `application`).
- **Puntuación media** del candidato, basada en los scores de cada entrevista (`interview`) realizada.

**Ejemplo de solicitud:**  
```http
GET /positions/123/candidates
```

**Ejemplo de respuesta:**  
```json
[
  {
    "full_name": "John Doe",
    "current_interview_step": "Technical Interview",
    "average_score": 4.5
  },
  {
    "full_name": "Jane Smith",
    "current_interview_step": "HR Interview",
    "average_score": 3.8
  }
]
```

### Segundo endpoint
**Endpoint:** 
```http
PUT /candidates/:id/stage**
```

**Descripción:**  
Este endpoint permite actualizar la **etapa del proceso de entrevista** en la que se encuentra un candidato específico.  

**Parámetros requeridos:**  
- **id** (en la URL): Identificador del candidato.
- **Nuevo stage** (en el body de la petición): La nueva fase del proceso de entrevista.

**Ejemplo de solicitud:**  
```http
PUT /candidates/456/stage
Content-Type: application/json

{
  "new_stage": "Final Interview"
}
```

📌 **Ejemplo de respuesta:**  
```json
{
  "message": "Candidate stage updated successfully",
  "candidate_id": 456,
  "new_stage": "Final Interview"
}
```