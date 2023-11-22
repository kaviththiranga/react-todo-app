const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/todosController');

const todosController = new TodosController();

router.get('/', todosController.getAll);
router.get('/:id', todosController.getOne);
router.post('/', todosController.create);
router.put('/:id', todosController.update);
router.delete('/:id', todosController.delete);

module.exports = router;