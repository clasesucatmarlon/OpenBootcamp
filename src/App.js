import './App.css';
import Clock from "./exercises/sesions_456/Clock";
import ClockFuntional from "./exercises/sesions_456/ClockFuntional";

function App() {
     return (
        <div className="App">
            <h1 className="bg-dark">Aprendiendo reactjs.  Manejo de Hooks</h1>

            <h2>Class Component</h2>
            <Clock />
            <h2>Funtional Component</h2>
            <ClockFuntional />
        </div>
    );
};

export default App;
