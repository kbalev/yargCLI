const yargs = require("yargs")
const command = process.argv[2];
const fs = require("fs")
const { add } = require("./utils")
let movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    movieList = JSON.parse(tempJson);
} catch (error) {
    movieList = [];
}


add()