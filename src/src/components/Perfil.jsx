
import React, { useState } from "react";

function PerfilUsuario() {
    const [perfil, setPerfil] = useState({
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
    });

    const atualizarCidade = () => {
        setPerfil({ ...perfil, cidade: "Rio de Janeiro" });
    };

    return (
        <div>
            <h1>Perfil do Usuário</h1>
            <p>Nome: {perfil.nome}</p>
            <p>Idade: {perfil.idade}</p>
            <p>Cidade: {perfil.cidade}</p>
            <button onClick={atualizarCidade}>Mudar Cidade</button>
        </div>
    );
}

export default PerfilUsuario;
