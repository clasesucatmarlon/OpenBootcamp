import React, { useState } from 'react';

// Estilos en constantes
const loggedStyle = {
    color: 'green'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};


const GreetingStyles = () => {
    const [logged, setLogged] = useState(false);

    const changeLogged = () => {
        setLogged(!logged);
    };

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            <h4>Hola</h4>
            <button onClick={changeLogged}>
                {logged ? 'Logout' : 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingStyles;
