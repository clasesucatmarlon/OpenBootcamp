import './App.css';
import Header from './components/containers/Header';
// import TaskList from './components/containers/TaskList';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <TaskList /> */}
			<RegisterFormik />
		</div>
	);
}

export default App;
