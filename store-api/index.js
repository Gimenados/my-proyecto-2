import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productsRoutes from "./src/routes/products.routes.js"; 
import { dbConection } from "./src/database/dbConection.js";

const server = express()

dotenv.config()

const api = async () => {
    await dbConection()

    server.use(express.json())
    server.use(cors())
    
    // server.use('/public', express.static(`./temp/imgs`))
    server.use("/api/products", productsRoutes) //La ruta y despues de la coma a donde va a ir 
    
    server.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT}`))
}

api()