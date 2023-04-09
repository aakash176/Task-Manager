const express = require('express')
const {getAllItems, deleteItem, getTask, updateTask, createTask} = require('../controllers/tasks')
const router =  express.Router()

router.route('/').get(getAllItems).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteItem).get(getTask)

module.exports = router