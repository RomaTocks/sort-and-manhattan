class Validator {
    static isEmpty(chunk) {
        if(chunk.toString() === '\r\n') {
            process.stdout.write("Введена пустая строка, попробуйте ещё раз!");
            process.exit(-1);
        }
    }
    static manhattanValidation(chunk) {
        const [firstArg, secondArg] = chunk.toString().split(':');
        let firstVector = null;
        let secondVector = null;
        try {
            firstVector = JSON.parse(firstArg);
            secondVector = JSON.parse(secondArg);
        } 
        catch (error) {
            process.stdout.write("Невалидные аргументы, попробуйте ещё раз!");
            process.exit(-1);
        }
        this.arraysCheck(firstVector, secondVector);
        
    }
    static arraysCheck(firstVector, secondVector) {
        const arrays = [firstVector, secondVector];
        if(!Array.isArray(firstVector) || !Array.isArray(secondVector)) {
            process.stdout.write("Необходимо передать два числовых массива через ':'");
            process.exit(-1);
        }
        else {
            arrays.forEach(array => this.arrayValidation(array))
        }
    }
    static arrayValidation(array) {
        if(array.length > 2) {
            process.stdout.write("Длинна массива не более 2!");
            process.exit(-1);
        }
        array.forEach(element => {
            if(!Number.isInteger(element)) {
                process.stdout.write("Значения массива должны быть числами!")
                process.exit(-1);
            }
        })
    }
    static isStringArray(chunk) {
        let stringsArray = null;
        try {
            stringsArray = JSON.parse(chunk.toString());
            if(Array.isArray(stringsArray)) {
                stringsArray.forEach(element =>{
                    if(typeof element !== 'string') {
                        throw new Error();
                    }
                })
            }
        } catch (error) {
            console.log(error.message);
            process.stdout.write("Невалидный аргумент! Попробуйте ещё раз!");
            process.exit(-1);
        }
    }
}
module.exports = Validator