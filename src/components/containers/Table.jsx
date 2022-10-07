import React from 'react';
import PropTypes from 'prop-types';
import TaskComponent from '../pure/TaskComponent';
import PuffLoader from 'react-spinners/PuffLoader';

const Table = ({ listTasks, taskCompleted, taskDelete, loading }) => {
	return (
		<>
			{loading ? (
				<div className='d-flex flex-column align-items-center px-4'>
					<PuffLoader
						color={'#0b3c5d'}
						size={30}
						aria-label='Loading Spinner'
					/>
					<p>Cargando</p>
				</div>
			) : (
				<table className='table table-primary table-striped'>
					<thead>
						<tr>
							<th scope='col'>Título</th>
							<th scope='col'>Descripción</th>
							<th scope='col' className='text-center'>
								Prioridad
							</th>
							<th scope='col' className='text-center'>
								Status
							</th>
							<th scope='col' className='text-center'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody className='table-group-divider'>
						{listTasks.map((task, index) => {
							return (
								<TaskComponent
									key={index}
									task={task}
									taskCompleted={taskCompleted}
									taskDelete={taskDelete}
								/>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};

Table.propTypes = {
	listTasks: PropTypes.array.isRequired,
	taskCompleted: PropTypes.func.isRequired,
	taskDelete: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Table;
