class Persona{
    nombre="def nombre";
    animo=true;
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setAnimo(animo){
        this.animo = animo;
    }
    saludarA(unaPersona){
        console.log("Hola! soy "+this.nombre);
        unaPersona.serSaludadoPor(this)
    }
    serSaludadoPor(alguien){
        console.log("Como estas! soy "+this.nombre);
        console.log("A donde vas "+ alguien.getNombre()+"?");
    }
    seEncuentraCon(unConocido){
        if (this.animo) {
            this.saludarA(unConocido);
        }else{
            console.log("Paso de largo..");
        }
    }
}

module.exports = Persona;