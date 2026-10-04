// =========================================================================
// BANCO DE DADOS: PSICOFARMACOLOGIA
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Expandidos, com exemplos e Modo Simplificado)
  topics: [
    { 
      id: "sinapse", 
      title: "1. Comunicação no SN & Sinapses Químicas", 
      content: `**Explicação Detalhada:**
      A transmissão de informação entre os neurônios ocorre através de sinapses químicas. Quando o impulso elétrico (potencial de ação) chega ao final do neurônio, ele abre canais de Cálcio (Ca²+) dependentes de voltagem. O cálcio entra na célula e empurra as vesículas cheias de neurotransmissores para fora (exocitose), libertando-os na fenda sináptica.
      Ao ligarem-se ao neurônio seguinte, podem causar dois efeitos:
      - **PPSE (Potencial Pós-Sináptico Excitatório):** Há um influxo de Sódio (Na+), que despolariza a membrana (torna-a mais positiva). Isso aproxima o neurônio do limiar de disparo, facilitando a passagem da mensagem.
      - **PPSI (Potencial Pós-Sináptico Inibitório):** Há um influxo de Cloreto (Cl-) ou efluxo de Potássio (K+), que hiperpolariza a membrana (torna-a mais negativa). Isso afasta o neurônio do limiar de disparo, "silenciando" a mensagem.
      
      **Modo Simplificado:**
      - **Cálcio (Ca²+):** É o gatilho que faz o neurônio cuspir os neurotransmissores.
      - **PPSE (Excitação):** Liga o neurônio seguinte (entra sódio).
      - **PPSI (Inibição):** Desliga o neurônio seguinte (entra cloreto).`, 
      mnemonic: "💡 Mnemónica: 'PPSE aproxima do zero (+ dispara), PPSI afasta o neurônio (- silencia)'." 
    },
    { 
      id: "agonista_antagonista", 
      title: "2. Fármacos Agonistas vs Antagonistas", 
      content: `**Explicação Detalhada:**
      A farmacodinâmica estuda como os medicamentos agem no cérebro.
      - **Fármaco Agonista:** Possui afinidade (encaixa no receptor) e atividade intrínseca (ativa o receptor). Funciona como uma cópia da chave original, abrindo a porta e desencadeando a resposta biológica.
      - **Fármaco Antagonista:** Possui afinidade (encaixa no receptor), mas NÃO possui atividade intrínseca. Funciona como uma chave quebrada na fechadura: ele não abre a porta e ainda impede que as chaves verdadeiras (os agonistas ou neurotransmissores naturais) consigam entrar.
      
      **Exemplo Prático:** Se alguém sofre de alucinações por excesso de dopamina, toma-se um medicamento *antagonista* dopaminérgico para tampar os receptores e impedir a dopamina de agir.
      
      **Modo Simplificado:**
      - **Agonista:** Imita o neurotransmissor e liga a máquina.
      - **Antagonista:** Entope o buraco da fechadura para bloquear a máquina e não deixar mais nada ligar.`, 
      mnemonic: "💡 Mnemónica: O Agonista é a chave que abre a porta. O Antagonista é a chave quebrada na fechadura." 
    },
    { 
      id: "neurotransmissores", 
      title: "3. Principais Neurotransmissores", 
      content: `**Explicação Detalhada:**
      Cada neurotransmissor tem funções muito específicas no Sistema Nervoso:
      - **Glutamato:** É o principal acelerador (excitatório) do cérebro. Essencial para a plasticidade sináptica, aprendizagem e memória.
      - **GABA:** É o principal travão (inibitório). O seu aumento gera calma, relaxamento e sono (alvo dos ansiolíticos).
      - **Serotonina (5-HT):** Regula humor, sono, apetite e controlo de impulsos.
      - **Noradrenalina (NA):** Responsável pelo alerta, vigília, foco e pela resposta corporal de luta ou fuga.
      - **Dopamina (DA):** Alimenta a via mesolímbica (motivação, sistema de recompensa e prazer) e controla movimentos finos.
      - **Acetilcolina (ACh):** No cérebro, ajuda na memória. No Sistema Nervoso Periférico (junção neuromuscular), é ela que diz aos músculos para se contraírem.
      
      **Modo Simplificado:**
      - **Glutamato:** Acelera.
      - **GABA:** Trava / Acalma.
      - **Serotonina:** Humor e Sono.
      - **Noradrenalina:** Alerta e Foco.
      - **Dopamina:** Prazer e Motivação.
      - **Acetilcolina:** Músculos e Memória.`, 
      mnemonic: "💡 Mnemónica: 'GABA desliga a tomada (inibitório); GLUtamato gruda o circuito (excitação/memória)'." 
    },
    { 
      id: "depressao_teorias", 
      title: "4. Teorias da Depressão", 
      content: `**Explicação Detalhada:**
      Existem duas formas principais de explicar a depressão biologicamente:
      1. **Teoria Monoaminérgica:** Afirma que a depressão é causada pela falta de monoaminas (Serotonina, Noradrenalina, Dopamina). O problema desta teoria é o tempo: os remédios aumentam os níveis destes químicos em poucas horas, mas o doente demora 2 a 4 semanas a sentir melhorias clínicas (latência). Essa latência ocorre porque o cérebro precisa de fazer adaptações lentas (down-regulation de autorreceptores).
      2. **Teoria Neurotrófica:** É a teoria mais moderna. Afirma que o estresse crónico diminui a produção de "adubo cerebral", o chamado fator neurotrófico derivado do encéfalo (BDNF). Sem BDNF, as sinapses atrofiam, causando rigidez cognitiva. O tratamento com antidepressivos restaura lentamente os níveis de BDNF e faz crescer novas conexões (sinaptogénese).
      
      **Modo Simplificado:**
      - **Monoaminérgica:** Falta "combustível" (serotonina) no cérebro.
      - **Neurotrófica:** O estresse matou as raízes da planta (falta BDNF). O remédio funciona como um adubo que faz as conexões crescerem de novo ao longo de semanas.`, 
      mnemonic: "💡 Mnemónica: 'Mais do que faltar neurotransmissor, falta adubo nos neurônios (BDNF)'." 
    },
    { 
      id: "antidepressivos", 
      title: "5. Antidepressivos: Tricíclicos vs ISRS", 
      content: `**Explicação Detalhada:**
      Ambas as classes tratam a depressão com a *mesma* eficácia clínica, mas diferem drasticamente na segurança.
      - **Antidepressivos Tricíclicos (ADTs):** Ex: Amitriptilina. Eles bloqueiam a recaptação de Serotonina e Noradrenalina. Porém, são "sujos" porque bloqueiam inadvertidamente outros recetores:
        - Bloqueio Colinérgico/Muscarínico: Causa boca seca, visão turva e constipação.
        - Bloqueio Histamínico: Causa forte sedação e ganho de peso.
        - Bloqueio Alfa-1 adrenérgico: Causa tonturas ao levantar (hipotensão postural).
        São extremamente tóxicos e letais em caso de superdosagem (cardiotoxicidade).
      - **Inibidores Seletivos da Recaptação de Serotonina (ISRS):** Ex: Fluoxetina, Sertralina. Inibem apenas o transportador de Serotonina (SERT). Não mexem nos outros recetores, logo, não têm aqueles efeitos colaterais chatos e são muito seguros, mesmo em superdosagem.
      
      **Modo Simplificado:**
      - **Tricíclicos:** Antigos. Funcionam bem, mas dão boca seca, engordam, dão sono e podem matar se tomar em excesso.
      - **ISRS:** Modernos. Funcionam tão bem quanto os antigos, mas não têm efeitos tão pesados e são super seguros.`, 
      mnemonic: "💡 Mnemónica: 'Tricíclico = Três efeitos (sono, boca seca, pressão cai). ISRS = Seletivo, Seguro'." 
    }
  ],

  // 2. MAPA MENTAL
  tree: [
    { id: "sinapse", title: "1. Sinapses Químicas", level: 1, unlocked: true, unlocks: ["agonista_antagonista", "neurotransmissores"] },
    { id: "agonista_antagonista", title: "2. Agonistas e Antagonistas", level: 2, unlocked: false, unlocks: ["antidepressivos"] },
    { id: "neurotransmissores", title: "3. Neurotransmissores", level: 2, unlocked: false, unlocks: ["depressao_teorias"] },
    { id: "depressao_teorias", title: "4. Teorias da Depressão", level: 3, unlocked: false, unlocks: ["antidepressivos"] },
    { id: "antidepressivos", title: "5. Antidepressivos (ADTs vs ISRS)", level: 4, unlocked: false, unlocks: [] }
  ],

  // 3. FLASHCARDS 
  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual íon desencadeia a exocitose das vesículas no terminal pré-sináptico?", answer: "Íon Cálcio (Ca²+)." },
    { topicId: "sinapse", category: "Sinapses", question: "Qual a diferença de efeito entre PPSE e PPSI na membrana celular?", answer: "PPSE despolariza a membrana (facilita o disparo); PPSI hiperpolariza a membrana (inibe o disparo)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que caracteriza um fármaco Antagonista?", answer: "Liga-se ao receptor com afinidade (ocupa o sítio), mas sem atividade intrínseca, bloqueando a ação dos agonistas." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que caracteriza um fármaco Agonista?", answer: "Funciona como a 'cópia da chave'. Tem afinidade e atividade intrínseca, ativando a cascata celular." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o principal neurotransmissor inibitório do cérebro (alvo dos ansiolíticos)?", answer: "GABA." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o neurotransmissor associado à via mesolímbica de recompensa e prazer?", answer: "Dopamina." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual neurotransmissor é crucial para a contração muscular no sistema periférico?", answer: "Acetilcolina." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Regulação do humor, sono, apetite e impulsividade está associada a qual monoamina?", answer: "Serotonina (5-HT)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual a crítica principal à Teoria Monoaminérgica da depressão?", answer: "Os fármacos sobem as monoaminas em horas, mas a melhora clínica leva semanas." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que postula a Teoria Neurotrófica sobre o impacto do estresse crónico?", answer: "O estresse reduz o BDNF, causando atrofia sináptica e rigidez cognitiva." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual é o mecanismo base dos Antidepressivos Tricíclicos?", answer: "Bloqueiam a recaptação de Serotonina e Noradrenalina." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Boca seca, constipação e visão turva nos Tricíclicos ocorrem pelo bloqueio de quais recetores?", answer: "Recetores Colinérgicos (Muscarínicos)." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os ISRS substituíram os Tricíclicos na prática clínica comum?", answer: "Porque, apesar de terem a mesma eficácia, os ISRS são muito mais seguros e têm menos efeitos colaterais." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual o risco letal associado à superdosagem de Antidepressivos Tricíclicos?", answer: "Alta toxicidade cardíaca e letalidade severa." }
  ],

  // 4. QUIZ (Total: 29 Perguntas)
  quiz: [
    // 4 Originais
    { topicId: "sinapse", question: "O que caracteriza o PPSI?", hint: "Envolve Cl- ou K+ e deixa a célula mais negativa.", options: ["Despolarização para o limiar", "Hiperpolarização da membrana", "Fusão acelerada de vesículas", "Abertura de canais de sódio"], correct: 1 },
    { topicId: "agonista_antagonista", question: "Um fármaco que liga e bloqueia a ação do neurotransmissor sem ativar o receptor é:", hint: "Bloqueia a fechadura.", options: ["Agonista pleno", "Agonista parcial", "Antagonista", "Modulador positivo"], correct: 2 },
    { topicId: "neurotransmissores", question: "Qual neurotransmissor é associado à via de recompensa (prazer)?", hint: "Via mesolímbica.", options: ["Dopamina", "Acetilcolina", "GABA", "Glicina"], correct: 0 },
    { topicId: "depressao_teorias", question: "A demora na melhora com antidepressivos deve-se a:", hint: "Processos adaptativos.", options: ["Má absorção gástrica", "Adaptações lentas como regulação de BDNF", "Destruição de neurônios", "Falta de cálcio"], correct: 1 },

    // 25 Novas
    { topicId: "sinapse", question: "Qual processo celular no terminal pré-sináptico é diretamente engatilhado pelo influxo de cálcio (Ca²+) dependente de voltagem?", hint: "Leva as vesículas a fundirem-se.", options: ["Despolarização imediata do axônio pós-sináptico.", "Síntese de novas moléculas de neurotransmissores.", "Exocitose das vesículas sinápticas, liberando os neurotransmissores na fenda.", "Bloqueio imediato da recaptação de noradrenalina."], correct: 2 },
    { topicId: "sinapse", question: "Como o Potencial Pós-Sináptico Excitatório (PPSE) atua na membrana da célula receptora?", hint: "Torna a célula mais propensa a disparar.", options: ["Causa despolarização (geralmente por influxo de Na+), aproximando a célula do limiar de disparo.", "Causa hiperpolarização aguda, silenciando o neurônio.", "Impede a abertura de canais de cálcio voltagem-dependentes.", "Induz a liberação reversa de neurotransmissores inibitórios."], correct: 0 },
    { topicId: "sinapse", question: "O Potencial Pós-Sináptico Inibitório (PPSI) afasta o neurônio do limiar de disparo através de qual mecanismo iônico?", hint: "Gera carga negativa dentro da célula.", options: ["Exocitose de vesículas de sódio.", "Influxo de Cloreto (Cl-) ou efluxo de Potássio (K+), causando hiperpolarização.", "Fechamento prematuro dos canais de GABA.", "Degradação massiva do fator neurotrófico BDNF."], correct: 1 },
    { topicId: "agonista_antagonista", question: "Na farmacodinâmica, qual característica define especificamente um fármaco antagonista?", hint: "Tem afinidade, mas sem atividade.", options: ["Possui afinidade e alta atividade intrínseca no receptor.", "Destrói permanentemente o sítio de ligação do receptor alvo.", "Transforma os potenciais inibitórios em excitatórios.", "Liga-se ao receptor com afinidade, mas sem atividade intrínseca, bloqueando a ação dos agonistas."], correct: 3 },
    { topicId: "agonista_antagonista", question: "Se um fármaco atua como a 'cópia da chave' que consegue abrir a fechadura e ativar a cascata celular, ele é classificado como:", hint: "Imita a função do neurotransmissor.", options: ["Antagonista competitivo.", "Inibidor de recaptação.", "Fármaco de ação agonista.", "Fator neurotrófico derivado do encéfalo."], correct: 2 },
    { topicId: "neurotransmissores", question: "A plasticidade sináptica e os processos neurobiológicos fundamentais para a memória dependem da ação de qual neurotransmissor excitatório?", hint: "O principal excitatório do SNC.", options: ["GABA.", "Glutamato.", "Serotonina.", "Acetilcolina periférica."], correct: 1 },
    { topicId: "neurotransmissores", question: "O uso de fármacos ansiolíticos visa frequentemente 'acalmar' o cérebro potencializando qual neurotransmissor?", hint: "O principal inibitório do SNC.", options: ["Acetilcolina.", "Dopamina.", "Noradrenalina.", "GABA, o principal neurotransmissor inibitório do SNC."], correct: 3 },
    { topicId: "neurotransmissores", question: "Um paciente com letargia excessiva e dificuldade em manter o estado de alerta ou vigília pode apresentar desregulação primária em qual monoamina?", hint: "Regula o alerta e a resposta de luta ou fuga.", options: ["Noradrenalina.", "Serotonina.", "Glutamato.", "GABA."], correct: 0 },
    { topicId: "neurotransmissores", question: "A via mesolímbica de motivação, que regula os mecanismos de reforço e prazer, depende crucialmente da liberação de:", hint: "Associada aos vícios e recompensas.", options: ["Dopamina.", "Serotonina.", "Acetilcolina.", "Noradrenalina."], correct: 0 },
    { topicId: "neurotransmissores", question: "O controle do humor, regulação do sono, apetite e impulsividade estão classicamente associados a qual neurotransmissor?", hint: "Alvo principal dos ISRS.", options: ["Glutamato.", "GABA.", "Serotonina (5-HT).", "Dopamina."], correct: 2 },
    { topicId: "neurotransmissores", question: "Na junção neuromuscular (Sistema Nervoso Periférico), qual neurotransmissor atua diretamente para gerar a contração muscular?", hint: "Também atua na memória no SNC.", options: ["Noradrenalina.", "Acetilcolina.", "Dopamina.", "Glutamato."], correct: 1 },
    { topicId: "depressao_teorias", question: "Qual é a premissa central da Teoria Monoaminérgica da Depressão?", hint: "Falta dos químicos básicos.", options: ["A depressão é causada pelo excesso de atividade do GABA no hipocampo.", "A depressão decorre do déficit absoluto ou relativo de monoaminas, como Serotonina, Noradrenalina e Dopamina.", "O transtorno resulta da hipertrofia das sinapses corticais.", "O aumento rápido de acetilcolina induz o declínio cognitivo."], correct: 1 },
    { topicId: "depressao_teorias", question: "Qual é a principal crítica teórica enfrentada pela Teoria Monoaminérgica clássica?", hint: "Diferença temporal entre nível químico e efeito clínico.", options: ["Os antidepressivos bloqueiam os neurotransmissores, mas o paciente melhora.", "A teoria não leva em conta o papel da dopamina na depressão.", "Os fármacos não conseguem atravessar a barreira hematoencefálica.", "O aumento dos neurotransmissores ocorre em poucas horas, mas a melhora clínica leva de 2 a 4 semanas."], correct: 3 },
    { topicId: "depressao_teorias", question: "Para explicar a latência de semanas até a melhora clínica da depressão, a psicofarmacologia aponta para mecanismos adaptativos lentos, tais como:", hint: "Alteração nos receptores.", options: ["A morte imediata de neurônios serotoninérgicos.", "A dessensibilização (down-regulation) de autorreceptores.", "A rápida exclusão do cálcio intracelular.", "O bloqueio imediato dos receptores histamínicos."], correct: 1 },
    { topicId: "depressao_teorias", question: "O que postula a Teoria Neurotrófica da Depressão em relação ao estresse crônico?", hint: "Falta de 'adubo' no cérebro.", options: ["O estresse eleva excessivamente os fatores neurotróficos, causando exaustão.", "O estresse diminui a expressão do fator neurotrófico derivado do encéfalo (BDNF), o que causa atrofia sináptica.", "O estresse acelera a recaptação de noradrenalina, impedindo a neurogênese.", "O estresse bloqueia exclusivamente a junção neuromuscular."], correct: 1 },
    { topicId: "depressao_teorias", question: "A rigidez cognitiva e o declínio cognitivo associados a quadros depressivos severos podem ser explicados, segundo a Teoria Neurotrófica, por:", hint: "Dano estrutural e funcional nas redes neurais.", options: ["Excesso de dopamina no córtex pré-frontal.", "Prejuízo nos eventos neuroplásticos devido à falta de fatores neurotróficos (BDNF).", "Efeito colateral inevitável dos antidepressivos tricíclicos.", "Inibição rápida dos receptores GABAérgicos."], correct: 1 },
    { topicId: "depressao_teorias", question: "Sob a ótica da Teoria Neurotrófica, qual é o mecanismo de restauração funcional provocado pelos antidepressivos a longo prazo?", hint: "Faz crescer as ligações de novo.", options: ["Eles elevam os níveis de BDNF, restaurando a sinaptogênese e as redes neuronais.", "Eles diminuem o BDNF para reduzir o estresse oxidativo.", "Eles desativam as vias excitatórias do glutamato.", "Eles estimulam diretamente a liberação de cálcio nas vesículas."], correct: 0 },
    { topicId: "antidepressivos", question: "Os Antidepressivos Tricíclicos (ADTs), como a Amitriptilina, aumentam a disponibilidade de monoaminas através de qual mecanismo?", hint: "Impedem a faxina das fendas sinápticas.", options: ["Inibição seletiva apenas do transportador de serotonina.", "Bloqueio dos receptores dopaminérgicos D2.", "Estimulação da degradação enzimática na fenda sináptica.", "Bloqueio da recaptação de Serotonina e Noradrenalina."], correct: 3 },
    { topicId: "antidepressivos", question: "Por que os Inibidores Seletivos de Recaptação de Serotonina (ISRS) são clinicamente preferidos em detrimento dos Antidepressivos Tricíclicos (ADTs)?", hint: "Questões de tolerabilidade.", options: ["Os ISRS curam a depressão em poucas horas.", "Os ISRS são significativamente mais eficazes que os Tricíclicos em depressões típicas.", "Os ISRS possuem um perfil de segurança maior, sendo bem tolerados e com baixíssima toxicidade em superdosagem.", "Os ISRS atuam bloqueando receptores histamínicos e alfa-adrenérgicos."], correct: 2 },
    { topicId: "antidepressivos", question: "Efeitos colaterais indesejados dos Tricíclicos, como boca seca, constipação e visão turva, resultam do bloqueio inadvertido de quais receptores?", hint: "Receptores do sistema nervoso parassimpático.", options: ["Colinérgicos (muscarínicos).", "Histamínicos.", "Alfa-1 adrenérgicos.", "Serotoninérgicos."], correct: 0 },
    { topicId: "antidepressivos", question: "O intenso ganho de peso e a sedação frequentemente relatados por usuários de Antidepressivos Tricíclicos ocorrem devido ao bloqueio de receptores:", hint: "Alvo semelhante ao dos antialérgicos.", options: ["Muscarínicos.", "Glutamatérgicos.", "GABAérgicos.", "Histamínicos."], correct: 3 },
    { topicId: "antidepressivos", question: "Um idoso em tratamento com Tricíclico levanta-se rapidamente e sofre hipotensão postural. Esse efeito deve-se ao antagonismo de:", hint: "Regula o tônus dos vasos sanguíneos.", options: ["Autorreceptores 5-HT1A.", "Receptores colinérgicos.", "Receptores alfa-1 adrenérgicos.", "Canais de cálcio voltagem-dependentes."], correct: 2 },
    { topicId: "antidepressivos", question: "Ao comparar os Antidepressivos Tricíclicos (ADTs) com os Inibidores Seletivos (ISRS) em relação à eficácia no tratamento da depressão típica, conclui-se que:", hint: "Não é a cura que muda, é a tolerância.", options: ["Os ADTs são ineficazes comparados aos ISRS.", "Os ISRS não apresentam eficácia clínica comprovada.", "Ambas as classes apresentam mesma eficácia terapêutica, diferindo substancialmente no perfil de efeitos colaterais.", "Os ADTs atuam na teoria neurotrófica, enquanto os ISRS atuam na teoria monoaminérgica."], correct: 2 },
    { topicId: "neurotransmissores", question: "Além do envolvimento fundamental no aprendizado e memória no SNC, qual é a outra principal área de ação da Acetilcolina detalhada na psicofarmacologia básica?", hint: "O que ela faz fora do cérebro?", options: ["Regulação exclusiva do sono REM.", "Ação na junção neuromuscular do sistema periférico, causando contração muscular.", "Supressão aguda da resposta de luta ou fuga.", "Inibição da plasticidade sináptica a longo prazo."], correct: 1 },
    { topicId: "antidepressivos", question: "Qual afirmação caracteriza corretamente a letalidade em caso de superdosagem ao compararmos classes de antidepressivos?", hint: "Risco cardíaco.", options: ["Os ISRS apresentam toxicidade cardíaca severa e alta letalidade.", "Nenhuma das classes apresenta risco de toxicidade.", "Os Antidepressivos Tricíclicos apresentam alta toxicidade cardíaca e letalidade em superdosagem, ao contrário dos ISRS.", "Os ISRS são fatais porque causam bloqueio alfa-1 adrenérgico irreversível."], correct: 2 }
  ]
};
