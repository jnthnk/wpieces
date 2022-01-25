const path = require('path')

// uuid lib to ensure we always have unique ids
const { v4: uuidv4 } = require('uuid');

// lib to parse metadata
const metadataParser = require('markdown-yaml-metadata-parser');

// file system api
const fs = require('fs').promises;

// will contain data to be JSON stringified later on
const jsonData = []

// relative snippets dir
const snippetsDir = path.resolve(`./../snippets`)

// reads the dir and gets all of the files found in this dir
const readDir = snippetsDir => {
    return fs.readdir(snippetsDir)
}

// reads individual file and returns a promise
const readFile = file => { 
    return fs.readFile(path.resolve(`./../snippets/${file}`), 'utf8');
}

// writes to file and returns a promise
const writeToFile = jsonData => {

    return fs.writeFile("./../contents/snippets.json", JSON.stringify(jsonData), function(err) {
        if(err) {
            return console.log(err);
        }
        return console.log("The file was saved!");
    });

}

// not really using this now but keeping it if we need it later on to move files.
const moveFile = (fileName, oldPath, newPath) => {

    var oldPath = path.resolve(`./../snippets/${fileName}`)
    var newPath = path.resolve(`./../snippets/${fileName}`)
    
    return fs.rename(oldPath, newPath)

}

// once readDir resolves the promise then we'll interact with individual files.
readDir(snippetsDir).then(files => {

    // we'll store all individual promises here
    const promises = []

    files.forEach(file => { 
        promises.push(readFile(file))
    });

    // once all individual promises are fulfilled we'll foreach thru results and ultimately build our JSON file.
    Promise.all(promises).then(results => {
        
        results.forEach(result => {

            let metadataParserRes = metadataParser(result);

            jsonData.push({
                'id' : Date.now(), // leaving just Date.now for now.
                'title' : metadataParserRes.metadata.title,
                'published' : metadataParserRes.metadata.date,
                'tags' : metadataParserRes.metadata.tags,
                // we might not really need this but can be useful if we wanted to use this for search as well.
                'content' : metadataParserRes.content,
                'views' : 0
            })

        })

        writeToFile(jsonData).then(response => {
            console.log('Successfully written to file!')
        }).catch(err => {
            console.log(err, 'Something wen\'t wrong with creating the JSON file')
        })


    })

}).catch(err => {
    console.log('There was an error while trying to read the directory specified.', err)
})