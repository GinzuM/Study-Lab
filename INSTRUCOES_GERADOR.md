# Doc's Lab — Manual de Arquitetura e Gerador de Cursos (Trilha Duolingo Style)

Este documento reúne a estrutura de pastas do projeto, o funcionamento do motor de trilha gamificada, as instruções de registro de novas disciplinas e o **Prompt Mestre** (com os templates exatos de código baseados nos arquivos reais do sistema) para gerar novos cursos completos via Inteligência Artificial.

---

## 1. Estrutura de Pastas do Projeto

Para que o carregamento dinâmico de scripts (`js/app.js`, `js/state.js` e `js/study_engines.js`) funcione localmente e na Vercel, os arquivos seguem rigorosamente esta hierarquia:

```text
Docs-Lab/
├── index.html                  # Aplicação Principal (Trilha, Grimório, Ateliê, Placar e Modais)
├── INSTRUCOES_GERADOR.md       # Este manual com o Prompt Gerador de Cursos
├── assets/
│   └── doc_mascot.jpeg         # Imagem oficial do mascote Doc (com fallback automático SVG)
├── css/
│   └── main.css                # Estilização 3D (botões táteis, trilha em zigue-zague e animações)
├── pages/
│   └── login.html              # Tela de Autenticação e Cadastro (integrada ao Supabase)
├── js/
│   ├── auth.js                 # Controle de sessão, login/logout e proteção de rotas
│   ├── state.js                # Catálogo de cursos, estado do usuário, estatísticas e sync nuvem
│   ├── avatar_catalog.js       # Catálogo modular de peças, cores e preços (South Park Style)
│   ├── avatar_engine.js        # Compositor SVG do personagem, mini-previews e loja com trava ADM
│   ├── study_engines.js        # Motores de Leitura Interativa, Quiz, Flashcards e Simulado Global
│   ├── achievements.js         # Sistema de conquistas progressivas por níveis (I a V)
│   ├── audio.js                # Sintetizador de efeitos sonoros (Web Audio API)
│   └── app.js                  # Inicialização, navegação de abas, renderização da trilha e placar
└── cursos/
    ├── psicopatologia/
    │   ├── dt_psicopatologia.js
    │   └── q_psicopatologia.js
    ├── psicofarmacologia/
    │   ├── dt_psicofarmacologia.js
    │   └── q_psicofarmacologia.js
    ├── epidemiologia/
    │   ├── dt_epidemiologia.js
    │   └── q_epidemiologia.js
    └── <id_do_novo_curso>/
        ├── dt_<id_do_novo_curso>.js   # Teoria Modular (Leituras 1 e 2 + Flashcards do Módulo)
        └── q_<id_do_novo_curso>.js    # Banco de Questões (Quizzes de Módulo e Simulado Final)
```

---

## 2. Como Funciona o Motor Gamificado do Site

O **Doc's Lab** opera sob uma mecânica de progressão em trilha em zigue-zague inspirada no Duolingo (`js/study_engines.js`):

1. **Variáveis Globais Carregadas Dinamicamente:**
   - Todo arquivo `dt_<id_do_curso>.js` deve declarar e preencher `window.DT_MODULES = [...]`.
   - Todo arquivo `q_<id_do_curso>.js` deve declarar e preencher `window.QUESTIONS_DB = [...]`.
2. **Unidades / Módulos (`m1`, `m2`, ... `mN`):**
   Cada objeto de módulo dentro de `window.DT_MODULES` gera automaticamente **4 etapas (botões circulares em zigue-zague)** na trilha principal:
   - **Etapa 1 (`<curso>_m<N>_read1`):** Leitura Interativa Parte 1. Lê a primeira metade do array `topicos` do módulo. Cada tópico é exibido como um slide interativo e, ao avançar, gera automaticamente um mini-desafio de fixação antes de passar ao próximo slide.
   - **Etapa 2 (`<curso>_m<N>_read2`):** Leitura Interativa Parte 2. Lê a segunda metade do array `topicos` do módulo (recomenda-se ter 4 tópicos por módulo: 2 para `read1` e 2 para `read2`).
   - **Etapa 3 (`<curso>_m<N>_quiz`):** Desafio de Questões do Módulo. Filtra automaticamente `window.QUESTIONS_DB` buscando as questões cujo campo `modulo` contenha `"Módulo N"`.
   - **Etapa 4 (`<curso>_m<N>_fc`):** Treino de Flashcards. Utiliza o array `flashcards` do módulo (`frente` / `verso`).
