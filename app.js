const math = require('mathjs')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://username:password1@ds018839.mlab.com:18839/azure_project', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    vkontakteId: String,
    n : Number,
    k : Number,
    result: Number
})

const User = mongoose.model('User', userSchema)


let result = math.factorial(process.env.N)/(math.factorial(process.env.K)*math.factorial(process.env.N-process.env.K)) 

User.findOneAndUpdate({vkontakteId: process.env.ID}, { result :  result} , function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);
})