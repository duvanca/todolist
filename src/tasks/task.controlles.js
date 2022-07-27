const tasks = [
  {
    id: 1,
    title: "exercise",
    description: "go out exercise in the gym",
    done: "false"

  },
  {
    id: 2,
    title: "to study",
    description: "review the topics studied",
    done: "true"

  },
  {
    id: 3,
    title: "to play",
    description: "review the topics studied",
    done: "true"

  },
  {
    id: 4,
    title: "to play video games",
    description: "review the topics studied",
    done: "true"

  },

]


const getAlltask = () => {
  return tasks;
};

const getTaskById = (id) => {


  const filterTask = tasks.filter((task) => task.id === id);
  return filterTask[0];

};

const deletetask = (id)=>{
  const index = tasks.findIndex((task) => task.id === id);

  
  if (index !== -1) {
     tasks.splice(index, 1);
     return true
    }
    
      
       
}



const createNewTask = (taskObj) => {
  if (tasks.length === 0) {
    const newTask = {
      id: 1,
      title: taskObj.title,
      description: taskObj.description,
      done: taskObj.done
    };
    tasks.push(newTask);
    return tasks;
  }
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    title: taskObj.title,
    description: taskObj.description,
    done: taskObj.done

  };
  tasks.push(newTask)
  return tasks

};

const putTask=(id, obj)=>{

  const index = tasks.findIndex((item) => item.id === id);
  console.log(obj)
  console.log(id)
  console.log(index)
  console.log(tasks[index])
  if (index === undefined) {
    return undefined;
   }
   if (obj.title && obj.description) {
     
    } else {
      tasks[index] = {
        id,
        title:tasks[index].title,
        description:tasks[index].description,
        done: obj.done,
        
       };
       return tasks
  }


  

}



module.exports = {
  getAlltask,
  getTaskById,
   deletetask,
  createNewTask,
  putTask
}
