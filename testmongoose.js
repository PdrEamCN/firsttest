const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name : String,
    age : Number,
    health : String
}

const mydata = mongoose.model('Cats', schema);
//mydate name of model
//cate name of sjj

const kitty = new mydata({ name: 'testZildjian2' })
kitty.save().then(() => console.log('meow'))
const kitty1 = new mydata({ name: 'zhang3' ,age : 1,health : "good"})
kitty1.save().then(() => console.log('new schema writed'))

mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})
