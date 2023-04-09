
const mongoose = require('mongoose');

const db = function(uri){
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })

}

module.exports = db

