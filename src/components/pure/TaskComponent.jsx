import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class';

import '../../assets/styles/task.scss';

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Created task...');
    return () => {
      console.log(`Task: ${task.name} is going to unmount...`)
    }
  }, [task]);

  return (
    <div className='task'>
      <p className='task__name'>{task.name}</p>
      <p className='task__description'>{task.description}</p>
      <p className={task.completed ? 'task__completed' : 'task__uncompleted'}>{task.completed ? 'COMPLETADA' : 'NO COMPLETADA'}</p>
      <p>{task.level}</p>
    </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
