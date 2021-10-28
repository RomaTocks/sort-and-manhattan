const {Transform} = require('stream');
const manhattanDistance = require('../manhattan_distance/manhattan')
const sortWords = require('../sort/sort')
const Validator = require("../validator/validator")

class MethodsTransform extends Transform {
    constructor(action, endless) {
        super();
        this.action = action;
        this.endless = endless;
    }
    _transform(chunk, encoding, callback) {
        let answer = "";
        Validator.isEmpty(chunk);
        switch(this.action) {
            case 'manhattan': 
                Validator.manhattanValidation(chunk);
                answer = manhattanDistance(chunk);
                break;
            case 'sort': 
                Validator.isStringArray(chunk);
                answer = sortWords(chunk);
                break;
        }
        this.push("Результат: " + answer + "\n");
        this.endless ? process.exit(1) : 
        callback();
    }
}
module.exports = MethodsTransform;