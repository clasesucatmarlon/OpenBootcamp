import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';

const TaskList = () => {

  const newTask = new Task('Tarea 1', 'Descripción Tarea 1', false, LEVELS.NORMAL);
  const [listTasks, setListTasks] = useState([newTask]);
  const [loading, setLoading] = useState(true);

  // const newTask2 = new Task('Tarea 2', 'Descripción Tarea 2', true, LEVELS.NORMAL);

  const changeTaskCompleted = () => {
    console.log('TODO: Cambiar estado de la tarea');
  };

  useEffect(() => {
    console.log('Task State has been modified...');
    setLoading(false);
    return () => {
      console.log('TaskList component is going unmount...');
    }
  }, [listTasks]);

  return (
    <div>
      <h2>Lista de tareas</h2>
      <TaskComponent task={newTask} />
    </div>
  )
}

export default TaskList;
