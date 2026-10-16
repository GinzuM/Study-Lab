// =========================================================================
// BANCO DE DADOS ATUALIZADO: PSICOFARMACOLOGIA CLÍNICA & NEUROCIÊNCIAS
// Fontes: Stahl (Psicofarmacologia), Bear (Neurociências), Brunton (Goodman & Gilman)
// =========================================================================

const studyData = {
  // =======================================================================
  // 1. TÓPICOS DO MAPA MENTAL E EXPLICAÇÕES (Com Modo Simplificado e Casos Clínicos)
  // =======================================================================
  topics: [
    {
      id: "sinapse",
      title: "1. Comunicação Neural & Fisiologia da Sinapse Química",
      content: `**Explicação Detalhada (Bear, Cap. 5):**
      A transmissão da informação no SNC ocorre prioritariamente por sinapses químicas. As etapas sequenciais são:
      1. **Despolarização Pré-Sináptica:** A chegada do potencial de ação terminal despolariza a membrana axonal.
      2. **Influxo de Cálcio:** Abrem-se canais de Cálcio dependentes de voltagem (Ca²⁺). O influxo rápido deste ião é o gatilho biofísico mandatório.
      3. **Exocitose Vesicular:** O Ca²⁺ interage com proteínas do complexo SNARE (sinaptotagmina/sintaxina), provocando a fusão das vesículas e libertação dos neurotransmissores na fenda.
      4. **Ativação Pós-Sináptica:** Os ligantes acoplam-se a recetores ionotrópicos ou metabotrópicos gerando alterações elétricas:
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
      content: `**Explicação Detalhada (Brum et al. / Stahl, Cap. 2):**
      - **Agonista Pleno:** Fármaco que possui **afinidade** (capacidade de ligar-se ao sítio ativo do recetor) e **alta atividade intrínseca** (eficácia de 100% em conformar o recetor e ativar a cascata intracelular/transdução de sinal).
      - **Agonista Parcial:** Possui afinidade, mas a sua atividade intrínseca é submáxima. Na presença de excesso de agonista pleno, pode atuar funcionalmente como um 'travão' ou antagonista relativo.
      - **Antagonista Silencioso:** Possui **afinidade** pelo recetor, mas a sua **atividade intrínseca é nula (0%)**. Ele ocupa a fenda estérica sem ativá-la, bloqueando o acesso de agonistas endógenos.
      
      *Correlação Clínica:* Antipsicóticos típicos (como o Haloperidol) são antagonistas puros de recetores dopaminérgicos D₂; impedem a dopamina hiperativa de se ligar na via mesolímbica.

      **Modo Simplificado:**
      - **Agonista:** Chave que entra na fechadura e roda o trinco (ativa tudo).
      - **Antagonista:** Chave partida que emperra a fechadura (não roda nada e impede que qualquer outra chave entre).`,
      mnemonic: "💡 Mnemónica: 'Agonista liga o motor; Antagonista parte a chave na ignição'."
    },
    {
      id: "neurotransmissores",
      title: "3. Neurotransmissores Clássicos & Ações Centrais",
      content: `**Explicação Detalhada (Bear / Stahl):**
      - **Glutamato:** Principal neurotransmissor excitatório cerebral. Vital para a plasticidade sináptica e potenciação a longo prazo (LTP/memória). Em excesso crónico causa **excitotoxicidade** (morte neuronal por influxo descontrolado de Ca²⁺).
      - **GABA:** Principal inibidor encefálico. Os seus recetores GABA_A ionotrópicos abrem canais de Cl⁻, promovendo sedação, ansiólise e estabilização de crises convulsivas.
      - **Serotonina (5-HT):** Modulação de humor, impulsividade, saciedade alimentar e sono.
      - **Noradrenalina (NA):** Alerta, prontidão de luta/fuga, foco, vigília e manutenção da pressão arterial sistémica.
      - **Dopamina (DA):** Vias de recompensa e prazer, tónus motor extrapiramidal e funções cognitivas executivas.
      - **Acetilcolina (ACh):** No SNC, atua nos núcleos da base e hipocampo sustentando a atenção e consolidação mnésica. No SNP, atua na junção neuromuscular disparando a contração dos músculos esqueléticos.

      **Modo Simplificado:**
      - **Glutamato:** Acelerador geral do cérebro.
      - **GABA:** Travão de mão geral (ansiólise e sono).
      - **ACh:** Foco na cabeça e força no músculo.`,
      mnemonic: "💡 Mnemónica: 'GABA desliga a tomada; GLUtamato cola o circuito; Acetilcolina Ativa a Contração'."
    },
    {
      id: "psicose_dependencia",
      title: "4. Vias Dopaminérgicas: Psicose, Dependência & Aplicações Clínicas",
      content: `**Explicação Detalhada (Stahl, Caps. 4, 9 e 14):**
      A dopamina orquestra circuitos distintos com impactos diretos em patologias mentais graves:

      1. **Psicose e Esquizofrenia (Hipótese Dopaminérgica):**
         - **Via Mesolímbica (ATV ao Núcleo Accumbens):** A hiperatividade dopaminérgica gera os **sintomas positivos** (delírios persecutórios/referência e alucinações auditivas/visuais). Os antipsicóticos atuam bloqueando recetores D₂ desta via.
         - **Via Mesocortical (ATV ao Córtex Pré-Frontal):** A hipoatividade dopaminérgica correlaciona-se com os **sintomas negativos** (embotamento afetivo, abulia) e défices executivos/cognitivos.
         - **Via Nigroestriatal:** Controla a motricidade. O bloqueio excessivo de D₂ por antipsicóticos induz efeitos extrapiramidais (parkinsonismo medicamentoso e distonias).
         - **Via Tuberoinfundibular:** Inibe a prolactina. O bloqueio de D₂ gera hiperprolactinemia (galactorreia e ginecomastia).

      2. **Neurobiologia da Adição / Dependência Química:**
         - Ocorre no **Circuito de Recompensa Mesolímbico**. Substâncias de abuso (cocaína, nicotina, álcool, opioides) causam picos rápidos e suprafisiológicos de dopamina no Núcleo Accumbens.
         - A exposição repetida promove a dessensibilização dos recetores D₂, redução da resposta aos reforçadores quotidianos (anedonia) e hipofrontalidade (perda do controlo inibitório pré-frontal).

      3. **Défice Colinérgico na Clínica (Alzheimer):**
         - A morte seletiva de neurónios colinérgicos no Núcleo Basal de Meynert causa uma redução acentuada de acetilcolina no hipocampo e córtex. Fármacos inibidores da acetilcolinesterase (Donepezilo, Rivastigmina) evitam a degradação da ACh para atenuar as perdas cognitivas.

      **Modo Simplificado:**
      - **Psicose (Sintomas Positivos):** Excesso de dopamina na via mesolímbica (vozes, delírios). Tratamento: Bloqueador de D₂.
      - **Dependência / Vício:** Inundação artificial de dopamina no Núcleo Accumbens (via do prazer).
      - **Alzheimer:** Falta severa de Acetilcolina na central da memória do cérebro.`,
      mnemonic: "💡 Mnemónica: 'Mesolímbica em alta = Delírio e Vício; Colinérgico em baixa = Esquecimento (Alzheimer)'."
    },
    {
      id: "depressao_teorias",
      title: "5. Teorias Neurobiológicas da Depressão Maior",
      content: `**Explicação Detalhada (Stahl, Cap. 6):**
      - **Teoria Monoaminérgica Clássica:** Propõe que o transtorno decorre do défice na neurotransmissão de Serotonina, Noradrenalina e Dopamina.
        - *Crítica / Paradoxo Temporal:* Os fármacos bloqueiam os transportadores e elevam as monoaminas na fenda em poucas horas; no entanto, a remissão clínica demora de 2 a 4 semanas. Esta defasagem é explicada pela necessidade de adaptações neuronais lentas: **dessensibilização e down-regulation de autorrecetores inibitórios pré-sinápticos (5-HT_1A e α₂)**, permitindo a desinibição do disparo do neurónio.
      - **Teoria Neurotrófica:** O stress crónico sustenta níveis elevados de cortisol, suprimindo a expressão do gene do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*). Isto causa atrofia de dendrites e perda sináptica no hipocampo e córtex pré-frontal, justificando a rigidez cognitiva e o humor deprimido. Os antidepressivos induzem cascatas intracelulares tardias que reativam o BDNF, restaurando a sinaptogénese e a flexibilidade neural.

      **Modo Simplificado:**
      - **Teoria das Monoaminas:** Falta 'química do humor'. O atraso terapêutico ocorre porque os autorrecetores precisam de tempo para dessensibilizar.
      - **Teoria Neurotrófica:** O stress seca os ramos dos neurónios (baixa de BDNF). O antidepressivo funciona como um adubo que regenera as conexões perdidas.`,
      mnemonic: "💡 Mnemónica: 'Mais do que faltar neurotransmissor, falta adubo nos neurónios (BDNF)'."
    },
    {
      id: "antidepressivos",
      title: "6. Farmacologia dos Antidepressivos: Tricíclicos (ADTs) vs ISRS",
      content: `**Explicação Detalhada (Stahl, Cap. 7):**
      - **Antidepressivos Tricíclicos (ADTs - ex: Amitriptilina, Clomipramina):**
        - *Mecanismo:* Inibem a recaptação de Serotonina (SERT) e Noradrenalina (NET).
        - *Perfil Não Seletivo de Efeitos Adversos:* Antagonizam recetores colinérgicos muscarínicos (boca seca, obstipação severa, retenção urinária e visão turva); recetores histamínicos H₁ (intensa sedação e aumento de peso); e recetores adrenérgicos α₁ (hipotensão postural e taquicardia reflexa).
        - *Risco Crítico:* Elevada cardiotoxicidade por bloqueio de canais de sódio miocárdicos; arritmias fatais em sobredosagens mínimas.
      - **Inibidores Seletivos de Recaptação de Serotonina (ISRS - ex: Fluoxetina, Sertralina, Escitalopram):**
        - *Mecanismo:* Inibição seletiva e potente do transportador SERT, sem afinidade expressiva por sítios muscarínicos, histamínicos ou adrenérgicos.
        - *Vantagem Clínica:* Eficácia equivalente aos ADTs na depressão moderada/grave ambulatorial, com elevado perfil de segurança e reduzida letalidade em caso de sobredosagem. Os efeitos secundários limitam-se habitualmente a náuseas transitórias e disfunções sexuais.

      **Modo Simplificado:**
      - **Tricíclicos:** Eficazes, mas afetam vários recetores no organismo (boca seca, tonturas ao levantar, sonolência e risco de morte por toxicidade cardíaca).
      - **ISRS:** Atuação seletiva na serotonina (seguros, modernos e com reduzida toxicidade).`,
      mnemonic: "💡 Mnemónica: 'Tricíclico atira para todo o lado; ISRS é cirúrgico e seguro'."
    }
  ],

  // =======================================================================
  // 2. ESTRUTURA DO MAPA MENTAL
  // =======================================================================
  tree: [
    { id: "sinapse", title: "1. Fisiologia das Sinapses", level: 1, unlocked: true },
    { id: "agonista_antagonista", title: "2. Agonistas vs Antagonistas", level: 2, unlocked: true },
    { id: "neurotransmissores", title: "3. Neurotransmissores Centrais", level: 2, unlocked: true },
    { id: "psicose_dependencia", title: "4. Psicose, Vício e Vias DA", level: 3, unlocked: true },
    { id: "depressao_teorias", title: "5. Teorias da Depressão (BDNF)", level: 4, unlocked: true },
    { id: "antidepressivos", title: "6. Farmacologia: ADTs vs ISRS", level: 5, unlocked: true }
  ],

  // =======================================================================
  // 3. FLASHCARDS EXAUSTIVOS
  // =======================================================================
  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual ião desencadeia diretamente a exocitose das vesículas sinápticas?", answer: "Cálcio (Ca²⁺), que entra no terminal axonal por canais dependentes de voltagem após a despolarização." },
    { topicId: "sinapse", category: "Sinapses", question: "Qual a diferença fundamental entre PPSE e PPSI na membrana pós-sináptica?", answer: "O PPSE despolariza a membrana (aproxima do limiar de disparo, geralmente por entrada de Na⁺); o PPSI hiperpolariza (afasta do disparo, via Cl⁻ ou K⁺)." },
    { topicId: "sinapse", category: "Sinapses", question: "Como a entrada de Cloreto (Cl⁻) atua no neurónio recetor?", answer: "Gera um Potencial Pós-Sináptico Inibitório (PPSI), tornando o meio intracelular mais negativo (hiperpolarização)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que diferencia um Agonista Pleno de um Antagonista?", answer: "O Agonista possui afinidade e atividade intrínseca máxima (ativa o recetor); o Antagonista possui afinidade, mas a sua eficácia intrínseca é nula (bloqueia o sítio)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "Qual é o efeito biológico de um antagonista administrado isoladamente sem agonista presente?", answer: "Nenhum efeito estimulatório imediato direto, pois não possui atividade intrínseca; a sua ação é puramente obstrutiva contra ligantes endógenos." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o principal neurotransmissor inibitório e o principal excitatório do SNC?", answer: "GABA (principal inibitório) e Glutamato (principal excitatório)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "A Acetilcolina atua em quais dois grandes sistemas funcionais?", answer: "No SNC atua na cognição, atenção e memória; no SNP (junção neuromuscular) é responsável pela contração muscular." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o perigo celular do excesso crónico desregulado de Glutamato?", answer: "Excitotoxicidade neuronal decorrente da sobrecarga intracelular massiva de cálcio via recetores NMDA." },
    { topicId: "psicose_dependencia", category: "Psicose / Esquizofrenia", question: "Segundo a hipótese dopaminérgica da esquizofrenia, quais vias causam os sintomas positivos e negativos?", answer: "Hiperatividade dopaminérgica na via Mesolímbica causa sintomas positivos (delírios/alucinações); hipoatividade na via Mesocortical causa sintomas negativos e cognitivos." },
    { topicId: "psicose_dependencia", category: "Psicose / Esquizofrenia", question: "Qual o mecanismo de ação primário dos antipsicóticos clássicos no controlo de surtos psicóticos?", answer: "Antagonismo competitivo dos recetores dopaminérgicos D₂ na via mesolímbica." },
    { topicId: "psicose_dependencia", category: "Dependência Química", question: "Qual estrutura cerebral forma o núcleo central da dependência química na via de reforço e recompensa?", answer: "O Núcleo Accumbens, que recebe projeções dopaminérgicas diretas da Área Tegmentar Ventral (ATV)." },
    { topicId: "psicose_dependencia", category: "Dependência Química", question: "O que a exposição contínua a drogas de abuso causa nos recetores dopaminérgicos cerebrais?", answer: "Dessensibilização e redução (down-regulation) dos recetores D₂ no corpo estriado ventral, gerando tolerância e anedonia aos reforçadores naturais." },
    { topicId: "psicose_dependencia", category: "Neuropatologia", question: "Qual o principal défice neuroquímico causador do declínio de memória na Doença de Alzheimer?", answer: "Défice colinérgico severo decorrente da degeneração dos neurónios do Núcleo Basal de Meynert no cérebro anterior." },
    { topicId: "psicose_dependencia", category: "Neuropatologia", question: "Qual o mecanismo de ação dos fármacos mais usados no tratamento cognitivo do Alzheimer (ex: Donepezilo)?", answer: "São inibidores reversíveis da enzima Acetilcolinesterase, aumentando a concentração de acetilcolina na fenda sináptica." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual o grande paradoxo temporal que desafia a teoria monoaminérgica clássica da depressão?", answer: "Os antidepressivos aumentam as monoaminas na fenda em poucas horas, mas a melhoria clínica demanda de 2 a 4 semanas para se manifestar." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Como a psicofarmacologia moderna explica a latência de semanas para o efeito dos antidepressivos?", answer: "Pela necessidade de adaptações lentas, como a dessensibilização (down-regulation) de autorrecetores pré-sinápticos inibitórios (como 5-HT_1A)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que a Teoria Neurotrófica afirma sobre o papel do stress crónico e do BDNF?", answer: "O stress reduz a expressão de BDNF, provocando atrofia dendrítica no hipocampo e rigidez cognitiva; o tratamento antidepressivo restaura os níveis de BDNF." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual a diferença no mecanismo primário de ação entre Tricíclicos (ADTs) e ISRS?", answer: "Os ADTs bloqueiam a recaptação de serotonina e noradrenalina (além de bloquear recetores muscarínicos, histamínicos e alfa-1); os ISRS inibem seletivamente o SERT." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por quais motivos clínicos os Antidepressivos Tricíclicos possuem alta taxa de letalidade em sobredosagem?", answer: "Porque bloqueiam canais de sódio dependentes de voltagem no coração, deflagrando arritmias ventriculares graves e paragem cardíaca." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "A que bloqueio de recetor específico se devem os sintomas de boca seca e retenção urinária nos Tricíclicos?", answer: "Ao antagonismo dos recetores colinérgicos muscarínicos periféricos e centrais." }
  ],

  // =======================================================================
  // 4. BANCO DE QUESTÕES DO QUIZ
  // =======================================================================
  quiz: [
    {
      topicId: "sinapse",
      question: "Qual evento molecular na membrana pré-sináptica é a condição indispensável para deflagrar a exocitose das vesículas neuroquímicas?",
      hint: "Envolve um ião bivalente positivo a entrar por canais de voltagem.",
      options: [
        "Efluxo acelerado de iões potássio para a fenda.",
        "Abertura de canais de cálcio dependentes de voltagem e entrada de Ca²⁺.",
        "Bloqueio reversível das bombas de sódio-potássio ATPase.",
        "Fecho prematuro dos canais de cloro pós-sinápticos."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "Um Potencial Pós-Sináptico Excitatório (PPSE) diferencia-se de um Inibitório (PPSI) pelo facto de que o PPSE:",
      hint: "O que ocorre com a polaridade e o limiar celular?",
      options: [
        "Promove hiperpolarização membranar afastando a célula do limiar de ação.",
        "Envolve a saída seletiva de catiões cálcio do neurónio pós-sináptico.",
        "Causa despolarização local da membrana, aproximando o neurónio do limiar de disparo.",
        "Mantém o potencial de repouso inalterado por encerramento de canais de sódio."
      ],
      correct: 2
    },
    {
      topicId: "sinapse",
      question: "Durante uma sinapse inibitória, o neurotransmissor GABA liga-se a recetores GABA_A pós-sinápticos. Qual a consequência direta desse acoplamento?",
      hint: "Gera a entrada de um anião na célula.",
      options: [
        "Abertura de canais de cloreto (Cl⁻), hiperpolarizando a célula (PPSI).",
        "Disparo imediato de uma salva de potenciais de ação excitatórios.",
        "Despolarização sustentada pelo influxo de magnésio.",
        "Estímulo à síntese imediata de fator neurotrófico BDNF."
      ],
      correct: 0
    },
    {
      topicId: "agonista_antagonista",
      question: "Em farmacodinâmica, uma droga que possui alta afinidade pelo sítio recetor, mas eficácia ou atividade intrínseca rigorosamente nula (0%), é classificada como:",
      hint: "Ocupa o espaço sem produzir o efeito do ligante natural.",
      options: [
        "Agonista parcial funcional.",
        "Modulador alostérico positivo.",
        "Antagonista silencioso/neutro.",
        "Agonista pleno invertido."
      ],
      correct: 2
    },
    {
      topicId: "agonista_antagonista",
      question: "Diferente de um antagonista, o fármaco agonista pleno é aquele caraterizado por:",
      hint: "Capacidade de gerar uma cascata de transdução celular.",
      options: [
        "Ligar-se irreversivelmente destruindo a proteína recetora.",
        "Possuir afinidade e capacidade máxima de ativar o recetor deflagrando a resposta biológica.",
        "Inibir de forma inespecífica todos os canais de sódio da membrana.",
        "Bloquear o acesso dos neurotransmissores sem alterar a conformação do sítio."
      ],
      correct: 1
    },
    {
      topicId: "neurotransmissores",
      question: "Qual neurotransmissor atua como o principal agente excitatório no SNC, fundamental para a plasticidade sináptica e formação de memórias?",
      hint: "Aminoácido excitatório que ativa recetores NMDA.",
      options: [
        "Dopamina.",
        "Ácido gama-aminobutírico (GABA).",
        "Glutamato.",
        "Glicina."
      ],
      correct: 2
    },
    {
      topicId: "neurotransmissores",
      question: "No Sistema Nervoso Periférico Somático, qual neurotransmissor é diretamente responsável por disparar a contração na junção neuromuscular?",
      hint: "É o mesmo neurotransmissor afetado no Alzheimer a nível central.",
      options: [
        "Acetilcolina.",
        "Noradrenalina.",
        "Serotonina.",
        "Dopamina."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "Em doentes com Esquizofrenia, os delírios persecutórios e as alucinações auditivas (sintomas positivos) estão relacionados com qual alteração neurobiológica?",
      hint: "Pense na hiperatividade dopaminérgica num circuito subcortical específico.",
      options: [
        "Hipoatividade colinérgica no lobo temporal medial.",
        "Hiperatividade da transmissão dopaminérgica na via mesolímbica.",
        "Défice primário de recetores GABA_A no córtex somatossensorial.",
        "Bloqueio congénito dos canais de cálcio na substância negra."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Os sintomas negativos da esquizofrenia, tais como embotamento afetivo, apatia e défices cognitivos, são associados funcionalmente a:",
      hint: "Circuito dopaminérgico que projeta para o lobo frontal.",
      options: [
        "Hipoatividade dopaminérgica na via mesocortical que projeta ao córtex pré-frontal.",
        "Excesso agudo de serotonina no cerebelo e protuberância.",
        "Hiperativação dos neurónios histaminérgicos hipotalâmicos.",
        "Destruição autoimune de recetores beta-adrenérgicos periféricos."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "Qual o mecanismo primário pelo qual antipsicóticos clássicos como o Haloperidol reduzem os sintomas psicóticos agudos?",
      hint: "Atuam como bloqueadores na via mesolímbica.",
      options: [
        "Ativação agonista dos transportadores de recaptação de serotonina.",
        "Antagonismo por bloqueio competitivo de recetores dopaminérgicos D₂ pós-sinápticos.",
        "Inibição direta da degradação de acetilcolina no hipocampo.",
        "Agonismo nos recetores GABA_A induzindo hiperpolarização global."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "A neurobiologia da dependência química revela que praticamente todas as drogas de abuso convergem para um efeito comum no cérebro. Qual é esse efeito?",
      hint: "Ocorre no Núcleo Accumbens.",
      options: [
        "Elevação abrupta e suprafisiológica dos níveis de dopamina na via de reforço mesolímbica.",
        "Supressão total e permanente de todos os recetores glutamatérgicos NMDA.",
        "Elevação irreversível da síntese de BDNF no cerebelo.",
        "Destruição das vesículas pré-sinápticas de noradrenalina."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "O uso prolongado de substâncias de abuso leva ao fenómeno de tolerância e perda de sensibilidade aos reforçadores naturais por meio de qual adaptação?",
      hint: "Regulação do número de recetores no corpo estriado.",
      options: [
        "Aumento da densidade de recetores D₂ no corpo estriado ventral.",
        "Redução e dessensibilização (down-regulation) de recetores dopaminérgicos D₂.",
        "Crescimento dendrítico descontrolado nos núcleos da base.",
        "Bloqueio da recaptação de acetilcolina na placa motora."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Na Doença de Alzheimer, as alterações acentuadas de memória recente e desorientação temporal decorrem primariamente da degeneração de neurónios que utilizam qual neurotransmissor?",
      hint: "Degeneração no Núcleo Basal de Meynert.",
      options: [
        "Dopamina na via nigroestriatal.",
        "GABA no córtex occipital.",
        "Acetilcolina nas projeções que inervam o hipocampo e o córtex.",
        "Noradrenalina nas fibras descendentes espinhais."
      ],
      correct: 2
    },
    {
      topicId: "psicose_dependencia",
      question: "Qual a base neurofarmacológica para a utilização de medicamentos inibidores da acetilcolinesterase (ex: Donepezilo, Rivastigmina) no Alzheimer?",
      hint: "Impedem a enzima de degradar o neurotransmissor restante.",
      options: [
        "Compensar o défice colinérgico impedindo a degradação enzimática da ACh na fenda sináptica.",
        "Bloquear a entrada de cálcio nos neurónios motores periféricos.",
        "Induzir sonolência profunda para reverter as placas senis.",
        "Atuar como antagonistas seletivos dos recetores dopaminérgicos D₂."
      ],
      correct: 0
    },
    {
      topicId: "depressao_teorias",
      question: "Qual o principal argumento clínico que contesta a Teoria Monoaminérgica clássica como explicação completa da depressão?",
      hint: "Diferença entre o efeito neuroquímico na fenda e a melhoria clínica do humor.",
      options: [
        "Os antidepressivos reduzem as aminas na fenda, mas melhoram o paciente.",
        "As monoaminas sobem em horas na fenda, mas a resposta terapêutica clínica requer de 2 a 4 semanas.",
        "Os medicamentos não conseguem ultrapassar a barreira hematoencefálica.",
        "Apenas a dopamina é sintetizada no sistema nervoso periférico."
      ],
      correct: 1
    },
    {
      topicId: "depressao_teorias",
      question: "O atraso de semanas para o efeito clínico dos antidepressivos é atribuído principalmente a processos plásticos e adaptativos lentos, tais como:",
      hint: "Alteração nos autorrecetores inibitórios pré-sinápticos.",
      options: [
        "A dessensibilização (down-regulation) de autorrecetores inibitórios pré-sinápticos.",
        "A metabolização gástrica imediata das aminas ativas.",
        "O esgotamento definitivo de todas as reservas de cálcio axonal.",
        "A proliferação inflamatória dos astrócitos na fenda."
      ],
      correct: 0
    },
    {
      topicId: "depressao_teorias",
      question: "Segundo a Teoria Neurotrófica da Depressão, o stress crónico associado a altos níveis de glicocorticoides culmina em:",
      hint: "Envolve o BDNF e as ramificações dendríticas.",
      options: [
        "Redução da expressão de BDNF, atrofia dendrítica no hipocampo e rigidez cognitiva.",
        "Crescimento exacerbado de sinapses excitatórias no córtex pré-frontal.",
        "Bloqueio da neurotransmissão gabaérgica nos núcleos cerebelares.",
        "Aumento exponencial da síntese de acetilcolina no hipocampo."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Os Antidepressivos Tricíclicos (como a Amitriptilina) exercem efeito antidepressivo primário através do bloqueio da recaptação de:",
      hint: "Duas monoaminas clássicas.",
      options: [
        "Glutamato e GABA.",
        "Serotonina (5-HT) e Noradrenalina (NA).",
        "Apenas Dopamina.",
        "Acetilcolina e Histamina."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "A ocorrência de tontura ao levantar (hipotensão postural) em doentes a tomar antidepressivos tricíclicos decorre do bloqueio inadvertido de recetores:",
      hint: "Recetores vasculares adrenérgicos.",
      options: [
        "Alfa-1 adrenérgicos vasculares.",
        "Histamínicos H₁ corticais.",
        "Muscarínicos colinérgicos periféricos.",
        "Dopaminérgicos D₂ do corpo estriado."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Efeitos secundários anticolinérgicos dos tricíclicos (boca seca, obstipação intestinal severa, retenção urinária e visão turva) são causados pelo antagonismo de recetores:",
      hint: "Recetores parassimpáticos da acetilcolina.",
      options: [
        "Histamínicos H₁.",
        "Serotoninérgicos 5-HT_2A.",
        "Muscarínicos colinérgicos.",
        "Glutamatérgicos NMDA."
      ],
      correct: 2
    },
    {
      topicId: "antidepressivos",
      question: "Por que motivo os Inibidores Seletivos de Recaptação de Serotonina (ISRS) substituíram amplamente os Tricíclicos como primeira linha de tratamento para a depressão?",
      hint: "Pense na seletividade e risco em caso de intoxicação.",
      options: [
        "Possuem eficácia clínica dez vezes superior aos ADTs no primeiro dia.",
        "Possuem eficácia semelhante, mas com índice terapêutico muito superior, perfil de segurança favorável e reduzida letalidade em sobredosagem.",
        "Não causam qualquer efeito no transportador de serotonina.",
        "Criam tolerância imediata e evitam crises convulsivas."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual o mecanismo subjacente à elevada letalidade observada na intoxicação aguda por sobredosagem de Antidepressivos Tricíclicos?",
      hint: "Bloqueio elétrico no miocárdio.",
      options: [
        "Bloqueio de canais de sódio dependentes de voltagem no coração, deflagrando arritmias graves e paragem cardíaca.",
        "Destruição imediata da barreira hematoencefálica.",
        "Insuficiência renal por acumulação de serotonina livre no túbulo distal.",
        "Paralisia flácida por ativação de recetores nicotínicos musculares."
      ],
      correct: 0
    }
  ]
};
