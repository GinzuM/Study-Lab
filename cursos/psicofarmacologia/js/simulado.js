// =========================================================================
// ARQUIVO ÚNICO: DADOS + INTERFACE INTERATIVA DO SIMULADO (50 ITENS)
// Basta incluir <script src="js/simulado.js"></script> no index.html
// =========================================================================

const simuladoData = [
  {
    moduleId: 1,
    title: "MÓDULO 1: Comunicação Neural & Fisiologia da Sinapse",
    explanationNumber: 1,
    explanation: "A transmissão da informação química entre os neurónios inicia-se com a chegada do potencial de ação ao terminal axónico. Isso provoca a abertura de canais de Cálcio (Ca²⁺) dependentes de voltagem. O influxo rápido de Ca²⁺ atua como o gatilho molecular para a fusão das vesículas sinápticas (via complexo SNARE) e a consequente exocitose dos neurotransmissores na fenda sináptica.",
    questions: [
      {
        number: 2,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Qual íon atua diretamente como gatilho biofísico mandatório para a exocitose das vesículas sinápticas no terminal pré-sináptico?",
        options: [
          "A) Íon Cálcio (Ca²⁺)",
          "B) Íon Potássio (K⁺)"
        ],
        correct: 0
      },
      {
        number: 3,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Após a libertação do neurotransmissor na fenda, a sua ligação a recetores pós-sinápticos gera alterações elétricas locais. O Potencial Pós-Sináptico Excitatório (PPSE) caracteriza-se por:",
        options: [
          "A) Causar hiperpolarização por influxo de iões cloreto (Cl⁻).",
          "B) Provocar despolarização local da membrana, tipicamente por influxo de catiões como o sódio (Na⁺), aproximando a célula do limiar de disparo.",
          "C) Bloquear de forma permanente os canais de cálcio voltagem-dependentes.",
          "D) Induzir a destruição imediata das proteínas do complexo SNARE."
        ],
        correct: 1
      },
      {
        number: 4,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Sobre os potenciais pós-sinápticos e os eventos iónicos na membrana, analise as afirmativas e assinale a incorreta:",
        options: [
          "A) O PPSE afasta o neurónio do limiar de disparo ao permitir a saída massiva de iões de sódio para o meio extracelular.",
          "B) O PPSI (Potencial Pós-Sináptico Inibitório) hiperpolariza a membrana celular, tornando o citoplasma mais negativo.",
          "C) A entrada de iões cloreto (Cl⁻) através de recetores ionotrópicos como o GABA_A contribui diretamente para a inibição sináptica.",
          "D) O efluxo de iões potássio (K⁺) também pode gerar um efeito inibitório ao afastar o potencial de membrana do limiar de ação.",
          "E) Enquanto o PPSE facilita a despolarização, o PPSI atua como um 'travão' eletrofisiológico no neurónio recetor.",
          "F) A chegada do potencial de ação ao terminal pré-sináptico é o evento elétrico que antecede a abertura dos canais de cálcio."
        ],
        correct: 0
      },
      {
        number: 5,
        type: "written",
        label: "Pergunta escrita",
        question: "Explique detalhadamente qual é a consequência bioelétrica e funcional para o neurónio recetor quando ocorre um Potencial Pós-Sináptico Inibitório (PPSI) mediado pela entrada de iões cloreto (Cl⁻).",
        expectedAnswer: "A entrada de iões cloreto (Cl⁻), que possuem carga elétrica negativa, aumenta a eletronegatividade do interior celular, provocando a hiperpolarização da membrana pós-sináptica (por exemplo, levando o potencial de -65 mV para -75 mV). Funcionalmente, isso afasta o neurónio do limiar de disparo, atuando como um 'travão' eletrofisiológico que impede ou dificulta a geração de um potencial de ação."
      }
    ]
  },
  {
    moduleId: 2,
    title: "MÓDULO 2: Farmacodinâmica (Agonistas vs. Antagonistas)",
    explanationNumber: 6,
    explanation: "A farmacodinâmica estuda o mecanismo de ação dos fármacos nos recetores. Um Agonista Pleno possui afinidade pelo recetor e alta atividade intrínseca (100%), ativando totalmente a cascata de transdução de sinal celular. Em contrapartida, um Antagonista Silencioso possui afinidade pelo sítio de ligação, mas a sua atividade intrínseca é estritamente nula (0%), bloqueando o recetor contra a ação de agonistas endógenos.",
    questions: [
      {
        number: 7,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Um fármaco que ocupa o recetor sem possuir qualquer atividade intrínseca, bloqueando o acesso de outras moléculas, é classificado como:",
        options: [
          "A) Agonista pleno",
          "B) Antagonista silencioso"
        ],
        correct: 1
      },
      {
        number: 8,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Qual das seguintes alternativas descreve com precisão a propriedade farmacodinâmica de um agonista parcial?",
        options: [
          "A) Possui afinidade pelo recetor, mas eficácia intrínseca nula (0%).",
          "B) Destrói covalentemente a proteína recetora para impedir a sinalização.",
          "C) Possui afinidade, mas a sua atividade intrínseca é submáxima, podendo atuar como um antagonista relativo na presença de um agonista pleno.",
          "D) Converte-se espontaneamente num inibidor enzimático reversível."
        ],
        correct: 2
      },
      {
        number: 9,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Em relação aos conceitos farmacodinâmicos fundamentais, assinale a alternativa correta:",
        options: [
          "A) O agonista pleno caracteriza-se por ter afinidade nula e atividade intrínseca máxima.",
          "B) O antagonista competitivo possui atividade intrínseca de 50%, gerando metade da resposta máxima do tecido.",
          "C) Um agonista parcial nunca consegue competir com um agonista pleno, independentemente da concentração administrada.",
          "D) O antagonista silencioso (ou neutro) liga-se ao recetor com afinidade, mas a sua eficácia em ativar a via de transdução é de 0%.",
          "E) Os fármacos antagonistas induzem sempre uma despolarização maciça da membrana pós-sináptica.",
          "F) A afinidade refere-se à capacidade do fármaco de desencadear a cascata intracelular após a ligação."
        ],
        correct: 3
      },
      {
        number: 10,
        type: "written",
        label: "Pergunta escrita",
        question: "Diferencie, com base nos conceitos de afinidade e atividade intrínseca, a atuação de um Agonista Pleno face a um Antagonista Silencioso no sistema nervoso central.",
        expectedAnswer: "Ambos os fármacos possuem afinidade (capacidade de se ligar ao recetor). Porém, o Agonista Pleno tem atividade intrínseca máxima (100%), mudando a conformação do recetor e disparando a resposta biológica celular. Já o Antagonista Silencioso possui atividade intrínseca nula (0%): ele apenas ocupa o recetor sem ativá-lo, bloqueando fisicamente a ligação dos neurotransmissores endógenos ou de outros agonistas."
      }
    ]
  },
  {
    moduleId: 3,
    title: "MÓDULO 3: Neurotransmissores Clássicos (Excitatórios, Inibitórios e Aminas)",
    explanationNumber: 11,
    explanation: "Os neurotransmissores desempenham papéis vitais no SNC e SNP. O Glutamato é o principal agente excitatório cerebral, essencial para a plasticidade sináptica (LTP), embora o seu excesso crónico cause excitotoxicidade por sobrecarga de cálcio. O GABA atua como o principal inibidor, promovendo ansiólise e sedação. As monoaminas — Serotonina (5-HT), Noradrenalina (NA) e Dopamina (DA) — regulam o humor, o alerta e os circuitos de recompensa, respetivamente.",
    questions: [
      {
        number: 12,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Qual é o principal neurotransmissor inibitório do sistema nervoso central?",
        options: [
          "A) Glutamato",
          "B) GABA"
        ],
        correct: 1
      },
      {
        number: 13,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "O excesso crónico e desregulado de qual neurotransmissor no SNC pode desencadear neurotoxicidade (excitotoxicidade) devido a um influxo massivo e tóxico de iões cálcio intracelulares?",
        options: [
          "A) Serotonina",
          "B) GABA",
          "C) Glutamato",
          "D) Acetilcolina"
        ],
        correct: 2
      },
      {
        number: 14,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Sobre as funções atribuídas aos principais neurotransmissores centrais e periféricos, analise as proposições e aponte a falsa:",
        options: [
          "A) A Noradrenalina está fortemente ligada a estados de alerta, foco e mediação da resposta de luta ou fuga.",
          "B) A Dopamina participa de forma crítica nas vias de recompensa e prazer, além de regular o tónus motor.",
          "C) A Serotonina modula o humor, o sono, a saciedade e os níveis de impulsividade.",
          "D) A Acetilcolina atua no SNC na sustentação da atenção e memória, e no SNP comanda a contração na junção neuromuscular.",
          "E) O GABA atua estritamente como um aminoácido excitatório que abre canais de sódio voltagem-dependentes no córtex motor.",
          "F) O Glutamato é indispensável para a potenciação a longo prazo (LTP) e consolidação de memórias."
        ],
        correct: 4
      },
      {
        number: 15,
        type: "written",
        label: "Pergunta escrita",
        question: "Descreva as funções centrais distintas da Acetilcolina quando comparamos a sua atuação no Sistema Nervoso Central (SNC) e no Sistema Nervoso Periférico (SNP).",
        expectedAnswer: "No Sistema Nervoso Central (SNC), a Acetilcolina atua em vias corticais e hipocampais (como as projetadas pelo Núcleo Basal de Meynert), sendo indispensável para a atenção sustentada, aprendizagem e consolidação da memória. No Sistema Nervoso Periférico (SNP), ela atua no sistema nervoso autónomo parassimpático e na junção neuromuscular somática, onde promove diretamente a contração dos músculos esqueléticos."
      }
    ]
  },
  {
    moduleId: 4,
    title: "MÓDULO 4: Vias Dopaminérgicas, Psicose e Adição",
    explanationNumber: 16,
    explanation: "A dopamina organiza vias cruciais no cérebro. Na esquizofrenia, a hipótese dopaminérgica postula que a hiperatividade na via mesolímbica causa os sintomas positivos (delírios e alucinações), enquanto a hipoatividade na via mesocortical gera os sintomas negativos. No campo da dependência química, as drogas de abuso provocam descargas suprafisiológicas de dopamina no Núcleo Accumbens (via de reforço).",
    questions: [
      {
        number: 17,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Os sintomas positivos da esquizofrenia (como alucinações e delírios) estão associados à hiperatividade dopaminérgica em qual via cerebral?",
        options: [
          "A) Via Mesolímbica",
          "B) Via Mesocortical"
        ],
        correct: 0
      },
      {
        number: 18,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Qual é o mecanismo neurobiológico primário partilhado por praticamente todas as substâncias de abuso no cérebro para gerar dependência?",
        options: [
          "A) Inibição permanente de todos os recetores de glutamato NMDA.",
          "B) Produção de picos rápidos e suprafisiológicos de dopamina no Núcleo Accumbens (via mesolímbica).",
          "C) Destruição seletiva das reservas periféricas de acetilcolina.",
          "D) Bloqueio absoluto da barreira hematoencefálica aos iões de cálcio."
        ],
        correct: 1
      },
      {
        number: 19,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "No contexto das vias dopaminérgicas e das patologias associadas, assinale a alternativa incorreta:",
        options: [
          "A) O bloqueio excessivo de recetores D₂ na via nigroestriatal por antipsicóticos típicos pode desencadear efeitos extrapiramidais, como o parkinsonismo medicamentoso.",
          "B) A hipoatividade dopaminérgica na via mesocortical correlaciona-se com os sintomas negativos da esquizofrenia, como abulia e embotamento afetivo.",
          "C) O uso crónico de drogas de abuso induz a dessensibilização e down-regulation de recetores dopaminérgicos D₂ no estriado, gerando tolerância e anedonia.",
          "D) A via tuberoinfundibular regula a prolactina; o seu bloqueio dopaminérgico pode causar hiperprolactinemia.",
          "E) Os sintomas positivos da esquizofrenia são causados por uma deficiência primária de serotonina no cerebelo.",
          "F) O Núcleo Accumbens constitui o centro nevrálgico do circuito de recompensa e reforço cerebral."
        ],
        correct: 4
      },
      {
        number: 20,
        type: "written",
        label: "Pergunta escrita",
        question: "Explique o paradoxo clínico observado no tratamento da esquizofrenia com antipsicóticos clássicos (bloqueadores D₂): como o antagonismo D₂ atua nos sintomas positivos, mas simultaneamente gera efeitos extrapiramidais?",
        expectedAnswer: "Os antipsicóticos clássicos bloqueiam recetores D₂ de forma inespecífica em todo o cérebro. Ao bloquearem os recetores D₂ hiperativos na via mesolímbica, eles reduzem eficazmente os sintomas positivos (delírios e alucinações). Contudo, como também bloqueiam os recetores D₂ na via nigroestriatal (responsável pelo controlo motor fino), induzem um défice dopaminérgico motor que causa sintomas extrapiramidais (rigidez, bradicinesia, tremores e distonias)."
      }
    ]
  },
  {
    moduleId: 5,
    title: "MÓDULO 5: Teorias Neurobiológicas da Depressão Maior",
    explanationNumber: 21,
    explanation: "A depressão é explicada por duas grandes teorias complementares. A Teoria Monoaminérgica Clássica propõe um défice de Serotonina, Noradrenalina e Dopamina. O seu principal desafio é o paradoxo temporal: os fármacos elevam as aminas em horas, mas a melhora clínica demora de 2 a 4 semanas, devido à necessidade de down-regulation de autorrecetores inibitórios. A Teoria Neurotrófica foca-se no stress crónico, que eleva o cortisol e suprime o gene do BDNF, causando atrofia dendrítica.",
    questions: [
      {
        number: 22,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "O fator neurotrófico cuja expressão é diminuída pelo stress crónico, resultando em atrofia sináptica na depressão, é o:",
        options: [
          "A) BDNF",
          "B) GABA"
        ],
        correct: 0
      },
      {
        number: 23,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Como a psicofarmacologia moderna explica o intervalo de 2 a 4 semanas (latência clínica) entre o aumento imediato de monoaminas na fenda e a melhora efetiva do humor do paciente?",
        options: [
          "A) Demora na dissolução estomacal da cápsula do antidepressivo.",
          "B) Necessidade de adaptações lentas, como a dessensibilização (down-regulation) de autorrecetores pré-sinápticos inibitórios.",
          "C) Conversão metabólica da serotonina em dopamina no tecido hepático.",
          "D) Acumulação tóxica de iões cálcio nas mitocôndrias corticais."
        ],
        correct: 1
      },
      {
        number: 24,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Acerca das teorias neurobiológicas da depressão maior (Monoaminérgica e Neurotrófica), analise as afirmações e assinale a correta:",
        options: [
          "A) A Teoria Monoaminérgica postula que a depressão resulta do excesso absoluto de serotonina nas fendas sinápticas do hipocampo.",
          "B) O 'paradoxo temporal' da depressão refere-se ao facto de a melhora clínica ocorrer em segundos, enquanto a alteração química demora meses.",
          "C) A Teoria Neurotrófica sugere que o stress crónico eleva os níveis de BDNF de forma tóxica, hiperativando as sinapses.",
          "D) Os antidepressivos atuam a longo prazo reativando a síntese de BDNF, o que promove a restauração de dendrites e a plasticidade sináptica (neurogénese).",
          "E) Os autorrecetores pré-sinápticos inibitórios sofrem up-regulation imediata, bloqueando a transmissão monoaminérgica.",
          "F) O cortisol diminuído pelo estresse é a principal causa da rigidez cognitiva na depressão."
        ],
        correct: 3
      },
      {
        number: 25,
        type: "written",
        label: "Pergunta escrita",
        question: "Relacione a Teoria Neurotrófica da depressão com o conceito de neuroplasticidade: explique o papel do BDNF e como o estresse crônico afeta a arquitetura neuronal no hipocampo.",
        expectedAnswer: "O BDNF (Fator Neurotrófico Derivado do Encéfalo) funciona como um fator de crescimento essencial que mantém a viabilidade neuronal, o arborismo dendrítico e a formação de novas sinapses (neuroplasticidade). O stress crónico eleva de forma sustentada os níveis de cortisol, o que reprime a transcrição do gene do BDNF. Essa redução provoca atrofia dendrítica, perda de sinapses e diminuição volumétrica no hipocampo e córtex pré-frontal, comprometendo a resiliência neural e gerando sintomas depressivos."
      }
    ]
  },
  {
    moduleId: 6,
    title: "MÓDULO 6: Farmacologia dos Antidepressivos (Tricíclicos vs. ISRS)",
    explanationNumber: 26,
    explanation: "Os Antidepressivos Tricíclicos (ADTs) (ex: Amitriptilina) inibem a recaptação de Serotonina e Noradrenalina, mas bloqueiam indevidamente recetores colinérgicos muscarínicos, histamínicos (H₁) e α₁-adrenérgicos, gerando um perfil sujo de efeitos adversos e alta cardiotoxicidade em overdose. Já os Inibidores Seletivos de Recaptação de Serotonina (ISRS) inibem seletivamente o SERT, mantendo a mesma eficácia terapêutica com um perfil de segurança drasticamente superior.",
    questions: [
      {
        number: 27,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Qual classe de antidepressivos apresenta maior risco de letalidade e cardiotoxicidade em caso de superdosagem aguda?",
        options: [
          "A) Antidepressivos Tricíclicos (ADTs)",
          "B) Inibidores Seletivos de Recaptação de Serotonina (ISRS)"
        ],
        correct: 0
      },
      {
        number: 28,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Efeitos colaterais clássicos dos Antidepressivos Tricíclicos, como boca seca, visão turva, retenção urinária e obstipação severa, decorrem diretamente de qual mecanismo farmacológico?",
        options: [
          "A) Antagonismo de recetores colinérgicos muscarínicos",
          "B) Agonismo pleno nos recetores dopaminérgicos D₂",
          "C) Inibição seletiva do transportador de serotonina (SERT)",
          "D) Bloqueio dos canais de cálcio voltagem-dependentes no neurónio motor"
        ],
        correct: 0
      },
      {
        number: 29,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Em relação aos perfis farmacológicos comparativos entre ADTs e ISRS, assinale a alternativa incorreta:",
        options: [
          "A) Os ISRS inibem com alta seletividade o transportador de serotonina (SERT), sem afinidade expressiva por recetores muscarínicos ou histamínicos.",
          "B) Os Antidepressivos Tricíclicos causam hipotensão postural devido ao bloqueio de recetores α₁-adrenérgicos vasculares.",
          "C) A sedação e o ganho de peso associados aos ADTs devem-se primariamente ao antagonismo de recetores histamínicos H₁.",
          "D) Os ISRS possuem eficácia antidepressiva clínica superior à dos Tricíclicos no tratamento de episódios depressivos graves.",
          "E) A alta letalidade dos Tricíclicos em sobredosagem decorre do bloqueio de canais de sódio no miocárdio, induzindo arritmias ventriculares fatais.",
          "F) Ambas as classes aumentam a disponibilidade de monoaminas na fenda sináptica, embora por vias de seletividade recetora totalmente distintas."
        ],
        correct: 3
      },
      {
        number: 30,
        type: "written",
        label: "Pergunta escrita",
        question: "Explique por que motivo os Inibidores Seletivos de Recaptação de Serotonina (ISRS) substituíram os Antidepressivos Tricíclicos (ADTs) como fármacos de primeira escolha na prática clínica psiquiátrica atual.",
        expectedAnswer: "Os ISRS tornaram-se a primeira escolha clínica porque oferecem eficácia antidepressiva equivalente à dos ADTs, mas com alta seletividade pelo transportador de serotonina (SERT). Por não bloquearem recetores muscarínicos, histamínicos H₁, α₁-adrenérgicos nem canais de sódio cardíacos, os ISRS apresentam muito menos efeitos colaterais (melhor adesão ao tratamento) e um índice terapêutico amplo, sem risco elevado de arritmias fatais em caso de superdosagem."
      }
    ]
  },
  {
    moduleId: 7,
    title: "MÓDULO 7: Neurotransmissores Específicos e Correlações Clínicas (Alzheimer e Ansiedade)",
    explanationNumber: 31,
    explanation: "A neuroquímica clínica estuda déficits específicos associados a patologias. Na Doença de Alzheimer, ocorre uma degeneração severa dos neurónios colinérgicos projetados a partir do Núcleo Basal de Meynert, gerando perda mnemónica tratada com inibidores da acetilcolinesterase. Nos transtornos de ansiedade, a hipoatividade do sistema GABAérgico correlaciona-se com a hiperexcitabilidade cortical, sendo o alvo de moduladores alostéricos como as benzodiazepinas.",
    questions: [
      {
        number: 32,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "O declínio cognitivo e a perda de memória na Doença de Alzheimer estão diretamente associados a um défice acentuado de qual neurotransmissor no SNC?",
        options: [
          "A) Acetilcolina",
          "B) Dopamina"
        ],
        correct: 0
      },
      {
        number: 33,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Qual é o fundamento farmacológico dos fármacos inibidores da acetilcolinesterase (como a Donepezila) utilizados no tratamento paliativo da Doença de Alzheimer?",
        options: [
          "A) Estimular a destruição de placas beta-amiloides por via hepática.",
          "B) Inibir a enzima que degrada a acetilcolina, prolongando a sua permanência e concentração na fenda sináptica.",
          "C) Bloquear os recetores NMDA do glutamato para travar a excitotoxicidade.",
          "D) Atuar como agonistas diretos dos recetores dopaminérgicos D₂ na via mesolímbica."
        ],
        correct: 1
      },
      {
        number: 34,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Sobre as correlações neuroquímicas em perturbações neurológicas e psiquiátricas, assinale a alternativa correta:",
        options: [
          "A) A ansiedade crónica generalizada correlaciona-se com a hiperatividade extrema e generalizada da transmissão gabaérgica inibitória.",
          "B) O défice colinérgico no Núcleo Basal de Meynert é a marca neuropatológica central da esquizofrenia refratária.",
          "C) Os inibidores da acetilcolinesterase aumentam a biodisponibilidade da acetilcolina ao impedir a sua recaptação pré-sináptica direta pelo transportador vesicular.",
          "D) A perda de memória recente no Alzheimer resulta da escassez de acetilcolina nas projeções direcionadas ao hipocampo.",
          "E) As benzodiazepinas reduzem a ansiedade por atuarem como antagonistas silenciosos dos recetores de glutamato.",
          "F) A excitotoxicidade glutamatérgica protege o neurónio pós-sináptico contra sobrecargas de cálcio iónico."
        ],
        correct: 3
      },
      {
        number: 35,
        type: "written",
        label: "Pergunta escrita",
        question: "Descreva o mecanismo neurobiológico através do qual a perda de neurónios colinérgicos no Núcleo Basal de Meynert impacta a cognição na Doença de Alzheimer e justifique a utilidade dos inibidores da acetilcolinesterase.",
        expectedAnswer: "O Núcleo Basal de Meynert envia as principais projeções colinérgicas para o hipocampo e para o córtex cerebral, áreas vitais para a consolidação da memória recente e atenção. A degeneração desses neurónios no Alzheimer reduz drasticamente a acetilcolina sináptica, causando amnésia e défice cognitivo. Os inibidores da acetilcolinesterase bloqueiam a enzima que degrada a acetilcolina na fenda, preservando o neurotransmissor restante por mais tempo e compensando parcialmente o défice funcional."
      }
    ]
  },
  {
    moduleId: 8,
    title: "MÓDULO 8: Farmacocinética Aplicada à Psicofarmacologia",
    explanationNumber: 36,
    explanation: "A farmacocinética analisa o percurso do fármaco no organismo (ADME: Absorção, Distribuição, Metabolismo e Excreção). No contexto do sistema nervoso central, o fator mais restritivo é a barreira hematoencefálica (BHE), que exige que os psicofármacos possuam alta lipossolubilidade para atravessar as células endoteliais capilares e alcançar os recetores intracerebrais de forma eficaz.",
    questions: [
      {
        number: 37,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "Para que um fármaco atue diretamente no sistema nervoso central, ele deve possuir preferencialmente qual propriedade físico-química para atravessar a barreira hematoencefálica?",
        options: [
          "A) Alta lipossolubilidade",
          "B) Alta hidrossolubilidade"
        ],
        correct: 0
      },
      {
        number: 38,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "O principal local orgânico responsável pela biotransformação (metabolismo) enzimática dos psicofármacos, preparando-os para a excreção renal, é o:",
        options: [
          "A) Estômago",
          "B) Fígado",
          "C) Tecido adiposo subcutâneo",
          "D) Cerebelo"
        ],
        correct: 1
      },
      {
        number: 39,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "No que respeita aos princípios farmacocinéticos aplicados aos psicofármacos, assinale a afirmativa incorreta:",
        options: [
          "A) A barreira hematoencefálica restringe a passagem de substâncias polares e hidrossolúveis, permitindo a difusão de moléculas altamente lipossolúveis.",
          "B) O metabolismo de primeira passagem hepática pode reduzir significativamente a biodisponibilidade sistémica de fármacos administrados por via oral.",
          "C) A meia-vida plasmática de eliminação (t₁/₂) determina o tempo necessário para que a concentração plasmática do fármaco se reduza a metade.",
          "D) Os psicofármacos administrados por via intravenosa passam obrigatoriamente pela absorção gastrointestinal antes de atingirem a circulação sistémica.",
          "E) Enzimas do citocromo P450 no fígado desempenham um papel fulcral na metabolização da maioria dos antidepressivos e antipsicóticos.",
          "F) A eliminação renal de metabolitos ativos depende da sua conversão hepática em compostos mais polares e hidrossolúveis."
        ],
        correct: 3
      },
      {
        number: 40,
        type: "written",
        label: "Pergunta escrita",
        question: "Explique de que maneira a barreira hematoencefálica (BHE) condiciona a escolha de propriedades físico-químicas essenciais para que um agente farmacológico exerça efeitos terapêuticos no Sistema Nervoso Central.",
        expectedAnswer: "A barreira hematoencefálica (BHE) é formada por capilares endoteliais com junções estreitas (tight junctions) sem fenestrações e recobertos por astrócitos, bloqueando a passagem de moléculas polares, ionizadas ou hidrossolúveis. Assim, para que um psicofármaco atravesse a membrana endotelial por difusão passiva e atinja o cérebro, ele precisa apresentar elevada lipossolubilidade, baixo peso molecular e baixa ionização em pH fisiológico."
      }
    ]
  },
  {
    moduleId: 9,
    title: "MÓDULO 9: Tolerância, Dependência e Síndrome de Abstinência",
    explanationNumber: 41,
    explanation: "A administração crónica de determinadas substâncias psicoativas induz adaptações neuroplásticas celulares conhecidas como tolerância (necessidade de doses maiores para obter o mesmo efeito). Quando o uso cessa abruptamente, instala-se a síndrome de abstinência, caracterizada por efeitos opostos aos agudos da droga, refletindo o desajuste dos sistemas recetores que tentavam contrabalançar a presença constante do fármaco ou substância de abuso.",
    questions: [
      {
        number: 42,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "O fenómeno adaptativo em que o organismo passa a exigir doses progressivamente maiores de uma substância para alcançar o mesmo efeito farmacológico inicial denomina-se:",
        options: [
          "A) Tolerância",
          "B) Hipersensibilização aguda"
        ],
        correct: 0
      },
      {
        number: 43,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "A instalação de uma síndrome de abstinência típica após a interrupção abrupta do consumo crónico de uma substância depressora do SNC (como o álcool ou benzodiazepinas) decorre essencialmente de:",
        options: [
          "A) Uma falha mecânica imediata na absorção gástrica.",
          "B) Adaptações neuroplásticas crónicas em que o cérebro contrabalançava a inibição constante, resultando num estado de hiperexcitabilidade rebote na ausência da substância.",
          "C) Conversão imediata dos recetores de dopamina em recetores colinérgicos.",
          "D) Aumento instantâneo e permanente da barreira hematoencefálica."
        ],
        correct: 1
      },
      {
        number: 44,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Acerca dos conceitos de tolerância farmacológica e dependência física, analise as afirmativas e assinale a incorreta:",
        options: [
          "A) A tolerância farmacodinâmica envolve frequentemente a regulação decrescente (down-regulation) ou dessensibilização de recetores após estimulação crónica.",
          "B) A dependência física manifesta-se através de síndromes de abstinência específicas quando o agente químico é retirado do organismo.",
          "C) A tolerância cruzada ocorre quando a resistência a um fármaco confere tolerância a outra substância com mecanismo de ação semelhante.",
          "D) A síndrome de abstinência apresenta habitualmente sintomas clínicos diametralmente opostos aos efeitos agudos provocados pela administração da substância.",
          "E) O fenómeno de tolerância implica obrigatoriamente que o fármaco perca toda a sua afinidade química pelo recetor em poucas horas de uso.",
          "F) A adaptação neuronal crónica reflete a tentativa do sistema nervoso em manter a homeostase face à presença contínua da molécula exógena."
        ],
        correct: 4
      },
      {
        number: 45,
        type: "written",
        label: "Pergunta escrita",
        question: "Conceitue tolerância farmacodinâmica e explique o mecanismo celular pelo qual a administração crónica de um agonista resulta na necessidade de aumento de dose para obtenção do efeito terapêutico ou recreativo original.",
        expectedAnswer: "A tolerância farmacodinâmica consiste na diminuição da resposta biológica celular a uma mesma concentração de fármaco após exposição repetida. Diante da estimulação contínua por um agonista, o neurónio defende a sua homeostase promovendo o desacoplamento do recetor à sua cascata intracelular (dessensibilização) e a internalização/redução do número de recetores na membrana (down-regulation). Com menos recetores disponíveis, são exigidas doses maiores para recrutar a mesma resposta inicial."
      }
    ]
  },
  {
    moduleId: 10,
    title: "MÓDULO 10: Interações Medicamentosas e Farmacovigilância em Psicofarmacologia",
    explanationNumber: 46,
    explanation: "A polimedicação em psiquiatria exige rigor na farmacovigilância devido às interações medicamentosas. Um exemplo clássico e perigoso é a associação entre Inibidores da MAO (IMAO) e ISRS, que pode precipitar a síndrome serotoninérgica, um quadro fatal caracterizado por hipertermia, instabilidade autonómica, rigidez muscular e mioclonias decorrentes do excesso massivo de serotonina nas sinapses centrais e periféricas.",
    questions: [
      {
        number: 47,
        type: "mc",
        label: "Pergunta de 2 alternativas",
        question: "A associação concomitante de fármacos que elevam drasticamente os níveis de serotonina (como a combinação de IMAO e ISRS) pode precipitar uma emergência médica grave conhecida como:",
        options: [
          "A) Síndrome Serotoninérgica",
          "B) Crise Colinérgica Aguda"
        ],
        correct: 0
      },
      {
        number: 48,
        type: "mc",
        label: "Pergunta de 4 alternativas",
        question: "Qual das seguintes manifestações clínicas é característica e distintiva de um quadro avançado de Síndrome Serotoninérgica induzida por interações medicamentosas?",
        options: [
          "A) Bradicardia severa isolada e hipotermia profunda.",
          "B) Hipertermia, rigidez muscular, mioclonias, agitação e instabilidade autonómica.",
          "C) Paralisia flácida generalizada por bloqueio da placa motora periférica.",
          "D) Depressão respiratória fulminante idêntica à de uma overdose de opioides."
        ],
        correct: 1
      },
      {
        number: 49,
        type: "mc",
        label: "Pergunta de 6 alternativas (com pegadinhas)",
        question: "Sobre as interações medicamentosas em psicofarmacologia e os riscos associados, assinale a alternativa correta:",
        options: [
          "A) A inibição enzimática hepática provocada por um fármaco diminui invariavelmente a concentração plasmática de coadministrados, anulando os seus efeitos.",
          "B) A associação de um antidepressivo inibidor da recaptação com um IMAO é segura e recomendada para acelerar a remissão da depressão em 24 horas.",
          "C) A Síndrome Serotoninérgica decorre da deficiência absoluta de serotonina na via nigroestriatal, sendo tratada com agonistas dopaminérgicos puros.",
          "D) A indução enzimática do citocromo P450 por determinados fármacos pode acelerar o metabolismo de outros compostos coadministrados, reduzindo a sua eficácia terapêutica.",
          "E) Os efeitos anticolinérgicos de diferentes classes de fármacos nunca se somam quando administrados em simultâneo a um doente idoso.",
          "F) A farmacovigilância restringe-se exclusivamente à monitorização dos efeitos terapêuticos iniciais, ignorando reações adversas tardias."
        ],
        correct: 3
      },
      {
        number: 50,
        type: "written",
        label: "Pergunta escrita",
        question: "Explique os fundamentos fisiopatológicos da Síndrome Serotoninérgica: indique quais as classes farmacológicas envolvidas na sua génese e aponte os principais sinais clínicos que alertam para esta emergência médica.",
        expectedAnswer: "A Síndrome Serotoninérgica decorre da hiperestimulação tóxica de recetores de serotonina (sobretudo 5-HT₁A e 5-HT₂A) no SNC e na periferia, provocada pela combinação sinérgica de fármacos serotoninérgicos — classicamente a associação de Inibidores da MAO (que impedem a degradação da serotonina) com ISRS, IRSN ou Tricíclicos (que impedem a sua recaptação). Os sinais clínicos formam uma tríade clássica: 1) Hiperexcitabilidade neuromuscular (mioclonias, clónus, hiperreflexia, rigidez); 2) Instabilidade autonómica (hipertermia, taquicardia, sudorese profusa, hipertensão); e 3) Alteração do estado mental (agitação, confusão e delirium)."
      }
    ]
  }
];

