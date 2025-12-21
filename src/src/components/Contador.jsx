
import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0); // Estado inicial é 0

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(0)}>Resetar</button>
        </div>
    );
}

export default Contador;
