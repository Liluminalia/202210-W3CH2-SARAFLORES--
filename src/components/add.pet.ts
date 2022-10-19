import { Component } from './component.js';

export class AddPet extends Component {
    template: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    handle(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `
        <form>
        <div>
            <div>Añada una mascota</div>            
            <div>
            <input type="text" id="name" placeholder="nombre de la mascota" >
            </div>
            <div>
            <input type="text" id="kind" placeholder="Tipo de mascota" required>
            </div>
            <div>
            <input type="text" id="race" placeholder="raza de la mascota" >
            </div>
            <div id="parents">
            
            </div>
            <button type="submit">Añadir</button>
        </div>
        <form>`;
    }
}
