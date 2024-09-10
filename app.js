const Persona = require("./Persona");


const personaUno = new Persona();
const personaDos = new Persona();

personaUno.setNombre("David");
personaDos.setNombre("Carlos");
personaDos.setAnimo(false);

personaDos.seEncuentraCon(personaUno);

