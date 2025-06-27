# 🧪 Cypress do Zero à Nuvem

Automação de testes end-to-end com Cypress, baseada no curso **“Cypress, do Zero à Nuvem”** da [Escola Talking About Testing](https://talkingabouttesting.com).

> Projeto focado em boas práticas de QA, testes automatizados, versionamento, simulação de viewport mobile e integração contínua com GitHub Actions.

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org) (v18 ou superior)
- [npm](https://www.npmjs.com/)
- Git instalado
- Navegador (Chrome recomendado)

## 🚀 Instalação e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   - Headless (modo CI):
     ```bash
     npm test
     ```
   - Interface interativa do Cypress:
     ```bash
     npm run cy:open
     ```

## 📱 Suporte a Testes Mobile

Este projeto inclui comandos customizados para simulação de testes em viewport mobile (Ex.: 410x860):

- Abrir interface Cypress com viewport mobile:
  ```bash
  npm run cy:open:mobile
  ```

- Executar testes headless com viewport mobile:
  ```bash
  npm run cy:run:mobile
  ```

## 📚 Referências

- Curso: [Cypress, do Zero à Nuvem](https://talkingabouttesting.com)
- Cypress Docs: [https://docs.cypress.io](https://docs.cypress.io)