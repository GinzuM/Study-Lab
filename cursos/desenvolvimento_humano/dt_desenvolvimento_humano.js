// =========================================================================
// cursos/desenvolvimento_humano/dt_desenvolvimento_humano.js
// Base de Dados Teórica, Leituras da Trilha, Grimório e Flashcards
// =========================================================================

window.DT_MODULES = [
  {
    id: 1,
    modulo: "Módulo 1",
    titulo: "Fundamentos, Teorias e Desenvolvimento Pré-Natal",
    icone: "fa-seedling",
    cor: "emerald",
    topicos: [
      {
        subtopico: "1.1 Introdução e Histórico da Psicologia do Desenvolvimento",
        resumo: "O desenvolvimento humano é o estudo científico dos processos sistemáticos de mudança e estabilidade que ocorrem desde a concepção até a morte.",
        explicacao: "A <strong>Psicologia do Desenvolvimento</strong> investiga como e por que os seres humanos mudam ou permanecem iguais ao longo de todo o ciclo vital (perspectiva <strong>lifespan</strong>). Esse processo é dividido didaticamente em três domínios interligados: <strong>físico</strong> (crescimento corporal, cérebro, habilidades motoras e saúde), <strong>cognitivo</strong> (aprendizagem, atenção, memória, linguagem e raciocínio) e <strong>psicossocial</strong> (emoções, personalidade e relações sociais).<br><br>Historicamente, o campo nasceu no final do século XIX focado quase exclusivamente na infância (com biografias de bebês como a de Charles Darwin e os estudos de G. Stanley Hall sobre adolescência). No século XX, a área expandiu-se para incluir a vida adulta e o envelhecimento, consolidando a visão de que o desenvolvimento é <strong>contínuo, multidimensional, multidirecional e plástico</strong> (moldável pela interação entre hereditariedade, ambiente e maturação).",
        pontosChave: [
          "Os 3 domínios do desenvolvimento (físico, cognitivo e psicossocial) são interdependentes.",
          "A perspectiva do ciclo vital (lifespan) entende que o desenvolvimento ocorre da concepção à morte.",
          "Influências normativas (idade e história) e não normativas (eventos inesperados) moldam cada trajetória.",
          "Hereditariedade (natureza) e ambiente (criação) interagem continuamente no processo de maturação."
        ],
        exemplo: "Uma criança com otite recorrente (domínio físico) pode apresentar atraso na aquisição da fala (domínio cognitivo), o que dificulta sua interação com colegas na escola (domínio psicossocial).",
        alerta: "Pegadinha clássica: O desenvolvimento NÃO termina na adolescência ou na vida adulta jovem; na visão contemporânea (lifespan), há ganhos e perdas em todas as fases até a velhice."
      },
      {
        subtopico: "1.2 Principais Teorias do Desenvolvimento e seus Autores",
        resumo: "Cinco grandes perspectivas teóricas explicam o desenvolvimento humano: Psicanalítica, da Aprendizagem, Cognitiva, Contextual e Evolucionista.",
        explicacao: "As teorias organizam como compreendemos o sujeito:<br><br><strong>1. Perspectiva Psicanalítica:</strong> <strong>Sigmund Freud</strong> propôs o desenvolvimento psicossexual (fases oral, anal, fálica, latência e genital) movido por pulsões inconscientes. <strong>Erik Erikson</strong> expandiu essa visão para a <strong>Teoria Psicossocial</strong> em 8 estágios ao longo de toda a vida, cada um marcado por uma crise entre duas tendências (ex.: Confiança vs. Desconfiança).<br><br><strong>2. Perspectiva Cognitiva:</strong> <strong>Jean Piaget</strong> descreveu a construção ativa do conhecimento em 4 estágios (sensório-motor, pré-operatório, operatório concreto e operatório formal) via assimilação, acomodação e equilibração. <strong>Lev Vygotsky</strong> (Teoria Sociocultural) destacou que a aprendizagem ocorre primeiro na interação social e introduziu a <strong>Zona de Desenvolvimento Proximal (ZDP)</strong>.<br><br><strong>3. Perspectiva da Aprendizagem:</strong> Behaviorismo de <strong>Watson e Skinner</strong> (condicionamento clássico e operante) e Teoria Social Cognitiva de <strong>Albert Bandura</strong> (aprendizagem observacional e determinismo recíproco).<br><br><strong>4. Perspectiva Contextual:</strong> <strong>Urie Bronfenbrenner</strong> (Teoria Bioecológica) analisa o indivíduo inserido em sistemas concêntricos: microssistema, mesossistema, exossistema, macrossistema e cronossistema.<br><br><strong>5. Perspectiva Evolucionista:</strong> <strong>John Bowlby</strong> fundamentou a <strong>Teoria do Apego</strong>, mostrando o valor adaptativo do vínculo entre o bebê e o cuidador primário.",
        pontosChave: [
          "Freud foca no desenvolvimento psicossexual (5 fases); Erikson foca no desenvolvimento psicossocial por toda a vida (8 crises).",
          "Piaget prioriza a maturação e os estágios cognitivos universais; Vygotsky prioriza a cultura, a linguagem e a ZDP.",
          "Bandura supera o behaviorismo radical ao incluir a aprendizagem por observação/imitação (modelagem).",
          "Bronfenbrenner organiza o ambiente em 5 níveis ecológicos que vão da família (microssistema) à cultura e ao tempo (macro e cronossistema)."
        ],
        exemplo: "Ao ensinar uma criança a andar de bicicleta segurando o banco até ela equilibrar sozinha, o adulto atua exatamente na Zona de Desenvolvimento Proximal (ZDP) proposta por Vygotsky.",
        alerta: "Não confunda Piaget com Vygotsky: para Piaget, o desenvolvimento precede a aprendizagem; para Vygotsky, a aprendizagem social impulsiona o desenvolvimento."
      },
      {
        subtopico: "1.3 Desenvolvimento Pré-Natal: Aspectos Biológicos",
        resumo: "A gestação dura cerca de 38 a 40 semanas e divide-se em três estágios biológicos críticos: germinal, embrionário e fetal.",
        explicacao: "O desenvolvimento pré-natal segue dois princípios biológicos fundamentais: <strong>cefalocaudal</strong> (da cabeça para os pés) e <strong>proximodistal</strong> (do centro do corpo para as extremidades). Divide-se em três períodos:<br><br><strong>1. Estágio Germinal (concepção a 2 semanas):</strong> Ocorre a fecundação (formação do zigoto), rápida divisão celular e a <strong>nidação</strong> (implantação do blastocisto na parede uterina).<br><strong>2. Estágio Embrionário (2ª a 8ª semana):</strong> Período de <strong>organogênese</strong> — formação rápida dos principais órgãos e sistemas (sistema nervoso, coração, pulmões). Por isso, é o período de <strong>maior vulnerabilidade a teratógenos</strong> (agentes ambientais nocivos como álcool, drogas, radiação, rubéola, zika e medicamentos inadequados) e abortos espontâneos.<br><strong>3. Estágio Fetal (8ª semana até o nascimento):</strong> Caracterizado pelo aparecimento das primeiras células ósseas, crescimento acelerado, refinamento funcional dos órgãos, movimentos fetais, desenvolvimento sensorial (audição e paladar) e acúmulo de gordura subcutânea para regulação térmica pós-parto.",
        pontosChave: [
          "Princípio cefalocaudal (cabeça -> pés) e proximodistal (tronco -> mãos/dedos).",
          "Estágio germinal (0-2 semanas): divisão celular e implantação no útero.",
          "Estágio embrionário (2-8 semanas): formação dos órgãos e maior risco de malformações por teratógenos.",
          "Estágio fetal (8 semanas ao nascimento): crescimento acelerado e maturação dos sistemas."
        ],
        exemplo: "A exposição materna ao álcool durante o primeiro trimestre (estágio embrionário) pode causar a Síndrome Alcoólica Fetal (SAF), gerando alterações faciais e déficits neurológicos permanentes.",
        alerta: "Questão frequente: O período de MAIOR vulnerabilidade a malformações estruturais graves por teratógenos é o estágio EMBRIONÁRIO (2ª a 8ª semana), e não o fetal."
      },
      {
        subtopico: "1.4 Aspectos Psicológicos da Gravidez e do Parto",
        resumo: "A gestação e o parto envolvem intensa reorganização psíquica dos pais, transição identitária e construção do vínculo inicial com o bebê.",
        explicacao: "Psicologicamente, a gravidez não é apenas um evento biológico, mas uma <strong>crise evolutiva normativa</strong> que transforma a identidade da mulher e da família (transição para a parentalidade). Durante os meses de gestação, os pais constroem o <strong>bebê imaginário</strong> (cheio de expectativas e idealizações). No nascimento, ocorre o encontro com o <strong>bebê real</strong>, exigindo uma elaboração psíquica saudável dessa diferença.<br><br>O <strong>parto</strong> (normal ou cesárea) e o ambiente acolhedor (parto humanizado, presença de acompanhante, contato pele a pele na primeira hora) influenciam diretamente o estresse materno, a liberação de ocitocina e o início da amamentação. No <strong>puerpério</strong>, oscilações hormonais e privação de sono podem gerar o <em>baby blues</em> (tristeza puerperal transitória e leve, que remite em até 2 semanas) — que deve ser diferenciado da <strong>depressão pós-parto</strong> (quadro clínico mais intenso e duradouro que exige intervenção profissional).",
        pontosChave: [
          "A gestação demanda a elaboração entre o bebê imaginário (fantasiado) e o bebê real (nascido).",
          "A rede de apoio e o parto humanizado reduzem a ansiedade e fortalecem o vínculo precoce.",
          "Baby blues é passageiro e comum nos primeiros dias pós-parto; depressão pós-parto é persistente e incapacitante.",
          "Winnicott descreveu a 'preocupação materna primária' como o estado de sensibilidade aumentada da mãe ao recém-nascido."
        ],
        exemplo: "Uma puérpera que chora com facilidade no 4º dia após o parto, mas mantém cuidado afetivo com o bebê e melhora na segunda semana, apresenta quadro típico de baby blues.",
        alerta: "Não confunda baby blues com depressão pós-parto ou psicose puerperal. O baby blues é autolimitado e não envolve delírios ou ideação suicida/infanticida."
      }
    ],
    flashcards: [
      { frente: "Quais são os 3 domínios do desenvolvimento humano?", verso: "Físico (corpo/cérebro/saúde), Cognitivo (pensamento/memória/linguagem) e Psicossocial (emoções/personalidade/relações)." },
      { frente: "O que significa a perspectiva 'lifespan' (ciclo vital)?", verso: "Que o desenvolvimento humano é contínuo, multidimensional e ocorre desde a concepção até a morte, com ganhos e perdas em todas as fases." },
      { frente: "Qual a diferença central entre Freud e Erikson?", verso: "Freud propôs 5 fases psicossexuais focadas até a adolescência; Erikson propôs 8 estágios psicossociais ao longo de toda a vida." },
      { frente: "O que é a Zona de Desenvolvimento Proximal (ZDP) de Vygotsky?", verso: "A distância entre o que a criança já consegue fazer sozinha (nível real) e o que consegue fazer com ajuda de alguém mais experiente (nível potencial)." },
      { frente: "Qual estágio pré-natal apresenta maior risco de malformações por teratógenos?", verso: "O estágio embrionário (2ª à 8ª semana), pois é quando ocorre a formação dos principais órgãos (organogênese)." },
      { frente: "Diferencie baby blues de depressão pós-parto.", verso: "O baby blues é uma oscilação emocional leve e transitória nas primeiras duas semanas; a depressão pós-parto é mais grave, duradoura e requer tratamento clínico." }
    ]
  },
  {
    id: 2,
    modulo: "Módulo 2",
    titulo: "Desenvolvimento nas Três Infâncias",
    icone: "fa-child-reaching",
    cor: "amber",
    topicos: [
      {
        subtopico: "2.1 Primeira Infância (0 a 3 anos): Físico, Cognitivo e Psicossocial",
        resumo: "Período de crescimento mais acelerado da vida, marcado pelo estágio sensório-motor, explosão da linguagem e formação do apego.",
        explicacao: "<strong>Desenvolvimento Físico:</strong> Nos primeiros 3 anos, o crescimento corporal e a sinaptogênese cerebral são explosivos. O recém-nascido dispõe de <strong>reflexos primitivos</strong> (sucção, busca, Moro, preensão) que gradualmente dão lugar a marcos motores voluntários (sustentar a cabeça, sentar, engatinhar e andar por volta de 1 ano).<br><br><strong>Desenvolvimento Cognitivo:</strong> Corresponde ao estágio <strong>Sensório-Motor</strong> de Piaget (0 a 2 anos), no qual o bebê conhece o mundo pelos sentidos e ações motoras. A grande conquista cognitiva é a <strong>permanência do objeto</strong> (entender que algo continua existindo mesmo fora de vista). Na linguagem, evolui do choro e balbucio às primeiras palavras (~12 meses) e frases telegráficas (~2 anos).<br><br><strong>Desenvolvimento Psicossocial:</strong> Segundo Erikson, a criança atravessa <strong>Confiança Básica vs. Desconfiança</strong> (0–18 meses) e <strong>Autonomia vs. Vergonha e Dúvida</strong> (18 meses–3 anos). Pela Teoria do Apego (Bowlby e Mary Ainsworth), forma-se o estilo de apego (seguro, inseguro-evitativo, inseguro-ambivalente ou desorganizado), que serve de base segura para explorar o mundo.",
        pontosChave: [
          "Permanência do objeto é a principal aquisição cognitiva do estágio sensório-motor (Piaget).",
          "Apego seguro (Ainsworth/Bowlby) fornece base emocional para exploração e autorregulação.",
          "Crises de Erikson na 1ª infância: Confiança vs. Desconfiança e Autonomia vs. Vergonha/Dúvida.",
          "Marcos motores seguem a ordem cefalocaudal e proximodistal."
        ],
        exemplo: "Um bebê de 10 meses que levanta um pano para procurar o chocalho escondido demonstra que já desenvolveu a noção de permanência do objeto.",
        alerta: "Na Situação Estranha de Mary Ainsworth, o bebê com apego seguro PODE chorar quando a mãe sai, mas se acalma rapidamente quando ela retorna."
      },
      {
        subtopico: "2.2 Segunda Infância (3 a 6 anos): Pré-Escolar",
        resumo: "Fase da função simbólica, do faz de conta, do pensamento pré-operatório e da ampliação da iniciativa social.",
        explicacao: "<strong>Desenvolvimento Físico:</strong> O corpo afina e alonga, o sono se consolida e ocorre grande avanço na <strong>motricidade grossa</strong> (correr, pular) e na <strong>motricidade fina</strong> (desenhar, abotoar, recortar), acompanhado pela definição da <strong>lateralidade</strong> (mão dominante).<br><br><strong>Desenvolvimento Cognitivo:</strong> Estágio <strong>Pré-Operatório</strong> de Piaget (2 a 7 anos). A criança domina a <strong>função simbólica</strong> (linguagem, desenho e brincadeira de faz de conta), mas seu pensamento ainda é limitado por: <strong>egocentrismo cognitivo</strong> (dificuldade de ver a perspectiva do outro), <strong>centração</strong> (focar apenas em um aspecto do problema), <strong>animismo</strong> (dar vida a objetos) e ausência de conservação e reversibilidade. Surge também a <strong>Teoria da Mente</strong> (compreender que outras pessoas têm crenças diferentes das suas).<br><br><strong>Desenvolvimento Psicossocial:</strong> Estágio <strong>Iniciativa vs. Culpa</strong> (Erikson). A criança desenvolve o autoconceito e a identidade de gênero, aprende a negociar regras no brincar cooperativo e é fortemente influenciada pelos <strong>estilos parentais</strong> de Diana Baumrind (autoritativo/democrático, autoritário, permissivo e negligente).",
        pontosChave: [
          "Estágio Pré-Operatório (Piaget): função simbólica forte, mas com egocentrismo, centração e animismo.",
          "O brincar de faz de conta é fundamental para a regulação emocional e o desenvolvimento simbólico.",
          "Crise de Erikson: Iniciativa vs. Culpa.",
          "O estilo parental autoritativo (alto afeto + limites claros) associa-se aos melhores desfechos psicossociais."
        ],
        exemplo: "Ao derramar a mesma quantidade de água de um copo largo para um copo alto e fino, a criança de 4 anos afirma que o copo alto tem mais água (falha na conservação por centração na altura).",
        alerta: "Egocentrismo em Piaget NÃO significa egoísmo moral; significa limitação cognitiva em descentrar o próprio ponto de vista espacial ou mental."
      },
      {
        subtopico: "2.3 Terceira Infância (6 a 11 anos): Físico e Cognitivo",
        resumo: "Crescimento físico mais lento e estável, entrada no ensino fundamental e conquista do pensamento lógico concreto.",
        explicacao: "<strong>Desenvolvimento Físico:</strong> O ritmo de crescimento desacelera em comparação às fases anteriores, mas a força muscular, a coordenação visomotora e a resistência aumentam muito, permitindo esportes com regras e escrita fluente. Ocorre a troca da dentição de leite pela permanente e a poda sináptica no córtex pré-frontal melhora o controle inibitório.<br><br><strong>Desenvolvimento Cognitivo:</strong> Estágio <strong>Operatório Concreto</strong> de Piaget (7 a 11 anos). A criança supera a centração e adquire operações mentais lógicas aplicadas a situações reais/concretas: <strong>conservação</strong> (massa, volume, número), <strong>reversibilidade</strong> (entender que uma ação pode ser desfeita mentalmente), <strong>classificação hierárquica</strong>, <strong>seriação</strong> (ordenar por tamanho) e <strong>inferência transitiva</strong> (se A > B e B > C, então A > C). A memória de trabalho e a metacognição (pensar sobre como aprende) evoluem rapidamente, sustentando a alfabetização e a matemática.",
        pontosChave: [
          "Estágio Operatório Concreto (Piaget): raciocínio lógico sobre objetos reais, mas ainda limitado diante de abstrações puras.",
          "Principais conquistas: conservação, reversibilidade, seriação, classificação e transitividade.",
          "Melhora da atenção seletiva, memória de trabalho e uso consciente de estratégias de memorização.",
          "Crescimento físico contínuo, estável e refinamento das habilidades motoras complexas."
        ],
        exemplo: "Uma criança de 8 anos entende que 5 + 3 = 8 e que, portanto, 8 - 3 = 5 (reversibilidade), e sabe que amassar uma bola de massinha em formato de cobra não muda a quantidade de massa (conservação).",
        alerta: "Na terceira infância a criança já tem lógica, mas ainda precisa de apoio concreto; hipóteses puramente abstratas só se consolidam no operatório formal (adolescência)."
      },
      {
        subtopico: "2.4 Terceira Infância: Desenvolvimento Psicossocial e Moral",
        resumo: "Expansão do mundo social para a escola e o grupo de pares, construção da autoestima e evolução do julgamento moral.",
        explicacao: "No plano psicossocial, a terceira infância corresponde à crise de Erikson <strong>Produtividade (Indústria) vs. Inferioridade</strong>: a criança busca sentir-se competente nas tarefas valorizadas por sua cultura (ler, calcular, jogar em equipe, cumprir combinados). Quando recebe apoio e reconhecimento proporcional ao esforço, desenvolve o senso de competência; quando submetida a críticas excessivas ou fracasso constante, pode internalizar sentimento de inferioridade.<br><br>O <strong>grupo de pares</strong> ganha protagonismo: as amizades passam a exigir reciprocidade e lealdade, funcionando como laboratório de habilidades sociais e empatia. O autoconceito torna-se mais realista e comparativo. No desenvolvimento moral (Piaget e Kohlberg), a criança transita da <strong>moral heterônoma</strong> (regras vistas como fixas e julgamento apenas pela consequência) para a <strong>moral autônoma</strong> (consideração da intenção de quem agiu e negociação justa das regras).",
        pontosChave: [
          "Crise de Erikson: Produtividade (Indústria) vs. Inferioridade — foco na sensação de competência.",
          "O grupo de pares promove cooperação, empatia, negociação e pertencimento.",
          "A autorregulação emocional melhora e a criança passa a usar sistemas representacionais equilibrados sobre si mesma.",
          "Transição moral: do foco exclusivo na punição/consequência para a avaliação da intenção."
        ],
        exemplo: "Uma criança de 9 anos julga que quebrar 1 copo de propósito por raiva é pior do que quebrar 5 copos sem querer tentando ajudar a mãe (moral autônoma baseada na intenção).",
        alerta: "A comparação social intensa nessa fase torna a criança vulnerável à rejeição pelos pares e ao bullying, exigindo atenção de família e escola."
      }
    ],
    flashcards: [
      { frente: "Qual o estágio de Piaget na primeira infância (0-2 anos) e sua maior conquista?", verso: "Estágio Sensório-Motor; sua maior conquista é a permanência do objeto." },
      { frente: "Cite 3 limitações do pensamento pré-operatório (segunda infância).", verso: "Egocentrismo cognitivo, centração, animismo e ausência de conservação/reversibilidade." },
      { frente: "Qual a crise psicossocial de Erikson na segunda infância (3-6 anos)?", verso: "Iniciativa vs. Culpa." },
      { frente: "Quais são os 4 estilos parentais de Diana Baumrind?", verso: "Autoritativo (democrático), Autoritário, Permissivo e Negligente (não envolvido)." },
      { frente: "O que a criança conquista no estágio Operatório Concreto (terceira infância)?", verso: "Conservação, reversibilidade, classificação, seriação e inferência transitiva aplicadas a situações concretas." },
      { frente: "Qual a crise psicossocial de Erikson na terceira infância (6-11 anos)?", verso: "Produtividade (Indústria) vs. Inferioridade." }
    ]
  },
  {
    id: 3,
    modulo: "Módulo 3",
    titulo: "Puberdade, Adolescência e Transição para a Vida Adulta",
    icone: "fa-bolt",
    cor: "purple",
    topicos: [
      {
        subtopico: "3.1 Puberdade: Maturação Fisiológica e Efeitos Psicológicos",
        resumo: "A puberdade é o processo biológico que leva à maturidade sexual e à capacidade reprodutiva, impactando profundamente a autoimagem.",
        explicacao: "A <strong>puberdade</strong> é desencadeada pela ativação do eixo hipotálamo-hipófise-gonadal (adrenarca e gonadarca), aumentando a produção de hormônios sexuais (estrogênio nas meninas; testosterona nos meninos). Esse processo gera o <strong>estirão de crescimento</strong> e o desenvolvimento das <strong>características sexuais primárias</strong> (órgãos diretamente ligados à reprodução) e <strong>secundárias</strong> (mamas, pelos pubianos/faciais, mudança da voz, alargamento dos quadris ou ombros). Os marcos principais são a <strong>menarca</strong> (primeira menstruação) e a <strong>espermarca</strong> (primeira ejaculação).<br><br><strong>Efeitos Psicológicos:</strong> A rapidez das mudanças corporais provoca reajuste constante da <strong>imagem corporal</strong> e da autoestima. O ritmo da maturação importa: a <strong>maturação precoce</strong> costuma gerar maior vulnerabilidade emocional em meninas (pressão social, insatisfação corporal e exposição precoce a grupos mais velhos), enquanto em meninos pode trazer ganho inicial de status físico, mas também maior risco de condutas impulsivas. Além disso, o sistema límbico (emoções/recompensa) amadurece antes do córtex pré-frontal (controle de impulsos), explicando a maior busca por novidades e sensibilidade à avaliação dos pares.",
        pontosChave: [
          "Puberdade é um fenômeno biológico/universal; adolescência é uma construção biopsicossocial mais ampla.",
          "Características primárias = órgãos reprodutivos; secundárias = sinais externos de maturação sexual.",
          "Assincronia cerebral: sistema límbico amadurece antes do córtex pré-frontal, elevando a busca por recompensas.",
          "O timing da puberdade (precoce ou tardia) afeta diretamente a autoestima e a imagem corporal."
        ],
        exemplo: "Um adolescente que reage intensamente à opinião dos amigos sobre sua aparência e assume riscos em grupo reflete a combinação de hipersensibilidade límbica e busca por pertencimento.",
        alerta: "Não confunda puberdade com adolescência: a puberdade tem início e fim biológicos definidos; a adolescência envolve fatores culturais, legais, psicológicos e sociais."
      },
      {
        subtopico: "3.2 Histórico das Concepções de Adolescência e Vida Adulta",
        resumo: "Antes da modernidade, não havia separação clara entre infância, adolescência e vida adulta; a adolescência é uma construção sócio-histórica.",
        explicacao: "Antes da consolidação da Psicologia do Desenvolvimento, as sociedades não reconheciam a adolescência como uma etapa intermediária longa. Segundo o historiador <strong>Philippe Ariès</strong>, na Idade Média as crianças eram inseridas precocemente no mundo do trabalho assim que adquiriam autonomia física básica, sendo vistas como 'adultos em miniatura'. Em muitas culturas tradicionais, a passagem da infância para a vida adulta ocorria de forma abrupta por meio de <strong>ritos de passagem</strong> ligados à puberdade.<br><br>A concepção moderna de adolescência surgiu apenas entre os séculos XIX e XX, impulsionada pela <strong>Revolução Industrial</strong>, pela proibição do trabalho infantil e pela <strong>obrigatoriedade da escolarização prolongada</strong>. Esse adiamento da entrada no mercado de trabalho criou um espaço social específico entre a infância e a vida adulta. Em 1904, <strong>G. Stanley Hall</strong> popularizou o conceito científico de adolescência descrevendo-a como um período inevitável de 'tempestade e estresse' (<em>storm and stress</em>) — visão que hoje a psicologia contemporânea relativiza, reconhecendo que a maioria dos adolescentes atravessa a fase sem transtornos graves quando conta com suporte afetivo.",
        pontosChave: [
          "Na Idade Média, a transição para a vida adulta era rápida e ligada ao trabalho e a ritos de passagem.",
          "A Revolução Industrial e a expansão escolar criaram a adolescência como etapa social prolongada.",
          "G. Stanley Hall (1904) cunhou a visão clássica de 'tempestade e estresse', hoje considerada exagerada como regra universal.",
          "A definição de 'vida adulta' também mudou historicamente, deixando de depender apenas da puberdade para incluir autonomia socioeconômica."
        ],
        exemplo: "Enquanto no século XVIII um jovem de 14 anos já trabalhava como aprendiz e podia se casar, na sociedade contemporânea aos 14 anos espera-se que ele esteja no ensino fundamental/médio sob tutela familiar.",
        alerta: "A adolescência NÃO é uma invenção puramente biológica; sua duração e seus conflitos variam enormemente conforme a classe social, a cultura e o momento histórico."
      },
      {
        subtopico: "3.3 Adolescência sob a Perspectiva das Teorias Psicológicas",
        resumo: "Diferentes teorias abordam a adolescência a partir da construção da identidade, do pensamento abstrato e da elaboração de lutos.",
        explicacao: "<strong>1. Erik Erikson (Teoria Psicossocial):</strong> A tarefa central da adolescência é a crise <strong>Identidade vs. Confusão de Papéis</strong>. O jovem precisa integrar valores, escolhas profissionais, ideologia e sexualidade em um senso coerente de si mesmo, frequentemente vivendo uma <strong>moratória psicossocial</strong> (tempo de experimentação antes de compromissos definitivos).<br><br><strong>2. James Marcia (Estados de Identidade):</strong> Desdobrou Erikson em 4 status conforme a presença de crise/exploração e compromisso: <strong>Realização</strong> (explorou e assumiu compromisso), <strong>Moratória</strong> (em exploração ativa, sem compromisso fechado), <strong>Execução/Outorga</strong> (assumiu compromisso dos pais sem explorar) e <strong>Difusão</strong> (sem exploração nem compromisso).<br><br><strong>3. Jean Piaget (Estágio Operatório Formal):</strong> A partir dos 11–12 anos, emerge o <strong>pensamento hipotético-dedutivo</strong> e abstrato (capacidade de testar hipóteses, refletir sobre justiça, política e futuro). Segundo David Elkind, surge um novo egocentrismo adolescente expresso na <em>audiência imaginária</em> e na <em>fábula pessoal</em>.<br><br><strong>4. Psicanálise (Arminda Aberastury e Maurício Knobel):</strong> Descreveram a <em>Síndrome da Adolescência Normal</em> e os <strong>três lutos fundamentais</strong>: luto pelo corpo infantil, luto pela identidade/papel infantil e luto pelos pais idealizados da infância.",
        pontosChave: [
          "Erikson: Identidade vs. Confusão de Papéis e conceito de moratória psicossocial.",
          "James Marcia: 4 status de identidade (Realização, Moratória, Outorga/Execução e Difusão).",
          "Piaget: Operatório Formal permite raciocínio abstrato e hipotético-dedutivo.",
          "Aberastury e Knobel: 3 lutos da adolescência (corpo infantil, papel infantil e pais da infância)."
        ],
        exemplo: "Um jovem que escolhe cursar Medicina apenas porque o pai é médico, sem nunca ter questionado ou explorado outras áreas, está no status de Identidade Outorgada (Execução) segundo James Marcia.",
        alerta: "Na psicologia, a 'fábula pessoal' é a crença adolescente de ser único e invulnerável ('isso nunca vai acontecer comigo'), fator que explica muitos comportamentos de risco."
      },
      {
        subtopico: "3.4 Transição da Adolescência para a Vida Adulta",
        resumo: "A passagem para a adultez tornou-se mais longa e gradual nas sociedades contemporâneas, dando origem ao conceito de Adultez Emergente.",
        explicacao: "Nas últimas décadas, marcadores tradicionais de entrada na vida adulta (terminar os estudos, conquistar independência financeira, sair da casa dos pais, casar e ter filhos) passaram a ocorrer mais tarde e em ordens menos rígidas. Para descrever esse intervalo (aproximadamente dos 18 aos 25–29 anos), <strong>Jeffrey Arnett</strong> propôs o conceito de <strong>Adultez Emergente</strong>.<br><br>Essa transição é caracterizada por cinco traços: exploração de identidade (no amor e no trabalho), instabilidade (mudanças de curso, emprego ou residência), foco em si mesmo (construção de autonomia), sensação de estar 'no meio do caminho' (nem adolescente, nem plenamente adulto) e abertura para possibilidades futuras. Os principais critérios psicológicos que os próprios jovens reconhecem para se sentirem adultos hoje são: <strong>assumir responsabilidade por si mesmos, tomar decisões independentes e alcançar independência financeira</strong>.",
        pontosChave: [
          "Adultez emergente (Jeffrey Arnett): fase intermediária entre ~18 e 25/29 anos de exploração e transição.",
          "Critérios psicológicos de adultez: responsabilidade pessoal, decisões autônomas e independência financeira.",
          "A transição varia conforme o contexto socioeconômico (jovens de baixa renda frequentemente assumem papéis adultos mais cedo).",
          "A consolidação do córtex pré-frontal estende-se até aproximadamente os 25 anos."
        ],
        exemplo: "Uma jovem de 22 anos que trabalha em estágio, faz faculdade e ainda mora com os pais enquanto decide sua especialização vivencia a fase de adultez emergente.",
        alerta: "A adultez emergente não é universal; ela ocorre sobretudo em contextos urbanos/industrializados que permitem escolarização prolongada."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre puberdade e adolescência?", verso: "Puberdade é o processo biológico de maturação sexual; adolescência é a etapa biopsicossocial e cultural de transição para a vida adulta." },
      { frente: "Quais são os 3 lutos da adolescência segundo Aberastury e Knobel?", verso: "Luto pelo corpo infantil, luto pela identidade/papel infantil e luto pelos pais idealizados da infância." },
      { frente: "Quais são os 4 status de identidade de James Marcia?", verso: "Realização (explorou + comprometeu), Moratória (explora sem compromisso), Outorga/Execução (compromisso sem exploração) e Difusão (nem explora nem compromete)." },
      { frente: "O que é o pensamento operatório formal (Piaget)?", verso: "Capacidade de raciocínio abstrato e hipotético-dedutivo que se inicia na adolescência." },
      { frente: "O que significa 'audiência imaginária' e 'fábula pessoal'?", verso: "Audiência imaginária é a sensação de estar sempre sendo observado/julgado; fábula pessoal é a crença de ser único e invulnerável." },
      { frente: "Quem propôs o conceito de 'Adultez Emergente' e qual sua faixa etária?", verso: "Jeffrey Arnett; abrange o período aproximado dos 18 aos 25–29 anos de transição gradual para a vida adulta." }
    ]
  },
  {
    id: 4,
    modulo: "Módulo 4",
    titulo: "Vida Adulta, Trabalho, Identidade e Família",
    icone: "fa-people-roof",
    cor: "blue",
    topicos: [
      {
        subtopico: "4.1 Início da Vida Adulta e Inserção no Mercado de Trabalho",
        resumo: "O jovem adulto consolida sua autonomia, enfrenta a crise Intimidade vs. Isolamento e constrói sua identidade profissional.",
        explicacao: "No <strong>início da vida adulta</strong> (aproximadamente 20 a 40 anos), o funcionamento físico atinge seu auge (força, resistência e saúde geral, embora hábitos de vida comecem a definir o futuro). Cognitivamente, muitos autores descrevem o <strong>pensamento pós-formal</strong>: mais flexível, relativista e pragmático, capaz de integrar lógica, emoção e contradições da vida real.<br><br>Segundo Erikson, a crise central do jovem adulto é <strong>Intimidade vs. Isolamento</strong>: a capacidade de estabelecer vínculos profundos e comprometidos (amorosos e amizades) sem perder a própria identidade. Paralelamente, a <strong>inserção no mercado de trabalho</strong> é um organizador central da vida adulta, pois o trabalho não garante apenas subsistência financeira, mas também reconhecimento social, estrutura temporal e senso de utilidade. Desafios contemporâneos incluem a precarização, a sobrecarga (burnout), o equilíbrio entre carreira e vida pessoal e a necessidade de requalificação contínua.",
        pontosChave: [
          "Crise de Erikson no adulto jovem: Intimidade vs. Isolamento.",
          "Pensamento pós-formal: integra razão, emoção, experiência prática e tolerância à ambiguidade.",
          "O trabalho atua como eixo de identidade social, autonomia financeira e saúde mental na vida adulta.",
          "A estabilidade emocional e os hábitos de saúde adotados nessa fase repercutem diretamente na meia-idade e velhice."
        ],
        exemplo: "Um profissional de 28 anos que negocia um conflito no trabalho considerando tanto os dados objetivos quanto o impacto emocional na equipe demonstra pensamento pós-formal.",
        alerta: "Para Erikson, sem uma identidade razoavelmente consolidada na adolescência, o jovem adulto tende a ter dificuldade na intimidade real, oscilando entre fusão dependente ou isolamento."
      },
      {
        subtopico: "4.2 Identidade Sexual e Identidade de Gênero",
        resumo: "A sexualidade humana envolve dimensões distintas e independentes: sexo biológico, identidade de gênero, expressão de gênero e orientação sexual.",
        explicacao: "A Psicologia do Desenvolvimento diferencia com precisão quatro conceitos fundamentais que não se determinam automaticamente entre si:<br><br><strong>1. Sexo Biológico (designado ao nascer):</strong> Características anatômicas, cromossômicas e hormonais (macho, fêmea ou intersexo).<br><strong>2. Identidade de Gênero:</strong> Experiência interna, profunda e pessoal de pertencer ao gênero masculino, feminino, a ambos ou a nenhum (pessoas <strong>cisgênero</strong> identificam-se com o gênero atribuído ao nascer; pessoas <strong>transgênero/travestis/não-binárias</strong> não se identificam com ele).<br><strong>3. Expressão de Gênero:</strong> Forma como a pessoa manifesta seu gênero socialmente por meio de roupas, gestos, voz e comportamentos.<br><strong>4. Orientação Sexual (Identidade Sexual):</strong> Direção duradoura da atração afetiva, romântica e/ou sexual por outras pessoas (heterossexual, homossexual, bissexual, pansexual, assexual).<br><br>A Psicologia e o Conselho Federal de Psicologia (CFP) reconhecem a diversidade sexual e de gênero como expressões legítimas do desenvolvimento humano, <strong>não patológicas</strong>, sendo o sofrimento psíquico frequentemente resultado do estresse de minoria, do preconceito e da rejeição familiar/social.",
        pontosChave: [
          "Identidade de gênero (como a pessoa se percebe) é independente da orientação sexual (por quem sente atração).",
          "Expressão de gênero refere-se à apresentação externa e varia histórica e culturalmente.",
          "Homossexualidade e transgeneridade NÃO são transtornos mentais; práticas de 'reversão sexual' são proibidas pelo CFP.",
          "Acolhimento familiar e social é o principal fator de proteção à saúde mental de pessoas LGBTQIA+."
        ],
        exemplo: "Uma mulher trans (identidade de gênero feminina) pode ser heterossexual (atração por homens), lésbica (atração por mulheres) ou bissexual, demonstrando a independência entre gênero e orientação sexual.",
        alerta: "Erro comum em provas: confundir identidade de gênero com orientação sexual. Gênero diz respeito a 'quem eu sou'; orientação diz respeito a 'por quem eu sinto atração'."
      },
      {
        subtopico: "4.3 Diferentes Formas de União e Novas Configurações Familiares",
        resumo: "A família contemporânea deixou de ser definida apenas pelo modelo nuclear tradicional, assumindo arranjos plurais baseados no afeto e no cuidado.",
        explicacao: "Historicamente, o modelo dominante era a <strong>família nuclear tradicional</strong> (pai provedor, mãe cuidadora e filhos biológicos unidos pelo casamento formal). Com a entrada das mulheres no mercado de trabalho, os métodos contraceptivos, o divórcio e o reconhecimento de direitos civis, emergiram diversas formas de união (casamento civil, <strong>união estável</strong>, casais que vivem em casas separadas — <em>LAT</em>, relacionamentos abertos/não-monogâmicos consensuais e escolha pela solteirice) e <strong>novas configurações familiares</strong>:<br><br>• <strong>Família Monoparental:</strong> Um único genitor/responsável cria os filhos.<br>• <strong>Família Recomposta (ou Mosaico):</strong> Formada após divórcio/viuvez, integrando padrastos, madrastas e enteados.<br>• <strong>Família Homoafetiva:</strong> Casais do mesmo gênero com ou sem filhos (adoção, reprodução assistida).<br>• <strong>Família Extensa / Ampliada:</strong> Inclui avós, tios ou outros parentes na criação cotidiana.<br>• <strong>Família Anaparental / Pluriparental:</strong> Convivência familiar sem figura parental direta (ex.: irmãos) ou com múltiplos vínculos parentais reconhecidos.<br><br>A pesquisa psicológica demonstra que o fator determinante para o desenvolvimento saudável da criança <strong>não é a estrutura/formato da família, mas a qualidade dos vínculos afetivos, a estabilidade emocional e o baixo nível de conflito destrutivo</strong>.",
        pontosChave: [
          "O afeto, o cuidado e a função protetiva definem a família contemporânea (princípio da afetividade).",
          "Principais arranjos: nuclear, monoparental, recomposta/mosaico, homoafetiva, extensa e anaparental.",
          "A qualidade das relações e o suporte emocional importam muito mais para os filhos do que o formato familiar.",
          "O divórcio em si prejudica menos a criança do que a exposição prolongada a conflitos parentais intensos."
        ],
        exemplo: "Estudos longitudinais mostram que crianças criadas por casais homoafetivos ou famílias monoparentais com boa rede de apoio apresentam desenvolvimento cognitivo e emocional equivalente ao de famílias nucleares tradicionais.",
        alerta: "Evite o termo 'família desestruturada' em provas e relatórios psicológicos; prefira 'família monoparental', 'recomposta' ou 'em situação de vulnerabilidade'."
      },
      {
        subtopico: "4.4 Crise da Meia-Idade, Ninho Cheio e Ninho Vazio",
        resumo: "A vida adulta intermediária (40 a 65 anos) envolve reavaliação de propósito (Generatividade vs. Estagnação) e transformações na dinâmica familiar.",
        explicacao: "Na <strong>meia-idade</strong> (vida adulta intermediária), ocorrem mudanças físicas graduais (presbiopia, diminuição do metabolismo, <strong>climatério/menopausa</strong> nas mulheres e queda gradual de testosterona nos homens). Para Erikson, a tarefa psicossocial central é <strong>Generatividade vs. Estagnação</strong>: o desejo de contribuir para as próximas gerações (por meio da parentalidade, mentoria, trabalho criativo ou engajamento social) versus a sensação de vazio e estancamento.<br><br>A chamada <strong>crise da meia-idade</strong> não é um fenômeno universal obrigatório; na maioria das pessoas, trata-se mais de uma <em>revisão de meio de vida</em> (tomada de consciência da finitude e ajuste de metas). No plano familiar, destacam-se dois fenômenos:<br><br>• <strong>Síndrome do Ninho Vazio:</strong> Transição vivida quando o último filho sai de casa. Embora possa gerar tristeza temporária, para muitos casais saudáveis traz <strong>aumento da satisfação conjugal</strong> e retomada de projetos pessoais.<br>• <strong>Ninho Cheio (e Geração Sanduíche):</strong> Fenômeno crescente em que filhos adultos permanecem na casa dos pais (ou retornam — 'geração bumerangue') por razões econômicas ou educacionais, frequentemente ao mesmo tempo em que os adultos de meia-idade precisam cuidar dos próprios pais idosos (<strong>geração sanduíche</strong>).",
        pontosChave: [
          "Crise de Erikson na meia-idade: Generatividade vs. Estagnação.",
          "A crise da meia-idade não é universal; costuma manifestar-se como revisão de valores e projetos.",
          "Ninho vazio pode gerar luto transitório, mas frequentemente melhora a qualidade conjugal.",
          "Ninho cheio e geração sanduíche refletem sobrecarga simultânea de cuidados com filhos adultos e pais idosos."
        ],
        exemplo: "Uma mulher de 52 anos que ajuda financeiramente o filho universitário que ainda mora em casa enquanto acompanha as consultas médicas da mãe de 80 anos integra a chamada 'geração sanduíche'.",
        alerta: "Na meia-idade, a inteligência fluida (velocidade de processamento) pode declinar levemente, mas a inteligência cristalizada (conhecimento acumulado e experiência) permanece estável ou até aumenta."
      }
    ],
    flashcards: [
      { frente: "Qual a crise psicossocial de Erikson no início da vida adulta?", verso: "Intimidade vs. Isolamento." },
      { frente: "Diferencie identidade de gênero de orientação sexual.", verso: "Identidade de gênero é a percepção interna de ser homem, mulher ou não-binário; orientação sexual é por quem a pessoa sente atração afetivo-sexual." },
      { frente: "O que determina o bom desenvolvimento infantil diante das novas configurações familiares?", verso: "A qualidade dos vínculos afetivos, a estabilidade emocional e o baixo nível de conflito, e não o formato estrutural da família." },
      { frente: "Qual a crise de Erikson na meia-idade e o que ela significa?", verso: "Generatividade vs. Estagnação: necessidade de deixar um legado e cuidar das próximas gerações." },
      { frente: "O que caracteriza a 'geração sanduíche'?", verso: "Adultos de meia-idade que acumulam simultaneamente o cuidado de filhos (muitas vezes ainda em casa — ninho cheio) e de pais idosos." },
      { frente: "A Síndrome do Ninho Vazio gera sempre depressão nos pais?", verso: "Não. Embora exija adaptação, para muitos casais com bom relacionamento a saída dos filhos aumenta a satisfação conjugal e a liberdade pessoal." }
    ]
  },
  {
    id: 5,
    modulo: "Módulo 5",
    titulo: "Envelhecimento, Velhice e Atitudes Diante da Morte",
    icone: "fa-hourglass-half",
    cor: "pink",
    topicos: [
      {
        subtopico: "5.1 Processo de Envelhecimento, Mudanças Físicas e Doenças",
        resumo: "Envelhecer é um processo natural e heterogêneo; é essencial distinguir o envelhecimento saudável (senescência) do patológico (senilidade).",
        explicacao: "O <strong>envelhecimento</strong> (terceira idade, a partir dos 60 anos no Brasil segundo o Estatuto da Pessoa Idosa) é um processo biológico, psicológico e social contínuo e heterogêneo. Uma distinção obrigatória em Psicologia e Saúde é:<br><br>• <strong>Senescência (Envelhecimento Primário):</strong> Alterações graduais, universais e normais do organismo com o passar dos anos (diminuição da elasticidade da pele, perda gradual de massa muscular/sarcopenia e massa óssea, redução da acuidade visual e auditiva, lentificação leve no tempo de reação).<br>• <strong>Senilidade (Envelhecimento Secundário):</strong> Declínio decorrente de <strong>doenças</strong>, lesões ou hábitos nocivos, que NÃO faz parte obrigatória da velhice normal.<br><br>Entre as condições mais prevalentes na velhice estão as Doenças Crônicas Não Transmissíveis (hipertensão, diabetes, osteoporose, artrite) e transtornos neurocognitivos maiores (como a <strong>Doença de Alzheimer</strong> e demências vasculares). A <strong>teoria da otimização seletiva com compensação (SOC)</strong> de Paul Baltes explica como idosos bem-sucedidos selecionam metas prioritárias, otimizam recursos e compensam perdas físicas ou cognitivas.",
        pontosChave: [
          "Senescência = envelhecimento normal e fisiológico; Senilidade = envelhecimento patológico causado por doenças.",
          "Demência (como Alzheimer) NÃO é parte normal do envelhecimento — é uma condição patológica.",
          "A inteligência cristalizada mantém-se preservada no envelhecimento saudável.",
          "Modelo SOC (Baltes): Seleção, Otimização e Compensação explicam o envelhecimento bem-sucedido."
        ],
        exemplo: "Um idoso de 74 anos que usa óculos para leitura e anota compromissos na agenda mantendo total autonomia e lucidez vivencia a senescência (envelhecimento normal), não senilidade.",
        alerta: "Nunca associe perda grave de memória, desorientação ou demência à 'velhice normal'. Declínio cognitivo que compromete a autonomia é sinal de senilidade/patologia."
      },
      {
        subtopico: "5.2 Sexualidade na Velhice",
        resumo: "A sexualidade permanece presente em todo o ciclo vital; na velhice, ela se transforma em ritmo e expressão, mas não desaparece.",
        explicacao: "Um dos maiores tabus sobre o envelhecimento é o mito da 'velhice assexuada'. A <strong>sexualidade na velhice</strong> envolve muito mais do que o ato genital: abrange afeto, toque, erotismo, cumplicidade, autoestima e desejo. Fisiologicamente, ocorrem mudanças esperadas da senescência — como menor lubrificação vaginal pós-menopausa nas mulheres e necessidade de mais tempo e estimulação direta para ereção nos homens — que <strong>não impedem o prazer nem a vida sexual ativa</strong>.<br><br>Os principais obstáculos à sexualidade do idoso costumam ser psicossociais e médicos: preconceito familiar (infantilização do idoso), falta de privacidade (especialmente em instituições de longa permanência), efeitos colaterais de medicamentos (anti-hipertensivos, antidepressivos), vergonha das mudanças corporais e desinformação sobre prevenção — fator que explica o aumento de Infecções Sexualmente Transmissíveis (ISTs) na população idosa.",
        pontosChave: [
          "A sexualidade é uma dimensão humana permanente, da infância à velhice.",
          "Mudanças fisiológicas alteram o ritmo da resposta sexual, mas não eliminam o desejo nem o prazer.",
          "Barreiras principais são o tabu social, a infantilização familiar, medicamentos e falta de privacidade.",
          "A educação em saúde sexual para idosos é essencial também para a prevenção de ISTs."
        ],
        exemplo: "Um casal de 70 anos que adapta a intimidade com uso de lubrificante, mais tempo de preliminares e valorização do toque afetivo mantém vida sexual satisfatória e saudável.",
        alerta: "A crença de que idosos não têm desejo sexual contribui tanto para a repressão afetiva quanto para o diagnóstico tardio de HIV e outras ISTs nessa faixa etária."
      },
      {
        subtopico: "5.3 Novo Status Social do Idoso e Preconceitos (Etarismo)",
        resumo: "Com o aumento da expectativa de vida, o idoso ocupa novos papéis sociais, mas ainda enfrenta o etarismo e a exclusão estrutural.",
        explicacao: "O mundo e o Brasil atravessam uma rápida <strong>transição demográfica</strong> (queda da natalidade + aumento da longevidade). Isso gerou um <strong>novo status social do idoso</strong>: muitas pessoas acima de 60 anos continuam economicamente ativas, sustentam famílias, viajam, estudam em universidades abertas à terceira idade e participam da vida política e comunitária. A OMS promove o conceito de <strong>Envelhecimento Ativo</strong> (otimização das oportunidades de saúde, participação e segurança). No Brasil, a Lei nº 10.741/2003 (<strong>Estatuto da Pessoa Idosa</strong>) garante direitos fundamentais e proteção contra violência e abandono.<br><br>Apesar desses avanços, persiste o <strong>etarismo (ou idadismo / ageismo)</strong> — preconceito, estereótipo e discriminação baseados na idade. Ele se manifesta na associação automática da velhice à inutilidade, na exclusão do mercado de trabalho, na <strong>infantilização</strong> ('falar no diminutivo' e retirar a autonomia decisória do idoso) e no desrespeito às prioridades legais.",
        pontosChave: [
          "Etarismo (idadismo) é a discriminação sistemática contra pessoas por causa da idade.",
          "Infantilizar o idoso ou decidir por ele sem necessidade fere sua dignidade e autonomia.",
          "Envelhecimento Ativo (OMS) baseia-se em saúde, participação social, aprendizagem contínua e segurança.",
          "O Estatuto da Pessoa Idosa assegura direitos civis, prioridade e proteção integral a partir dos 60 anos."
        ],
        exemplo: "Um médico que, durante a consulta, dirige todas as perguntas apenas à filha acompanhante e ignora o paciente de 72 anos lúcido pratica uma forma cotidiana de etarismo.",
        alerta: "O etarismo pode ser inclusive internalizado pelo próprio idoso, levando-o a acreditar que não é mais capaz de aprender ou se relacionar."
      },
      {
        subtopico: "5.4 Atitudes Diante da Morte, Luto e Integridade do Ego",
        resumo: "Na velhice, o confronto com a finitude culmina na crise Integridade vs. Desespero e exige cuidado ético com o morrer e o luto.",
        explicacao: "Para Erik Erikson, o 8º e último estágio do ciclo vital é <strong>Integridade do Ego vs. Desespero</strong>: ao fazer a revisão de vida, o idoso que aceita sua trajetória com suas conquistas e falhas desenvolve sabedoria e enfrenta a morte com maior serenidade (integridade); quem se sente preso a arrependimentos sem tempo para recomeçar vivencia amargura e temor intenso (desespero).<br><br>As <strong>atitudes diante da morte</strong> variam conforme cultura, espiritualidade e história pessoal. Na sociedade ocidental contemporânea, a morte tornou-se frequentemente <strong>interditada/medicalizada</strong> (escondida em hospitais). <strong>Elisabeth Kübler-Ross</strong> descreveu 5 reações emocionais comuns diante da terminalidade e do luto (não lineares e nem obrigatórias): <strong>Negação, Raiva, Barganha, Depressão e Aceitação</strong>. Os <strong>Cuidados Paliativos</strong> buscam aliviar o sofrimento físico, psíquico, social e espiritual, promovendo dignidade no processo de morrer (ortotanásia — não prolongar artificialmente o sofrimento sem abreviar a vida).",
        pontosChave: [
          "8º estágio de Erikson: Integridade do Ego vs. Desespero (virtude: sabedoria).",
          "Kübler-Ross: Negação, Raiva, Barganha, Depressão e Aceitação — não são rígidos nem necessariamente sequenciais.",
          "Luto normal é um processo adaptativo de elaboração da perda; luto complicado/prolongado requer suporte clínico.",
          "Cuidados paliativos priorizam qualidade de vida, alívio da dor e respeito à autonomia no fim da vida."
        ],
        exemplo: "Um paciente em cuidados paliativos que revisa suas fotos de família, perdoa conflitos antigos e expressa seus desejos finais à equipe demonstra elaboração voltada à integridade do ego.",
        alerta: "Pegadinha clássica: Os estágios de Kübler-Ross NÃO ocorrem obrigatoriamente em ordem fixa, nem todas as pessoas passam por todos os cinco."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre senescência e senilidade?", verso: "Senescência é o envelhecimento biológico normal e saudável; senilidade é o declínio patológico causado por doenças." },
      { frente: "O que é o modelo SOC (Paul Baltes) no envelhecimento?", verso: "Seleção, Otimização e Compensação: estratégias pelas quais o idoso seleciona prioridades e compensa perdas para manter autonomia." },
      { frente: "A sexualidade desaparece na velhice?", verso: "Não. Ocorrem mudanças fisiológicas no ritmo da resposta sexual, mas o desejo, o afeto e a capacidade de prazer continuam presentes." },
      { frente: "O que é etarismo (ou idadismo)?", verso: "Preconceito, estereótipo e discriminação contra pessoas em razão da idade, manifestado na exclusão ou infantilização do idoso." },
      { frente: "Qual a 8ª e última crise psicossocial de Erik Erikson?", verso: "Integridade do Ego vs. Desespero (cuja virtude alcançada é a sabedoria)." },
      { frente: "Quais são os 5 estágios descritos por Elisabeth Kübler-Ross diante da morte?", verso: "Negação, Raiva, Barganha, Depressão e Aceitação (podem ocorrer fora de ordem ou não aparecer todos)." }
    ]
  }
];
