import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Created task...');
    return () => {
      console.log(`Task: ${task.name} is going to unmount...`)
    }
  }, [task]);

  return (
    <div>
      <br />
      <hr></hr>
      <h4>Tareas</h4>
      <h5>Nombre --- {task.name}</h5>
      <h5>Descripción --- {task.description}</h5>
      <h5>Status --- {task.completed ? 'COMPLETADA' : 'NO COMPLETADA'}</h5>
      <h5>Nivel --- {task.level}</h5>
      <hr></hr>
    </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
