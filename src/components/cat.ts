import { AddPet } from './add.pet.js';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Main } from './main.js';
import { PetList } from './pet.list.js';

export class Cat {
    directory: string;
    constructor(
        public name: string,
        public kind: string,
        public race: string,
        public parents: string
    ) {
        this.directory = './cat.html';
    }
    createTemplate() {
        const template = `
        
            <section>
                <h2>NERON</h2>
                 <img src="./dist/img/cat.jpg" alt="foto de un gato egipcio">
                
            </section>
        
        `;
        return template;
    }
}
