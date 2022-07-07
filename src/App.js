import ContactListComponent from "./components/container/ContactListComponent";
import TaskListComponent from "./components/container/TaskListComponent";
import Clock  from "./hooks/lifecycle/allCycleFunctional";

function App() {
    return (
        <div className="App">
            {/* <TaskListComponent /> */}
            <ContactListComponent />
            <Clock />
        </div>
    );
}

export default App;
