import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';

const task1 = new Task(
	'Tarea No. 1',
	'Descripción Tarea 1',
	false,
	LEVELS.NORMAL
);
const task2 = new Task(
	'Tarea No. 2',
	'Descripción Tarea 2',
	true,
	LEVELS.URGENT
);
const task3 = new Task(
	'Tarea No. 3',
	'Descripción Tarea 3',
	false,
	LEVELS.BLOCKING
);
const task4 = new Task(
	'Tarea No.  4',
	'Descripción Tarea 4',
	true,
	LEVELS.NORMAL
);

/* Exporting the array of tasks. */
export const AllTasks = [task1, task2, task3, task4];
