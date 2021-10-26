const stream = require("stream");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { program } = require("commander");
const  MethodsTransform  = require("./helpers/transform");
const pipeline = util.promisify(stream.pipeline);

const actionHandler = async () => {
    let { input, output, action, endless } = program.opts();
    const ReadableStream = input ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = output ? fs.createWriteStream(output) : process.stdout;
    try {
        await pipeline(
            ReadableStream,
            new MethodsTransform(action, endless),
            WriteableStream
        )
    } 
    catch (error) {
        process.stderr.write(`${error.message}`)
    }
}

process.stdin.setEncoding('utf8');
process.on('SIGINT', () => process.exit(0));

program
  .requiredOption("-a, --action <action>", "Сhoice of sort/manhattan")
  .option("-i, --input <filename>", "An input file")
  .option("-o, --output <filename>", "An output file")
  .option("-e, --endless", "Not endless execution")
  .action(actionHandler);

program.parse(process.argv);