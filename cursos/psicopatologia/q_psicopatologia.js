// =========================================================================
// BANCO DE QUESTÕES E AVALIAÇÃO (q_psicopatologia.js) — Doc's Lab
// 25 Questões reformuladas com explicações cirúrgicas vinculadas ao Grimório
// =========================================================================

const questionsData = {
  quiz: [
    {
      topicId: "conceito_objeto",
      question: "Sobre a distinção fundamental entre a Psicopatologia e a Psiquiatria, é correto afirmar que:",
      hint: "Revise o Tópico 1 do Grimório sobre a ciência teórica versus a prática médica.",
      options: [
        "São sinônimos perfeitos voltados à prescrição de psicofármacos.",
        "A Psicopatologia é a ciência teórica e descritiva do sofrimento mental, enquanto a Psiquiatria é a prática médica focada na intervenção e tratamento.",
        "A Psicopatologia rejeita o estudo da consciência e restringe-se à neuroimagem.",
        "A Psiquiatria foi criada por Karl Jaspers para substituir a fenomenologia."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 1, a Psicopatologia estuda a natureza teórica do sofrimento mental de forma descritiva, enquanto a Psiquiatria atua no plano pragmático da intervenção clínica e farmacológica."
    },
    {
      topicId: "conceito_objeto",
      question: "Karl Jaspers, em sua obra de 1913, deixou uma advertência central sobre o paciente psiquiátrico. Qual é ela?",
      hint: "O ser humano nunca cabe inteiramente em um rótulo.",
      options: [
        "Todo comportamento reduz-se a reflexos motores.",
        "O diagnóstico esgota totalmente a identidade do indivíduo.",
        "Nunca podemos reduzir inteiramente o ser humano aos conceitos psicopatológicos.",
        "Apenas os fenômenos inconscientes constituem o objeto de estudo."
      ],
      correct: 2,
      explanation: "A advertência de Jaspers (Tópico 1) estabelece que a pessoa humana sempre transcende o diagnóstico clínico ou os conceitos psicopatológicos."
    },
    {
      topicId: "conceito_objeto",
      question: "Qual é o objeto de estudo primordial da Psicopatologia segundo Karl Jaspers?",
      hint: "O que o paciente vivencia em sua consciência.",
      options: [
        "A anatomia macroscópica do lobo frontal.",
        "O acontecimento psíquico consciente e a vivência subjetiva do sujeito.",
        "A criação de leis penais para internação.",
        "A eficácia comercial de ansiolíticos."
      ],
      correct: 1,
      explanation: "O objeto central definido por Jaspers no Tópico 1 é o acontecimento psíquico consciente — aquilo que o indivíduo vivencia subjetivamente."
    },
    {
      topicId: "normal_patologico",
      question: "Definir normalidade com base exclusivamente na média matemática da população geral (curva de Gauss) corresponde ao critério de:",
      hint: "Baseia-se em frequência estatística.",
      options: [
        "Normalidade funcional.",
        "Normalidade subjetiva.",
        "Normalidade estatística.",
        "Normalidade como processo."
      ],
      correct: 2,
      explanation: "O Tópico 2 define o critério estatístico como aquele que equipara o normal ao que é mais frequente na média da população."
    },
    {
      topicId: "normal_patologico",
      question: "Qual é a principal falha do critério estatístico de normalidade na clínica?",
      hint: "Nem tudo o que é frequente é saudável, nem tudo o que é raro é patológico.",
      options: [
        "Ele impede o uso de gráficos em pesquisas.",
        "Fenômenos patológicos frequentes (ex: cáries) parecem normais, e traços raros saudáveis (ex: genialidade) parecem anormais.",
        "Exige psicoterapia psicanalítica obrigatória.",
        "Considera apenas crianças pequenas como normais."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 2, a falha estatística reside no fato de que condições patológicas comuns entram na média, enquanto genialidades raras são classificadas como desvios."
    },
    {
      topicId: "normal_patologico",
      question: "Uma criança de 3 anos que faz birra intensa ao ser contrariada apresenta comportamento esperado, mas um adulto de 35 anos que faz o mesmo no escritório apresenta quadro disfuncional. Qual critério explica isso?",
      hint: "Leva em conta a etapa e a idade do desenvolvimento.",
      options: [
        "Normalidade anatômica.",
        "Normalidade estatística estática.",
        "Normalidade como processo (dinâmica do desenvolvimento e faixa etária).",
        "Normalidade subjetiva."
      ],
      correct: 2,
      explanation: "O Tópico 2 mostra que a normalidade como processo avalia o comportamento conforme a faixa etária e a etapa evolutiva do indivíduo."
    },
    {
      topicId: "normal_patologico",
      question: "O critério de normalidade subjetiva falha particularmente em qual situação clínica?",
      hint: "Quando o paciente perde a capacidade de reconhecer que está doente.",
      options: [
        "Em quadros psicóticos graves ou mania avançada, onde o paciente nega a doença e sente-se 'perfeito'.",
        "Em fobias simples de altura.",
        "Em queixas leves de insônia espontâneas.",
        "Em exames de rotina na atenção básica."
      ],
      correct: 0,
      explanation: "Conforme o Tópico 2, a autopercepção falha em psicoses e mania porque o paciente perde a crítica e sente-se perfeitamente saudável (ausência de crítica)."
    },
    {
      topicId: "forma_conteudo",
      question: "Na distinção entre Forma e Conteúdo dos sintomas, é correto afirmar que:",
      hint: "O pote estrutural versus o recheio cultural.",
      options: [
        "A forma depende da cultura local e o conteúdo é genético.",
        "A forma é a estrutura psicopatológica básica universal e o conteúdo é o tema biográfico e cultural que a preenche.",
        "O conteúdo é o único elemento que define o diagnóstico.",
        "Forma e conteúdo são idênticos."
      ],
      correct: 1,
      explanation: "O Tópico 3 define a Forma como a estrutura universal (ex: delírio) e o Conteúdo como o tema cultural e biográfico que preenche essa estrutura."
    },
    {
      topicId: "forma_conteudo",
      question: "Um paciente tem certeza absoluta de que agentes secretos instalaram câmeras em seus dentes. 'Delírio persecutório' e 'polícia secreta nos dentes' são, respectivamente:",
      hint: "Estrutura clínica versus enredo temático.",
      options: [
        "Conteúdo e Forma.",
        "Sinal e Sintoma.",
        "Forma e Conteúdo.",
        "Síndrome e Diagnóstico."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 3, o delírio persecutório é a Forma (pote estrutural), e a polícia secreta nos dentes é o Conteúdo (recheio biográfico)."
    },
    {
      topicId: "forma_conteudo",
      question: "Por que a Forma do sintoma é mais decisiva para o diagnóstico do que o Conteúdo?",
      hint: "A estrutura mantém-se constante enquanto o tema muda com a tecnologia e a cultura.",
      options: [
        "Porque o conteúdo nunca é relatado.",
        "Porque a forma reflete a alteração estrutural universal da função psíquica, enquanto o conteúdo varia com a época e a cultura.",
        "Porque escutar o conteúdo é proibido.",
        "Porque a forma muda a cada hora."
      ],
      correct: 1,
      explanation: "O Tópico 3 destaca que a Forma é constante e serve para o diagnóstico, ao passo que o conteúdo varia conforme a cultura e a tecnologia da época."
    },
    {
      topicId: "semiologia",
      question: "Na Semiologia Psicopatológica, como se diferenciam a Semiotécnica e a Semiogênese?",
      hint: "Técnica de coleta versus origem e mecanismo do sintoma.",
      options: [
        "Semiotécnica é a técnica de coleta de dados e entrevista; Semiogênese investiga a origem e os mecanismos dos sintomas.",
        "Semiotécnica estuda o DNA; Semiogênese prescreve remédios.",
        "Semiotécnica aplica-se a crianças; Semiogênese a idosos.",
        "Ambas tratam de exames de sangue."
      ],
      correct: 0,
      explanation: "Conforme o Tópico 4, a Semiotécnica é o método de coleta/entrevista, e a Semiogênese investiga a origem e o mecanismo produtor dos sintomas."
    },
    {
      topicId: "semiologia",
      question: "Um paciente apresenta tremores visíveis e fala acelerada, e relata sentir um vazio e medo de morrer. Os dados observados e o relato íntimo são, respectivamente:",
      hint: "Objetivo de fora versus subjetivo de dentro.",
      options: [
        "Sintomas e Sinais.",
        "Sinais objetivos e Sintomas subjetivos.",
        "Conteúdos e Formas.",
        "Diagnósticos e Prognósticos."
      ],
      correct: 1,
      explanation: "O Tópico 4 define Sinal como o dado objetivo observável (tremores) e Sintoma como a vivência subjetiva relatada (medo de morrer)."
    },
    {
      topicId: "semiologia",
      question: "O que define corretamente o conceito de 'Síndrome' na prática clínica?",
      hint: "Pacote de sinais e sintomas que caminham juntos.",
      options: [
        "Uma doença com causa única e comprovada.",
        "Um agrupamento recorrente de múltiplos sinais e sintomas que ocorrem juntos, podendo ter diversas causas.",
        "Qualquer sintoma isolado de curta duração.",
        "A cura definitiva de um transtorno."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 4, Síndrome é o pacote recorrente de sinais e sintomas que aparecem associados, independentemente de terem etiologias variadas."
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Segundo Karl Jaspers, qual a diferença entre 'Explicar' e 'Compreender'?",
      hint: "Causa biológica de fora versus sentido empático de dentro.",
      options: [
        "Explicar é conversar com a família; Compreender é pedir tomografia.",
        "Explicar busca causas orgânicas de fora para dentro; Compreender capta o sentido empático de dentro para fora.",
        "Explicar é da Psicanálise; Compreender é da Neurologia.",
        "Não há diferença."
      ],
      correct: 1,
      explanation: "O Tópico 5 diferencia Explicar (causa orgânica de fora para dentro) de Compreender (sentido empático humano de dentro para fora)."
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Um paciente tem delirium por infecção urinária; outro chora após falecimento do cônjuge. Os casos ilustram, respectivamente:",
      hint: "Causa orgânica versus sentido psicológico do luto.",
      options: [
        "Compreensão e Explicação.",
        "Explicação causal orgânica e Compreensão psicológica de sentido.",
        "Auto-organização e Hetero-organização.",
        "Simulação e Delírio."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 5, a infecção exigiu Explicação causal física, e o luto permitiu Compreensão psicológica do sentido humano."
    },
    {
      topicId: "jaspers_compreender_explicar",
      question: "Para Karl Jaspers, o 'delírio primário' da esquizofrenia caracteriza-se por ser:",
      hint: "Incompreensível psicologicamente em sua origem.",
      options: [
        "Compreensível a partir de uma tristeza.",
        "Psicologicamente incompreensível e inderiável, surgindo como ruptura radical na vivência.",
        "Uma mentira voluntária.",
        "Exclusivo da infância."
      ],
      correct: 1,
      explanation: "O Tópico 5 aponta que o delírio primário é psicologicamente incompreensível porque surge sem derivar logicamente de uma vivência anterior compreensível."
    },
    {
      topicId: "abordagens",
      question: "Manuais como DSM-5 e CID-11 baseiam-se predominantemente em qual abordagem?",
      hint: "Focam na catalogação descritiva de critérios observáveis.",
      options: [
        "Abordagem Descritiva e Categorial.",
        "Abordagem Psicanalítica Lacaniana.",
        "Abordagem Existencial.",
        "Antipsiquiatria radical."
      ],
      correct: 0,
      explanation: "Conforme o Tópico 6, os manuais internacionais utilizam a abordagem descritiva e categorial para padronizar diagnósticos."
    },
    {
      topicId: "abordagens",
      question: "A perspectiva psicodinâmica compreende um sintoma fóbico ou obsessivo como:",
      hint: "Conflito inconsciente e defesa.",
      options: [
        "Um mero erro genético sem sentido.",
        "Uma formação de compromisso contra conflitos inconscientes, desejos recalcados e defesas.",
        "Apenas um hábito motor escolar.",
        "Alteração de canais de cálcio."
      ],
      correct: 1,
      explanation: "O Tópico 6 define a visão psicodinâmica como a leitura do sintoma enquanto formação de compromisso contra conflitos inconscientes."
    },
    {
      topicId: "abordagens",
      question: "A abordagem Cognitivo-Comportamental em psicopatologia enfatiza principalmente:",
      hint: "Crenças e esquemas de pensamento.",
      options: [
        "Sonhos infantis e complexo de Édipo.",
        "Crenças disfuncionais, esquemas cognitivos e distorções no processamento da informação.",
        "Eletroconvulsoterapia obrigatória.",
        "Negação dos transtornos."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 6, a abordagem cognitivo-comportamental foca nas crenças disfuncionais e distorções cognitivas."
    },
    {
      topicId: "funcoes_psiquicas",
      question: "Sobre as funções psíquicas (atenção, memória, afeto, pensamento), Dalgalarrondo ressalta que:",
      hint: "A mente é uma totalidade integrada.",
      options: [
        "Funcionam em gavetas isoladas sem comunicação.",
        "A divisão em funções é didática, pois na prática clínica quem adoece é a pessoa inteira em sua totalidade.",
        "Apenas memória e inteligência importam.",
        "A afetividade nunca afeta a atenção."
      ],
      correct: 1,
      explanation: "O Tópico 7 destaca que a divisão em funções psíquicas é puramente didática; o adoecimento compromete a pessoa inteira em sua totalidade integrada."
    },
    {
      topicId: "funcoes_psiquicas",
      question: "Um paciente com ansiedade grave não consegue se lembrar do que leu porque está hipervigilante. Isso demonstra que:",
      hint: "As funções mentais interagem em cadeia.",
      options: [
        "Ele tem Alzheimer precoce.",
        "As funções psíquicas são interdependentes: a alteração na afetividade (ansiedade) prejudica a atenção e o registro da memória.",
        "A memória depende apenas dos músculos.",
        "A ansiedade melhora sempre a fixação."
      ],
      correct: 1,
      explanation: "Conforme o Tópico 7, a alteração na afetividade (ansiedade) prejudica a atenção, o que consequentemente compromete a fixação da memória."
    },
    {
      topicId: "avaliacao_exame",
      question: "Qual a diferença fundamental entre Anamnese e Exame do Estado Mental?",
      hint: "Filme longitudinal versus fotografia transversal.",
      options: [
        "Anamnese é o corte longitudinal da história de vida; o Exame Psíquico é o corte transversal do estado mental atual na consulta.",
        "Anamnese avalia sangue; Exame Psíquico avalia infância.",
        "O Exame Psíquico é feito só com a família.",
        "A Anamnese dispensa o exame psíquico."
      ],
      correct: 0,
      explanation: "O Tópico 8 diferencia Anamnese (longitudinal/filme da vida) de Exame do Estado Mental (transversal/fotografia do presente na consulta)."
    },
    {
      topicId: "avaliacao_exame",
      question: "Qual elemento pertence especificamente ao Exame do Estado Mental (corte transversal)?",
      hint: "Dado observado ou testado agora na entrevista.",
      options: [
        "Histórico de complicações no parto.",
        "Relato de depressão do avô.",
        "Paciente consciente, orientado, com humor hipotímico e pensamento lentificado na consulta.",
        "Lista de empregos anteriores."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 8, avaliar o estado atual de consciência, orientação, humor e pensamento na consulta pertence ao Exame do Estado Mental."
    },
    {
      topicId: "avaliacao_exame",
      question: "Por que é indispensável considerar o contexto cultural e a escolaridade na avaliação psicopatológica?",
      hint: "Evitar patologizar crenças legítimas ou diferenças educacionais.",
      options: [
        "Para cobrar valores diferentes.",
        "Para não patologizar crenças culturais legítimas ou confundir baixa escolaridade com déficits demenciais.",
        "Porque quem tem alta escolaridade nunca adoece.",
        "Porque a cultura altera reflexos pupilares."
      ],
      correct: 1,
      explanation: "O Tópico 8 alerta que o contexto cultural e educacional deve ser considerado para evitar erros diagnósticos decorrentes de diferenças socioculturais."
    },
    {
      topicId: "avaliacao_exame",
      question: "Quando o profissional avalia a capacidade de o paciente reconhecer que seus sintomas são frutos de um transtorno mental, investiga-se:",
      hint: "Crítica da morbidade ou insight.",
      options: [
        "Orientação autopsíquica.",
        "Memória remota.",
        "Juízo crítico de realidade e consciência de morbidade (insight).",
        "Psicomotricidade."
      ],
      correct: 2,
      explanation: "Conforme o Tópico 8, a consciência de morbidade (insight) corresponde à capacidade do paciente de reconhecer que vivencia uma condição patológica."
    }
  ],
  simulado: []
};