// =========================================================================
// cursos/psicofarmacologia/q_psicofarmacologia.js
// Banco de Questões Comentadas (Quizzes de Módulo e Simulado Global)
// =========================================================================

window.QUESTIONS_DB = [
  // ===================== MÓDULO 1 =====================
  {
    id: 1,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Fácil",
    enunciado: "Anatomicamente, quais estruturas compõem o Sistema Nervoso Central (SNC)?",
    opcoes: [
      "Nervos cranianos e gânglios periféricos.",
      "Encéfalo (cérebro, cerebelo e tronco encefálico) e medula espinal.",
      "Sistema nervoso simpático e parassimpático exclusivamente.",
      "Apenas o córtex pré-frontal e o hipocampo."
    ],
    correta: 1,
    explicacao: "Correta: O SNC é formado pelo encéfalo e pela medula espinal, protegidos pelas meninges, líquor, crânio e coluna vertebral."
  },
  {
    id: 2,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Fácil",
    enunciado: "Na neurotransmissão química, qual evento intracelular no terminal pré-sináptico atua como gatilho imediato para a fusão das vesículas sinápticas e liberação do neurotransmissor na fenda?",
    opcoes: [
      "A entrada de íons cálcio (Ca²⁺) no terminal axônico após a chegada do potencial de ação.",
      "A saída de glicose da membrana pós-sináptica.",
      "A destruição completa da bainha de mielina.",
      "O fechamento total dos receptores de membrana."
    ],
    correta: 0,
    explicacao: "Correta: A despolarização do terminal pré-sináptico abre canais de cálcio dependentes de voltagem; o influxo de Ca²⁺ desencadeia a exocitose das vesículas na fenda sináptica."
  },
  {
    id: 3,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Médio",
    enunciado: "Qual alternativa diferencia corretamente os receptores pós-sinápticos IONOTRÓPICOS dos receptores METABOTRÓPICOS?",
    opcoes: [
      "Ionotrópicos são lentos e usam proteína G; metabotrópicos são canais iônicos diretos e instantâneos.",
      "Ionotrópicos são canais iônicos acoplados diretamente ao receptor (resposta rápida); metabotrópicos atuam via proteína G e segundos mensageiros (resposta mais lenta e modulatória).",
      "Metabotrópicos existem apenas fora do sistema nervoso.",
      "Ionotrópicos nunca participam de sinapses químicas."
    ],
    correta: 1,
    explicacao: "Correta: Receptores ionotrópicos (ex.: GABA-A, NMDA) abrem canais iônicos diretamente em milissegundos, enquanto metabotrópicos (ex.: D2, 5-HT2A) ativam cascatas bioquímicas via proteína G."
  },
  {
    id: 4,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Médio",
    enunciado: "Como o sinal de um neurotransmissor liberado na fenda sináptica é encerrado (inativado) fisiologicamente?",
    opcoes: [
      "Apenas pelo congelamento da fenda sináptica.",
      "Principalmente por recaptação pré-sináptica (via proteínas transportadoras), degradação enzimática ou difusão para fora da fenda.",
      "Pela destruição definitiva do neurônio pós-sináptico.",
      "O sinal nunca é encerrado após a liberação."
    ],
    correta: 1,
    explicacao: "Correta: Recaptação pré-sináptica (alvo de antidepressivos como ISRS) e degradação enzimática (ex.: MAO, acetilcolinesterase) são os principais mecanismos de término da transmissão sináptica."
  },
  {
    id: 5,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Médio",
    enunciado: "Para que um psicofármaco administrado por via oral atinja seu alvo no cérebro, ele precisa atravessar a Barreira Hematoencefálica (BHE). Qual característica físico-química é fundamental para essa passagem?",
    opcoes: [
      "Ser uma molécula gigante e totalmente insolúvel em lipídios.",
      "Apresentar alta lipossolubilidade (afinidade por lipídios) e baixo peso molecular.",
      "Ser eliminada pelos rins antes de entrar no sangue.",
      "Não sofrer absorção gastrointestinal."
    ],
    correta: 1,
    explicacao: "Correta: A BHE é seletiva e lipofílica, exigindo que psicofármacos sejam lipossolúveis para penetrar no SNC."
  },
  {
    id: 6,
    modulo: "Módulo 1: Sistema Nervoso Central, Sinapse e Neurotransmissão",
    nivel: "Difícil",
    enunciado: "Na Farmacocinética dos psicofármacos, qual é a principal relevância clínica do sistema enzimático hepático Citocromo P450 (CYP450)?",
    opcoes: [
      "Ele produz serotonina diretamente nos núcleos da rafe.",
      "Ele é responsável pela biotransformação (metabolismo) da maioria dos psicofármacos no fígado, sendo o principal sítio de interações medicamentosas (inibição ou indução enzimática).",
      "Ele forma a bainha de mielina nos axônios do tronco encefálico.",
      "Ele atua exclusivamente como receptor pós-sináptico de dopamina."
    ],
    correta: 1,
    explicacao: "Correta: Muitos psicofármacos inibem ou induzem enzimas do CYP450, podendo elevar níveis tóxicos ou reduzir a eficácia de outros medicamentos usados simultaneamente."
  },

  // ===================== MÓDULO 2 =====================
  {
    id: 7,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Fácil",
    enunciado: "Na Farmacodinâmica, qual alternativa define corretamente um AGONISTA e um ANTAGONISTA?",
    opcoes: [
      "Agonista bloqueia o receptor sem ativá-lo; Antagonista gera resposta biológica máxima.",
      "Agonista possui afinidade e atividade intrínseca (ativa o receptor); Antagonista possui afinidade pelo receptor, mas atividade intrínseca zero (bloqueia a ação do agonista/neurotransmissor).",
      "Ambos destroem permanentemente o receptor celular.",
      "Antagonistas não possuem afinidade nenhuma pelos receptores."
    ],
    correta: 1,
    explicacao: "Correta: Tanto agonistas quanto antagonistas se ligam ao receptor (têm afinidade), mas apenas o agonista possui atividade intrínseca para ativá-lo."
  },
  {
    id: 8,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Médio",
    enunciado: "Como atua um AGONISTA PARCIAL (como o aripiprazol nos receptores D2) na modulação de um sistema de neurotransmissão?",
    opcoes: [
      "Produz sempre efeito oposto ao do neurotransmissor natural (agonismo inverso).",
      "Liga-se ao receptor gerando resposta biológica submáxima; assim, estimula quando há déficit do neurotransmissor e reduz o excesso quando há hiperatividade do agonista pleno.",
      "Não se liga a nenhum receptor específico.",
      "Bloqueia irreversivelmente todos os canais de sódio do corpo."
    ],
    correta: 1,
    explicacao: "Correta: Por ter atividade intrínseca intermediária, o agonista parcial funciona como um 'estabilizador' do sistema receptor."
  },
  {
    id: 9,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Fácil",
    enunciado: "Quais são, respectivamente, o principal neurotransmissor INIBITÓRIO e o principal neurotransmissor EXCITATÓRIO do Sistema Nervoso Central?",
    opcoes: [
      "Dopamina e Serotonina.",
      "GABA (Ácido Gama-Aminobutírico) e Glutamato.",
      "Acetilcolina e Noradrenalina.",
      "Adrenalina e Histamina."
    ],
    correta: 1,
    explicacao: "Correta: O GABA promove inibição neuronal (influxo de cloreto) e o Glutamato promove excitação neuronal e plasticidade sináptica (via receptores NMDA/AMPA)."
  },
  {
    id: 10,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Médio",
    enunciado: "Assinale a alternativa que associa corretamente os neurotransmissores monoaminérgicos aos seus respectivos núcleos principais de origem no tronco encefálico e funções:",
    opcoes: [
      "Serotonina: núcleos da rafe (humor, ansiedade, sono, impulsividade); Noradrenalina: locus coeruleus (alerta, vigília, estresse); Dopamina: ATV/substância negra (recompensa, motivação, motricidade).",
      "Dopamina: núcleos da rafe (apenas sono); Serotonina: medula espinal (apenas contração muscular).",
      "Noradrenalina: hipocampo (apenas visão); GABA: cerebelo (principal excitatório).",
      "Acetilcolina: único neurotransmissor presente no sistema límbico."
    ],
    correta: 0,
    explicacao: "Correta: Núcleos da rafe (5-HT), locus coeruleus (NA) e substância negra/ATV (DA) são os grandes centros produtores das monoaminas no tronco encefálico."
  },
  {
    id: 11,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Médio",
    enunciado: "Qual neurotransmissor desempenha papel central na memória e na atenção no SNC — sofrendo degeneração marcante na Doença de Alzheimer — e cujo bloqueio por certos psicofármacos provoca boca seca, visão turva e constipação?",
    opcoes: [
      "Glutamato.",
      "Acetilcolina (ACh).",
      "GABA.",
      "Dopamina."
    ],
    correta: 1,
    explicacao: "Correta: A acetilcolina atua em receptores muscarínicos e nicotínicos; seu bloqueio gera a clássica síndrome de efeitos adversos anticolinérgicos."
  },
  {
    id: 12,
    modulo: "Módulo 2: Agonistas, Antagonistas e Neurotransmissores do SNC",
    nivel: "Difícil",
    enunciado: "Na Farmacodinâmica, o que diferencia um MODULADOR ALOSTÉRICO POSITIVO de um agonista pleno direto?",
    opcoes: [
      "O modulador alostérico positivo liga-se a um sítio secundário (alostérico) do receptor e potencializa a resposta ao neurotransmissor endógeno, dependendo da presença deste para agir.",
      "O modulador alostérico positivo destrói o sítio principal de ligação do neurotransmissor.",
      "O agonista pleno não consegue ativar o receptor sozinho.",
      "Não existe nenhuma diferença funcional entre os dois."
    ],
    correta: 0,
    explicacao: "Correta: Essa dependência do neurotransmissor endógeno explica por que moduladores alostéricos (como os benzodiazepínicos no GABA-A) possuem efeito teto e maior segurança clínica."
  },

  // ===================== MÓDULO 3 =====================
  {
    id: 13,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Fácil",
    enunciado: "Sobre as Teorias da Depressão, o que propõe a Teoria Monoaminérgica Clássica e qual foi sua principal complementação contemporânea?",
    opcoes: [
      "A teoria clássica atribuía a depressão ao excesso de GABA; hoje atribui-se apenas à falta de água.",
      "A teoria clássica relacionava a depressão à deficiência funcional de monoaminas (serotonina, noradrenalina e dopamina); hoje é complementada pelas teorias de regulação de receptores, eixo HPA e neuroplasticidade (BDNF).",
      "A teoria clássica descartava completamente o papel do cérebro na depressão.",
      "Ambas afirmam que os antidepressivos curam a depressão em 24 horas."
    ],
    correta: 1,
    explicacao: "Correta: A hipótese monoaminérgica foi o ponto de partida histórico, hoje integrada à regulação de receptores (down-regulation) e à neuroplasticidade mediada por BDNF."
  },
  {
    id: 14,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Fácil",
    enunciado: "Qual é o principal mecanismo de ação dos antidepressivos ISRS (como fluoxetina, sertralina e escitalopram)?",
    opcoes: [
      "Bloqueio dos receptores dopaminérgicos D2 na via nigroestriatal.",
      "Inibição seletiva da recaptação de serotonina (bloqueio do transportador SERT), aumentando a disponibilidade de serotonina na fenda sináptica.",
      "Inibição irreversível da enzima acetilcolinesterase.",
      "Modulação alostérica direta do receptor GABA-A."
    ],
    correta: 1,
    explicacao: "Correta: Os ISRS bloqueiam seletivamente o SERT, elevando a disponibilidade sináptica de 5-HT com menos efeitos adversos cardíacos e anticolinérgicos do que os tricíclicos."
  },
  {
    id: 15,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Médio",
    enunciado: "Por que os antidepressivos costumam apresentar um período de latência de 2 a 4 semanas para a melhora clínica consistente, embora elevem os neurotransmissores na fenda em poucas horas?",
    opcoes: [
      "Porque o medicamento leva 3 semanas para ser absorvido pelo estômago.",
      "Porque o efeito terapêutico pleno depende de adaptações celulares mais lentas, como dessensibilização/regulação de receptores, expressão gênica de neurotrofinas (BDNF) e neuroplasticidade sináptica.",
      "Porque os antidepressivos só funcionam depois que o paciente para de tomar.",
      "Porque o fígado bloqueia o medicamento durante o primeiro mês."
    ],
    correta: 1,
    explicacao: "Correta: O aumento agudo na fenda é apenas o gatilho inicial; a remodelação de receptores e a restauração da plasticidade sináptica via BDNF levam semanas."
  },
  {
    id: 16,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Médio",
    enunciado: "Qual classe de antidepressivos exige restrição dietética de alimentos ricos em TIRAMINA (como queijos curados, vinhos tintos e embutidos) para evitar crise hipertensiva grave ('efeito do queijo')?",
    opcoes: [
      "ISRS (ex.: sertralina).",
      "IMAOs clássicos irreversíveis (ex.: tranilcipromina).",
      "IRSN (ex.: venlafaxina).",
      "Antidepressivos atípicos (ex.: bupropiona)."
    ],
    correta: 1,
    explicacao: "Correta: Ao inibir a MAO intestinal e hepática, os IMAOs clássicos impedem a degradação da tiramina alimentar, que desloca noradrenalina e pode causar elevação perigosa da pressão arterial."
  },
  {
    id: 17,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Médio",
    enunciado: "Por que os Antidepressivos Tricíclicos (como amitriptilina e imipramina) deixaram de ser a primeira escolha em pacientes com depressão e alto risco suicida?",
    opcoes: [
      "Porque não têm eficácia comprovada na depressão.",
      "Porque apresentam estreita margem de segurança com grave risco de cardiotoxicidade (arritmias fatais) em superdosagem, além de intensos efeitos anticolinérgicos e sedativos.",
      "Porque causam euforia maníaca instantânea em 100% dos pacientes.",
      "Porque não atravessam a barreira hematoencefálica."
    ],
    correta: 1,
    explicacao: "Correta: Os ADTs bloqueiam canais de sódio cardíacos e múltiplos receptores (H1, M1, alfa-1), tornando a superdosagem altamente letal em comparação aos ISRS."
  },
  {
    id: 18,
    modulo: "Módulo 3: Antidepressivos e Teorias da Depressão",
    nivel: "Difícil",
    enunciado: "Assinale a alternativa que associa corretamente os antidepressivos atípicos/duais ao seu respectivo mecanismo de ação predominante:",
    opcoes: [
      "Venlafaxina e duloxetina (IRSN): inibem recaptação de serotonina e noradrenalina; Bupropiona (IRDN): inibe recaptação de dopamina e noradrenalina.",
      "Bupropiona: inibidor seletivo de serotonina com forte sedação.",
      "Mirtazapina: inibidor irreversível da enzima MAO.",
      "Fluoxetina: antagonista dopaminérgico D2."
    ],
    correta: 0,
    explicacao: "Correta: IRSN atuam sobre 5-HT e NA; bupropiona atua sobre DA e NA (sem causar disfunção sexual); mirtazapina atua por antagonismo alfa-2 e 5-HT2/5-HT3."
  },

  // ===================== MÓDULO 4 =====================
  {
    id: 19,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Fácil",
    enunciado: "Qual é o principal mecanismo de ação dos Benzodiazepínicos (como diazepam, clonazepam e alprazolam) no Sistema Nervoso Central?",
    opcoes: [
      "Bloqueiam a recaptação de serotonina nos núcleos da rafe.",
      "Atuam como moduladores alostéricos positivos no receptor GABA-A, aumentando a frequência de abertura do canal de cloreto (Cl⁻) e hiperpolarizando o neurônio.",
      "Ativam diretamente receptores de glutamato NMDA.",
      "Inibem a degradação de dopamina pela enzima MAO."
    ],
    correta: 1,
    explicacao: "Correta: Os benzodiazepínicos ligam-se ao sítio alostérico do receptor GABA-A, potencializando a ação inibitória do GABA endógeno pelo aumento da frequência de abertura do canal de Cl⁻."
  },
  {
    id: 20,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Fácil",
    enunciado: "Além do efeito ansiolítico, quais outras propriedades farmacológicas clássicas os benzodiazepínicos apresentam?",
    opcoes: [
      "Ação antipsicótica potente e aumento do apetite.",
      "Ação hipnótica/sedativa, anticonvulsivante, relaxante muscular e amnésia anterógrada transitória.",
      "Estimulação cardíaca intensa e aumento da vigília.",
      "Ação alucinógena sobre receptores 5-HT2A."
    ],
    correta: 1,
    explicacao: "Correta: A potencialização global do sistema GABAérgico explica as 5 ações clássicas dos BZDs (ansiolítica, hipnótica, anticonvulsivante, miorrelaxante e amnésica)."
  },
  {
    id: 21,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Médio",
    enunciado: "Em casos de intoxicação aguda grave por superdosagem de benzodiazepínicos, qual fármaco atua como antídoto específico (antagonista competitivo do sítio benzodiazepínico no receptor GABA-A)?",
    opcoes: [
      "Naloxona.",
      "Flumazenil.",
      "Haloperidol.",
      "Fluoxetina."
    ],
    correta: 1,
    explicacao: "Correta: O flumazenil reverte especificamente os efeitos dos benzodiazepínicos no receptor GABA-A (enquanto a naloxona é o antídoto para opioides)."
  },
  {
    id: 22,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Médio",
    enunciado: "Por que os benzodiazepínicos são recomendados preferencialmente para uso de curto prazo (2 a 4 semanas) em transtornos de ansiedade, e não como tratamento contínuo por anos?",
    opcoes: [
      "Porque não fazem nenhum efeito na ansiedade aguda.",
      "Pelo risco elevado de desenvolvimento de tolerância, dependência física, síndrome de abstinência na retirada, prejuízo cognitivo/memória e risco de quedas em idosos.",
      "Porque provocam sintomas extrapiramidais severos como o haloperidol.",
      "Porque causam crise hipertensiva com queijo."
    ],
    correta: 1,
    explicacao: "Correta: O uso crônico de BZDs gera tolerância e dependência, além de prejudicar a consolidação da memória e aumentar quedas/delirium em idosos; o manejo de longo prazo da ansiedade baseia-se em ISRS/IRSN e psicoterapia."
  },
  {
    id: 23,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Médio",
    enunciado: "Qual risco grave ocorre quando um paciente combina benzodiazepínicos com bebidas alcoólicas ou analgésicos opioides?",
    opcoes: [
      "Anulação completa do efeito dos medicamentos.",
      "Sinergismo depressor no SNC com risco elevado de sedação profunda, coma e depressão respiratória potencialmente fatal.",
      "Crise maníaca eeuforia sem sono.",
      "Melhora imediata da memória de trabalho."
    ],
    correta: 1,
    explicacao: "Correta: Álcool, benzodiazepínicos e opioides são depressores do SNC; sua combinação potencializa perigosamente a inibição dos centros respiratórios no tronco encefálico."
  },
  {
    id: 24,
    modulo: "Módulo 4: Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    nivel: "Difícil",
    enunciado: "Um paciente que utiliza alprazolam (benzodiazepínico de meia-vida intermediária) diariamente há 3 anos suspende o medicamento de forma abrupta. Qual complicação clínica pode ocorrer nos dias seguintes?",
    opcoes: [
      "Nenhuma, pois benzodiazepínicos não causam síndrome de abstinência.",
      "Síndrome de abstinência caracterizada por ansiedade e insônia rebote intensas, tremores, sudorese, taquicardia e risco de crises convulsivas.",
      "Agranulocitose imediata.",
      "Melhora definitiva da ansiedade sem sintomas."
    ],
    correta: 1,
    explicacao: "Correta: A suspensão súbita de BZDs após uso prolongado provoca hiperexcitabilidade do SNC com sintomas rebote e risco convulsivo; a retirada deve ser sempre lenta e supervisionada."
  },

  // ===================== MÓDULO 5 =====================
  {
    id: 25,
    modulo: "Módulo 5: Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    nivel: "Fácil",
    enunciado: "De acordo com a Hipótese Dopaminérgica da Esquizofrenia, em qual via dopaminérgica o bloqueio dos receptores D2 pelos antipsicóticos produz o efeito terapêutico de redução de delírios e alucinações (sintomas positivos)?",
    opcoes: [
      "Via nigroestriatal.",
      "Via mesolímbica.",
      "Via tuberoinfundibular.",
      "Via espinal motora."
    ],
    correta: 1,
    explicacao: "Correta: A hiperatividade dopaminérgica na via mesolímbica gera os sintomas positivos; o bloqueio D2 nessa via promove o efeito antipsicótico."
  },
  {
    id: 26,
    modulo: "Módulo 5: Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    nivel: "Médio",
    enunciado: "Um paciente em uso de haloperidol (antipsicótico típico de alta potência) desenvolve rigidez muscular, tremores de repouso, acatisia e contrações musculares involuntárias (Sintomas Extrapiramidais — SEP). Esse efeito adverso decorre do bloqueio intenso de receptores D2 em qual via?",
    opcoes: [
      "Via nigroestriatal.",
      "Via tuberoinfundibular.",
      "Via mesolímbica.",
      "Via visual occipital."
    ],
    correta: 0,
    explicacao: "Correta: A via nigroestriatal regula o controle motor fino; o bloqueio D2 acima de ~80% nessa via desencadeia os Sintomas Extrapiramidais (SEP) e, cronicamente, risco de discinesia tardia."
  },
  {
    id: 27,
    modulo: "Módulo 5: Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    nivel: "Médio",
    enunciado: "O bloqueio dos receptores dopaminérgicos D2 na via TUBEROINFUNDIBULAR por antipsicóticos provoca qual alteração endócrina característica?",
    opcoes: [
      "Queda drástica da insulina pancreática.",
      "Hiperprolactinemia (elevação da prolactina, podendo causar galactorreia, amenorreia, ginecomastia e disfunção sexual).",
      "Aumento imediato da adrenalina urinária.",
      "Bloqueio da tireoide com hipertireoidismo agudo."
    ],
    correta: 1,
    explicacao: "Correta: A dopamina na via tuberoinfundibular inibe fisiologicamente a secreção de prolactina pela hipófise; bloqueá-la remove esse freio e eleva a prolactina."
  },
  {
    id: 28,
    modulo: "Módulo 5: Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    nivel: "Médio",
    enunciado: "Qual mecanismo farmacológico explica por que a maioria dos Antipsicóticos Atípicos (2ª geração, como olanzapina, quetiapina e risperidona) apresenta menor risco de Sintomas Extrapiramidais em comparação aos típicos?",
    opcoes: [
      "Eles não atuam em nenhum receptor de dopamina.",
      "Combinam o antagonismo dopaminérgico D2 com o antagonismo de receptores serotoninérgicos 5-HT2A, o que facilita certa liberação compensatória de dopamina na via nigroestriatal.",
      "Atuam exclusivamente aumentando o GABA no cerebelo.",
      "Inibem a enzima monoaminoxidase."
    ],
    correta: 1,
    explicacao: "Correta: O antagonismo 5-HT2A/D2 caracteriza a maioria dos atípicos, protegendo a via nigroestriatal (menos SEP) e a mesocortical (melhor tolerabilidade sobre sintomas negativos)."
  },
  {
    id: 29,
    modulo: "Módulo 5: Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    nivel: "Fácil",
    enunciado: "Enquanto os antipsicóticos típicos de alta potência têm maior risco de efeitos motores (SEP), qual é o principal perfil de efeitos adversos exigindo monitoramento rigoroso com atípicos como O
