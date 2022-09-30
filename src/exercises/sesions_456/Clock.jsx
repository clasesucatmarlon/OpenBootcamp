import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        // Estado privado del component
        this.state = {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div>
                <h3>
                    Hora Actual:
                    {this.state.fecha.toLocaleTimeString()}
                </h3>
                <h5>{this.state.nombre} {this.state.apellidos}</h5>
                <h1>Edad: {this.state.edad}</h1>
            </div>
        )
    }
    tick() {
        this.setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
}
export default Clock;
