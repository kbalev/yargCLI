const fs = require("fs")
const yargs = require("yargs")
const command = process.argv[2];

exports.add = (movieList) => {
    if (command === "add") {
        const entry = {
            title: yargs.argv.movie,
            status: "unfinished"
        };
        movieList.push(entry);
        console.log(movieList)
        let stringMovieList = JSON.stringify(movieList)
        fs.writeFileSync('./netflix.json', stringMovieList)
        console.log(`You have added ${yargs.argv.movie} to your watchlist. Its default status is set to "Unfinished"`)
    }
}

exports.remove = (movieList) => {
    if (process.argv[2] === "remove") {
        target = yargs.argv.movie
        for (let i = 0; i < movieList.length; i++) {
            if (target === movieList[i].title) {
                movieList.splice([i], 1)
                let stringMovieList = JSON.stringify(movieList)
                fs.writeFileSync('./netflix.json', stringMovieList);
                console.log(`You have removed ${yargs.argv.movie}`)
            }
        }
    }
}

exports.update = (movieList) => {
    if (process.argv[2] === "update") {
        target = yargs.argv.title
        newStatus = yargs.argv.status
        for (let i = 0; i < movieList.length; i++) {
            if (target == movieList[i].title) {
                movieList[i].status = newStatus;
                let stringMovieList = JSON.stringify(movieList);
                fs.writeFileSync('./netflix.json', stringMovieList);
                console.log(`You have set the status of ${yargs.argv.title} to "${yargs.argv.status}".`)
            }
        }
    }
}

exports.read = (movieList) => {
    if (process.argv[2] === "list") {
        console.log(movieList);
    }
}