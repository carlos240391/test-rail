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
        const port = process.env.PORT || 3000;
        this.app.listen(port,"0.0.0.0", ()=>{
            console.log('servidor corriendo en el puerto 8086');
        })
    }
}

module.exports = Server;