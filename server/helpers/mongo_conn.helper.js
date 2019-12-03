/**
 * @module :: Mongo db connection file
 */
const mongoose = require('mongoose');

const mongodbConnection = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/stocksdatabase', { useNewUrlParser: true }, (err, any) => {
        if (err) {
            console.log("mongodb connection error", err);
            setTimeout(mongodbConnection, 5000);
        }
        console.log('mongodb connection started...........!');
    });
};

mongoose.connection.once('open', function() {
    mongoose.connection.on('connected', function() {
    });
    mongoose.connection.on('disconnected', function() {
    });
    mongoose.connection.on('reconnected', function() {
    });
});

mongoose.connection.on('error', function(err) {

});

module.exports.mongodbConnection = mongodbConnection;