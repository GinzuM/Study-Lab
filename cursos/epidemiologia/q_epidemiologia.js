// =========================================================================
// BANCO DE QUESTÕES E AVALIAÇÃO (q_epidemiologia.js)
// 32 Questões de Múltipla Escolha revisadas em Português do Brasil (PT-BR)
// =========================================================================

const questionsData = {
  quiz: [
    // --- 7 QUESTÕES FUNDAMENTAIS ---
    {
      topicId: "art_196",
      question: "No período anterior à Constituição Federal de 1988, a assistência médica pública no Brasil caracterizava-se por ser:",
      hint: "Pense no INAMPS e em quem possuía direito ao atendimento.",
      options: [
        "Universal e focada na promoção da saúde territorial.",
        "Previdenciária e excludente, restrita aos trabalhadores formais com carteira assinada.",
        "Inteiramente fundamentada na Teoria Crítica dos Determinantes Sociais.",
        "Descentralizada por meio do Sistema Único de Saúde, abrangendo todas as áreas rurais."
      ],
      correct: 1
    },
    {
      topicId: "sp_sc",
      question: "Ao contrário da Saúde Pública clássica, o campo da Saúde Coletiva:",
      hint: "Lembre-se da origem da Reforma Sanitária Latino-Americana.",
      options: [
        "Foca exclusivamente na eliminação do agente patogênico e na vacinação em massa.",
        "É um campo de origem europeia focado no paradigma hospitalocêntrico.",
        "Entende a doença como um problema meramente de desajuste orgânico e linear.",
        "Compreende o adoecimento como um fenômeno social e histórico, abordando as desigualdades estruturais."
      ],
      correct: 3
    },
    {
      topicId: "dss_risco",
      question: "Uma Unidade Básica de Saúde identifica uma alta taxa de tabagismo. A equipe decide focar suas ações na falta de acesso à educação e ao lazer do bairro como raiz do problema. Essa equipe atua focada em:",
      hint: "Eles foram à base estrutural do problema.",
      options: [
        "Fatores de risco não modificáveis.",
        "Determinantes Sociais da Saúde (DSS).",
        "Hetero-organização do sistema imunológico.",
        "Determinismo genético unicausal."
      ],
      correct: 1
    },
    {
      topicId: "mod_biomedico",
      question: "A principal crítica formulada a partir da segunda metade do século XX (como a de Foucault e Canguilhem) contra o Modelo Biomédico recaiu sobre:",
      hint: "Como esse modelo tradicional enxerga a causalidade das doenças?",
      options: [
        "O seu caráter holístico e transdisciplinar no controle de epidemias.",
        "A incapacidade de gerar medicamentos eficazes contra dores e infecções crônicas.",
        "O seu reducionismo biológico, mecanicismo linear e lógica unicausal.",
        "O seu forte foco nas injustiças estruturais do Hemisfério Sul."
      ],
      correct: 2
    },
    {
      topicId: "func_critica",
      question: "Na visão do Funcionalismo sobre a sociedade e a saúde, os conflitos e desigualdades socioeconômicas são abordados como:",
      hint: "Eles priorizam o funcionamento contínuo da 'máquina' social.",
      options: [
        "Problemas inatos resolvidos por auto-organização primária comunitária.",
        "Injustiças estruturais intoleráveis (Bioética de Intervenção).",
        "Fatores modificáveis essenciais para o acesso universal à saúde.",
        "'Disfunções' temporárias a serem corrigidas para manter o equilíbrio produtivo do sistema."
      ],
      correct: 3
    },
    {
      topicId: "auto_org",
      question: "Quando uma equipe multiprofissional em uma Unidade Básica de Saúde decide mudar sua organização interna ao debater soluções próprias para um problema crônico dos usuários, ocorre:",
      hint: "O serviço já existia, mas readaptou-se com autonomia interna.",
      options: [
        "Transdisciplinaridade de agentes biológicos.",
        "Auto-organização secundária.",
        "Hetero-organização.",
        "Auto-organização primária."
      ],
      correct: 1
    },
    {
      topicId: "mod_atencao",
      question: "Sobre os níveis dos Modelos de Atenção à Saúde, a Atenção Terciária dedica-se essencialmente a:",
      hint: "Qual nível concentra os recursos tecnológicos mais densos e hospitalares?",
      options: [
        "Promoção e prevenção primária do cidadão por meio da vacinação.",
        "Consultas especializadas em ambulatórios comunitários.",
        "Alta complexidade, tecnologia avançada e suporte hospitalar intensivo, como transplantes e UTIs.",
        "Abordagem intersetorial em escolas e rodas de conversa no bairro."
      ],
      correct: 2
    },

    // --- 25 QUESTÕES DE APROFUNDAMENTO ---
    {
      topicId: "sp_sc",
      question: "A Saúde Pública e a Saúde Coletiva diferenciam-se significativamente em sua base de atuação. Em termos históricos, a Saúde Coletiva emergiu em qual contexto?",
      hint: "Pense nas décadas de 1970 e 1980.",
      options: [
        "Europa, durante a Revolução Industrial.",
        "América Latina, impulsionada pelos movimentos da Reforma Sanitária nas décadas de 1970 e 1980.",
        "Estados Unidos, a partir do Relatório Flexner.",
        "Ásia, focada unicamente na erradicação da varíola."
      ],
      correct: 1
    },
    {
      topicId: "sp_sc",
      question: "Se uma intervenção estatal foca exclusivamente na aplicação de inseticidas e na eliminação física de mosquitos transmissores, sem discutir o saneamento urbano, ela age predominantemente sob a lógica da:",
      hint: "Ação técnica e centrada no vetor biológico.",
      options: [
        "Saúde Coletiva.",
        "Auto-organização primária.",
        "Teoria Crítica do Sul Global.",
        "Saúde Pública tradicional."
      ],
      correct: 3
    },
    {
      topicId: "sp_sc",
      question: "Por que se afirma que a Saúde Coletiva foca na determinação social, enquanto a Saúde Pública tradicional foca nos riscos biológicos?",
      hint: "Riscos imediatos vs. Determinantes estruturais.",
      options: [
        "Porque a Saúde Coletiva analisa como a organização da sociedade condiciona quem adoece, enquanto a Saúde Pública atua sobre o fato biológico imediato.",
        "Porque a Saúde Coletiva rejeita a biologia e proíbe o uso de medicamentos.",
        "Porque a Saúde Pública é a única responsável pelas cirurgias de alta complexidade.",
        "Porque a Saúde Coletiva ignora as políticas públicas de Estado."
      ],
      correct: 0
    },
    {
      topicId: "art_196",
      question: "Antes da criação do Sistema Único de Saúde (SUS), o INAMPS garantia assistência médica com base em qual modelo?",
      hint: "Dependia de contribuição previdenciária via folha de pagamento.",
      options: [
        "Modelo Universal preventivo.",
        "Modelo Previdenciário (restrito a quem contribuía, ou seja, trabalhadores formais).",
        "Modelo Filantrópico estatal exclusivo para desempregados.",
        "Modelo de Atenção Primária livre."
      ],
      correct: 1
    },
    {
      topicId: "art_196",
      question: "O Artigo 196 da Constituição Federal de 1988 foi um marco histórico porque definiu legalmente a saúde como:",
      hint: "É a frase mais clássica da legislação sanitária brasileira.",
      options: [
        "Dever exclusivo das famílias e das empresas privadas.",
        "Bem de consumo regulado pelo livre mercado.",
        "Direito de todos e dever do Estado.",
        "Benefício previdenciário exclusivo dos contribuintes urbanos."
      ],
      correct: 2
    },
    {
      topicId: "proc_saude_doenca",
      question: "O conceito de 'Processo Saúde-Doença' foi adotado na Saúde Coletiva para superar a ideia de que saúde é apenas ausência de doença. Por quê?",
      hint: "Nada ocorre de forma estática ou isolada.",
      options: [
        "Porque assume que o adoecimento é unicausal, dependendo apenas do vírus.",
        "Porque reconhece que saúde e doença formam um processo contínuo, multicausal e determinado pelas relações sociais.",
        "Porque demonstra que as doenças independem do ambiente.",
        "Porque o modelo biomédico falhou em identificar bactérias no microscópio."
      ],
      correct: 1
    },
    {
      topicId: "proc_saude_doenca",
      question: "Sob a ótica do Processo Saúde-Doença, o desemprego prolongado de um paciente deve ser compreendido pelo profissional de saúde como:",
      hint: "Afeta diretamente as condições materiais e psíquicas de existência.",
      options: [
        "Uma disfunção puramente biológica tratável apenas com psicofármacos.",
        "Parte integrante do processo estrutural que vulnerabiliza e gera adoecimento físico e mental.",
        "Um fator de risco genético inalterável.",
        "Uma manifestação clássica do modelo unicausal."
      ],
      correct: 1
    },
    {
      topicId: "proc_saude_doenca",
      question: "A transição histórica do INAMPS para o SUS refletiu, no campo teórico, a passagem de uma visão individual e meramente curativa para:",
      hint: "Uma visão ampliada de saúde.",
      options: [
        "O reconhecimento dos Determinantes Sociais da Saúde e da universalidade do cuidado integral.",
        "O fortalecimento da privatização da atenção básica.",
        "O reforço da visão unicausal nas Unidades Básicas de Saúde.",
        "O abandono completo das campanhas de vacinação."
      ],
      correct: 0
    },
    {
      topicId: "dss_risco",
      question: "Um paciente sofre um infarto agudo do miocárdio. Seu prontuário aponta histórico familiar genético para cardiopatias e idade avançada (78 anos). Como a Epidemiologia classifica esses dois elementos?",
      hint: "Não podem ser mudados por mudanças no estilo de vida.",
      options: [
        "Determinantes sociais macroestruturais.",
        "Fatores de risco não modificáveis.",
        "Fatores de risco modificáveis.",
        "Processos de auto-organização primária."
      ],
      correct: 1
    },
    {
      topicId: "dss_risco",
      question: "A ausência de saneamento básico e de água tratada em todo um município periférico é classificada como:",
      hint: "Condição estrutural de vida de uma população.",
      options: [
        "Fator de risco genético individual.",
        "Fator biológico intrínseco.",
        "Determinante Social da Saúde (DSS).",
        "Auto-organização secundária."
      ],
      correct: 2
    },
    {
      topicId: "dss_risco",
      question: "Por que intervir sobre os Determinantes Sociais da Saúde (DSS) é considerado mais transformador a longo prazo do que atuar apenas sobre os Fatores de Risco individuais?",
      hint: "Atua sobre as 'causas das causas'.",
      options: [
        "Porque os DSS são as condições estruturais profundas que expõem populações inteiras aos fatores de risco.",
        "Porque fatores de risco como o tabagismo não causam doenças reais.",
        "Porque o SUS proíbe campanhas educativas sobre hábitos individuais.",
        "Porque os DSS alteram imediatamente o DNA hereditário."
      ],
      correct: 0
    },
    {
      topicId: "mod_biomedico",
      question: "A lógica do Modelo Biomédico tradicional é frequentemente criticada por seu caráter mecanicista. Isso significa que esse modelo:",
      hint: "Analogia do corpo humano com uma máquina.",
      options: [
        "Enxerga o corpo como uma máquina cujas peças defeituosas precisam de reparo isolado, desconsiderando a história social do sujeito.",
        "Sustenta que fatores econômicos e políticos são a única causa das infecções.",
        "Adota integralmente a visão de Canguilhem sobre normatividade vital.",
        "Baseia seus diagnósticos na Teoria Crítica Latino-Americana."
      ],
      correct: 0
    },
    {
      topicId: "mod_biomedico",
      question: "Para Georges Canguilhem, o conceito autêntico de 'saúde' fundamenta-se na ideia de:",
      hint: "Capacidade de instituir novas normas perante o meio.",
      options: [
        "Ausência total e estatística de microrganismos no corpo.",
        "Estar estritamente dentro da média matemática dos exames laboratoriais.",
        "Normatividade da vida: a capacidade de enfrentar crises, adaptar-se e criar novas normas de funcionamento.",
        "Erradicação definitiva de qualquer variação fisiológica."
      ],
      correct: 2
    },
    {
      topicId: "mod_biomedico",
      question: "No modelo unicausal clássico da biomedicina, o adoecimento é explicado porque:",
      hint: "Relação linear de causa e efeito.",
      options: [
        "Um único agente específico (ex: bactéria) atinge o hospedeiro, produzindo um efeito patológico linear.",
        "A desigualdade de renda interage com a cultura local.",
        "Ocorre uma falha administrativa no sistema previdenciário.",
        "Ocorre a hetero-organização do DNA celular."
      ],
      correct: 0
    },
    {
      topicId: "mod_biomedico",
      question: "Qual das afirmações abaixo representa melhor uma postura que supera o reducionismo biomédico?",
      hint: "Olhar além do sintoma isolado.",
      options: [
        "'Nossa única função clínica é prescrever o antibiótico correto para eliminar a bactéria'.",
        "'O paciente é um conjunto de órgãos; basta corrigir o marcador bioquímico alterado'.",
        "'Antes de apenas medicalizar a insônia do paciente, precisamos compreender as condições abusivas de trabalho e moradia que tiram o seu sono'.",
        "'O coração funciona apenas como uma bomba hidráulica independente das emoções e da renda'."
      ],
      correct: 2
    },
    {
      topicId: "func_critica",
      question: "Uma política de saúde ocupacional que se limita a medicar trabalhadores com analgésicos e ansiolíticos para que retornem rápido à linha de produção, sem questionar as metas abusivas, alinha-se à visão:",
      hint: "Manter a engrenagem produtiva rodando sem alterar a estrutura.",
      options: [
        "Da Bioética de Intervenção de Volnei Garrafa.",
        "Da Teoria Crítica Latino-Americana.",
        "Do Funcionalismo Sociológico.",
        "Da Atenção Primária Territorial."
      ],
      correct: 2
    },
    {
      topicId: "func_critica",
      question: "A Bioética de Intervenção (inspirada na Teoria Crítica) defende que as políticas de saúde devem priorizar:",
      hint: "Olhar voltado para a equidade no Sul Global.",
      options: [
        "A proteção de patentes farmacêuticas de alto custo dos países ricos.",
        "O enfrentamento ativo das injustiças sociais e a defesa das populações vulneráveis do Sul Global.",
        "O ajuste superficial das disfunções sociais para proteger o livre mercado.",
        "A cobrança de taxas de coparticipação para usuários do SUS."
      ],
      correct: 1
    },
    {
      topicId: "func_critica",
      question: "Segundo a Teoria Crítica, a quem o Funcionalismo tradicional mais favorece ao tratar as desigualdades sociais apenas como 'disfunções' técnicas?",
      hint: "Quem se beneficia quando as regras estruturais não mudam?",
      options: [
        "Às populações periféricas e comunidades tradicionais.",
        "Aos interesses econômicos dominantes, mantendo o sistema produtivo funcionando sem questionar a raiz da desigualdade.",
        "Exclusivamente aos usuários das Unidades Básicas de Saúde.",
        "Aos movimentos populares da Reforma Sanitária."
      ],
      correct: 1
    },
    {
      topicId: "auto_org",
      question: "Segundo Michel Debrun, quando moradores de uma comunidade se reúnem espontaneamente e criam do zero um mutirão permanente de limpeza e prevenção contra a dengue, temos um exemplo de:",
      hint: "Não existia uma organização prévia; ela nasceu da interação dos moradores.",
      options: [
        "Auto-organização secundária.",
        "Hetero-organização governamental.",
        "Normatividade patológica.",
        "Auto-organização primária."
      ],
      correct: 3
    },
    {
      topicId: "auto_org",
      question: "Um hospital municipal recebe uma portaria obrigatória do Ministério da Saúde determinando a mudança imediata nos protocolos de triagem. Para a equipe desse hospital, a mudança ocorreu por:",
      hint: "Foi determinada de fora para dentro.",
      options: [
        "Processo Saúde-Doença natural.",
        "Auto-organização primária.",
        "Hetero-organização.",
        "Auto-organização secundária."
      ],
      correct: 2
    },
    {
      topicId: "auto_org",
      question: "Em uma Unidade Básica de Saúde (UBS), os profissionais percebem demora no acolhimento e, em reunião interna da própria equipe, decidem redesenhar o fluxo de atendimento. Esse ajuste interno autônomo representa:",
      hint: "O sistema já existia e se reorganizou por dentro.",
      options: [
        "Hetero-organização federal.",
        "Auto-organização secundária.",
        "Intervenção funcionalista mecanicista.",
        "Determinante Social macroestrutural."
      ],
      correct: 1
    },
    {
      topicId: "auto_org",
      question: "Qual conceito de Michel Debrun explica a capacidade criativa de uma equipe de enfermagem já formada que reinventa suas práticas diárias para manter o cuidado humanizado diante de novos desafios locais?",
      hint: "Adaptação interna de um sistema previamente constituído.",
      options: [
        "Unicausalidade estrita.",
        "Hetero-organização vertical.",
        "Auto-organização secundária.",
        "Funcionalismo clássico passivo."
      ],
      correct: 2
    },
    {
      topicId: "mod_atencao",
      question: "O modelo assistencial em que o cuidado é fragmentado, focado na doença aguda e concentrado quase exclusivamente dentro do ambiente hospitalar é denominado:",
      hint: "Tudo gira em torno do hospital.",
      options: [
        "Territorial e comunitário preventivo.",
        "Hospitalocêntrico (derivado do modelo biomédico).",
        "Rede de Determinantes Sociais Integrados.",
        "Atenção Primária Longitudinal."
      ],
      correct: 1
    },
    {
      topicId: "mod_atencao",
      question: "No SUS, qual é o nível de atenção concebido para ser a 'porta de entrada' preferencial do cidadão, focado na promoção e prevenção contínua perto do território onde o usuário vive?",
      hint: "É onde atuam as Unidades Básicas de Saúde (UBS).",
      options: [
        "Atenção Terciária (Hospitais de Alta Complexidade).",
        "Atenção Primária à Saúde (APS).",
        "Atenção Secundária (Centros Cirúrgicos Especializados).",
        "Atenção Previdenciária Restrita."
      ],
      correct: 1
    },
    {
      topicId: "mod_atencao",
      question: "Qual dos serviços abaixo é classificado tipicamente na Atenção Secundária à Saúde?",
      hint: "Nível intermediário de especialidades.",
      options: [
        "Visita domiciliar do Agente Comunitário de Saúde da UBS.",
        "Campanha de vacinação infantil no posto de saúde do bairro.",
        "Consultas com médicos especialistas (ex: cardiologista, endocrinologista) e exames complementares em ambulatórios.",
        "Transplante cardíaco e internação em Unidade de Terapia Intensiva (UTI)."
      ],
      correct: 2
    }
  ],

  // Sem simulado neste módulo por enquanto (o app.js ocultará a aba automaticamente)
  simulado: []
};