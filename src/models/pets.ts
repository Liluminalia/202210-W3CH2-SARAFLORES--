export class Pet {
    id: number;
    isAdopted: boolean;

    static createId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(
        public name: string,
        public kind: string,
        public race: string,
        public parents: string,
        public message: string
    ) {
        this.id = Pet.createId();
        this.isAdopted = false;
    }
}
