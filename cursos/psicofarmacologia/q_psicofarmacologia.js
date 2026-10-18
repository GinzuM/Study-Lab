// =========================================================================
// BANCO DE QUESTÕES E SIMULADO (q_psicofarmacologia.js)
// 36 Questões de Quiz + Simulado Completo de 10 Módulos (50 Itens) em PT-BR
// =========================================================================

const questionsData = {
  quiz: [
    {
      topicId: "sinapse",
      question: "Qual evento molecular na membrana pré-sináptica deflagra obrigatoriamente a exocitose das vesículas neuroquímicas?",
      hint: "Envolve a entrada de um íon bivalente após a despolarização.",
      options: [
        "Efluxo acelerado de íons potássio.",
        "Abertura de canais de cálcio dependentes de voltagem e influxo de Ca²⁺.",
        "Bloqueio da bomba de sódio-potássio.",
        "Fechamento prematuro de canais de cloro."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "A entrada massiva de íons cloreto (Cl⁻) numa célula nervosa após a ligação do neurotransmissor resulta em:",
      hint: "O citoplasma fica mais negativo.",
      options: [
        "Despolarização severa.",
        "Potencial Pós-Sináptico Inibitório (PPSI), afastando a célula do limiar de disparo.",
        "Potencial Pós-Sináptico Excitatório (PPSE).",
        "Liberação automática de vesículas na fenda."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "Um Potencial Pós-Sináptico Excitatório (PPSE) caracteriza-se eletrofisiologicamente por:",
      hint: "Aproxima o potencial do limiar de ação.",
      options: [
        "Despolarização local da membrana induzida frequentemente por influxo de sódio (Na⁺).",
        "Hiperpolarização membranar contínua.",
        "Efluxo massivo de grandes ânions proteicos.",
        "Encerramento de canais iônicos de cálcio."
      ],
      correct: 0
    },
    {
      topicId: "sinapse",
      question: "O complexo proteico SNARE, localizado no terminal pré-sináptico, necessita da interação direta com qual elemento para fundir a vesícula à membrana?",
      hint: "O mesmo íon responsável pelo gatilho da exocitose.",
      options: [
        "Dopamina livre.",
        "Magnésio (Mg²⁺).",
        "Cálcio (Ca²⁺).",
        "Enzima Acetilcolinesterase."
      ],
      correct: 2
    },
    {
      topicId: "agonista_antagonista",
      question: "Um fármaco com alta afinidade pelo receptor, mas com eficácia e atividade intrínseca rigorosamente nula, classifica-se como:",
      hint: "Ocupa a fechadura mas não gira a chave.",
      options: [
        "Agonista parcial.",
        "Modulador alostérico.",
        "Antagonista silencioso.",
        "Inibidor enzimático."
      ],
      correct: 2
    },
    {
      topicId: "agonista_antagonista",
      question: "Na presença de altas concentrações de um agonista pleno endógeno, a administração de um agonista parcial resultará funcionalmente num efeito:",
      hint: "Ele compete pelo espaço e tem menor eficácia que o pleno.",
      options: [
        "Super-agonista (potencialização extrema).",
        "De antagonismo funcional ou parcial, reduzindo a resposta biológica máxima.",
        "Nulo, pois não tem afinidade para competir.",
        "Neurotóxico mediato."
      ],
      correct: 1
    },
    {
      topicId: "agonista_antagonista",
      question: "O mecanismo de ação de antipsicóticos típicos como o Haloperidol assenta fundamentalmente na ação como:",
      hint: "Bloqueiam os receptores D2 na via mesolímbica.",
      options: [
        "Agonistas dopaminérgicos puros.",
        "Inibidores da recaptação de noradrenalina.",
        "Antagonistas puros dos receptores dopaminérgicos D₂.",
        "Indutores da degradação de acetilcolina."
      ],
      correct: 2
    },
    {
      topicId: "neurotransmissores",
      question: "Qual neurotransmissor atua como principal agente inibitório do cérebro, cuja estimulação induz ansiólise e sedação?",
      hint: "Associa-se frequentemente a fármacos calmantes como os benzodiazepínicos.",
      options: [
        "Dopamina.",
        "Glutamato.",
        "Ácido gama-aminobutírico (GABA).",
        "Acetilcolina."
      ],
      correct: 2
    },
    {
      topicId: "neurotransmissores",
      question: "A excitotoxicidade, que resulta na morte neuronal por influxo descontrolado de cálcio celular, é mediada pelo excesso crônico de qual neurotransmissor?",
      hint: "É o principal neurotransmissor excitatório.",
      options: [
        "Glicina.",
        "Serotonina.",
        "Glutamato.",
        "GABA."
      ],
      correct: 2
    },
    {
      topicId: "neurotransmissores",
      question: "No Sistema Nervoso Periférico, a contração das fibras musculares esqueléticas é diretamente mediada pela liberação na fenda sináptica de:",
      hint: "Neurotransmissor cuja perda central causa doença de Alzheimer.",
      options: [
        "Noradrenalina.",
        "Acetilcolina.",
        "Endorfina.",
        "Dopamina."
      ],
      correct: 1
    },
    {
      topicId: "neurotransmissores",
      question: "As vias de alerta global, estado de vigília e regulação da pressão arterial estão fortemente associadas à função da:",
      hint: "Amina intimamente ligada à resposta de luta ou fuga.",
      options: [
        "Melatonina.",
        "Noradrenalina.",
        "Histamina.",
        "Serotonina."
      ],
      correct: 1
    },
    {
      topicId: "neurotransmissores",
      question: "A regulação primordial dos impulsos corporais, incluindo humor, temperatura, ciclos de sono e saciedade alimentar, é função da:",
      hint: "Neurotransmissor alvo primário dos inibidores seletivos como a Fluoxetina.",
      options: [
        "Serotonina (5-HT).",
        "Ocitocina.",
        "Glicina.",
        "Substância P."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "Os sintomas positivos da esquizofrenia (delírios persecutórios e alucinações) são justificados, neurobiologicamente, por:",
      hint: "Atividade exagerada numa via subcortical específica.",
      options: [
        "Hipoatividade dopaminérgica na via mesocortical.",
        "Hiperatividade da transmissão dopaminérgica na via mesolímbica.",
        "Degeneração massiva de neurônios noradrenérgicos do Locus Coeruleus.",
        "Déficit serotoninérgico no córtex motor primário."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Os sintomas negativos da esquizofrenia (embotamento afetivo, apatia e déficits cognitivos frontais) associam-se funcionalmente a:",
      hint: "Via dopaminérgica que inerva o córtex pré-frontal.",
      options: [
        "Hipoatividade dopaminérgica na via mesocortical.",
        "Hiperativação dos receptores colinérgicos periféricos.",
        "Aumento extremo da densidade de receptores GABAA.",
        "Supressão da síntese de BDNF no cerebelo."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "A via do cérebro diretamente responsável pela neurobiologia da adição e do vício, que converge no Núcleo Accumbens, é a:",
      hint: "Circuito de reforço ativado por drogas de abuso.",
      options: [
        "Via Nigroestriatal.",
        "Via de Recompensa Mesolímbica.",
        "Via Tuberoinfundibular.",
        "Via Espinotalâmica lateral."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Qual o efeito compensatório celular crônico provocado pela inundação suprafisiológica contínua de dopamina pelo uso abusivo de drogas?",
      hint: "O cérebro tenta defender-se reduzindo a sensibilidade.",
      options: [
        "Dessensibilização e redução (down-regulation) dos receptores dopaminérgicos D₂ no corpo estriado.",
        "Aumento exponencial de receptores D₁ no hipocampo.",
        "Bloqueio permanente dos canais de cálcio dependentes de voltagem.",
        "Transformação da dopamina endógena em glutamato puro."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "O déficit de memória na Doença de Alzheimer é clinicamente atenuado através do uso de inibidores da acetilcolinesterase. Qual é a lógica desta farmacologia?",
      hint: "Se a enzima degrada o neurotransmissor, inibi-la fará o quê?",
      options: [
        "Bloquear a recaptação para a fenda sináptica de toda a serotonina cerebral.",
        "Destruir as placas beta-amiloides ativando enzimas hepáticas.",
        "Inibir a degradação enzimática, prolongando a permanência e a concentração de acetilcolina na fenda sináptica.",
        "Estimular a via nigroestriatal para combater o parkinsonismo associado."
      ],
      correct: 2
    },
    {
      topicId: "depressao_teorias",
      question: "Qual fator constitui o principal 'paradoxo temporal' que evidencia a insuficiência da Teoria Monoaminérgica clássica da depressão?",
      hint: "Há um desfasamento entre o momento do efeito químico e do efeito no humor.",
      options: [
        "Os antidepressivos aumentam a degradação de enzimas, mas melhoram a cognição em segundos.",
        "Os fármacos elevam as monoaminas na fenda em horas, mas a resposta terapêutica clínica requer de 2 a 4 semanas para se verificar.",
        "A serotonina apenas afeta pacientes com menos de 30 anos.",
        "Os receptores muscarínicos demoram um ano a reagir aos ISRS."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "Na psicofarmacologia moderna, o atraso de semanas para o efeito clínico do antidepressivo é explicado neurologicamente pelo processo de:",
      hint: "Envolve receptores que funcionam como 'freios' pré-sinápticos.",
      options: [
        "Dessensibilização e down-regulation progressiva de autorreceptores inibitórios pré-sinápticos (como 5-HT1A).",
        "Tempo de trânsito lento do fármaco na barreira hematoencefálica.",
        "Acumulação gradual de metabólitos tóxicos no fígado.",
        "Morte seletiva de neurônios noradrenérgicos."
      ],
      correct: 0
    },
    {
      topicId: "depressao_teorias",
      question: "A Teoria Neurotrófica da Depressão foca a ação danosa do estresse crônico e hipercortisolismo, que resulta em:",
      hint: "Falta de 'adubo' (BDNF) para as árvores dendríticas.",
      options: [
        "Ativação excessiva do sistema imunológico no estômago.",
        "Supressão da expressão de BDNF, levando à atrofia de dendritos e perda sináptica no hipocampo.",
        "Proliferação caótica e descontrolada de células da glia no cerebelo.",
        "Conversão das vias inibitórias do GABA em vias ativadoras letais."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "Segundo a perspectiva neurotrófica, qual é a verdadeira função a longo prazo dos fármacos antidepressivos na célula neuronal?",
      hint: "Ajudam a reparar os ramos secos dos neurônios.",
      options: [
        "Reduzir permanentemente a plasticidade celular para conservar energia.",
        "Induzir cascatas intracelulares tardias que reativam o BDNF, restaurando a sinaptogênese.",
        "Esvaziar todas as vesículas pré-sinápticas para reiniciar o cérebro.",
        "Bloquear a fosforilação oxidativa mitocondrial nas áreas afetadas."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "A proteína BDNF (Brain-Derived Neurotrophic Factor) tem como papel essencial no encéfalo saudável:",
      hint: "Está relacionada com a manutenção da rede neural.",
      options: [
        "Sustentar a neuroplasticidade, a sobrevivência neuronal e a neurogênese no hipocampo.",
        "Atuar como principal neurotransmissor excitador nos gânglios da base.",
        "Quebrar enzimaticamente a acetilcolina na placa motora.",
        "Transportar elétrons na respiração celular dos astrócitos."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Os Antidepressivos Tricíclicos (ADTs), como a Amitriptilina, atuam fundamentalmente bloqueando:",
      hint: "Atuam simultaneamente em duas monoaminas importantes.",
      options: [
        "A recaptação celular de Serotonina (SERT) e de Noradrenalina (NET).",
        "Exclusivamente os receptores dopaminérgicos da via mesolímbica.",
        "A liberação de glutamato mediada por canais de cálcio.",
        "A síntese de melatonina na glândula pineal."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Efeitos adversos comuns dos Tricíclicos, como boca seca, visão turva, obstipação severa e retenção urinária, devem-se ao seu efeito:",
      hint: "Bloqueiam os receptores de um neurotransmissor periférico.",
      options: [
        "Antagonista de receptores adrenérgicos α₁.",
        "Antagonista de receptores colinérgicos muscarínicos.",
        "Agonista de receptores histamínicos H₁.",
        "Inibidor da Monoamina Oxidase (IMAO)."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Em caso de superdosagem aguda por Antidepressivos Tricíclicos, o risco imediato e fatal de morte ocorre habitualmente devido a:",
      hint: "Toxicidade a nível elétrico no sistema cardiovascular.",
      options: [
        "Falência hepática fulminante por toxicidade enzimática.",
        "Cardiotoxicidade letal desencadeada por bloqueio severo de canais de sódio miocárdicos (arritmias).",
        "Hipertermia maligna irreversível com destruição muscular.",
        "Edema pulmonar por hiperativação dos receptores GABAA."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual a vantagem farmacológica fulcral que tornou os Inibidores Seletivos (ISRS) a primeira linha de tratamento antidepressivo em detrimento dos Tricíclicos?",
      hint: "Relaciona-se com a segurança no uso clínico.",
      options: [
        "A sua eficácia é três vezes superior na reversão imediata da depressão.",
        "Não precisam de passar pelo fígado, sendo metabolizados diretamente no estômago.",
        "Apresentam elevada segurança e baixíssima letalidade em casos de superdosagem, com muito menos efeitos adversos perigosos.",
        "Contêm BDNF sintético que penetra de imediato a barreira cerebral."
      ],
      correct: 2
    },
    {
      topicId: "sinapse",
      question: "O que acontece imediatamente após a chegada do potencial de ação ao terminal axonal?",
      options: [
        "Abertura de canais de potássio voltagem-dependentes.",
        "Abertura de canais de cálcio dependentes de voltagem.",
        "Fechamento da fenda sináptica.",
        "Degradação instantânea do axônio."
      ],
      correct: 1
    },
    {
      topicId: "agonista_antagonista",
      question: "O que define a afinidade de um fármaco?",
      options: [
        "Sua capacidade de ativar o receptor.",
        "Sua força de ligação ao sítio ativo do receptor.",
        "Sua velocidade de excreção renal.",
        "Sua solubilidade no tecido adiposo."
      ],
      correct: 1
    },
    {
      topicId: "neurotransmissores",
      question: "Qual enzima é responsável por degradar a acetilcolina na fenda sináptica?",
      options: [
        "Monoamina oxidase (MAO).",
        "Catecol-O-metiltransferase (COMT).",
        "Acetilcolinesterase.",
        "Descarboxilase."
      ],
      correct: 2
    },
    {
      topicId: "psicose_dependencia",
      question: "Qual via dopaminérgica está envolvida no controle motor extrapiramidal?",
      options: [
        "Via Mesolímbica.",
        "Via Mesocortical.",
        "Via Nigroestriatal.",
        "Via Tuberoinfundibular."
      ],
      correct: 2
    },
    {
      topicId: "depressao_teorias",
      question: "Qual é o efeito do estresse crônico sobre o fator neurotrófico BDNF?",
      options: [
        "Aumento drástico de sua expressão.",
        "Supressão da expressão gênica e atrofia sináptica.",
        "Transformação em dopamina pura.",
        "Bloqueio de sua eliminação renal."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual receptor histamínico bloqueado pelos tricíclicos causa sedação e ganho de peso?",
      options: [
        "Receptor H₁.",
        "Receptor H₂.",
        "Receptor Muscarínico M1.",
        "Receptor Alfa-2."
      ],
      correct: 0
    },
    {
      topicId: "sinapse",
      question: "Como o Potencial Pós-Sináptico Excitatório (PPSE) afeta o neurônio?",
      options: [
        "Hiperpolariza a membrana celular.",
        "Despolariza a membrana aproximando-a do limiar de disparo.",
        "Bloqueia a entrada de íons sódio.",
        "Destrói as vesículas sinápticas."
      ],
      correct: 1
    },
    {
      topicId: "agonista_antagonista",
      question: "Qual é a atividade intrínseca de um antagonista silencioso?",
      options: [
        "100%",
        "50%",
        "0%",
        "Variável conforme a dose."
      ],
      correct: 2
    },
    {
      topicId: "neurotransmissores",
      question: "Onde se localiza o principal núcleo colinérgico afetado na Doença de Alzheimer?",
      options: [
        "Locus Coeruleus.",
        "Núcleo Basal de Meynert.",
        "Área Tegmentar Ventral.",
        "Substância Negra."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual é o principal transportador inibido pelos ISRS?",
      options: [
        "NET (Noradrenalina)",
        "DAT (Dopamina)",
        "SERT (Serotonina)",
        "GAT-1 (GABA)"
      ],
      correct: 2
    }
  ],

  // SIMULADO COMPLETO (10 Módulos / 50 Itens)
  simulado: [
    {
      moduleId: 1,
      title: "MÓDULO 1: Comunicação Neural & Fisiologia da Sinapse",
      explanationNumber: 1,
      explanation: "A transmissão da informação química entre os neurônios inicia-se com a chegada do potencial de ação ao terminal axônico. Isso provoca a abertura de canais de Cálcio (Ca²⁺) dependentes de voltagem. O influxo rápido de Ca²⁺ atua como o gatilho molecular para a fusão das vesículas sinápticas (via complexo SNARE) e a consequente exocitose dos neurotransmissores na fenda sináptica.",
      questions: [
        {
          number: 2,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Qual íon atua diretamente como gatilho biofísico mandatório para a exocitose das vesículas sinápticas no terminal pré-sináptico?",
          options: ["A) Íon Cálcio (Ca²⁺)", "B) Íon Potássio (K⁺)"],
          correct: 0
        },
        {
          number: 3,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Após a liberação do neurotransmissor na fenda, a sua ligação a receptores pós-sinápticos gera alterações elétricas locais. O Potencial Pós-Sináptico Excitatório (PPSE) caracteriza-se por:",
          options: [
            "A) Causar hiperpolarização por influxo de íons cloreto (Cl⁻).",
            "B) Provocar despolarização local da membrana, tipicamente por influxo de cátions como o sódio (Na⁺), aproximando a célula do limiar de disparo.",
            "C) Bloquear de forma permanente os canais de cálcio voltagem-dependentes.",
            "D) Induzir a destruição imediata das proteínas do complexo SNARE."
          ],
          correct: 1
        },
        {
          number: 4,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Sobre os potenciais pós-sinápticos e os eventos iônicos na membrana, analise as afirmativas e assinale a incorreta:",
          options: [
            "A) O PPSE afasta o neurônio do limiar de disparo ao permitir a saída massiva de íons de sódio para o meio extracelular.",
            "B) O PPSI (Potencial Pós-Sináptico Inibitório) hiperpolariza a membrana celular, tornando o citoplasma mais negativo.",
            "C) A entrada de íons cloreto (Cl⁻) através de receptores ionotrópicos como o GABA_A contribui diretamente para a inibição sináptica.",
            "D) O efluxo de íons potássio (K⁺) também pode gerar um efeito inibitório ao afastar o potencial de membrana do limiar de ação.",
            "E) Enquanto o PPSE facilita a despolarização, o PPSI atua como um 'freio' eletrofisiológico no neurônio receptor.",
            "F) A chegada do potencial de ação ao terminal pré-sináptico é o evento elétrico que antecede a abertura dos canais de cálcio."
          ],
          correct: 0
        },
        {
          number: 5,
          type: "written",
          label: "Pergunta escrita",
          question: "Explique detalhadamente qual é a consequência bioelétrica e funcional para o neurônio receptor quando ocorre um Potencial Pós-Sináptico Inibitório (PPSI) mediado pela entrada de íons cloreto (Cl⁻).",
          expectedAnswer: "A entrada de íons cloreto (Cl⁻), que possuem carga elétrica negativa, aumenta a eletronegatividade do interior celular, provocando a hiperpolarização da membrana pós-sináptica. Funcionalmente, isso afasta o neurônio do limiar de disparo, atuando como um freio eletrofisiológico que dificulta a geração de um potencial de ação."
        }
      ]
    },
    {
      moduleId: 2,
      title: "MÓDULO 2: Farmacodinâmica (Agonistas vs. Antagonistas)",
      explanationNumber: 6,
      explanation: "A farmacodinâmica estuda o mecanismo de ação dos fármacos nos receptores. Um Agonista Pleno possui afinidade pelo receptor e alta atividade intrínseca (100%), ativando totalmente a cascata de transdução de sinal celular. Em contrapartida, um Antagonista Silencioso possui afinidade pelo sítio de ligação, mas a sua atividade intrínseca é estritamente nula (0%), bloqueando o receptor contra a ação de agonistas endógenos.",
      questions: [
        {
          number: 7,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Um fármaco que ocupa o receptor sem possuir qualquer atividade intrínseca, bloqueando o acesso de outras moléculas, é classificado como:",
          options: ["A) Agonista pleno", "B) Antagonista silencioso"],
          correct: 1
        },
        {
          number: 8,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Qual das seguintes alternativas descreve com precisão a propriedade farmacodinâmica de um agonista parcial?",
          options: [
            "A) Possui afinidade pelo receptor, mas eficácia intrínseca nula (0%).",
            "B) Destrói covalentemente a proteína receptora para impedir a sinalização.",
            "C) Possui afinidade, mas a sua atividade intrínseca é submáxima, podendo atuar como um antagonista relativo na presença de um agonista pleno.",
            "D) Converte-se espontaneamente num inibidor enzimático reversível."
          ],
          correct: 2
        },
        {
          number: 9,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Em relação aos conceitos farmacodinâmicos fundamentais, assinale a alternativa correta:",
          options: [
            "A) O agonista pleno caracteriza-se por ter afinidade nula e atividade intrínseca máxima.",
            "B) O antagonista competitivo possui atividade intrínseca de 50%, gerando metade da resposta máxima do tecido.",
            "C) Um agonista parcial nunca consegue competir com um agonista pleno, independentemente da concentração administrada.",
            "D) O antagonista silencioso (ou neutro) liga-se ao receptor com afinidade, mas a sua eficácia em ativar a via de transdução é de 0%.",
            "E) Os fármacos antagonistas induzem sempre uma despolarização maciça da membrana pós-sináptica.",
            "F) A afinidade refere-se à capacidade do fármaco de desencadear a cascata intracelular após a ligação."
          ],
          correct: 3
        },
        {
          number: 10,
          type: "written",
          label: "Pergunta escrita",
          question: "Diferencie, com base nos conceitos de afinidade e atividade intrínseca, a atuação de um Agonista Pleno face a um Antagonista Silencioso no sistema nervoso central.",
          expectedAnswer: "Ambos possuem afinidade pelo receptor. Contudo, o Agonista Pleno apresenta atividade intrínseca máxima (100%), alterando a conformação do receptor e ativando a transdução celular. Já o Antagonista Silencioso possui atividade intrínseca nula (0%): ele apenas ocupa o receptor sem ativá-lo, impedindo fisicamente a ligação de agonistas endógenos."
        }
      ]
    },
    {
      moduleId: 3,
      title: "MÓDULO 3: Neurotransmissores Clássicos",
      explanationNumber: 11,
      explanation: "Os neurotransmissores desempenham papéis vitais no SNC e SNP. O Glutamato é o principal agente excitatório cerebral, essencial para a plasticidade sináptica (LTP), embora o seu excesso crônico cause excitotoxicidade. O GABA atua como o principal inibidor, promovendo ansiólise e sedação. As monoaminas regulam o humor, o alerta e os circuitos de recompensa.",
      questions: [
        {
          number: 12,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Qual é o principal neurotransmissor inibitório do sistema nervoso central?",
          options: ["A) Glutamato", "B) GABA"],
          correct: 1
        },
        {
          number: 13,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "O excesso crônico e desregulado de qual neurotransmissor no SNC pode desencadear neurotoxicidade (excitotoxicidade) devido a um influxo massivo de íons cálcio?",
          options: ["A) Serotonina", "B) GABA", "C) Glutamato", "D) Acetilcolina"],
          correct: 2
        },
        {
          number: 14,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Sobre as funções atribuídas aos principais neurotransmissores centrais e periféricos, analise as proposições e aponte a falsa:",
          options: [
            "A) A Noradrenalina está fortemente ligada a estados de alerta, foco e mediação da resposta de luta ou fuga.",
            "B) A Dopamina participa de forma crítica nas vias de recompensa e prazer, além de regular o tônus motor.",
            "C) A Serotonina modula o humor, o sono, a saciedade e os níveis de impulsividade.",
            "D) A Acetilcolina atua no SNC na sustentação da atenção e memória, e no SNP comanda a contração na junção neuromuscular.",
            "E) O GABA atua estritamente como um aminoácido excitatório que abre canais de sódio voltagem-dependentes no córtex motor.",
            "F) O Glutamato é indispensável para a potenciação a longo prazo (LTP) e consolidação de memórias."
          ],
          correct: 4
        },
        {
          number: 15,
          type: "written",
          label: "Pergunta escrita",
          question: "Descreva as funções centrais distintas da Acetilcolina quando comparamos a sua atuação no Sistema Nervoso Central (SNC) e no Sistema Nervoso Periférico (SNP).",
          expectedAnswer: "No SNC, a Acetilcolina atua em vias corticais e hipocampais (como as projetadas pelo Núcleo Basal de Meynert), sendo indispensável para a atenção e consolidação da memória. No SNP, atua no sistema autônomo parassimpático e na junção neuromuscular somática, promovendo a contração dos músculos esqueléticos."
        }
      ]
    },
    {
      moduleId: 4,
      title: "MÓDULO 4: Vias Dopaminérgicas, Psicose e Adição",
      explanationNumber: 16,
      explanation: "A dopamina organiza vias cruciais no cérebro. Na esquizofrenia, a hipótese dopaminérgica postula que a hiperatividade na via mesolímbica causa os sintomas positivos, enquanto a hipoatividade na via mesocortical gera os sintomas negativos. Na dependência química, as drogas provocam descargas de dopamina no Núcleo Accumbens.",
      questions: [
        {
          number: 17,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Os sintomas positivos da esquizofrenia (como alucinações e delírios) estão associados à hiperatividade dopaminérgica em qual via cerebral?",
          options: ["A) Via Mesolímbica", "B) Via Mesocortical"],
          correct: 0
        },
        {
          number: 18,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Qual é o mecanismo neurobiológico primário partilhado por praticamente todas as substâncias de abuso no cérebro para gerar dependência?",
          options: [
            "A) Inibição permanente de todos os receptores de glutamato NMDA.",
            "B) Produção de picos rápidos e suprafisiológicos de dopamina no Núcleo Accumbens (via mesolímbica).",
            "C) Destruição seletiva das reservas periféricas de acetilcolina.",
            "D) Bloqueio absoluto da barreira hematoencefálica aos íons de cálcio."
          ],
          correct: 1
        },
        {
          number: 19,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "No contexto das vias dopaminérgicas e das patologias associadas, assinale a alternativa incorreta:",
          options: [
            "A) O bloqueio excessivo de receptores D₂ na via nigroestriatal por antipsicóticos típicos pode desencadear parkinsonismo medicamentoso.",
            "B) A hipoatividade dopaminérgica na via mesocortical correlaciona-se com os sintomas negativos da esquizofrenia.",
            "C) O uso crônico de drogas de abuso induz down-regulation de receptores D₂ no estriado, gerando tolerância e anedonia.",
            "D) A via tuberoinfundibular regula a prolactina; o seu bloqueio dopaminérgico pode causar hiperprolactinemia.",
            "E) Os sintomas positivos da esquizofrenia são causados por uma deficiência primária de serotonina no cerebelo.",
            "F) O Núcleo Accumbens constitui o centro nevrálgico do circuito de recompensa cerebral."
          ],
          correct: 4
        },
        {
          number: 20,
          type: "written",
          label: "Pergunta escrita",
          question: "Explique o paradoxo clínico observado no tratamento da esquizofrenia com antipsicóticos clássicos: como o antagonismo D₂ atua nos sintomas positivos, mas gera efeitos extrapiramidais?",
          expectedAnswer: "Os antipsicóticos clássicos bloqueiam receptores D₂ de forma inespecífica. Ao bloquearem receptores hiperativos na via mesolímbica, reduzem os sintomas positivos. Contudo, ao bloquearem simultaneamente a via nigroestriatal, induzem um déficit motor que causa sintomas extrapiramidais (rigidez e tremores)."
        }
      ]
    },
    {
      moduleId: 5,
      title: "MÓDULO 5: Teorias Neurobiológicas da Depressão Maior",
      explanationNumber: 21,
      explanation: "A depressão é explicada pela Teoria Monoaminérgica (déficit de monoaminas e o paradoxo temporal do down-regulation) e pela Teoria Neurotrófica (estresse crônico reduz o BDNF, causando atrofia sináptica no hipocampo).",
      questions: [
        {
          number: 22,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "O fator neurotrófico cuja expressão é diminuída pelo estresse crônico, resultando em atrofia sináptica na depressão, é o:",
          options: ["A) BDNF", "B) GABA"],
          correct: 0
        },
        {
          number: 23,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Como a psicofarmacologia moderna explica o intervalo de 2 a 4 semanas entre o aumento de monoaminas e a melhora do humor?",
          options: [
            "A) Demora na dissolução estomacal da cápsula do antidepressivo.",
            "B) Necessidade de adaptações lentas, como a dessensibilização (down-regulation) de autorreceptores pré-sinápticos inibitórios.",
            "C) Conversão metabólica da serotonina em dopamina no fígado.",
            "D) Acumulação tóxica de cálcio nas mitocôndrias."
          ],
          correct: 1
        },
        {
          number: 24,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Acerca das teorias neurobiológicas da depressão maior, analise as afirmações e assinale a correta:",
          options: [
            "A) A Teoria Monoaminérgica postula excesso absoluto de serotonina no hipocampo.",
            "B) O paradoxo temporal refere-se à melhora clínica imediata em segundos.",
            "C) A Teoria Neurotrófica sugere que o estresse crônico eleva os níveis de BDNF de forma tóxica.",
            "D) Os antidepressivos atuam a longo prazo reativando a síntese de BDNF, promovendo a plasticidade sináptica e neurogênese.",
            "E) Os autorreceptores sofrem up-regulation imediata.",
            "F) O cortisol diminuído pelo estresse é a principal causa da rigidez cognitiva."
          ],
          correct: 3
        },
        {
          number: 25,
          type: "written",
          label: "Pergunta escrita",
          question: "Relacione a Teoria Neurotrófica da depressão com a neuroplasticidade: explique o papel do BDNF e como o estresse crônico afeta o hipocampo.",
          expectedAnswer: "O BDNF apoia a sobrevivência neuronal e a sinaptogênese. O estresse crônico eleva os níveis de cortisol, reprimindo o gene do BDNF, o que provoca atrofia dendrítica e perda de sinapses no hipocampo, gerando sintomas depressivos."
        }
      ]
    },
    {
      moduleId: 6,
      title: "MÓDULO 6: Farmacologia dos Antidepressivos",
      explanationNumber: 26,
      explanation: "Os Antidepressivos Tricíclicos inibem recaptação de monoaminas, mas bloqueiam receptores muscarínicos, H₁ e alfa-1, gerando alta toxicidade. Os ISRS inibem seletivamente o SERT com muito mais segurança.",
      questions: [
        {
          number: 27,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Qual classe de antidepressivos apresenta maior risco de letalidade e cardiotoxicidade em superdosagem aguda?",
          options: ["A) Antidepressivos Tricíclicos (ADTs)", "B) Inibidores Seletivos de Recaptação de Serotonina (ISRS)"],
          correct: 0
        },
        {
          number: 28,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Efeitos colaterais dos Tricíclicos como boca seca, visão turva e retenção urinária decorrem de:",
          options: [
            "A) Antagonismo de receptores colinérgicos muscarínicos",
            "B) Agonismo pleno nos receptores dopaminérgicos D₂",
            "C) Inibição seletiva do transportador de serotonina (SERT)",
            "D) Bloqueio de canais de cálcio"
          ],
          correct: 0
        },
        {
          number: 29,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Em relação aos perfis farmacológicos entre ADTs e ISRS, assinale a incorreta:",
          options: [
            "A) Os ISRS inibem com alta seletividade o SERT, sem afinidade por receptores muscarínicos.",
            "B) Os Tricíclicos causam hipotensão postural devido ao bloqueio de receptores alfa-1.",
            "C) A sedação e ganho de peso dos ADTs devem-se ao antagonismo de receptores histamínicos H₁.",
            "D) Os ISRS possuem eficácia antidepressiva clínica superior à dos Tricíclicos em depressões graves.",
            "E) A alta letalidade dos Tricíclicos decorre do bloqueio de canais de sódio miocárdicos (arritmias).",
            "F) Ambas as classes aumentam monoaminas na fenda por mecanismos distintos."
          ],
          correct: 3
        },
        {
          number: 30,
          type: "written",
          label: "Pergunta escrita",
          question: "Explique por que os ISRS substituíram os Tricíclicos como fármacos de primeira escolha.",
          expectedAnswer: "Os ISRS oferecem eficácia equivalente com alta seletividade pelo SERT. Por não bloquearem receptores muscarínicos, histamínicos nem canais de sódio cardíacos, apresentam muito menos efeitos colaterais e baixíssima letalidade em overdose."
        }
      ]
    },
    {
      moduleId: 7,
      title: "MÓDULO 7: Neurotransmissores Específicos (Alzheimer e Ansiedade)",
      explanationNumber: 31,
      explanation: "Na Doença de Alzheimer, há degeneração colinérgica no Núcleo Basal de Meynert. Trata-se com inibidores da acetilcolinesterase. A ansiedade correlaciona-se com hipoatividade GABAérgica.",
      questions: [
        {
          number: 32,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "O declínio cognitivo na Doença de Alzheimer está associado ao déficit de qual neurotransmissor?",
          options: ["A) Acetilcolina", "B) Dopamina"],
          correct: 0
        },
        {
          number: 33,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Qual é o fundamento farmacológico dos inibidores da acetilcolinesterase no Alzheimer?",
          options: [
            "A) Destruir placas beta-amiloides.",
            "B) Inibir a enzima que degrada a acetilcolina, prolongando sua permanência na fenda sináptica.",
            "C) Bloquear receptores NMDA.",
            "D) Atuar como agonistas D₂."
          ],
          correct: 1
        },
        {
          number: 34,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Sobre correlações neuroquímicas, assinale a alternativa correta:",
          options: [
            "A) A ansiedade generalizada decorre de hiperatividade gabaérgica extrema.",
            "B) O déficit colinérgico no Núcleo Basal de Meynert marca a esquizofrenia.",
            "C) Os inibidores da acetilcolinesterase impedem a recaptação pré-sináptica.",
            "D) A perda de memória recente no Alzheimer resulta da escassez de acetilcolina no hipocampo.",
            "E) As benzodiazepinas atuam como antagonistas de glutamato.",
            "F) A excitotoxicidade protege o neurônio."
          ],
          correct: 3
        },
        {
          number: 35,
          type: "written",
          label: "Pergunta escrita",
          question: "Descreva o impacto da perda de neurónios colinérgicos no Núcleo Basal de Meynert no Alzheimer e a utilidade dos inibidores da acetilcolinesterase.",
          expectedAnswer: "Esses neurônios inervam o hipocampo e córtex para a memória. Sua perda reduz a acetilcolina. Os inibidores bloqueiam a enzima degradadora, prolongando a ação do neurotransmissor remanescente e atenuando o déficit."
        }
      ]
    },
    {
      moduleId: 8,
      title: "MÓDULO 8: Farmacocinética Aplicada",
      explanationNumber: 36,
      explanation: "A farmacocinética analisa ADME. A barreira hematoencefálica (BHE) exige que os psicofármacos tenham alta lipossolubilidade para atravessar as células endoteliais por difusão passiva.",
      questions: [
        {
          number: 37,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "Para que um fármaco atue no SNC, ele deve possuir preferencialmente qual propriedade físico-química?",
          options: ["A) Alta lipossolubilidade", "B) Alta hidrossolubilidade"],
          correct: 0
        },
        {
          number: 38,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "O principal órgão responsável pela biotransformação enzimática dos psicofármacos é o:",
          options: ["A) Estômago", "B) Fígado", "C) Tecido adiposo", "D) Cerebelo"],
          correct: 1
        },
        {
          number: 39,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "No que respeita aos princípios farmacocinéticos, assinale a incorreta:",
          options: [
            "A) A BHE restringe substâncias polares, permitindo moléculas lipossolúveis.",
            "B) O metabolismo de primeira passagem reduz a biodisponibilidade oral.",
            "C) A meia-vida (t1/2) define o tempo para reduzir a concentração a metade.",
            "D) Fármacos intravenosos passam obrigatoriamente pela absorção gástrica.",
            "E) Enzimas do citocromo P450 metabolizam a maioria dos psicofármacos.",
            "F) A eliminação renal depende da conversão em compostos mais polares."
          ],
          correct: 3
        },
        {
          number: 40,
          type: "written",
          label: "Pergunta escrita",
          question: "Explique como a barreira hematoencefálica (BHE) condiciona as propriedades físico-químicas dos psicofármacos.",
          expectedAnswer: "A BHE possui junções estreitas sem fenestrações. Para cruzá-la por difusão passiva, o fármaco precisa de alta lipossolubilidade, baixo peso molecular e baixa ionização em pH fisiológico."
        }
      ]
    },
    {
      moduleId: 9,
      title: "MÓDULO 9: Tolerância, Dependência e Abstinência",
      explanationNumber: 41,
      explanation: "A administração crônica induz tolerância (necessidade de maiores doses). A abstinência surge com a interrupção, trazendo efeitos opostos aos agudos devido ao desajuste homeostático.",
      questions: [
        {
          number: 42,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "O fenômeno em que o organismo exige doses progressivamente maiores para o mesmo efeito é:",
          options: ["A) Tolerância", "B) Hipersensibilização"],
          correct: 0
        },
        {
          number: 43,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "A síndrome de abstinência após interrupção de depressores do SNC decorre de:",
          options: [
            "A) Falha na absorção gástrica.",
            "B) Adaptações neuroplásticas onde o cérebro contrabalançava a inibição, gerando hiperexcitabilidade rebote.",
            "C) Conversão de dopamina em colina.",
            "D) Aumento permanente da BHE."
          ],
          correct: 1
        },
        {
          number: 44,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Acerca de tolerância e dependência, assinale a incorreta:",
          options: [
            "A) A tolerância farmacodinâmica envolve down-regulation de receptores.",
            "B) A dependência física manifesta-se por síndromes de abstinência.",
            "C) A tolerância cruzada ocorre com substâncias de mecanismos semelhantes.",
            "D) A abstinência apresenta sintomas opostos aos efeitos agudos da droga.",
            "E) A tolerância implica perda total de afinidade química em horas.",
            "F) A adaptação reflete a busca pela homeostase celular."
          ],
          correct: 4
        },
        {
          number: 45,
          type: "written",
          label: "Pergunta escrita",
          question: "Conceitue tolerância farmacodinâmica e explique o mecanismo celular pelo qual ocorre.",
          expectedAnswer: "É a redução da resposta biológica por exposição repetida. O neurônio promove dessensibilização e down-regulation de receptores para restaurar a homeostase, exigindo doses maiores."
        }
      ]
    },
    {
      moduleId: 10,
      title: "MÓDULO 10: Interações Medicamentosas e Farmacovigilância",
      explanationNumber: 46,
      explanation: "A polimedicação exige farmacovigilância rigorosa. A associação de IMAO e ISRS precipita a Síndrome Serotoninérgica (hipertermia, rigidez, mioclonias e instabilidade autonômica).",
      questions: [
        {
          number: 47,
          type: "mc",
          label: "Pergunta de 2 alternativas",
          question: "A associação concomitante de fármacos que elevam drasticamente a serotonina (como IMAO e ISRS) pode precipitar:",
          options: ["A) Síndrome Serotoninérgica", "B) Crise Colinérgica"],
          correct: 0
        },
        {
          number: 48,
          type: "mc",
          label: "Pergunta de 4 alternativas",
          question: "Qual manifestação é distintiva da Síndrome Serotoninérgica?",
          options: [
            "A) Bradicardia severa e hipotermia.",
            "B) Hipertermia, rigidez muscular, mioclonias, agitação e instabilidade autonômica.",
            "C) Paralisia flácida por bloqueio neuromuscular.",
            "D) Depressão respiratória fulminante."
          ],
          correct: 1
        },
        {
          number: 49,
          type: "mc",
          label: "Pergunta de 6 alternativas (com pegadinhas)",
          question: "Sobre interações medicamentosas em psicofarmacologia, assinale a correta:",
          options: [
            "A) A inibição enzimática hepática diminui sempre a concentração plasmática.",
            "B) A associação de ISRS com IMAO é segura e recomendada.",
            "C) A Síndrome Serotoninérgica decorre de deficiência de serotonina estriatal.",
            "D) A indução enzimática do citocromo P450 pode acelerar o metabolismo de fármacos, reduzindo sua eficácia.",
            "E) Efeitos anticolinérgicos nunca se somam em idosos.",
            "F) A farmacovigilância ignora reações tardias."
          ],
          correct: 3
        },
        {
          number: 50,
          type: "written",
          label: "Pergunta escrita",
          question: "Explique os fundamentos fisiopatológicos da Síndrome Serotoninérgica, classes envolvidas e principais sinais clínicos.",
          expectedAnswer: "Decorre da hiperestimulação de receptores serotoninérgicos pelo acúmulo sináptico massivo causado por IMAO combinados com ISRS/Tricíclicos. Sinais clínicos: hipertermia, rigidez, mioclonias, taquicardia e alteração do estado mental."
        }
      ]
    }
  ]
};