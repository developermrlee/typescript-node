import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/create', createTodo);

router.get('/get', getTodos);

router.patch('/update/:id', updateTodo);

router.delete('/delete/:id', deleteTodo);

export default router