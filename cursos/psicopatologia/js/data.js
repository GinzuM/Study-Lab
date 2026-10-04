// =========================================================================
// BANCO DE DADOS: PSICOPATOLOGIA
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Com explicações detalhadas, exemplos e Modo Simplificado)
  topics: [
    {
      id: "alucinacao_vs_delirio",
      title: "1. Alucinação vs. Delírio",
      content: `**Explicação Detalhada:** 
      A avaliação psicopatológica faz uma distinção rigorosa entre a Percepção e o Pensamento. 
      - **Alucinação:** É um erro da **percepção** (sentidos). O paciente vê, ouve ou sente algo que não existe no ambiente real, mas experimenta isso com a mesma vividez de um estímulo real. O estímulo externo está ausente.
      - **Delírio:** É um erro do **pensamento** (crença). É uma ideia falsa, impossível e mantida com convicção absoluta, inabalável mesmo diante de provas lógicas em contrário.
      
      *Exemplo Prático:* Se o paciente ouve uma voz a chamá-lo num quarto vazio, é alucinação auditiva. Se ele acredita que a CIA instalou um chip no seu cérebro, é delírio.
      
      **Modo Simplificado:**
      - **Alucinação:** Os sentidos estão enganados (ver, ouvir, sentir o que não existe).
      - **Delírio:** A mente/ideia está enganada (acreditar firmemente numa história falsa ou impossível).`,
      mnemonic: "💡 Mnemónica: Alucinação = Sentidos (Percepção). Delírio = Crença (Pensamento)."
    },
    {
      id: "tipos_alucinacao",
      title: "2. Tipos de Alucinações",
      content: `**Explicação Detalhada:** 
      As alucinações podem afetar qualquer um dos sentidos:
      - **Visuais:** Elementares (pontos de luz, flashes, cores) ou Complexas (ver pessoas, animais, monstros nítidos).
      - **Auditivas:** Ouvir vozes ou ruídos. Uma forma específica é a **sonorização do pensamento**, onde o paciente ouve os seus próprios pensamentos pronunciados em voz alta.
      - **Táteis:** Sensação falsa de toque na pele (ex: sentir insetos a rastejar pelo braço).
      - **Cenestésicas:** Sensações internas bizarras nos órgãos (ex: "o meu cérebro virou areia", "os meus pulmões estão de gelo").
      - **Cinestésicas:** Falsa percepção de movimento do próprio corpo (ex: sentir os braços a ser puxados ou a cama a girar, estando imóvel).
      
      **Modo Simplificado:**
      - **Cenestésica:** Órgãos por dentro (ex: fígado a derreter).
      - **Cinestésica:** Movimento (ex: corpo a voar ou ser puxado).
      - **Tátil:** Pele (ex: insetos).`,
      mnemonic: "💡 Mnemónica: CE-nestésica = CEntro (Órgãos Internos). CI-nestésica = CInética (Movimento)."
    },
    {
      id: "tipos_delirio",
      title: "3. Tipos de Delírios Frequentes",
      content: `**Explicação Detalhada:** 
      A temática do delírio reflete as preocupações irreais do paciente:
      - **Persecutório:** Convicção de estar a ser perseguido, vigiado ou alvo de uma conspiração ampla.
      - **Prejuízo:** Foco num dano específico e direto (ex: acreditar que lhe estão a roubar objetos).
      - **Referência:** Acredita que eventos aleatórios (como o pivô do telejornal) estão a enviar mensagens ocultas diretamente para ele.
      - **Influência:** Crença de que uma força externa controla o seu corpo, ações ou mente.
      - **Ruína:** Convicção de miséria total, de que perdeu tudo e está destinado à desgraça (comum em depressões graves).
      - **Negação (Cotard):** Acredita que já morreu, não existe, ou que os seus órgãos apodreceram.
      - **Hipocondríaco:** Certeza absoluta de ter uma doença incurável e letal, ignorando todos os exames médicos normais.
      
      **Modo Simplificado:**
      - **Referência:** "A TV está a falar de mim."
      - **Influência:** "Estão a controlar-me por telepatia."
      - **Negação:** "Estou morto por dentro."
      - **Ruína:** "Estou completamente na miséria."`,
      mnemonic: "💡 Mnemónica: Ruína = Falta dinheiro/Esperança. Negação = Falta vida (Acha que está morto)."
    },
    {
      id: "transtornos_personalidade_grupos",
      title: "4. Transtornos de Personalidade: Os 3 Grupos",
      content: `**Explicação Detalhada:** 
      Transtornos de personalidade são padrões difusos, inflexíveis e persistentes de experiência interna que causam sofrimento. O DSM divide-os em 3 grupos (Clusters):
      - **Grupo A (Excêntricos/Esquisitos):** Paranoide (desconfiança), Esquizoide (isolamento social frio), Esquizotípica (crenças e perceções bizarras).
      - **Grupo B (Dramáticos/Emotivos/Erráticos):** Antissocial (violação de regras), Borderline (instabilidade), Histriónica (busca de atenção), Narcisista (grandiosidade).
      - **Grupo C (Ansiosos/Medrosos):** Evitativa (medo de rejeição), Dependente (submissão), Obsessivo-Compulsiva (perfeccionismo rígido).
      
      **Modo Simplificado:**
      - **Grupo A:** Os estranhos e isolados.
      - **Grupo B:** Os intensos, instáveis e impulsivos.
      - **Grupo C:** Os medrosos e ansiosos.`,
      mnemonic: "💡 Mnemónica: A = Anormais/Alienados; B = Barulhentos/Border; C = Cautelosos/Covardes."
    },
    {
      id: "tp_antissocial",
      title: "5. Transtorno da Personalidade Antissocial",
      content: `**Explicação Detalhada:** 
      Pertencente ao Grupo B, caracteriza-se pelo desrespeito e violação dos direitos dos outros. 
      - **Histórico:** Geralmente apresenta antecedentes na infância/adolescência (furtos, fugas, agressividade, crueldade com animais).
      - **Falta de Culpa:** Não sentem remorsos após infrações e frequentemente deslocam a culpa para a vítima ("ele mereceu ser enganado").
      - **Superficialidade Afetiva:** Podem chorar ou fazer drama por perdas materiais ou para manipulação, mas não têm elaboração emocional verdadeira por pessoas.
      - **Relações Objetais:** Veem as outras pessoas apenas como instrumentos ou objetos para obter poder, sexo, dinheiro ou status.
      - **Vertentes:** Existe o *Psicopata Clássico* (agressões diretas, predatório, crime físico) e o *Psicopata Corporativo* (charme superficial, exploração de colegas no trabalho, mentiras e fraudes, sem necessariamente cometer crimes violentos).
      
      **Modo Simplificado:**
      - Pessoa manipuladora que usa os outros como objetos para benefício próprio, não sente culpa quando magoa alguém e tem um histórico de problemas desde a juventude. O "psicopata de escritório" foca-se na fraude; o "clássico" na violência.`,
      mnemonic: "💡 Mnemónica: Antissocial = Sem empatia, sem culpa, os outros são meros degraus."
    }
  ],

  // 2. MAPA MENTAL
  tree: [
    { id: "alucinacao_vs_delirio", title: "Alucinação vs Delírio", level: 1, unlocked: true },
    { id: "tipos_alucinacao", title: "Tipos de Alucinações", level: 2, unlocked: true },
    { id: "tipos_delirio", title: "Tipos de Delírios", level: 2, unlocked: true },
    { id: "transtornos_personalidade_grupos", title: "Grupos de TP (A, B, C)", level: 3, unlocked: true },
    { id: "tp_antissocial", title: "Transtorno Antissocial", level: 4, unlocked: true }
  ],

  // 3. FLASHCARDS 
  flashcards: [
    { topicId: "alucinacao_vs_delirio", category: "Sintomatologia", question: "Qual a diferença fundamental entre alucinação e delírio?", answer: "Alucinação é erro da percepção (sentidos sem estímulo). Delírio é erro do pensamento (crença falsa inabalável)." },
    { topicId: "tipos_alucinacao", category: "Alucinações", question: "O que é uma alucinação visual elementar?", answer: "Ver pontos luminosos, flashes de luz ou cores, sem formas definidas." },
    { topicId: "tipos_alucinacao", category: "Alucinações", question: "O que é a 'sonorização do pensamento'?", answer: "Fenómeno onde o paciente escuta os seus próprios pensamentos a serem pronunciados em voz alta." },
    { topicId: "tipos_alucinacao", category: "Alucinações", question: "Sensação de que o cérebro está a desfazer-se ou pulmões congelados é que tipo de alucinação?", answer: "Alucinação Cenestésica (órgãos internos)." },
    { topicId: "tipos_alucinacao", category: "Alucinações", question: "Falsa sensação de movimento (ex: cama a girar, braços puxados) classifica-se como:", answer: "Alucinação Cinestésica." },
    { topicId: "tipos_delirio", category: "Delírios", question: "Acreditar que as palavras do pivô do telejornal contêm mensagens ocultas para si é um delírio de:", answer: "Referência." },
    { topicId: "tipos_delirio", category: "Delírios", question: "O que caracteriza o delírio de influência?", answer: "Crença de que uma força externa controla o corpo, as ações ou os pensamentos." },
    { topicId: "tipos_delirio", category: "Delírios", question: "Recusar comer por acreditar estar morto e que os órgãos não existem é o delírio de:", answer: "Negação (Síndrome de Cotard)." },
    { topicId: "tipos_delirio", category: "Delírios", question: "A convicção inabalável de estar na miséria total, apesar de estabilidade financeira, é o delírio de:", answer: "Ruína." },
    { topicId: "tipos_delirio", category: "Delírios", question: "Qual a diferença entre delírio de prejuízo e persecutório?", answer: "Prejuízo foca num dano específico (ex: roubo); persecutório envolve conspirações e perseguições amplas." },
    { topicId: "transtornos_personalidade_grupos", category: "Transtornos", question: "Os transtornos Paranoide, Esquizoide e Esquizotípico (Grupo A) são categorizados como:", answer: "Excêntricos ou Esquisitos." },
    { topicId: "transtornos_personalidade_grupos", category: "Transtornos", question: "A qual grupo pertencem os transtornos Borderline e Narcisista?", answer: "Grupo B (Dramáticos, emotivos ou erráticos)." },
    { topicId: "transtornos_personalidade_grupos", category: "Transtornos", question: "O transtorno Evitativo pertence a qual grupo?", answer: "Grupo C (Ansiosos e Medrosos)." },
    { topicId: "tp_antissocial", category: "Antissocial", question: "Quais antecedentes costumam estar presentes na infância do Transtorno Antissocial?", answer: "Furtos, agressões, faltas escolares, crueldade e fugas de casa." },
    { topicId: "tp_antissocial", category: "Antissocial", question: "Como um indivíduo com Transtorno Antissocial lida com a culpa?", answer: "Apresenta ausência de culpa e remorsos, frequentemente deslocando a responsabilidade para a vítima." },
    { topicId: "tp_antissocial", category: "Antissocial", question: "O que significa 'superficialidade afetiva' no Transtorno Antissocial?", answer: "Exibir reações dramáticas focadas apenas em perdas materiais próprias, sem elaboração emocional verdadeira por pessoas." },
    { topicId: "tp_antissocial", category: "Antissocial", question: "O que caracteriza a vertente do Psicopata Corporativo?", answer: "Charme superficial, manipulação e exploração de colegas no trabalho para subir na carreira, sem agressões físicas diretas." }
  ],

  // 4. QUIZ (Base/Antigas + 25 Novas da Sessão Atual, Total 30 Perguntas)
  quiz: [
    // --- 5 PERGUNTAS BASE / INTRODUTÓRIAS ---
    { topicId: "alucinacao_vs_delirio", question: "Ao avaliar um paciente psiquiátrico, como se deve classificar uma falsa percepção auditiva na qual ele ouve comandos sem que ninguém esteja presente?", hint: "Acontece nos sentidos, não apenas no intelecto.", options: ["Delírio persecutório", "Alucinação auditiva", "Ilusão óptica", "Transtorno da personalidade"], correct: 1 },
    { topicId: "transtornos_personalidade_grupos", question: "Um padrão rígido, inflexível e persistente de experiência interna que diverge das expectativas da cultura e causa grande sofrimento, enquadra-se no diagnóstico de:", hint: "É algo estrutural do jeito de ser da pessoa.", options: ["Surto psicótico agudo", "Transtorno de Personalidade", "Alucinação cenestésica", "Episódio maníaco"], correct: 1 },
    { topicId: "tipos_delirio", question: "Um paciente acredita piamente que a sua família quer envenená-lo para roubar uma herança. Apesar das provas do contrário, a crença mantém-se. Este quadro corresponde a:", hint: "É uma ideia falsa inabalável.", options: ["Delírio", "Alucinação complexa", "Personalidade esquizotípica", "Transtorno obsessivo-compulsivo"], correct: 0 },
    { topicId: "tp_antissocial", question: "A incapacidade sistemática de se conformar às normas sociais com respeito a comportamentos lícitos, marcada por enganos e impulsividade, é a marca central do Transtorno de Personalidade:", hint: "Vai contra as regras e a sociedade.", options: ["Borderline", "Esquizoide", "Antissocial", "Dependente"], correct: 2 },
    { topicId: "tipos_alucinacao", question: "Se um indivíduo afirmar que vê nitidamente um cão de três cabeças na sala de estar, este sintoma é classificado primariamente como:", hint: "A imagem é nítida e tem forma.", options: ["Alucinação visual elementar", "Alucinação visual complexa", "Alucinação tátil", "Delírio de grandeza"], correct: 1 },

    // --- 25 NOVAS PERGUNTAS DE PSICOPATOLOGIA ---
    { topicId: "alucinacao_vs_delirio", question: "Qual a diferença fundamental entre alucinação e delírio na avaliação psicopatológica?", hint: "Sentidos vs. Crenças.", options: ["Alucinação é uma alteração do pensamento; delírio afeta os sentidos.", "A alucinação é uma percepção irreal, enquanto o delírio requer um estímulo visual.", "Alucinação é uma experiência perceptiva sem estímulo externo (sentidos); delírio é uma crença falsa e inabalável (pensamento).", "Ambas são alterações exclusivas da percepção tátil."], correct: 2 },
    { topicId: "tipos_alucinacao", question: "Um paciente relata ver repetidamente pontos luminosos e flashes de luz na parede do quarto. Como se classifica este sintoma?", hint: "Não tem forma definida (não é um objeto nem pessoa).", options: ["Alucinação visual complexa.", "Alucinação visual elementar.", "Delírio de grandeza.", "Alucinação cinestésica."], correct: 1 },
    { topicId: "tipos_alucinacao", question: "O fenómeno em que o paciente escuta os seus próprios pensamentos a serem pronunciados em voz alta é denominado:", hint: "Os pensamentos ganham 'som'.", options: ["Delírio de influência.", "Alucinação cenestésica.", "Sonorização do pensamento.", "Alucinação tátil."], correct: 2 },
    { topicId: "tipos_alucinacao", question: "Uma paciente queixa-se de que o seu cérebro está a desfazer-se em areia e que os seus pulmões estão congelados, sofrendo sensações internas bizarras. Trata-se de uma alucinação:", hint: "Sensação focada nos órgãos internos.", options: ["Tátil.", "Cinestésica.", "Cenestésica.", "Elementar."], correct: 2 },
    { topicId: "tipos_delirio", question: "Um paciente assiste a um noticiário e tem a convicção absoluta de que as palavras do pivô contêm mensagens ocultas direcionadas especificamente a ele. Isto caracteriza o:", hint: "Ele acha que o ambiente faz 'referência' a ele.", options: ["Delírio de referência.", "Delírio de ruína.", "Delírio persecutório.", "Delírio de negação."], correct: 0 },
    { topicId: "tipos_delirio", question: "Se o delírio for a crença de que uma força ou organização externa controla o corpo, as ações ou os pensamentos do indivíduo, estamos perante um:", hint: "O paciente sente que sofre influência de terceiros.", options: ["Delírio de grandeza.", "Delírio hipocondríaco.", "Delírio de influência.", "Delírio de ciúme."], correct: 2 },
    { topicId: "tipos_delirio", question: "Um indivíduo recusa alimentar-se por acreditar inabalavelmente que já morreu e que os seus órgãos deixaram de existir. Qual é o tipo de delírio?", hint: "Ele nega a própria existência ou vida (Síndrome de Cotard).", options: ["Ruína.", "Negação.", "Hipocondríaco.", "Prejuízo."], correct: 1 },
    { topicId: "tipos_delirio", question: "Um empresário financeiramente estável passa a acreditar com absoluta convicção que está na miséria total e destinado a desgraças. Este é um exemplo de delírio de:", hint: "Focado em perdas materiais e desesperança extrema.", options: ["Negação.", "Perseguição.", "Ruína.", "Grandeza."], correct: 2 },
    { topicId: "alucinacao_vs_delirio", question: "Na avaliação psicopatológica, um comportamento isolado não caracteriza patologia. Dos seguintes, qual NÃO é um dos quatro critérios de avaliação clínica?", hint: "A psicologia clínica foca no contexto e sofrimento, nem sempre exigindo prova biológica primária.", options: ["Falta de controle.", "Persistência ou recorrência.", "Origem genética comprovada.", "Prejuízo (social, familiar, etc.)."], correct: 2 },
    { topicId: "transtornos_personalidade_grupos", question: "Os Transtornos da Personalidade do Grupo A (Paranoide, Esquizoide, Esquizotípica) são categorizados como:", hint: "Pessoas com comportamentos e crenças fora do padrão.", options: ["Dramáticos e Emotivos.", "Ansiosos e Medrosos.", "Excêntricos ou Esquisitos.", "Impulsivos e Violentos."], correct: 2 },
    { topicId: "transtornos_personalidade_grupos", question: "A qual grupo do DSM pertence o Transtorno da Personalidade Antissocial?", hint: "Pertence ao grupo dos instáveis e erráticos.", options: ["Grupo A (Excêntricos).", "Grupo B (Dramáticos/Emotivos/Erráticos).", "Grupo C (Ansiosos/Medrosos).", "Grupo D (Inflexíveis)."], correct: 1 },
    { topicId: "tp_antissocial", question: "Na avaliação de um Transtorno da Personalidade Antissocial no adulto, é fundamental investigar o histórico do paciente. Quais antecedentes costumam estar presentes na infância/adolescência?", hint: "Sinais precoces de violação de regras.", options: ["Isolamento extremo e ansiedade social.", "Furtos, agressões, faltas escolares e fugas de casa.", "Delírios místicos precoces.", "Preocupação obsessiva com limpeza."], correct: 1 },
    { topicId: "tp_antissocial", question: "Como um indivíduo com Transtorno de Personalidade Antissocial geralmente lida com a culpa após cometer uma infração?", hint: "Falta de empatia.", options: ["Sofre de intensos delírios de ruína.", "Assume imediatamente a culpa para evitar punição.", "Apresenta ausência de culpa e desloca a responsabilidade para a vítima.", "Sente um remorso paralisante."], correct: 2 },
    { topicId: "tp_antissocial", question: "A expressão 'superficialidade afetiva' no Transtorno Antissocial descreve a tendência do paciente para:", hint: "Emoções falsas ou voltadas apenas ao próprio benefício.", options: ["Nunca expressar nenhuma emoção facial.", "Ter afetos exclusivos de euforia e grandeza.", "Exibir choro dramático focado em perdas materiais, sem elaboração emocional verdadeira pelas pessoas.", "Apaixonar-se rapidamente por figuras de autoridade."], correct: 2 },
    { topicId: "tp_antissocial", question: "Nas relações objetais, o indivíduo com Transtorno Antissocial tende a:", hint: "Coisificação do outro.", options: ["Criar laços de dependência extrema.", "Isolar-se completamente de todos.", "Enxergar os outros apenas como instrumentos de gratificação, poder ou status.", "Sentir empatia profunda pelo sofrimento alheio."], correct: 2 },
    { topicId: "tp_antissocial", question: "Existem duas vertentes no Transtorno Antissocial. A vertente caracterizada por charme superficial, exploração no trabalho e mentira, mas sem agressões predatórias diretas, é denominada:", hint: "Aquele que opera de terno e gravata.", options: ["Psicopata clássico.", "Psicopata corporativo.", "Borderline passivo.", "Antissocial esquizotípico."], correct: 1 },
    { topicId: "tipos_alucinacao", question: "Uma falsa sensação de insetos a caminhar pelo braço, sem estímulo externo, é uma alucinação:", hint: "Afeta a percepção do tato.", options: ["Tátil.", "Cinestésica.", "Visual complexa.", "Cenestésica."], correct: 0 },
    { topicId: "tipos_delirio", question: "A crença mantida com convicção absoluta de doença grave e incurável, apesar de todos os exames médicos provarem o contrário, é o delírio:", hint: "Foco intenso no adoecimento biológico.", options: ["Místico.", "De Negação.", "Hipocondríaco.", "De Ruína."], correct: 2 },
    { topicId: "tipos_alucinacao", question: "Um paciente afirma veementemente que a cama está a girar pelo quarto e que os seus braços estão a ser puxados para cima, embora esteja imóvel. Trata-se de uma alucinação:", hint: "Cinetismo (movimento).", options: ["Tátil.", "Cinestésica (percepção de movimento).", "Auditiva.", "Cenestésica."], correct: 1 },
    { topicId: "transtornos_personalidade_grupos", question: "O Transtorno Borderline e o Transtorno Narcisista partilham o mesmo grupo do Transtorno Antissocial (Grupo B). Eles são caraterizados como:", hint: "Ação baseada na impulsividade e instabilidade.", options: ["Ansiosos e medrosos.", "Dramáticos, emotivos ou erráticos.", "Excêntricos.", "Obsessivos."], correct: 1 },
    { topicId: "tipos_delirio", question: "Qual a distinção principal entre o delírio de prejuízo e o delírio persecutório?", hint: "O nível de especificidade da crença.", options: ["O persecutório só ocorre à noite; o de prejuízo durante o dia.", "O de prejuízo foca-se num dano específico (ex: roubo de objetos); o persecutório envolve conspirações e perseguições amplas.", "O de prejuízo é visual; o persecutório é auditivo.", "Não há diferença, são sinônimos perfeitos."], correct: 1 },
    { topicId: "tipos_alucinacao", question: "A alucinação visual na qual o paciente vê pessoas ou animais de forma definida é chamada de:", hint: "Já não são apenas luzes elementares.", options: ["Alucinação visual elementar.", "Alucinação visual somática.", "Alucinação visual complexa.", "Ilusão ótica primária."], correct: 2 },
    { topicId: "transtornos_personalidade_grupos", question: "O grupo C dos transtornos de personalidade abriga indivíduos com padrões ansiosos e medrosos. Qual destes transtornos pertence a esse grupo?", hint: "Aquele que evita contato por medo de rejeição extrema.", options: ["Esquizotípica.", "Histriônica.", "Paranoide.", "Evitativa."], correct: 3 },
    { topicId: "tipos_delirio", question: "Um paciente diz: 'Deus falou comigo e ordenou-me que liderasse uma revolta para purificar a humanidade'. Se isto não for explicado pelo contexto cultural, estamos perante um delírio:", hint: "Envolve crenças espirituais/sagradas extremadas.", options: ["De ciúme.", "Místico/Religioso.", "Hipocondríaco.", "De negação."], correct: 1 },
    { topicId: "transtornos_personalidade_grupos", question: "Em psicopatologia, 'padrões difusos, inflexíveis e persistentes de experiência interna e comportamento que divergem da cultura e causam sofrimento' é a definição clássica de:", hint: "Afeta a base da identidade do sujeito a longo prazo.", options: ["Alucinação.", "Delírio.", "Transtornos de Personalidade.", "Psicose aguda."], correct: 2 }
  ]
};
