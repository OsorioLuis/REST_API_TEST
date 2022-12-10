import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee');
        res.send({rows});
        //nos trae la fila de toodos los employees insertados
    }catch{
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getEmployeeByid = async (req, res) => {
    try {
        const [ rows ] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        //en caso de que el id no esté
        if(rows.length <= 0){
            return res.status(404).json({message: "employee not found"});
        };
        //en este if estamos forzando un error para que se muestre que no existe
        res.send(rows[0]);
    } catch{
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const postEmployees = async (req, res) => {
    const {name, salary} = req.body;
    try {
        //en caso de que no se manden datos
        if(name == null && salary == null){
            return res.status(404).json({message: 'User not specified'})
        }
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',
        [name, salary]);
        res.send({
            id: rows.insertId,
            name, 
            salary,
        }); 
    } catch {
        return res.status(500).json({ message: "Something goes wrong" });
    }
    
};

export const putEmployees = async (req, res) => {
    const { id } = req.params;
    const {name, salary} = req.body;
    try {
        
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        //en caso de que el usuario pasado no exista no afectará ninguna columna por lo que
        //hacemos un condicional con eso
        if(result.affectedRows === 0){
            return res.status(404).json({message: 'Employee not found'})
        }
        //mostramos lo mismo que el get pero en este caso el usuario actualizado
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0]);
    } catch{
        return res.status(500).json({ message: "Something goes wrong" });
    }
};  

export const deleteEmployees = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        if(result.affectedRows <= 0){
            return res.status(404).json({message: 'Employee not found to delete'});
        }
        res.send(result)
    }catch{
        return res.status(500).json({ message: "Something goes wrong" });
    }
    
    
};

//IFNULL dice que actualiza solo su valor y en caso de que no se especifique deja el anterior