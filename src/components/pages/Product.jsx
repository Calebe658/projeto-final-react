
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    return <h1>Produto ID: {id}</h1>;
};

export default Product;
