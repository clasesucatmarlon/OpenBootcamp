import TaskList from "./components/containers/TaskList";
import './App.css';
import GreetingStyles from "./components/pure/GreetingStyles";

function App() {
     return (
        <div className="App">
            <h1 className="bg-dark">Aprendiendo reactjs.  Manejo de Hooks</h1>
            <TaskList />
            <GreetingStyles />
        </div>
    );
};

export default App;
