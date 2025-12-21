// src/contexts/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const CartContext = createContext();

// Hook customizado para facilitar o uso do contexto
export const useCart = () => {
    return useContext(CartContext);
};

// 2. Cria o Provedor do Contexto
export const CartProvider = ({ children }) => {
    // Estado global para armazenar os produtos do carrinho
    const [cartItems, setCartItems] = useState([]);

    // Função para adicionar um novo produto ao carrinho
    const addToCart = (product) => {
        // Garante que o produto só seja adicionado se existir
        if (product) {
            // Adiciona o novo produto ao array existente
            setCartItems((prevItems) => [...prevItems, product]);
        }
    };

    // Objeto que será fornecido a todos os componentes
    const contextValue = {
        cartItems, // Array dos produtos no carrinho
        addToCart, // Função para adicionar produtos
        // Você pode adicionar outras funções aqui, como removeFromCart, clearCart, etc.
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};