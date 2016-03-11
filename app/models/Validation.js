import PARAMS from '../const/params.js';
import Rules from '../helpers/rules.js';

import { Form } from './Form';
import { Input } from './Input';

export class Validation {

    /**
     * @constructor
     */
    constructor() {
        this.forms = [];
    }

    /**
     * Add form to validator
     * @param {string} form id
     * @param {array} data
     */
    addForm(form, data) {
        this.forms.push(new Form({
            id: form,
            inputs: data
        }));

    }

    /**
     * Get form by DOM id
     * @param {string} formId
     * @returns {Form}
     */
    getForm(formId) {
        return this.forms.filter((form) => form.id == formId )[0];
    }

    /**
     * Call validation immediately
     * @param {string} formId
     * @param {object} options
     * @returns {boolean}
     */
    validate(formId, options) {
        let form = this.getForm(formId);
        return form.validate(options);
    }

}
