import PARAMS from '../const/params';
import Rules from '../helpers/rules';
import { Form } from './Form';

export class Input {

    constructor(data) {
        this.input = data.input;
        this.name = data.name;
        this.container = data.container;
        this.validate = data.validate;
        this.form = data.form;

        this.addWatcher();
    }

    /**
     * Add watchers "on blur" for input
     */
    addWatcher() {
        $(document).on('blur', this.getSelector(), (e) => this.checkValidation(e.target));
    }

    /**
     * Get input value, get validation messages from validate arr, render valid status
     */
    checkValidation(target){

        let $input = $(target);

        let value = Input.getValue($input, this.form.getForm());
        let messages = Input.getMessages(value, this.validate, {$input});

        this.renderValidationStatus($input, messages);
        this.form.setValid(!messages.length);
    }



    /**
     * Check all validation rules from element, and collect validation message to array
     * @param {string} value
     * @param {object} validate
     * @returns {array}
     */
    static getMessages(value, validate, {$input}){
        if (validate) {
            return validate.reduce((arr, { rule, options, when }) => {

                if(when) {
                    var $neighboringInput = Input.getNeighboringInput($input, when.input);
                    if($neighboringInput) {
                        var neighboringInputVal = +Input.getValue($neighboringInput);

                        if(!Rules['compare'](when.value, { compareValue: neighboringInputVal, operator: when.operator })) {
                            if(Rules[rule](value, options)) {
                                arr.push(Rules[rule](value, options));
                            }
                        }
                    }

                } else {
                    if(Rules[rule](value, options)) {
                        arr.push(Rules[rule](value, options));
                    }
                }

                return arr;
            }, []);
        }
    }


    /**
     * If messages exists - render messages to error container. Add error class to container
     * @param {jQuery} $input
     * @param {array} messages
     */
    renderValidationStatus($input, messages){

        let $container = $input.closest(this.container);
        let $errBlock = $container.find(PARAMS.ERROR_MSG_SELECTOR);

        $errBlock.empty();
        $container.removeClass(PARAMS.ERROR_CLASS + ' ' + PARAMS.SUCCESS_CLASS);

        if(messages.length) {
            let str = messages.reduce((str, msg) => str + '<span>' + msg + '</span>', '');
            $errBlock.append(str);
            $container.addClass(PARAMS.ERROR_CLASS);
        } else {
            $container.addClass(PARAMS.SUCCESS_CLASS);
        }
    }




    /**
     * Return correct DOM selector
     * @returns {string}
     */
    getSelector() {
        return this.form.getId() + ' ' + this.input;
    }


    getInput() {
        return $(this.getSelector());
    }



    /**
     * Get value from input
     * @param {jQuery} $input
     * @returns {*}
     */
    static getValue($input, $form) {

        let type = $input.attr('type');
        if (type === 'checkbox' || type === 'radio') {
            let $realInput = $input.filter(':checked');
            if (!$realInput.length) {
                $realInput = $form.find('input[type=hidden][name="' + $input.attr('name') + '"]');
            }
            return $realInput.val();
        } else {
            return $input.val();
        }
    }



    static getNeighboringInput($currentInput, findSelector){

        var $parent = $currentInput.parent();
        if($parent.find(findSelector).length) return $parent.find(findSelector);
        else {
            var $parentParent = $parent.parent();
            if($parentParent.find(findSelector).length) return $parentParent.find(findSelector);
            else {
                var $parentParentParent = $parentParent.parent();
                if($parentParentParent.find(findSelector).length) return $parentParentParent.find(findSelector);
            }
        }
    }





}