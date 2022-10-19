import { Component } from './component.js';
export class ItemPet extends Component {
    constructor(selector, item, handleErase, handleChange) {
        super();
        this.selector = selector;
        this.item = item;
        this.handleErase = handleErase;
        this.handleChange = handleChange;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
                this.handleErase(this.item.id);
            });
            document.querySelector(`#c${this.item.id}`).addEventListener('change', () => {
                this.handleChange(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `
        <li>
            Adopted<input id="c${this.item.id}"
            type= "checkbox" ${this.item.isAdopted ? 'checked' : ''}>
            <span>${this.item.id}</span> -
            <span>${this.item.name}</span>
            <span>${this.item.race}</span>
            <span>${this.item.kind}</span>
            <span> ${this.item.isAdopted ? this.item.parents : ''}</span>
            <span> ${this.item.isAdopted ? this.item.message : ''}</span>
            <span class="button" id="i${this.item.id}">🗑️</span>
        </li>`;
    }
}
