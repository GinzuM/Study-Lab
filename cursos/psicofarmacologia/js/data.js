// =========================================================================
// BANCO DE DADOS: PSICOFARMACOLOGIA CLÍNICA & NEUROCIÊNCIAS
// =========================================================================

const studyData = {
  // 1. TÓPICOS E EXPLICAÇÕES
  topics: [
    { 
      id: "sinapse", 
      title: "1. Comunicação no SN & Sinapses Químicas", 
      content: `**Explicação Detalhada:**
      A transmissão de informação entre os neurônios ocorre predominantemente por sinapses químicas. Quando o impulso elétrico (potencial de ação) chega ao terminal pré-sináptico, abrem-se canais de Cálcio dependentes de voltagem (Ca²⁺). O influxo rápido de cálcio interage com proteínas vesiculares (complexo SNARE) e causa a **exocitose** das vesículas, liberando neurotransmissores na fenda sináptica.
      Ao se ligarem aos receptores na membrana pós-sináptica, geram eventos pós-sinápticos excitatórios ou inibitórios:
      - **PPSE (Potencial Pós-Sináptico Excitatório):** Influxo de Sódio (Na⁺), que despolariza a membrana (fica mais positiva) e aproxima o neurônio do limiar de disparo.
      - **PPSI (Potencial Pós-Sináptico Inibitório):** Influxo de Cloreto (Cl⁻) ou efluxo de Potássio (K⁺), que hiperpolariza a membrana (fica mais negativa) e afasta o neurônio do limiar de disparo, silenciando a célula.
      
      **Modo Simplificado:**
      - **Cálcio (Ca²⁺):** É o gatilho obrigatório que faz o neurônio liberar as vesículas na fenda.
      - **PPSE (Excitatório):** Acelera e liga o neurônio seguinte (entra Sódio).
      - **PPSI (Inibitório):** Freia e silencia o neurônio seguinte (entra Cloreto ou sai Potássio).`, 
      mnemonic: "💡 Mnemônico: 'PPSE aproxima do zero (+ dispara), PPSI afasta o neurônio (- silencia)'." 
    },
    { 
      id: "agonista_antagonista", 
      title: "2. Farmacodinâmica: Agonistas vs Antagonistas", 
      content: `**Explicação Detalhada:**
      - **Fármaco Agonista:** Possui **afinidade** (capacidade de se ligar ao receptor) e **atividade intrínseca** (eficácia para ativar o receptor e disparar a resposta biológica celular). Funciona como uma cópia da chave original que entra na fechadura e abre a porta.
      - **Fármaco Antagonista:** Possui **afinidade** pelo receptor, mas **NÃO possui atividade intrínseca** (eficácia zero). Ele apenas ocupa o sítio de ligação e bloqueia fisicamente o acesso do neurotransmissor natural ou de outros agonistas.
      
      **Exemplo Clínico:** Na psicose (esquizofrenia), há excesso de ação da dopamina na via mesolímbica. Os medicamentos antipsicóticos atuam como *antagonistas* dos receptores D₂, tampando o receptor para impedir a dopamina de causar alucinações e delírios.
      
      **Modo Simplificado:**
      - **Agonista:** Imita o neurotransmissor e liga o receptor.
      - **Antagonista:** Chave quebrada na fechadura: não liga nada e impede que a chave verdadeira entre.`, 
      mnemonic: "💡 Mnemônico: O Agonista é a chave que abre a porta. O Antagonista é a chave quebrada na fechadura." 
    },
    { 
      id: "neurotransmissores", 
      title: "3. Principais Neurotransmissores & Acetilcolina", 
      content: `**Explicação Detalhada:**
      - **Acetilcolina (ACh):** Possui dupla atuação crucial: no Sistema Nervoso Central (córtex e hipocampo), regula a memória, atenção e aprendizado. No Sistema Nervoso Periférico (junção neuromuscular), é o neurotransmissor responsável direto pela contração dos músculos esqueléticos.
      - **Glutamato:** Principal neurotransmissor excitatório do SNC, essencial para a plasticidade sináptica e memória (LTP). Em excesso patológico, causa excitotoxicidade (morte neuronal).
      - **GABA:** Principal neurotransmissor inibitório do SNC. Abre canais de Cl⁻ (PPSI), gerando redução da ansiedade, calma e sedação (alvo dos benzodiazepínicos).
      - **Serotonina (5-HT):** Regula humor, sono, saciedade alimentar, dor e controle de impulsos.
      - **Noradrenalina (NA):** Regula o estado de alerta, vigília, foco atencional e resposta simpática de luta ou fuga.
      - **Dopamina (DA):** Controla a motivação, prazer/recompensa (via mesolímbica), cognição (via mesocortical) e controle motor fino (via nigroestriatal).
      
      **Modo Simplificado:**
      - **Acetilcolina:** Memória no cérebro + Contração nos músculos.
      - **Glutamato:** Acelerador geral.
      - **GABA:** Freio/Calmante geral.`, 
      mnemonic: "💡 Mnemônico: 'GABA desliga a tomada (inibitório); GLUtamato gruda o circuito (excitação); Acetilcolina Ativa a Contração e a Memória'." 
    },
    { 
      id: "psicose_dependencia", 
      title: "4. Doenças Clínicas: Psicose, Dependência e Alzheimer", 
      content: `**Explicação Detalhada:**
      1. **Psicose e Esquizofrenia (Vias Dopaminérgicas):**
         - **Via Mesolímbica:** A hiperatividade de dopamina nos receptores D₂ desta via produz os **sintomas positivos** da psicose (delírios e alucinações). Os antipsicóticos funcionam como antagonistas D₂ bloqueando essa hiperatividade.
         - **Via Mesocortical:** A hipoatividade (falta) de dopamina no córtex pré-frontal causa os **sintomas negativos e cognitivos** (apatia, embotamento afetivo, déficit de atenção).
         - **Via Nigroestriatal:** Controla os movimentos. Quando os antipsicóticos bloqueiam receptores D₂ nessa via, surgem efeitos colaterais motores (parkinsonismo medicamentoso / sintomas extrapiramidais).
      2. **Dependência Química (Circuito de Recompensa):**
         - Todas as substâncias de abuso convergem para a **via mesolímbica**, provocando uma liberação abrupta e suprafisiológica de **Dopamina** da Área Tegmentar Ventral (ATV) para o **Núcleo Accumbens**.
         - O uso crônico leva à dessensibilização e redução (*down-regulation*) dos receptores D₂, gerando tolerância (necessidade de doses maiores), anedonia para prazeres naturais e perda do freio inibitório frontal (fissura/compulsão).
      3. **Doença de Alzheimer (Déficit Colinérgico):**
         - Causada pela degeneração de neurônios produtores de **Acetilcolina** no Núcleo Basal de Meynert, levando à perda de memória recente. O tratamento usa inibidores da enzima acetilcolinesterase (ex: Donepezila) para aumentar a acetilcolina disponível na fenda.
      
      **Modo Simplificado:**
      - **Psicose:** Excesso de dopamina na via mesolímbica causa alucinações e delírios (tratado com antagonista D₂).
      - **Dependência/Vício:** Explosão artificial de dopamina no Núcleo Accumbens que vicia o cérebro e reduz receptores D₂ com o tempo.
      - **Alzheimer:** Morte de neurônios de Acetilcolina, destruindo a memória recente.`, 
      mnemonic: "💡 Mnemônico: 'Mesolímbica no topo = Delírio e Vício (Dopamina); Acetilcolina no chão = Esquecimento (Alzheimer)'." 
    },
    { 
      id: "depressao_teorias", 
      title: "5. Teorias Neurobiológicas da Depressão", 
      content: `**Explicação Detalhada:**
      1. **Teoria Monoaminérgica:** Propõe que a depressão é causada por um déficit funcional das monoaminas (Serotonina, Noradrenalina e Dopamina) na fenda sináptica.
         - *Crítica (Paradoxo Temporal):* Os antidepressivos elevam as monoaminas na fenda em poucas horas após o primeiro comprimido, mas a melhora clínica do humor demora de 2 a 4 semanas. Essa latência ocorre porque o efeito terapêutico depende da **dessensibilização (down-regulation) lenta de autorreceptores inibitórios pré-sinápticos**.
      2. **Teoria Neurotrófica:** O estresse crônico eleva o cortisol e reduz a expressão do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*), causando atrofia dendrítica, perda de sinapses no hipocampo e rigidez cognitiva. Os antidepressivos estimulam cascatas intracelulares que voltam a elevar o BDNF, restaurando a neuroplasticidade e a sinaptogênese após algumas semanas.
      
      **Modo Simplificado:**
      - **Monoaminérgica:** Falta serotonina/noradrenalina. O remédio demora de 2 a 4 semanas para fazer efeito porque os receptores precisam ser recalibrados.
      - **Neurotrófica:** O estresse secou os ramos dos neurônios por falta de adubo (BDNF). O antidepressivo repõe o BDNF e reconstrói as sinapses.`, 
      mnemonic: "💡 Mnemônico: 'Mais do que faltar neurotransmissor, falta adubo nos neurônios (BDNF)'." 
    },
    { 
      id: "antidepressivos", 
      title: "6. Medicamentos da Depressão: Tricíclicos (ADTs) vs ISRS", 
      content: `**Explicação Detalhada:**
      Ambas as classes possuem a **mesma eficácia clínica** no tratamento da depressão típica, mas diferem radicalmente na seletividade e segurança:
      - **Antidepressivos Tricíclicos (ADTs - ex: Amitriptilina, Clomipramina):**
        - *Mecanismo:* Bloqueiam a recaptação de Serotonina e Noradrenalina.
        - *Efeitos Colaterais:* Por serem fármacos não seletivos, bloqueiam outros receptores importantes:
          1. Bloqueio Colinérgico Muscarínico: boca seca, constipação intestinal, retenção urinária e visão turva.
          2. Bloqueio Histamínico H₁: sedação intensa (sonolência) e ganho de peso.
          3. Bloqueio Adrenérgico α₁: hipotensão postural (tontura e queda de pressão ao levantar).
        - *Perigo Crítico:* Alta cardiotoxicidade e letalidade em caso de superdosagem (bloqueiam canais de sódio cardíacos causando arritmias fatais).
      - **Inibidores Seletivos da Recaptação de Serotonina (ISRS - ex: Fluoxetina, Sertralina, Escitalopram):**
        - *Mecanismo:* Inibem seletivamente o transportador de Serotonina (SERT), sem bloquear receptores muscarínicos, histamínicos ou alfa-adrenérgicos.
        - *Vantagem Clínica:* Primeira escolha atual porque têm perfil de efeitos colaterais muito mais tolerável e **baixíssima letalidade em superdosagem**.
      
      **Modo Simplificado:**
      - **Tricíclicos:** Funcionam bem, mas atiram para todo lado (dão boca seca, sono, queda de pressão e risco de morte cardíaca em overdose).
      - **ISRS:** Mesma eficácia dos Tricíclicos, porém seletivos na serotonina e muito mais seguros.`, 
      mnemonic: "💡 Mnemônico: 'Tricíclico = Três efeitos chatos (sono, boca seca, pressão cai) e perigo no coração. ISRS = Seletivo e Seguro'." 
    }
  ],

  // 2. ESTRUTURA DO MAPA MENTAL
  tree: [
    { id: "sinapse", title: "1. Sinapses e PPSE / PPSI", level: 1, unlocked: true },
    { id: "agonista_antagonista", title: "2. Agonistas vs Antagonistas", level: 2, unlocked: true },
    { id: "neurotransmissores", title: "3. Neurotransmissores e ACh", level: 2, unlocked: true },
    { id: "psicose_dependencia", title: "4. Psicose, Dependência e Clínica", level: 3, unlocked: true },
    { id: "depressao_teorias", title: "5. Teorias da Depressão (BDNF)", level: 3, unlocked: true },
    { id: "antidepressivos", title: "6. Antidepressivos (ADTs vs ISRS)", level: 4, unlocked: true }
  ],

  // 3. FLASHCARDS (20 Cartões Cobrindo Todo o Conteúdo)
  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual íon desencadeia a exocitose das vesículas no terminal pré-sináptico?", answer: "Íon Cálcio (Ca²⁺), que entra por canais dependentes de voltagem após a despolarização." },
    { topicId: "sinapse", category: "Sinapses", question: "Qual a diferença de efeito entre PPSE e PPSI na membrana pós-sináptica?", answer: "PPSE despolariza a membrana (entrada de Na⁺, facilita o disparo); PPSI hiperpolariza a membrana (entrada de Cl⁻ ou saída de K⁺, inibe o disparo)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que caracteriza um fármaco Antagonista?", answer: "Liga-se ao receptor com afinidade (ocupa o sítio), mas tem atividade intrínseca zero, bloqueando a ação dos agonistas." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que caracteriza um fármaco Agonista?", answer: "Possui afinidade e atividade intrínseca, encaixando no receptor e ativando a resposta biológica celular." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Quais são as duas funções principais da Acetilcolina (no SNC e no SNP)?", answer: "No SNC atua na memória, atenção e aprendizado; no SNP (junção neuromuscular) dispara a contração dos músculos esqueléticos." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Quais são o principal neurotransmissor excitatório e o principal inibitório do SNC?", answer: "Glutamato (excitatório) e GABA (inibitório)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual neurotransmissor regula humor, sono, apetite e impulsividade?", answer: "Serotonina (5-HT)." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual alteração dopaminérgica causa os sintomas positivos da esquizofrenia (delírios e alucinações)?", answer: "Hiperatividade dopaminérgica nos receptores D₂ da via Mesolímbica." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual via dopaminérgica está hipoativa nos sintomas negativos e cognitivos da esquizofrenia?", answer: "Via Mesocortical (projeção para o córtex pré-frontal)." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual é o mecanismo de ação principal dos medicamentos antipsicóticos?", answer: "Atuam como antagonistas dos receptores dopaminérgicos D₂ na via mesolímbica." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "Qual circuito e estrutura cerebral são o centro da dependência química?", answer: "A via mesolímbica de recompensa, especificamente a liberação de dopamina no Núcleo Accumbens." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "O que acontece com os receptores D₂ após o uso crônico de drogas de abuso?", answer: "Sofrem dessensibilização e redução (down-regulation), causando tolerância e perda de prazer em atividades comuns." },
    { topicId: "psicose_dependencia", category: "Clínica / Alzheimer", question: "A degeneração de qual neurotransmissor está diretamente associada ao déficit de memória na Doença de Alzheimer?", answer: "Acetilcolina (morte de neurônios colinérgicos no Núcleo Basal de Meynert)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual a crítica principal (paradoxo temporal) à Teoria Monoaminérgica da depressão?", answer: "Os antidepressivos aumentam monoaminas na fenda em horas, mas a melhora clínica leva de 2 a 4 semanas." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que explica a demora de 2 a 4 semanas para os antidepressivos fazerem efeito clínico?", answer: "Adaptações neuroplásticas lentas: dessensibilização (down-regulation) de autorreceptores e aumento da expressão de BDNF." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que postula a Teoria Neurotrófica sobre o impacto do estresse crônico na depressão?", answer: "O estresse reduz o BDNF, causando atrofia sináptica no hipocampo e rigidez cognitiva." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual é o mecanismo de ação terapêutico dos Antidepressivos Tricíclicos?", answer: "Bloqueiam a recaptação de Serotonina (SERT) e Noradrenalina (NET)." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Boca seca, constipação e visão turva nos Tricíclicos ocorrem pelo bloqueio de quais receptores?", answer: "Receptores Colinérgicos Muscarínicos." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os ISRS substituíram os Tricíclicos como primeira escolha clínica?", answer: "Possuem a mesma eficácia clínica, mas são seletivos, causando muito menos efeitos colaterais e baixíssima letalidade em superdosagem." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual o grande risco associado à superdosagem de Antidepressivos Tricíclicos?", answer: "Alta cardiotoxicidade (arritmias cardíacas graves) e elevada letalidade." }
  ],

  // 4. QUIZ (36 Questões Completas)
  quiz: [
    // Originais e Roteiro Base
    { topicId: "sinapse", question: "O que caracteriza o Potencial Pós-Sináptico Inibitório (PPSI)?", hint: "Envolve Cl⁻ ou K⁺ e deixa a célula mais negativa.", options: ["Despolarização para o limiar", "Hiperpolarização da membrana, dificultando o disparo", "Fusão acelerada de vesículas", "Abertura de canais de sódio"], correct: 1 },
    { topicId: "agonista_antagonista", question: "Um fármaco que se liga ao receptor e bloqueia a ação do neurotransmissor natural sem ativar o receptor é:", hint: "Bloqueia a fechadura.", options: ["Agonista pleno", "Agonista parcial", "Antagonista", "Modulador positivo"], correct: 2 },
    { topicId: "neurotransmissores", question: "Qual neurotransmissor é associado prioritariamente à via mesolímbica de recompensa e prazer?", hint: "Via mesolímbica.", options: ["Dopamina", "Acetilcolina", "GABA", "Glicina"], correct: 0 },
    { topicId: "depressao_teorias", question: "A demora de 2 a 4 semanas na melhora clínica com antidepressivos deve-se a:", hint: "Processos adaptativos lentos.", options: ["Má absorção gástrica", "Adaptações lentas como down-regulation de receptores e expressão de BDNF", "Destruição de neurônios", "Falta de cálcio"], correct: 1 },
    { topicId: "sinapse", question: "Qual processo celular no terminal pré-sináptico é diretamente engatilhado pelo influxo de cálcio (Ca²⁺) dependente de voltagem?", hint: "Leva as vesículas a fundirem-se.", options: ["Despolarização imediata do axônio pós-sináptico.", "Síntese de novas moléculas de neurotransmissores.", "Exocitose das vesículas sinápticas, liberando os neurotransmissores na fenda.", "Bloqueio imediato da recaptação de noradrenalina."], correct: 2 },
    { topicId: "sinapse", question: "Como o Potencial Pós-Sináptico Excitatório (PPSE) atua na membrana da célula receptora?", hint: "Torna a célula mais propensa a disparar.", options: ["Causa despolarização (geralmente por influxo de Na⁺), aproximando a célula do limiar de disparo.", "Causa hiperpolarização aguda, silenciando o neurônio.", "Impede a abertura de canais de cálcio voltagem-dependentes.", "Induz a liberação reversa de neurotransmissores inibitórios."], correct: 0 },
    { topicId: "sinapse", question: "O Potencial Pós-Sináptico Inibitório (PPSI) afasta o neurônio do limiar de disparo através de qual mecanismo iônico?", hint: "Gera carga negativa dentro da célula.", options: ["Exocitose de vesículas de sódio.", "Influxo de Cloreto (Cl⁻) ou efluxo de Potássio (K⁺), causando hiperpolarização.", "Fechamento prematuro dos canais de GABA.", "Degradação massiva do fator neurotrófico BDNF."], correct: 1 },
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
    { topicId: "antidepressivos", question: "Os Antidepressivos Tricíclicos (ADTs), como a Amitriptilina, aumentam a disponibilidade de monoaminas através de qual mecanismo?", hint: "Impedem a faxina das fendas sinápticas.", options: ["Inibição seletiva apenas do transportador de serotonina.", "Bloqueio dos receptores dopaminérgicos D₂.", "Estimulação da degradação enzimática na fenda sináptica.", "Bloqueio da recaptação de Serotonina e Noradrenalina."], correct: 3 },
    { topicId: "antidepressivos", question: "Por que os Inibidores Seletivos de Recaptação de Serotonina (ISRS) são clinicamente preferidos em detrimento dos Antidepressivos Tricíclicos (ADTs)?", hint: "Questões de tolerabilidade.", options: ["Os ISRS curam a depressão em poucas horas.", "Os ISRS são significativamente mais eficazes que os Tricíclicos em depressões típicas.", "Os ISRS possuem um perfil de segurança maior, sendo bem tolerados e com baixíssima toxicidade em superdosagem.", "Os ISRS atuam bloqueando receptores histamínicos e alfa-adrenérgicos."], correct: 2 },
    { topicId: "antidepressivos", question: "Efeitos colaterais indesejados dos Tricíclicos, como boca seca, constipação e visão turva, resultam do bloqueio inadvertido de quais receptores?", hint: "Receptores do sistema nervoso parassimpático.", options: ["Colinérgicos (muscarínicos).", "Histamínicos.", "Alfa-1 adrenérgicos.", "Serotoninérgicos."], correct: 0 },
    { topicId: "antidepressivos", question: "O intenso ganho de peso e a sedação frequentemente relatados por usuários de Antidepressivos Tricíclicos ocorrem devido ao bloqueio de receptores:", hint: "Alvo semelhante ao dos antialérgicos.", options: ["Muscarínicos.", "Glutamatérgicos.", "GABAérgicos.", "Histamínicos."], correct: 3 },
    { topicId: "antidepressivos", question: "Um idoso em tratamento com Tricíclico levanta-se rapidamente e sofre hipotensão postural. Esse efeito deve-se ao antagonismo de:", hint: "Regula o tônus dos vasos sanguíneos.", options: ["Autorreceptores 5-HT1A.", "Receptores colinérgicos.", "Receptores alfa-1 adrenérgicos.", "Canais de cálcio voltagem-dependentes."], correct: 2 },
    { topicId: "antidepressivos", question: "Ao comparar os Antidepressivos Tricíclicos (ADTs) com os Inibidores Seletivos (ISRS) em relação à eficácia no tratamento da depressão típica, conclui-se que:", hint: "Não é a cura que muda, é a tolerância.", options: ["Os ADTs são ineficazes comparados aos ISRS.", "Os ISRS não apresentam eficácia clínica comprovada.", "Ambas as classes apresentam mesma eficácia terapêutica, diferindo substancialmente no perfil de efeitos colaterais.", "Os ADTs atuam na teoria neurotrófica, enquanto os ISRS atuam na teoria monoaminérgica."], correct: 2 },
    { topicId: "neurotransmissores", question: "Além do envolvimento fundamental no aprendizado e memória no SNC, qual é a outra principal área de ação da Acetilcolina detalhada na psicofarmacologia básica?", hint: "O que ela faz fora do cérebro?", options: ["Regulação exclusiva do sono REM.", "Ação na junção neuromuscular do sistema periférico, causando contração muscular.", "Supressão aguda da resposta de luta ou fuga.", "Inibição da plasticidade sináptica a longo prazo."], correct: 1 },
    { topicId: "antidepressivos", question: "Qual afirmação caracteriza corretamente a letalidade em caso de superdosagem ao compararmos classes de antidepressivos?", hint: "Risco cardíaco.", options: ["Os ISRS apresentam toxicidade cardíaca severa e alta letalidade.", "Nenhuma das classes apresenta risco de toxicidade.", "Os Antidepressivos Tricíclicos apresentam alta toxicidade cardíaca e letalidade em superdosagem, ao contrário dos ISRS.", "Os ISRS são fatais porque causam bloqueio alfa-1 adrenérgico irreversível."], correct: 2 },

    // Questões Clínicas: Psicose, Dependência e Alzheimer
    { topicId: "psicose_dependencia", question: "Em pacientes com Esquizofrenia, os sintomas positivos (delírios persecutórios e alucinações auditivas) estão diretamente relacionados a qual alteração neurobiológica?", hint: "Excesso de dopamina em uma via subcortical.", options: ["Hipoatividade colinérgica no tronco encefálico.", "Hiperatividade da transmissão dopaminérgica nos receptores D₂ da via mesolímbica.", "Excesso de GABA no córtex pré-frontal.", "Bloqueio de canais de sódio periféricos."], correct: 1 },
    { topicId: "psicose_dependencia", question: "Os sintomas negativos da esquizofrenia (apatia, embotamento afetivo e déficits cognitivos) associam-se funcionalmente a:", hint: "Falta de dopamina no córtex pré-frontal.", options: ["Hipoatividade dopaminérgica na via mesocortical.", "Excesso de serotonina na medula espinhal.", "Hiperatividade histaminérgica hipotalâmica.", "Aumento de acetilcolina na placa motora."], correct: 0 },
    { topicId: "psicose_dependencia", question: "Qual o mecanismo de ação principal pelo qual medicamentos antipsicóticos (como o Haloperidol) controlam delírios e alucinações?", hint: "Eles tampam os receptores de dopamina.", options: ["Atuam como agonistas plenos de glutamato.", "Atuam como antagonistas competitivos dos receptores dopaminérgicos D₂ na via mesolímbica.", "Inibem a degradação de acetilcolina no hipocampo.", "Estimulam a liberação massiva de noradrenalina."], correct: 1 },
    { topicId: "psicose_dependencia", question: "Quando um antipsicótico bloqueia excessivamente os receptores D₂ na via Nigroestriatal, qual efeito colateral clínico o paciente desenvolve?", hint: "Via que controla os movimentos.", options: ["Euforia extrema.", "Sintomas extrapiramidais (como parkinsonismo medicamentoso e rigidez motora).", "Melhora imediata da memória episódica.", "Queda da prolactina sanguínea."], correct: 1 },
    { topicId: "psicose_dependencia", question: "Na neurobiologia da dependência química, todas as drogas de abuso convergem para um mesmo mecanismo no circuito de recompensa cerebral. Qual é ele?", hint: "Ocorre entre a ATV e o Núcleo Accumbens.", options: ["Descarga abrupta e suprafisiológica de dopamina no Núcleo Accumbens (via mesolímbica).", "Bloqueio total da síntese de serotonina.", "Aumento permanente dos receptores GABA-A.", "Destruição seletiva dos neurônios motores."], correct: 0 },
    { topicId: "psicose_dependencia", question: "O uso crônico de substâncias de abuso gera tolerância e perda de prazer nas atividades cotidianas (anedonia) devido a qual neuroadaptação?", hint: "O cérebro tenta se defender do excesso de dopamina.", options: ["Multiplicação exagerada de receptores colinérgicos.", "Dessensibilização e redução (down-regulation) dos receptores dopaminérgicos D₂ no estriado.", "Aumento da produção de BDNF no hipocampo.", "Hiperpolarização permanente do nervo vago."], correct: 1 },
    { topicId: "psicose_dependencia", question: "Na Doença de Alzheimer, o comprometimento severo da memória recente decorre da degeneração de neurônios produtores de qual neurotransmissor?", hint: "É o neurotransmissor da memória e da contração muscular.", options: ["Dopamina na via tuberoinfundibular.", "GABA no cerebelo.", "Acetilcolina nas projeções do Núcleo Basal de Meynert para o hipocampo e córtex.", "Noradrenalina adrenal."], correct: 2 }
  ]
};
