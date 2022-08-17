// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
    constructor (nombre, edad, DNI, sexo = (H,M), peso, altura, añoDeNacimiento){
   this.nombre = nombre; 
   this.edad = edad;
   this.DNI = DNI;
   this.sexo = sexo;
   this.peso = peso;
   this.altura = altura;
   this.añoDeNacimiento = añoDeNacimiento;
    }
   mostrarGeneracion(){
   
   }
   mostrarDatos(){
   
   }
   
   }
   
   let generacion = ["generacion Z", "generacion Y", "generacion X", "baby boom", "Silent Generation"]
   
   let rasgoCaracteristico = ["irreverencia", "frustracion", "obsesion por el exito", "ambicion", "austeridad"]
   
   var persona1 = new Persona("Nicolas", 18, 41124900, "H", 59, 1,87, 2000);
   console.log(persona1);
   