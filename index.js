const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');

    const newCampsite = new Campsite({
        name: 'React Lake Campground',
        description: 'test'
    });

    newCampsite.save()
    .then(campsite => {
        console.log(campsite);
        return Campsite.find(); //refers to the Model
    })
    .then(campsites => {
        console.log(campsites);
        return Campsite.deleteMany(); //refers to the Model
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});