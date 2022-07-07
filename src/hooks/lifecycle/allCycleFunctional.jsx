import React, { useState, useEffect } from "react";

const Clock = () => {
    const dataUser = {
        fecha: new Date(),
        edad: 0,
        nombre: 'marlon',
        apellidos: 'García Morales'
    };
    const [user, setUser] = useState(dataUser);

    useEffect(() => {
        const timerAge = setInterval(() => {
            updateUser();
        }, 1000);
        return () => {
            clearInterval(timerAge);
        };
    });

    const updateUser = () => {
        return setUser({
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos
        });
    };

    return (
        <div>
            <br />
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
};

export default Clock;