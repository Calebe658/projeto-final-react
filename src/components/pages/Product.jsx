
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import frasco from '../../assets/frasco.png'
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import BasicCard from '../molecules/BasicCard';
import '../css/Product.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Product = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const preco = data?.preco.valor;
    const desconto = data?.preco.desconto;
    const precoComDesconto = preco - desconto;

    const dataCriacao = data?.data_criacao;
    const dataFormatada = new Date(dataCriacao).toLocaleDateString('pt-br');

    useEffect(() => {
        axios.get(`https://node-vercel-app-rho.vercel.app/api/produtos/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        if (data) {
            setProduto({
                nome: data?.nome,
                preco: preco,
                fornecedor: data?.fornecedor.nome
            });
        }
    }, [data]);

    const comprar = () => {
        navigate("/carrinho", { state: { produto } });
    };

    return (
        <Box sx={{ marginLeft: "18%", minWidth: "1400px" }}>

            <Typography variant="h4" fontWeight="bold">
                {data?.nome}

                <p style={{ fontSize: '15px' }}>
                    (Cód. Item: {id})
                </p>
            </Typography>

            <Grid container spacing={4} style={{ borderTop: "1px solid #E5E5E5" }}>
                {/* PARTE ESQUERDA */}

                <Grid size={5.5} style={{ borderRight: "2px solid #E5E5E5" }}>
                    <img src={frasco} alt="" style={{ width: "200px", marginLeft: '35%' }} />

                    <div style={{ display: "flex" }}>
                        <IconButton sx={{
                            "&:focus": {
                                outline: "none"
                            }
                        }}>

                            <div className='divFotos'>
                                <img src={frasco} alt="" className='imgProduto' />
                            </div>
                        </IconButton>

                        <IconButton sx={{
                            "&:focus": {
                                outline: "none"
                            }
                        }}>

                            <div className='divFotos'>
                                <img src={frasco} alt="" className='imgProduto' />
                            </div>
                        </IconButton>

                        <IconButton
                            sx={{
                                "&:focus": {
                                    outline: "none"
                                }
                            }}>

                            <div className='divFotos'>
                                <img src={frasco} alt="" className='imgProduto' />
                            </div>
                        </IconButton>

                        <IconButton
                            sx={{
                                "&:focus": {
                                    outline: "none"
                                }
                            }}>

                            <div className='divFotos'>
                                <img src={frasco} alt="" className='imgProduto' />
                            </div>
                        </IconButton>

                        <IconButton
                            sx={{
                                "&:focus": {
                                    outline: "none"
                                }
                            }}>

                            <div className='divFotos'>
                                <img src={frasco} alt="" className='imgProduto' />
                            </div>
                        </IconButton>
                    </div>
                </Grid>

                {/* PARTE DIREITA */}

                <Grid size={6.5}>
                    <Typography variant="subtitle1" className='texto-direita'>
                        Vendido e entregue por <a href="">Natural Supplements</a>
                    </Typography>

                    <Typography variant="subtitle1" className='texto-direita'>
                        R$ {preco} em até 10x sem juros no cartão de crédito.
                    </Typography>

                    <hr id='linhaPontilhada' />

                    <div id='div-btn-comprar'>
                        <div>
                            <Typography variant='h4' style={{ color: 'blue' }}>
                                R$ {data?.preco.promocional != null ? data.preco.promocional : precoComDesconto.toFixed(1)}
                            </Typography>

                            <Typography variant='subtitle1'>
                                No pix com R$ {data?.preco.promocional != null ? preco - data.preco.promocional : desconto} de desconto
                            </Typography>

                            <Typography style={{ marginTop: "20px", }}>
                                <Button sx={{
                                    textDecoration: "underline",
                                    "&:hover": {
                                        textDecoration: "underline"
                                    },
                                    "&:focus": { outline: "none" }
                                }}>
                                    Ver mais opções de pagamento
                                </Button>
                            </Typography>
                        </div>

                        <div>
                            <div>
                                <Button variant='contained' id='btn-comprar' onClick={comprar}>Comprar</Button>
                            </div>

                            <div>
                                <Button variant='contained' id='btn-retirar'>Retira rápido</Button>
                            </div>
                        </div>
                    </div>

                    <BasicCard />

                    <div id='div-frete'>
                        <div style={{ marginLeft: '20px' }}>
                            <Typography style={{ color: "blue" }}>
                                Calcule o frete e prazo de entrega
                            </Typography>
                        </div>

                        <div style={{ marginRight: "20px" }}>
                            <label htmlFor="CEP"></label>
                            <input id='CEP' type='number' placeholder='_____-___' />

                            <Button variant='contained' style={{ height: "40px" }}>
                                Consultar
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Card sx={{ minWidth: 275 }} id='card-descricao'>
                <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>

                    <div id='div-descricao'>
                        <Typography variant="body1" fontWeight="bold" style={{ marginLeft: "10px" }}>
                            Descrição do produto
                        </Typography>
                    </div>

                    <Typography style={{ marginLeft: "10px", marginTop: "20px" }}>
                        {data?.nome}
                    </Typography>

                    <Typography style={{ marginLeft: "10px" }}>
                        {data?.descricao}
                    </Typography>
                </CardContent>
            </Card>

            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <div className='div-especificacoes'>
                    <Card sx={{ minWidth: 275 }} className='card-especificacoes'>
                        <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>

                            <div id='div-descricao'>
                                <Typography variant="body1" fontWeight="bold" style={{ marginLeft: "10px" }}>
                                    Características
                                </Typography>
                            </div>

                            <Typography style={{ marginLeft: "10px", marginTop: "20px", whiteSpace: "pre-line" }}>
                                {`Categoria: ${data?.categoria}
                                Data de criação: ${dataFormatada}
                                Sabor: ${data?.caracteristicas.sabor ? data.caracteristicas.sabor : "Sem sabor"}
                                `}

                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='div-especificacoes'>
                    <Card sx={{ minWidth: 275 }} className='card-especificacoes'>
                        <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>

                            <div id='div-descricao'>
                                <Typography variant="body1" fontWeight="bold" style={{ marginLeft: "10px" }}>
                                    Especificações Técnicas
                                </Typography>
                            </div>

                            <Typography style={{ marginLeft: "10px", marginTop: "20px", whiteSpace: "pre-line" }}>
                                {`Fornecedor: ${data?.fornecedor.nome} 
                                CNPJ: ${data?.fornecedor.cnpj}
                                Marca: ${data?.marca}
                                `}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Box>
    );
}

export default Product;