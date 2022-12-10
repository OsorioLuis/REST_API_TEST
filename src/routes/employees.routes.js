import { Router } from "express";
import { 
    deleteEmployees, 
    getEmployeeByid, 
    getEmployees, 
    postEmployees, 
    putEmployees
} from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployeeByid);

router.post('/employees', postEmployees);

router.patch('/employees/:id', putEmployees); 
// es similar a la peticion put
//solo que se puede actualizar parcialmente

router.delete('/employees/:id', deleteEmployees);


//exportacion de las rutas
export default router;