import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/TaskComponent';

const TaskListComponent = props => {
  const defaulTask = new Task ('Task of Example', 'Description for task of example', false, LEVELS.NORMAL);

  const changeStateTask = (id) => {
    console.log('Cambair estado de tarea');
  }

  return (
    <div>
      <h1>TASK LIST</h1>
      {/* TODO: aplicar un mapeo para todas las atreas */}
      <TaskComponent task={defaulTask}/>
    </div>
  )
}

TaskListComponent.propTypes = {}

export default TaskListComponent