/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Validation = __webpack_require__(2);

	//import testValidate from './testvalidate';

	vihome.validation = new _Validation.Validation();
	//validation.addForm('#login-form', testValidate)

	__webpack_require__(12);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Validation = undefined;

	var _params = __webpack_require__(8);

	var _params2 = _interopRequireDefault(_params);

	var _rules = __webpack_require__(9);

	var _rules2 = _interopRequireDefault(_rules);

	var _Form = __webpack_require__(10);

	var _Input = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Validation = exports.Validation = function () {

	    /**
	     * @constructor
	     */

	    function Validation() {
	        (0, _classCallCheck3.default)(this, Validation);

	        this.forms = [];
	    }

	    /**
	     * Add form to validator
	     * @param {string} form id
	     * @param {array} data
	     */


	    (0, _createClass3.default)(Validation, [{
	        key: 'addForm',
	        value: function addForm(form, data) {
	            this.forms.push(new _Form.Form({
	                id: form,
	                inputs: data
	            }));
	        }

	        /**
	         * Get form by DOM id
	         * @param {string} formId
	         * @returns {Form}
	         */

	    }, {
	        key: 'getForm',
	        value: function getForm(formId) {
	            return this.forms.filter(function (form) {
	                return form.id == formId;
	            })[0];
	        }

	        /**
	         * Call validation immediately
	         * @param {string} formId
	         * @param {object} options
	         * @returns {boolean}
	         */

	    }, {
	        key: 'validate',
	        value: function validate(formId, options) {
	            var form = this.getForm(formId);
	            return form.validate(options);
	        }
	    }]);
	    return Validation;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(5);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    ERROR_MSG_SELECTOR: '.validate-err-msg .help-block',
	    ERROR_CLASS: 'has-error',
	    SUCCESS_CLASS: 'has-success'
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Rules = function () {
	    function Rules() {
	        (0, _classCallCheck3.default)(this, Rules);
	    }

	    (0, _createClass3.default)(Rules, null, [{
	        key: 'isEmpty',
	        value: function isEmpty(value) {
	            return value === null || value === undefined || value == [] || value === '';
	        }
	    }, {
	        key: 'required',
	        value: function required(value, _ref) {
	            var _ref$message = _ref.message;
	            var message = _ref$message === undefined ? 'Cannot be blank.' : _ref$message;
	            var strict = _ref.strict;
	            var requiredValue = _ref.requiredValue;

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
	    }, {
	        key: 'number',
	        value: function number(value, _ref2) {
	            var pattern = _ref2.pattern;
	            var skipOnEmpty = _ref2.skipOnEmpty;
	            var min = _ref2.min;
	            var max = _ref2.max;
	            var tooSmall = _ref2.tooSmall;
	            var tooBig = _ref2.tooBig;

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
	    }, {
	        key: 'date',
	        value: function date(value, _ref3) {
	            var skipOnEmpty = _ref3.skipOnEmpty;
	            var message = _ref3.message;
	            var pattern = _ref3.pattern;

	            if (skipOnEmpty && Rules.isEmpty(value)) {
	                return;
	            }
	            var valid = false;
	            var normalizedDate = new Date(Date.parse(pattern));
	            if (isNaN(normalizedDate) || normalizedDate == 'Invalid Date') {
	                return false;
	            } else {
	                valid = true;
	            }
	            if (!valid) {
	                return message;
	            }
	        }
	    }, {
	        key: 'boolean',
	        value: function boolean(value, _ref4) {
	            var skipOnEmpty = _ref4.skipOnEmpty;
	            var strict = _ref4.strict;
	            var trueValue = _ref4.trueValue;
	            var falseValue = _ref4.falseValue;

	            if (skipOnEmpty && Rules.isEmpty(value)) {
	                return;
	            }
	            var valid = !strict && (value == trueValue || value == falseValue) || strict && (value === trueValue || value === falseValue);

	            if (!valid) {
	                return message;
	            }
	        }
	    }, {
	        key: 'string',
	        value: function string(value, _ref5) {
	            var skipOnEmpty = _ref5.skipOnEmpty;
	            var min = _ref5.min;
	            var max = _ref5.max;
	            var is = _ref5.is;
	            var _ref5$message = _ref5.message;
	            var message = _ref5$message === undefined ? 'Not string' : _ref5$message;
	            var tooShort = _ref5.tooShort;
	            var tooLong = _ref5.tooLong;
	            var notEqual = _ref5.notEqual;

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
	    }, {
	        key: 'regularExpression',
	        value: function regularExpression(value, _ref6) {
	            var skipOnEmpty = _ref6.skipOnEmpty;
	            var message = _ref6.message;
	            var pattern = _ref6.pattern;
	            var not = _ref6.not;

	            if (skipOnEmpty && Rules.isEmpty(value)) {
	                return;
	            }
	            if (!not && !value.match(pattern) || not && value.match(pattern)) {
	                return message;
	            }
	        }
	    }, {
	        key: 'email',
	        value: function email(value, _ref7) {
	            var message = _ref7.message;
	            var skipOnEmpty = _ref7.skipOnEmpty;
	            var enableIDN = _ref7.enableIDN;
	            var pattern = _ref7.pattern;
	            var allowName = _ref7.allowName;
	            var fullPattern = _ref7.fullPattern;

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

	            if (!valid || !(value.match(pattern) || allowName && value.match(fullPattern))) {
	                return message;
	            }
	        }
	    }, {
	        key: 'url',
	        value: function url(value, _ref8) {
	            var message = _ref8.message;
	            var skipOnEmpty = _ref8.skipOnEmpty;
	            var defaultScheme = _ref8.defaultScheme;
	            var enableIDN = _ref8.enableIDN;

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
	    }, {
	        key: 'compare',
	        value: function compare(value, _ref9) {
	            var _ref9$message = _ref9.message;
	            var message = _ref9$message === undefined ? 'value compare' : _ref9$message;
	            var skipOnEmpty = _ref9.skipOnEmpty;
	            var compareAttribute = _ref9.compareAttribute;
	            var compareValue = _ref9.compareValue;
	            var operator = _ref9.operator;
	            var type = _ref9.type;

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
	    }, {
	        key: 'range',
	        value: function range(value, _ref10) {
	            var message = _ref10.message;
	            var skipOnEmpty = _ref10.skipOnEmpty;
	            var allowArray = _ref10.allowArray;
	            var _range = _ref10.range;
	            var not = _ref10.not;

	            if (skipOnEmpty && Rules.isEmpty(value)) {
	                return;
	            }

	            if (!allowArray && $.isArray(value)) {
	                return message;
	            }

	            var inArray = true;

	            $.each($.isArray(value) ? value : [value], function (i, v) {
	                if ($.inArray(v, _range) == -1) {
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
	    }]);
	    return Rules;
	}();

	exports.default = Rules;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Form = undefined;

	var _params = __webpack_require__(8);

	var _params2 = _interopRequireDefault(_params);

	var _rules = __webpack_require__(9);

	var _rules2 = _interopRequireDefault(_rules);

	var _Input = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Form = exports.Form = function () {

	    /**
	     * @constructor
	     */

	    function Form(data) {
	        var _this = this;

	        (0, _classCallCheck3.default)(this, Form);

	        this.id = data.id;
	        this.inputs = [];

	        data.inputs.forEach(function (input) {
	            input.form = _this;
	            _this.inputs.push(new _Input.Input(input));
	        });

	        this.onSubmitAction();
	    }

	    /**
	     * Get form DOM id
	     * @returns {string}
	     */


	    (0, _createClass3.default)(Form, [{
	        key: 'getId',
	        value: function getId() {
	            return this.id;
	        }
	    }, {
	        key: 'getForm',
	        value: function getForm() {
	            return $(this.getId());
	        }

	        /**
	         * Set valid status
	         */

	    }, {
	        key: 'setValid',
	        value: function setValid(valid) {
	            this.valid = valid;
	        }

	        /**
	         * Get valid status
	         * @returns {boolean}
	         */

	    }, {
	        key: 'getValid',
	        value: function getValid() {
	            return this.valid;
	        }

	        /**
	         * Validate all inputs on form
	         * @returns {boolean}
	         */

	    }, {
	        key: 'validate',
	        value: function validate() {
	            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var parent = _ref.parent;


	            this.inputs.forEach(function (input) {

	                input.getInput().each(function (i, el) {

	                    if (parent && !$(el).closest(parent).length) return;

	                    input.checkValidation(el);
	                });
	            });
	            return this.getValid();
	        }

	        /**
	         * Stop submit form if not valid
	         */

	    }, {
	        key: 'onSubmitAction',
	        value: function onSubmitAction() {
	            var _this2 = this;

	            this.getForm().on('submit', function (e) {
	                return _this2.validate() || e.preventDefault();
	            });
	        }
	    }]);
	    return Form;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Input = undefined;

	var _params = __webpack_require__(8);

	var _params2 = _interopRequireDefault(_params);

	var _rules = __webpack_require__(9);

	var _rules2 = _interopRequireDefault(_rules);

	var _Form = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Input = exports.Input = function () {
	    function Input(data) {
	        (0, _classCallCheck3.default)(this, Input);

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


	    (0, _createClass3.default)(Input, [{
	        key: 'addWatcher',
	        value: function addWatcher() {
	            var _this = this;

	            $(document).on('blur', this.getSelector(), function (e) {
	                return _this.checkValidation(e.target);
	            });
	        }

	        /**
	         * Get input value, get validation messages from validate arr, render valid status
	         */

	    }, {
	        key: 'checkValidation',
	        value: function checkValidation(target) {

	            var $input = $(target);

	            var value = Input.getValue($input, this.form.getForm());
	            var messages = Input.getMessages(value, this.validate, { $input: $input });

	            this.renderValidationStatus($input, messages);
	            this.form.setValid(!messages.length);
	        }

	        /**
	         * Check all validation rules from element, and collect validation message to array
	         * @param {string} value
	         * @param {object} validate
	         * @returns {array}
	         */

	    }, {
	        key: 'renderValidationStatus',


	        /**
	         * If messages exists - render messages to error container. Add error class to container
	         * @param {jQuery} $input
	         * @param {array} messages
	         */
	        value: function renderValidationStatus($input, messages) {

	            var $container = $input.closest(this.container);
	            var $errBlock = $container.find(_params2.default.ERROR_MSG_SELECTOR);

	            $errBlock.empty();
	            $container.removeClass(_params2.default.ERROR_CLASS + ' ' + _params2.default.SUCCESS_CLASS);

	            if (messages.length) {
	                var str = messages.reduce(function (str, msg) {
	                    return str + '<span>' + msg + '</span>';
	                }, '');
	                $errBlock.append(str);
	                $container.addClass(_params2.default.ERROR_CLASS);
	            } else {
	                $container.addClass(_params2.default.SUCCESS_CLASS);
	            }
	        }

	        /**
	         * Return correct DOM selector
	         * @returns {string}
	         */

	    }, {
	        key: 'getSelector',
	        value: function getSelector() {
	            return this.form.getId() + ' ' + this.input;
	        }
	    }, {
	        key: 'getInput',
	        value: function getInput() {
	            return $(this.getSelector());
	        }

	        /**
	         * Get value from input
	         * @param {jQuery} $input
	         * @returns {*}
	         */

	    }], [{
	        key: 'getMessages',
	        value: function getMessages(value, validate, _ref) {
	            var $input = _ref.$input;

	            if (validate) {
	                return validate.reduce(function (arr, _ref2) {
	                    var rule = _ref2.rule;
	                    var options = _ref2.options;
	                    var when = _ref2.when;


	                    if (when) {
	                        var $neighboringInput = Input.getNeighboringInput($input, when.input);
	                        if ($neighboringInput) {
	                            var neighboringInputVal = +Input.getValue($neighboringInput);

	                            if (!_rules2.default['compare'](when.value, { compareValue: neighboringInputVal, operator: when.operator })) {
	                                if (_rules2.default[rule](value, options)) {
	                                    arr.push(_rules2.default[rule](value, options));
	                                }
	                            }
	                        }
	                    } else {
	                        if (_rules2.default[rule](value, options)) {
	                            arr.push(_rules2.default[rule](value, options));
	                        }
	                    }

	                    return arr;
	                }, []);
	            }
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue($input, $form) {

	            var type = $input.attr('type');
	            if (type === 'checkbox' || type === 'radio') {
	                var $realInput = $input.filter(':checked');
	                if (!$realInput.length) {
	                    $realInput = $form.find('input[type=hidden][name="' + $input.attr('name') + '"]');
	                }
	                return $realInput.val();
	            } else {
	                return $input.val();
	            }
	        }
	    }, {
	        key: 'getNeighboringInput',
	        value: function getNeighboringInput($currentInput, findSelector) {

	            var $parent = $currentInput.parent();
	            if ($parent.find(findSelector).length) return $parent.find(findSelector);else {
	                var $parentParent = $parent.parent();
	                if ($parentParent.find(findSelector).length) return $parentParent.find(findSelector);else {
	                    var $parentParentParent = $parentParent.parent();
	                    if ($parentParentParent.find(findSelector).length) return $parentParentParent.find(findSelector);
	                }
	            }
	        }
	    }]);
	    return Input;
	}();

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);