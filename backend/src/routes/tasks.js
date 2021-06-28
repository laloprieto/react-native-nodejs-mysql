import { Router } from 'express';
import {getTask, getTasks, getTasksCount, saveTask, deleteTask,updateTask} from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Obtiene todas las tareas
 *      tags: [Tasks]
 *      
 */
router.get('/tasks',getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Obtiene la cantidad de las tareas
 *      tags: [Tasks]
 *      
 */
router.get('/tasks/count', getTasksCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Obtiene una tarea
 *      tags: [Tasks]
 *      
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Sirve para guardar una nueva tarea
 *      tags: [Tasks]
 *      
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Sirve para eliminar una nueva tarea
 *      tags: [Tasks]
 *      
 */
router.delete('/tasks/:id',deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Sirve para actualizar una nueva tarea
 *      tags: [Tasks]
 *      
 */
router.put('/tasks/:id',updateTask);

export default router
