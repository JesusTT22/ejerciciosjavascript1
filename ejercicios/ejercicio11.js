// Definición del objeto Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  // Método para mostrar detalles de la persona
  Persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
  }
  
  // Definición del objeto Estudiante que hereda de Persona
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  // Heredar los métodos de Persona
  Estudiante.prototype = Object.create(Persona.prototype);
  
  // Método para registrar al estudiante
  Estudiante.prototype.registrar = function() {
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
  }
  
  // Definición del objeto Profesor que hereda de Persona
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  // Heredar los métodos de Persona
  Profesor.prototype = Object.create(Persona.prototype);
  
  // Método para asignar al profesor
  Profesor.prototype.asignar = function() {
    console.log(`${this.nombre} ha sido asignado como profesor de ${this.asignatura} en el nivel ${this.nivel}.`);
  }
  
  // Crear objetos y casos de prueba
  var persona1 = new Persona("Juan", 30, "Masculino");
  var estudiante1 = new Estudiante("Maria", 20, "Femenino", "Informática", "Grupo A");
  var profesor1 = new Profesor("Carlos", 40, "Masculino", "Matemáticas", "Secundaria");
  
  persona1.obtDetalles();
  estudiante1.obtDetalles();
  estudiante1.registrar();
  profesor1.obtDetalles();
  profesor1.asignar();