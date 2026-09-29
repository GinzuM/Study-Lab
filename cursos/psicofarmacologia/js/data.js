const studyData = {
  topics: [
    {
      id: "sinapse_etapas",
      title: "1. Etapas da Sinapse Química",
      content: `A comunicação entre os neurónios ocorre por sinapses químicas. Etapas:
      1. O potencial de ação despolariza o terminal pré-sináptico.
      2. Canais de Cálcio (Ca²+) dependentes de voltagem abrem-se.
      3. O cálcio provoca a exocitose das vesículas sinápticas.
      4. Os neurotransmissores são libertados na fenda e ligam-se a recetores pós-sinápticos.`,
      mnemonic: "💡 Mnemónica: 'Potencial chega, Cálcio entra, Vesícula funde, Mensagem sai'."
    },
    {
      id: "potenciais",
      title: "2. Potenciais Pós-Sinápticos (PPSE e PPSI)",
      content: `- PPSE (Excitatório): Despolarização (ex: entrada de Na+), aproximando a célula do limiar de disparo.
      - PPSI (Inibitório): Hiperpolarização (ex: entrada de Cl- ou saída de K+), afastando a célula do limiar e silenciando-a.`,
      mnemonic: "💡 Mnemónica: 'PPSE aproxima do zero (+ dispara); PPSI afasta o neurónio (- silencia)'."
    },
    {
      id: "agonista",
      title: "3. Fármacos Agonistas",
      content: `Um Agonista é uma substância que se liga a um recetor (afinidade) e possui "atividade intrínseca" (eficácia), ativando o recetor e desencadeando a cascata celular.`,
      mnemonic: "💡 Mnemónica: 'Cópia da chave' que consegue abrir a porta e acender a luz."
    },
    {
      id: "antagonista",
      title: "4. Fármacos Antagonistas",
      content: `Um Antagonista liga-se ao recetor com afinidade, mas NÃO tem atividade intrínseca. A sua função é bloquear o recetor, impedindo que os agonistas se liguem.`,
      mnemonic: "💡 Mnemónica: 'Chave partida na fechadura'. Ocupa o buraco e não deixa ninguém entrar."
    },
    {
      id: "nt_excit_inib",
      title: "5. Glutamato e GABA",
      content: `- Glutamato: Principal neurotransmissor excitatório (SNC). Fundamental para plasticidade, aprendizagem e memória.
      - GABA: Principal neurotransmissor inibitório (SNC). "Acalma" o cérebro, reduz ansiedade e induz sono.`,
      mnemonic: "💡 Mnemónica: 'GABA Desliga a tomada; GLUtamato Gruda o circuito'."
    },
    {
      id: "nt_monoaminas",
      title: "6. Monoaminas (NA, DA e 5-HT)",
      content: `- Noradrenalina (NA): Alerta, vigília, resposta de luta/fuga, atenção.
      - Dopamina (DA): Motivação, reforço/prazer e controlo motor.
      - Serotonina (5-HT): Humor, sono, apetite, impulsividade.`,
      mnemonic: "💡 Mnemónica: 'Dopamina = Prazer; Noradrenalina = Alerta; Serotonina = Humor'."
    },
    {
      id: "nt_acetilcolina",
      title: "7. Acetilcolina (ACh)",
      content: `SNC: Essencial para aprendizagem, memória e atenção. SNP: Neurotransmissor na junção neuromuscular (contração muscular).`,
      mnemonic: "💡 Mnemónica: 'Acetilcolina faz o músculo Mexer e o cérebro Memorizar'."
    },
    {
      id: "depressao_mono",
      title: "8. Teoria Monoaminérgica da Depressão",
      content: `A depressão resulta de um défice de monoaminas (Serotonina, NA, DA). 
      Crítica: Fármacos aumentam neurotransmissores em horas, mas a melhoria clínica demora semanas. Isso exige adaptação (down-regulation de autorrecetores).`,
      mnemonic: "💡 Mnemónica: 'A química sobe rápido, mas o cérebro demora a acostumar'."
    },
    {
      id: "depressao_neuro",
      title: "9. Teoria Neurotrófica da Depressão",
      content: `O stress crónico reduz fatores neurotróficos (BDNF), causando atrofia sináptica e declínio cognitivo. Antidepressivos estimulam síntese de BDNF.`,
      mnemonic: "💡 Mnemónica: 'Falta BDNF = falta adubo. O remédio traz o adubo de volta'."
    },
    {
      id: "antidepressivos_comp",
      title: "10. Antidepressivos (Tricíclicos vs ISRS)",
      content: `- Tricíclicos (ADTs): Bloqueiam recaptação de NA e 5-HT, mas bloqueiam recetores colinérgicos, histamínicos e alfa-adrenérgicos. Alta toxicidade.
      - ISRS: Inibem transportador de serotonina (SERT). Mesma eficácia, perfil mais seguro.`,
      mnemonic: "💡 Mnemónica: 'Tricíclico atira para todo o lado. ISRS é seletivo e seguro'."
    }
  ],

  tree: [
    { id: "sinapse_etapas", title: "A Sinapse", level: 1, unlocked: true },
    { id: "potenciais", title: "Potenciais (PPSE/PPSI)", level: 1, unlocked: true },
    { id: "agonista", title: "Agonistas", level: 2, unlocked: true },
    { id: "antagonista", title: "Antagonistas", level: 2, unlocked: true },
    { id: "nt_excit_inib", title: "Glutamato e GABA", level: 3, unlocked: true },
    { id: "nt_monoaminas", title: "Monoaminas", level: 3, unlocked: true },
    { id: "nt_acetilcolina", title: "Acetilcolina", level: 3, unlocked: true },
    { id: "depressao_mono", title: "Teoria Monoaminérgica", level: 4, unlocked: true },
    { id: "depressao_neuro", title: "Teoria Neurotrófica", level: 4, unlocked: true },
    { id: "antidepressivos_comp", title: "ADTs vs ISRS", level: 5, unlocked: true }
  ],

  // BANCO DE FLASHCARDS ÚNICOS E EXAUSTIVOS
  flashcards: [
    { topicId: "sinapse_etapas", category: "Sinapses", question: "Qual evento elétrico inicia a sinapse química no terminal pré-sináptico?", answer: "A chegada do potencial de ação." },
    { topicId: "sinapse_etapas", category: "Sinapses", question: "A abertura de que canais dependentes de voltagem é crucial para a exocitose?", answer: "Canais de Cálcio (Ca²+)." },
    { topicId: "sinapse_etapas", category: "Sinapses", question: "Onde se ligam os neurotransmissores após serem libertados na fenda?", answer: "Aos recetores na membrana pós-sináptica." },
    { topicId: "potenciais", category: "Potenciais", question: "O que significa a sigla PPSE?", answer: "Potencial Pós-Sináptico Excitatório." },
    { topicId: "potenciais", category: "Potenciais", question: "A entrada de qual ião está mais associada à geração de um PPSE?", answer: "Sódio (Na+)." },
    { topicId: "potenciais", category: "Potenciais", question: "Qual é o efeito do PPSI no limiar de disparo celular?", answer: "Afasta a célula do limiar (hiperpolarização)." },
    { topicId: "potenciais", category: "Potenciais", question: "Que iões estão envolvidos na hiperpolarização de um PPSI?", answer: "Entrada de Cloreto (Cl-) ou saída de Potássio (K+)." },
    { topicId: "agonista", category: "Farmacodinâmica", question: "Quais são as duas propriedades que definem um Agonista?", answer: "Afinidade (liga-se ao recetor) e Atividade Intrínseca (ativa o recetor)." },
    { topicId: "antagonista", category: "Farmacodinâmica", question: "Um Antagonista possui atividade intrínseca?", answer: "Não, a sua eficácia é zero. Ele apenas bloqueia o recetor." },
    { topicId: "antagonista", category: "Farmacodinâmica", question: "O que acontece se um agonista e um antagonista competirem pelo mesmo recetor?", answer: "O antagonista impede a ligação e o efeito do agonista." },
    { topicId: "nt_excit_inib", category: "Neurotransmissores", question: "Qual é o neurotransmissor que medeia a maioria das sinapses excitatórias do SNC?", answer: "Glutamato." },
    { topicId: "nt_excit_inib", category: "Neurotransmissores", question: "Qual é a função primordial do Glutamato a nível cognitivo?", answer: "Plasticidade sináptica, aprendizagem e memória." },
    { topicId: "nt_excit_inib", category: "Neurotransmissores", question: "Qual o principal neurotransmissor inibitório do cérebro?", answer: "GABA (Ácido gama-aminobutírico)." },
    { topicId: "nt_monoaminas", category: "Neurotransmissores", question: "Que neurotransmissor é libertado em resposta a situações de luta ou fuga?", answer: "Noradrenalina." },
    { topicId: "nt_monoaminas", category: "Neurotransmissores", question: "A via mesolímbica de recompensa é mediada por qual neurotransmissor?", answer: "Dopamina." },
    { topicId: "nt_monoaminas", category: "Neurotransmissores", question: "O humor, sono e impulsividade são maioritariamente regulados por...", answer: "Serotonina (5-HT)." },
    { topicId: "nt_monoaminas", category: "Neurotransmissores", question: "Défice no controlo motor pode estar associado à falta de que monoamina?", answer: "Dopamina." },
    { topicId: "nt_acetilcolina", category: "Neurotransmissores", question: "Que neurotransmissor atua na junção neuromuscular periférica?", answer: "Acetilcolina." },
    { topicId: "nt_acetilcolina", category: "Neurotransmissores", question: "No SNC, qual o papel da Acetilcolina?", answer: "Processos de memória, atenção e aprendizagem." },
    { topicId: "depressao_mono", category: "Depressão", question: "Segundo a teoria original, quais as três monoaminas deficientes na depressão?", answer: "Serotonina, Noradrenalina e Dopamina." },
    { topicId: "depressao_mono", category: "Depressão", question: "Qual é o paradoxo de tempo no tratamento com antidepressivos?", answer: "Eles sobem os neurotransmissores em horas, mas a melhoria clínica leva semanas." },
    { topicId: "depressao_mono", category: "Depressão", question: "O que explica a demora no efeito clínico dos antidepressivos?", answer: "A necessidade de processos adaptativos como a 'down-regulation' (dessensibilização) de recetores." },
    { topicId: "depressao_neuro", category: "Depressão", question: "O que postula a Teoria Neurotrófica da depressão?", answer: "Que o stress reduz o BDNF, causando atrofia das sinapses e morte neuronal." },
    { topicId: "depressao_neuro", category: "Depressão", question: "A nível estrutural, o que os antidepressivos fazem segundo a teoria neurotrófica?", answer: "Estimulam a síntese de novo BDNF e promovem a neurogénese (novas sinapses)." },
    { topicId: "depressao_neuro", category: "Depressão", question: "Que sintoma cognitivo é justificado pela falta de neuroplasticidade?", answer: "A rigidez cognitiva (dificuldade em mudar perspetivas e aprender)." },
    { topicId: "antidepressivos_comp", category: "Antidepressivos", question: "Os Antidepressivos Tricíclicos (ADTs) bloqueiam a recaptação de...", answer: "Noradrenalina e Serotonina." },
    { topicId: "antidepressivos_comp", category: "Antidepressivos", question: "Por que motivo os Tricíclicos causam boca seca e prisão de ventre?", answer: "Devido ao bloqueio dos recetores muscarínicos colinérgicos." },
    { topicId: "antidepressivos_comp", category: "Antidepressivos", question: "Qual é a classe de antidepressivos que inibe seletivamente o SERT?", answer: "ISRS (Inibidores Seletivos de Recaptação de Serotonina)." },
    { topicId: "antidepressivos_comp", category: "Antidepressivos", question: "Em termos de eficácia no combate à depressão típica, há diferença entre ADTs e ISRS?", answer: "Não, a eficácia é semelhante. A grande diferença está na segurança e tolerabilidade." },
    { topicId: "antidepressivos_comp", category: "Antidepressivos", question: "Qual das duas classes (ADTs ou ISRS) tem um alto índice de toxicidade e letalidade em overdose?", answer: "Antidepressivos Tricíclicos (ADTs)." }
  ],

  // BANCO DE QUIZ ÚNICOS (Múltipla Escolha Exaustiva)
  quiz: [
    { topicId: "sinapse_etapas", question: "O evento final que ocorre no terminal pré-sináptico antes da libertação de neurotransmissores na fenda é a:", hint: "Depende da entrada de Cálcio.", options: ["Abertura de canais de sódio dependentes de voltagem", "Exocitose das vesículas sinápticas", "Repolarização imediata do axónio", "Degradação enzimática nas vesículas"], correct: 1 },
    { topicId: "sinapse_etapas", question: "Sem o influxo de um determinado ião bivalente, a comunicação sináptica química falha. Esse ião é o:", hint: "Necessário para a fusão da vesícula.", options: ["Cálcio (Ca2+)", "Magnésio (Mg2+)", "Cloreto (Cl-)", "Sódio (Na+)"], correct: 0 },
    { topicId: "potenciais", question: "O Potencial Pós-Sináptico Excitatório (PPSE) diferencia-se do Inibitório (PPSI) porque o PPSE:", hint: "O que acontece com a voltagem da membrana?", options: ["Hiperpolariza a membrana celular", "Bloqueia fisicamente a fenda sináptica", "Aproxima o potencial da membrana do limiar de disparo", "Abre preferencialmente canais de Cloreto"], correct: 2 },
    { topicId: "potenciais", question: "A entrada de iões Cloreto (Cl-) na célula pós-sináptica tem como consequência primária:", hint: "Torna a célula mais negativa.", options: ["Geração de um PPSE", "Geração de um PPSI (hiperpolarização)", "Inibição de canais de cálcio na fenda", "Disparo imediato do potencial de ação"], correct: 1 },
    { topicId: "agonista", question: "Na farmacodinâmica, uma substância que se liga ao recetor e desencadeia uma resposta biológica efetiva é chamada de:", hint: "Atividade intrínseca presente.", options: ["Antagonista competitivo", "Modulador inibitório", "Antagonista irreversível", "Agonista pleno"], correct: 3 },
    { topicId: "antagonista", question: "Ao administrar um Antagonista a um doente, qual é o efeito a nível celular que se espera?", hint: "Efeito de bloqueio.", options: ["A ativação exacerbada dos recetores", "A ocupação do recetor sem ativação intrínseca, bloqueando ligantes naturais", "A conversão enzimática do recetor noutro tipo celular", "A indução da síntese massiva de novos recetores em segundos"], correct: 1 },
    { topicId: "nt_excit_inib", question: "Um paciente toma um medicamento que potencia a atividade do GABA. Qual será o efeito esperado?", hint: "GABA é inibitório.", options: ["Euforia e aumento dos batimentos cardíacos", "Alucinações severas", "Efeito calmante, ansiolítico ou sedativo", "Aumento extremo da capacidade de memorização (LTP)"], correct: 2 },
    { topicId: "nt_excit_inib", question: "A plasticidade sináptica e os processos neurobiológicos da memória dependem de forma vital da ação do:", hint: "Principal neurotransmissor excitatório.", options: ["Glutamato", "Histamina", "GABA", "Glicina"], correct: 0 },
    { topicId: "nt_monoaminas", question: "Comportamentos aditivos e mecanismos de reforço/prazer estão intimamente ligados às vias de:", hint: "Via mesolímbica.", options: ["Serotonina", "Dopamina", "Acetilcolina", "Noradrenalina"], correct: 1 },
    { topicId: "nt_monoaminas", question: "Qual a monoamina primariamente implicada na regulação das respostas de luta ou fuga e vigilância?", hint: "Produzida também nas suprarrenais como hormona.", options: ["Serotonina", "Dopamina", "GABA", "Noradrenalina"], correct: 3 },
    { topicId: "nt_monoaminas", question: "Alterações no apetite, no ciclo do sono e impulsividade em doentes depressivos associam-se vulgarmente à disfunção de qual neurotransmissor?", hint: "Produzida a partir do Triptofano.", options: ["Serotonina (5-HT)", "Acetilcolina", "Dopamina", "Noradrenalina"], correct: 0 },
    { topicId: "nt_acetilcolina", question: "A paralisia muscular flácida pode ser causada pelo bloqueio de qual neurotransmissor na junção neuromuscular?", hint: "O único na lista não pertencente às monoaminas puras ou aminoácidos.", options: ["Glutamato", "Dopamina", "Acetilcolina", "Serotonina"], correct: 2 },
    { topicId: "depressao_mono", question: "A Teoria Monoaminérgica da depressão enfrenta o 'paradoxo temporal' porque:", hint: "Descompasso entre química e clínica.", options: ["Os medicamentos diminuem a monoamina, mas curam a doença", "As monoaminas sobem de imediato, mas a melhoria clínica demora semanas", "O efeito clínico ocorre na primeira hora, mas as análises demoram meses", "Apenas a dopamina apresenta um atraso na fenda sináptica"], correct: 1 },
    { topicId: "depressao_mono", question: "Para explicar a demora no efeito dos antidepressivos, a teoria foi adaptada e inclui o conceito de:", hint: "Redução da sensibilidade de recetores inibitórios.", options: ["Aumento instantâneo da barreira hematoencefálica", "Dessensibilização (down-regulation) de autorrecetores", "Destruição celular maciça no hipocampo", "Subida exponencial dos níveis de cortisol livre"], correct: 1 },
    { topicId: "depressao_neuro", question: "A Teoria Neurotrófica foca-se na importância do BDNF. Em quadros de stress crónico, os níveis de BDNF:", hint: "As sinapses atrofiam.", options: ["Disparam vertiginosamente, causando hiperatividade", "Permanecem inalterados e sem impacto", "Reduzem drasticamente, levando a atrofia neuronal e rigidez", "Sofrem mutação genética instantânea"], correct: 2 },
    { topicId: "depressao_neuro", question: "Segundo a Teoria Neurotrófica, os antidepressivos funcionam de forma profunda porque:", hint: "Relacionado com crescimento.", options: ["Atuam como analgésicos imediatos", "Destroem a amígdala cerebral em 4 semanas", "Promovem a neurogénese e a reparação sináptica através da síntese de BDNF", "Paralisam a comunicação colinérgica"], correct: 2 },
    { topicId: "antidepressivos_comp", question: "Um idoso com depressão iniciou um Tricíclico (ADT) e queixa-se de boca seca e prisão de ventre. Estes efeitos colaterais justificam-se devido ao:", hint: "Os ADTs não são seletivos.", options: ["Efeito anti-histamínico (bloqueio H1)", "Bloqueio de recetores alfa-adrenérgicos", "Bloqueio de recetores muscarínicos colinérgicos", "Défice agudo de glutamato no cerebelo"], correct: 2 },
    { topicId: "antidepressivos_comp", question: "O efeito colateral de tontura ao levantar (hipotensão postural) associado aos Tricíclicos decorre do:", hint: "Relacionado com a pressão vascular.", options: ["Bloqueio de recetores alfa-1 adrenérgicos", "Bloqueio dopaminérgico puro", "Agonismo de recetores GABA", "Excesso agudo de serotonina periférica"], correct: 0 },
    { topicId: "antidepressivos_comp", question: "Qual a vantagem absoluta na escolha de um ISRS (como a Fluoxetina) face a um Tricíclico na clínica moderna?", hint: "Relacionado com a segurança.", options: ["Curam a doença em 24 horas", "A sua eficácia é 10 vezes superior à dos Tricíclicos", "Apresentam elevada segurança clínica e baixíssima toxicidade em caso de overdose", "Não possuem efeito sobre a serotonina, apenas sobre o BDNF livre"], correct: 2 },
    { topicId: "antidepressivos_comp", question: "Ambas as classes (ADTs e ISRS) tratam eficazmente a depressão. O mecanismo primário comum entre ambos (apesar da seletividade diferente) é:", hint: "O que fazem à serotonina?", options: ["Inibição da degradação pela MAO", "Bloqueio da recaptação (reuptake) da serotonina na fenda sináptica", "Agonismo direto nos recetores colinérgicos", "Aumento da recaptação de noradrenalina pelo astrócito"], correct: 1 }
  ]
};
