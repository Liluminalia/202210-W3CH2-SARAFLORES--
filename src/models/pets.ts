export interface IPets {
    name: string;
    kind: string;
    race: string;
    isAdopted: boolean;
    parents: string;
}
export class Pet {
    id: number;
    isAdopted: boolean;

    static createId() {
        return Math.round(Math.random() * 1_000_000); //simulacion de base de datos
    }
    constructor(
        public name: string,
        public kind: string,
        public race: string,
        public parents: string
    ) {
        this.id = Pet.createId();
        this.isAdopted = false;
    }
}
