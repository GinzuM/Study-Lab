// =========================================================================
// CAMADA DE DADOS TEÓRICOS (dt_psicofarmacologia.js)
// Tópicos, Mapa Mental e Flashcards revisados para Português do Brasil (PT-BR)
// =========================================================================

const studyData = {
  topics: [
    {
      id: "sinapse",
      title: "1. Comunicação Neural & Fisiologia da Sinapse Química",
      content: `A transmissão da informação no Sistema Nervoso Central (SNC) ocorre prioritariamente por sinapses químicas. As etapas sequenciais são:
      1. **Despolarização Pré-Sináptica:** A chegada do potencial de ação ao terminal axonal despolariza a membrana.
      2. **Influxo de Cálcio:** Abrem-se canais de Cálcio dependentes de voltagem (Ca²⁺). O influxo rápido deste íon é o gatilho biofísico mandatório.
      3. **Exocitose Vesicular:** O Ca²⁺ interage com proteínas do complexo SNARE, provocando a fusão das vesículas sinápticas e liberação dos neurotransmissores na fenda.
      4. **Ativação Pós-Sináptica:** Os ligantes acoplam-se a receptores específicos gerando eventos elétricos:
         - **PPSE (Potencial Pós-Sináptico Excitatório):** Influxo de cátions (como o Sódio - Na⁺), despolarizando a membrana e aproximando o neurônio do limiar de disparo.
         - **PPSI (Potencial Pós-Sináptico Inibitório):** Influxo de ânions (Cloreto - Cl⁻) ou efluxo de cátions (Potássio - K⁺), hiperpolarizando a célula e silenciando o disparo.

      **Exemplo Prático:** Quando você toca em algo quente, o impulso elétrico desce pelo axônio, abre as portas de cálcio, solta o neurotransmissor na fenda e avisa o próximo neurônio para afastar a mão rapidamente.

      **Modo Simplificado:**
      - **Cálcio (Ca²⁺):** O gatilho que abre as portas para as vesículas descarregarem na fenda.
      - **PPSE:** Acelera o neurônio (o sódio entra, fica positivo e dispara).
      - **PPSI:** Freia o neurônio (o cloreto entra ou o potássio sai, fica negativo e cessa o sinal).`,
      mnemonic: "💡 Mnemônico: 'PPSE aproxima do zero (+ dispara), PPSI afasta o neurônio (- silencia)'."
    },
    {
      id: "agonista_antagonista",
      title: "2. Princípios Farmacodinâmicos: Agonistas vs. Antagonistas",
      content: `A farmacodinâmica estuda o mecanismo de ação dos fármacos nos receptores celulares:
      - **Agonista Pleno:** Fármaco que possui **afinidade** (capacidade de se ligar ao sítio ativo do receptor) e **alta atividade intrínseca** (eficácia de 100% em alterar a conformação do receptor e ativar a cascata intracelular).
      - **Agonista Parcial:** Possui afinidade, mas a sua atividade intrínseca é submáxima. Na presença de excesso de agonista pleno, atua como um 'freio' ou antagonista relativo.
      - **Antagonista Silencioso:** Possui **afinidade** pelo receptor, mas a sua **atividade intrínseca é nula (0%)**. Ocupa a fenda sem ativá-la, bloqueando o acesso de agonistas endógenos.
      
      **Exemplo Prático:** Antipsicóticos clássicos (como o Haloperidol) atuam como antagonistas puros de receptores dopaminérgicos D₂; eles encaixam-se na fechadura mas não giram a chave, impedindo que a dopamina em excesso se ligue.

      **Modo Simplificado:**
      - **Agonista:** Chave que entra na fechadura e gira o trinco, ligando o motor da célula.
      - **Antagonista:** Chave quebrada que emperra na fechadura; não liga nada e impede que qualquer outra chave entre.`,
      mnemonic: "💡 Mnemônico: 'Agonista liga o motor; Antagonista quebra a chave na ignição'."
    },
    {
      id: "neurotransmissores",
      title: "3. Neurotransmissores Clássicos & Ações Centrais",
      content: `Os principais mensageiros químicos do encéfalo exercem funções regulatórias específicas:
      - **Glutamato:** Principal neurotransmissor excitatório cerebral. Vital para a memória e aprendizado (LTP). Em excesso crônico causa **excitotoxicidade** (morte neuronal por influxo descontrolado de Ca²⁺).
      - **GABA (Ácido Gama-Aminobutírico):** Principal inibidor encefálico. Seus receptores abrem canais de Cl⁻, promovendo sedação, ansiólise e estabilização de crises.
      - **Serotonina (5-HT):** Regulação do humor, impulsividade, saciedade alimentar e ciclos de sono.
      - **Noradrenalina (NA):** Alerta, prontidão de luta/fuga, foco, vigília e regulação da pressão arterial.
      - **Dopamina (DA):** Vias de recompensa e prazer, tônus motor extrapiramidal e funções executivas.
      - **Acetilcolina (ACh):** No SNC, atua na atenção e consolidação da memória. No SNP, atua na junção neuromuscular disparando a contração dos músculos esqueléticos.

      **Exemplo Prático:** Durante um susto, a noradrenalina dispara o coração e o alerta; logo em seguida, o GABA tenta acalmar o sistema para retornar ao equilíbrio.

      **Modo Simplificado:**
      - **Glutamato:** Acelerador geral do cérebro.
      - **GABA:** Freio de mão geral (calmante).
      - **Acetilcolina:** Foco na cabeça e força no músculo.`,
      mnemonic: "💡 Mnemônico: 'GABA desliga a tomada; Glutamato cola o circuito; Acetilcolina ativa a contração'."
    },
    {
      id: "psicose_dependencia",
      title: "4. Vias Dopaminérgicas: Psicose & Dependência",
      content: `A dopamina organiza quatro vias centrais e está no centro de importantes patologias:
      1. **Esquizofrenia (Hipótese Dopaminérgica):**
         - **Via Mesolímbica:** Hiperatividade dopaminérgica gera os **sintomas positivos** (delírios e alucinações). Os antipsicóticos bloqueiam receptores D₂ desta via.
         - **Via Mesocortical:** Hipoatividade dopaminérgica correlaciona-se com os **sintomas negativos** (embotamento afetivo, apatia) e déficits cognitivos.
         - **Via Nigroestriatal:** Controla a motricidade. O bloqueio excessivo de D₂ induz efeitos extrapiramidais (parkinsonismo).
      2. **Neurobiologia da Adição:**
         - Ocorre no **Circuito de Recompensa Mesolímbico**. Substâncias de abuso causam picos rápidos e suprafisiológicos de dopamina no **Núcleo Accumbens**. O uso crônico gera dessensibilização (tolerância).
      3. **Déficit Colinérgico (Alzheimer):**
         - A morte seletiva de neurônios no Núcleo Basal de Meynert causa falta severa de acetilcolina.

      **Exemplo Prático:** O uso de drogas de abuso inunda o Núcleo Accumbens de dopamina artificial, gerando um prazer intenso e desregulando o circuito natural de recompensa.

      **Modo Simplificado:**
      - **Psicose (Sintomas Positivos):** Excesso de dopamina na via mesolímbica. Tratamento: Bloqueador de D₂.
      - **Dependência:** Inundação artificial de dopamina no Núcleo Accumbens.
      - **Alzheimer:** Falta severa de Acetilcolina na central da memória.`,
      mnemonic: "💡 Mnemônico: 'Mesolímbica alta = Delírio e Vício; Colinérgico em baixa = Esquecimento (Alzheimer)'."
    },
    {
      id: "depressao_teorias",
      title: "5. Teorias Neurobiológicas da Depressão Maior",
      content: `A depressão é compreendida a partir de duas principais matrizes teóricas:
      - **Teoria Monoaminérgica Clássica:** Propõe que o transtorno decorre do déficit funcional de Serotonina, Noradrenalina e Dopamina.
        - *Paradoxo Temporal:* Os fármacos elevam as monoaminas na fenda em poucas horas, mas a remissão clínica demora de 2 a 4 semanas. Isto ocorre devido à necessidade de adaptações celulares lentas: **dessensibilização e down-regulation de autorreceptores inibitórios pré-sinápticos**, permitindo a desinibição do neurônio.
      - **Teoria Neurotrófica:** O estresse crônico (excesso de cortisol) suprime a expressão do gene do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*). Isto causa atrofia de dendritos e perda sináptica no hipocampo. Os antidepressivos reativam o BDNF, restaurando a plasticidade neuronal.

      **Exemplo Prático:** Um antidepressivo eleva a serotonina no primeiro dia, mas o paciente só melhora um mês depois porque os "sensores de freio" do neurônio precisam se desligar com o tempo.

      **Modo Simplificado:**
      - **Monoaminas:** O atraso terapêutico ocorre porque os autorreceptores precisam de tempo para se adaptarem.
      - **Teoria Neurotrófica:** O estresse crônico seca os ramos dos neurônios (falta de BDNF). O antidepressivo funciona como um adubo celular.`,
      mnemonic: "💡 Mnemônico: 'Mais do que faltar neurotransmissor, falta adubo nos neurônios (BDNF)'."
    },
    {
      id: "antidepressivos",
      title: "6. Farmacologia: Tricíclicos (ADTs) vs. ISRS",
      content: `A evolução dos fármacos antidepressivos marcou uma transição em termos de seletividade e segurança:
      - **Antidepressivos Tricíclicos (ADTs):**
        - Inibem a recaptação de Serotonina e Noradrenalina.
        - *Perfil Não Seletivo:* Antagonizam receptores colinérgicos muscarínicos (boca seca, retenção urinária); histamínicos H₁ (sedação, ganho de peso); e adrenérgicos α₁ (hipotensão postural).
        - *Risco:* Elevada cardiotoxicidade por bloqueio de canais de sódio miocárdicos (arritmias letais em superdosagem).
      - **Inibidores Seletivos de Recaptação de Serotonina (ISRS):**
        - Inibição seletiva do transportador SERT, sem afinidade por receptores muscarínicos ou adrenérgicos.
        - *Vantagem:* Eficácia equivalente aos ADTs, mas com elevado perfil de segurança e baixíssima letalidade em caso de overdose.

      **Exemplo Prático:** Antigamente usava-se a amitriptilina (tricíclico), que causava muita boca seca e tontura ao levantar. Hoje prefere-se a sertralina ou fluoxetina (ISRS), que atuam de forma cirúrgica na serotonina sem esses incômodos colaterais intensos.

      **Modo Simplificado:**
      - **Tricíclicos:** Eficazes, mas afetam vários receptores no corpo (boca seca, tontura) e são perigosos no coração em overdose.
      - **ISRS:** Atuação seletiva e segura na serotonina, sendo a primeira linha atual.`,
      mnemonic: "💡 Mnemônico: 'Tricíclico atira para todo o lado; ISRS é cirúrgico e seguro'."
    }
  ],

  tree: [
    { id: "sinapse", title: "1. Fisiologia das Sinapses", level: 1, unlocked: true },
    { id: "agonista_antagonista", title: "2. Agonistas e Antagonistas", level: 2, unlocked: true },
    { id: "neurotransmissores", title: "3. Neurotransmissores", level: 2, unlocked: true },
    { id: "psicose_dependencia", title: "4. Psicose e Dependência", level: 3, unlocked: true },
    { id: "depressao_teorias", title: "5. Teorias da Depressão", level: 3, unlocked: true },
    { id: "antidepressivos", title: "6. Tricíclicos vs. ISRS", level: 4, unlocked: true }
  ],

  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual íon desencadeia diretamente a exocitose das vesículas sinápticas?", answer: "Cálcio (Ca²⁺), que entra no terminal axonal após a despolarização." },
    { topicId: "sinapse", category: "Sinapses", question: "Como atua o Potencial Pós-Sináptico Excitatório (PPSE)?", answer: "Despolariza a membrana (frequentemente via entrada de Na⁺), aproximando-a do limiar de disparo." },
    { topicId: "sinapse", category: "Sinapses", question: "A entrada de Cloreto (Cl⁻) na célula gera qual evento elétrico?", answer: "Gera um Potencial Pós-Sináptico Inibitório (PPSI), hiperpolarizando a célula." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "Qual a diferença primária entre Agonista Pleno e Antagonista?", answer: "O Agonista possui afinidade e atividade intrínseca máxima; o Antagonista possui afinidade, mas eficácia nula (apenas bloqueia)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual o principal neurotransmissor inibitório e o excitatório do SNC?", answer: "GABA (inibitório) e Glutamato (excitatório)." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Onde atua a Acetilcolina no Sistema Nervoso Periférico?", answer: "Na junção neuromuscular, sendo responsável pela contração dos músculos esqueléticos." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual via dopaminérgica está associada aos sintomas positivos da esquizofrenia?", answer: "Via Mesolímbica (hiperatividade dopaminérgica)." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "O bloqueio acidental de qual via pelos antipsicóticos causa parkinsonismo?", answer: "Via Nigroestriatal." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "Que estrutura forma o centro de recompensa estimulado no vício?", answer: "Núcleo Accumbens." },
    { topicId: "psicose_dependencia", category: "Dependência", question: "A exposição contínua a drogas causa que adaptação nos receptores D₂?", answer: "Dessensibilização e down-regulation (redução do número de receptores)." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que é o paradoxo temporal da teoria monoaminérgica?", answer: "As aminas sobem na fenda em horas, mas o humor só melhora após 2 a 4 semanas." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que explica a latência de ação dos antidepressivos?", answer: "A necessidade de down-regulation dos autorreceptores inibitórios pré-sinápticos." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Segundo a Teoria Neurotrófica, qual é o impacto do estresse crônico?", answer: "Suprime o BDNF, causando atrofia dendrítica no hipocampo." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Qual a diferença central de segurança entre Tricíclicos e ISRS?", answer: "ISRS têm elevada segurança e seletividade; Tricíclicos têm risco de letalidade por cardiotoxicidade em superdosagem." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os Tricíclicos causam boca seca e retenção urinária?", answer: "Devido ao bloqueio não intencional dos receptores colinérgicos muscarínicos." },
    { topicId: "sinapse", category: "Sinapses", question: "O que é o complexo SNARE na fisiologia sináptica?", answer: "Um conjunto de proteínas responsáveis por mediar a fusão das vesículas sinápticas à membrana pré-sináptica." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "O que caracteriza um agonista parcial?", answer: "Possui afinidade pelo receptor, mas atividade intrínseca submáxima." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "O que é excitotoxicidade glutamatérgica?", answer: "Morte neuronal causada por influxo descontrolado de cálcio devido ao excesso de glutamato." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "O que se associa à via mesocortical na esquizofrenia?", answer: "Hipoatividade dopaminérgica relacionada aos sintomas negativos e déficits cognitivos." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual é a função essencial da proteína BDNF no cérebro?", answer: "Sustentar a neuroplasticidade, a sobrevivência neuronal e a neurogênese no hipocampo." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os tricíclicos causam hipotensão postural?", answer: "Devido ao bloqueio periférico de receptores alfa-1 adrenérgicos nos vasos sanguíneos." }
  ]
};