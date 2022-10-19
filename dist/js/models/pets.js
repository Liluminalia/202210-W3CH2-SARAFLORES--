export class Pet {
    constructor(name, kind, race, parents, message) {
        this.name = name;
        this.kind = kind;
        this.race = race;
        this.parents = parents;
        this.message = message;
        this.id = Pet.createId();
        this.isAdopted = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
