import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from "./routes/index.routes.js";

const app = express();

//config
app.use(express.json()); 
//para que entienda los datos que se envian en el post

//uso de rutas
app.use(employeesRoutes);
app.use(indexRoutes);

//middleware
//rutas que no existen
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Pages not found'
    })
});

export default app;