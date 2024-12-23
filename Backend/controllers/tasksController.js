const tasks = require('../data/tasks');

const getTasks = (req, res) => {
    res.status(200).json(tasks.getAllTasks());
};

const getTaskById = (req, res) => {
    const task = tasks.getTaskById(req.params.id);
    if (!task) return res.status(404).send({ error: 'Task not found' });
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send({ error: 'Title and description are required' });
    }
    const newTask = tasks.createTask(title, description);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send({ error: 'Title and description are required' });
    }
    const updatedTask = tasks.updateTask(req.params.id, title, description);
    if (!updatedTask) return res.status(404).send({ error: 'Task not found' });
    res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
    const isDeleted = tasks.deleteTask(req.params.id);
    if (!isDeleted) return res.status(404).send({ error: 'Task not found' });
    res.status(200).send({ message: 'Task deleted successfully' });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
