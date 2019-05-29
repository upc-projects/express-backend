const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const taskController = require('../controllers/taskController');

router.post('/', checkAuth, taskController.taskPostOrUpdate);

router.get('/all', checkAuth, taskController.taskGetAll);

router.get('/:id', checkAuth, taskController.taskGetOne);

router.delete('/:id', checkAuth, taskController.taskDeleteOne);

module.exports = router;
