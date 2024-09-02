#Calculadora de Resistores de 4 Faixas

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Descrição

A **Calculadora de Resistores de 4 Faixas ** é uma aplicação desenvolvida em Next.js com TypeScript que permite aos usuários calcular o valor de resistores com base nas cores das faixas. Os usuários podem selecionar a quantidade de faixas e as respectivas cores, e o software calculará automaticamente o valor da resistência e a tolerância.

## Funcionalidades

- Seleção de faixas de cores de resistores.
- Cálculo do valor de resistência com base nas cores selecionadas.
- Exibição da tolerância do resistor com base na última faixa de cor.

## Pré-requisitos

- Node.js >= 14.x
- npm ou yarn

## Instalação

1. Clone este repositório:

   git clonehttps://github.com/francisguitt/Calculadora-de-Resistores.git
Instale as dependências:
npm install
ou

yarn install
Uso
Inicie o servidor de desenvolvimento:

npm run dev
ou
yarn dev
Acesse a aplicação em seu navegador:

http://localhost:3000
Use a interface para selecionar as cores das faixas do resistor e calcular seu valor de resistência.

Estrutura do Projeto
components/ColorSelect.tsx: Componente para seleção de cores das faixas do resistor.
pages/index.tsx: Página principal onde o cálculo é realizado.
utils/calculateResistance.ts: Função utilitária para calcular o valor da resistência com base nas cores das faixas.
Tecnologias Utilizadas
Next.js - Framework de React para aplicações web.
TypeScript - Superset de JavaScript que adiciona tipagem estática.
React - Biblioteca JavaScript para construção de interfaces de usuário.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Guitt Web Code /Guitt Zoom
