import { Component } from './component.js';

export class Footer extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
        <footer>
            <address>Asociacion de animales LILUMINALIA</address>
        </footer>
        `;
    }
}
