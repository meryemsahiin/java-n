const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Eren Ertekin", "salary": 2000},', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("The file has been saved.")
});

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data)
})

fs.appendFile('employees.json', '\n{"name": "Reyhan Seven", "salary": 3100}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("The file has been updated.");
});

// fs.unlink('employees.json', (err) => {
//     if(err) console.log(err);
//     console.log("The file has been removed.");
// });
