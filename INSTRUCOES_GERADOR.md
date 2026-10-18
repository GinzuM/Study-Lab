Para criar novos cursos no seu projeto Study Lab seguindo a metodologia DRY e a separação de responsabilidades (SoC), siga o guia e a estrutura abaixo.

📂 1. Estrutura de Diretórios Atualizada
O projeto utiliza motores globais centralizados na raiz (css/ e js/), enquanto cada curso possui apenas uma pasta isolada contendo o seu próprio arquivo HTML e o seu banco de dados modular (dt_[curso].js).

Plaintext
Study_Lab_Hub/
├── index.html                        # Página inicial (Hub com catálogo de cursos)
├── INSTRUCOES_GERADOR.md             # Manual/Prompt mestre para a IA gerar novos cursos
├── css/
│   ├── home.css                      # Estilo exclusivo da Home
│   └── style.css                     # Estilo ÚNICO compartilhado por todos os cursos[cite: 3]
├── js/
│   ├── home.js                       # Lógica de controle e pesquisa da Home
│   ├── app.js                        # Motor ÚNICO (Mapa Mental, Flashcards e Quiz)[cite: 3]
│   └── simulado.js                   # Motor ÚNICO do Simulado (carregado sob demanda)
└── cursos/
    ├── psicofarmacologia/
    │   ├── index.html                # Página do curso (aponta para a raiz via ../../)
    │   └── dt_psicofarmacologia.js   # Dados teóricos, flashcards, quiz e simulado do curso
    ├── epidemiologia/
    │   ├── index.html
    │   └── dt_epidemiologia.js
    ├── psicopatologia/
    │   ├── index.html
    │   └── dt_psicopatologia.js
    └── template_em_branco/
        ├── index.html
        └── dt_template.js            # Modelo estrutural em branco para novos cursos
🛠️ 2. Como Funciona a Adição de um Novo Curso
Para adicionar uma nova matéria ao seu Study Lab, execute estes passos simples:

Criar a pasta do curso: Duplique a pasta cursos/template_em_branco/ e renomeie-a com o nome da nova matéria (ex: neuroanatomia), mantendo apenas o arquivo index.html e renomeando o arquivo de dados para dt_neuroanatomia.js.

Atualizar o index.html do curso: Abra o arquivo index.html recém-criado e altere o <title>, o cabeçalho (<div class="logo">) para o nome do novo curso. O menu lateral interno deve conter apenas o link para voltar à página principal:

HTML
<ul class="sidebar-menu">
  <li><a href="../../index.html" class="active">🏠 Início (Página Principal)</a></li>
</ul>
Gerar os dados com a IA: Forneça os PDFs da nova matéria junto com o prompt contido no arquivo INSTRUCOES_GERADOR.md para a Inteligência Artificial. Ela gerará o conteúdo estruturado que você deve colar dentro de dt_neuroanatomia.js.

Atualizar a Home (index.html da raiz): Adicione o cartão de acesso ao novo curso na grelha principal (<div class="course-grid">) e o link correspondente no menu lateral da página inicial.