"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": [ 4, {
            "except": ["block"],
            "message": "Please use 4 spaces for indentation.",
            "severity": "warning"
        } ]
    }
}
