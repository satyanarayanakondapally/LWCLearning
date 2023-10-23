import { LightningElement } from 'lwc';

export default class Person extends LightningElement {
    @api
    location;

    /*
    *   @track - Whenever you want to make a property of a data member reactive
    *   @api - Whenever you want to make a data member or member function public
    *
    *   Note:-
    *   When you need to update the whole data member, no decorator is required
    *   but, if you need to update the property of your data member in lwc component
    *   you need to use a decorator - track
    */

    @track
    user = {
        firstName: 'Satya',
        lastName: 'Narayana'
    };

    @api
    updateUser() {
        // this.user = {
        //     firstName: 'Virat',
        //     lastName: 'Kohli'
        // };

        this.user.firstName = 'Surya';
    }
}