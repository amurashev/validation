export default class Rules {

    static isEmpty(value) {
        return value === null || value === undefined || value == [] || value === '';
    }

    static required(value, { message = 'Cannot be blank.', strict, requiredValue }) {
        var valid = false;
        var isString = typeof value == 'string' || value instanceof String;
        if (strict && value !== undefined || !strict && !Rules.isEmpty(isString ? $.trim(value) : value)) {
            valid = true;
        } else if (!strict && value == requiredValue || strict && value === requiredValue) {
            valid = true;
        }
        if (!valid) {
            return message;
        }
    }

    static number(value, { pattern, skipOnEmpty, min, max, tooSmall, tooBig}) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }
        if (typeof value === 'string' && !value.match(pattern)) {
            return tooSmall;
        }
        if (min !== undefined && value < min) {
            return tooSmall;
        }
        if (max !== undefined && value > max) {
            return tooBig;
        }
    }

    static date(value, { skipOnEmpty, message, pattern }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }
        var valid = false;
        var normalizedDate = new Date(Date.parse(pattern));
        if(isNaN(normalizedDate) || normalizedDate == 'Invalid Date') {
            return false;
        } else {
            valid = true;
        }
        if (!valid) {
            return message;
        }
    }

    static boolean (value, {skipOnEmpty, strict, trueValue, falseValue}) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }
        var valid = !strict && (value == trueValue || value == falseValue)
            || strict && (value === trueValue || value === falseValue);

        if (!valid) {
            return message;
        }
    }

    static string(value, {skipOnEmpty, min, max, is, message = 'Not string', tooShort, tooLong, notEqual}) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }
        if (typeof value !== 'string') {
            return message;
        }
        if (min !== undefined && value.length < min) {
            return tooShort;
        }
        if (max !== undefined && value.length > max) {
            return tooLong;
        }
        if (is !== undefined && value.length != is) {
            return notEqual;
        }
    }

    static regularExpression(value, {skipOnEmpty, message, pattern, not }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }
        if (!not && !value.match(pattern) || not && value.match(pattern)) {
            return message;
        }
    }

    static email(value, { message, skipOnEmpty, enableIDN, pattern, allowName, fullPattern }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }

        var valid = true;

        if (enableIDN) {
            var regexp = /^(.*<?)(.*)@(.*)(>?)$/,
                matches = regexp.exec(value);
            if (matches === null) {
                valid = false;
            } else {
                value = matches[1] + punycode.toASCII(matches[2]) + '@' + punycode.toASCII(matches[3]) + matches[4];
            }
        }

        if (!valid || !(value.match(pattern) || (allowName && value.match(fullPattern)))) {
            return message;
        }
    }

    static url(value, { message, skipOnEmpty, defaultScheme, enableIDN, }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }

        if (defaultScheme && !value.match(/:\/\//)) {
            value = defaultScheme + '://' + value;
        }

        var valid = true;

        if (enableIDN) {
            var regexp = /^([^:]+):\/\/([^\/]+)(.*)$/,
                matches = regexp.exec(value);
            if (matches === null) {
                valid = false;
            } else {
                value = matches[1] + '://' + punycode.toASCII(matches[2]) + matches[3];
            }
        }

        if (!valid || !value.match(pattern)) {
            return message;
        }
    }

    static compare(value, { message = 'value compare', skipOnEmpty, compareAttribute, compareValue, operator, type }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }



        var valid = true;
        if (compareAttribute !== undefined) {
            compareValue = $(compareAttribute).val();
        }

        if (type === 'number') {
            value = parseFloat(value);
            compareValue = parseFloat(compareValue);
        }

        switch (operator) {
            case '==':
                valid = value == compareValue;
                break;
            case '===':
                valid = value === compareValue;
                break;
            case '!=':
                valid = value != compareValue;
                break;
            case '!==':
                valid = value !== compareValue;
                break;
            case '>':
                valid = value > compareValue;
                break;
            case '>=':
                valid = value >= compareValue;
                break;
            case '<':
                valid = value < compareValue;
                break;
            case '<=':
                valid = value <= compareValue;
                break;
            case 'in':
                valid = $.inArray(value, compareValue) != -1;
                break;
            case '!in':
                valid = $.inArray(value, compareValue) == -1;
                break;
            default:
                valid = false;
                break;
        }



        if (!valid) {
            return message;
        }
    }

    static range(value, { message, skipOnEmpty, allowArray, range, not }) {
        if (skipOnEmpty && Rules.isEmpty(value)) {
            return;
        }

        if (!allowArray && $.isArray(value)) {
            return message;
        }

        var inArray = true;

        $.each($.isArray(value) ? value : [value], function(i, v) {
            if ($.inArray(v, range) == -1) {
                inArray = false;
                return false;
            } else {
                return true;
            }
        });

        if (not === inArray) {
            return message;
        }
    }

}
