var mailer = require('../config/mailer')
const crypto = require('crypto');

const Mail = {
    to: function(email){
        this.email = email
        return this 
    },

    generateRandomCode: function() {
        return crypto.randomBytes(6).toString('hex').toUpperCase(); 
    },

    send: async function (body,subject){
        const randomCode = this.generateRandomCode();
        await mailer.sendMail({
            from: "rmissimawu@gmail.com",
            to: this.email,
            text: body,
            subject: subject
        })
        console.log(randomCode)
    }
}

module.exports = Mail