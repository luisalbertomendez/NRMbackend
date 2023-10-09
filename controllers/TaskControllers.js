const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req,res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)

    //res.send("Hola");
};


module.exports.saveTask = async (req,res) => {
    const {task} = req.body;
    TaskModel.create({task})
    .then((data) => {
        console.log("Se grabó exitosamente...");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err)
        res.send({error: err,msg:"Algo salió mal..."});
    });
};

module.exports.updateTask = async (req,res) => {
    const {id} = req.params;
    const {task} = req.body;
   TaskModel.findByIdAndUpdate(id,{task})
   .then(() => res.send("Se actualizó todo bien!"))
    .catch((err) => {
        console.log(err)
        res.send({error: err,msg:"Algo salió mal..."});
    });
};


module.exports.deleteTask = async (req,res) => {
    const {id} = req.params;
    
   TaskModel.findByIdAndRemove(id)
   .then(() => res.send("Se eliminó correctamente!"))
    .catch((err) => {
        console.log(err)
        res.send({error: err,msg:"Algo salió mal..."});
    });
};