3. **Baú de Bônus de Módulo e Grimório:**
   - Ao concluir as 4 etapas de um módulo (`read1`, `read2`, `quiz` e `fc`), o botão de bônus da unidade é liberado (+50 XP e +25 Moedas).
   - A aba **Grimório** lê automaticamente o mesmo array `topicos` de cada módulo, permitindo que o aluno desbloqueie ou consulte resumos estruturados (`resumo`, `explicacao`, `pontosChave`, `exemplo` e `alerta`).
4. **Chefe Final da Trilha (Simulado Global):**
   - Ao final de todos os módulos da trilha, há o nó especial `<curso>_final_boss`, que sorteia 15 questões de todos os módulos de `window.QUESTIONS_DB` com sistema de 3 vidas (`❤️ ❤️ ❤️`).

---

## 3. Como Registrar um Curso Novo no Site (Passo a Passo)

Após gerar os arquivos `dt_<id>.js` e `q_<id>.js`, faça o registro em 3 passos no arquivo **`js/state.js`**:

### Passo 1: Salvar os arquivos na pasta
Crie a pasta `cursos/<id_do_curso>/` e coloque dentro dela:
- `cursos/<id_do_curso>/dt_<id_do_curso>.js`
- `cursos/<id_do_curso>/q_<id_do_curso>.js`

### Passo 2: Adicionar ao `window.CATALOG_COURSES` em `js/state.js`
Abra `js/state.js` e adicione a entrada do novo curso:

```javascript
  semiologia: {
    id: 'semiologia',
    title: 'Semiologia Psicológica',
    icon: '🔍',
    accentBg: 'from-amber-500/25 to-orange-600/20',
    accentBorder: 'border-amber-500/40',
    badgeColor: 'text-amber-300 bg-amber-500/20',
    category: 'Avaliação Clínica',
    totalModules: 6, // Quantidade exata de objetos em window.DT_MODULES
    totalStages: 25, // Fórmula obrigatória: (totalModules * 4) + 1
    dtPath: 'cursos/semiologia/dt_semiologia.js',
    qPath: 'cursos/semiologia/q_semiologia.js'
  }
```
> **Regra da Fórmula `totalStages`:** Cada módulo possui **4 nós** (`read1`, `read2`, `quiz`, `fc`) + **1 nó de Chefe Final (Simulado)**. Logo, `totalStages = (totalModules * 4) + 1` (Ex: 6 módulos = `25`; 8 módulos = `33`).

### Passo 3: Adicionar estatística inicial em `createDefaultStats()` no `js/state.js`
Dentro de `courseStats` na função `createDefaultStats()`, adicione a chave do novo curso:

```javascript
    courseStats: {
      psicofarmacologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      epidemiologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      psicopatologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      semiologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 }
    }
```

---

## 4. Prompt Mestre para Gerar os Cursos na IA

Copie o prompt abaixo, preencha os dados do curso desejado e envie junto com o seu material de estudo (PDF, resumo ou anotações) para que a IA gere os dois arquivos prontos para uso:

