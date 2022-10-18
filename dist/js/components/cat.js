export class Cat {
    constructor(name, kind, race, parents) {
        this.name = name;
        this.kind = kind;
        this.race = race;
        this.parents = parents;
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
