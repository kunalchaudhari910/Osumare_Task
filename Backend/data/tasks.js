let tasks = [];
let currentId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === parseInt(id));


const createTask = (title, description) => {
    const newTask = { id: currentId++, title, description };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, title, description) => {
    const task = tasks.find(task => task.id === parseInt(id));
    if (!task) return null;
    task.title = title;
    task.description = description;
    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
