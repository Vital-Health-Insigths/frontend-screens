## ️Páginas com React + Vite + Tailwind CSS

⬆️ V0.5 ⬆️

_Repositório dedicado ao desenvolvimento das telas do sistema, contendo exclusivamente a implementação da interface do usuário (UI). Este espaço concentra os layouts, componentes visuais e fluxos de navegação, servindo como base para validação do design para integração futura_

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Estrutura do Projeto

```
src/
   ├── components/
   │   ├── CardNavegacao.tsx # Componente com botões de navegação
   │   ├── BotaoQuarto.tsx
   │   ├── BotaoQuartov2.tsx
   │   ├── BotaoQuartoAdmin.tsx
   │   └── BotaoVisitante.tsx
   ├── pages/
   │   ├── Home.tsx
   │   ├── Biometria.tsx
   │   ├── Cadastro.tsx
   │   ├── Ajuda.tsx
   │   ├── Quartos.tsx
   │   ├── Quartos_v2.tsx
   │   ├── CheckOut.tsx
   │   ├── admin/
   │   │ ├── Base_adimin.tsx
   │   │ ├── Busca_quarto_adimin.tsx
   │   │ ├── Busca_usuario_adimin.tsx
   │   │ ├── Home_adimin.tsx
   │   │ ├── Quarto_adimin.tsx
   │   │ └── Usuario_adimin.tsx
   │   └── mobile/
   │     ├── Ajuda_mob.tsx
   │     ├── Cadastro_mob.tsx
   │     ├── Login_mob.tsx
   │     ├── Home_mob.tsx
   │     └── Perfil_mob.tsx
   ├── App.tsx # Lógica de controle de páginas
   └── index.tsx
   public/
   └── CSS/ imagens/...
```

## Funcionalidades

## Funcionalidades
- Layout adaptativo apenas para desktop full
- Alternância de páginas usando `useState`
- Navegação controlada com o componente `CardNavegacao`
- Layout visual com imagens laterais e animações
- Estilização moderna com Tailwind

## Como rodar o projeto localmente

**Clone o repositório**<br>
`bash git clone https://github.com/...`<br>
`bashcd seu-projeto`

**Instale as dependências**

`npm install`

**Inicie o servidor de desenvolvimento**

`npm run dev`

Abra no navegador

### 📌 Observações

Este projeto não utiliza react-router-dom; a navegação é feita por estado.

As imagens usadas estão na pasta public/imagens.

