# Projeto React - Layout Simples

## 📝 Descrição

Este projeto foi desenvolvido em sala de aula como parte das atividades da disciplina de Programação Web II do curso de Análise e Desenvolvimento de Sistemas. O objetivo principal foi construir uma interface utilizando a biblioteca React.js, aplicando conceitos fundamentais do desenvolvimento front-end moderno.

## 📸 Prévia do layout

<div class="desktop">
  <img src="public/readme image.png" width=550"/>
</div>

## 🚀 Tecnologias Utilizadas

[![Stacks](https://skillicons.dev/icons?i=react,vite,javascript,html,css&perline=5)](https://skillicons.dev)

## 📁 Estrutura de Pastas

```bash ads-progweb-layout/
├── src/                 # Código-fonte principal da aplicação
│    ├── assets/              # Recursos estáticos
│    │   ├── images/          # Imagens utilizadas nos cards
│    │   │   └── imagesPool.jsx    # Exporta o conjunto de imagens para uso nos componentes
│    ├── components/          # Componentes reutilizáveis
│    │   ├── buttons/         # Botões de filtro (Popular, Staff Picks, Recents)
│    │   ├── cards/           # Cartões de protótipos
│    │   └── header/          # Cabeçalho da página (Explore + Subtítulo)
│    ├── App.css              # Estilos globais da aplicação
│    ├── App.jsx              # Componente raiz, monta a página com header, botões e cards
│    ├── index.css            # Estilos globais padrão
│    └── main.jsx             # Ponto de entrada da aplicação React
├── index.html           # Arquivo HTML principal
├── package.json         # Gerenciador de dependências e scripts
├── vite.config.js       # Configuração do Vite
├── eslint.config.js     # Configuração do ESLint
└── README.md            # Documentação do projeto
```

## ⚙️ Funcionalidades Implementadas

- Estruturação inicial de um projeto React utilizando Vite.
- Configuração de ambiente de desenvolvimento com ESLint para manutenção de código limpo e padronizado.
- Implementação de componentes básicos para a construção da interface.

## 📦 Como Executar o Projeto

### Clone o repositório:

```bash
git clone https://github.com/GustavoDeltta/ads-progweb-layout.git
```

### Acesse o diretório do projeto:

```bash
cd ads-progweb-layout
```

### Instale as dependências:

```bash
npm install
```

### Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Acesse a aplicação:

-  Abra o navegador e vá até ``http://localhost:5173``para visualizar a interface.

## 📚 Aprendizados

### Durante o desenvolvimento deste projeto, foram abordados e praticados os seguintes conceitos:

    - Configuração de projetos React com Vite para um ambiente de desenvolvimento eficiente.

    - Criação de componentes funcionais em React

    - Utilização de hooks (useState, useEffect)

    - Compreensão do fluxo de trabalho em projetos front-end modernos.