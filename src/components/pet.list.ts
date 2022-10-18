import { PETS } from '../models/data.js';
import { Pet } from '../models/pets.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';

export class PetList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));

            document
                .querySelectorAll('.eraser')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerEraser.bind(this)
                    )
                );
        }, 100);
    }

    createTemplate() {
        let template = `
        
            <section>
                <h2>pets</h2>
                <slot id="add-pet"></slot>
                <ul>`;

        this.pets.forEach((item: Pet) => {
            template += `
            <li> id:${item.id} - ${item.name} - ${item.race} - ${item.kind} --  -- ${item.parents}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });

        template += `
        </ul>
            </section>
        
        `;
        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();

        const name = (document.querySelector('#name') as HTMLInputElement)
            .value;
        const kind = (document.querySelector('#kind') as HTMLInputElement)
            .value;
        const race = (document.querySelector('#race') as HTMLInputElement)
            .value;
        const parents = (document.querySelector('#parents') as HTMLInputElement)
            .value;

        this.pets.push(new Pet(name, kind, race, parents));
        this.manageComponent();
    }
    handlerEraser(ev: Event) {
        const eraserId = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(eraserId as string)
        );
        this.manageComponent();
    }
}
