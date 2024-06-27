import { RequestHandler } from 'express';
import { Todo } from '../models/todo.model'
import { todoIndexFinder } from '../utils/todo-index-finder'

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    return res.status(200).json({ message: 'Created the todo.', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
    return res.status(200).json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText = (req.body as { text: string }).text;

    const foundIndex = todoIndexFinder(TODOS, todoId)

    TODOS[foundIndex] = new Todo(TODOS[foundIndex].id, updatedText);

    return res.status(200).json({ message: 'Updated!', updatedText })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const foundIndex = todoIndexFinder(TODOS, todoId)

    TODOS.splice(foundIndex, 1);

    return res.status(200).json({ message: 'Todo deleted' })
}
