const {createNewTask,getTaskById,getAlltask,deletetask,putTask} = require("./task.controlles")

const getAll =(req, res)=>{
    const data = getAlltask()
    res.status(200).json(data)
}

const getdeletetask =(req, res)=>{
    const id = Number(req.params.id)
     if(id){

         deletetask(id);
         
             res.status(204).json();

     }else{
        res.status(400).json({ message: "Invalid ID" });
     }
    
       

}


const getByd =(req, res)=>{
    const id = Number(req.params.id)

    if (id){
       const data = getTaskById(id)
       if(data.id){
           res.status(200).json(data)
       }else{
        res.status(400).json({mesage: 'invalid id'})
    }
    }else{
        res.status(400).json({mesage: 'ID is not a Number'})
    }
}

const getCreateTask = (req, res)=>{
    const data =createNewTask(req.body)
    res.status(200).json(data)
}


const getPutTask =(req, res)=>{
    
    const obj = req.body
    const id = Number(req.params.id)
    const change =putTask(id, obj)

    console.log(change)

   
    if(change){
        res.status(200).json(change)
        
    }else{
        res.status(400).json({ message: "Missing data" });
    }
   
    
}
  





module.exports = {
    getAll,
    getByd,
    getCreateTask,
    getdeletetask,
    getPutTask
}
