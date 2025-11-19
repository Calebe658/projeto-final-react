
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Informações do Produto:</h2>
            <p>Id: {id}</p>
            <p>Nome: {data?.nome}</p>
            <p>Foto: {data?.foto}</p>
            <p>Cargo: {data?.cargo}</p>
        </div>
    );
}

export default Product;