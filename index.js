module.exports = {
    "rules": {
        "@typescript-eslint/generic-type-naming": 2,
        "@typescript-eslint/member-naming": 2,
        "@typescript-eslint/member-ordering": 2,
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/unified-signatures": 2,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "eol-last": "error",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "indent": "off",
        "comma-dangle": [
            "error",
            "never"
        ],
        "no-await-in-loop": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": [
            "error",
            5
        ],
        "eqeqeq": 2,
        "dot-notation": 2,
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-else-return": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 2,
        "vars-on-top": 2,
        "no-multi-spaces": 2,
        "require-await": 2,
        "yoda": 2,
        "no-shadow": 2,
        "block-spacing": 2,
        "camelcase": 2,
        "function-paren-newline": 2,
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "key-spacing": [
            "error",
            {
                "multiLine": {
                    "beforeColon": false,
                    "afterColon": true
                },
                "align": {
                    "beforeColon": true,
                    "afterColon": true,
                    "on": "colon"
                }
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true
            }
        ],
        "max-depth": [
            "error",
            2
        ],
        "max-len": [
            "error",
            {
                "code": 100
            }
        ],
        "max-lines": [
            "error",
            {
                "max": 150
            }
        ],
        "max-lines-per-function": [
            "error",
            {
                "max": 25
            }
        ],
        "max-nested-callbacks": [
            "error",
            2
        ],
        "max-params": [
            "error",
            {
                "max": 3
            }
        ],
        "max-statements": [
            "error",
            {
                "max": 10
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "new-cap": [
            "error",
            {
                "newIsCap": true
            }
        ],
        "no-lonely-if": 2,
        "no-whitespace-before-property": 2,
        "nonblock-statement-body-position": [
            "error",
            "beside"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "no-confusing-arrow": 2,
        "prefer-const": 2,
        "prefer-arrow-callback": 2,
        "sort-imports": [
            "error",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "no-var": 2,
        "no-useless-computed-key": 2,
        "callback-return": 2,
        "global-require": 2,
        "no-path-concat": 2,
        "sort-keys": [
            "error", 
            "asc", {
                "caseSensitive": true, 
                "natural": false
            }
        ]
    }
};