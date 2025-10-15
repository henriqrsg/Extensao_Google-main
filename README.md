# Extensão CheckList para Google Chrome

Esta é uma extensão para o navegador Google Chrome que funciona como uma **checklist** simples para ajudar você a organizar suas tarefas diárias. Com ela, você pode adicionar, marcar como concluídas e remover tarefas facilmente, mantendo seu dia mais produtivo!

---

## Funcionalidades

- Adicionar novas tarefas do dia.
- Marcar tarefas como concluídas.
- Remover tarefas concluídas ou desnecessárias.
- Interface simples e intuitiva.
- Armazenamento local para salvar suas tarefas.

---

## Instalação

1. Clone ou baixe este repositório no seu computador.
   
   ```bash
   https://github.com/henriqrsg/Extensao_Google-main.git
   ```
2. Acesse as extensões do google.

- Abra o Google Chrome.

- Digite no chrome:
   
   ```bash
  chrome://extensions/
   ```
- Ative o Modo do desenvolvedor (canto superior direito).

- Clique em Carregar sem compactação (ou "Load unpacked").

- Selecione a pasta onde estão os arquivos da sua extensão.

3. Pronto! Sua extensão estará carregada no navegador para testes.

---

## Uso

- Adicone tarefas que você deseja realizar durante o dia.
- Pressione Enter ou clique no botão verde __adicionar__.
- Após terminada a tarefa clique na caixinha ao lado da tarefa para marca-la como realizada.
- Para excluir a tarefa basta clicar no icone do __X__ vermelho ao lado direito.

---

## GitHub Pages

Acesse a landing page da extensão:

   ```bash
   https://henriqrsg.github.io/Extensao_Google
   ```
---

## Release

Baixe a versão empacotada (.zip):

   ```bash
   https://github.com/henriqrsg/Extensao_Google/releases
   ```

---
## Estrutura

   ```plaintext
   Extensao_Google/
├── docs/
│    └── index.html
├── icons/
│    └── add.png
│    └── check.png
│    └── delete.png
│    └── icon.png
│    └── save.png
├── node_modules/
├── scripts/
│    └── build-extension.mjs
├── src/
│    └── background/
│          └── service-worker.js/
│    └── content/
│          └── content.js/
│    └── popup/
│          └── popup.css/
│          └── popup.html/
│          └── popup.js/
├── tests/
│    └── extension.spec.ts
│    └── playwright.config.ts
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── manifest.json
├── package-lock.json
├── package.json
└── README.md

   ```
---

## LICENSA

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
