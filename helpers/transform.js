const {Transform} = require('stream');
const manhattanDistance = require('../manhattan_distance/manhattan')
const sortWords = require('../sort/sort')
class MethodsTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }
    _transform(chunk, encoding, callback) {
        let answer = "";
        switch(this.action) {
            case 'manhattan': 
                answer = manhattanDistance(chunk);
                break;
            case 'sort': 
                answer = sortWords(chunk);
                break;
        }
        this.push("Результат: " + answer + "\n");
        callback();
    }
}
module.exports = MethodsTransform;