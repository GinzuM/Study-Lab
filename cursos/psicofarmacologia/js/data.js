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
      level: 1,
      unlocked: true,
      unlocks: ["agonista_antagonista", "neurotransmissores"],
      content: `**Explicação Detalhada (Bear, Cap. 5):**
      A transmissão da informação no SNC ocorre prioritariamente por sinapses químicas. As etapas sequenciais são:
      1. **Despolarização Pré-Sináptica:** A chegada do potencial de ação terminal despolariza a membrana axonal.
      2. **Influxo de Cálcio:** Abrem-se canais de Cálcio dependentes de voltagem ($Ca^{2+}$). O influxo rápido desse íon é o gatilho biofísico mandatório.
      3. **Exocitose Vesicular:** O $Ca^{2+}$ interage com proteínas do complexo SNARE (sinaptotagmina/sintaxina), provocando a fusão das vesículas e liberação dos neurotransmissores na fenda.
      4. **Ativação Pós-Sináptica:** Os ligantes acoplam-se a receptores ionotrópicos ou metabotrópicos gerando alterações elétricas:
         - **PPSE (Potencial Pós-Sináptico Excitatório):** Influxo de cátions ($Na^+$), despolarizando a membrana e aproximando o neurônio do limiar de disparo elétrico.
         - **PPSI (Potencial Pós-Sináptico Inibitório):** Influxo de ânions ($Cl^-$) ou efluxo de cátions ($K^+$), hiperpolarizando a célula e silenciando o disparo.

      **Modo Simplificado:**
      - **Cálcio ($Ca^{2+}$):** O gatilho que abre as portas para as vesículas descarregarem na fenda.
      - **PPSE:** Acelera o neurônio (sódio entra, fica positivo e dispara).
      - **PPSI:** Freia o neurônio (cloreto entra ou potássio sai, fica negativo e cala).`,
      mnemonic: "💡 Mnemônico: 'PPSE aproxima do zero (+ dispara), PPSI afasta o neurônio (- silencia)'."
    },
    {
      id: "agonista_antagonista",
      title: "2. Princípios Farmacodinâmicos: Agonistas vs Antagonistas",
      level: 2,
      unlocked: true,
      unlocks: ["antidepressivos", "psicose_dependencia"],
      content: `**Explicação Detalhada (Brum et al. / Stahl, Cap. 2):**
      - **Agonista Pleno:** Fármaco que possui **afinidade** (capacidade de ligar-se ao sítio ativo do receptor) e **alta atividade intrínseca** (eficácia de $100\%$ em conformar o receptor e ativar a cascata intracelular/transdução de sinal).
      - **Agonista Parcial:** Possui afinidade, mas sua atividade intrínseca é submáxima. Na presença de excesso de agonista pleno, pode atuar funcionalmente como um 'freio' ou antagonista relativo.
      - **Antagonista Silencioso:** Possui **afinidade** pelo receptor, mas sua **atividade intrínseca é nula ($0\%$)**. Ele ocupa a fenda estérica sem ativá-la, bloqueando o acesso de agonistas endógenos.
      
      *Correlação Clínica:* Antipsicóticos típicos (como o Haloperidol) são antagonistas puros de receptores dopaminérgicos $D_2$; impedem a dopamina hiperativa de se ligar na via mesolímbica.

      **Modo Simplificado:**
      - **Agonista:** Chave que entra na fechadura e gira a maçaneta (ativa tudo).
      - **Antagonista:** Chave quebrada que emperra a fechadura (não gira nada e impede que qualquer outra chave entre).`,
      mnemonic: "💡 Mnemônico: 'Agonista liga o motor; Antagonista quebra a chave na ignição'."
    },
    {
      id: "neurotransmissores",
      title: "3. Neurotransmissores Clássicos & Ações Centrais",
      level: 2,
      unlocked: true,
      unlocks: ["depressao_teorias", "psicose_dependencia"],
      content: `**Explicação Detalhada (Bear / Stahl):**
      - **Glutamato:** Principal neurotransmissor excitatório cerebral. Vital para a plasticidade sináptica e potenciação a longo prazo (LTP/memória). Em excesso crônico causa **excitotoxidade** (morte neuronal por influxo descontrolado de $Ca^{2+}$).
      - **GABA:** Principal inibidor encefálico. Seus receptores $GABA_A$ ionotrópicos abrem canais de $Cl^-$, promovendo sedação, ansiólise e estabilização de crises convulsivas.
      - **Serotonina ($5\text{-HT}$):** Modulação de humor, impulsividade, saciedade alimentar e sono.
      - **Noradrenalina (NA):** Alerta, prontidão de luta/fuga, foco, vigília e manutenção da pressão arterial sistêmica.
      - **Dopamina (DA):** Vias de recompensa e prazer, tônus motor extrapiramidal e funções cognitivas executivas.
      - **Acetilcolina (ACh):** No SNC, age nos núcleos da base e hipocampo sustentando atenção e consolidação mnêmica. No SNP, atua na junção neuromuscular disparando a contração dos músculos esqueléticos.

      **Modo Simplificado:**
      - **Glutamato:** Acelerador geral do cérebro.
      - **GABA:** Freio de mão geral (ansiólise e sono).
      - **ACh:** Foco na cabeça e força no músculo.`,
      mnemonic: "💡 Mnemônico: 'GABA desliga a tomada; GLUtamato gruda o circuito; Acetilcolina Ativa a Contraçâo'."
    },
    {
      id: "psicose_dependencia",
      title: "4. Vias Dopaminérgicas: Psicose, Dependência & Aplicações Clínicas",
      level: 3,
      unlocked: true,
      unlocks: ["antidepressivos"],
      content: `**Explicação Detalhada (Stahl, Caps. 4, 9 e 14):**
      A dopamina orquestra circuitos distintos com impactos diretos em transtornos mentais graves:

      1. **Psicose e Esquizofrenia (Hipótese Dopaminérgica):**
         - **Via Mesolímbica (ATV ao Núcleo Accumbens):** Hiperatividade dopaminérgica gera os **sintomas positivos** (delírios persecutórios/referência e alucinações auditivas/visuais). Antipsicóticos funcionam bloqueando receptores $D_2$ dessa via.
         - **Via Mesocortical (ATV ao Córtex Pré-Frontal):** Hipoatividade dopaminérgica correlaciona-se com os **sintomas negativos** (embotamento afetivo, abulia) e déficits executivos/cognitivos.
         - **Via Nigroestriatal:** Controla a motricidade. O bloqueio excessivo de $D_2$ aqui por antipsicóticos induz efeitos extrapiramidais (parkinsonismo medicamentoso e distonias).
         - **Via Tuberoinfundibular:** Inibe a prolactina. O bloqueio de $D_2$ gera hiperprolactinemia (galactorreia e ginecomastia).

      2. **Neurobiologia da Adição / Dependência Química:**
         - Ocorre no **Circuito de Recompensa Mesolímbico**. Substâncias de abuso (cocaína, nicotina, álcool, opioides) causam picos rápidos e suprafisiológicos de dopamina no Núcleo Accumbens.
         - A exposição repetida promove dessensibilização dos receptores $D_2$, redução da resposta aos prazeres cotidianos (anedonia) e hipofrontalidade (perda do freio inibitório pré-frontal para o impulso de buscar a droga).

      3. **Déficit Colinérgico na Clínica (Alzheimer):**
         - A morte seletiva de neurônios colinérgicos no Núcleo Basal de Meynert causa queda acentuada de acetilcolina no hipocampo e córtex. Fármacos inibidores da acetilcolinesterase (Donepezila, Rivastigmina) evitam a degradação da ACh para atenuar as perdas cognitivas.

      **Modo Simplificado:**
      - **Psicose (Sintomas Positivos):** Excesso de dopamina na via mesolímbica (vozes, delírios). Remédio: Bloqueador de $D_2$.
      - **Dependência / Vício:** Inundação artificial e viciante de dopamina no Núcleo Accumbens (via do prazer).
      - **Alzheimer:** Falta severa de Acetilcolina na central da memória do cérebro.`,
      mnemonic: "💡 Mnemônico: 'Mesolímbica em alta = Delírio e Vício; Colinérgico em baixa = Esquecimento (Alzheimer)'."
    },
    {
      id: "depressao_teorias",
      title: "5. Teorias Neurobiológicas da Depressão Maior",
      level: 3,
      unlocked: true,
      unlocks: ["antidepressivos"],
      content: `**Explicação Detalhada (Stahl, Cap. 6):**
      - **Teoria Monoaminérgica Clássica:** Propõe que o transtorno decorre do déficit na neurotransmissão de Serotonina, Noradrenalina e Dopamina.
        - *Crítica / Paradoxo Temporal:* Os fármacos bloqueiam os transportadores e elevam monoaminas na fenda em poucas horas; no entanto, a remissão clínica leva de 2 a 4 semanas. Essa defasagem é explicada pela necessidade de adaptação neuronal lenta: **dessensibilização e down-regulation de autorreceptores inibitórios pré-sinápticos ($5\text{-HT}_{1A}$ e $\alpha_2$)**, permitindo a desinibição do disparo do neurônio.
      - **Teoria Neurotrófica:** O estresse crônico sustenta níveis elevados de cortisol, suprimindo o gene do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*). Isso leva à atrofia de dendritos e morte sináptica no hipocampo e córtex pré-frontal, justificando a rigidez cognitiva e o humor deprimido. Os antidepressivos induzem cascatas intracelulares tardias que reativam o BDNF, restaurando a sinaptogênese e a flexibilidade neural.

      **Modo Simplificado:**
      - **Teoria das Monoaminas:** Falta "química do humor". Atraso terapêutico ocorre porque os autorreceptores precisam ser desligados com o tempo.
      - **Teoria Neurotrófica:** O estresse seca as folhas dos neurônios (baixa de BDNF). O antidepressivo funciona como um adubo que regenera as conexões perdidas.`,
      mnemonic: "💡 Mnemônico: 'Mais do que faltar neurotransmissor, falta adubo nos neurônios (BDNF)'."
    },
    {
      id: "antidepressivos",
      title: "6. Farmacologia dos Antidepressivos: Tricíclicos (ADTs) vs ISRS",
      level: 4,
      unlocked: true,
      unlocks: [],
      content: `**Explicação Detalhada (Stahl, Cap. 7):**
      - **Antidepressivos Tricíclicos (ADTs - ex: Amitriptilina, Clomipramina):**
        - *Mecanismo:* Inibem a recaptação de Serotonina (SERT) e Noradrenalina (NET).
        - *Perfil Sujo de Efeitos Adversos:* Antagonizam receptores colinérgicos muscarínicos (boca seca, constipação severa, retenção urinária e visão turva); receptores histamínicos $H_1$ (intensa sedação e ganho de peso); e receptores adrenérgicos $\alpha_1$ (hipotensão postural e taquicardia reflexa).
        - *Risco Crítico:* Alta cardiotoxicidade por bloqueio de canais de sódio miocárdicos; arritmias letais em superdosagens mínimas.
      - **Inibidores Seletivos de Recaptação de Serotonina (ISRS - ex: Fluoxetina, Sertralina, Escitalopram):**
        - *Mecanismo:* Inibição seletiva e potente do transportador SERT, sem afinidade expressiva por sítios muscarínicos, histamínicos ou adrenérgicos.
        - *Vantagem Clínica:* Eficácia idêntica aos ADTs na depressão moderada/grave ambulatorial, porém com altíssimo perfil de segurança e baixíssima letalidade em caso de overdose. Efeitos colaterais costumam restringir-se a náuseas transitórias e disfunções sexuais.

      **Modo Simplificado:**
      - **Tricíclicos:** Eficazes, mas "tiro de canhão" no corpo todo (boca seca, tontura ao levantar, sonolência e risco de morte por overdose cardíaca).
      - **ISRS:** Tiros cirúrgicos na serotonina (seguros, modernos e com pouquíssima toxicidade).`,
      mnemonic: "💡 Mnemônico: 'Tricíclico atira para todo lado; ISRS é cirúrgico e seguro'."
    }
  ],

  // =======================================================================
  // 2. ESTRUTURA DO MAPA MENTAL
  // =======================================================================
  tree: [
    { id: "sinapse", title: "1. Sinapses Químicas", level: 1, unlocked: true },
    { id: "agonista_antagonista", title: "2. Agonistas vs Antagonistas", level: 2, unlocked: true },
    { id: "neurotransmissores", title: "3. Neurotransmissores Centrais", level: 2, unlocked: true },
    { id: "psicose_dependencia", title: "4. Psicose, Adição e Vias DA", level: 3, unlocked: true },
    { id: "depressao_teorias", title: "5. Teorias da Depressão (BDNF)", level: 3, unlocked: true },
    { id: "antidepressivos", title: "6. ADTs vs ISRS", level: 4, unlocked: true }
  ],

  // =======================================================================
  // 3. FLASHCARDS EXAUSTIVOS
  // =======================================================================
  flashcards: [
    // Sinapses e Fisiologia
    { topicId: "sinapse", category: "Sinapses", question: "Qual íon desencadeia fisicamente a exocitose das vesículas sinápticas?", answer: "Cálcio (Ca²+), que entra no terminal axonal por canais voltagem-dependentes após a despolarização." },
    { topicId: "sinapse", category: "Sinapses", question: "Qual a diferença fundamental entre PPSE e PPSI na membrana pós-sináptica?", answer: "PPSE despolariza a membrana (aproxima do limiar de disparo, geralmente por entrada de Na+); PPSI hiperpolariza (afasta do disparo, via Cl- ou K+)." },
    { topicId: "sinapse", category: "Sinapses", question: "Como a entrada de Cloreto (Cl-) atua no neurônio receptor?", answer: "Gera um Potencial Pós-Sináptico Inibitório (PPSI), tornando o meio intracelular mais negativo (hiperpolarização)." },

    // Agonistas e Antagonistas
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que diferencia um Agonista Pleno de um Antagonista?", answer: "O Agonista possui afinidade e atividade intrínseca máxima (ativa o receptor); o Antagonista possui afinidade, mas sua eficácia intrínseca é nula (bloqueia o sítio)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "Qual é o efeito biológico de um antagonista administrado isoladamente sem agonista presente?", answer: "Nenhum efeito estimulatório imediato direto, pois ele não possui atividade intrínseca; sua ação é puramente obstrutiva contra ligantes endógenos." },

    // Neurotransmissores Centrais
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o principal neurotransmissor inibitório e o principal excitatório do SNC?", answer: "GABA (principal inibitório) e Glutamato (principal excitatório)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "A Acetilcolina atua em quais dois grandes sistemas funcionais?", answer: "No SNC atua na cognição, atenção e memória; no SNP (junção neuromuscular) é responsável pela contração muscular." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o perigo celular do excesso crônico desregulado de Glutamato?", answer: "Excitotoxicidade neuronal decorrente da sobrecarga intracelular massiva de cálcio via receptores NMDA." },

    // Psicose, Dependência e Correlações Clínicas (Novo Tópico)
    { topicId: "psicose_dependencia", category: "Psicose / Esquizofrenia", question: "Segundo a hipótese dopaminérgica da esquizofrenia, quais vias causam os sintomas positivos e negativos?", answer: "Hiperatividade dopaminérgica na via Mesolímbica causa sintomas positivos (delírios/alucinações); hipoatividade na via Mesocortical causa sintomas negativos e cognitivos." },
    { topicId: "psicose_dependencia", category: "Psicose / Esquizofrenia", question: "Qual o mecanismo de ação primário dos antipsicóticos clássicos no controle de surtos psicóticos?", answer: "Antagonismo competitivo dos receptores dopaminérgicos D2 na via mesolímbica." },
    { topicId: "psicose_dependencia", category: "Dependência Química", question: "Qual estrutura cerebral forma o núcleo central da dependência química na via de reforço e recompensa?", answer: "O Núcleo Accumbens, que recebe projeções dopaminérgicas diretas da Área Tegmentar Ventral (ATV)." },
    { topicId: "psicose_dependencia", category: "Dependência Química", question: "O que a exposição contínua a drogas de abuso causa nos receptores dopaminérgicos cerebrais?", answer: "Dessensibilização e redução (down-regulation) dos receptores D2 no estriado ventral, gerando tolerância e anedonia aos reforçadores naturais." },
    { topicId: "psicose_dependencia", category: "Neuropatologia", question: "Qual o principal déficit neuroquímico causador do declínio de memória na Doença de Alzheimer?", answer: "Déficit colinérgico severo decorrente da degeneração dos neurônios do Núcleo Basal de Meynert no cérebro anterior." },
    { topicId: "psicose_dependencia", category: "Neuropatologia", question: "Qual o mecanismo de ação dos fármacos mais usados no tratamento cognitivo do Alzheimer (ex: Donepezila)?", answer: "São inibidores reversíveis da enzima Acetilcolinesterase, aumentando a concentração de acetilcolina na fenda sináptica." },

    // Teorias da Depressão
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual o grande paradoxo temporal que desafia a teoria monoaminérgica clássica da depressão?", answer: "Os antidepressivos aumentam as monoaminas na fenda em poucas horas, mas a melhora clínica demanda de 2 a 4 semanas para se manifestar." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Como a psicofarmacologia moderna explica a latência de semanas para o efeito dos antidepressivos?", answer: "Pela necessidade de adaptações lentas, como a dessensibilização (down-regulation) de autorreceptores pré-sinápticos inibitórios (como 5-HT1A)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que a Teoria Neurotrófica afirma sobre o papel do estresse crônico e do BDNF?", answer: "O estresse reduz a expressão de BDNF, provocando atrofia dendrítica no hipocampo e rigidez cognitiva; o tratamento antidepressivo restaura os níveis de BDNF." },

    // Antidepressivos
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual a diferença no mecanismo primário de ação entre Tricíclicos (ADTs) e ISRS?", answer: "Os ADTs bloqueiam conjuntamente a recaptação de serotonina e noradrenalina (além de bloquear receptores muscarínicos, histamínicos e alfa-1); os ISRS inibem seletivamente o SERT." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por quais motivos clínicos os Antidepressivos Tricíclicos possuem alta taxa de letalidade em overdose?", answer: "Porque bloqueiam canais de sódio voltagem-dependentes no coração, deflagrando arritmias ventriculares graves e parada cardíaca." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "A que bloqueio de receptor específico se devem os sintomas de boca seca e retenção urinária nos Tricíclicos?", answer: "Ao antagonismo dos receptores colinérgicos muscarínicos periféricos e centrais." }
  ],

  // =======================================================================
  // 4. BANCO DE QUESTÕES DO QUIZ (Completas, Analíticas e Corrigidas)
  // =======================================================================
  quiz: [
    // Sinapse e Fisiologia
    {
      topicId: "sinapse",
      question: "Qual evento molecular na membrana pré-sináptica é a condição indispensável para deflagrar a exocitose das vesículas neuroquímicas?",
      hint: "Envolve um íon bivalente positivo entrando por canais de voltagem.",
      options: [
        "Efluxo acelerado de íons potássio para a fenda.",
        "Abertura de canais de cálcio voltagem-dependentes e entrada de Ca2+.",
        "Bloqueio reversível das bombas de sódio-potássio ATPase.",
        "Fechamento prematuro dos canais de cloro pós-sinápticos."
      ],
      correct: 1
    },
    {
      topicId: "sinapse",
      question: "Um Potencial Pós-Sináptico Excitatório (PPSE) diferencia-se de um Inibitório (PPSI) pelo fato de que o PPSE:",
      hint: "O que ocorre com a polaridade e o limiar celular?",
      options: [
        "Promove hiperpolarização membranar afastando a célula do limiar de ação.",
        "Envolve a saída seletiva de cátions cálcio do neurônio pós-sináptico.",
        "Causa despolarização local da membrana, aproximando o neurônio do limiar de disparo.",
        "Mantém o potencial de repouso inalterado por fechamento de canais de sódio."
      ],
      correct: 2
    },
    {
      topicId: "sinapse",
      question: "Durante uma sinapse inibitória, o neurotransmissor GABA liga-se a receptores GABAA pós-sinápticos. Qual a consequência direta desse acoplamento?",
      hint: "Gera a entrada de um ânion na célula.",
      options: [
        "Abertura de canais de cloreto (Cl-), hiperpolarizando a célula (PPSI).",
        "Disparo imediato de uma salva de potenciais de ação excitatórios.",
        "Despolarização sustentada pelo influxo de magnésio.",
        "Estímulo à síntese imediata de fator neurotrófico BDNF."
      ],
      correct: 0
    },

    // Agonistas e Antagonistas
    {
      topicId: "agonista_antagonista",
      question: "Em farmacodinâmica, uma droga que possui alta afinidade pelo sítio receptor, mas eficácia ou atividade intrínseca rigorosamente nula (0%), é classificada como:",
      hint: "Ela ocupa o espaço sem produzir o efeito do ligante natural.",
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
      question: "Diferente de um antagonista, o fármaco agonista pleno é aquele caracterizado por:",
      hint: "Capacidade de gerar uma cascata de transdução celular.",
      options: [
        "Ligar-se irreversivelmente destruindo a proteína receptora.",
        "Possuir afinidade e capacidade máxima de ativar o receptor deflagrando a resposta biológica.",
        "Inibir de forma inespecífica todos os canais de sódio da membrana.",
        "Bloquear o acesso dos neurotransmissores sem alterar a conformação do sítio."
      ],
      correct: 1
    },

    // Neurotransmissores Clássicos
    {
      topicId: "neurotransmissores",
      question: "Qual neurotransmissor atua como o principal agente excitatório no SNC, fundamental para a plasticidade sináptica e formação de memórias?",
      hint: "Aminoácido excitatório que ativa receptores NMDA.",
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

    // Psicose, Dependência e Correlações Clínicas (Novo Tópico)
    {
      topicId: "psicose_dependencia",
      question: "Em pacientes com Esquizofrenia, os delírios persecutórios e as alucinações auditivas (sintomas positivos) estão relacionados a qual alteração neurobiológica?",
      hint: "Pense na hiperatividade dopaminérgica em um circuito subcortical específico.",
      options: [
        "Hipoatividade colinérgica no lobo temporal medial.",
        "Hiperatividade da transmissão dopaminérgica na via mesolímbica.",
        "Déficit primário de receptores GABAA no córtex somatossensorial.",
        "Bloqueio congênito dos canais de cálcio na substância negra."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Os sintomas negativos da esquizofrenia, tais como embotamento afetivo, apatia e déficits cognitivos, são associados funcionalmente a:",
      hint: "Circuito dopaminérgico que projeta para o lobo frontal.",
      options: [
        "Hipoatividade dopaminérgica na via mesocortical que projeta ao córtex pré-frontal.",
        "Excesso agudo de serotonina no cerebelo e ponte.",
        "Hiperativação dos neurônios histaminérgicos hipotalâmicos.",
        "Destruição autoimune de receptores beta-adrenérgicos periféricos."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "Qual o mecanismo primário pelo qual antipsicóticos clássicos como o Haloperidol reduzem os sintomas psicóticos agudos?",
      hint: "Atuam como bloqueadores na via mesolímbica.",
      options: [
        "Ativação agonista dos transportadores de recaptação de serotonina.",
        "Antagonismo por bloqueio competitivo de receptores dopaminérgicos D2 pós-sinápticos.",
        "Inibição direta da degradação de acetilcolina no hipocampo.",
        "Agonismo nos receptores GABA-A induzindo hiperpolarização global."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "A neurobiologia da dependência química revela que praticamente todas as drogas de abuso convergem para um efeito comum no cérebro. Qual é esse efeito?",
      hint: "Ocorre no Núcleo Accumbens.",
      options: [
        "Elevação abrupta e suprafisiológica dos níveis de dopamina na via de reforço mesolímbica.",
        "Supressão total e permanente de todos os receptores glutamatérgicos NMDA.",
        "Elevação irreversível da síntese de BDNF no cerebelo.",
        "Destruição das vesículas pré-sinápticas de noradrenalina."
      ],
      correct: 0
    },
    {
      topicId: "psicose_dependencia",
      question: "O uso prolongado de substâncias de abuso leva ao fenômeno de tolerância e perda de sensibilidade aos reforçadores naturais por meio de qual adaptação?",
      hint: "Regulação do número de receptores no estriado.",
      options: [
        "Aumento da densidade de receptores D2 no corpo estriado ventral.",
        "Redução e dessensibilização (down-regulation) de receptores dopaminérgicos D2.",
        "Crescimento dendrítico descontrolado nos núcleos da base.",
        "Bloqueio da recaptação de acetilcolina na placa motora."
      ],
      correct: 1
    },
    {
      topicId: "psicose_dependencia",
      question: "Na Doença de Alzheimer, as alterações acentuadas de memória recente e desorientação temporal decorrem primariamente da degeneração de neurônios que utilizam qual neurotransmissor?",
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
      question: "Qual a base neurofarmacológica para a utilização de medicamentos inibidores da acetilcolinesterase (ex: Donepezila, Rivastigmina) no Alzheimer?",
      hint: "Eles impedem a enzima de quebrar o neurotransmissor restante.",
      options: [
        "Compensar o déficit colinérgico impedindo a degradação enzimática da ACh na fenda sináptica.",
        "Bloquear a entrada de cálcio nos neurônios motores periféricos.",
        "Induzir sonolência profunda para reverter as placas senis.",
        "Atuar como antagonistas seletivos dos receptores dopaminérgicos D2."
      ],
      correct: 0
    },

    // Teorias da Depressão
    {
      topicId: "depressao_teorias",
      question: "Qual o principal argumento clínico que contesta a Teoria Monoaminérgica clássica como explicação completa da depressão?",
      hint: "Diferença entre o efeito neuroquímico na fenda e a melhora clínica do humor.",
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
      hint: "Alteração nos autorreceptores inibitórios pré-sinápticos.",
      options: [
        "A dessensibilização (down-regulation) de autorreceptores inibitórios pré-sinápticos.",
        "A metabolização gástrica imediata das aminas ativas.",
        "O esgotamento definitivo de todas as reservas de cálcio axonal.",
        "A proliferação inflamatória dos astrócitos na fenda."
      ],
      correct: 0
    },
    {
      topicId: "depressao_teorias",
      question: "Segundo a Teoria Neurotrófica da Depressão, o estresse crônico associado a altos níveis de glicocorticoides culmina em:",
      hint: "Envolve o BDNF e as ramificações dendríticas.",
      options: [
        "Redução da expressão de BDNF, atrofia dendrítica no hipocampo e rigidez cognitiva.",
        "Crescimento exacerbado de sinapses excitatórias no córtex pré-frontal.",
        "Bloqueio da neurotransmissão gabaérgica nos núcleos cerebelares.",
        "Aumento exponencial da síntese de acetilcolina no hipocampo."
      ],
      correct: 0
    },

    // Antidepressivos
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
      question: "A ocorrência de tontura ao levantar (hipotensão postural) em pacientes em uso de antidepressivos tricíclicos decorre do bloqueio inadvertido de receptores:",
      hint: "Receptores vasculares adrenérgicos.",
      options: [
        "Alfa-1 adrenérgicos vasculares.",
        "Histamínicos H1 corticais.",
        "Muscarínicos colinérgicos periféricos.",
        "Dopaminérgicos D2 do estriado."
      ],
      correct: 0
    },
    {
      topicId: "antidepressivos",
      question: "Efeitos colaterais anticolinérgicos dos tricíclicos (boca seca, constipação intestinal severa, retenção urinária e visão turva) são causados pelo antagonismo de receptores:",
      hint: "Receptores parassimpáticos da acetilcolina.",
      options: [
        "Histamínicos H1.",
        "Serotoninérgicos 5-HT2A.",
        "Muscarínicos colinérgicos.",
        "Glutamatérgicos NMDA."
      ],
      correct: 2
    },
    {
      topicId: "antidepressivos",
      question: "Por que os Inibidores Seletivos de Recaptação de Serotonina (ISRS) substituíram amplamente os Tricíclicos como primeira linha de tratamento para a depressão?",
      hint: "Pense na seletividade e risco em caso de intoxicação.",
      options: [
        "Possuem eficácia clínica dez vezes superior aos ADTs no primeiro dia.",
        "Possuem eficácia semelhante, mas com índice terapêutico muito superior, perfil de segurança favorável e baixa letalidade em overdose.",
        "Não causam qualquer efeito no transportador de serotonina.",
        "Criam tolerância imediata e evitam crises convulsivas."
      ],
      correct: 1
    },
    {
      topicId: "antidepressivos",
      question: "Qual o mecanismo subjacente à elevada letalidade observada na intoxicação aguda por superdosagem de Antidepressivos Tricíclicos?",
      hint: "Bloqueio elétrico no miocárdio.",
      options: [
        "Bloqueio de canais de sódio voltagem-dependentes no coração, deflagrando arritmias graves e parada cardíaca.",
        "Destruição imediata da barreira hematoencefálica.",
        "Insuficiência renal por acúmulo de serotonina livre no túbulo distal.",
        "Paralisia flácida por ativação de receptores nicotínicos musculares."
      ],
      correct: 0
    }
  ]
};
