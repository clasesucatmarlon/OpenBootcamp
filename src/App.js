import Greeting from "./components/pure/Greeting";

function App() {
    let age = 49;
    let name = 'Marlon'
    return (
        <div className="App">
            <h1>Aprendiendo reactjs.  Configuración inicial</h1>
            <Greeting
                name={name}
                age={age}
            />
        </div>
    );
}

export default App;
