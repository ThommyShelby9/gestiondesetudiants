const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id:{
        type: Number,
        require:true,
        unique:true
    },
    nameEtab : {
        type: String,
        require: true,
        unique: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    tel : {
        type: Number,
        require: true,
    },
    password : {
        type: String,
        require: true,
    },
    verificationCode: {
        type: String,
        require: true,
        unique: true
    },
    emailVerify:{
        type: Boolean,
        require:true
    },
    emailVerifyAt:{
        type: Date,
        require: true
    }
})

const user = mongoose.model('user', UserSchema)

module.exports = user