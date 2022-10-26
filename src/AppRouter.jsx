import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './assets/styles/header.scss';
// import Header from './components/containers/Header';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import Logo from './assets/images/Logo1.png';
import TaskPage from './pages/tasks/TaskPage';
import Profile from './pages/profile/Profile';
import TaskDetails from './pages/tasks/TaskDetails';

function AppRouter() {
	return (
		<div className=''>
			{/* <Header /> */}
			<Router>
				<div>
					<aside className='d-flex justify-content-between align-items-center px-5 shadow menu mt-2'>
						<div className='menu__logo'>
							<img src={Logo} alt='Logo' />
							<h6>
								TASK <span>Aplication</span>
							</h6>
						</div>
						<div className='menu__links d-flex justify-content-between px-5'>
							<Link to='/' className='menu__link'>
								HOME
							</Link>
							<Link to='/tasks' className='menu__link'>
								TASKS
							</Link>
							<Link to='/about' className='menu__link'>
								ABOUT
							</Link>
							<Link to='/faqs' className='menu__link'>
								FAQs
							</Link>
						</div>
					</aside>

					<main className='container pb-5'>
						<Routes>
							<Route exact path='/' element={<HomePage />} />
							<Route exact path='/tasks' element={<TaskPage />} />
							<Route exact path='/task/:id' element={<TaskDetails />} />
							<Route exact path='/about' element={<AboutPage />} />
							<Route exact path='/faqs' element={<AboutPage />} />
							<Route exact path='/profile' element={<Profile />} />
							<Route path='*' element={<NotFoundPage />} />
						</Routes>
					</main>
				</div>
			</Router>
		</div>
	);
}

export default AppRouter;
