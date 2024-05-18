const express = require('express');

class Server {
    constructor(){
        this.app = express();

        this.middleware();
    }

    middleware(){
        this.app.use(express.static("./public"));
    }

    listen(){
        this.app.listen(8086, ()=>{
            console.log('servidor corriendo en el puerto 8086');
        })
    }
}

module.exports = Server;