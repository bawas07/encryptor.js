const readline = require('readline');

// const io = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const ioProcess = (question) => {
    return new Promise((resolve) => {
        const io = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        io.question(question+'\n', (answer) => {
            // TODO: Log the answer in a database
            // console.log(`Thank you for your valuable feedback: ${answer}`);
            io.close();
            return resolve(answer)
          });
    })
}

module.exports = ioProcess