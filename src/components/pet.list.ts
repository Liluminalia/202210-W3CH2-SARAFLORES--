import { PETS } from '../models/data.js';
import { Pet } from '../models/pets.js';
import { Store } from '../services/storage.js';
import { AddPet } from './add.pet.js';
import { ItemPet } from './item.pet.js';
import { Component } from './component.js';

export class PetList extends Component {
    template!: string;
    storeService: Store<Pet>;
    pets: Array<Pet>;
    constructor(public selector: string) {
        super();
        this.storeService = new Store('Pets');
        if (this.storeService.getStore().length === 0) {
            this.pets = [...PETS];
            this.storeService.setStore(this.pets);
        } else {
            this.pets = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `
        
            <section>
                <h2>pets</h2>
                <slot id="add-pet"></slot>
                <ul>`;

        this.pets.forEach((item: Pet) => {
            template += new ItemPet(
                '',
                item,
                this.handlerEraser.bind(this),
                this.handlerAdopted.bind(this)
            ).template;
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
        const message = (document.querySelector('#message') as HTMLInputElement)
            .value;

        this.pets.push(new Pet(name, kind, race, parents, message));
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }

    handlerEraser(eraserId: number) {
        this.pets = this.pets.filter((item) => item.id !== eraserId);
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }

    handlerAdopted(changeID: number) {
        const i = this.pets.findIndex((item) => item.id === changeID);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        if (this.pets[i].isAdopted) {
            this.pets[i].parents;
        }
        this.storeService.setStore(this.pets);
    }
}
