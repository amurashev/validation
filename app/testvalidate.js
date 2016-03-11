export default [{
    "input": "#loginform-email",
    "name": "login_name",
    "container": ".field-loginform-email",
    "validate": [
        {
            "rule": "required",
            "options": {
                "message": "Email cannot be blank."
            }
        }
    ]
}];