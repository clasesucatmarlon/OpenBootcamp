/**
 * Ejemplo de uso de:
 * 
 * useState(): Manejar estados de variables
 * useRef(): Referenciar elementos dentro de la vista
 * useEffect(): Controlar cambios en la vista
 */

import { useState, useRef, useEffect } from "react";


const Example2 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /**
     * Referencia para asociar una variable con
     * elemento del DOM del componente (vista)
     */
    const myRef = useRef();

    /**
     * When the button is clicked, the count1 variable is set to the current value of count1 plus 1.
     */
    const count1Up = () => {
        setCount1(count1 + 1)
    };

    /**
     * When the button is clicked, the count2 variable is set to the current value of count1 plus 1.
     */
    const count2Up = () => {
        setCount2(count2 + 1)
    };

    /**
     * useEffect
     * 
     * CASO 1: Ejecutar siempre un snipped de código
     * FUNCION:  Cada vez que haya un cambio en el estado de una variable, 
     * se ejecuta todo lo que esté dentro del useEffect.  Es decir, si se
     * cambia el contador 1 se ejectuta.  Lo mismo si se cambia el contador 2
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando la referencia a elemento del DOM')
    //     console.log('myRef...', myRef.current.innerHTML);
    // });

    /**
     * useEffect
     * 
     * CASO 2: Ejecutar solo al cambiar contador 1
     * FUNCION:  Cada vez que haya un cambio en el estado del contador 1, 
     * se ejecuta todo lo que esté dentro del useEffect
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando la referencia a elemento del DOM')
    //     console.log('myRef...', myRef.current.innerHTML);
    // }, [count1]);

    /**
     * useEffect
     * 
     * CASO 3: Ejecutar solo al cambiar contador 1 o contador 2
     * FUNCION:  Cada vez que haya un cambio en el estado del contador 1 o 
     * del contador 2, se ejecuta todo lo que esté dentro del useEffect
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando la referencia a elemento del DOM')
        console.log('myRef...', myRef.current.innerHTML);
    }, [count1, count2]);

    return (
        <div>
            <h2>Uso de useState() - useRef() - useEffect()</h2>
            <h3>Contador 1: {count1}</h3>
            <button onClick={count1Up}>Incrementar contador 1</button>
            <h3>Contador 2: {count2}</h3>
            <button onClick={count2Up}>Incrementar contador 2</button>
            {/* Elemento referenciado */}
            <h4 ref={myRef}>Ejemplo de elemento referenciado</h4>
        </div>
    )
}

export default Example2;