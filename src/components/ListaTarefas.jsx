import React, { useState } from "react";

function ListaDeTarefas() {
    const [tarefa, setTarefa] = useState("");

    const addTarefa = () => {
        if (tarefa.trim() === "") return; // Para não vir vazia

        let divTexto = document.createElement("div");
        divTexto.textContent += tarefa;

        let lista = document.getElementById("lista");
        lista.appendChild(divTexto);

        setTarefa(""); // limpar o input
    };

    return (
        <div>
            <h1>Lista de tarefas</h1>

            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={tarefa}
                onChange={(textoDigitado) => setTarefa(textoDigitado.target.value)}
                style={{ height: 30 }}
            />

            <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
                <button onClick={addTarefa}>
                    Adicionar
                </button>
            </div>

            <div id="lista" style={{ marginTop: 20 }}>
                Tarefas:
            </div>
        </div>
    );
}

export default ListaDeTarefas;
