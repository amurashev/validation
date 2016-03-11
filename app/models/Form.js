import PARAMS from '../const/params';
import Rules from '../helpers/rules';

import { Input } from './Input';

export class Form {

    /**
     * @constructor
     */
    constructor(data) {
        this.id = data.id;
        this.inputs = [];

        data.inputs.forEach((input) => {
            input.form = this;
            this.inputs.push(new Input(input));
        });

        this.onSubmitAction();
    }

    /**
     * Get form DOM id
     * @returns {string}
     */
    getId() {
        return this.id;
    }

    getForm(){
        return $(this.getId());
    }

    /**
     * Set valid status
     */
    setValid(valid) {
        this.valid = valid;
    }

    /**
     * Get valid status
     * @returns {boolean}
     */
    getValid(){
        return this.valid;
    }

    /**
     * Validate all inputs on form
     * @returns {boolean}
     */
    validate({parent} = {}){


        this.inputs.forEach((input) => {

            input.getInput().each((i, el) => {

                if(parent && !$(el).closest(parent).length) return;

                input.checkValidation(el);
            });
        });
        return this.getValid();
    }

    /**
     * Stop submit form if not valid
     */
    onSubmitAction() {
        this.getForm().on('submit', (e) => this.validate() || e.preventDefault());
    }

}