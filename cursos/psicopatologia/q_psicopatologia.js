// =========================================================================
// BANCO DE QUESTÕES E AVALIAÇÃO (q_psicopatologia.js)
// 25 Questões de Múltipla Escolha revisadas em Português do Brasil (PT-BR)
// =========================================================================

const questionsData = {
  quiz: [
    {
      topicId: "conceito_objeto",
      question: "Sobre a distinção fundamental entre a Psicopatologia e a Psiquiatria, é correto afirmar que:",
      hint: "Uma é ciência descritiva/compreensiva; a outra é prática médica.",
      options: [
        "São termos estritamente sinônimos, pois ambas têm como único objetivo a prescrição de psicofármacos.",
        "A Psicopatologia é uma ciência autônoma voltada à descrição e compreensão do sofrimento mental, enquanto a Psiquiatria é uma prática médica focada na intervenção e tratamento.",
        "A Psicopatologia rejeita o estudo da consciência e restringe-se à análise de exames de neuroimagem.",
        "A Psiquiatria foi fundada por Karl Jaspers para substituir a Psicopatologia fenomenológica."
      ],
      correct: 1
    },
    {
      topicId: "conceito_objeto",
      question: "Karl Jaspers, em sua obra 'Psicopatologia Geral' (1913), deixou uma advertência ética e epistemológica central sobre o estudo do paciente psiquiátrico. Qual é ela?",
      hint: "O ser humano é sempre maior do que qualquer classificação.",
      options: [
        "Todo comportamento humano pode ser totalmente reduzido a equações matemáticas e reflexos motores.",
        "O diagnóstico psiquiátrico esgota completamente a identidade do indivíduo.",
        "Nunca podemos reduzir inteiramente o ser humano aos conceitos psicopatológicos, pois o indivíduo transcende o seu diagnóstico.",
        "Apenas os fenômenos inconscientes reprimidos na infância constituem o objeto da psicopatologia."
      ],
      correct: 2
    },
    {
      topicId: "conceito_objeto",
      question: "Qual é o objeto de estudo primordial da Psicopatologia segundo a tradição inaugurada por Jaspers?",
      hint: "Foca naquilo que o paciente vivencia em sua experiência.",
      options: [
        "Apenas a anatomia macroscópica do córtex pré-frontal.",
        "O acontecimento psíquico real e consciente, buscando saber o que e como os seres humanos vivenciam seu sofrimento.",
        "A criação de leis penais para internação compulsória.",
        "A comercialização de medicamentos ansiolíticos na atenção primária."
      ],
      correct: 1
    },
    {
      topicId: "normal_patologico",
      question: "Quando um profissional define que um paciente está 'normal' simplesmente por estar dentro da média numérica da população geral (curva de Gauss), ele está utilizando o critério de:",
      hint: "Baseia-se em frequência matemática.",
      options: [
        "Normalidade funcional.",
        "Normalidade subjetiva.",
        "Normalidade estatística.",
        "Normalidade como processo."
      ],
      correct: 2
    },
    {
      topicId: "normal_patologico",
      question: "Qual é a principal falha do critério puramente estatístico de normalidade na clínica psicopatológica?",
      hint: "Tudo o que é muito frequente na população é saudável?",
      options: [
        "Ele não permite o uso de gráficos em pesquisas epidemiológicas.",
        "Fenômenos muito frequentes na média podem ser patológicos (ex: cáries, sintomas ansiosos) e fenômenos raros podem ser saudáveis (ex: genialidade artística).",
        "Ele exige que todos os pacientes façam psicoterapia psicanalítica.",
        "Ele considera que apenas crianças pequenas são estatisticamente normais."
      ],
      correct: 1
    },
    {
      topicId: "normal_patologico",
      question: "Uma criança de 3 anos que faz birra intensa ao ser contrariada apresenta um comportamento esperado para a idade, mas um adulto de 35 anos que se joga no chão do escritório pelo mesmo motivo apresenta um quadro disfuncional. Qual critério de normalidade explica essa diferença?",
      hint: "Leva em conta a etapa do desenvolvimento humano.",
      options: [
        "Normalidade como ausência de lesão.",
        "Normalidade estatística estática.",
        "Normalidade como processo (dinâmica do desenvolvimento).",
        "Normalidade anatômica."
      ],
      correct: 2
    },
    {
      topicId: "normal_patologico",
      question: "O critério de 'normalidade subjetiva' (baseado na própria percepção do indivíduo sobre sua saúde) torna-se particularmente falho e insuficiente em qual situação clínica?",
      hint: "Pense em quadros nos quais o paciente perde a crítica sobre o próprio adoecimento.",
      options: [
        "Em pacientes com episódios maníacos graves, quadros psicóticos ou demências avançadas, nos quais o sujeito sente-se 'ótimo' e nega estar doente.",
        "Em pacientes com fobia simples de altura que reconhecem seu medo exagerado.",
        "Em indivíduos com queixas leves de insônia que buscam ajuda médica espontaneamente.",
        "Em avaliações de rotina na Atenção Primária à Saúde."
      ],
      correct: 0
    },
    {
      topicId: "forma_conteudo",
      question: "Na análise psicopatológica dos sintomas, a distinção entre 'Forma' e 'Conteúdo' estabelece que:",
      hint: "Lembre-se da metáfora do 'pote' (estrutura) e do 'recheio' (tema cultural).",
      options: [
        "A forma é determinada pela cultura local, enquanto o conteúdo é 100% genético.",
        "A forma é a estrutura psicopatológica básica (ex: alucinação, delírio) e o conteúdo é o tema biográfico e cultural que preenche essa estrutura (ex: perseguição por satélites).",
        "O conteúdo do delírio é o único elemento válido para diferenciar esquizofrenia de depressão.",
        "Forma e conteúdo são idênticos e não possuem utilidade clínica."
      ],
      correct: 1
    },
    {
      topicId: "forma_conteudo",
      question: "Um paciente relata que tem certeza absoluta de que a polícia secreta instalou câmeras dentro de seus dentes para vigiá-lo. Nesse caso clínico, 'delírio persecutório' e 'polícia secreta/câmeras nos dentes' correspondem, respectivamente, a:",
      hint: "Qual é a estrutura clínica e qual é o tema?",
      options: [
        "Conteúdo e Forma.",
        "Sinal objetivo e Semiotécnica.",
        "Forma e Conteúdo.",
        "Síndrome e Normalidade estatística."
      ],
      correct: 2
    },
    {
      topicId: "forma_conteudo",
      question: "Por que a 'Forma' do sintoma é considerada mais decisiva para o diagnóstico psiquiátrico do que o 'Conteúdo'?",
      hint: "A estrutura mantém-se constante através de diferentes culturas.",
      options: [
        "Porque o conteúdo nunca é relatado pelo paciente durante a anamnese.",
        "Porque a forma reflete a alteração estrutural da função psíquica (sendo universal), enquanto o conteúdo varia amplamente conforme a época, a religião e a biografia.",
        "Porque escutar o conteúdo biográfico do paciente é proibido na entrevista clínica.",
        "Porque a forma muda a cada hora do dia."
      ],
      correct: 1
    },
    {
      topicId: "semiologia",
      question: "No âmbito da Semiologia Psicopatológica, como se diferenciam a Semiotécnica e a Semiogênese?",
      hint: "Técnica de coleta vs. Gênese/origem do sintoma.",
      options: [
        "A Semiotécnica refere-se às técnicas e procedimentos de observação e coleta de sinais e sintomas; a Semiogênese investiga a origem, os mecanismos e o significado desses sintomas.",
        "A Semiotécnica estuda o DNA neuronal; a Semiogênese prescreve medicamentos.",
        "A Semiotécnica aplica-se apenas a crianças; a Semiogênese aplica-se apenas a idosos.",
        "Ambas tratam exclusivamente de exames laboratoriais de sangue."
      ],
      correct: 0
    },
    {
      topicId: "semiologia",
      question: "Durante uma consulta, o psicólogo observa que o paciente apresenta tremores finos nas mãos, sudorese visível e fala muito acelerada (taquilalia). Por sua vez, o paciente relata: 'Sinto um vazio no peito e medo de enlouquecer'. Na semiologia, os dados observados pelo clínico e o relato íntimo do paciente são classificados, respectivamente, como:",
      hint: "Objetivo/observável vs. Subjetivo/vivenciado.",
      options: [
        "Sintomas e Sinais.",
        "Sinais comportamentais objetivos e Sintomas subjetivos.",
        "Conteúdos e Formas.",
        "Diagnósticos etiológicos e Prognósticos."
      ],
      correct: 1
    },
    {
      topicId: "semiologia",
      question: "O que define corretamente o conceito de 'Síndrome' na prática clínica?",
      hint: "Conjunto que caminha junto, antes mesmo de sabermos a causa exata.",
      options: [
        "Uma doença com causa única, anatomia patológica comprovada e tratamento cirúrgico.",
        "Um agrupamento constante e recorrente de sinais e sintomas que se apresentam juntos no mesmo momento, mas que pode ser produzido por diferentes causas.",
        "Qualquer sintoma isolado que dure menos de cinco minutos.",
        "A cura definitiva de um transtorno de personalidade."
      ],
      correct: 1
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Na metodologia fenomenológica de Karl Jaspers, qual é a diferença entre 'Explicar' (Erklären) e 'Compreender' (Verstehen)?",
      hint: "Ciências da natureza (causa física) vs. Ciências do espírito (sentido empático).",
      options: [
        "Explicar é conversar com a família; Compreender é pedir uma tomografia.",
        "Explicar busca conexões causais objetivas e orgânicas (de fora para dentro); Compreender busca captar empaticamente o sentido psíquico vivenciado (de dentro para fora).",
        "Explicar é exclusivo da Psicanálise; Compreender é exclusivo da Neurologia.",
        "Não há qualquer diferença entre explicar e compreender na obra de Jaspers."
      ],
      correct: 1
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Um paciente desenvolve um quadro de confusão mental aguda (delirium) devido a uma infecção urinária grave com febre alta. Outro paciente apresenta choro e desânimo após o falecimento de seu cônjuge. Segundo Jaspers, o primeiro caso e o segundo caso ilustram, respectivamente, relações de:",
      hint: "Causa orgânica vs. Sentido psicológico.",
      options: [
        "Compreensão empática e Explicação causal.",
        "Explicação causal (orgânica) e Compreensão psicológica (de sentido).",
        "Auto-organização primária e Hetero-organização.",
        "Simulação consciente e Delírio primário."
      ],
      correct: 1
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Para Karl Jaspers, o 'delírio primário' (ou ideia delirante autêntica da esquizofrenia) caracteriza-se metodologicamente por ser:",
      hint: "Não conseguimos rastrear uma derivação lógica ou emocional comum para ele.",
      options: [
        "Plenamente compreensível a partir de uma tristeza passageira.",
        "Psicologicamente incompreensível (inderivável de outras vivências), surgindo como uma ruptura radical na história de sentido do sujeito.",
        "Uma mentira contada de forma voluntária para obter benefícios.",
        "Um fenômeno exclusivo de crianças em fase pré-escolar."
      ],
      correct: 1
    },
    {
      topicId: "abordagens",
      question: "Manuais classificatórios internacionais como o DSM-5 e a CID-11 baseiam-se predominantemente em qual abordagem psicopatológica?",
      hint: "Agrupam categorias por critérios observáveis de sinais e sintomas.",
      options: [
        "Abordagem Descritiva e Categorial.",
        "Abordagem Psicanalítica Lacaniana.",
        "Abordagem Existencial-Humanista.",
        "Abordagem Antipsiquiátrica Radical."
      ],
      correct: 0
    },
    {
      topicId: "abordagens",
      question: "Ao avaliar um sintoma fóbico ou obsessivo, a perspectiva Psicodinâmica (Psicanalítica) compreende esse fenômeno como:",
      hint: "Envolve o inconsciente, recalque e defesa.",
      options: [
        "Um mero erro genético sem qualquer significado simbólico na biografia do sujeito.",
        "O resultado de conflitos inconscientes, desejos recalcados e mecanismos de defesa (formação de compromisso).",
        "Apenas um hábito motor aprendido por imitação na escola.",
        "Uma alteração exclusiva dos canais de cálcio no cerebelo."
      ],
      correct: 1
    },
    {
      topicId: "abordagens",
      question: "A abordagem Cognitivo-Comportamental em psicopatologia enfatiza principalmente:",
      hint: "Crenças, esquemas mentais e processamento da informação.",
      options: [
        "A análise de sonhos infantis e do complexo de Édipo.",
        "O papel das crenças disfuncionais, dos esquemas cognitivos rígidos e das distorções no processamento da informação.",
        "O uso exclusivo de eletroconvulsoterapia para qualquer queixa.",
        "A negação da existência de transtornos mentais."
      ],
      correct: 1
    },
    {
      topicId: "funcoes_psiquicas",
      question: "No estudo das funções psíquicas (consciência, atenção, memória, pensamento, afetividade, sensopercepção), Dalgalarrondo ressalta que:",
      hint: "A mente humana é um conjunto de gavetas isoladas ou uma totalidade?",
      options: [
        "Cada função psíquica funciona em um compartimento totalmente isolado, sem jamais influenciar as demais.",
        "A divisão em funções psíquicas é um recurso didático e semiológico, pois na realidade clínica a vida mental é uma totalidade integrada.",
        "Apenas a memória e a inteligência importam para o exame psíquico.",
        "A afetividade nunca interfere na capacidade de atenção ou memória de um indivíduo."
      ],
      correct: 1
    },
    {
      topicId: "funcoes_psiquicas",
      question: "Um paciente gravemente ansioso não consegue se lembrar do que leu há cinco minutos porque sua mente está hipervigilante e dispersa com preocupações catastróficas. Isso demonstra na prática que:",
      hint: "Como o afeto e a atenção impactam a memória?",
      options: [
        "O paciente desenvolveu Doença de Alzheimer irreversível.",
        "As funções psíquicas são interdependentes: uma alteração intensa na afetividade (ansiedade) prejudica a atenção concentrada e, consequentemente, o registro da memória.",
        "A memória depende apenas do sistema muscular periférico.",
        "A ansiedade melhora sempre a fixação de conteúdos complexos."
      ],
      correct: 1
    },
    {
      topicId: "avaliacao_exame",
      question: "Na avaliação clínica em saúde mental, qual é a diferença fundamental entre a Anamnese e o Exame do Estado Mental (Exame Psíquico)?",
      hint: "Filme histórico (longitudinal) vs. Fotografia do momento (transversal).",
      options: [
        "A Anamnese é o corte longitudinal (história pregressa e evolução até o presente), enquanto o Exame do Estado Mental é o corte transversal (avaliação sistemática das funções psíquicas no momento atual da entrevista).",
        "A Anamnese avalia apenas exames de sangue, enquanto o Exame Psíquico avalia a infância do paciente.",
        "O Exame do Estado Mental é feito apenas com os familiares, sem a presença do paciente.",
        "A Anamnese dispensa a realização do Exame Psíquico."
      ],
      correct: 0
    },
    {
      topicId: "avaliacao_exame",
      question: "Qual dos seguintes elementos pertence especificamente ao registro do Exame do Estado Mental (corte transversal) realizado durante a consulta?",
      hint: "Procure o dado observado ou testado no exato momento da entrevista.",
      options: [
        "Histórico de complicações no parto e atraso para andar na infância.",
        "Relato de que o avô paterno teve depressão há 30 anos.",
        "Paciente vígil, orientado no tempo e no espaço, atenção hipovigilante, humor hipotímico (triste) e pensamento lentificado durante a entrevista.",
        "Lista de empregos anteriores do paciente na última década."
      ],
      correct: 2
    },
    {
      topicId: "avaliacao_exame",
      question: "Durante a avaliação psicopatológica, por que é indispensável considerar o nível socioeconômico, a escolaridade e o contexto cultural do paciente e de seus informantes?",
      hint: "Evitar confundir diferenças culturais ou educacionais com patologia.",
      options: [
        "Para cobrar valores diferentes na prescrição de exames.",
        "Para não patologizar crenças culturais legítimas (como vivências religiosas do grupo) ou confundir baixa escolaridade com déficit intelectual/demência.",
        "Porque pessoas com alta escolaridade nunca desenvolvem transtornos psiquiátricos.",
        "Porque a cultura altera a forma neurobiológica universal dos reflexos pupilares."
      ],
      correct: 1
    },
    {
      topicId: "avaliacao_exame",
      question: "Quando o profissional avalia a capacidade de o paciente reconhecer que seus sintomas (como alucinações ou ideias delirantes) são frutos de um adoecimento mental, qual função do Exame Psíquico está sendo investigada?",
      hint: "Também chamada de insight ou crítica da morbidade.",
      options: [
        "Orientação autopsíquica simples.",
        "Memória retrógrada remota.",
        "Juízo crítico de realidade e consciência de morbidade (insight).",
        "Psicomotricidade reflexa."
      ],
      correct: 2
    }
  ],

  // Sem simulado neste módulo por enquanto (o app.js ocultará a aba automaticamente)
  simulado: []
};