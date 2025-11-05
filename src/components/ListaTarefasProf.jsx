import { useState } from "react";

const ListaTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");

    const atualizarTextoInput = (argumento) => {
        setTexto(argumento);
    };

    const atualizarLista = () => {
        if (texto == "") return;

        setTarefas([...tarefas, texto]);

        setTexto("");
    };

    return (
        <div>
            <h1>Lista de tarefas</h1>

            <input
                type="text"
                value={texto}
                onChange={(x) => atualizarTextoInput(x.target.value)}
            />

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>

            <button onClick={atualizarLista}>Adicionar</button>
        </div>
    );
};

export default ListaTarefas;
