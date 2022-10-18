export class Pet {
    constructor(name, kind, race, parents) {
        this.name = name;
        this.kind = kind;
        this.race = race;
        this.parents = parents;
        this.id = Pet.createId();
        this.isAdopted = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000); //simulacion de base de datos
    }
}
