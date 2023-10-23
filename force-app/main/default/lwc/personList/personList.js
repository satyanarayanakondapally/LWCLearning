import { LightningElement } from 'lwc';

export default class PersonList extends LightningElement {
    persons = [
        {
            id: 1,
            name: 'Satya'
        },
        {
            id: 2,
            name: 'Kohli'
        },
        {
            id: 3,
            name: 'Raina'
        },
        {
            id: 4,
            name: 'Dhoni'
        }
    ];
}