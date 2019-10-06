const Crypt = require('./encrypt')
const ioProcess = require('./io-console')

const main = async () => {
    console.log('hello there, this is a program to excrypt stuff')
    // console.log('do you want to give me the passcode or do you want me to create one based on some questions?')
    // let question = '(1) give the passcode  (2) ask me some questions'
    // const answer = await ioProcess(question)
    let question = 'please give me the passcode'
    const passcode = await ioProcess(question)
    console.log('your passcode is: ', passcode)
    // const passcode = 'some secret stuff'
    const encryption = new Crypt(passcode)
    question = 'do you want to (e)encrypt or (d)decrypt?'
    const modul = await ioProcess(question)
    const result = []
    switch (modul) {
        case 'e':
            question = 'give me the secret string'
            const secret = await ioProcess(question)
            result.push(encryption.encrypt(secret))
            console.log('your encrypted string is: '+result)
            break;

        case 'd':
            question = 'give me the encrepted string'
            const encryptedStr = await ioProcess(question)
            result.push(encryption.decrypt(encryptedStr))
            console.log('your secret string is: '+result)
            break;
        default:
            console.log('invalid input, please try again from beginning')
            break;
    }
}

main()