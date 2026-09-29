// =========================================================================
// BANCO DE DADOS: EPIDEMIOLOGIA E MODELOS EM SAÚDE COLETIVA
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS
  topics: [
    {
      id: "sp_sc",
      title: "1. Saúde Pública vs. Saúde Coletiva",
      content: `A Saúde Pública foca-se no controlo de epidemias, riscos biológicos e prevenção de doenças através de esforços do Estado[cite: 11]. 
      A Saúde Coletiva nasceu na América Latina (décadas de 70/80) com a Reforma Sanitária, entendendo a saúde como um fenómeno social e histórico[cite: 11]. 
      A diferença principal é que a Saúde Pública olha para a biologia e fatores de risco individuais, enquanto a Saúde Coletiva analisa os determinantes sociais e as desigualdades estruturais[cite: 11].`,
      mnemonic: "💡 Mnemónica: Saúde Pública foca no Risco/Biologia; Saúde Coletiva foca na Sociedade/Desigualdade."
    },
    {
      id: "art_196",
      title: "2. Reforma Sanitária e Artigo 196",
      content: `Antes de 1988, a saúde no Brasil era um modelo previdenciário e excludente gerido pelo INAMPS, atendendo apenas trabalhadores formais[cite: 11]. 
      O Art. 196 da CF/1988 mudou o paradigma, afirmando que a "saúde é direito de todos e dever do Estado"[cite: 11]. 
      Este artigo estabeleceu uma conceção ampliada de saúde, resultando na criação do Sistema Único de Saúde (SUS)[cite: 11].`,
      mnemonic: "💡 Mnemónica: INAMPS = Restrito. Art. 196 = Universal (SUS)."
    },
    {
      id: "proc_saude_doenca",
      title: "3. O Processo Saúde-Doença",
      content: `Saúde e doença não são estados isolados, mas sim pólos de um processo contínuo[cite: 11]. 
      O processo opõe-se ao reducionismo biomédico por ser multicausal, dependendo diretamente da forma como a sociedade produz e distribui riqueza[cite: 10, 11]. 
      Fatores sociais, culturais, ambientais e biológicos misturam-se nesta dinâmica contínua[cite: 11].`,
      mnemonic: "💡 Mnemónica: Não é um interruptor (saudável/doente), é um termóstato social."
    },
    {
      id: "dss_risco",
      title: "4. Fatores de Risco vs. Determinantes Sociais",
      content: `Fatores de risco (modificáveis e não modificáveis) são exposições imediatas que aumentam a probabilidade de doença (ex: tabagismo, idade)[cite: 11]. 
      Os Determinantes Sociais da Saúde (DSS) são as condições estruturais em que as pessoas nascem, vivem e trabalham (ex: moradia, pobreza, educação)[cite: 10, 11]. 
      Os DSS explicam por que certos grupos estão mais expostos aos fatores de risco[cite: 11].`,
      mnemonic: "💡 Mnemónica: O risco é o buraco na rua; o DSS é a falta de investimento no bairro."
    },
    {
      id: "mod_biomedico",
      title: "5. Modelo Biomédico e Críticas",
      content: `O modelo biomédico clássico foca-se na doença como um desajuste orgânico (redução à biologia/célula), possuindo uma lógica linear e unicausal (agente patogénico -> doença)[cite: 10]. 
      A Saúde Coletiva critica este modelo porque ignora a correlação dos fenómenos com a organização política e social[cite: 10]. 
      Georges Canguilhem também o critica, defendendo a superação da dicotomia normal vs. patológico e valorizando a "normatividade da vida"[cite: 10].`,
      mnemonic: "💡 Mnemónica: Biomédico = Causa Única e Linear. Canguilhem = Normatividade e Auto-organização."
    },
    {
      id: "func_critica",
      title: "6. Funcionalismo vs. Teoria Crítica",
      content: `O Funcionalismo vê a sociedade como um organismo, tratando conflitos e desigualdades como "disfunções" a corrigir, priorizando remédios para países ricos[cite: 10]. 
      Em oposição, a Teoria Crítica (ex: Bioética de Volnei Garrafa) foca nas injustiças sociais e nas doenças de populações pobres (Hemisfério Sul), lutando por acesso universal e justiça[cite: 10].`,
      mnemonic: "💡 Mnemónica: Funcionalismo = Manter a Máquina (Lucro). Crítica = Lutar pela Justiça."
    },
    {
      id: "auto_org",
      title: "7. Teoria da Auto-organização",
      content: `Segundo Debrun, existem dinâmicas diferentes num sistema[cite: 10]:
      - Auto-organização primária: O sistema nasce do zero a partir de interações (ex: mutirão do bairro)[cite: 10].
      - Auto-organização secundária: O sistema já existente adapta-se por dentro (ex: equipa médica cria grupos de caminhada para idosos)[cite: 10].
      - Hetero-organização: A mudança vem imposta de fora (ex: portaria do Ministério da Saúde)[cite: 10].`,
      mnemonic: "💡 Mnemónica: Primária (Nasce), Secundária (Adapta-se), Hetero (Imposta)."
    },
    {
      id: "mod_atencao",
      title: "8. Modelos de Atenção",
      content: `Atenção Primária (UBS): Foco na promoção e prevenção perto da comunidade[cite: 10]. 
      Atenção Secundária: Ambulatórios e especialidades[cite: 10]. 
      Atenção Terciária: Alta complexidade, tecnologia avançada e hospitais[cite: 10]. 
      Modelos biomédicos geram atenção hospitalocêntrica; uma visão de Saúde Coletiva gera atenção territorial e em rede[cite: 10, 11].`,
      mnemonic: "💡 Mnemónica: Primária = Base/Prevenir. Terciária = Topo/Curar."
    }
  ],

  // 2. MAPA MENTAL
  tree: [
    { id: "sp_sc", title: "Saúde Pública e Coletiva", level: 1, unlocked: true },
    { id: "art_196", title: "Direito à Saúde (Art. 196)", level: 1, unlocked: true },
    { id: "proc_saude_doenca", title: "O Processo Saúde-Doença", level: 2, unlocked: true },
    { id: "dss_risco", title: "Determinantes Sociais e Risco", level: 2, unlocked: true },
    { id: "mod_biomedico", title: "Críticas ao Biomédico", level: 3, unlocked: true },
    { id: "func_critica", title: "Perspetivas: Funcionalismo e Crítica", level: 3, unlocked: true },
    { id: "auto_org", title: "Auto-organização (Debrun)", level: 4, unlocked: true },
    { id: "mod_atencao", title: "Modelos de Atenção", level: 5, unlocked: true }
  ],

  // 3. FLASHCARDS
  flashcards: [
    { topicId: "sp_sc", category: "Conceitos Base", question: "Como se distingue a Saúde Pública da Saúde Coletiva?", answer: "A Saúde Pública foca nos riscos biológicos e biologia, enquanto a Coletiva foca nos determinantes sociais e desigualdades[cite: 11]." },
    { topicId: "art_196", category: "Legislação", question: "O que determinou o Art. 196 da Constituição Federal de 1988?", answer: "Estabeleceu a saúde como um direito universal de todos e dever do Estado, criando as bases para o SUS[cite: 11]." },
    { topicId: "art_196", category: "História", question: "Antes da CF/1988, quem tinha direito à assistência médica pública (INAMPS) no Brasil?", answer: "Apenas os trabalhadores formais com carteira assinada (modelo previdenciário e excludente)[cite: 11]." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "Como a Saúde Coletiva enxerga a relação entre saúde e doença?", answer: "Como dois pólos de um mesmo processo dinâmico e multicausal, e não como estados isolados[cite: 11]." },
    { topicId: "dss_risco", category: "Conceitos Base", question: "Qual a diferença entre Fator de Risco e Determinante Social (DSS)?", answer: "Fator de risco é a exposição individual (ex: sedentarismo); DSS são as condições estruturais amplas que geram a exposição (ex: pobreza)[cite: 11]." },
    { topicId: "mod_biomedico", category: "Paradigmas", question: "Quais as principais características lógicas do Modelo Biomédico?", answer: "Reducionismo, foco no patogénio orgânico e uma lógica unicausal e linear[cite: 10]." },
    { topicId: "mod_biomedico", category: "Filosofia", question: "Qual a visão de Georges Canguilhem sobre a saúde?", answer: "Criticou o modelo unicausal e propôs a 'normatividade da vida', onde o organismo cria novas normas de auto-organização[cite: 10]." },
    { topicId: "func_critica", category: "Sociologia", question: "Como o Funcionalismo lida com os conflitos sociais na saúde?", answer: "Trata as desigualdades apenas como 'disfunções' a serem corrigidas para manter o equilíbrio do sistema[cite: 10]." },
    { topicId: "func_critica", category: "Sociologia", question: "Qual o foco da Teoria Crítica (ex: Bioética de Intervenção de Volnei Garrafa)?", answer: "Foca nas injustiças estruturais e nas doenças negligenciadas das populações pobres do Sul global[cite: 10]." },
    { topicId: "auto_org", category: "Sistemas", question: "O que é Auto-organização Secundária segundo Debrun?", answer: "Quando um sistema já existente altera as suas rotinas internas para se adaptar, sem imposição externa[cite: 10]." },
    { topicId: "auto_org", category: "Sistemas", question: "Uma portaria do Ministério da Saúde que obriga à adoção de um protocolo é exemplo de quê?", answer: "Hetero-organização, pois a mudança vem de fora do sistema local[cite: 10]." },
    { topicId: "mod_atencao", category: "Atenção em Saúde", question: "Qual o foco da Atenção Primária à Saúde (APS)?", answer: "A promoção, prevenção e cuidado contínuo perto da comunidade (ex: UBS)[cite: 10]." },
    { topicId: "mod_atencao", category: "Atenção em Saúde", question: "Onde se inserem as cirurgias de alta complexidade e UTI?", answer: "No nível de Atenção Terciária[cite: 10]." },
    { topicId: "sp_sc", category: "História", question: "De onde surgiu a Saúde Coletiva?", answer: "Originou-se no Brasil e na América Latina (anos 70 e 80) em paralelo ao Movimento da Reforma Sanitária[cite: 11]." },
    { topicId: "dss_risco", category: "Fatores de Risco", question: "Idade e genética são classificados como que tipo de fator de risco?", answer: "Fatores de risco não modificáveis[cite: 11]." }
  ],

  // 4. QUIZ
  quiz: [
    { 
      topicId: "art_196", 
      question: "No período anterior à Constituição Federal de 1988, a assistência médica pública no Brasil caracterizava-se por ser:", 
      hint: "Pense no INAMPS e em quem possuía os direitos.", 
      options: [
        "Universal e focada na promoção da saúde territorial[cite: 11].", 
        "Previdenciária e excludente, focada apenas nos trabalhadores com carteira assinada[cite: 11].", 
        "Inteiramente fundamentada na Teoria Crítica dos Determinantes Sociais[cite: 10].", 
        "Descentralizada através do Sistema Único de Saúde, abrangendo as áreas rurais[cite: 11]."
      ], 
      correct: 1 
    },
    { 
      topicId: "sp_sc", 
      question: "Ao contrário da Saúde Pública clássica, o campo da Saúde Coletiva:", 
      hint: "Lembre-se da origem da Reforma Sanitária Latino-Americana.", 
      options: [
        "Foca-se exclusivamente na redução do agente patogénico e vacinação[cite: 10].", 
        "É um campo de origem europeia focado no paradigma hospitalocêntrico[cite: 11].", 
        "Entende a doença como um problema meramente de desajuste orgânico e linear[cite: 10].", 
        "Compreende o adoecimento como um fenómeno social e histórico, abordando as desigualdades estruturais[cite: 11]."
      ], 
      correct: 3 
    },
    { 
      topicId: "dss_risco", 
      question: "Um posto de saúde identifica uma alta taxa de tabagismo. A equipa decide focar as ações na falta de acesso a educação e lazer do bairro como raiz do vício. Essa equipa atua focada em:", 
      hint: "Eles foram à base do problema estrutural.", 
      options: [
        "Fatores de risco não modificáveis[cite: 11].", 
        "Determinantes Sociais da Saúde (DSS)[cite: 11].", 
        "Hetero-organização do sistema imunológico[cite: 10].", 
        "Determinismo genético unicausal[cite: 10]."
      ], 
      correct: 1 
    },
    { 
      topicId: "mod_biomedico", 
      question: "A crítica principal tecida a partir da segunda metade do século XX (como a de Foucault e Canguilhem) contra o Modelo Biomédico incidiu sobre:", 
      hint: "Como esse modelo tradicional vê a causalidade?", 
      options: [
        "O seu carácter holístico e transdisciplinar no trato de epidemias[cite: 10].", 
        "A incapacidade de gerar medicação efetiva contra a dor e infeções crónicas[cite: 10].", 
        "O seu reducionismo biológico, linearidade e lógica unicausal[cite: 10].", 
        "O seu forte foco nas injustiças estruturais do Hemisfério Sul[cite: 10]."
      ], 
      correct: 2 
    },
    { 
      topicId: "func_critica", 
      question: "Na visão do Funcionalismo sobre a sociedade e a saúde, os conflitos e desigualdades socioeconómicas são abordados como:", 
      hint: "Eles priorizam a funcionalidade da 'máquina'.", 
      options: [
        "Problemas inatos resolvidos por Auto-organização primária comunitária[cite: 10].", 
        "Injustiças estruturais intoleráveis (Bioética de intervenção)[cite: 10].", 
        "Fatores modificáveis essenciais para o acesso universal à saúde[cite: 10].", 
        "'Disfunções' a serem corrigidas para manter o equilíbrio produtivo[cite: 10]."
      ], 
      correct: 3 
    },
    { 
      topicId: "auto_org", 
      question: "Quando uma equipa multiprofissional numa Unidade Básica de Saúde decide mudar a sua organização interna ao debater soluções próprias para um problema crónico dos utentes, ocorre:", 
      hint: "O sistema de saúde já existia, mas readaptou-se autonomamente.", 
      options: [
        "Transdisciplinaridade de agentes biológicos[cite: 10].", 
        "Auto-organização secundária[cite: 10].", 
        "Hetero-organização[cite: 10].", 
        "Auto-organização primária[cite: 10]."
      ], 
      correct: 1 
    },
    { 
      topicId: "mod_atencao", 
      question: "Sobre os níveis dos Modelos de Atenção, a Atenção Terciária dedica-se essencialmente a:", 
      hint: "Qual serviço possui a tecnologia mais densa e complexa?", 
      options: [
        "Promoção e prevenção primária do cidadão através da vacinação[cite: 10].", 
        "Cuidados especializados em ambulatórios comunitários[cite: 10].", 
        "Alta complexidade, tecnologia avançada e suporte hospitalar profundo, como transplantes[cite: 10].", 
        "Abordagem intersetorial em escolas e rodas de conversa no bairro[cite: 11]."
      ], 
      correct: 2 
    }
  ]
};
