const mongoose = require('mongoose')

export const connectMongoose = async ()=> {

 await mongoose.connect(process.env.DB_CONNECTION, {
   auth: {
     authdb: process.env.DB_NAME,
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
   },
   authSource: "admin",
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
   .then(() => console.log('Connect atlas'))
   .catch((e) => console.log(e))
}
