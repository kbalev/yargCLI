const fs = require("fs")
const yargs = require("yargs")
const command = process.argv[2];

exports.add = () =>{
    if (command ==="add") {
        const entry = { title: yargs.argv.movie, actor: yargs.argv.actor}
        console.log(entry);
    }
}
