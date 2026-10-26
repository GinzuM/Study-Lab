// =========================================================================
// DADOS TEÓRICOS (dt_epidemiologia.js) — Doc's Lab
// Revisado integralmente: Espelhamento pedagógico exato com o Quiz
// =========================================================================

const studyData = {
  topics: [
    {
      id: "sp_sc",
      title: "1. Saúde Pública vs. Saúde Coletiva",
      content: `A **Saúde Pública** tradicional foca no controle de epidemias, riscos biológicos imediatos, vacinação em massa e campanhas sanitárias estatais, operando de forma técnica e centrada no vetor ou na doença. 

Já a **Saúde Coletiva**, nascida na América Latina (especialmente no Brasil) nas décadas de 1970 e 1980 com o movimento da Reforma Sanitária, entende a saúde como um fenômeno social e histórico profundo. Ela analisa a **determinação social** do processo saúde-doença e as desigualdades estruturais.

* **Exemplo Prático:** Durante um surto de dengue, a Saúde Pública tradicional distribui repelentes e aplica inseticidas (fumacê). A Saúde Coletiva investiga a falta de saneamento básico, a coleta irregular de lixo na periferia e cobra políticas públicas de habitação e renda.`,
      mnemonic: "💡 Mnemônico: Saúde Pública = Foca no risco biológico imediato. Saúde Coletiva = Foca nas desigualdades e na determinação social."
    },
    {
      id: "art_196",
      title: "2. Reforma Sanitária e o Artigo 196 da Constituição",
      content: `Antes da Constituição Federal de 1988, a assistência médica pública no Brasil era gerida pelo **INAMPS**, operando sob um **modelo previdenciário e excludente**: apenas os trabalhadores formais (com carteira assinada e contribuição em dia) tinham direito garantido ao atendimento médico. O restante da população dependia da caridade e da filantropia (como as Santas Casas).

O **Artigo 196 da Constituição Federal de 1988** rompeu radicalmente com esse modelo ao estabelecer que *"a saúde é direito de todos e dever do Estado"*, garantindo o acesso universal e igualitário e criando as bases legais para o surgimento do **SUS (Sistema Único de Saúde)**.`,
      mnemonic: "💡 Mnemônico: INAMPS = Clube restrito para quem tinha carteira assinada. Art. 196 / SUS = Direito universal para todo cidadão."
    },
    {
      id: "proc_saude_doenca",
      title: "3. O Processo Saúde-Doença",
      content: `Saúde e doença não são estados estanques ou um interruptor de ligar/desligar ("ou você está 100% saudável, ou está doente"), mas sim os polos de um **processo contínuo, dinâmico e multicausal**. 

A Saúde Coletiva rejeita a ideia de que o adoecimento ocorra de forma linear e puramente biológica, reconhecendo que ele resulta das condições materiais de vida, do trabalho, da cultura e do acesso a recursos sociais.

* **Exemplo Prático:** O estresse crônico e a hipertensão de um trabalhador precarizado não surgem por acaso; eles fazem parte de um processo contínuo de desgaste físico e mental condicionado pelas exigências do trabalho e pela insegurança financeira.`,
      mnemonic: "💡 Mnemônico: Saúde e doença não são estados opostos fixos, mas um processo contínuo e multicausal."
    },
    {
      id: "dss_risco",
      title: "4. Fatores de Risco vs. Determinantes Sociais da Saúde (DSS)",
      content: `É fundamental distinguir duas categorias epidemiológicas essenciais:
      * **Fatores de Risco:** Exposições ou características imediatas que aumentam a probabilidade de adoecer. Podem ser *modificáveis* (tabagismo, sedentarismo, dieta inadequada) ou *não modificáveis* (idade avançada, herança genética).
      * **Determinantes Sociais da Saúde (DSS):** As "causas das causas", ou seja, as condições estruturais em que as pessoas nascem, crescem, vivem, trabalham e envelhecem (renda, saneamento básico, habitação, escolaridade, emprego). Os DSS explicam por que determinados grupos sociais acumulam mais fatores de risco.

* **Exemplo Prático:** A obesidade e o colesterol alto de um paciente são fatores de risco individuais. Morar em uma região periférica sem saneamento, sem feiras de alimentos frescos e com alta exposição a ultraprocessados baratos é o Determinante Social que condiciona esse risco.`,
      mnemonic: "💡 Mnemônico: Fator de Risco = O problema imediato no indivíduo. Determinante Social (DSS) = A raiz estrutural na sociedade."
    },
    {
      id: "mod_biomedico",
      title: "5. Modelo Biomédico e a Normatividade de Canguilhem",
      content: `O **Modelo Biomédico tradicional** enxerga o corpo humano como uma máquina puramente mecânica, adotando uma lógica **reducionista e unicausal** (um agente etiológico externo invade o corpo e causa uma lesão isolada, ignorando o contexto social).

Em oposição a isso, o filósofo e médico **Georges Canguilhem** formulou o conceito de **normatividade da vida**: a verdadeira saúde não é a ausência de lesão ou um número estatístico perfeito na média, mas sim a *capacidade do organismo de tolerar crises, adaptar-se ao meio e instituir novas normas de vida* diante das adversidades biológicas e sociais.`,
      mnemonic: "💡 Mnemônico: Biomédico = Corpo como máquina linear. Canguilhem = Saúde é a capacidade de adaptação e criação de novas normas."
    },
    {
      id: "func_critica",
      title: "6. Funcionalismo vs. Teoria Crítica (Bioética de Intervenção)",
      content: `Duas leituras sociológicas interpretam a saúde na sociedade:
      * **Funcionalismo:** Vê a sociedade como um sistema produtivo estável. As desigualdades e conflitos sociais são tratados apenas como "disfunções temporárias" que devem ser ajustadas (ou medicadas) para que o indivíduo retorne logo ao trabalho e o sistema continue produzindo.
      * **Teoria Crítica / Bioética de Intervenção (Volnei Garrafa):** Denuncia que as injustiças e a miséria são produzidas estruturalmente pelo modelo econômico. Defende o combate ativo às desigualdades, com foco prioritário na proteção das **populações vulneráveis do Sul Global**.`,
      mnemonic: "💡 Mnemônico: Funcionalismo = Manter a engrenagem produtiva rodando. Teoria Crítica = Lutar contra as injustiças estruturais."
    },
    {
      id: "auto_org",
      title: "7. Teoria da Auto-organização (Michel Debrun)",
      content: `Michel Debrun classifica as formas de mudança e organização em coletivos:
      * **Auto-organização Primária:** O sistema nasce *do zero* a partir da livre interação entre elementos inicialmente desorganizados (ex: moradores de uma comunidade unem-se espontaneamente para criar um mutirão de saúde e limpeza no bairro).
      * **Auto-organização Secundária:** Um sistema já estabelecido que, por iniciativa interna e autônoma da própria equipe, reorganiza seus fluxos para superar um desafio sem ordens verticais (ex: equipe de uma UBS decide mudar o modo de acolhimento em reunião interna).
      * **Hetero-organização:** A mudança é imposta *de fora para cima* por uma autoridade externa (ex: decreto ou portaria obrigatória do Ministério da Saúde determinando novos protocolos).`,
      mnemonic: "💡 Mnemônico: Primária = Nasce do zero na comunidade; Secundária = Equipe adapta por dentro; Hetero = Imposta de cima para baixo."
    },
    {
      id: "mod_atencao",
      title: "8. Modelos Assistenciais e Níveis de Atenção à Saúde",
      content: `O modelo assistencial derivado do reducionismo biomédico é o **hospitalocêntrico**, focado no tratamento da doença já instalada dentro do hospital. O SUS organiza o cuidado em rede através de três níveis integrados:
      * **Atenção Primária à Saúde (APS):** Unidades Básicas de Saúde (UBS) e Estratégia Saúde da Família. É a **porta de entrada preferencial** do sistema, focada na promoção da saúde, prevenção de agravos e acompanhamento longitudinal no território.
      * **Atenção Secundária:** Ambulatórios de especialidades médicas (cardiologia, ortopedia) e exames de média complexidade.
      * **Atenção Terciária:** Hospitais de grande porte, unidades de terapia intensiva (UTI), cirurgias complexas e transplantes (alta densidade tecnológica).`,
      mnemonic: "💡 Mnemônico: Primária = Porta de entrada e prevenção (UBS). Secundária = Especialistas. Terciária = Alta complexidade e hospitais (UTI)."
    }
  ],

  tree: [
    { id: "sp_sc", title: "1. Saúde Pública vs Coletiva", level: 1, unlocked: true },
    { id: "art_196", title: "2. Reforma Sanitária e Art. 196", level: 1, unlocked: true },
    { id: "proc_saude_doenca", title: "3. O Processo Saúde-Doença", level: 2, unlocked: true },
    { id: "dss_risco", title: "4. Fatores de Risco e DSS", level: 2, unlocked: true },
    { id: "mod_biomedico", title: "5. Modelo Biomédico e Canguilhem", level: 3, unlocked: true },
    { id: "func_critica", title: "6. Funcionalismo vs Teoria Crítica", level: 3, unlocked: true },
    { id: "auto_org", title: "7. Auto-organização (Debrun)", level: 4, unlocked: true },
    { id: "mod_atencao", title: "8. Níveis de Atenção à Saúde", level: 5, unlocked: true }
  ],

  flashcards: [
    { topicId: "sp_sc", category: "Conceitos Base", question: "Qual a diferença central entre Saúde Pública e Saúde Coletiva?", answer: "A Saúde Pública foca no combate imediato aos riscos biológicos; a Saúde Coletiva investiga a determinação social e as desigualdades estruturais." },
    { topicId: "art_196", category: "Legislação", question: "Como era o acesso à saúde pública antes do Art. 196 da CF/1988?", answer: "Excludente e previdenciário (via INAMPS), restrito apenas aos trabalhadores formais com carteira assinada." },
    { topicId: "art_196", category: "Legislação", question: "O que garantiu o Artigo 196 da Constituição Federal de 1988?", answer: "Que a saúde é direito de todos e dever do Estado, criando o fundamento legal do SUS." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "Por que a saúde não deve ser vista como ausência de doença?", answer: "Porque o processo saúde-doença é dinâmico, contínuo e multicausal, condicionado pelas condições reais de vida." },
    { topicId: "dss_risco", category: "Conceitos Base", question: "O que são Determinantes Sociais da Saúde (DSS)?", answer: "As condições estruturais (renda, saneamento, habitação) em que as pessoas vivem e que geram a exposição aos fatores de risco." },
    { topicId: "dss_risco", category: "Fatores de Risco", question: "Como se classificam idade avançada e genética nos fatores de risco?", answer: "Fatores de risco não modificáveis." },
    { topicId: "mod_biomedico", category: "Modelos", question: "O que caracteriza o reducionismo do Modelo Biomédico?", answer: "Enxergar o corpo como uma máquina mecânica e operar sob uma lógica estritamente unicausal e linear." },
    { topicId: "mod_biomedico", category: "Filosofia", question: "O que define a 'normatividade da vida' de Georges Canguilhem?", answer: "A capacidade biológica e social do organismo de adaptar-se e instituir novas normas de funcionamento diante das crises." },
    { topicId: "func_critica", category: "Sociologia", question: "Como o Funcionalismo interpreta os conflitos sociais na saúde?", answer: "Trata-os como simples 'disfunções' temporárias que devem ser ajustadas para manter a ordem e a produtividade do sistema." },
    { topicId: "func_critica", category: "Sociologia", question: "O que defende a Teoria Crítica na saúde?", answer: "O enfrentamento das desigualdades estruturais profundas, priorizando a proteção das populações vulneráveis." },
    { topicId: "auto_org", category: "Sistemas", question: "O que caracteriza a auto-organização primária de Debrun?", answer: "Quando um coletivo ou sistema nasce inteiramente do zero a partir da livre interação entre pessoas." },
    { topicId: "auto_org", category: "Sistemas", question: "Qual a diferença entre auto-organização secundária e hetero-organização?", answer: "A secundária surge por iniciativa autônoma interna da equipe; a hetero-organização é imposta de fora por uma autoridade externa." },
    { topicId: "mod_atencao", category: "Rede de Saúde", question: "Qual é a porta de entrada preferencial e o papel da Atenção Primária?", answer: "As UBSs, atuando na prevenção, promoção da saúde e acompanhamento longitudinal no território." },
    { topicId: "mod_atencao", category: "Rede de Saúde", question: "Onde se encaixam os hospitais de alta complexidade e UTIs no SUS?", answer: "Na Atenção Terciária à Saúde." }
  ]
};