const crypto = require('crypto')

class crypt {
    constructor(password) {
        this.algorithm = 'aes-256-cbc';
        this.password = password
    }

    encrypt(text){
        var cipher = crypto.createCipher(this.algorithm,this.password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }

    decrypt(text){
        var decipher = crypto.createDecipher(this.algorithm,this.password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }
}

module.exports = crypt