```text
Atue como um Especialista Acadêmico e Engenheiro de Dados Educacionais.
Sua tarefa é transformar o material de estudo anexado em um curso gamificado completo para a plataforma Doc's Lab (estilo Duolingo), gerando o código completo de 2 arquivos JavaScript:
1) dt_<id_curso>.js (Teoria interativa para a Trilha, Grimório e Flashcards)
2) q_<id_curso>.js (Banco de questões comentadas para os Quizzes de Módulo e Simulado Final)

DADOS DO CURSO:
- ID do Curso: [Ex: winnicott]
- Título do Curso: [Ex: Psicanálise Winnicottiana]
- Quantidade de Módulos: [Ex: 6]

REGRAS OBRIGATÓRIAS DE ESTRUTURA E CÓDIGO:
1. No arquivo `dt_<id_curso>.js`, a variável global DEVE se chamar exatamente `window.DT_MODULES = [...]`.
2. Cada módulo dentro de `window.DT_MODULES` deve possuir:
   - `id`: número sequencial (1, 2, 3...)
   - `modulo`: string no formato `"Módulo 1"`, `"Módulo 2"`, etc.
   - `titulo`: título temático do módulo.
   - `icone`: ícone FontAwesome (ex: `"fa-brain"`, `"fa-book-medical"`, `"fa-flask"`).
   - `cor`: cor principal (`"pink"`, `"purple"`, `"emerald"`, `"blue"`, `"amber"`).
   - `topicos`: array contendo EXATAMENTE 4 objetos de tópicos por módulo (os 2 primeiros serão exibidos na Leitura Parte 1 da trilha e os 2 últimos na Leitura Parte 2 da trilha, além de comporem o Grimório).
   - Cada objeto dentro de `topicos` DEVE conter as chaves:
     * `subtopico`: Título do tópico.
     * `resumo`: Síntese direta em 1 ou 2 frases.
     * `explicacao`: Explicação teórica densa, técnica e completa (pode usar tags `<strong>` e `<br>`).
     * `pontosChave`: Array com 3 a 4 strings de conceitos-chave (usados pelo motor para criar os desafios interativos de leitura).
     * `exemplo`: Caso clínico ou exemplo prático de aplicação.
     * `alerta`: Pegadinha de prova, diagnóstico diferencial ou erro comum a evitar.
   - `flashcards`: array contendo de 6 a 8 objetos por módulo, cada um com `{ frente: "...", verso: "..." }`.
3. No arquivo `q_<id_curso>.js`, a variável global DEVE se chamar exatamente `window.QUESTIONS_DB = [...]`.
4. Gere de 6 a 10 questões de múltipla escolha para CADA módulo. Cada objeto de questão em `window.QUESTIONS_DB` DEVE conter:
   - `id`: número sequencial único (1, 2, 3...).
   - `modulo`: string que comece EXATAMENTE com `"Módulo X: ..."` (ex: `"Módulo 1: Fundamentos"`), pois o motor da trilha filtra as questões de cada unidade procurando por `"Módulo X"` nessa string.
   - `nivel`: `"Fácil"`, `"Médio"` ou `"Difícil"`.
   - `enunciado`: Pergunta completa ou caso clínico.
   - `opcoes`: Array com exatamente 4 strings de alternativas.
   - `correta`: Número inteiro de 0 a 3 indicando o índice da alternativa correta no array `opcoes`.
   - `explicacao`: Justificativa técnica detalhada explicando por que a alternativa correta é a verdadeira e o erro das demais.
5. Não abrevie o conteúdo com comentários do tipo "// continue aqui". Entregue todos os módulos, tópicos, flashcards e questões completos.
```

---

## 5. Modelo Exato dos Arquivos do Curso (Referência Técnica)

### Modelo do Arquivo 1: `cursos/<id_curso>/dt_<id_curso>.js`

```javascript
// =========================================================================
// Base de Dados Teórica, Leituras da Trilha, Grimório e Flashcards
// =========================================================================

window.DT_MODULES = [
  {
    id: 1,
    modulo: "Módulo 1",
    titulo: "Fundamentos e Conceitos Estruturais",
    icone: "fa-brain",
    cor: "emerald",
    topicos: [
      // TÓPICO 1 (Entra na Etapa m1_read1 da Trilha e no Grimório)
      {
        subtopico: "1.1 Conceito Base e Definição",
        resumo: "Síntese direta do conceito principal abordado neste primeiro bloco.",
        explicacao: "Explicação acadêmica completa detalhando os mecanismos fundamentais, contexto histórico e aplicações teóricas. Use <strong>negrito</strong> para destacar termos técnicos essenciais.",
        pontosChave: [
          "Primeiro ponto-chave fundamental para fixação.",
          "Segundo princípio estrutural do tema.",
          "Terceira característica técnica indispensável."
        ],
        exemplo: "Caso prático ou situação clínica real que ilustra como este conceito aparece na prática profissional.",
        alerta: "Atenção: Não confunda este conceito com termos similares em questões de prova."
      },
      // TÓPICO 2 (Entra na Etapa m1_read1 da Trilha e no Grimório)
      {
        subtopico: "1.2 Classificação e Mecanismos",
        resumo: "Divisão sistemática e funcionamento estrutural do fenômeno estudado.",
        explicacao: "Desenvolvimento técnico aprofundado sobre as categorias e processos envolvidos.",
        pontosChave: [
          "Classificação primária e seus critérios.",
          "Diferença funcional entre os subtipos.",
          "Impacto direto na avaliação diagnóstica."
        ],
        exemplo: "Exemplo comparativo demonstrando a atuação de cada mecanismo.",
        alerta: "Pegadinha clássica: A presença isolada de um marcador não fecha o critério sem avaliação contextual."
      },
      // TÓPICO 3 (Entra na Etapa m1_read2 da Trilha e no Grimório)
      {
        subtopico: "1.3 Avaliação Clínica e Diagnóstico",
        resumo: "Critérios de identificação e manejo técnico na prática clínica.",
        explicacao: "Detalhamento de como conduzir a investigação clínica, sinais de alerta e instrumentos utilizados.",
        pontosChave: [
          "Sinal clínico patognomônico ou principal.",
          "Critério temporal exigido na avaliação.",
          "Conduta prioritária diante do quadro."
        ],
        exemplo: "Paciente apresenta quadro específico durante o atendimento; observa-se a evolução conforme a conduta.",
        alerta: "Sempre descarte causas orgânicas ou secundárias antes de concluir a hipótese principal."
      },
      // TÓPICO 4 (Entra na Etapa m1_read2 da Trilha e no Grimório)
      {
        subtopico: "1.4 Intervenção e Prognóstico",
        resumo: "Estratégias terapêuticas e evolução esperada do quadro.",
        explicacao: "Abordagem completa sobre as linhas de cuidado, limitações e fatores de bom ou mau prognóstico.",
        pontosChave: [
          "Abordagem de primeira escolha.",
          "Fatores protetivos associados à melhora.",
          "Cuidados éticos e técnicos no acompanhamento."
        ],
        exemplo: "Acompanhamento longitudinal demonstrando remissão dos sintomas após intervenção adequada.",
        alerta: "Interrupções abruptas no manejo podem gerar efeito rebote ou recaída precoce."
      }
    ],
    // FLASHCARDS DO MÓDULO 1 (Entram na Etapa m1_fc da Trilha)
    flashcards: [
      {
        frente: "Qual é a definição central do conceito abordado no subtópico 1.1?",
        verso: "É o processo caracterizado pela integração estrutural dos mecanismos estudados na base teórica."
      },
      {
        frente: "Quais são os dois principais critérios para diferenciar os subtipos na avaliação clínica?",
        verso: "A duração temporal dos sinais e o grau de comprometimento funcional observado."
      },
      {
        frente: "Qual deve ser a primeira conduta técnica diante da suspeita diagnóstica?",
        verso: "Realizar a anamnese detalhada e descartar condições orgânicas ou secundárias."
      },
      {
        frente: "O que caracteriza o efeito rebote na interrupção precoce do acompanhamento?",
        verso: "O retorno agudo e frequentemente intensificado dos sinais prévios."
      }
    ]
  }
  // Repetir objetos para Módulo 2, Módulo 3, etc.
];
```

