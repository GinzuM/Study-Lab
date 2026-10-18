// =========================================================================
// DADOS TEÓRICOS (dt_psicopatologia.js): TÓPICOS, MAPA MENTAL E FLASHCARDS
// Revisado integralmente para Português do Brasil (PT-BR)
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Com exemplos práticos e Modo Simplificado)
  topics: [
    {
      id: "conceito_objeto",
      title: "1. Conceito e Objeto da Psicopatologia",
      content: `A Psicopatologia é o ramo da ciência que estuda a natureza essencial da doença ou do sofrimento mental: suas causas, mudanças estruturais e formas de manifestação. Diferencia-se da Psiquiatria por ser uma ciência estritamente teórica e descritiva (não tem como foco primário medicar ou curar imediatamente, mas sim compreender os fenômenos psíquicos patológicos). Seu fundador moderno é Karl Jaspers (1913), que estabeleceu que o verdadeiro objeto da psicopatologia é o acontecimento psíquico consciente — aquilo que o sujeito realmente vivencia —, mas alertou que "nunca podemos reduzir inteiramente o ser humano a conceitos psicopatológicos".
      
      **Exemplo Prático:** Enquanto o psiquiatra foca em qual medicamento prescrever para controlar um surto psicótico (prática médica), o psicopatólogo investiga como a consciência, a percepção e o pensamento daquele paciente estão estruturados naquele momento.
      
      **Modo Simplificado:** A Psiquiatria é a arte prática de tratar o paciente; a Psicopatologia é a ciência que estuda e descreve o funcionamento da mente em sofrimento, sem nunca reduzir a pessoa a um rótulo.`,
      mnemonic: "💡 Mnemônico: Psicopatologia = Ciência/Estudo. Psiquiatria = Prática/Tratamento. Jaspers = Nunca reduzir o humano ao diagnóstico."
    },
    {
      id: "normal_patologico",
      title: "2. Critérios de Normalidade em Psicopatologia",
      content: `Definir o que é "normal" e "patológico" em saúde mental é complexo e exige múltiplos critérios (Dalgalarrondo):
      - **Normalidade como ausência de doença:** Critério falho e redundante (define o normal pelo que ele não é).
      - **Normalidade estatística:** Identifica o normal com o que é mais frequente na curva de Gauss (média). Problema: algo muito frequente pode ser patológico (ex: cárie, ansiedade leve) e algo raro pode ser saudável (ex: genialidade).
      - **Normalidade funcional:** É patológico aquilo que produz sofrimento para o próprio indivíduo ou prejuízo para o seu grupo social.
      - **Normalidade como processo:** Considera a dinâmica evolutiva e a faixa etária (o que é normal em uma criança de 3 anos pode ser patológico em um adulto de 30).
      - **Normalidade subjetiva:** A autopercepção do sujeito sobre seu estado (limitada em casos de mania ou psicose, onde falta crítica da doença).
      
      **Exemplo Prático:** Um adulto falar sozinho com um amigo imaginário no trabalho foge da normalidade evolutiva/processo, mas uma criança de 4 anos fazer exatamente o mesmo enquanto brinca é perfeitamente normal.
      
      **Modo Simplificado:** Não existe um único critério de normalidade. Na clínica, o mais importante é avaliar se há sofrimento real, perda de liberdade interna e prejuízo funcional, considerando a idade e a cultura.`,
      mnemonic: "💡 Mnemônico: Estatística = Média numérica. Funcional = Causa sofrimento/prejuízo. Processo = Depende da idade/fase da vida."
    },
    {
      id: "forma_conteudo",
      title: "3. Forma vs. Conteúdo dos Sintomas",
      content: `Segundo Jaspers e Dalgalarrondo, todo sintoma psicopatológico possui dois aspectos fundamentais:
      - **Forma:** É a estrutura básica, a "arquitetura" psicopatológica universal em que o fenômeno se apresenta (ex: alucinação auditiva, ideia delirante, obsessão, fobia). A forma é relativamente constante e ligada ao substrato neurobiológico/estrutural, sendo decisiva para o diagnóstico.
      - **Conteúdo:** É o tema que preenche essa estrutura (ex: culpa religiosa, perseguição pela polícia ou por alienígenas, medo de contaminação por vírus). O conteúdo depende diretamente da história de vida, da época e da cultura do paciente.
      
      **Exemplo Prático:** Dois pacientes têm esquizofrenia: no século XVIII, um acreditava ser perseguido por demônios; em 2026, outro acredita ser monitorado por satélites e inteligência artificial. A **forma** é idêntica (delírio persecutório), mas o **conteúdo** mudou conforme a cultura.
      
      **Modo Simplificado:** A **Forma** é o "pote" (delírio, alucinação, fobia) e serve para fechar o diagnóstico. O **Conteúdo** é o "recheio" (religião, tecnologia, política) e vem da história e cultura da pessoa.`,
      mnemonic: "💡 Mnemônico: Forma = Pote/Estrutura (Biologia/Diagnóstico). Conteúdo = Recheio/Tema (Cultura/História de vida)."
    },
    {
      id: "semiologia",
      title: "4. Semiologia Psicopatológica: Sinais, Sintomas e Síndromes",
      content: `A Semiologia é o estudo dos signos (sinais e sintomas) dos transtornos mentais. Divide-se em **Semiotécnica** (a técnica de coletar os dados, como conduzir a entrevista e fazer perguntas) e **Semiogênese** (a análise da origem, mecanismo e significado dos sintomas).
      - **Sinal:** Manifestação objetiva, diretamente observável pelo examinador (ex: agitação psicomotora, choro, tremor, fala acelerada).
      - **Sintoma:** Vivência subjetiva relatada pelo paciente, não observável diretamente de fora (ex: dor, angústia, tristeza interna, ouvir vozes sem reagir externamente).
      - **Síndrome:** Conjunto de sinais e sintomas que se agrupam de forma recorrente no mesmo momento, mas que podem ter várias causas diferentes (ex: síndrome depressiva, síndrome delirante-alucinatória).
      
      **Exemplo Prático:** O paciente chega tremendo e falando muito rápido (Sinais observados pelo clínico) e relata que sente um medo terrível de morrer (Sintoma subjetivo contado por ele). Juntos, formam uma Síndrome Ansiosa.
      
      **Modo Simplificado:** Sinal = O que você vê no paciente. Sintoma = O que o paciente sente e te conta. Síndrome = O pacote de sinais e sintomas juntos.`,
      mnemonic: "💡 Mnemônico: SINal = Visível de fora. SINtoma = Sentido por dentro (relato). SÍNdrome = Pacote de sinais e sintomas."
    },
    {
      id: "jaspers_compreender_explicar",
      title: "5. Psicopatologia Fenomenológica: Compreender vs. Explicar",
      content: `Karl Jaspers introduziu na Psicopatologia Geral a distinção metodológica fundamental entre **Explicar** (*Erklären*) e **Compreender** (*Verstehen*):
      - **Explicar (Causalidade das Ciências Naturais):** Consiste em buscar causas objetivas, orgânicas e biológicas de fora para dentro (ex: explicar o delirium tremens pela abstinência de álcool ou uma demência pela atrofia cerebral).
      - **Compreender (Conexão de Sentido Psicológica):** Consiste em colocar-se empaticamente no lugar do outro para captar, de dentro para fora, como um estado mental surge de outro com sentido lógico-emocional (ex: compreender a tristeza profunda de alguém após perder um filho).
      Para Jaspers, os delírios primários verdadeiros da esquizofrenia são psicologicamente **incompreensíveis** (não derivam de uma lógica afetiva comum), exigindo uma explicação causal neurobiológica.
      
      **Exemplo Prático:** Se alguém fica triste porque foi demitido, nós **compreendemos** o sentido emocional. Se alguém desenvolve perda de memória porque sofreu um traumatismo craniano, nós **explicamos** pela lesão física no cérebro.
      
      **Modo Simplificado:** **Explicar** é achar a causa física/biológica no cérebro (de fora). **Compreender** é entender o motivo emocional e humano por empatia (de dentro).`,
      mnemonic: "💡 Mnemônico: Explicar = Causa Biológica (Cérebro). Compreender = Sentido Empático (Coração/História)."
    },
    {
      id: "abordagens",
      title: "6. Principais Perspectivas em Psicopatologia",
      content: `O fenômeno mental patológico pode ser lido por diferentes matrizes teóricas:
      - **Descritiva / Categorial (DSM e CID):** Foca na descrição objetiva e ateórica de sinais e sintomas observáveis para classificar diagnósticos padronizados.
      - **Psicodinâmica / Psicanalítica:** Enxerga o sintoma não como um mero defeito biológico, mas como uma formação de compromisso resultante de conflitos inconscientes, desejos recalcados e mecanismos de defesa.
      - **Comportamental-Cognitiva:** Foca em comportamentos aprendidos disfuncionais, esquemas cognitivos rígidos e distorções no processamento da informação.
      - **Biológica / Neurociências:** Enfatiza alterações genéticas, de neurotransmissores e de circuitos cerebrais.
      
      **Exemplo Prático:** Diante de um Transtorno Obsessivo-Compulsivo (TOC), a visão Descritiva lista os critérios diagnósticos; a Biológica olha para a serotonina e núcleos da base; a Cognitiva trabalha as crenças de responsabilidade exagerada; e a Psicodinâmica investiga o conflito inconsciente e a culpa subjacente.
      
      **Modo Simplificado:** Descritiva = Lista sintomas (DSM/CID). Biológica = Olha o cérebro. Cognitiva = Olha os pensamentos distorcidos. Psicodinâmica = Olha o inconsciente.`,
      mnemonic: "💡 Mnemônico: Descritiva = O quê (Critérios). Biológica = Onde (Cérebro). Psicodinâmica = Por quê oculto (Inconsciente)."
    },
    {
      id: "funcoes_psiquicas",
      title: "7. As Funções Psíquicas e a Totalidade Mental",
      content: `Para fins didáticos e de Exame Psíquico, dividimos a mente em **funções psíquicas** (consciência, atenção, orientação, memória, sensopercepção, pensamento, linguagem, afetividade, vontade e psicomotricidade). Contudo, Dalgalarrondo enfatiza que não existem funções psíquicas isoladas na vida real: quem adoece é a pessoa inteira em sua totalidade. Quando uma função se altera, todas as outras são impactadas em cadeia.
      
      **Exemplo Prático:** Um paciente com depressão grave apresenta alteração primária da **afetividade** (humor triste e apatia), mas isso deixa a sua **atenção** reduzida, a sua **memória** falha, o seu **pensamento** lento e a sua **psicomotricidade** inibida.
      
      **Modo Simplificado:** Nós separamos a mente em "gavetas" (memória, atenção, humor, pensamento) apenas para estudar e avaliar melhor, mas na prática o cérebro funciona como uma orquestra integrada.`,
      mnemonic: "💡 Mnemônico: A divisão das funções psíquicas é apenas didática; o adoecimento é sempre global."
    },
    {
      id: "avaliacao_exame",
      title: "8. Avaliação Clínica: Anamnese e Exame do Estado Mental",
      content: `A avaliação clínica apoia-se em dois grandes pilares complementares:
      - **Anamnese (Histórico Clínico):** É o corte **longitudinal** (ao longo do tempo). Reúne a queixa principal, História da Doença Atual (HDA), antecedentes pessoais e familiares, desenvolvimento desde a infância e contexto psicossocial.
      - **Exame do Estado Mental (Exame Psíquico):** É o corte **transversal** ("fotografia" do momento atual da entrevista). Avalia sistematicamente a aparência, atitude, consciência, atenção, orientação, memória, pensamento, sensopercepção, humor/afeto, volição e juízo crítico de realidade do paciente no exato momento da consulta.
      
      **Exemplo Prático:** Perguntar "Quando começaram essas crises e como foi sua infância?" faz parte da **Anamnese** (filme da vida). Observar que agora, na cadeira do consultório, o paciente está lúcido, orientado no tempo, mas com humor choroso e fala lenta faz parte do **Exame do Estado Mental** (foto do agora).
      
      **Modo Simplificado:** Anamnese = O filme da história do paciente (passado até hoje). Exame do Estado Mental = A fotografia exata de como a mente dele está funcionando agora na consulta.`,
      mnemonic: "💡 Mnemônico: Anamnese = Longitudinal (Filme da história). Exame Psíquico = Transversal (Foto do presente)."
    }
  ],

  // 2. MAPA MENTAL
  tree: [
    { id: "conceito_objeto", title: "1. Conceito e Objeto (Jaspers)", level: 1, unlocked: true },
    { id: "normal_patologico", title: "2. Normal vs. Patológico", level: 1, unlocked: true },
    { id: "forma_conteudo", title: "3. Forma vs. Conteúdo", level: 2, unlocked: true },
    { id: "semiologia", title: "4. Sinais, Sintomas e Síndromes", level: 2, unlocked: true },
    { id: "jaspers_compreender_explicar", title: "5. Compreender vs. Explicar", level: 3, unlocked: true },
    { id: "abordagens", title: "6. Abordagens Psicopatológicas", level: 3, unlocked: true },
    { id: "funcoes_psiquicas", title: "7. Funções Psíquicas", level: 4, unlocked: true },
    { id: "avaliacao_exame", title: "8. Anamnese e Exame Psíquico", level: 5, unlocked: true }
  ],

  // 3. FLASHCARDS (15 cartões revisados em PT-BR)
  flashcards: [
    { topicId: "conceito_objeto", category: "Fundamentos", question: "Qual é a diferença principal entre a Psicopatologia e a Psiquiatria?", answer: "A Psicopatologia é uma ciência autônoma descritiva e compreensiva do sofrimento mental; a Psiquiatria é uma prática médica voltada ao tratamento e intervenção." },
    { topicId: "conceito_objeto", category: "História", question: "Quem é considerado o fundador da Psicopatologia Moderna em 1913?", answer: "O filósofo e psiquiatra alemão Karl Jaspers, autor da obra 'Psicopatologia Geral'." },
    { topicId: "normal_patologico", category: "Normalidade", question: "Qual é a principal limitação do critério estatístico de normalidade?", answer: "Confunde o normal com o mais frequente na média, ignorando que fenômenos muito comuns podem ser patológicos (ex: cárie) e raros podem ser saudáveis (ex: genialidade)." },
    { topicId: "normal_patologico", category: "Normalidade", question: "O que define o critério de 'normalidade como processo'?", answer: "Avalia o comportamento de forma dinâmica conforme a etapa do desenvolvimento e a faixa etária do indivíduo." },
    { topicId: "forma_conteudo", category: "Sintomatologia", question: "Na psicopatologia, qual a diferença entre Forma e Conteúdo do sintoma?", answer: "A Forma é a estrutura psicopatológica básica (ex: delírio, alucinação); o Conteúdo é o tema cultural e biográfico que a preenche (ex: perseguição por satélites)." },
    { topicId: "forma_conteudo", category: "Sintomatologia", question: "Para o diagnóstico psicopatológico, qual elemento é mais constante e decisivo: a forma ou o conteúdo?", answer: "A forma do sintoma." },
    { topicId: "semiologia", category: "Semiologia", question: "Qual a diferença entre Semiotécnica e Semiogênese?", answer: "Semiotécnica é a técnica de coleta e observação dos sintomas; Semiogênese é o estudo da origem e do significado desses sintomas." },
    { topicId: "semiologia", category: "Semiologia", question: "Qual a diferença clínica entre Sinal e Sintoma?", answer: "Sinal é um dado objetivo observável pelo examinador (ex: tremor); Sintoma é uma vivência subjetiva relatada pelo paciente (ex: angústia)." },
    { topicId: "semiologia", category: "Semiologia", question: "O que é uma Síndrome em psicopatologia?", answer: "Um agrupamento recorrente de sinais e sintomas que ocorrem juntos no mesmo momento, podendo ter diversas causas." },
    { topicId: "jaspers_compreender_explicar", category: "Fenomenologia", question: "Segundo Karl Jaspers, qual a diferença entre 'Explicar' e 'Compreender'?", answer: "Explicar é apontar a causa orgânica/biológica de fora para dentro; Compreender é captar empaticamente o sentido psicológico de dentro para fora." },
    { topicId: "jaspers_compreender_explicar", category: "Fenomenologia", question: "Por que o delírio primário verdadeiro é considerado 'incompreensível' por Jaspers?", answer: "Porque surge como uma intuição ou percepção imediata sem derivação lógica ou emocional compreensível a partir da história do sujeito." },
    { topicId: "abordagens", category: "Perspectivas", question: "Como a psicopatologia psicodinâmica (psicanalítica) enxerga o sintoma mental?", answer: "Como uma expressão simbólica e formação de compromisso resultante de conflitos inconscientes e mecanismos de defesa." },
    { topicId: "funcoes_psiquicas", category: "Exame Psíquico", question: "Por que dizemos que a divisão das funções psíquicas (memória, atenção, afeto) é apenas didática?", answer: "Porque a mente funciona como uma totalidade integrada: o adoecimento em uma função repercute em todas as demais." },
    { topicId: "avaliacao_exame", category: "Avaliação", question: "Qual a diferença temporal entre Anamnese e Exame do Estado Mental?", answer: "A Anamnese é longitudinal (história ao longo da vida); o Exame do Estado Mental é transversal (fotografia do funcionamento psíquico no momento da consulta)." },
    { topicId: "avaliacao_exame", category: "Avaliação", question: "O que é avaliado no Exame do Estado Mental (Exame Psíquico)?", answer: "Aparência, atitude, consciência, atenção, orientação, memória, sensopercepção, pensamento, linguagem, afetividade, volição e juízo crítico no momento presente." }
  ]
};