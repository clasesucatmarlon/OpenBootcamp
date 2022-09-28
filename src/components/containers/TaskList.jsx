import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';

const TaskList = () => {

  const newTask = new Task('Tarea 1', 'Descripción Tarea 1', false, LEVELS.NORMAL);
  const newTask2 = new Task('Tarea 2', 'Descripción Tarea 2', true, LEVELS.NORMAL);

  return (
    <div>
      <h2>Lista de tareas</h2>
      <TaskComponent task={newTask} />
      <TaskComponent task={newTask2} />
    </div>
  )
}

export default TaskList;
