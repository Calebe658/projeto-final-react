# 🛒 Suplement Store – React

Este projeto foi desenvolvido como **projeto final em React**, simulando um **e-commerce de suplementos alimentares**.

A aplicação permite **listar produtos, visualizar detalhes, adicionar itens ao carrinho e acompanhar o resumo da compra**, utilizando **React Router DOM**, **Context API** e consumo de **API externa**.

---

## ⚙️ Como o sistema funciona

- A página inicial exibe um **banner** e uma lista de produtos
- Os produtos são carregados a partir de uma **API externa**
- Cada produto possui uma página de **detalhes**, acessada via rota dinâmica
- Na página do produto é possível:
  - Visualizar preço e desconto
  - Ver descrição, características e especificações
  - Adicionar o produto ao carrinho
- O **carrinho de compras** é gerenciado globalmente através da **Context API**
- No carrinho, o usuário pode:
  - Aumentar ou diminuir a quantidade dos produtos
  - Visualizar o total de itens
  - Visualizar o valor total da compra
- Caso o carrinho esteja vazio, é exibida uma mensagem informativa
- A navegação entre páginas é feita utilizando **React Router DOM**
- O layout da aplicação é estilizado com **Material UI**
- Os componentes são organizados seguindo o padrão **Atomic Design**

---

## 🧠 Organização do Projeto

O projeto segue o padrão **Atomic Design**, separando os componentes em átomos, moléculas, organismos e páginas, facilitando a reutilização e manutenção do código.

---

## 🛠️ Tecnologias utilizadas

- React
- React Router DOM
- Context API
- Axios
- Material UI (MUI)
- JavaScript (ES6+)
- CSS

---

## ▶️ Como executar o projeto

1. Faça o download ou clone este repositório
2. Acesse a pasta do projeto
3. Instale as dependências
4. Execute o projeto

```bash
npm install
npm run dev

```

## 🌐 Acesso à aplicação

Após executar o projeto, a aplicação será iniciada em:

👉 **http://localhost:5173**

---

## ⚠️ Observação importante (CORS)

Este projeto consome dados de uma **API externa hospedada em outro domínio**.  
Por esse motivo, podem ocorrer bloqueios de **CORS** ao executar a aplicação localmente.

Caso os produtos não sejam carregados corretamente, será necessário abrir o navegador com a segurança desativada e acessar o link do localhost.

---

## 🚫 Como abrir o Google Chrome com CORS desativado

1. Feche todas as janelas do **Google Chrome**
2. Pressione **Win + R** para abrir o **Executar**
3. Cole o comando abaixo e pressione **Enter**:

```text
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
