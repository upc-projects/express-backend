const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const taskController = require('../controllers/taskController');

router.post('/', taskController.taskPostOrUpdate);

router.get('/all', taskController.taskGetAll);

router.get('/:id', taskController.taskGetOne);

router.delete('/:id', taskController.taskDeleteOne);

module.exports = router;
