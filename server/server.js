const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.js');
const { modelDefinition } = require('../models/modelDefinition.js')
const apiRoutes = require('../routes/api.js');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Connect to DB
        this.sequelize = this.connectDB();

        //MiddleWares
        this.middlewares();

        //App routes
        this.routes();


    }

    //Connect DB from database->config.js
    async connectDB(){
        return await dbConnection()
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        // Parse and read from body
        this.app.use(express.json());
        
        //Public Directory
        this.app.use(express.static('public'));
        
    }

    async routes(){
        await modelDefinition(this.sequelize)
        this.app.use('/api', apiRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening in port ${this.port}`)
        })
    }
}

module.exports = Server;