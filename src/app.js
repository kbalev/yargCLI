const yargs = require("yargs")
const command = process.argv[2];
const fs = require("fs")
const {
    add,
    remove,
    update,
    read
} = require("./utils")
exports.movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    movieList = JSON.parse(tempJson);
} catch (error) {
    movieList = [];
}

if (process.argv[2] == "add") {
    add(movieList)
} else if (process.argv[2] == "add") {
    remove(movieList)
} else if (process.argv[2] == "add") {
    update(movieList)
} else {
    read(movieList)
    console.log("This is your current list. If this is not the command you were looking for, someting went wrong. Please try again.")
}