# aFastnote - Frontend (React + VITE)

### 🚀 Interface intuitiva e totalmente responsiva para o aFastnote!

## 📌 Sobre o Projeto
O **Frontend do aFastnote** é a interface que se conecta à API para fornecer uma experiência de usuário fluida e moderna. Desenvolvido com React e VITE, ele oferece uma interface responsiva e de fácil navegação para o gerenciamento de anotações.

## 🎯 Recursos Principais
✅ Interface totalmente responsiva, garantindo uma ótima experiência em qualquer dispositivo  
✅ Estilização moderna utilizando **styled-components**  
✅ Editor de texto básico implementado com **React Quill**  
✅ Consumo da API via **Axios** e gerenciamento de rotas com **React Router DOM**  
✅ Proteção de rotas através do componente **ProtectedRouter**, validando autenticação do usuário  
✅ Uso de **Context API**, **hooks personalizados** e **hooks nativos do React** para otimizar a experiência  
✅ Validação no cadastro de usuários antes do envio dos dados para a API  
✅ Sistema de filtros por **tag** para organizar suas anotações  
✅ Deploy realizado na **Vercel**  

## 🚀 Como Rodar o Projeto

### 📥 Clonando o Repositório
```sh
git clone https://github.com/xMarkhus/aFastnote-frontend.git
cd aFastnote-frontend
```

### 🛠 Instalando Dependências
Certifique-se de ter o **Node.js** e o **npm** instalados.  
Em seguida, instale as dependências do projeto:
```sh
npm install
```

### ▶️ Executando o Frontend
```sh
npm run dev
```
Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

## 🔑 Autenticação
A autenticação é feita via **JWT**, e o token é armazenado no **localStorage**. As rotas protegidas são validadas pelo componente **ProtectedRouter**, que verifica a presença do token antes de permitir o acesso.

### 📌 Cadastro de Usuário
Ao cadastrar um usuário, a API realiza a validação antes do envio dos dados. Certifique-se de preencher o formulário corretamente para garantir uma criação bem-sucedida.

### 🔹 Filtros por Tag
No frontend, os usuários podem organizar suas anotações utilizando filtros por tag. A interface permite que as notas sejam filtradas facilmente de acordo com as categorias definidas.

## 🌎 Deploy
O projeto está implantado na **Vercel**. Você pode acessar o frontend diretamente pelo link:
[https://afastnote-frontend.vercel.app](https://afastnote-frontend.vercel.app)


---
**🚀 Desenvolvido por Marcos Martins** 💻

---
