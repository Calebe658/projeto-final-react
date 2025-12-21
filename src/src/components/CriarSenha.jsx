import { useState } from "react";

const CriarSenha = () => {
    const [senha, setSenha] = useState("");
    const [texto, setTexto] = useState("");

    const textoInput = (valor) => {
        setSenha(valor);

        if (valor == "") {
            setTexto("");

        } else if (valor.length < 10) {
            setTexto("A senha não atende aos critérios");
            
        } else {
            setTexto("");
        }
    };

    return (
        <div>
            <label htmlFor="senha">
                Crie sua senha:
            </label>

            <input
                type="password"
                id="senha"
                value={senha}
                onChange={(x) => textoInput(x.target.value)}
                placeholder="Digite a senha"
            />

            <p>
                {texto}
            </p>
        </div>
    );
};

export default CriarSenha;