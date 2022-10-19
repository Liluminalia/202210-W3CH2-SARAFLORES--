import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