// =========================================================================
// MOTOR DE RENDERIZAÇÃO E INTERATIVIDADE DO SIMULADO
// =========================================================================
(function initSimuladoModule() {
  function setupSimulado() {
    const root = document.getElementById("simulado-root");
    if (!root) return;

    // 1. Injeta estilos próprios do Simulado (compatíveis com o Modo Claro e Escuro do tema)
    if (!document.getElementById("simulado-injected-styles")) {
      const style = document.createElement("style");
      style.id = "simulado-injected-styles";
      style.textContent = `
        .simulado-toolbar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          background: var(--card-bg, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
        }
        .simulado-mod-card {
          background: var(--card-bg, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .simulado-mod-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary, #4f46e5);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--border, #e2e8f0);
        }
        .simulado-exp-box {
          background: rgba(79, 70, 229, 0.07);
          border-left: 4px solid var(--primary, #4f46e5);
          padding: 1rem 1.25rem;
          border-radius: 0 8px 8px 0;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .simulado-q-card {
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 10px;
          padding: 1.25rem;
          margin-bottom: 1.25rem;
          background: var(--bg, rgba(0,0,0,0.015));
        }
        .simulado-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(79, 70, 229, 0.12);
          color: var(--primary, #4f46e5);
          margin-bottom: 0.6rem;
        }
        .simulado-q-title {
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .simulado-opts-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .simulado-opt {
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border, #cbd5e1);
          background: var(--card-bg, #ffffff);
          color: var(--text, inherit);
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .simulado-opt:hover:not(:disabled) {
          border-color: var(--primary, #4f46e5);
          transform: translateY(-1px);
        }
        .simulado-opt.is-correct {
          background: rgba(16, 185, 129, 0.16) !important;
          border-color: #10b981 !important;
          font-weight: 600;
        }
        .simulado-opt.is-wrong {
          background: rgba(239, 68, 68, 0.16) !important;
          border-color: #ef4444 !important;
        }
        .simulado-input-area {
          width: 100%;
          min-height: 95px;
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border, #cbd5e1);
          background: var(--card-bg, #ffffff);
          color: var(--text, inherit);
          font-family: inherit;
          font-size: 0.95rem;
          resize: vertical;
          margin-bottom: 0.75rem;
        }
        .simulado-answer-box {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.35);
        }
        .simulado-eval-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .simulado-eval-btn {
          padding: 0.5rem 0.95rem;
          border-radius: 6px;
          border: 1px solid var(--border, #cbd5e1);
          background: var(--card-bg, #ffffff);
          color: var(--text, inherit);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: 0.2s;
        }
        .simulado-eval-btn.active-certo {
          background: #10b981 !important;
          color: #ffffff !important;
          border-color: #10b981 !important;
        }
        .simulado-eval-btn.active-meio {
          background: #f59e0b !important;
          color: #ffffff !important;
          border-color: #f59e0b !important;
        }
        .simulado-eval-btn.active-errado {
          background: #ef4444 !important;
          color: #ffffff !important;
          border-color: #ef4444 !important;
        }
      `;
      document.head.appendChild(style);
    }

    // 2. Estrutura base da aba Simulado
    root.innerHTML = `
      <div class="section-header text-center">
        <h2>Simulado Exaustivo de Psicofarmacologia (50 Itens)</h2>
        <p class="text-muted">10 Módulos completos: Texto explicativo + 2 alternativas + 4 alternativas + 6 alternativas (com pegadinhas) + Pergunta escrita com autoavaliação.</p>
      </div>

      <div class="simulado-toolbar">
        <div>
          <strong>Progresso:</strong> <span id="sim-stat-progress">0 / 40 respondidas</span> &nbsp;|&nbsp;
          <strong>Nota:</strong> <span id="sim-stat-score">0.0 / 40.0 pts</span>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
          <select id="sim-mod-filter" class="select-input" style="padding:0.45rem 0.75rem; border-radius:6px;">
            <option value="all">Ver Todos os 10 Módulos</option>
          </select>
          <button id="sim-reset-all" class="btn secondary small">Reiniciar Simulado</button>
        </div>
      </div>

      <div id="simulado-modules-list"></div>
    `;

    const filterSelect = document.getElementById("sim-mod-filter");
    const resetBtn = document.getElementById("sim-reset-all");
    const listContainer = document.getElementById("simulado-modules-list");
    const progressEl = document.getElementById("sim-stat-progress");
    const scoreEl = document.getElementById("sim-stat-score");

    let state = {};

    simuladoData.forEach(mod => {
      const opt = document.createElement("option");
      opt.value = mod.moduleId;
      opt.textContent = mod.title;
      filterSelect.appendChild(opt);
    });

    function updateStats() {
      const keys = Object.keys(state);
      let pts = 0;
      keys.forEach(k => { pts += state[k].points || 0; });
      progressEl.textContent = `${keys.length} / 40 respondidas`;
      scoreEl.textContent = `${pts.toFixed(1)} / 40.0 pts`;
    }

    function renderList() {
      listContainer.innerHTML = "";
      const fVal = filterSelect.value;
      const mods = fVal === "all"
        ? simuladoData
        : simuladoData.filter(m => String(m.moduleId) === String(fVal));

      mods.forEach(mod => {
        const card = document.createElement("div");
        card.className = "simulado-mod-card";

        card.innerHTML = `
          <div class="simulado-mod-title">${mod.title}</div>
          <div class="simulado-exp-box">
            <strong>${mod.explanationNumber}. Texto de Explicação:</strong><br>
            ${mod.explanation}
          </div>
        `;

        mod.questions.forEach(q => {
          const qCard = document.createElement("div");
          qCard.className = "simulado-q-card";
          const saved = state[q.number];

          if (q.type === "mc") {
            qCard.innerHTML = `
              <span class="simulado-badge">Questão ${q.number} • ${q.label}</span>
              <div class="simulado-q-title">${q.question}</div>
              <div class="simulado-opts-list" id="sim-q-opts-${q.number}"></div>
              <div id="sim-q-fb-${q.number}" style="margin-top:0.75rem; font-weight:600; display:${saved ? 'block' : 'none'};"></div>
            `;
            card.appendChild(qCard);

            const optsBox = qCard.querySelector(`#sim-q-opts-${q.number}`);
            const fbBox = qCard.querySelector(`#sim-q-fb-${q.number}`);

            q.options.forEach((optText, idx) => {
              const btn = document.createElement("button");
              btn.className = "simulado-opt";
              btn.textContent = optText;

              if (saved) {
                btn.disabled = true;
                if (idx === q.correct) btn.classList.add("is-correct");
                else if (idx === saved.selected) btn.classList.add("is-wrong");
              }

              btn.addEventListener("click", () => {
                const isRight = idx === q.correct;
                state[q.number] = {
                  type: "mc",
                  selected: idx,
                  points: isRight ? 1.0 : 0.0
                };

                optsBox.querySelectorAll(".simulado-opt").forEach((b, bIdx) => {
                  b.disabled = true;
                  if (bIdx === q.correct) b.classList.add("is-correct");
                  else if (bIdx === idx) b.classList.add("is-wrong");
                });

                fbBox.style.display = "block";
                fbBox.innerHTML = isRight
                  ? `<span style="color:#10b981;">✅ Correto! (+1.0 pt)</span>`
                  : `<span style="color:#ef4444;">❌ Incorreto. Gabarito: ${q.options[q.correct]} (0.0 pt)</span>`;

                updateStats();
              });

              optsBox.appendChild(btn);
            });

            if (saved) {
              fbBox.innerHTML = saved.points === 1
                ? `<span style="color:#10b981;">✅ Correto! (+1.0 pt)</span>`
                : `<span style="color:#ef4444;">❌ Incorreto. Gabarito: ${q.options[q.correct]} (0.0 pt)</span>`;
            }
          } else {
            const userTxt = saved ? saved.userText : "";
            const isRev = saved ? saved.revealed : false;
            const evalSt = saved ? saved.evalStatus : null;

            qCard.innerHTML = `
              <span class="simulado-badge">Questão ${q.number} • ${q.label}</span>
              <div class="simulado-q-title">${q.question}</div>
              <textarea class="simulado-input-area" id="sim-ta-${q.number}" placeholder="Escreva a sua resposta aqui antes de ver o gabarito...">${userTxt}</textarea>
              <div>
                <button class="btn primary small" id="sim-rev-btn-${q.number}">Mostrar Gabarito para Comparar</button>
              </div>
              <div class="simulado-answer-box" id="sim-ans-box-${q.number}" style="display:${isRev ? 'block' : 'none'};">
                <strong>📝 Resposta Esperada (Gabarito Oficial):</strong>
                <p style="margin-top:0.4rem; line-height:1.55;">${q.expectedAnswer}</p>
                <p style="margin-top:0.8rem; font-weight:600; font-size:0.9rem;">Compare com a sua resposta e marque como você foi:</p>
                <div class="simulado-eval-btns">
                  <button class="simulado-eval-btn ${evalSt === 'certo' ? 'active-certo' : ''}" data-status="certo">✅ Certo (+1.0 pt)</button>
                  <button class="simulado-eval-btn ${evalSt === 'meio' ? 'active-meio' : ''}" data-status="meio">⚖️ Meio Certo (+0.5 pt)</button>
                  <button class="simulado-eval-btn ${evalSt === 'errado' ? 'active-errado' : ''}" data-status="errado">❌ Errado (0.0 pt)</button>
                </div>
              </div>
            `;
            card.appendChild(qCard);

            const ta = qCard.querySelector(`#sim-ta-${q.number}`);
            const revBtn = qCard.querySelector(`#sim-rev-btn-${q.number}`);
            const ansBox = qCard.querySelector(`#sim-ans-box-${q.number}`);
            const evalBtns = qCard.querySelectorAll(".simulado-eval-btn");

            revBtn.addEventListener("click", () => {
              ansBox.style.display = "block";
              if (!state[q.number]) {
                state[q.number] = {
                  type: "written",
                  userText: ta.value,
                  revealed: true,
                  evalStatus: null,
                  points: 0
                };
              } else {
                state[q.number].userText = ta.value;
                state[q.number].revealed = true;
              }
            });

            ta.addEventListener("input", () => {
              if (state[q.number]) state[q.number].userText = ta.value;
            });

            evalBtns.forEach(b => {
              b.addEventListener("click", () => {
                const st = b.getAttribute("data-status");
                const pts = st === "certo" ? 1.0 : st === "meio" ? 0.5 : 0.0;

                state[q.number] = {
                  type: "written",
                  userText: ta.value,
                  revealed: true,
                  evalStatus: st,
                  points: pts
                };

                evalBtns.forEach(btnEl => {
                  btnEl.classList.remove("active-certo", "active-meio", "active-errado");
                });
                b.classList.add(`active-${st}`);

                updateStats();
              });
            });
          }
        });

        listContainer.appendChild(card);
      });
    }

    filterSelect.addEventListener("change", renderList);
    resetBtn.addEventListener("click", () => {
      state = {};
      updateStats();
      renderList();
    });

    renderList();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupSimulado);
  } else {
    setupSimulado();
  }
})();
