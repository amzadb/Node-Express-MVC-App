let users = [];
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsersFromFile = (cb) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }        
    });
}

module.exports = class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    save() {
        // users.push(this);

        // fs.readFile(filePath, (err, fileContent) => {
        //     console.log("File Content: " + fileContent);
        //     if (!err) {
        //         users = JSON.parse(fileContent);
        //     }
        //     users.push(this);
        //     fs.writeFile(filePath, JSON.stringify(users), (err) => {
        //         console.log("Updated Content:" + JSON.stringify(users));
        //     });
        // });
        
        getUsersFromFile(users => {
            users.push(this);
            fs.writeFile(filePath, JSON.stringify(users), (err) => {
                console.log("Updated Content:" + JSON.stringify(users));
            });
        });
    }

    static fetchAll(cb) {
        // return users;
        
        // fs.readFile(filePath, (err, fileContent) => {
        //     if (err) {
        //         cb([]);
        //     } 
        //     cb(JSON.parse(fileContent));
        // });

        getUsersFromFile(cb);
    }
}