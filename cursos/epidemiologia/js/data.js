// =========================================================================
// BANCO DE DADOS: EPIDEMIOLOGIA E MODELOS EM SAÚDE COLETIVA
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Expandidos, com exemplos e Modo Simplificado)
  topics: [
    {
      id: "sp_sc",
      title: "1. Saúde Pública vs. Saúde Coletiva",
      content: `A Saúde Pública foca-se no controlo de epidemias, riscos biológicos e prevenção de doenças através de intervenções pontuais e campanhas do Estado. Já a Saúde Coletiva, nascida na América Latina (anos 70/80) com a Reforma Sanitária, entende a saúde como um fenómeno social e histórico profundo. A diferença principal é que a Saúde Pública olha para a biologia e fatores de risco, enquanto a Saúde Coletiva analisa os determinantes sociais e as desigualdades estruturais.
      
      **Exemplo Prático:** Durante um surto de dengue, a Saúde Pública distribui repelentes e inseticidas. A Saúde Coletiva investiga a falta de saneamento básico, a recolha de lixo no bairro e cobra políticas habitacionais.
      
      **Modo Simplificado:** A Saúde Pública trata o corpo e o vírus. A Saúde Coletiva trata a sociedade e a desigualdade que causaram a doença.`,
      mnemonic: "💡 Mnemónica: Saúde Pública = Risco/Biologia; Saúde Coletiva = Sociedade/Desigualdade."
    },
    {
      id: "art_196",
      title: "2. Reforma Sanitária e Artigo 196",
      content: `Antes da Constituição de 1988, a saúde no Brasil era gerida pelo INAMPS, operando sob um modelo previdenciário e excludente: apenas trabalhadores formais (com carteira assinada) tinham acesso à assistência médica pública. Os restantes dependiam de filantropia. O Artigo 196 da CF/1988 rompeu com isso ao afirmar que "a saúde é direito de todos e dever do Estado", criando as bases universais para o Sistema Único de Saúde (SUS).
      
      **Exemplo Prático:** Antes, um vendedor ambulante sem carteira assinada não podia ir ao médico do INAMPS. Hoje, com o SUS, ele tem o mesmo direito de acesso que um funcionário público.
      
      **Modo Simplificado:** Antes de 1988 (INAMPS), a saúde era um clube fechado só para quem tinha emprego formal. Depois de 1988 (SUS), virou um direito universal para todos.`,
      mnemonic: "💡 Mnemónica: INAMPS = Clube Restrito. Art. 196 = Saúde Universal (SUS)."
    },
    {
      id: "proc_saude_doenca",
      title: "3. O Processo Saúde-Doença",
      content: `Saúde e doença não são estados isolados ("ou estás saudável, ou estás doente"), mas sim pólos de um processo contínuo e dinâmico. A Saúde Coletiva opõe-se ao reducionismo biomédico por entender que este processo é multicausal. O adoecimento depende da forma como a sociedade produz, trabalha e distribui riqueza, misturando fatores biológicos, culturais e ambientais.
      
      **Exemplo Prático:** Uma pessoa não fica com depressão "de repente". É um processo que envolve a genética dela, mas também anos de trabalho exaustivo, problemas financeiros e falta de acesso a lazer.
      
      **Modo Simplificado:** Não existe um botão "ligar/desligar" para ficar doente. Ficar doente é um caminho (processo) que envolve o seu corpo, a sua mente e as condições do mundo à sua volta.`,
      mnemonic: "💡 Mnemónica: Não é um interruptor, é um processo dinâmico multicausal."
    },
    {
      id: "dss_risco",
      title: "4. Fatores de Risco vs. Determinantes Sociais",
      content: `Fatores de risco são exposições imediatas que aumentam a probabilidade de doença (ex: fumo, sedentarismo - modificáveis; idade, genética - não modificáveis). Os Determinantes Sociais da Saúde (DSS) são as "causas das causas": as condições estruturais em que as pessoas nascem, crescem, vivem e trabalham (ex: moradia, pobreza, educação).
      
      **Exemplo Prático:** O médico diz ao paciente que ele precisa comer melhor porque tem colesterol alto (fator de risco). Mas o paciente vive numa zona pobre onde só consegue comprar comida ultraprocessada barata (Determinante Social).
      
      **Modo Simplificado:** O fator de risco é o problema imediato (ex: fumar). O determinante social é a raiz do problema (ex: stress por falta de dinheiro que leva a fumar).`,
      mnemonic: "💡 Mnemónica: O risco é o buraco na rua; o DSS é a falta de investimento na cidade."
    },
    {
      id: "mod_biomedico",
      title: "5. Modelo Biomédico e Críticas (Canguilhem)",
      content: `O modelo biomédico clássico enxerga o corpo como uma máquina. Ele tem uma lógica linear e unicausal (uma bactéria causa uma infeção). A crítica da Saúde Coletiva é que ele reduz o doente a um órgão avariado. O filósofo Georges Canguilhem criticou a divisão rígida entre "normal" e "patológico", introduzindo a "normatividade da vida": a saúde é a capacidade do organismo se adaptar e criar novas normas de vida perante adversidades.
      
      **Exemplo Prático:** Para a medicina clássica, um doente crónico está apenas "estragado". Para Canguilhem, se o doente adapta a sua rotina e encontra bem-estar mesmo com a doença, ele encontrou uma nova norma de saúde.
      
      **Modo Simplificado:** O modelo biomédico foca apenas na peça estragada da máquina (unicausal). Canguilhem diz que a saúde é a força do corpo para se adaptar aos problemas.`,
      mnemonic: "💡 Mnemónica: Biomédico = Máquina/Causa Única. Canguilhem = Adaptação/Normatividade."
    },
    {
      id: "func_critica",
      title: "6. Funcionalismo vs. Teoria Crítica",
      content: `O Funcionalismo vê a sociedade como um organismo produtivo. As desigualdades e doenças são tratadas apenas como "disfunções" temporárias a serem medicadas para a pessoa voltar rapidamente a produzir. Em oposição, a Teoria Crítica (como a Bioética de Intervenção de Volnei Garrafa) afirma que o sistema é propositadamente desigual. Ela foca nas injustiças sociais do Sul Global (países pobres) e luta ativamente por direitos humanos universais, em vez de apenas "ajustar" a máquina.
      
      **Exemplo Prático:** Perante trabalhadores exaustos, o funcionalismo receita calmantes para que voltem à fábrica. A Teoria Crítica exige redução da carga horária e melhores salários.
      
      **Modo Simplificado:** Funcionalismo quer consertar a engrenagem para a sociedade lucrar. Teoria Crítica quer mudar as regras do jogo para haver justiça social.`,
      mnemonic: "💡 Mnemónica: Funcionalismo = Manter a Máquina. Teoria Crítica = Lutar por Justiça."
    },
    {
      id: "auto_org",
      title: "7. Teoria da Auto-organização (Debrun)",
      content: `Michel Debrun mapeou três dinâmicas em sistemas sociais:
      - Auto-organização primária: Nasce do zero a partir de interações (ex: moradores limpam um terreno e criam um posto comunitário).
      - Auto-organização secundária: Um sistema já existente que se readapta por iniciativa própria (ex: equipa médica muda a escala para reduzir filas).
      - Hetero-organização: A mudança vem imposta de fora (ex: Ministério da Saúde obriga a usar um novo sistema de computador).
      
      **Exemplo Prático:** Se o chefe manda, é Hetero. Se a equipa decide entre si, é Secundária. Se o povo cria do nada, é Primária.
      
      **Modo Simplificado:** Primária = Criado do zero pelo povo. Secundária = A própria equipa muda a rotina. Hetero = O governo (ou o chefe) impõe de cima para baixo.`,
      mnemonic: "💡 Mnemónica: Primária (Nasce), Secundária (Adapta-se), Hetero (Imposta de fora)."
    },
    {
      id: "mod_atencao",
      title: "8. Modelos de Atenção em Saúde",
      content: `O modelo biomédico tradicional é hospitalocêntrico (tudo gira à volta do hospital e da doença grave). A Saúde Coletiva defende um cuidado em rede:
      - Atenção Primária: Postos de saúde (UBS), perto de casa. Foco na promoção e prevenção.
      - Atenção Secundária: Ambulatórios, médicos especialistas e exames.
      - Atenção Terciária: Hospitais de alta complexidade, cirurgias graves e tecnologia avançada.
      
      **Exemplo Prático:** Fazer a vacina é Primária. Ir ao cardiologista é Secundária. Fazer um transplante de coração é Terciária.
      
      **Modo Simplificado:** Primária previne na base (postos). Secundária trata nos especialistas. Terciária cura as coisas graves nos hospitais.`,
      mnemonic: "💡 Mnemónica: Primária = Base/Prevenir. Terciária = Topo/Alta Complexidade."
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

  // 3. FLASHCARDS (Atualizados para cobrir as 32 perguntas)
  flashcards: [
    { topicId: "sp_sc", category: "Conceitos Base", question: "Como se distingue a Saúde Pública da Saúde Coletiva?", answer: "A Saúde Pública foca nos riscos biológicos e biologia, enquanto a Coletiva foca nos determinantes sociais e desigualdades." },
    { topicId: "sp_sc", category: "História", question: "Onde e quando nasceu a Saúde Coletiva?", answer: "Na América Latina, durante as décadas de 70 e 80, impulsionada pela Reforma Sanitária." },
    { topicId: "art_196", category: "Legislação", question: "Qual a importância do Art. 196 da Constituição Federal de 1988?", answer: "Estabeleceu a saúde como um direito universal de todos e dever do Estado, sendo a base do SUS." },
    { topicId: "art_196", category: "História", question: "Antes da CF/1988, como operava o INAMPS?", answer: "Era um modelo previdenciário excludente, que atendia apenas os trabalhadores formais com carteira assinada." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "Por que a Saúde Coletiva rejeita a ideia de que saúde é apenas 'ausência de doença'?", answer: "Porque entende que saúde e doença são pólos de um processo contínuo e multicausal gerado pelas condições de vida e trabalho." },
    { topicId: "proc_saude_doenca", category: "Teoria", question: "O desemprego deve ser analisado sob que ótica epidemiológica?", answer: "Como parte integrante do Processo Saúde-Doença, pois afeta as condições materiais e psíquicas que levam ao adoecimento." },
    { topicId: "dss_risco", category: "Conceitos Base", question: "Qual a diferença entre Fator de Risco e Determinante Social da Saúde (DSS)?", answer: "Risco é a exposição imediata (ex: tabagismo). DSS é a condição estrutural que gera essa exposição (ex: pobreza, falta de escolaridade)." },
    { topicId: "dss_risco", category: "Conceitos Base", question: "Idade e genética são classificados como...", answer: "Fatores de risco não modificáveis." },
    { topicId: "mod_biomedico", category: "Paradigmas", question: "Por que o Modelo Biomédico é criticado como 'mecanicista'?", answer: "Porque enxerga o corpo como uma máquina de peças isoladas e possui uma lógica unicausal (causa única -> efeito único)." },
    { topicId: "mod_biomedico", category: "Filosofia", question: "O que é a 'normatividade da vida' segundo Georges Canguilhem?", answer: "A capacidade do organismo de criar novas normas e readaptar-se perante os desafios e doenças, superando o reducionismo biomédico." },
    { topicId: "func_critica", category: "Sociologia", question: "Como o Funcionalismo trata as desigualdades socioeconómicas na saúde?", answer: "Como meras 'disfunções' temporárias a serem corrigidas superficialmente para manter o sistema produtivo a funcionar." },
    { topicId: "func_critica", category: "Sociologia", question: "O que defende a Bioética de Intervenção (Teoria Crítica)?", answer: "Combate ativamente as injustiças estruturais propositadas, focando na defesa das populações vulneráveis do Sul Global." },
    { topicId: "auto_org", category: "Sistemas", question: "Se moradores criam espontaneamente do zero uma horta comunitária, isto é um exemplo de...", answer: "Auto-organização Primária." },
    { topicId: "auto_org", category: "Sistemas", question: "O que é Auto-organização Secundária?", answer: "Quando uma equipa de um sistema já existente decide, autonomamente por dentro, alterar as suas rotinas para se adaptar." },
    { topicId: "auto_org", category: "Sistemas", question: "Uma lei obrigatória enviada pelo Governo Central para os hospitais ilustra o conceito de...", answer: "Hetero-organização (imposta de fora para dentro)." },
    { topicId: "mod_atencao", category: "Atenção em Saúde", question: "Qual o foco da Atenção Primária à Saúde (APS)?", answer: "Prevenção, promoção da saúde e cuidado contínuo, servindo como porta de entrada próxima à comunidade (ex: UBS)." },
    { topicId: "mod_atencao", category: "Atenção em Saúde", question: "Atenção secundária envolve que tipo de serviços?", answer: "Ambulatórios de especialidades médicas e exames complementares." },
    { topicId: "mod_atencao", category: "Atenção em Saúde", question: "Onde se realizam os transplantes e cirurgias de alta complexidade?", answer: "No nível de Atenção Terciária." },
    { topicId: "mod_atencao", category: "Modelos", question: "O que caracteriza o modelo de atenção biomédico tradicional?", answer: "É altamente fragmentado e hospitalocêntrico (centrado no hospital e na doença)." }
  ],

  // 4. QUIZ (32 Perguntas: 7 Originais + 25 Novas)
  quiz: [
    // --- AS 7 PERGUNTAS ORIGINAIS ---
    { topicId: "art_196", question: "No período anterior à Constituição Federal de 1988, a assistência médica pública no Brasil caracterizava-se por ser:", hint: "Pense no INAMPS e em quem possuía os direitos.", options: ["Universal e focada na promoção da saúde territorial.", "Previdenciária e excludente, focada apenas nos trabalhadores com carteira assinada.", "Inteiramente fundamentada na Teoria Crítica dos Determinantes Sociais.", "Descentralizada através do Sistema Único de Saúde, abrangendo as áreas rurais."], correct: 1 },
    { topicId: "sp_sc", question: "Ao contrário da Saúde Pública clássica, o campo da Saúde Coletiva:", hint: "Lembre-se da origem da Reforma Sanitária Latino-Americana.", options: ["Foca-se exclusivamente na redução do agente patogénico e vacinação.", "É um campo de origem europeia focado no paradigma hospitalocêntrico.", "Entende a doença como um problema meramente de desajuste orgânico e linear.", "Compreende o adoecimento como um fenómeno social e histórico, abordando as desigualdades estruturais."], correct: 3 },
    { topicId: "dss_risco", question: "Um posto de saúde identifica uma alta taxa de tabagismo. A equipa decide focar as ações na falta de acesso a educação e lazer do bairro como raiz do vício. Essa equipa atua focada em:", hint: "Eles foram à base do problema estrutural.", options: ["Fatores de risco não modificáveis.", "Determinantes Sociais da Saúde (DSS).", "Hetero-organização do sistema imunológico.", "Determinismo genético unicausal."], correct: 1 },
    { topicId: "mod_biomedico", question: "A crítica principal tecida a partir da segunda metade do século XX (como a de Foucault e Canguilhem) contra o Modelo Biomédico incidiu sobre:", hint: "Como esse modelo tradicional vê a causalidade?", options: ["O seu carácter holístico e transdisciplinar no trato de epidemias.", "A incapacidade de gerar medicação efetiva contra a dor e infeções crónicas.", "O seu reducionismo biológico, linearidade e lógica unicausal.", "O seu forte foco nas injustiças estruturais do Hemisfério Sul."], correct: 2 },
    { topicId: "func_critica", question: "Na visão do Funcionalismo sobre a sociedade e a saúde, os conflitos e desigualdades socioeconómicas são abordados como:", hint: "Eles priorizam a funcionalidade da 'máquina'.", options: ["Problemas inatos resolvidos por Auto-organização primária comunitária.", "Injustiças estruturais intoleráveis (Bioética de intervenção).", "Fatores modificáveis essenciais para o acesso universal à saúde.", "'Disfunções' a serem corrigidas para manter o equilíbrio produtivo."], correct: 3 },
    { topicId: "auto_org", question: "Quando uma equipa multiprofissional numa Unidade Básica de Saúde decide mudar a sua organização interna ao debater soluções próprias para um problema crónico dos utentes, ocorre:", hint: "O sistema de saúde já existia, mas readaptou-se autonomamente.", options: ["Transdisciplinaridade de agentes biológicos.", "Auto-organização secundária.", "Hetero-organização.", "Auto-organização primária."], correct: 1 },
    { topicId: "mod_atencao", question: "Sobre os níveis dos Modelos de Atenção, a Atenção Terciária dedica-se essencialmente a:", hint: "Qual serviço possui a tecnologia mais densa e complexa?", options: ["Promoção e prevenção primária do cidadão através da vacinação.", "Cuidados especializados em ambulatórios comunitários.", "Alta complexidade, tecnologia avançada e suporte hospitalar profundo, como transplantes.", "Abordagem intersetorial em escolas e rodas de conversa no bairro."], correct: 2 },
    
    // --- AS 25 NOVAS PERGUNTAS DE APROFUNDAMENTO ---
    { topicId: "sp_sc", question: "A Saúde Pública e a Saúde Coletiva diferenciam-se significativamente na sua base de atuação. Em termos de origem, a Saúde Coletiva emergiu fortemente em que contexto geográfico e histórico?", hint: "Pense na década de 70 e 80.", options: ["Europa, durante a Revolução Industrial.", "América Latina, impulsionada pelos movimentos de Reforma Sanitária nas décadas de 70 e 80.", "Estados Unidos, através dos relatórios de Flexner.", "Ásia, focada unicamente na erradicação da varíola."], correct: 1 },
    { topicId: "sp_sc", question: "Se uma intervenção estatal se foca unicamente na distribuição de cloroquina e eliminação física de mosquitos transmissores, está predominantemente a agir sob a lógica da:", hint: "Ação técnica e centrada no biológico.", options: ["Saúde Coletiva.", "Auto-organização primária.", "Teoria Crítica do Sul Global.", "Saúde Pública tradicional."], correct: 3 },
    { topicId: "sp_sc", question: "Por que motivo se diz que a Saúde Coletiva foca-se na determinação social, enquanto a Saúde Pública se foca nos riscos biológicos?", hint: "Riscos vs Determinantes estruturais.", options: ["A Saúde Coletiva analisa como a organização da sociedade condiciona quem vai adoecer, enquanto a Saúde Pública trata do facto biológico consumado.", "A Saúde Coletiva abomina a biologia e proíbe o uso de medicamentos.", "A Saúde Pública é a única responsável pelas cirurgias complexas.", "A Saúde Coletiva ignora as políticas do Estado."], correct: 0 },
    { topicId: "art_196", question: "Antes da criação do Sistema Único de Saúde (SUS), o INAMPS garantia assistência médica com base em qual modelo?", hint: "Dependia de contribuir financeiramente (ter emprego formal).", options: ["Modelo Universal preventivo.", "Modelo Previdenciário (restrito a quem contribuía, trabalhadores formais).", "Modelo Filantrópico estatal para desempregados.", "Modelo Secundário livre."], correct: 1 },
    { topicId: "art_196", question: "O Artigo 196 da Constituição de 1988 foi revolucionário porque definiu legalmente a saúde como:", hint: "A base do SUS.", options: ["Dever exclusivo das famílias.", "Bem de consumo regulado pelo mercado.", "Direito de todos e dever do Estado.", "Responsabilidade partilhada entre hospitais privados."], correct: 2 },
    { topicId: "proc_saude_doenca", question: "O termo 'Processo Saúde-Doença' foi adotado na Saúde Coletiva para substituir a ideia de que a saúde é apenas a ausência de doença. Porquê?", hint: "Nada acontece isoladamente.", options: ["Porque aceita que o adoecimento é unicausal, dependendo só do vírus.", "Porque reconhece que saúde e doença são contínuas, multicausais e determinadas pelas relações sociais.", "Porque as doenças nunca dependem do contexto.", "Porque o modelo biomédico falhou em detetar bactérias."], correct: 1 },
    { topicId: "proc_saude_doenca", question: "Sob a ótica do Processo Saúde-Doença, o desemprego crónico de um paciente deve ser avaliado pelo profissional de saúde como:", hint: "Afeta a base material de vida.", options: ["Uma disfunção biológica tratável com medicação.", "Parte integrante do processo estrutural que gera o adoecimento físico e mental.", "Um fator de risco genético inalterável.", "Uma manifestação do modelo unicausal."], correct: 1 },
    { topicId: "proc_saude_doenca", question: "A transição do modelo do INAMPS para o SUS refletiu, teoricamente, a passagem de uma visão individual curativa para:", hint: "Visão sistémica.", options: ["Adoção dos Determinantes Sociais da Saúde e da universalidade do cuidado.", "Aumento da privatização do sistema base.", "Reforço da visão unicausal nas unidades de saúde.", "O abandono total das vacinações."], correct: 0 },
    { topicId: "dss_risco", question: "Um paciente sofre um infarto. A ficha indica genética propensa a cardiopatias e idade avançada. Como a Epidemiologia classifica estes elementos?", hint: "Não podem ser alterados pelo doente.", options: ["Determinantes sociais macroestruturais.", "Fatores de risco não modificáveis.", "Fatores de risco modificáveis.", "Processos de auto-organização."], correct: 1 },
    { topicId: "dss_risco", question: "O saneamento básico inadequado num município inteiro é classificado preferencialmente como:", hint: "Condição de infraestrutura ampla.", options: ["Fator de Risco Genético.", "Fator biológico intrínseco.", "Determinante Social da Saúde (DSS).", "Disfunção secundária."], correct: 2 },
    { topicId: "dss_risco", question: "Por que intervir nos Determinantes Sociais (DSS) é considerado politicamente mais efetivo a longo prazo que atuar apenas sobre os Fatores de Risco?", hint: "Corta o mal pela raiz.", options: ["Porque os DSS são as causas estruturais profundas que expõem as populações aos fatores de risco.", "Porque fatores de risco não afetam o indivíduo.", "Porque o SUS proíbe atuar sobre fatores de risco.", "Porque os DSS curam imediatamente mutações genéticas."], correct: 0 },
    { topicId: "mod_biomedico", question: "A lógica do Modelo Biomédico é criticada por ser altamente mecanicista. Isto significa que:", hint: "Máquina vs Todo.", options: ["Entende o corpo como uma máquina cujas peças partidas precisam de reparo isolado, ignorando o social.", "Acredita que fatores políticos causam a doença.", "Adota a visão de Canguilhem sobre normatividade.", "Usa a Teoria Crítica no diagnóstico."], correct: 0 },
    { topicId: "mod_biomedico", question: "Para Georges Canguilhem, o conceito autêntico de 'saúde' repousa na ideia de:", hint: "Adaptação perante o ambiente.", options: ["Ausência estatística de bactérias no sangue.", "Estar exatamente na média dos exames laboratoriais, sem desvios.", "Normatividade da vida: a capacidade de criar novas normas e adaptar-se perante os desafios.", "Completa erradicação de qualquer sofrimento físico."], correct: 2 },
    { topicId: "mod_biomedico", question: "No modelo unicausal (tradicional da biomedicina), o adoecimento ocorre porque:", hint: "Lógica simples.", options: ["Um único fator específico ataca o hospedeiro, produzindo um efeito linear.", "O Determinante Social estrutural atinge a comunidade.", "Há falhas generalizadas no INAMPS.", "Ocorre a hetero-organização do ADN."], correct: 0 },
    { topicId: "mod_biomedico", question: "Qual destas frases traduz melhor a perspetiva oposta ao reducionismo biomédico?", hint: "Olhar para além do medicamento.", options: ["'Devemos prescrever logo o antibiótico certo para matar o parasita'.", "'O paciente só precisa de repouso absoluto no leito'.", "'Antes de medicar a insónia, devemos intervir nas condições abusivas de trabalho que o adoecem'.", "'O coração é apenas uma bomba a necessitar de reparo mecânico'."], correct: 2 },
    { topicId: "func_critica", question: "Uma política de saúde que propõe apenas medicar trabalhadores para que regressem rapidamente à linha de montagem, sem questionar as horas excessivas, alinha-se com a visão:", hint: "Manter a engrenagem a funcionar.", options: ["Da Bioética de Intervenção.", "Da Teoria Crítica do Sul Global.", "Do Funcionalismo Sociológico.", "Da Atenção Primária Territorial."], correct: 2 },
    { topicId: "func_critica", question: "A Bioética de Intervenção argumenta que as questões globais de saúde devem focar-se principalmente em:", hint: "Defesa dos oprimidos.", options: ["Garantir patentes farmacêuticas caras nos países europeus.", "Combater ativamente as injustiças sociais e defender as populações vulneráveis do Sul Global.", "Manter as disfunções sociais equilibradas para não afetar o mercado.", "Exigir copagamentos aos utilizadores do SUS."], correct: 1 },
    { topicId: "func_critica", question: "Segundo as críticas da Teoria Crítica, a quem o Funcionalismo tradicional mais serve ao tratar as desigualdades sociais como meras 'disfunções' a corrigir?", hint: "Quem se beneficia de não mudar as regras?", options: ["Às minorias e às populações indígenas do Sul.", "Aos interesses económicos dominantes, garantindo que o sistema de produção lucra sem sobressaltos.", "Exclusivamente aos utentes das UBS periféricas.", "Aos defensores da Reforma Sanitária."], correct: 1 },
    { topicId: "auto_org", question: "Segundo Michel Debrun, quando os moradores de um bairro criam do zero uma associação para combater focos de mosquitos, isso é exemplo de:", hint: "Não havia nada, eles fundaram.", options: ["Auto-organização secundária.", "Hetero-organização governamental.", "Normatividade patológica.", "Auto-organização primária."], correct: 3 },
    { topicId: "auto_org", question: "Um hospital recebe uma portaria com força de lei do Ministério da Saúde que o obriga a mudar a triagem. Para a estrutura do hospital, a mudança ocorreu por:", hint: "Veio de fora para dentro.", options: ["Processo Saúde-Doença natural.", "Auto-organização primária.", "Hetero-organização.", "Auto-organização secundária."], correct: 2 },
    { topicId: "auto_org", question: "Num Centro de Saúde, os médicos notam atrasos nas consultas e, em reunião interna, decidem autonomamente restruturar a escala de trabalho. Este ajuste endógeno representa:", hint: "O centro já existia e ajustou-se por dentro.", options: ["Hetero-organização federal.", "Auto-organização secundária.", "Intervenção funcionalista.", "Determinante Social estrutural."], correct: 1 },
    { topicId: "auto_org", question: "Qual conceito de Debrun explica a resiliência de um posto de saúde face à falta de materiais, através da invenção de novas dinâmicas diárias pela própria equipa de enfermagem?", hint: "Adaptação a partir do interior da instituição.", options: ["Normatividade única do estado patológico.", "Hetero-organização estrita.", "Auto-organização secundária.", "Funcionalismo clássico passivo."], correct: 2 },
    { topicId: "mod_atencao", question: "A fragmentação do cuidado, num modelo onde o paciente é visto deitado num leito à espera que o especialista atue sobre o órgão doente, é o modelo:", hint: "Tudo roda em volta do hospital.", options: ["Territorial e comunitário preventivo.", "Hospitalocêntrico (derivado do modelo biomédico).", "Determinante Social Integrado.", "Universal e focado na equidade."], correct: 1 },
    { topicId: "mod_atencao", question: "No SUS, qual é o nível de atenção concebido para ser a 'porta de entrada' e focado na promoção/prevenção contínua e próxima do território do utente?", hint: "Onde ficam as UBS?", options: ["Atenção Terciária (Hospitais Gerais).", "Atenção Primária à Saúde (APS).", "Atenção Secundária (Centros Cirúrgicos).", "Atenção Previdenciária de Emergência."], correct: 1 },
    { topicId: "mod_atencao", question: "Qual destes serviços está tipicamente classificado na Atenção Secundária à Saúde?", hint: "O nível intermédio.", options: ["Unidade Básica de Saúde (UBS).", "Agentes Comunitários em visita domiciliária.", "Consultas de médicos especialistas (ex: oftalmologia) e exames complementares em ambulatório.", "Transplantes renais numa Unidade de Cuidados Intensivos."], correct: 2 }
  ]
};
