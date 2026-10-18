// =========================================================================
// DADOS TEÓRICOS (dt_epidemiologia.js): TÓPICOS, MAPA MENTAL E FLASHCARDS
// Revisado integralmente para Português do Brasil (PT-BR)
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Com exemplos práticos e Modo Simplificado)
  topics: [
    {
      id: "sp_sc",
      title: "1. Saúde Pública vs. Saúde Coletiva",
      content: `A Saúde Pública foca no controle de epidemias, riscos biológicos e prevenção de doenças por meio de intervenções pontuais e campanhas do Estado. Já a Saúde Coletiva, nascida na América Latina (décadas de 1970 e 1980) com a Reforma Sanitária, entende a saúde como um fenômeno social e histórico profundo. A diferença principal é que a Saúde Pública olha para a biologia e fatores de risco imediatos, enquanto a Saúde Coletiva analisa os determinantes sociais e as desigualdades estruturais.
      
      **Exemplo Prático:** Durante um surto de dengue, a Saúde Pública distribui repelentes e aplica inseticidas (fumacê). A Saúde Coletiva investiga a falta de saneamento básico, a coleta irregular de lixo no bairro e cobra políticas públicas de habitação.
      
      **Modo Simplificado:** A Saúde Pública trata o corpo e o vírus. A Saúde Coletiva trata a sociedade e a desigualdade que causaram a doença.`,
      mnemonic: "💡 Mnemônico: Saúde Pública = Risco/Biologia; Saúde Coletiva = Sociedade/Desigualdade."
    },
    {
      id: "art_196",
      title: "2. Reforma Sanitária e Artigo 196",
      content: `Antes da Constituição de 1988, a saúde no Brasil era gerida pelo INAMPS, operando sob um modelo previdenciário e excludente: apenas trabalhadores formais (com carteira assinada) tinham acesso à assistência médica pública. O restante da população dependia de caridade e filantropia (Santas Casas). O Artigo 196 da CF/1988 rompeu com esse modelo ao afirmar que "a saúde é direito de todos e dever do Estado", criando uma concepção ampliada de saúde e dando origem ao Sistema Único de Saúde (SUS).
      
      **Exemplo Prático:** Antes de 1988, um trabalhador autônomo ou desempregado sem carteira assinada não podia ser atendido nos hospitais do INAMPS. Hoje, com o SUS, ele tem exatamente o mesmo direito de acesso que qualquer trabalhador formal.
      
      **Modo Simplificado:** Antes de 1988 (INAMPS), a saúde era um clube fechado só para quem tinha carteira assinada. Depois de 1988 (Art. 196 / SUS), virou um direito universal para todos.`,
      mnemonic: "💡 Mnemônico: INAMPS = Clube Restrito (Carteira Assinada). Art. 196 = Direito Universal (SUS)."
    },
    {
      id: "proc_saude_doenca",
      title: "3. O Processo Saúde-Doença",
      content: `Saúde e doença não são estados isolados ou estáticos ("ou você está 100% saudável, ou está doente"), mas sim polos de um processo contínuo e dinâmico. A Saúde Coletiva opõe-se ao reducionismo biomédico por entender que esse processo é multicausal. O adoecimento depende diretamente da forma como a sociedade produz, trabalha e distribui riqueza, articulando fatores biológicos, culturais, psíquicos e ambientais.
      
      **Exemplo Prático:** Uma pessoa não desenvolve esgotamento profissional (Burnout) ou hipertensão "do nada". É um processo contínuo que envolve sua predisposição biológica, mas também anos de transporte público lotado, trabalho precarizado, estresse financeiro e falta de lazer.
      
      **Modo Simplificado:** Não existe um interruptor "ligar/desligar" para ficar doente. Adoecer é um caminho (processo) que envolve o seu corpo, a sua mente e as condições de vida ao seu redor.`,
      mnemonic: "💡 Mnemônico: Não é um interruptor estático, é um termostato social e multicausal."
    },
    {
      id: "dss_risco",
      title: "4. Fatores de Risco vs. Determinantes Sociais",
      content: `Fatores de risco são exposições ou características imediatas que aumentam a probabilidade de desenvolver uma doença (ex: tabagismo e sedentarismo — modificáveis; idade e genética — não modificáveis). Já os Determinantes Sociais da Saúde (DSS) são as "causas das causas": as condições estruturais em que as pessoas nascem, crescem, vivem, trabalham e envelhecem (ex: moradia, renda, saneamento, escolaridade). Os DSS explicam por que certos grupos sociais estão muito mais expostos aos fatores de risco.
      
      **Exemplo Prático:** O médico orienta o paciente a melhorar a alimentação porque está com colesterol alto (fator de risco). Porém, o paciente mora em uma periferia sem feiras livres e com baixa renda, onde só consegue comprar alimentos ultraprocessados baratos (Determinante Social).
      
      **Modo Simplificado:** O fator de risco é o problema imediato (ex: fumar ou comer mal). O determinante social é a raiz estrutural do problema (ex: pobreza, falta de educação ou falta de saneamento).`,
      mnemonic: "💡 Mnemônico: O fator de risco é o buraco na rua; o DSS é a falta de investimento no bairro."
    },
    {
      id: "mod_biomedico",
      title: "5. Modelo Biomédico e Críticas (Canguilhem)",
      content: `O modelo biomédico clássico enxerga o corpo humano como uma máquina. Possui uma lógica mecanicista, linear e unicausal (um agente patogênico causa uma lesão orgânica específica). A crítica da Saúde Coletiva aponta que esse modelo reduz o sujeito a um órgão avariado e ignora o contexto social. O filósofo e médico Georges Canguilhem criticou a divisão rígida e meramente estatística entre "normal" e "patológico", propondo o conceito de "normatividade da vida": ter saúde é a capacidade do organismo de se adaptar, tolerar crises e instituir novas normas de vida diante das adversidades.
      
      **Exemplo Prático:** Para a biomedicina estrita, uma pessoa com diabetes crônica é vista apenas como um pâncreas defeituoso fora da média estatística. Para Canguilhem, se essa pessoa reorganiza sua rotina e vive com autonomia e bem-estar, ela estabeleceu uma nova norma saudável de vida.
      
      **Modo Simplificado:** O modelo biomédico foca apenas na peça quebrada da máquina (unicausal). Canguilhem mostra que saúde é a potência do ser vivo de se adaptar e criar novas regras para viver bem.`,
      mnemonic: "💡 Mnemônico: Biomédico = Máquina/Causa Única. Canguilhem = Adaptação/Normatividade da Vida."
    },
    {
      id: "func_critica",
      title: "6. Funcionalismo vs. Teoria Crítica",
      content: `O Funcionalismo enxerga a sociedade como um sistema orgânico produtivo: conflitos e desigualdades sociais são tratados apenas como "disfunções" temporárias que devem ser corrigidas ou medicadas para que o indivíduo volte rapidamente a produzir e o sistema mantenha seu equilíbrio. Em oposição, a Teoria Crítica (como a Bioética de Intervenção de Volnei Garrafa) denuncia que o sistema econômico produz desigualdades estruturais severas. Ela foca nas populações vulneráveis (especialmente do Sul Global / países em desenvolvimento) e luta por equidade, justiça social e acesso universal.
      
      **Exemplo Prático:** Diante de operários exaustos na fábrica, o Funcionalismo receita ansiolíticos para que voltem logo à linha de montagem. A Teoria Crítica questiona a exploração do trabalho, exige redução da jornada e melhores condições salariais.
      
      **Modo Simplificado:** O Funcionalismo quer apenas consertar a engrenagem para a máquina continuar lucrando. A Teoria Crítica quer transformar as regras injustas do jogo em favor dos mais vulneráveis.`,
      mnemonic: "💡 Mnemônico: Funcionalismo = Manter a Máquina funcionando. Teoria Crítica = Lutar por Justiça Social."
    },
    {
      id: "auto_org",
      title: "7. Teoria da Auto-organização (Michel Debrun)",
      content: `Michel Debrun classifica três dinâmicas distintas de organização em sistemas coletivos:
      - **Auto-organização primária:** O sistema nasce do zero a partir da interação livre entre elementos inicialmente soltos (ex: moradores de um bairro unem-se espontaneamente para criar uma horta ou associação comunitária).
      - **Auto-organização secundária:** Um sistema já estruturado que, por iniciativa interna da própria equipe, adapta suas rotinas para superar desafios sem precisar de ordens externas (ex: equipe de uma UBS reorganiza seus fluxos internos para acolher melhor os idosos).
      - **Hetero-organização:** A regra ou mudança vem imposta de fora para dentro por uma autoridade externa (ex: portaria obrigatória emitida pelo Ministério da Saúde).
      
      **Exemplo Prático:** Se o Ministério impõe por decreto, é Hetero-organização. Se a própria equipe do posto de saúde decide mudar a rotina em reunião, é Auto-organização Secundária. Se a comunidade cria um projeto do zero, é Auto-organização Primária.
      
      **Modo Simplificado:** Primária = Criado do zero pela comunidade. Secundária = A própria equipe adapta o serviço por dentro. Hetero = O governo ou chefia externa impõe de cima para baixo.`,
      mnemonic: "💡 Mnemônico: Primária (Nasce do zero), Secundária (Equipe adapta por dentro), Hetero (Imposta de fora)."
    },
    {
      id: "mod_atencao",
      title: "8. Modelos e Níveis de Atenção à Saúde",
      content: `O modelo biomédico tradicional gera uma assistência hospitalocêntrica (focada no hospital e na doença já instalada). Já a Saúde Coletiva organiza o SUS em níveis integrados de atenção em rede:
      - **Atenção Primária à Saúde (APS):** Unidades Básicas de Saúde (UBS) e Estratégia Saúde da Família. É a "porta de entrada" próxima ao território, focada em promoção, prevenção e acompanhamento longitudinal.
      - **Atenção Secundária:** Ambulatórios de especialidades médicas (ex: cardiologia, ortopedia), UPAs e exames de média complexidade.
      - **Atenção Terciária:** Hospitais de grande porte, UTIs, cirurgias complexas, hemodiálise e transplantes (alta densidade tecnológica).
      
      **Exemplo Prático:** Tomar vacina e controlar a pressão no posto do bairro é Atenção Primária. Consultar um oftalmologista no ambulatório é Atenção Secundária. Fazer uma cirurgia cardíaca ou transplante é Atenção Terciária.
      
      **Modo Simplificado:** Primária previne perto de casa (UBS). Secundária atende com especialistas e exames. Terciária realiza procedimentos graves em hospitais de alta complexidade.`,
      mnemonic: "💡 Mnemônico: Primária = Base/Prevenir (UBS). Secundária = Especialistas. Terciária = Topo/Alta Complexidade (UTI/Transplante)."
    }
  ],

  // 2. MAPA MENTAL
  tree: [
    { id: "sp_sc", title: "1. Saúde Pública vs. Coletiva", level: 1, unlocked: true },
    { id: "art_196", title: "2. Direito à Saúde (Art. 196)", level: 1, unlocked: true },
    { id: "proc_saude_doenca", title: "3. O Processo Saúde-Doença", level: 2, unlocked: true },
    { id: "dss_risco", title: "4. Determinantes Sociais e Risco", level: 2, unlocked: true },
    { id: "mod_biomedico", title: "5. Críticas ao Modelo Biomédico", level: 3, unlocked: true },
    { id: "func_critica", title: "6. Funcionalismo vs. Teoria Crítica", level: 3, unlocked: true },
    { id: "auto_org", title: "7. Auto-organização (Debrun)", level: 4, unlocked: true },
    { id: "mod_atencao", title: "8. Níveis de Atenção à Saúde", level: 5, unlocked: true }
  ],

  // 3. FLASHCARDS (19 cartões revisados em PT-BR)
  flashcards: [
    { topicId: "sp_sc", category: "Conceitos Base", question: "Como se diferencia a Saúde Pública clássica da Saúde Coletiva?", answer: "A Saúde Pública foca nos riscos biológicos e no controle de epidemias, enquanto a Saúde Coletiva analisa os determinantes sociais e as desigualdades estruturais." },
    { topicId: "sp_sc", category: "História", question: "Onde e quando nasceu o movimento da Saúde Coletiva?", answer: "Na América Latina (especialmente no Brasil), durante as décadas de 1970 e 1980, impulsionado pela Reforma Sanitária." },
    { topicId: "art_196", category: "Legislação", question: "Qual a importância histórica do Art. 196 da Constituição Federal de 1988?", answer: "Estabeleceu a saúde como direito universal de todos e dever do Estado, criando a base legal do SUS." },
    { topicId: "art_196", category: "História", question: "Antes da Constituição de 1988, quem tinha direito à assistência médica pelo INAMPS?", answer: "Apenas os trabalhadores formais com carteira assinada (modelo previdenciário e excludente)." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "Por que a Saúde Coletiva rejeita a ideia de que saúde é apenas 'ausência de doença'?", answer: "Porque compreende saúde e doença como polos de um processo dinâmico, contínuo e multicausal ligado às condições de vida e trabalho." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "Como o desemprego crônico é interpretado pela Epidemiologia Social?", answer: "Como parte integrante do Processo Saúde-Doença, pois degrada as condições materiais e psíquicas que levam ao adoecimento." },
    { topicId: "dss_risco", category: "Conceitos Base", question: "Qual a diferença entre Fator de Risco e Determinante Social da Saúde (DSS)?", answer: "Fator de risco é a exposição imediata individual (ex: tabagismo); DSS é a condição estrutural ampla que gera a exposição (ex: pobreza, falta de saneamento)." },
    { topicId: "dss_risco", category: "Fatores de Risco", question: "Idade avançada e herança genética são classificados como que tipo de fator de risco?", answer: "Fatores de risco não modificáveis." },
    { topicId: "mod_biomedico", category: "Paradigmas", question: "Por que o Modelo Biomédico tradicional é criticado como 'mecanicista e unicausal'?", answer: "Porque trata o corpo como uma máquina de peças isoladas e foca apenas no agente biológico (patógeno -> lesão), ignorando o meio social." },
    { topicId: "mod_biomedico", category: "Filosofia", question: "O que é a 'normatividade da vida' segundo Georges Canguilhem?", answer: "É a capacidade do ser vivo de se adaptar às adversidades e instituir novas normas de funcionamento, superando a divisão rígida entre normal e patológico." },
    { topicId: "func_critica", category: "Sociologia", question: "Como o Funcionalismo enxerga as desigualdades sociais na saúde?", answer: "Trata as desigualdades apenas como 'disfunções' temporárias que devem ser ajustadas para manter o equilíbrio produtivo do sistema." },
    { topicId: "func_critica", category: "Sociologia", question: "O que defende a Bioética de Intervenção (baseada na Teoria Crítica)?", answer: "O combate ativo às injustiças estruturais e a defesa prioritária das populações vulneráveis do Sul Global." },
    { topicId: "auto_org", category: "Sistemas", question: "Quando moradores se unem do zero para criar uma horta comunitária no bairro, qual conceito de Debrun ocorre?", answer: "Auto-organização Primária." },
    { topicId: "auto_org", category: "Sistemas", question: "O que é Auto-organização Secundária segundo Michel Debrun?", answer: "Quando uma equipe de um sistema já existente adapta autonomamente suas rotinas internas para resolver um problema, sem imposição externa." },
    { topicId: "auto_org", category: "Sistemas", question: "Uma portaria obrigatória emitida pelo Ministério da Saúde para os hospitais ilustra qual conceito?", answer: "Hetero-organização (mudança imposta de fora para dentro)." },
    { topicId: "mod_atencao", category: "Atenção à Saúde", question: "Qual é o papel da Atenção Primária à Saúde (APS)?", answer: "Atuar como porta de entrada do SUS (via UBS), focando em promoção, prevenção e cuidado contínuo no território." },
    { topicId: "mod_atencao", category: "Atenção à Saúde", question: "Quais serviços compõem a Atenção Secundária à Saúde?", answer: "Ambulatórios de especialidades médicas e exames diagnósticos de média complexidade." },
    { topicId: "mod_atencao", category: "Atenção à Saúde", question: "Em qual nível de atenção estão os transplantes, UTIs e cirurgias de alta complexidade?", answer: "Na Atenção Terciária." },
    { topicId: "mod_atencao", category: "Modelos", question: "O que caracteriza um modelo assistencial hospitalocêntrico?", answer: "Um modelo derivado da visão biomédica que concentra os recursos no hospital e na cura da doença já agravada, negligenciando a prevenção." }
  ]
};