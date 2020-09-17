import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/apiProducts", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex: true

})
.then(db => console.log('data base is conect'))
.catch(error => console.log(error))