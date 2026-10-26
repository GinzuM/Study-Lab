// =========================================================================
// BANCO DE QUESTÕES E AVALIAÇÃO (q_epidemiologia.js) — Doc's Lab
// 32 Questões reformuladas com explicações cirúrgicas vinculadas ao Grimório
// =========================================================================

const questionsData = {
  quiz: [
    {
      topicId: "art_196",
      question: "No período anterior à Constituição Federal de 1988, a assistência médica pública no Brasil caracterizava-se por ser:",
      hint: "Revise o Tópico 2 sobre o INAMPS e o modelo previdenciário excludente.",
      options: [
        "Universal e focada na promoção territorial.",
        "Previdenciária e excludente, restrita aos trabalhadores formais com carteira assinada (via INAMPS).",
        "Baseada nos Determinantes Sociais da Saúde.",
        "Descentralizada em todas as áreas rurais."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 2, o sistema anterior (INAMPS) era previdenciário e restrito apenas a quem possuía carteira assinada, excluindo os demais cidadãos."
    },
    {
      topicId: "sp_sc",
      question: "Ao contrário da Saúde Pública clássica, o campo da Saúde Coletiva:",
      hint: "Revise o Tópico 1 sobre a Reforma Sanitária e a determinação social.",
      options: [
        "Foca exclusivamente na eliminação biológica de vetores.",
        "É um campo de origem europeia hospitalocêntrica.",
        "Compreende o adoecimento como um fenômeno social, histórico e estrutural.",
        "Rejeita o uso de políticas de Estado."
      ],
      correct: 2,
      explanation: "O Tópico 1 explica que a Saúde Coletiva supera o foco puramente biológico ao analisar o processo saúde-doença como um fenômeno social, histórico e determinado pelas desigualdades."
    },
    {
      topicId: "dss_risco",
      question: "Uma UBS identifica alta incidência de tabagismo e decide focar suas ações na falta de acesso à educação, renda e lazer da comunidade. Essa equipe atua focada em:",
      hint: "Revise o Tópico 4 sobre as 'causas das causas'.",
      options: [
        "Fatores de risco genéticos.",
        "Determinantes Sociais da Saúde (DSS).",
        "Hetero-organização ministerial.",
        "Determinismo unicausal."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 4, as condições estruturais como educação, renda e moradia constituem os Determinantes Sociais da Saúde (DSS)."
    },
    {
      topicId: "mod_biomedico",
      question: "A principal crítica formulada por Canguilhem e Foucault contra o Modelo Biomédico tradicional recaiu sobre:",
      hint: "Revise o Tópico 5 sobre o mecanicismo e a linearidade da máquina.",
      options: [
        "Seu caráter holístico nas epidemias.",
        "A incapacidade de curar infecções.",
        "Seu reducionismo biológico, mecanicismo linear e lógica unicausal.",
        "Seu foco nas injustiças do Sul Global."
      ],
      correct: 2,
      explanation: "O Tópico 5 aponta que a biomedicina sofre de reducionismo biológico e mecanicismo ao tratar o corpo como máquina isolada."
    },
    {
      topicId: "func_critica",
      question: "Na visão do Funcionalismo sobre a sociedade e a saúde, os conflitos e desigualdades socioeconômicas são abordados como:",
      hint: "Revise o Tópico 6 sobre a manutenção da engrenagem produtiva.",
      options: [
        "Problemas resolvidos por auto-organização.",
        "Injustiças estruturais intoleráveis.",
        "Fatores modificáveis essenciais.",
        "'Disfunções' temporárias a serem ajustadas para manter a estabilidade produtiva do sistema."
      ],
      correct: 3,
      explanation: "Conforme o Tópico 6, o Funcionalismo enxerga desigualdades apenas como desajustes temporários que precisam ser corrigidos para o sistema continuar produzindo."
    },
    {
      topicId: "auto_org",
      question: "Quando uma equipe de uma UBS percebe falhas no fluxo e, em reunião interna autônoma, decide redesenhar o atendimento, ocorre:",
      hint: "Revise o Tópico 7 sobre a iniciativa interna da equipe.",
      options: [
        "Transdisciplinaridade de agentes.",
        "Auto-organização secundária.",
        "Hetero-organização vertical.",
        "Auto-organização primária."
      ],
      correct: 1,
      explanation: "O Tópico 7 define a auto-organização secundária como a adaptação autônoma realizada por iniciativa interna da própria equipe de um sistema já estabelecido."
    },
    {
      topicId: "mod_atencao",
      question: "Sobre os níveis de atenção à saúde, a Atenção Terciária dedica-se essencialmente a:",
      hint: "Revise o Tópico 8 sobre transplantes e hospitais de alta complexidade.",
      options: [
        "Promoção e vacinação na UBS.",
        "Consultas ambulatoriais especializadas.",
        "Alta complexidade tecnológica e suporte hospitalar intensivo (UTIs, transplantes).",
        "Rodas de conversa comunitárias."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 8, a Atenção Terciária concentra a alta densidade tecnológica, hospitais de grande porte, UTIs e transplantes."
    },
    {
      topicId: "sp_sc",
      question: "Em termos históricos, o movimento da Saúde Coletiva emergiu na América Latina impulsionado por quê?",
      hint: "Revise o Tópico 1 sobre o contexto das décadas de 70 e 80.",
      options: [
        "Na Europa, durante a Revolução Industrial.",
        "Na América Latina, através da Reforma Sanitária nas décadas de 1970 e 1980.",
        "Nos EUA, pelo Relatório Flexner.",
        "Na Ásia, erradicando a varíola."
      ],
      correct: 1,
      explanation: "O Tópico 1 situa o nascimento da Saúde Coletiva na América Latina durante o movimento da Reforma Sanitária nos anos 70 e 80."
    },
    {
      topicId: "sp_sc",
      question: "Se uma ação estatal foca apenas na aplicação de inseticidas contra o vetor sem tocar no saneamento, ela atua sob a lógica de quê?",
      hint: "Revise o Tópico 1 sobre o foco exclusivo no risco biológico imediato.",
      options: [
        "Saúde Coletiva estrutural.",
        "Auto-organização primária.",
        "Teoria Crítica do Sul Global.",
        "Saúde Pública tradicional (focada no vetor biológico)."
      ],
      correct: 3,
      explanation: "Conforme o Tópico 1, focar apenas no inseticida e no vetor sem questionar a estrutura urbana reflete a atuação da Saúde Pública tradicional."
    },
    {
      topicId: "sp_sc",
      question: "Por que a Saúde Coletiva foca na determinação social enquanto a Saúde Pública clássica foca nos riscos biológicos?",
      hint: "Revise o Tópico 1 sobre as causas estruturais versus o fato imediato.",
      options: [
        "Porque a Saúde Coletiva analisa como a sociedade condiciona quem adoece, enquanto a Saúde Pública atua sobre o fato biológico imediato.",
        "Porque a Saúde Coletiva proíbe remédios.",
        "Porque a Saúde Pública só faz cirurgias.",
        "Porque a Saúde Coletiva ignora políticas."
      ],
      correct: 0,
      explanation: "O Tópico 1 destaca que a Saúde Coletiva investiga as condições sociais que determinam o adoecimento, ao passo que a Saúde Pública intervém no agravo biológico pontual."
    },
    {
      topicId: "art_196",
      question: "Antes do SUS, o INAMPS garantia assistência médica com base em qual modelo?",
      hint: "Revise o Tópico 2 sobre a exigência de carteira assinada.",
      options: [
        "Modelo Universal preventivo.",
        "Modelo Previdenciário restrito aos trabalhadores formais contribuintes.",
        "Modelo Filantrópico estatal para desempregados.",
        "Atenção Primária livre."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 2, o INAMPS operava sob o modelo previdenciário, atendendo apenas quem contribuía formalmente."
    },
    {
      topicId: "art_196",
      question: "O Artigo 196 da Constituição Federal de 1988 foi um marco porque definiu legalmente a saúde como:",
      hint: "Revise o Tópico 2 sobre a frase mais clássica da legislação sanitária.",
      options: [
        "Dever exclusivo das famílias.",
        "Bem de consumo de mercado.",
        "Direito de todos e dever do Estado.",
        "Benefício exclusivo urbano."
      ],
      correct: 2,
      explanation: "O Tópico 2 destaca a formulação exata do Art. 196: saúde como direito universal de todos e dever intransigível do Estado."
    },
    {
      topicId: "proc_saude_doenca",
      question: "O conceito de 'Processo Saúde-Doença' foi adotado para superar a visão estática porque:",
      hint: "Revise o Tópico 3 sobre o caráter dinâmico e multicausal.",
      options: [
        "Assume que a doença tem causa única biológica.",
        "Reconhece que saúde e doença formam um contínuo multicausal determinado pelas relações sociais.",
        "Demonstra que o ambiente não importa.",
        "Substitui o uso do microscópio."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 3, o processo saúde-doença compreende que saúde e doença são polos dinâmicos e multicausais condicionados socialmente."
    },
    {
      topicId: "proc_saude_doenca",
      question: "O desemprego prolongado de um paciente deve ser interpretado pelo profissional de saúde como:",
      hint: "Revise o Tópico 3 sobre as condições materiais de existência.",
      options: [
        "Uma falha puramente biológica tratável só com fármacos.",
        "Parte do processo estrutural que vulnerabiliza e gera adoecimento físico e mental.",
        "Fator genético inalterável.",
        "Manifestação de modelo unicausal."
      ],
      correct: 1,
      explanation: "O Tópico 3 mostra que o desemprego atua como componente estrutural do processo saúde-doença, gerando vulnerabilidade e adoecimento."
    },
    {
      topicId: "proc_saude_doenca",
      question: "A transição histórica do INAMPS para o SUS refletiu, no plano teórico, a passagem para quê?",
      hint: "Revise o Tópico 2 e 3 sobre universalidade e integralidade.",
      options: [
        "O reconhecimento dos Determinantes Sociais da Saúde e da universalidade do cuidado integral.",
        "A privatização da atenção básica.",
        "O reforço da visão unicausal.",
        "O fim das vacinações."
      ],
      correct: 0,
      explanation: "Conforme os Tópicos 2 e 3, a criação do SUS marcou a adoção da universalidade, integralidade e dos Determinantes Sociais da Saúde."
    },
    {
      topicId: "dss_risco",
      question: "Histórico familiar genético para cardiopatias e idade avançada (78 anos) são classificados pela epidemiologia como:",
      hint: "Revise o Tópico 4 sobre fatores que não podem ser modificados.",
      options: [
        "Determinantes macroestruturais.",
        "Fatores de risco não modificáveis.",
        "Fatores de risco modificáveis.",
        "Auto-organização primária."
      ],
      correct: 1,
      explanation: "O Tópico 4 define idade e genética como fatores de risco individuais não modificáveis."
    },
    {
      topicId: "dss_risco",
      question: "A ausência de saneamento básico e água tratada em todo um município periférico é classificada como:",
      hint: "Revise o Tópico 4 sobre as condições estruturais de vida.",
      options: [
        "Fator de risco genético.",
        "Fator biológico intrínseco.",
        "Determinante Social da Saúde (DSS).",
        "Auto-organização secundária."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 4, saneamento, moradia e água tratada compõem os Determinantes Sociais da Saúde."
    },
    {
      topicId: "dss_risco",
      question: "Por que atuar sobre os Determinantes Sociais da Saúde (DSS) é mais transformador do que focar só no fator de risco individual?",
      hint: "Revise o Tópico 4 sobre as 'causas das causas'.",
      options: [
        "Porque os DSS são as condições estruturais profundas que expõem populações inteiras aos riscos.",
        "Porque o tabagismo não causa doenças.",
        "Porque o SUS proíbe educação em saúde.",
        "Porque os DSS alteram o DNA."
      ],
      correct: 0,
      explanation: "O Tópico 4 explica que os DSS atuam nas 'causas das causas', combatendo as estruturas que geram a vulnerabilidade coletiva."
    },
    {
      topicId: "mod_biomedico",
      question: "A lógica mecanicista do Modelo Biomédico tradicional significa que ele:",
      hint: "Revise o Tópico 5 sobre a analogia do corpo com uma máquina.",
      options: [
        "Enxerga o corpo como uma máquina cujas peças defeituosas precisam de reparo isolado, ignorando a vida social.",
        "Sustenta que a economia causa infecções.",
        "Adota a normatividade de Canguilhem.",
        "Baseia-se na Teoria Crítica."
      ],
      correct: 0,
      explanation: "Conforme o Tópico 5, o mecanicismo biomédico reduz o corpo a uma máquina com peças isoladas a serem consertadas."
    },
    {
      topicId: "mod_biomedico",
      question: "Para Georges Canguilhem, o conceito autêntico de 'saúde' fundamenta-se em quê?",
      hint: "Revise o Tópico 5 sobre a capacidade de adaptação e novas normas.",
      options: [
        "Ausência absoluta de microrganismos.",
        "Estar dentro da média estatística laboratorial.",
        "Normatividade da vida: capacidade de enfrentar crises, adaptar-se e criar novas normas de funcionamento.",
        "Erradicação de variações fisiológicas."
      ],
      correct: 2,
      explanation: "O Tópico 5 destaca a definição de Canguilhem: saúde é a potência adaptativa do organismo de instituir novas normas vitais diante das crises."
    },
    {
      topicId: "mod_biomedico",
      question: "No modelo unicausal clássico da biomedicina, o adoecimento ocorre por quê?",
      hint: "Revise o Tópico 5 sobre a relação linear agente-lesão.",
      options: [
        "Um único agente patogênico atinge o hospedeiro, produzindo um efeito patológico linear.",
        "A desigualdade de renda interage com a cultura.",
        "Ocorre falha administrativa previdenciária.",
        "Ocorre hetero-organização celular."
      ],
      correct: 0,
      explanation: "Conforme o Tópico 5, o modelo unicausal postula que um único agente etiológico externo produz de forma linear a doença no hospedeiro."
    },
    {
      topicId: "mod_biomedico",
      question: "Qual alternativa representa uma postura que supera o reducionismo biomédico?",
      hint: "Revise o Tópico 5 e 3 sobre olhar além do sintoma biológico isolado.",
      options: [
        "'Nossa única função é prescrever o antibiótico para matar a bactéria.'",
        "'O paciente é um conjunto de órgãos; basta corrigir o marcador bioquímico.'",
        "'Antes de medicalizar a insônia, precisamos compreender as condições abusivas de trabalho e moradia do paciente.'",
        "'O coração é apenas uma bomba hidráulica isolada das emoções.'"
      ],
      correct: 2,
      explanation: "O Tópico 3 e 5 mostram que superar o reducionismo implica articular o sofrimento biológico às condições sociais e de trabalho reais do sujeito."
    },
    {
      topicId: "func_critica",
      question: "Uma política de saúde ocupacional que apenas medica operários com analgésicos para retornarem rápido à linha de produção alinha-se a quê?",
      hint: "Revise o Tópico 6 sobre manter a engrenagem produtiva funcionando.",
      options: [
        "Bioética de Intervenção.",
        "Teoria Crítica Latino-Americana.",
        "Funcionalismo Sociológico.",
        "Atenção Primária Territorial."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 6, medicar para manter o indivíduo produtivo sem questionar a raiz do problema reflete a ótica do Funcionalismo."
    },
    {
      topicId: "func_critica",
      question: "A Bioética de Intervenção (inspirada na Teoria Crítica) defende que as políticas de saúde devem priorizar:",
      hint: "Revise o Tópico 6 sobre a proteção aos vulneráveis do Sul Global.",
      options: [
        "Patentes farmacêuticas internacionais.",
        "O enfrentamento ativo das injustiças sociais e a defesa das populações vulneráveis.",
        "O ajuste superficial das disfunções para o mercado.",
        "A cobrança de taxas no SUS."
      ],
      correct: 1,
      explanation: "O Tópico 6 aponta que a Teoria Crítica e a Bioética de Intervenção priorizam o combate às injustiças estruturais em prol dos vulneráveis."
    },
    {
      topicId: "func_critica",
      question: "Segundo a Teoria Crítica, a quem o Funcionalismo mais favorece ao tratar desigualdades apenas como 'disfunções' técnicas?",
      hint: "Revise o Tópico 6 sobre a proteção dos interesses econômicos dominantes.",
      options: [
        "Às comunidades periféricas.",
        "Aos interesses econômicos dominantes, mantendo o sistema produtivo sem questionar a raiz da desigualdade.",
        "Exclusivamente aos usuários de UBS.",
        "Aos movimentos da Reforma Sanitária."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 6, tratar desigualdades como falhas técnicas favorece os detentores do poder econômico, pois evita questionar a estrutura do sistema."
    },
    {
      topicId: "auto_org",
      question: "Quando moradores unem-se espontaneamente para criar um mutirão de limpeza contra a dengue, ocorre:",
      hint: "Revise o Tópico 7 sobre nascer do zero na comunidade.",
      options: [
        "Auto-organização secundária.",
        "Hetero-organização governamental.",
        "Normatividade patológica.",
        "Auto-organização primária."
      ],
      correct: 3,
      explanation: "O Tópico 7 define a auto-organização primária como o surgimento espontâneo de organização comunitária nascida do zero."
    },
    {
      topicId: "auto_org",
      question: "Um hospital recebe portaria obrigatória do Ministério da Saúde determinando nova triagem. Para a equipe, a mudança ocorreu por:",
      hint: "Revise o Tópico 7 sobre imposição externa vertical.",
      options: [
        "Processo saúde-doença natural.",
        "Auto-organização primária.",
        "Hetero-organização.",
        "Auto-organização secundária."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 7, portarias governamentais obrigatórias impostas de cima para baixo caracterizam a hetero-organização."
    },
    {
      topicId: "auto_org",
      question: "Qual conceito de Debrun explica a capacidade criativa de uma equipe de UBS que reinventa suas rotinas internas para humanizar o cuidado?",
      hint: "Revise o Tópico 7 sobre adaptação interna autônoma de um sistema pré-existente.",
      options: [
        "Unicausalidade estrita.",
        "Hetero-organização vertical.",
        "Auto-organização secundária.",
        "Funcionalismo passivo."
      ],
      correct: 2,
      explanation: "O Tópico 7 conceitua a auto-organização secundária como a reorganização interna autônoma realizada pela própria equipe de trabalho."
    },
    {
      topicId: "mod_atencao",
      question: "O modelo assistencial em que o cuidado é fragmentado e concentrado quase exclusivamente no hospital é denominado:",
      hint: "Revise o Tópico 8 sobre o foco excessivo no hospital.",
      options: [
        "Territorial preventivo.",
        "Hospitalocêntrico (derivado do modelo biomédico).",
        "Rede de Determinantes Sociais.",
        "Atenção Primária Longitudinal."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 8, o modelo hospitalocêntrico concentra a assistência no hospital e na doença avançada, negligenciando a prevenção na comunidade."
    },
    {
      topicId: "mod_atencao",
      question: "No SUS, qual é o nível concebido para ser a 'porta de entrada' preferencial, focado na prevenção e promoção perto da comunidade?",
      hint: "Revise o Tópico 8 sobre as UBSs e a APS.",
      options: [
        "Atenção Terciária.",
        "Atenção Primária à Saúde (APS).",
        "Atenção Secundária.",
        "Atenção Previdenciária."
      ],
      correct: 1,
      explanation: "O Tópico 8 define a Atenção Primária à Saúde (UBS/ESF) como a principal porta de entrada e base longitudinal do SUS."
    },
    {
      topicId: "mod_atencao",
      question: "Qual dos serviços abaixo é classificado tipicamente na Atenção Secundária à Saúde?",
      hint: "Revise o Tópico 8 sobre o nível intermediário de especialidades e exames.",
      options: [
        "Visita do Agente Comunitário na UBS.",
        "Vacinação infantil no posto.",
        "Consultas com médicos especialistas em ambulatórios e exames de média complexidade.",
        "Transplante cardíaco em UTI."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 8, ambulatórios especializados de média complexidade integram a Atenção Secundária."
    }
  ],
  simulado: []
};