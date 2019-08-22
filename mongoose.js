var mongoose = require('mongoose');
mongoose.connect('mongodb://<ncds42>:<totosai12>@ds231207.mlab.com:31207/heroku_zw77w1pc',{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('We are connected');
})

var schema = new mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', schema);

var kitty = new Kitten({ name: 'Silence'});

kitty.save(function(err, kitty){
    if(err) return console.error(err);
    else console.log('kitty saved!');

})

Kitten.find(function(err,kittens){
    if(err) return console.error(err);
    console.log('Here kittens:\n' + kittens)
})