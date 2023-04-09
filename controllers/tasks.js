const Task = require('../model/Tasks')

const getAllItems = async (req,res) => {
    try{

        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch(err){
        res.status(500).send(err);
    }
}


const getTask = async (req,res) => {
    try{

        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            res.send(`No any task with id ${id}`)
        }
    
        res.status(200).json({task})
    } catch(err){
        res.status(500).send(err)
    }
}


const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        })
        if (!task){
            res.staus(404).send(`No Task with id ${taskId}`)
        }
        res.status(200).json({task})

    } catch(err){
        res.status(500).send(err)
    }
}

const createTask = async (req,res) => {
    try{

        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(err){
        res.status(500).send(err)
    }
}

const deleteItem = async (req,res) => {
    try{

        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            res.status(404).send(`There is no task with id ${taskID}`)
        }
        res.status(200).send("Task deleted")
    } catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    getAllItems,
    deleteItem,
    updateTask,
    createTask,
    getTask
}