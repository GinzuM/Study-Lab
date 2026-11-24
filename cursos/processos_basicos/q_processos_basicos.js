// =========================================================================
// cursos/processos_basicos/q_processos_basicos.js
// Banco de Questões Comentadas (Quizzes de Módulo e Simulado Global)
// =========================================================================

window.QUESTIONS_DB = [
  // ===================== MÓDULO 1 =====================
  {
    id: 1,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Fácil",
    enunciado: "Em relação às estruturas do neurônio e aos tipos funcionais de neurônios no Sistema Nervoso, assinale a alternativa correta:",
    opcoes: [
      "Os dendritos liberam neurotransmissores e o axônio recebe sinais iniciais.",
      "Neurônios sensoriais (aferentes) levam informações dos receptores periféricos ao SNC, enquanto neurônios motores (eferentes) conduzem comandos do SNC aos músculos e glândulas.",
      "A bainha de mielina desacelera propositalmente a condução do impulso nervoso.",
      "Interneurônios existem apenas nos músculos das pernas."
    ],
    correta: 1,
    explicacao: "Correta: Dendritos recebem sinais, o axônio conduz o potencial de ação (acelerado pela mielina via condução saltatória), neurônios aferentes são sensoriais e neurônios eferentes são motores."
  },
  {
    id: 2,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Médio",
    enunciado: "Sobre o funcionamento neuronal e a sinapse química, o que significa a 'lei do tudo-ou-nada' do potencial de ação?",
    opcoes: [
      "Quanto mais forte o estímulo, maior será a amplitude elétrica de um único potencial de ação.",
      "O neurônio dispara com intensidade máxima sempre que o limiar de excitação é atingido; abaixo desse limiar, não ocorre disparo.",
      "Todos os neurônios do cérebro disparam exatamente ao mesmo tempo.",
      "Os neurotransmissores nunca podem ter efeito inibitório."
    ],
    correta: 1,
    explicacao: "Correta: O potencial de ação é um evento tudo-ou-nada — atingido o limiar, ele dispara com a mesma amplitude constante; a intensidade de um estímulo é codificada pela frequência de disparos, não pelo tamanho do pico."
  },
  {
    id: 3,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Fácil",
    enunciado: "Assinale a alternativa que associa corretamente cada lobo cerebral à sua principal especialização funcional:",
    opcoes: [
      "Occipital: audição; Temporal: visão; Frontal: tato.",
      "Frontal: funções executivas e movimento voluntário; Parietal: tato/somestesia e espaço; Temporal: audição e compreensão da linguagem; Occipital: processamento visual.",
      "Parietal: visão; Frontal: apenas respiração; Occipital: funções executivas.",
      "Todos os lobos executam exatamente a mesma função sem especialização."
    ],
    correta: 1,
    explicacao: "Correta: Cada lobo possui especializações clássicas bem estabelecidas: frontal (executivo/motor), parietal (somatossensorial/espacial), temporal (auditivo/linguagem/memória) e occipital (visual)."
  },
  {
    id: 4,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Médio",
    enunciado: "Após um Acidente Vascular Cerebral (AVC) no hemisfério esquerdo, um paciente compreende perfeitamente o que lhe é perguntado, mas apresenta grande esforço e dificuldade para articular palavras, produzindo frases curtas e entrecortadas. Qual área cerebral foi mais provavelmente atingida?",
    opcoes: [
      "Área de Wernicke (lobo temporal).",
      "Área de Broca (lobo frontal).",
      "Córtex visual primário (lobo occipital).",
      "Hipotálamo."
    ],
    correta: 1,
    explicacao: "Correta: A lesão na Área de Broca (lobo frontal esquerdo) provoca Afasia de Broca — compreensão relativamente preservada com prejuízo marcante na produção e fluência motora da fala."
  },
  {
    id: 5,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Médio",
    enunciado: "No estudo do Sistema Límbico e das estruturas subcorticais, qual alternativa descreve corretamente as funções da Amígdala, do Hipocampo, do Tálamo e do Hipotálamo?",
    opcoes: [
      "Amígdala: equilíbrio motor; Hipocampo: visão; Tálamo: sede; Hipotálamo: fala.",
      "Amígdala: processamento emocional (medo/ameaça); Hipocampo: consolidação de novas memórias explícitas; Tálamo: retransmissão sensorial ao córtex; Hipotálamo: regulação da homeostase e sistema endócrino.",
      "Amígdala: consolidação de memória procedural; Hipotálamo: percepção visual.",
      "Tálamo: único responsável pelo olfato; Hipocampo: controle cardíaco."
    ],
    correta: 1,
    explicacao: "Correta: Essas quatro estruturas desempenham papéis centrais na emoção (amígdala), memória (hipocampo), retransmissão sensorial exceto olfato (tálamo) e homeostase/hormônios (hipotálamo)."
  },
  {
    id: 6,
    modulo: "Módulo 1: Neuroanatomia, Neurônios e Funcionamento Cerebral",
    nivel: "Difícil",
    enunciado: "O célebre caso histórico de Phineas Gage (operário que teve o córtex pré-frontal perfurado por uma barra de ferro e passou a apresentar impulsividade, desinibição social e incapacidade de planejamento) ilustra principalmente:",
    opcoes: [
      "A independência total entre o cérebro e a personalidade.",
      "O papel fundamental do lobo frontal (córtex pré-frontal) nas funções executivas, no controle inibitório e na regulação do comportamento social.",
      "A função exclusiva do lobo occipital na linguagem falada.",
      "Que lesões cerebrais afetam apenas os reflexos da medula espinal."
    ],
    correta: 1,
    explicacao: "Correta: O caso de Phineas Gage tornou-se marco da neuropsicologia ao demonstrar o impacto de disfunções do córtex pré-frontal sobre o controle de impulsos, julgamento e personalidade."
  },

  // ===================== MÓDULO 2 =====================
  {
    id: 7,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Fácil",
    enunciado: "Qual alternativa estabelece a distinção correta entre Sensação e Percepção em Processos Psicológicos Básicos?",
    opcoes: [
      "Sensação é a interpretação simbólica; Percepção é a entrada física da luz na retina.",
      "Sensação é a detecção e transdução física do estímulo pelos órgãos sensoriais; Percepção é a organização e interpretação cerebral que atribui significado a esses dados.",
      "Sensação ocorre apenas na visão e Percepção apenas na audição.",
      "Não existe diferença técnica entre os dois conceitos."
    ],
    correta: 1,
    explicacao: "Correta: A sensação envolve recepção e transdução de energia física em sinais neurais; a percepção envolve a construção de sentido a partir desses sinais combinados com a experiência."
  },
  {
    id: 8,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Fácil",
    enunciado: "Quando uma pessoa entra em uma piscina inicialmente gelada e, após alguns minutos, passa a sentir a água em temperatura agradável, qual fenômeno sensorial ocorreu?",
    opcoes: [
      "Cegueira desatencional.",
      "Adaptação sensorial.",
      "Constância de tamanho.",
      "Interferência retroativa."
    ],
    correta: 1,
    explicacao: "Correta: A adaptação sensorial é a redução gradual da sensibilidade dos receptores diante de um estímulo contínuo e inalterado."
  },
  {
    id: 9,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Médio",
    enunciado: "Na Psicofísica, o que estabelecem os conceitos de Limiar Absoluto e Limiar Diferencial (Lei de Weber)?",
    opcoes: [
      "Limiar absoluto é a intensidade máxima que causa dor; limiar diferencial é sempre um valor fixo em gramas.",
      "Limiar absoluto é a menor intensidade de estímulo detectada em 50% das vezes; limiar diferencial é a menor diferença perceptível entre dois estímulos, que varia em proporção constante ao estímulo original.",
      "Ambos medem exclusivamente o QI do participante.",
      "Limiar diferencial só existe no olfato."
    ],
    correta: 1,
    explicacao: "Correta: O limiar absoluto define o mínimo detectável (50% das apresentações), enquanto a Lei de Weber mostra que a diferença apenas perceptível (DAP) depende de uma proporção constante do estímulo base."
  },
  {
    id: 10,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Médio",
    enunciado: "Segundo a Teoria da Detecção de Sinal (TDS), a detecção de um estímulo fraco em meio a ruído depende:",
    opcoes: [
      "Apenas da anatomia fixa do olho ou do ouvido, sem qualquer influência psicológica.",
      "Tanto da sensibilidade sensorial do observador quanto de fatores psicológicos (atenção, expectativa, fadiga e critério de decisão), gerando acertos, omissões, falsos alarmes ou rejeições corretas.",
      "Exclusivamente da iluminação da sala de testes.",
      "Apenas da memória procedural."
    ],
    correta: 1,
    explicacao: "Correta: A TDS demonstra que detectar um sinal é também um processo decisório influenciado por motivação, expectativas e consequências de cometer um falso alarme ou uma omissão."
  },
  {
    id: 11,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Fácil",
    enunciado: "Na retina humana, qual é a diferença funcional entre Cones e Bastonetes?",
    opcoes: [
      "Cones atuam na visão de cores e nitidez em ambientes iluminados; bastonetes são especializados em visão periférica e em ambientes com pouca luz.",
      "Bastonetes enxergam cores vivas e cones funcionam apenas no escuro.",
      "Cones ficam na cóclea e bastonetes ficam no nariz.",
      "Ambos têm exatamente a mesma sensibilidade à luz e às cores."
    ],
    correta: 0,
    explicacao: "Correta: Cones (concentrados na fóvea) garantem cores e alta acuidade diurna; bastonetes (na periferia) são altamente sensíveis à baixa luminosidade."
  },
  {
    id: 12,
    modulo: "Módulo 2: Sensação, Psicofísica e os Sistemas Sensoriais",
    nivel: "Médio",
    enunciado: "Sobre o Olfato, a Gustação e o Sistema Vestibular, assinale a alternativa correta:",
    opcoes: [
      "O sistema vestibular localiza-se na pele das mãos e detecta temperatura.",
      "O olfato possui via direta para o sistema límbico (explicando fortes memórias emocionais), a gustação detecta 5 sabores básicos (doce, salgado, azedo, amargo e umami) e o sistema vestibular (orelha interna) regula o equilíbrio.",
      "A gustação funciona de modo totalmente independente do olfato na percepção do sabor.",
      "A cóclea é o órgão responsável pelo tato."
    ],
    correta: 1,
    explicacao: "Correta: O bulbo olfatório projeta-se diretamente para áreas límbicas (amígdala/hipocampo), a gustação integra-se ao olfato para formar o sabor, e os canais semicirculares do sistema vestibular garantem o equilíbrio."
  },

  // ===================== MÓDULO 3 =====================
  {
    id: 13,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Médio",
    enunciado: "Na percepção de profundidade, qual alternativa apresenta respectivamente uma pista BINOCULAR e uma pista MONOCULAR?",
    opcoes: [
      "Perspectiva linear (binocular) e disparidade retiniana (monocular).",
      "Disparidade retiniana (binocular) e interposição/perspectiva linear (monocular).",
      "Adaptação sensorial (binocular) e fenômeno phi (monocular).",
      "Ambas dependem exclusivamente de um único olho."
    ],
    correta: 1,
    explicacao: "Correta: A disparidade retiniana exige a diferença entre as imagens captadas pelos dois olhos (binocular), enquanto interposição, tamanho relativo e perspectiva linear funcionam com um olho só (monoculares)."
  },
  {
    id: 14,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Fácil",
    enunciado: "A Lei da Gestalt segundo a qual o cérebro tende a completar mentalmente espaços vazios ou contornos interrompidos para perceber uma figura inteira denomina-se:",
    opcoes: [
      "Lei da Proximidade.",
      "Lei do Fechamento (Clausura).",
      "Lei da Semelhança.",
      "Lei da Redução do Impulso."
    ],
    correta: 1,
    explicacao: "Correta: A Lei do Fechamento leva nossa percepção a preencher lacunas incompletas para formar totalidades coerentes."
  },
  {
    id: 15,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Fácil",
    enunciado: "Qual princípio resume a abordagem da Psicologia da Gestalt sobre a organização perceptual?",
    opcoes: [
      "A percepção é apenas a soma mecânica e isolada de estímulos sem relação entre si.",
      "'O todo é diferente da soma das partes', pois a mente organiza automaticamente os estímulos em totalidades significativas (Lei da Pregnância/Boa Forma).",
      "O ser humano só percebe objetos que toca com as mãos.",
      "A percepção visual não depende do sistema nervoso."
    ],
    correta: 1,
    explicacao: "Correta: Para a Gestalt, percebemos configurações globais organizadas por princípios como figura-fundo, proximidade, semelhança, fechamento, boa continuidade e pregnância."
  },
  {
    id: 16,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Médio",
    enunciado: "Um controlador de tráfego aéreo precisa monitorar telas de radar continuamente durante 2 horas sem perder o foco para detectar qualquer anomalia rara. Qual tipo de atenção é predominantemente exigido nessa tarefa?",
    opcoes: [
      "Atenção sustentada (vigilância).",
      "Memória procedural.",
      "Adaptação olfatória.",
      "Fenômeno phi."
    ],
    correta: 0,
    explicacao: "Correta: A atenção sustentada (ou vigilância) corresponde à capacidade de manter o foco atencional contínuo por períodos prolongados."
  },
  {
    id: 17,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Médio",
    enunciado: "No estudo da Atenção, o clássico 'efeito coquetel' (conseguir acompanhar a conversa de um amigo em uma festa ruidosa, mas desviar o foco imediatamente ao ouvir o próprio nome dito em outra roda) ilustra principalmente:",
    opcoes: [
      "Amnésia retrógrada.",
      "Atenção seletiva aliada ao monitoramento automático de estímulos pessoalmente relevantes.",
      "Ausência total de processamento auditivo.",
      "Percepção de tamanho."
    ],
    correta: 1,
    explicacao: "Correta: O efeito coquetel demonstra como a atenção seletiva filtra ruídos de fundo sem desligar completamente o rastreamento pré-atencional de informações de alta relevância pessoal (como o próprio nome)."
  },
  {
    id: 18,
    modulo: "Módulo 3: Percepção, Gestalt, Atenção e Consciência",
    nivel: "Difícil",
    enunciado: "Quais são as quatro propriedades clássicas da Consciência e qual é seu principal impacto adaptativo sobre o comportamento humano?",
    opcoes: [
      "Rigidez, imobilidade, automatismo e isolamento; impede o planejamento.",
      "Intencionalidade, unidade, seletividade e transitoriedade; permite inibir impulsos automáticos, lidar com situações novas, planejar e tomar decisões deliberadas.",
      "Apenas sono REM e vigília; não tem relação com a autorregulação.",
      "Proximidade, semelhança, fechamento e continuidade."
    ],
    correta: 1,
    explicacao: "Correta: A consciência (intencional, unificada, seletiva e transitória) possibilita o controle executivo deliberado, a flexibilidade diante do novo e o comportamento ético-reflexivo."
  },

  // ===================== MÓDULO 4 =====================
  {
    id: 19,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Fácil",
    enunciado: "Quais são as três etapas fundamentais do processamento da memória humana?",
    opcoes: [
      "Sensação, adaptação e motivação.",
      "Codificação, armazenamento (consolidação) e evocação (recuperação).",
      "Atenção dividida, sono REM e homeostase.",
      "Proximidade, fechamento e pregnância."
    ],
    correta: 1,
    explicacao: "Correta: Para lembrar de algo, o cérebro precisa codificar a informação, armazená-la/consolidá-la ao longo do tempo e evocá-la no momento necessário."
  },
  {
    id: 20,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Médio",
    enunciado: "No modelo de Memória de Trabalho (Operacional) proposto por Alan Baddeley e Graham Hitch, qual componente é responsável por coordenar a atenção e gerenciar a alça fonológica, o esboço visuoespacial e o retentor episódico?",
    opcoes: [
      "Memória icônica.",
      "Executivo central.",
      "Bulbo olfatório.",
      "Sistema vestibular."
    ],
    correta: 1,
    explicacao: "Correta: O Executivo Central coordena os recursos atencionais e controla os subsistemas de armazenamento ativo (alça fonológica, esboço visuoespacial e retentor episódico)."
  },
  {
    id: 21,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Fácil",
    enunciado: "Saber andar de bicicleta (habilidade motora), lembrar o conceito de 'psicofísica' (conhecimento geral) e recordar a festa do seu último aniversário (evento pessoal) ativam, respectivamente, quais sistemas de memória de longo prazo?",
    opcoes: [
      "Episódica, procedural e semântica.",
      "Implícita procedural, explícita semântica e explícita episódica.",
      "Sensorial icônica, ecoica e de curto prazo.",
      "Semântica, episódica e sensorial."
    ],
    correta: 1,
    explicacao: "Correta: Habilidades motoras pertencem à memória implícita procedural; conceitos/fatos gerais à explícita semântica; e eventos autobiográficos à explícita episódica."
  },
  {
    id: 22,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Difícil",
    enunciado: "O célebre Caso H.M. (Henry Molaison), submetido à remoção bilateral dos lobos temporais mediais (incluindo o hipocampo) para tratar epilepsia, revolucionou a neuropsicologia porque demonstrou que:",
    opcoes: [
      "Toda a memória humana fica armazenada exclusivamente no hipocampo, fazendo H.M. esquecer sua infância e perder a fala.",
      "O hipocampo é essencial para consolidar novas memórias explícitas (gerando amnésia anterógrada), mas a memória implícita procedural e a memória de curto prazo permanecem preservadas por dependerem de outros sistemas neurais.",
      "A memória de longo prazo não tem qualquer relação com o cérebro.",
      "H.M. perdeu apenas a capacidade de andar de bicicleta e manteve intacta a gravação de nomes novos."
    ],
    correta: 1,
    explicacao: "Correta: H.M. não conseguia formar novas memórias declarativas (amnésia anterógrada), mas conseguia aprender novas tarefas motoras (memória procedural intacta), comprovando a dissociação anatômica entre memória explícita e implícita."
  },
  {
    id: 23,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Médio",
    enunciado: "Ao trocar a senha do banco, um usuário tenta digitar a senha nova, mas continua digitando automaticamente a senha antiga. Esse exemplo cotidiano de esquecimento normal ilustra:",
    opcoes: [
      "Interferência proativa (uma memória antiga interfere na recordação de uma informação nova).",
      "Amnésia anterógrada por lesão hipocampal.",
      "Demência vascular.",
      "Efeito coquetel."
    ],
    correta: 0,
    explicacao: "Correta: Na interferência proativa, conteúdos aprendidos anteriormente dificultam a evocação de conteúdos novos; na interferência retroativa, o aprendizado novo atrapalha a lembrança do antigo."
  },
  {
    id: 24,
    modulo: "Módulo 4: Memória, Esquecimento, Caso H.M. e Distorções",
    nivel: "Médio",
    enunciado: "As pesquisas clássicas de Elizabeth Loftus sobre distorções da memória e depoimentos de testemunhas oculares comprovaram que:",
    opcoes: [
      "A memória humana funciona como uma gravação de vídeo exata e imutável.",
      "A memória é um processo reconstrutivo vulnerável ao efeito de desinformação e a perguntas sugestivas, podendo gerar falsas memórias relatadas com alta confiança.",
      "Falsas memórias ocorrem apenas em pacientes com esquizofrenia.",
      "Quanto mais confiante a testemunha estiver, maior é a garantia de que a memória não sofreu distorção."
    ],
    correta: 1,
    explicacao: "Correta: Toda evocação reconstrói a lembrança; informações enganosas introduzidas após o evento podem ser incorporadas à memória original (efeito de desinformação / falsas memórias)."
  },

  // ===================== MÓDULO 5 =====================
  {
    id: 25,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Fácil",
    enunciado: "Na Psicologia, como se diferenciam a motivação intrínseca e a motivação extrínseca?",
    opcoes: [
      "Intrínseca depende apenas de dinheiro; extrínseca depende apenas de curiosidade.",
      "Intrínseca decorre do prazer, interesse e sentido próprios da atividade; extrínseca é movida por recompensas externas ou evitação de punições.",
      "Intrínseca ocorre apenas em animais e extrínseca apenas em humanos.",
      "Não há diferença entre elas."
    ],
    correta: 1,
    explicacao: "Correta: Na motivação intrínseca a recompensa é a própria realização da tarefa; na extrínseca a tarefa é um meio para alcançar um ganho externo ou evitar consequência negativa."
  },
  {
    id: 26,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Médio",
    enunciado: "Segundo a Teoria da Redução do Impulso (Clark Hull), qual mecanismo explica comportamentos motivados primários como comer e beber água?",
    opcoes: [
      "A busca por níveis extremos de estresse psicológico.",
      "Uma necessidade fisiológica gera um estado interno de tensão (impulso/drive), levando o organismo a agir para restaurar a homeostase (equilíbrio interno).",
      "Apenas a imitação social sem base biológica.",
      "A busca exclusiva por autorrealização artística."
    ],
    correta: 1,
    explicacao: "Correta: Para a teoria da redução do impulso, déficits biológicos geram tensão motivacional (drive) que é reduzida quando o comportamento restabelece a homeostase."
  },
  {
    id: 27,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Médio",
    enunciado: "A Lei de Yerkes-Dodson (Teoria da Excitação Ótima) descreve a relação entre nível de ativação/alerta e desempenho em uma tarefa como:",
    opcoes: [
      "Quanto maior o nível de ansiedade e excitação, sempre melhor será o desempenho em provas difíceis.",
      "Uma curva em U invertido: níveis muito baixos (tédio) ou muito altos (ansiedade excessiva) prejudicam o desempenho, enquanto um nível moderado/ótimo favorece a melhor performance.",
      "Totalmente sem relação com a motivação.",
      "Apenas válida para reflexos medulares."
    ],
    correta: 1,
    explicacao: "Correta: O desempenho atinge o pico em um nível ótimo de excitação (mais moderado para tarefas complexas e um pouco mais elevado para tarefas simples), caindo nos extremos de apatia ou pânico."
  },
  {
    id: 28,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Fácil",
    enunciado: "Assinale a alternativa que apresenta a ordem CORRETA dos cinco níveis da Pirâmide da Hierarquia de Necessidades de Abraham Maslow, da base até o topo:",
    opcoes: [
      "Segurança -> Fisiológicas -> Estima -> Sociais -> Autorrealização.",
      "Fisiológicas -> Segurança -> Sociais (Amor e Pertencimento) -> Estima -> Autorrealização.",
      "Autorrealização -> Estima -> Sociais -> Segurança -> Fisiológicas.",
      "Fisiológicas -> Estima -> Segurança -> Autorrealização -> Sociais."
    ],
    correta: 1,
    explicacao: "Correta: A hierarquia de Maslow parte da base biológica (Fisiológicas -> Segurança) para as necessidades psicossociais (Sociais/Pertencimento -> Estima) até o crescimento pleno no topo (Autorrealização)."
  },
  {
    id: 29,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Médio",
    enunciado: "Sobre as bases cerebrais dos comportamentos motivados, qual é a principal via neural associada ao Sistema de Recompensa e qual neurotransmissor tem papel central na saliência motivacional ('querer'/busca)?",
    opcoes: [
      "Córtex visual primário e acetilcolina.",
      "Via mesolímbica (Área Tegmental Ventral -> Núcleo Accumbens -> Córtex Pré-Frontal) e dopamina.",
      "Medula espinal e insulina.",
      "Nervo óptico e melatonina."
    ],
    correta: 1,
    explicacao: "Correta: A via mesolímbica dopaminérgica (ATV -> Núcleo Accumbens -> Córtex Pré-Frontal) é o núcleo do sistema de recompensa, mediando o impulso de busca, a antecipação e o aprendizado por reforço."
  },
  {
    id: 30,
    modulo: "Módulo 5: Motivação, Comportamentos Motivados e Bases Cerebrais",
    nivel: "Difícil",
    enunciado: "Qual estrutura cerebral desempenha o papel central na regulação de comportamentos motivados homeostáticos como fome (integrando sinais de grelina e leptina), sede, temperatura corporal e comportamento sexual?",
    opcoes: [
      "Lobo occipital.",
      "Hipotálamo.",
      "Área de Broca.",
      "Cóclea."
    ],
    correta: 1,
    explicacao: "Correta: O hipotálamo é o centro integrador da homeostase e dos comportamentos motivados primários, monitorando continuamente hormônios e sinais metabólicos para manter o equilíbrio do organismo."
  }
];
