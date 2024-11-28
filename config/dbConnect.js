const mongoose = require("mongoose");

const dbConnect =async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGOURL)
        console.log(`DataBase connected:${connect.connection.host},${connect.connection.name}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }    
};

module.exports = dbConnect;