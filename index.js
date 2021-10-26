const stream = require("stream");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { program } = require("commander");
console.log('start');
console.log(process.argv.slice(2));

const actionHandler = async () => {
    let { input, output, action } = program.opts();
}

program
  .requiredOption("-s, --action", "Сhoice of Sort/manhattan")
  .option("-i, --input <filename>", "An input file")
  .option("-o --output <filename>", "An output file")
  .action(actionHandler);

program.parse(process.argv);