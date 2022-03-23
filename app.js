const Mock = require("mockjs");
const fs = require("fs");

let fileData;

// ===============================
let random = Mock.Random;
fileData = [];
for (let i = 0; i < 5; i++) {
    fileData.push({
        name: random.cname(),
        age: random.integer(1, 120),
        gender: random.integer(0, 1),
        email: random.email(),
        note: random.character()
    })
}



// ===============================

fs.writeFile("result.json", JSON.stringify(fileData), () => { });