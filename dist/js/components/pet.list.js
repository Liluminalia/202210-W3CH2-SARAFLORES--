import { PETS } from '../models/data.js';
import { Pet } from '../models/pets.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document.querySelectorAll('eraser').forEach((item) => item.addEventListener('click', () => {
                this.handleEraser.bind(this);
            }));
        }, 100);
    }
    createTemplate() {
        let template = `
        
            <section>
                <h2>pets</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += `
            <li> id:${item.id} / ${item.name} / ${item.race} - ${item.kind} --  -- ${item.parents}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `
        </ul>
            </section>
        
        `;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const name = document.querySelector('#name')
            .value;
        const kind = document.querySelector('#kind')
            .value;
        const race = document.querySelector('#race')
            .value;
        const parents = document.querySelector('#parents')
            .value;
        this.pets.push(new Pet(name, kind, race, parents));
        this.manageComponent();
    }
    handleEraser(ev) {
        const deletedId = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedId);
        this.manageComponent();
    }
}
