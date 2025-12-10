import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Box, Typography, Grid } from "@mui/material";
import frasco from "../../assets/frasco.png"
import '../css/Carrinho.css'
import { useCart } from '../../contexts/CartContext'; 

const Carrinho = () => {
    const location = useLocation();
    const { cartItems } = useCart();
    const navigate = useNavigate();

    // Agora, 'produtos' será um array de produtos
    const [produto, setProdutos] = useState(cartItems || []);
    const [quantidade, setQuantidade] = useState(1);

    console.log(produto)

    if (!produto || quantidade == 0) {
        return (
            <div id="div-carrinho-vazio">
                <div id="texto-carrinho-vazio">
                    <Typography variant="h3" fontWeight="bold" color="blue">
                        Meu carrinho
                    </Typography>

                    <Typography variant="h4" marginTop={"20px"}>
                        Nenhum produto foi adicionado
                    </Typography>

                    <Button variant="contained" onClick={() => navigate("/")} style={{ marginTop: "20px", width: '300px' }}>Voltar ao Home</Button>
                </div>
            </div>
        );
    }

    const aumentar = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuir = () => {
        setQuantidade(quantidade - 1);
    };

    const total = (produto.preco * quantidade).toFixed(2);

    return (
        <Box sx={{ marginLeft: "18%", minWidth: "1300px", marginBottom: "300px" }}>
            <Typography variant="h4" fontWeight="bold" color="blue" marginTop={"20px"}>
                Meu carrinho
            </Typography>

            <Grid container spacing={1} id="grid-principal">
                <Grid size={6} >
                    <div style={{ display: "flex" }}>
                        <div>
                            <img src={frasco} alt="" style={{ width: "100px", marginLeft: "10px" }} />
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Typography variant="h4">
                                {produto.nome}
                            </Typography>

                            <Typography variant="h6">
                                Vendido por <strong>{produto.fornecedor}</strong>
                            </Typography>

                            <Typography variant="h6">
                                Entregue por <strong>Natural Supplements</strong>
                            </Typography>
                        </div>
                    </div>
                </Grid>


                <Grid size={6}>
                    <div id="div-contador">
                        <div>
                            <Typography>
                                Quantidade:
                            </Typography>

                            <Button onClick={diminuir}>-</Button>
                            <div id="contador">{quantidade}</div>
                            <Button onClick={aumentar}>+</Button>
                        </div>

                        <div className="div-total">
                            <Typography variant="h5" color="blue">
                                R$ {total}
                            </Typography>

                            <Typography variant="h5" color="blue">
                                No cartão ou à vista no pix
                            </Typography>
                        </div>
                    </div>

                </Grid>
            </Grid>

            <Grid container spacing={1} id="grid-resumo">
                <div id="div-resumo">
                    <Typography fontWeight={"bold"}>
                        Resumo do pedido
                    </Typography>
                </div>
            </Grid>

            <Grid container spacing={1} className="grid-produto-total">
                <div className="div-produto-total">
                    <Typography fontWeight={"bold"}>
                        {quantidade} produto
                    </Typography>

                    <div>
                        <Typography fontWeight={'bold'}>
                            R$ {total}
                        </Typography>
                    </div>
                </div>
            </Grid>

            <Grid container spacing={1} className="grid-produto-total">
                <div className="div-produto-total">
                    <Typography fontWeight={"bold"}>
                        Total:
                    </Typography>

                    <div className="div-total">
                        <Typography color="blue">
                            R$ {total}
                        </Typography>

                        <Typography color="blue">
                            No cartão ou à vista no pix
                        </Typography>
                    </div>
                </div>
            </Grid>

            <div id="div-botoes">
                <Button id="botao-comprar-mais" onClick={() => navigate("/")}>
                    Comprar mais produtos
                </Button>

                <Button id="botao-continuar-comprando">
                    Continuar a comprar
                </Button>
            </div>
        </Box>
    );
};

export default Carrinho;
