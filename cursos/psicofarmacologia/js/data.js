// =========================================================================
// BANCO DE DADOS ATUALIZADO: PSICOFARMACOLOGIA CLÍNICA & NEUROCIÊNCIAS
// =========================================================================

const studyData = {
  topics: [
    {
      id: "sinapse",
      title: "1. Comunicação Neural & Fisiologia da Sinapse Química",
      content: `**Explicação Detalhada:**
      A transmissão da informação no SNC ocorre prioritariamente por sinapses químicas. As etapas sequenciais são:
      1. **Despolarização Pré-Sináptica:** A chegada do potencial de ação terminal despolariza a membrana axonal.
      2. **Influxo de Cálcio:** Abrem-se canais de Cálcio dependentes de voltagem (Ca²⁺). O influxo rápido deste ião é o gatilho biofísico mandatório.
      3. **Exocitose Vesicular:** O Ca²⁺ interage com proteínas do complexo SNARE, provocando a fusão das vesículas e libertação dos neurotransmissores na fenda.
      4. **Ativação Pós-Sináptica:** Os ligantes acoplam-se a recetores gerando alterações elétricas:
         - **PPSE (Potencial Pós-Sináptico Excitatório):** Influxo de catiões (Na⁺), despolarizando a membrana e aproximando o neurónio do limiar de disparo elétrico.
         - **PPSI (Potencial Pós-Sináptico Inibitório):** Influxo de aniões (Cl⁻) ou efluxo de catiões (K⁺), hiperpolarizando a célula e silenciando o disparo.

      **Modo Simplificado:**
      - **Cálcio (Ca²⁺):** O gatilho que abre as portas para as vesículas descarregarem na fenda.
      - **PPSE:** Acelera o neurónio (o sódio entra, fica positivo e dispara).
      - **PPSI:** Trava o neurónio (o cloreto entra ou o potássio sai, fica negativo e cala).`,
      mnemonic: "💡 Mnemónica: 'PPSE aproxima do zero (+ dispara), PPSI afasta o neurónio (- silencia)'."
    },
    {
      id: "agonista_antagonista",
      title: "2. Princípios Farmacodinâmicos: Agonistas vs Antagonistas",
      content: `**Explicação Detalhada:**
      - **Agonista Pleno:** Fármaco que possui **afinidade** (capacidade de ligar-se ao sítio ativo do recetor) e **alta atividade intrínseca** (eficácia de 100% em conformar o recetor e ativar a cascata intracelular).
      - **Agonista Parcial:** Possui afinidade, mas a sua atividade intrínseca é submáxima. Na presença de excesso de agonista pleno, atua como um 'travão' ou antagonista relativo.
      - **Antagonista Silencioso:** Possui **afinidade** pelo recetor, mas a sua **atividade intrínseca é nula (0%)**. Ocupa a fenda estérica sem ativá-la, bloqueando o acesso de agonistas endógenos.
      
      *Exemplo Prático:* Antipsicóticos (como o Haloperidol) são antagonistas puros de recetores dopaminérgicos D₂; impedem a dopamina de se ligar na via mesolímbica.

      **Modo Simplificado:**
      - **Agonista:** Chave que entra na fechadura e roda o trinco (ativa a célula).
      - **Antagonista:** Chave partida que emperra a fechadura (não roda nada e impede que qualquer outra chave entre).`,
      mnemonic: "💡 Mnemónica: 'Agonista liga o motor; Antagonista parte a chave na ignição'."
    },
    {
      id: "neurotransmissores",
      title: "3. Neurotransmissores Clássicos & Ações Centrais",
      content: `**Explicação Detalhada:**
      - **Glutamato:** Principal neurotransmissor excitatório cerebral. Vital para a memória (LTP). Em excesso crónico causa **excitotoxicidade** (morte neuronal por influxo descontrolado de Ca²⁺).
      - **GABA:** Principal inibidor encefálico. Os seus recetores abrem canais de Cl⁻, promovendo sedação, ansiólise e estabilização de crises convulsivas.
      - **Serotonina (5-HT):** Regulação de humor, impulsividade, saciedade alimentar e sono.
      - **Noradrenalina (NA):** Alerta, prontidão de luta/fuga, foco, vigília e regulação da pressão arterial sistémica.
      - **Dopamina (DA):** Vias de recompensa e prazer, tónus motor extrapiramidal e funções executivas.
      - **Acetilcolina (ACh):** No SNC, atua na atenção e consolidação mnésica. No SNP, atua na junção neuromuscular disparando a contração dos músculos esqueléticos.

      **Modo Simplificado:**
      - **Glutamato:** Acelerador geral do cérebro.
      - **GABA:** Travão de mão geral (calmante).
      - **ACh:** Foco na cabeça e força no músculo.`,
      mnemonic: "💡 Mnemónica: 'GABA desliga a tomada; GLUtamato cola o circuito; Acetilcolina Ativa a Contração'."
    },
    {
      id: "psicose_dependencia",
      title: "4. Vias Dopaminérgicas: Psicose & Dependência",
      content: `**Explicação Detalhada:**
      1. **Esquizofrenia (Hipótese Dopaminérgica):**
         - **Via Mesolímbica:** A hiperatividade dopaminérgica gera os **sintomas positivos** (delírios e alucinações). Os antipsicóticos atuam bloqueando recetores D₂ desta via.
         - **Via Mesocortical:** A hipoatividade dopaminérgica correlaciona-se com os **sintomas negativos** (embotamento afetivo) e défices cognitivos.
         - **Via Nigroestriatal:** Controla a motricidade. O bloqueio excessivo de D₂ por antipsicóticos induz efeitos extrapiramidais (parkinsonismo).
      2. **Neurobiologia da Adição:**
         - Ocorre no **Circuito de Recompensa Mesolímbico**. Substâncias de abuso causam picos rápidos e suprafisiológicos de dopamina projetados no Núcleo Accumbens. O uso crónico gera dessensibilização (tolerância).
      3. **Défice Colinérgico (Alzheimer):**
         - A morte seletiva de neurónios no Núcleo Basal de Meynert causa falta severa de acetilcolina. Trata-se com inibidores da acetilcolinesterase.

      **Modo Simplificado:**
      - **Psicose (Sintomas Positivos):** Excesso de dopamina na via mesolímbica. Tratamento: Bloqueador de D₂.
      - **Dependência / Vício:** Inundação artificial de dopamina no Núcleo Accumbens.
      - **Alzheimer:** Falta severa de Acetilcolina na central da memória do cérebro.`,
      mnemonic: "💡 Mnemónica: 'Mesolímbica alta = Delírio e Vício; Colinérgico em baixa = Esquecimento (Alzheimer)'."
    },
    {
      id: "depressao_teorias",
      title: "5. Teorias Neurobiológicas da Depressão Maior",
      content: `**Explicação Detalhada:**
      - **Teoria Monoaminérgica Clássica:** Propõe que o transtorno decorre do défice de Serotonina, Noradrenalina e Dopamina.
        - *Paradoxo Temporal:* Os fármacos elevam as monoaminas na fenda em poucas horas, mas a remissão clínica demora de 2 a 4 semanas. Isto ocorre devido à necessidade de adaptações lentas: **dessensibilização e down-regulation de autorrecetores inibitórios pré-sinápticos**, permitindo a desinibição do neurónio.
      - **Teoria Neurotrófica:** O stress crónico (excesso de cortisol) suprime a expressão do gene do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*). Isto causa atrofia de dendrites e perda sináptica no hipocampo. Os antidepressivos reativam o BDNF, restaurando a plasticidade neuronal.

      **Modo Simplificado:**
      - **Monoaminas:** O atraso terapêutico ocorre porque os autorrecetores precisam de tempo para se adaptarem (dessensibilizar).
      - **Teoria Neurotrófica:** O stress seca os ramos dos neurónios (falta de BDNF). O antidepressivo funciona como um adubo celular.`,
      mnemonic: "💡 Mnemónica: 'Mais do que faltar neurotransmissor, falta adubo nos neurónios (BDNF)'."
    },
    {
      id: "antidepressivos",
      title: "6. Farmacologia: Tricíclicos (ADTs) vs ISRS",
      content: `**Explicação Detalhada:**
      - **Antidepressivos Tricíclicos (ADTs):**
        - Inibem a recaptação de Serotonina e Noradrenalina.
        - *Perfil Não Seletivo:* Antagonizam recetores colinérgicos muscarínicos (boca seca, obstipação, retenção urinária); histamínicos H₁ (sedação, aumento de peso); e adrenérgicos α₁ (hipotensão postural).
        - *Risco:* Elevada cardiotoxicidade por bloqueio de canais de sódio miocárdicos (arritmias em sobredosagem).
      - **Inibidores Seletivos de Recaptação de Serotonina (ISRS):**
        - Inibição seletiva do transportador SERT, sem afinidade por recetores muscarínicos ou adrenérgicos.
        - *Vantagem:* Eficácia equivalente aos ADTs, mas com elevado perfil de segurança e reduzida letalidade. Efeitos secundários comuns incluem náuseas transitórias e disfunções sexuais.

      **Modo Simplificado:**
      - **Tricíclicos:** Eficazes, mas afetam vários recetores no organismo (boca seca, tonturas ao levantar, sonolência) e são perigosos no coração.
      - **ISRS:** Atuação seletiva e segura na serotonina, sendo a primeira linha de tratamento atual.`,
      mnemonic: "💡 Mnemónica: 'Tricíclico atira para todo o lado; ISRS é cirúrgico e seguro'."
    }
  ],

  tree: [
    { id: "sinapse", title: "1. Fisiologia das Sinapses", level: 1 },
    { id: "agonista_antagonista", title: "2. Agonistas e Antagonistas", level: 2 },
    { id: "neurotransmissores", title: "3. Neurotransmissores", level: 2 },
    { id: "psicose_dependencia", title: "4. Psicose e Dependência", level: 3 },
    { id: "depressao_teorias", title: "5. Teorias da Depressão", level: 3 },
    { id: "antidepressivos", title: "6. Tricíclicos vs ISRS", level: 4 }
  ],

  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual ião desencadeia diretamente a exocitose das vesículas sinápticas?", answer: "Cálcio (Ca²⁺), que entra no terminal axonal após a despolarização." },
    { topicId: "sinapse", category: "Sinapses", question: "Como atua o Potencial Pós-Sináptico Excitatório (PPSE)?", answer: "Despolariza a membrana (frequentemente via entrada de Na⁺), aproximando-a do limiar de disparo." },
    { topicId: "sinapse", category: "Sinapses", question: "A entrada de Cloreto (Cl⁻) na célula gera qual evento elétrico?", answer: "Gera um Potencial Pós-Sináptico Inibitório (PPSI), hiperpolarizando a célula." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "Qual a diferença primária entre Agonista Pleno e Antagonista?", answer: "O Agonista possui afinidade e atividade intrínseca máxima; o Antagonista possui afinidade, mas eficácia nula (apenas bloqueia)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o principal neurotransmissor inibitório e o excitatório do SNC?", answer: "GABA (inibitório) e Glutamato (excitatório)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Onde atua a Acetilcolina no Sistema Nervoso Periférico?", answer: "Na junção neuromuscular, sendo responsável pela contração dos músculos esqueléticos." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual via dopaminérgica está associada aos sintomas positivos da esquizofrenia?", answer: "Via Mesolímbica (hiperatividade dopaminérgica)." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "O bloqueio acidental de qual via pelos antipsicóticos causa parkinsonismo?", answer: "Via Nigroestriatal." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "Que estrutura forma o centro de recompensa estimulado no vício?", answer: "Núcleo Accumbens." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "A exposição contínua a drogas causa que adaptação nos recetores D₂?", answer: "Dessensibilização e down-regulation (redução do número de recetores)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que é o paradoxo temporal da teoria monoaminérgica?", answer: "As aminas sobem na fenda em horas, mas o humor só melhora após 2 a 4 semanas." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que explica a latência de ação dos antidepressivos?", answer: "A necessidade de down-regulation dos autorrecetores inibitórios pré-sinápticos." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Segundo a Teoria Neurotrófica, qual é o impacto do stress crónico?", answer: "Suprime o BDNF, causando atrofia dendrítica no hipocampo." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual a diferença central de segurança entre Tricíclicos e ISRS?", answer: "ISRS têm elevada segurança e seletividade; Tricíclicos têm risco de letalidade por cardiotoxicidade em sobredosagem." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os Tricíclicos causam boca seca e retenção urinária?", answer: "Devido ao bloqueio não intencional dos recetores colinérgicos muscarínicos." }
  ],

  quiz: [
    {
      topicId: "sinapse",
      question: "Qual evento molecular na membrana pré-sináptica deflagra obrigatoriamente a exocitose das vesículas neuroquímicas?",
      hint: "Envolve a entrada de um ião bivalente após a despolarização.",
      options: [
        "Efluxo acelerado de iões potássio.",
        "Abertura de canais de cálcio dependentes de voltagem e influxo de Ca²⁺.",
        "Bloqueio da bomba de sódio-potássio.",
        "Fecho prematuro de canais de cloro."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "A entrada massiva de iões cloreto (Cl⁻) numa célula nervosa após a ligação do neurotransmissor resulta em:",
      hint: "O citoplasma fica mais negativo.",
      options: [
        "Despolarização severa.",
        "Potencial Pós-Sináptico Inibitório (PPSI), afastando a célula do limiar de disparo.",
        "Potencial Pós-Sináptico Excitatório (PPSE).",
        "Libertação automática de vesículas na fenda."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "Um Potencial Pós-Sináptico Excitatório (PPSE) carateriza-se eletrofisiologicamente por:",
      hint: "Aproxima o potencial do limiar de ação.",
      options: [
        "Despolarização local da membrana induzida frequentemente por influxo de sódio (Na⁺).",
        "Hiperpolarização membranar contínua.",
        "Efluxo massivo de grandes aniões proteicos.",
        "Encerramento de canais iónicos de cálcio."
      ],
      correct: 0
    },
    {
      topicId: "sinapse",
      question: "O complexo proteico SNARE, localizado no terminal pré-sináptico, necessita da interação direta com qual elemento para fundir a vesícula à membrana?",
      hint: "O mesmo ião responsável pelo gatilho da exocitose.",
      options: [
        "Dopamina livre.",
        "Magnésio (Mg²⁺).",
        "Cálcio (Ca²⁺).",
        "Enzima Acetilcolinesterase."
      ],
      correct: 2
    },
    {
      topicId: "sinapse",
      question: "O que impede que um Potencial Pós-Sináptico Inibitório (PPSI) dispare um potencial de ação no neurónio pós-sináptico?",
      hint: "O PPSI torna o interior da célula mais negativo.",
      options: [
        "A hiperpolarização afasta a voltagem membranar do limiar crítico de disparo elétrico.",
        "O PPSI destrói os recetores de glutamato.",
        "Ele despolariza o axónio num sentido inverso (antidrómico).",
        "Bloqueia a produção de energia mitocondrial instantaneamente."
      ],
      correct: 0
    },
    {
      topicId: "agonista_antagonista",
      question: "Um fármaco com alta afinidade pelo recetor, mas com eficácia e atividade intrínseca rigorosamente nula, classifica-se como:",
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
      hint: "Bloqueiam os recetores D2 na via mesolímbica.",
      options: [
        "Agonistas dopaminérgicos puros.",
        "Inibidores da recaptação de noradrenalina.",
        "Antagonistas puros dos recetores dopaminérgicos D₂.",
        "Indutores da degradação de acetilcolina."
      ],
      correct: 2
    },
    {
      topicId: "agonista_antagonista",
      question: "Se um antagonista silencioso for administrado num organismo isolado, sem presença de agonistas prévios, qual será o efeito estimulatório celular primário?",
      hint: "Lembre-se que a atividade intrínseca é zero.",
      options: [
        "Excitação contínua e prolongada.",
        "Nenhum efeito intrínseco direto, ocorrendo apenas o bloqueio da fenda estérica.",
        "Hiperpolarização imediata mediada por potássio.",
        "Síntese acelerada de novos recetores G."
      ],
      correct: 1
    },
    {
      topicId: "agonista_antagonista",
      question: "Qual termo farmacodinâmico descreve a 'força de atração' entre a molécula do fármaco e o seu recetor-alvo?",
      hint: "É a capacidade de se ligar.",
      options: [
        "Afinidade.",
        "Atividade intrínseca.",
        "Latência.",
        "Semivida biológica."
      ],
      correct: 0
    },
    {
      topicId: "neurotransmissores",
      question: "Qual neurotransmissor atua como principal agente inibitório do cérebro, cuja estimulação induz ansiólise e sedação?",
      hint: "Associa-se frequentemente a fármacos calmantes como as benzodiazepinas.",
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
      question: "A excitotoxicidade, que resulta na morte neuronal por influxo descontrolado de cálcio celular, é mediada pelo excesso crónico de qual neurotransmissor?",
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
      question: "No Sistema Nervoso Periférico, a contração das fibras musculares esqueléticas é diretamente mediada pela libertação na fenda sináptica de:",
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
        "Degeneração massiva de neurónios noradrenérgicos do Locus Coeruleus.",
        "Défice serotoninérgico no córtex motor primário."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Os sintomas negativos da esquizofrenia (embotamento afetivo, apatia e défices cognitivos frontais) associam-se funcionalmente a:",
      hint: "Via dopaminérgica que inerva o córtex pré-frontal.",
      options: [
        "Hipoatividade dopaminérgica na via mesocortical.",
        "Hiperativação dos recetores colinérgicos periféricos.",
        "Aumento extremo da densidade de recetores GABAA.",
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
      question: "Qual o efeito compensatório celular crónico provocado pela inundação suprafisiológica contínua de dopamina pelo uso abusivo de drogas?",
      hint: "O cérebro tenta defender-se reduzindo a sensibilidade.",
      options: [
        "Dessensibilização e redução (down-regulation) dos recetores dopaminérgicos D₂ no corpo estriado.",
        "Aumento exponencial de recetores D₁ no hipocampo.",
        "Bloqueio permanente dos canais de cálcio dependentes de voltagem.",
        "Transformação da dopamina endógena em glutamato puro."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "O défice de memória na Doença de Alzheimer é clinicamente atenuado através do uso de inibidores da acetilcolinesterase. Qual é a lógica desta farmacologia?",
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
        "A serotonina apenas afeta doentes com menos de 30 anos.",
        "Os recetores muscarínicos demoram um ano a reagir aos ISRS."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "Na psicofarmacologia moderna, o atraso de semanas para o efeito clínico do antidepressivo é explicado neurologicamente pelo processo de:",
      hint: "Envolve recetores que funcionam como 'travões' pré-sinápticos.",
      options: [
        "Dessensibilização e down-regulation progressiva de autorrecetores inibitórios pré-sinápticos (como 5-HT1A).",
        "Tempo de trânsito lento do fármaco na barreira hematoencefálica.",
        "Acumulação gradual de metabolitos tóxicos no fígado.",
        "Morte seletiva de neurónios noradrenérgicos."
      ],
      correct: 0
    },
    {
      topicId: "depressao_teorias",
      question: "A Teoria Neurotrófica da Depressão foca a ação danosa do stress crónico e hipercotisolismo, que resulta em:",
      hint: "Falta de 'adubo' (BDNF) para as árvores dendríticas.",
      options: [
        "Ativação excessiva do sistema imunológico no estômago.",
        "Supressão da expressão de BDNF, levando à atrofia de dendrites e perda sináptica no hipocampo.",
        "Proliferação caótica e descontrolada de células da glia no cerebelo.",
        "Conversão das vias inibitórias do GABA em vias ativadoras letais."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "Segundo a perspetiva neurotrófica, qual é a verdadeira função a longo prazo dos fármacos antidepressivos na célula neuronal?",
      hint: "Ajudam a reparar os ramos secos dos neurónios.",
      options: [
        "Reduzir permanentemente a plasticidade celular para conservar energia.",
        "Induzir cascatas intracelulares tardias que reativam o BDNF, restaurando a sinaptogénese.",
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
        "Sustentar a neuroplasticidade, a sobrevivência neuronal e a neurogénese no hipocampo.",
        "Atuar como principal neurotransmissor excitador nos gânglios da base.",
        "Quebrar enzimaticamente a acetilcolina na placa motora.",
        "Transportar eletrões na respiração celular dos astrócitos."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Os Antidepressivos Tricíclicos (ADTs), como a Amitriptilina, atuam fundamentalmente bloqueando:",
      hint: "Atuam simultaneamente em duas monoaminas importantes.",
      options: [
        "A recaptação celular de Serotonina (SERT) e de Noradrenalina (NET).",
        "Exclusivamente os recetores dopaminérgicos da via mesolímbica.",
        "A libertação de glutamato mediada por canais de cálcio.",
        "A síntese de melatonina na glândula pineal."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Efeitos adversos comuns dos Tricíclicos, como boca seca, visão turva, obstipação severa e retenção urinária, devem-se ao seu efeito:",
      hint: "Bloqueiam os recetores de um neurotransmissor periférico.",
      options: [
        "Antagonista de recetores adrenérgicos α₁.",
        "Antagonista de recetores colinérgicos muscarínicos.",
        "Agonista de recetores histamínicos H₁.",
        "Inibidor da Monoamina Oxidase (IMAO)."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Em caso de sobredosagem aguda por Antidepressivos Tricíclicos, o risco imediato e fatal de morte ocorre habitualmente devido a:",
      hint: "Toxicidade a nível elétrico no sistema cardiovascular.",
      options: [
        "Falência hepática fulminante por toxicidade enzimática.",
        "Cardiotoxicidade letal desencadeada por bloqueio severo de canais de sódio miocárdicos (arritmias).",
        "Hipertemia maligna irreversível com destruição muscular.",
        "Edema pulmonar por hiperativação dos recetores GABAA."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual a vantagem farmacológica fulcral que tornou os Inibidores Seletivos (ISRS) a primeira linha de tratamento antidepressivo em detrimento dos Tricíclicos?",
      hint: "Relaciona-se com a segurança na toma.",
      options: [
        "A sua eficácia é três vezes superior na reversão imediata da depressão.",
        "Não precisam de passar pelo fígado, sendo metabolizados diretamente no estômago.",
        "Apresentam elevada segurança e baixíssima letalidade em casos de sobredosagem, com muito menos efeitos adversos perigosos.",
        "Contêm BDNF sintético que penetra de imediato a barreira cerebral."
      ],
      correct: 2
    }
  ]
};
