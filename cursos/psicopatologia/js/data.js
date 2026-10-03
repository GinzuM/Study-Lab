// =========================================================================
// BANCO DE DADOS: PSICOPATOLOGIA E SENSOPERCEPÇÃO
// =========================================================================

const studyData = {
  topics: [
    {
      id: "percepcao_alucinacao",
      title: "1. Percepção, Alucinação e Delírio",
      content: `A percepção é o processo de organização e interpretação de informações provenientes dos sentidos[cite: 20]. 
      Alucinação é uma experiência perceptiva (ver, ouvir, sentir) na ausência de um estímulo externo correspondente[cite: 20]. A pessoa vivencia a alucinação como algo perfeitamente real[cite: 20].
      Por outro lado, o Delírio é uma alteração do pensamento, uma crença falsa mantida com convicção absoluta que não se modifica com evidências contrárias[cite: 20, 23].`,
      mnemonic: "💡 Mnemónica: ALUCINAÇÃO = Sentidos (perceber algo que não está lá). DELÍRIO = Pensamento (acreditar em algo que não é real)."
    },
    {
      id: "alucinacoes_audi_visu",
      title: "2. Alucinações Auditivas e Visuais",
      content: `Alucinações Auditivas são percepções de sons ou vozes sem estímulo sonoro externo[cite: 20]. As vozes podem comentar atos, ameaçar ou ordenar[cite: 21].
      A Sonorização do Pensamento ocorre quando a pessoa ouve os seus próprios pensamentos a serem pronunciados em voz alta[cite: 21].
      As Alucinações Visuais dividem-se em duas:
      - Complexas: Formas definidas e organizadas, como ver pessoas ou animais[cite: 21].
      - Elementares: Formas simples, como flashes de luz, pontos luminosos ou manchas[cite: 21].`,
      mnemonic: "💡 Mnemónica: Visual Complexa = Filme. Visual Elementar = Efeitos especiais."
    },
    {
      id: "alucinacoes_corporeas",
      title: "3. Alucinações Táteis, Cinestésicas e Cenestésicas",
      content: `Alucinações Táteis: Sensações de toque ou estímulos na pele sem estímulo externo (ex: sentir insetos a caminhar no braço)[cite: 22].
      Alucinações Cinestésicas: Percepção de movimento do próprio corpo ou de órgãos internos a mexerem-se sem justificação física[cite: 22].
      Alucinações Cenestésicas: Sensações corporais internas bizarras (ex: sentir que o cérebro está cheio de areia ou que o corpo se está a desfazer)[cite: 22, 23].`,
      mnemonic: "💡 Mnemónica: CINEstésico = CINEma/Movimento. CENEstésico = CENtral/Sensação Interna Bizarra."
    },
    {
      id: "delirios_tipo1",
      title: "4. Tipos de Delírios (Referência, Prejuízo, Perseguição, Influência)",
      content: `- Referência: Crença de que acontecimentos neutros, como notícias na TV, têm mensagens ocultas direcionadas ao indivíduo[cite: 23].
      - Prejuízo: Crença focada no dano, como achar que alguém esconde os seus objetos para o prejudicar[cite: 23].
      - Persecutório: Crença mais ampla de que se é alvo de conspiração, vigilância ou perseguição[cite: 24].
      - Influência: Crença de que uma força externa (ex: organização) controla os próprios pensamentos, corpo ou ações[cite: 24].`,
      mnemonic: "💡 Mnemónica: Prejuízo = Danos isolados. Persecutório = Grande conspiração."
    },
    {
      id: "delirios_tipo2",
      title: "5. Tipos de Delírios (Grandeza, Ciúme, Ruína, Hipocondríaco, Negação, Místico)",
      content: `- Grandeza: Convicção de ter poderes extraordinários (ex: controlar o clima)[cite: 24].
      - Ciúme: Acreditar em infidelidade baseado em evidências fúteis ou ausentes[cite: 24].
      - Ruína: Crença de estar na miséria ou destinado a desgraças, apesar de ter condições[cite: 25].
      - Hipocondríaco: Crença de doença grave e incurável, sem provas médicas[cite: 25].
      - Negação: Acreditar que já morreu ou que partes do corpo deixaram de existir[cite: 25].
      - Místico/Religioso: Missões sobrenaturais (avalia-se o contexto cultural)[cite: 25].`,
      mnemonic: "💡 Mnemónica: Ruína = Perdi todo o dinheiro. Negação = Perdi a própria vida."
    },
    {
      id: "avaliacao_patologica",
      title: "6. Avaliação Psicopatológica",
      content: `Um comportamento isolado não caracteriza um quadro patológico. Para avaliar, o psicólogo deve observar quatro critérios[cite: 27]:
      1. Ausência de explicação adequada (não se explica pelo contexto comum)[cite: 27].
      2. Falta de controle (o indivíduo não consegue interromper)[cite: 27].
      3. Persistência ou recorrência (é repetitivo)[cite: 27].
      4. Prejuízo (causa impacto negativo na vida social, profissional, familiar ou escolar)[cite: 27].`,
      mnemonic: "💡 Mnemónica: A.F.P.P. (Ausência, Falta de controlo, Persistência, Prejuízo)."
    },
    {
      id: "transtornos_personalidade",
      title: "7. Transtornos da Personalidade: Grupos A, B e C",
      content: `São padrões difusos, inflexíveis e persistentes de experiência interna e comportamento que divergem da cultura e causam sofrimento, sendo identificáveis desde a adolescência[cite: 28].
      - Grupo A (Excêntricos/Esquisitos): Paranoide, Esquizoide, Esquizotípica[cite: 28].
      - Grupo B (Dramáticos/Emotivos/Erráticos): Antissocial, Borderline, Histriônica, Narcisista[cite: 29].
      - Grupo C (Ansiosos/Medrosos): Evitativa, Dependente, Obsessivo-Compulsiva[cite: 29].`,
      mnemonic: "💡 Mnemónica: A = Aliens (Excêntricos). B = Bollywood (Dramáticos). C = Covardes (Ansiosos)."
    },
    {
      id: "tp_antissocial_base",
      title: "8. Transtorno da Personalidade Antissocial e Histórico",
      content: `O TP Antissocial é caracterizado pela violação dos direitos alheios, desrespeito a normas, irresponsabilidade, impulsividade, manipulação e dificuldade de sentir culpa[cite: 29].
      É crucial investigar o histórico do paciente. Antecedentes na infância e adolescência incluem: furtos, agressões, faltas escolares, fugas de casa e ausência de culpa[cite: 29, 30].`,
      mnemonic: "💡 Mnemónica: A semente da psicopatia costuma brotar nas fugas e brigas da adolescência."
    },
    {
      id: "tp_antissocial_afetos",
      title: "9. Afetos, Culpa e Relações no TP Antissocial",
      content: `- Impulsos: Satisfeitos imediatamente sem pensar no futuro (ex: fraudar para comprar carro)[cite: 30].
      - Superficialidade Afetiva: Exibem choro dramático, mas sem elaboração interna verdadeira (preocupam-se com as perdas materiais, não emocionais)[cite: 30, 31].
      - Ausência de Culpa: Deslocam a culpa para a vítima (ex: 'Eles deviam ter sido mais espertos')[cite: 31].
      - Relações Objetais: Utilizam os outros apenas como instrumentos de gratificação, poder ou status[cite: 31].
      - Existem duas vertentes: o 'psicopata clássico' (agressivo, predatório) e o 'psicopata corporativo' (charme superficial, exploração no trabalho, mentira)[cite: 32].`,
      mnemonic: "💡 Mnemónica: O antissocial chora pela carteira que perdeu, não pela pessoa que magoou."
    }
  ],

  tree: [
    { id: "percepcao_alucinacao", title: "Fundamentos Sensoperceptivos", level: 1, unlocked: true },
    { id: "alucinacoes_audi_visu", title: "Auditivas e Visuais", level: 2, unlocked: true },
    { id: "alucinacoes_corporeas", title: "Táteis e Cenestésicas", level: 2, unlocked: true },
    { id: "delirios_tipo1", title: "O Delírio", level: 1, unlocked: true },
    { id: "delirios_tipo2", title: "Tipos Complexos", level: 2, unlocked: true },
    { id: "avaliacao_patologica", title: "Avaliação Clínica", level: 3, unlocked: true },
    { id: "transtornos_personalidade", title: "Transtornos de Personalidade", level: 1, unlocked: true },
    { id: "tp_antissocial_base", title: "Transtorno Antissocial", level: 2, unlocked: true },
    { id: "tp_antissocial_afetos", title: "Dinâmica Afetiva e Relações", level: 3, unlocked: true }
  ],

  flashcards: [
    { topicId: "percepcao_alucinacao", category: "Conceitos", question: "Como se define uma alucinação?", answer: "É uma percepção (ouvir, ver, etc.) na ausência de um estímulo externo correspondente, vivida como real[cite: 20]." },
    { topicId: "percepcao_alucinacao", category: "Conceitos", question: "Qual é a principal diferença entre alucinação e delírio?", answer: "Alucinação é uma alteração da percepção (sentidos). Delírio é uma alteração do pensamento (uma crença falsa mantida com convicção)[cite: 20, 23]." },
    { topicId: "alucinacoes_audi_visu", category: "Alucinações", question: "O que é o automatismo mental associado à sonorização do pensamento?", answer: "É quando o indivíduo percebe os seus próprios pensamentos como se estivessem a ser pronunciados em voz alta ou controlados por terceiros[cite: 21]." },
    { topicId: "alucinacoes_audi_visu", category: "Alucinações", question: "Qual a diferença entre alucinação visual complexa e elementar?", answer: "A complexa envolve formas organizadas (ex: ver pessoas), enquanto a elementar envolve formas simples (ex: flashes de luz)[cite: 21]." },
    { topicId: "alucinacoes_corporeas", category: "Alucinações", question: "O que é uma alucinação cinestésica?", answer: "A percepção de movimento ou alteração do movimento do próprio corpo sem justificação física[cite: 22]." },
    { topicId: "alucinacoes_corporeas", category: "Alucinações", question: "Um paciente que afirma sentir grãos de areia acumulados dentro do seu cérebro sofre de que alucinação?", answer: "Alucinação Cenestésica (sensação corporal interna bizarra)[cite: 22, 23]." },
    { topicId: "delirios_tipo1", category: "Delírios", question: "Como se carateriza o delírio de referência?", answer: "Crença de que acontecimentos neutros (ex: palavras na TV) contêm mensagens ocultas direcionadas ao paciente[cite: 23]." },
    { topicId: "delirios_tipo1", category: "Delírios", question: "Qual a diferença entre delírio de prejuízo e persecutório?", answer: "O prejuízo foca num dano específico (ex: esconderem-lhe documentos). O persecutório envolve perseguição ampla e complôs organizados[cite: 23, 24]." },
    { topicId: "delirios_tipo2", category: "Delírios", question: "O que é o delírio de ruína?", answer: "Crença absoluta de estar arruinado financeiramente ou destinado a perdas catastróficas, sem evidências reais[cite: 25]." },
    { topicId: "delirios_tipo2", category: "Delírios", question: "Que tipo de delírio está presente quando o paciente afirma: 'Eu já morri, o meu corpo não existe'?", answer: "Delírio de negação[cite: 25]." },
    { topicId: "avaliacao_patologica", category: "Clínica", question: "Quais os quatro critérios para considerar uma manifestação como patológica?", answer: "Ausência de explicação adequada, falta de controlo, persistência/recorrência e causar prejuízo (social/funcional)[cite: 27]." },
    { topicId: "transtornos_personalidade", category: "Personalidade", question: "Quais são os grupos de Transtornos de Personalidade segundo o DSM?", answer: "Grupo A (Excêntricos), Grupo B (Dramáticos/Emotivos) e Grupo C (Ansiosos/Medrosos)[cite: 28, 29]." },
    { topicId: "transtornos_personalidade", category: "Personalidade", question: "O Transtorno da Personalidade Antissocial pertence a que grupo?", answer: "Grupo B (Dramáticos, emotivos ou erráticos)[cite: 29]." },
    { topicId: "tp_antissocial_base", category: "Antissocial", question: "Por que motivo o histórico de infância/adolescência é crucial para avaliar o TP Antissocial no adulto?", answer: "Porque este transtorno exige a presença de um padrão persistente e difuso, visível em furtos, agressões ou mentiras no passado do sujeito[cite: 29, 30]." },
    { topicId: "tp_antissocial_afetos", category: "Antissocial", question: "Como o indivíduo antissocial lida com a culpa?", answer: "Apresenta ausência de culpa e remorso, frequentemente deslocando a responsabilidade do erro para a própria vítima[cite: 31]." }
  ],

  quiz: [
    { 
      topicId: "percepcao_alucinacao", 
      question: "Uma pessoa trancada sozinha no seu quarto vazio afirma com profunda convicção ouvir claramente o seu pai gritar o seu nome do canto do quarto. A família comprova que não há ninguém lá. Qual o fenómeno descrito?", 
      hint: "Envolve a audição sem a fonte sonora real.", 
      options: [
        "Delírio de perseguição, pois envolve familiares[cite: 23, 24].", 
        "Alucinação cenestésica, devido à dor interna[cite: 22].", 
        "Delírio de influência, pois o pai tenta influenciar o seu nome[cite: 24].", 
        "Alucinação auditiva, pois existe perceção sem o estímulo externo correspondente[cite: 20, 21]."
      ], 
      correct: 3 
    },
    { 
      topicId: "alucinacoes_corporeas", 
      question: "Uma paciente relata que tem a certeza absoluta que todos os seus órgãos internos (como pulmões e intestinos) estão a mudar de posição e a mover-se incontrolavelmente no estômago. Este relato clínico ilustra uma:", 
      hint: "Relacionado com a percepção do movimento do próprio corpo.", 
      options: [
        "Alucinação cinestésica[cite: 22].", 
        "Alucinação tátil ou somática[cite: 22].", 
        "Alucinação cenestésica[cite: 22, 23].", 
        "Delírio hipocondríaco[cite: 25]."
      ], 
      correct: 0 
    },
    { 
      topicId: "delirios_tipo1", 
      question: "Um paciente senta-se na sala, observa a apresentadora do noticiário da noite e começa a anotar fervorosamente, argumentando que as notícias sobre a bolsa de valores são, na verdade, códigos do governo para que ele mude de cidade. Este doente apresenta um típico:", 
      hint: "Ele acha que a televisão se refere a ele.", 
      options: [
        "Delírio de referência[cite: 23].", 
        "Delírio de influência[cite: 24].", 
        "Alucinação visual complexa[cite: 21].", 
        "Delírio místico/religioso[cite: 25]."
      ], 
      correct: 0 
    },
    { 
      topicId: "delirios_tipo2", 
      question: "Distinga o Transtorno da Personalidade do simples 'jeito de ser'. A psicopatologia considera um traço como Transtorno quando este padrão de comportamento e experiência interna é:", 
      hint: "Tem de causar impacto real.", 
      options: [
        "Isolado, adaptável às situações e originado após eventos estressantes[cite: 28].", 
        "Difuso, inflexível, persistente e associado a forte sofrimento ou prejuízo funcional[cite: 28].", 
        "Dramático exclusivamente, pertencendo sempre ao Grupo B[cite: 28, 29].", 
        "Associado a delírios persecutórios e alucinações visuais elementares[cite: 24, 28]."
      ], 
      correct: 1 
    },
    { 
      topicId: "transtornos_personalidade", 
      question: "O DSM organiza os Transtornos da Personalidade em três grandes clusters (grupos). O Transtorno da Personalidade Paranoide e o Esquizoide pertencem a que grupo?", 
      hint: "Estes pacientes costumam ser muito isolados e percebidos como fora do padrão social.", 
      options: [
        "Grupo C - 'Ansiosos ou medrosos'[cite: 29].", 
        "Grupo B - 'Dramáticos, emotivos ou erráticos'[cite: 29].", 
        "Grupo A - 'Excêntricos ou esquisitos'[cite: 28].", 
        "Grupo D - 'Impulsivos e violentos'[cite: 28, 29]."
      ], 
      correct: 2 
    },
    { 
      topicId: "tp_antissocial_base", 
      question: "Durante a anamnese de um paciente de 35 anos suspeito de Transtorno da Personalidade Antissocial, a psicóloga foca a entrevista no histórico escolar e infantil. Qual a razão técnica para esta abordagem?", 
      hint: "O padrão tem de começar cedo.", 
      options: [
        "Para despistar a existência de delírios de descendência reprimidos na infância[cite: 26, 30].", 
        "Porque o transtorno antissocial exige a verificação de um padrão persistente que geralmente inicia com problemas de comportamento (furtos, fugas, agressões) na infância ou adolescência[cite: 28, 29, 30].", 
        "Para provar a falta de cuidado dos pais e justificar as alucinações complexas do presente[cite: 21, 30].", 
        "Porque apenas crianças que sofreram traumas diretos progridem para a psicopatia corporativa[cite: 30, 32]."
      ], 
      correct: 1 
    },
    { 
      topicId: "tp_antissocial_afetos", 
      question: "Após defraudar centenas de idosos através de esquemas telefónicos, o suspeito, durante a avaliação psicológica, afirma: 'Se eles não fossem tão ignorantes, não teriam sido enganados. Era dinheiro fácil'. Esta fala evidencia de forma clássica uma caraterística do TP Antissocial conhecida como:", 
      hint: "Onde está a responsabilidade?", 
      options: [
        "Delírio de Grandeza (sentir-se superior)[cite: 24, 31].", 
        "Alucinação Auditiva (ouviu ordens para o fazer)[cite: 20, 31].", 
        "Ausência de culpa e deslocação da responsabilidade para a própria vítima[cite: 31].", 
        "Afeto ansioso ou medroso enquadrado no Grupo C[cite: 29, 31]."
      ], 
      correct: 2 
    },
    { 
      topicId: "tp_antissocial_afetos", 
      question: "A avaliação dos afetos em pacientes antissociais revela frequentemente o que chamamos de 'superficialidade afetiva'. O que significa este termo num contexto de entrevista clínica?", 
      hint: "Parece real por fora, mas falta conteúdo por dentro.", 
      options: [
        "O paciente nunca chora nem expressa raiva em qualquer circunstância[cite: 31].", 
        "O paciente dramatiza a dor de forma superficial, mostrando pouca elaboração interna real quando os seus sentimentos são investigados a fundo[cite: 31].", 
        "O indivíduo só consegue sentir afetos de extrema depressão, confundindo o caso com delírio de ruína[cite: 25, 31].", 
        "É a incapacidade de usar as outras pessoas como fontes de gratificação[cite: 31]."
      ], 
      correct: 1 
    }
  ]
};