---

### Modelo do Arquivo 2: `cursos/<id_curso>/q_<id_curso>.js`

```javascript
// =========================================================================
// Banco de Questões Comentadas (Quizzes da Trilha e Simulado Global)
// =========================================================================

window.QUESTIONS_DB = [
  {
    id: 1,
    modulo: "Módulo 1: Fundamentos e Conceitos Estruturais",
    nivel: "Médio",
    enunciado: "Durante uma avaliação clínica inicial, observa-se um quadro específico que exige distinção conceitual precisa. Considerando os fundamentos estruturais estudados no Módulo 1, assinale a alternativa correta:",
    opcoes: [
      "A avaliação deve considerar o contexto global, o critério temporal e descartar causas secundárias antes do fechamento diagnóstico.",
      "A presença de um único sinal isolado por menos de 24 horas já confirma definitivamente o quadro crônico.",
      "O manejo dispensa anamnese prévia quando os sinais iniciais parecem evidentes ao observador.",
      "A interrupção abrupta do acompanhamento não interfere na evolução ou prognóstico do caso."
    ],
    correta: 0,
    explicacao: "Correta: A alternativa A descreve o rigor técnico exigido na avaliação clínica. As demais estão incorretas porque sinais isolados não fecham diagnóstico crônico, a anamnese é indispensável e a interrupção abrupta pode causar efeito rebote."
  },
  {
    id: 2,
    modulo: "Módulo 1: Fundamentos e Conceitos Estruturais",
    nivel: "Difícil",
    enunciado: "Em relação aos mecanismos de intervenção e fatores prognósticos discutidos no Módulo 1, analise o caso e indique a conduta adequada:",
    opcoes: [
      "Ignorar os fatores protetivos do ambiente familiar e escolar.",
      "Priorizar a abordagem de primeira escolha aliada ao monitoramento contínuo da resposta clínica.",
      "Adotar medidas invasivas antes de realizar a escuta qualificada.",
      "Suspender o acompanhamento imediatamente após a primeira melhora subjetiva."
    ],
    correta: 1,
    explicacao: "Correta: A conduta padrão ouro baseia-se na abordagem de primeira escolha com acompanhamento longitudinal para consolidar o prognóstico favorável."
  }
  // Adicionar de 6 a 10 questões para cada Módulo ("Módulo 1...", "Módulo 2...", etc.)
];
```