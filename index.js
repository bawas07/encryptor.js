const Crypt = require('./encrypt')

const passcode = 'some secret stuff'
const encryption = new Crypt(passcode)

const ec = encryption.encrypt('this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret but this is secret')
console.log (ec)
console.log('--------------------------')
console.log(encryption.decrypt(ec))