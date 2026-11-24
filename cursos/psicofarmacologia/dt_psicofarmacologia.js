// =========================================================================
// cursos/psicofarmacologia/dt_psicofarmacologia.js
// Base de Dados Teórica, Leituras da Trilha, Grimório e Flashcards
// =========================================================================

window.DT_MODULES = [
  {
    id: 1,
    modulo: "Módulo 1",
    titulo: "Sistema Nervoso Central, Sinapse e Neurotransmissão",
    icone: "fa-brain",
    cor: "pink",
    topicos: [
      {
        subtopico: "1.1 Estrutura Fisiológica do Sistema Nervoso Central (SNC)",
        resumo: "O SNC é formado pelo encéfalo e pela medula espinal, constituindo o centro de integração, processamento cognitivo, emocional e alvo principal dos psicofármacos.",
        explicacao: "O <strong>Sistema Nervoso Central (SNC)</strong> é composto pelo <strong>encéfalo</strong> (cérebro, cerebelo e tronco encefálico) e pela <strong>medula espinal</strong>, protegidos por estruturas ósseas (crânio e coluna vertebral), pelas <strong>meninges</strong> (dura-máter, aracnoide e pia-máter) e pelo líquido cefalorraquidiano (líquor).<br><br>No encéfalo, destacam-se estruturas fundamentais para a Psicofarmacologia:<br>• <strong>Córtex Cerebral:</strong> Camada externa responsável pelas funções cognitivas superiores, linguagem, percepção e controle executivo (especialmente o córtex pré-frontal).<br>• <strong>Sistema Límbico (amígdala, hipocampo, giro do cíngulo):</strong> Regulação emocional, medo, memória e motivação.<br>• <strong>Diencéfalo (tálamo e hipotálamo):</strong> Retransmissão sensorial, controle hormonal, sono, apetite e homeostase.<br>• <strong>Núcleos da Base (estriado):</strong> Controle motor fino e hábitos — alvo importante dos efeitos motores de antipsicóticos.<br>• <strong>Tronco Encefálico (mesencéfalo, ponte e bulbo):</strong> Funções vitais (respiração, batimentos cardíacos) e origem dos principais núcleos produtores de neurotransmissores (como os núcleos da rafe para serotonina, o <em>locus coeruleus</em> para noradrenalina e a área tegmental ventral/substância negra para dopamina).",
        pontosChave: [
          "SNC = encéfalo (cérebro, cerebelo e tronco encefálico) + medula espinal.",
          "Substância cinzenta concentra corpos celulares e sinapses; substância branca concentra axônios mielinizados.",
          "Os núcleos produtores de monoaminas (rafe, locus coeruleus, ATV) situam-se no tronco encefálico e projetam-se para todo o cérebro.",
          "Células da glia (astrócitos, oligodendrócitos e micróglia) dão suporte metabólico, mielina e defesa imune ao SNC."
        ],
        exemplo: "Uma droga depressora do SNC em dose excessiva pode inibir os centros respiratórios localizados no bulbo (tronco encefálico), causando parada respiratória.",
        alerta: "O Sistema Nervoso Periférico (nervos e gânglios fora do crânio e da coluna) NÃO faz parte do SNC, embora psicofármacos frequentemente gerem efeitos colaterais periféricos (como boca seca e constipação)."
      },
      {
        subtopico: "1.2 Conceito de Sinapse e Fenda Sináptica",
        resumo: "A sinapse é a junção funcional especializada onde ocorre a comunicação entre um neurônio e outra célula, sendo o principal local de ação dos psicofármacos.",
        explicacao: "A <strong>sinapse</strong> é a região de comunicação funcional entre o terminal axônico de um <strong>neurônio pré-sináptico</strong> e a membrana (geralmente dendritos ou corpo celular) de um <strong>neurônio pós-sináptico</strong> (ou célula efetora).<br><br>Existem dois tipos de sinapses no SNC:<br>• <strong>Sinapses Elétricas:</strong> Mais raras em mamíferos adultos; permitem passagem direta e instantânea de íons através de junções comunicantes (<em>gap junctions</em>), sincronizando disparos rápidos.<br>• <strong>Sinapses Químicas:</strong> Amplamente predominantes no SNC humano e principal alvo da Psicofarmacologia. Nelas, os neurônios não se tocam fisicamente — são separados por um espaço microscópico chamado <strong>fenda sináptica</strong>. A comunicação ocorre mediante a liberação de mensageiros químicos (<strong>neurotransmissores</strong>) armazenados em <strong>vesículas sinápticas</strong>.",
        pontosChave: [
          "Sinapse é a unidade funcional de comunicação entre neurônios.",
          "Sinapses químicas predominam no SNC e possuem a fenda sináptica separando as membranas pré e pós-sináptica.",
          "Vesículas sinápticas armazenam neurotransmissores no terminal pré-sináptico.",
          "A membrana pós-sináptica contém receptores proteicos específicos que reconhecem o neurotransmissor."
        ],
        exemplo: "Quase todos os antidepressivos, ansiolíticos e antipsicóticos atuam modulando eventos que acontecem exatamente dentro da fenda sináptica ou nos receptores pós-sinápticos.",
        alerta: "A transmissão na sinapse química é unidirecional (do neurônio pré-sináptico para o pós-sináptico), diferentemente das sinapses elétricas, que podem ser bidirecionais."
      },
      {
        subtopico: "1.3 Neurotransmissão Química: Etapas e Sinalização",
        resumo: "A neurotransmissão química segue uma sequência precisa — da síntese e liberação do neurotransmissor até sua ligação ao receptor e inativação na fenda.",
        explicacao: "A <strong>neurotransmissão química</strong> é o processo pelo qual um impulso elétrico é convertido em sinal químico e novamente em sinal elétrico ou bioquímico no neurônio seguinte. Ela ocorre em <strong>6 etapas sequenciais</strong>:<br><br>1) <strong>Síntese:</strong> O neurotransmissor é produzido no neurônio a partir de precursores enzimáticos (ex.: triptofano -> serotonina).<br>2) <strong>Armazenamento:</strong> É estocado dentro de vesículas sinápticas para proteção contra enzimas degradadoras.<br>3) <strong>Liberação (Exocitose):</strong> A chegada do potencial de ação abre canais de <strong>cálcio ($Ca^{2+}$)</strong> no terminal pré-sináptico, fazendo as vesículas fundirem-se à membrana e liberarem o neurotransmissor na fenda.<br>4) <strong>Ligação aos Receptores:</strong> O neurotransmissor liga-se a receptores pós-sinápticos — <strong>ionotrópicos</strong> (abrem canais iônicos diretamente, resposta rápida) ou <strong>metabotrópicos</strong> (acoplados à proteína G, resposta mais lenta e duradoura com segundos mensageiros) — gerando potenciais excitatórios (PEPS) ou inibitórios (PIPS).<br>5) <strong>Inativação / Término do Sinal:</strong> Ocorre por <strong>recaptação</strong> (transportadores pré-sinápticos recolhem o neurotransmissor de volta, alvo dos ISRS), <strong>degradação enzimática</strong> na fenda ou no interior neuronal (ex.: enzima MAO ou acetilcolinesterase) ou difusão.<br>6) <strong>Autorregulação:</strong> <em>Autorreceptores</em> pré-sinápticos detectam excesso de neurotransmissor na fenda e freiam novas liberações.",
        pontosChave: [
          "A entrada de cálcio (Ca²⁺) no terminal pré-sináptico é o gatilho obrigatório para a liberação vesicular.",
          "Receptores ionotrópicos = ação rápida via canal iônico direto; Metabotrópicos = ação modulatória via proteína G.",
          "O sinal sináptico termina principalmente por recaptação pré-sináptica ou degradação enzimática.",
          "Psicofármacos intervêm em pontos específicos dessa cascata (bloqueando recaptação, inibindo enzimas ou ligando-se a receptores)."
        ],
        exemplo: "Os antidepressivos ISRS bloqueiam a etapa 5 (recaptação pré-sináptica de serotonina), mantendo o neurotransmissor disponível por mais tempo na fenda sináptica.",
        alerta: "Lembre-se da diferença: receptor ionotrópico é um canal iônico direto (como GABA-A); receptor metabotrópico usa proteína G e segundos mensageiros (como a maioria dos receptores de dopamina e serotonina)."
      },
      {
        subtopico: "1.4 Farmacocinética no SNC e Barreira Hematoencefálica",
        resumo: "Para agir no cérebro, todo psicofármaco precisa percorrer absorção, distribuição, biotransformação e excreção, além de atravessar a Barreira Hematoencefálica.",
        explicacao: "A <strong>Farmacocinética</strong> estuda 'o que o organismo faz com o fármaco' em quatro fases (<strong>ADME</strong>):<br>• <strong>Absorção:</strong> Passagem do local de administração (oral, sublingual, intramuscular, intravenosa) para a corrente sanguínea.<br>• <strong>Distribuição:</strong> Transporte pelo sangue até os tecidos-alvo. Para entrar no SNC, os psicofármacos precisam cruzar a <strong>Barreira Hematoencefálica (BHE)</strong> — uma camada seletiva de células endoteliais fortemente unidas que protege o cérebro contra toxinas. Por isso, psicofármacos são geralmente moléculas pequenas e <strong>lipossolúveis</strong>.<br>• <strong>Biotransformação (Metabolismo):</strong> Ocorre principalmente no <strong>fígado</strong> (sistema enzimático do <strong>Citocromo P450 — CYP450</strong>), transformando fármacos lipossolúveis em metabólitos hidrossolúveis para eliminação (onde ocorrem muitas interações medicamentosas).<br>• <strong>Excreção:</strong> Eliminação do organismo, sobretudo pelos <strong>rins</strong> (urina).<br><br>A <strong>meia-vida de eliminação ($t_{1/2}$)</strong> é o tempo necessário para a concentração do fármaco no sangue cair pela metade — parâmetro crucial para definir intervalos de dose e risco de síndrome de retirada.",
        pontosChave: [
          "ADME: Absorção, Distribuição, Metabolismo (fígado/CYP450) e Excreção (rins).",
          "Barreira Hematoencefálica (BHE) exige alta lipossolubilidade para que psicofármacos atuem no SNC.",
          "O sistema hepático CYP450 é o principal local de interações medicamentosas entre psicofármacos.",
          "Meia-vida curta favorece início/término rápidos, mas tende a gerar sintomas de abstinência mais intensos."
        ],
        exemplo: "A fluoxetina tem meia-vida muito longa (vários dias), por isso raramente causa síndrome de descontinuação abrupta, diferente de fármacos de meia-vida curta como a venlafaxina ou o alprazolam.",
        alerta: "Não confunda Farmacocinética ('o que o corpo faz com a droga' — ADME) com Farmacodinâmica ('o que a droga faz no corpo' — receptores e mecanismos de ação)."
      }
    ],
    flashcards: [
      { frente: "O que compõe o Sistema Nervoso Central (SNC)?", verso: "O encéfalo (cérebro, cerebelo e tronco encefálico) e a medula espinal." },
      { frente: "Qual íon desencadeia a fusão das vesículas e a liberação de neurotransmissores na fenda sináptica?", verso: "O íon cálcio (Ca²⁺), que entra no terminal pré-sináptico quando o potencial de ação chega." },
      { frente: "Qual a diferença entre receptores ionotrópicos e metabotrópicos?", verso: "Ionotrópicos abrem canais iônicos diretamente (resposta rápida); metabotrópicos atuam via proteína G e segundos mensageiros (resposta mais lenta e modulatória)." },
      { frente: "Quais são os dois principais mecanismos de término da ação de um neurotransmissor na fenda sináptica?", verso: "Recaptação pelo neurônio pré-sináptico (via transportadores) e degradação enzimática." },
      { frente: "O que é a Barreira Hematoencefálica (BHE) e qual característica ela exige dos psicofármacos?", verso: "É uma barreira seletiva que protege o SNC; exige que os psicofármacos sejam lipossolúveis para conseguir atravessá-la." },
      { frente: "Qual a diferença entre Farmacocinética e Farmacodinâmica?", verso: "Farmacocinética estuda o trajeto da droga no corpo (ADME); Farmacodinâmica estuda o mecanismo de ação e os efeitos da droga nos receptores." }
    ]
  },
  {
    id: 2,
    modulo: "Módulo 2",
    titulo: "Agonistas, Antagonistas e Neurotransmissores do SNC",
    icone: "fa-key",
    cor: "blue",
    topicos: [
      {
        subtopico: "2.1 Conceito de Agonista (Pleno, Parcial e Inverso)",
        resumo: "Um agonista é uma substância que possui afinidade por um receptor e atividade intrínseca capaz de ativá-lo, imitando ou potencializando o neurotransmissor natural.",
        explicacao: "Na Farmacodinâmica, os fármacos interagem com receptores celulares pelo modelo clássico 'chave-fechadura', avaliando-se duas propriedades: <strong>afinidade</strong> (capacidade de se ligar ao receptor) e <strong>atividade intrínseca / eficácia</strong> (capacidade de ativar o receptor e gerar resposta biológica).<br><br>Um <strong>Agonista</strong> possui tanto afinidade quanto atividade intrínseca, estimulando o receptor. Classifica-se em:<br>• <strong>Agonista Pleno (Total):</strong> Liga-se ao receptor e produz a <strong>resposta biológica máxima (100%)</strong>, imitando o neurotransmissor endógeno (ex.: morfina nos receptores opioides).<br>• <strong>Agonista Parcial:</strong> Liga-se ao mesmo receptor, mas produz apenas uma <strong>resposta submáxima</strong> mesmo em altas doses. Em presença de excesso do neurotransmissor natural, funciona como estabilizador (ex.: aripiprazol nos receptores dopaminérgicos D2).<br>• <strong>Agonista Inverso:</strong> Liga-se a um receptor que possui atividade basal constitutiva e produz o <strong>efeito oposto</strong> ao de um agonista pleno (reduzindo a atividade abaixo do nível basal).",
        pontosChave: [
          "Agonista = tem afinidade + atividade intrínseca (ativa o receptor).",
          "Agonista pleno gera resposta máxima; agonista parcial gera resposta intermediária/estabilizadora.",
          "Agonista inverso produz resposta biológica oposta à do agonista pleno.",
          "Existem também agonistas indiretos, que aumentam o neurotransmissor na fenda (ex.: bloqueando recaptação) sem se ligar diretamente ao receptor."
        ],
        exemplo: "A nicotina atua como agonista dos receptores nicotínicos de acetilcolina; a morfina atua como agonista pleno dos receptores opioides mu.",
        alerta: "Pegadinha clássica: Um agonista parcial pode atuar reduzindo a sinalização excessiva quando há muito agonista pleno presente, por isso é chamado de 'estabilizador' em alguns psicofármacos."
      },
      {
        subtopico: "2.2 Conceito de Antagonista e Modulação Alostérica",
        resumo: "Um antagonista possui afinidade pelo receptor, mas NÃO possui atividade intrínseca — bloqueando a ação do neurotransmissor natural ou de agonistas.",
        explicacao: "Um <strong>Antagonista</strong> é uma substância que tem <strong>afinidade</strong> pelo receptor, mas <strong>atividade intrínseca ZERO</strong>: ele se encaixa na 'fechadura' sem girá-la, impedindo que o neurotransmissor endógeno ou um agonista se ligue e ative a célula.<br><br>Principais tipos:<br>• <strong>Antagonista Competitivo (Reversível):</strong> Compete pelo mesmo sítio ativo do neurotransmissor; seu bloqueio pode ser revertido aumentando a concentração do agonista (ex.: haloperidol bloqueando receptores D2; naloxona revertendo overdose de opioides).<br>• <strong>Antagonista Não Competitivo / Irreversível:</strong> Liga-se firmemente ao sítio ativo ou a um sítio diferente, impedindo a resposta máxima mesmo com excesso de agonista.<br><br><strong>Modulador Alostérico:</strong> Liga-se a um sítio <em>diferente</em> (alostérico) do sítio principal do neurotransmissor, alterando a forma do receptor para <strong>potencializar</strong> (modulador alostérico positivo — como os <strong>benzodiazepínicos no receptor GABA-A</strong>) ou <strong>reduzir</strong> a ação do neurotransmissor natural — mas só funciona quando o neurotransmissor natural está presente.",
        pontosChave: [
          "Antagonista = tem afinidade, mas atividade intrínseca ZERO (bloqueia o receptor).",
          "Antagonistas competitivos disputam o mesmo sítio de ligação do neurotransmissor natural.",
          "Modulador alostérico positivo (ex.: benzodiazepínicos) potencializa a ação do neurotransmissor ligando-se a um sítio secundário.",
          "A naloxona é um antagonista opioide clássico usado para reverter overdoses fatais."
        ],
        exemplo: "O haloperidol atua como antagonista dos receptores de dopamina D2: ele bloqueia o receptor para impedir que o excesso de dopamina na via mesolímbica produza delírios e alucinações.",
        alerta: "Diferença essencial: Agonista ATIVA o receptor; Antagonista BLOQUEIA o receptor sem ativá-lo; Modulador Alostérico Positivo POTENCIALIZA o neurotransmissor natural ligando-se em outro ponto do receptor."
      },
      {
        subtopico: "2.3 Neurotransmissores do SNC I: Monoaminas",
        resumo: "Serotonina, dopamina e noradrenalina (monoaminas) regulam humor, ansiedade, prazer, motivação, atenção, sono e psicose, sendo os principais alvos dos psicofármacos.",
        explicacao: "As <strong>monoaminas</strong> são sistemas modulatórios difusos do SNC centrais na Psicofarmacologia:<br><br>• <strong>Serotonina (5-HT):</strong> Sintetizada a partir do triptofano nos <strong>núcleos da rafe</strong>. Regula <strong>humor, ansiedade, impulsividade, sono, apetite, dor e função sexual</strong>. Alvo prioritário dos antidepressivos ISRS e de antipsicóticos atípicos (receptores 5-HT2A).<br>• <strong>Dopamina (DA):</strong> Catecolamina sintetizada a partir da tirosina (substância negra e ATV). Regula <strong>motivação, sistema de recompensa/prazer, atenção, funções executivas, controle motor e inibição da prolactina</strong>. Desregulações relacionam-se à esquizofrenia, dependência química, TDAH e Doença de Parkinson.<br>• <strong>Noradrenalina / Norepinefrina (NA):</strong> Catecolamina originada no <strong>locus coeruleus</strong>. Regula <strong>estado de alerta, vigília, energia, concentração e resposta ao estresse (luta ou fuga)</strong>. Alvo de antidepressivos duais (IRSN), tricíclicos e estimulantes.",
        pontosChave: [
          "Serotonina (5-HT): núcleos da rafe -> humor, ansiedade, impulsividade, sono e apetite.",
          "Dopamina (DA): substância negra/ATV -> recompensa, motivação, cognição e controle motor.",
          "Noradrenalina (NA): locus coeruleus -> alerta, energia, atenção e resposta ao estresse.",
          "A enzima MAO (Monoaminoxidase) degrada as três monoaminas no interior do neurônio."
        ],
        exemplo: "A queda na disponibilidade funcional de serotonina e noradrenalina associa-se a sintomas depressivos e ansiosos, enquanto a hiperatividade dopaminérgica na via mesolímbica associa-se a sintomas psicóticos.",
        alerta: "A serotonina também está presente em grande quantidade no trato gastrointestinal — explicando por que náuseas e alterações intestinais são efeitos colaterais iniciais comuns dos ISRS."
      },
      {
        subtopico: "2.4 Neurotransmissores do SNC II: GABA, Glutamato e Acetilcolina",
        resumo: "GABA é o principal neurotransmissor inibitório do SNC, Glutamato é o principal excitatório e Acetilcolina é essencial para memória, atenção e contração muscular.",
        explicacao: "Além das monoaminas, três sistemas de neurotransmissores são vitais no funcionamento do SNC:<br><br>• <strong>GABA (Ácido Gama-Aminobutírico):</strong> É o <strong>principal neurotransmissor INIBITÓRIO</strong> do SNC. Ao ligar-se ao receptor <strong>GABA-A</strong>, abre canais de cloreto ($Cl^-$), tornando o interior do neurônio mais negativo (hiperpolarização) e reduzindo a excitabilidade cerebral. Alvo dos <strong>benzodiazepínicos</strong>, barbitúricos, álcool e fármacos Z (indutores do sono).<br>• <strong>Glutamato:</strong> É o <strong>principal neurotransmissor EXCITATÓRIO</strong> do SNC. Atua em receptores como <strong>NMDA e AMPA</strong>, sendo indispensável para a <strong>aprendizagem, memória e plasticidade sináptica (LTP)</strong>. Em excesso (excitotoxicidade), causa morte neuronal; sua modulação envolve fármacos como a cetamina/escetamina (depressão resistente) e memantina (Alzheimer).<br>• <strong>Acetilcolina (ACh):</strong> Atua em receptores nicotínicos e muscarínicos. No SNC é fundamental para <strong>memória, aprendizagem e atenção</strong> (degenera na Doença de Alzheimer); no SNP controla a contração muscular e o sistema parassimpático. O bloqueio colinérgico por psicofármacos (efeito anticolinérgico) causa boca seca, visão turva, constipação e confusão mental.",
        pontosChave: [
          "GABA = principal neurotransmissor INIBITÓRIO do SNC (abre canal de cloreto no receptor GABA-A).",
          "Glutamato = principal neurotransmissor EXCITATÓRIO do SNC (essencial para memória/LTP via NMDA/AMPA).",
          "Acetilcolina = crucial para memória e atenção no SNC; déficit acentuado na Doença de Alzheimer.",
          "O equilíbrio entre excitação (Glutamato) e inibição (GABA) previne tanto crises convulsivas quanto sedação excessiva."
        ],
        exemplo: "Crises convulsivas podem ocorrer quando há excesso de excitação glutamatérgica ou falha súbita da inibição GABAérgica (como na abstinência grave de álcool ou benzodiazepínicos).",
        alerta: "Questão clássica de prova: Principal neurotransmissor INIBITÓRIO = GABA; Principal neurotransmissor EXCITATÓRIO = Glutamato."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre Agonista e Antagonista na Farmacodinâmica?", verso: "Agonista tem afinidade + atividade intrínseca (ativa o receptor); Antagonista tem afinidade, mas atividade intrínseca zero (bloqueia o receptor sem ativá-lo)." },
      { frente: "Como funciona um Modulador Alostérico Positivo?", verso: "Liga-se a um sítio diferente do sítio principal do receptor, potencializando a ação do neurotransmissor endógeno quando este está presente." },
      { frente: "Qual é o principal neurotransmissor INIBITÓRIO e qual é o principal EXCITATÓRIO do SNC?", verso: "Inibitório: GABA (Ácido Gama-Aminobutírico). Excitatório: Glutamato." },
      { frente: "Quais são as três principais monoaminas estudadas na Psicofarmacologia?", verso: "Serotonina (5-HT), Dopamina (DA) e Noradrenalina (NA)." },
      { frente: "Qual neurotransmissor está fortemente associado à memória/atenção e sofre grave redução na Doença de Alzheimer?", verso: "Acetilcolina (ACh)." },
      { frente: "O que ocorre no neurônio pós-sináptico quando o GABA se liga ao receptor GABA-A?", verso: "Abrem-se canais de cloreto (Cl⁻), hiperpolarizando a membrana e diminuindo a chance de disparo neuronal (inibição)." }
    ]
  },
  {
    id: 3,
    modulo: "Módulo 3",
    titulo: "Antidepressivos e Teorias da Depressão",
    icone: "fa-capsules",
    cor: "emerald",
    topicos: [
      {
        subtopico: "3.1 Conceito de Antidepressivos e Princípios de Uso Clínico",
        resumo: "Antidepressivos são psicofármacos que modulam sistemas monoaminérgicos e neuroplasticidade para tratar transtornos depressivos, de ansiedade, TOC e TEPT.",
        explicacao: "Os <strong>Antidepressivos</strong> são medicamentos psicotrópicos originalmente desenvolvidos para o tratamento dos <strong>Transtornos Depressivos</strong>, mas que hoje constituem também a <strong>primeira linha farmacológica</strong> para Transtornos de Ansiedade (TAG, Pânico, Ansiedade Social), TOC e TEPT.<br><br><strong>Princípios clínicos fundamentais:</strong><br>• <strong>Latência de resposta (2 a 4 semanas):</strong> Embora o aumento de neurotransmissores na fenda ocorra em horas, a melhora clínica consistente leva de <strong>2 a 4 semanas</strong> (até 6–8 semanas para resposta plena), devido às adaptações lentas de receptores e neuroplasticidade.<br>• <strong>Não causam dependência química/euforia</strong> (diferente de estimulantes ou benzodiazepínicos), mas exigem <strong>desmame gradual</strong> ao encerrar o tratamento para evitar a <em>síndrome de descontinuação</em> (tontura, choques elétricos, irritabilidade).<br>• <strong>Risco de virada maníaca:</strong> Devem ser usados com extrema cautela em pacientes com Transtorno Bipolar.<br>• <strong>Síndrome Serotoninérgica:</strong> Emergência médica rara causada por excesso extremo de serotonina (ex.: combinação inadequada de ISRS com IMAO), gerando agitação, febre, rigidez e hiperreflexia.",
        pontosChave: [
          "Antidepressivos tratam depressão e são primeira linha para ansiedade, TOC e TEPT.",
          "Tempo de latência clínica: 2 a 4 semanas (não têm efeito ansiolítico/antidepressivo imediato no 1º dia).",
          "Não geram vício/dependência química, mas exigem retirada gradual para evitar síndrome de descontinuação.",
          "Nunca associar ISRS com IMAO pelo risco fatal de Síndrome Serotoninérgica."
        ],
        exemplo: "Um paciente toma sertralina há 5 dias e quer parar porque ainda sente tristeza e leve enjoo; a psicoeducação explica que os efeitos iniciais tendem a passar e que o benefício clínico aparece entre a 2ª e a 4ª semana.",
        alerta: "Antidepressivos NÃO funcionam como 'pílulas da felicidade' em pessoas sem depressão nem fazem efeito instantâneo como um analgésico."
      },
      {
        subtopico: "3.2 Teorias Neurobiológicas da Depressão",
        resumo: "A compreensão da depressão evoluiu da hipótese monoaminérgica clássica para as teorias de sensibilidade de receptores, eixo HPA e neuroplasticidade (BDNF).",
        explicacao: "Diversas <strong>teorias da depressão</strong> buscam explicar sua neurobiologia e o tempo de resposta dos medicamentos:<br><br><strong>1. Teoria Monoaminérgica Clássica (anos 1950–60):</strong> Propôs que a depressão decorreria de uma <strong>deficiência funcional de monoaminas</strong> (serotonina, noradrenalina e/ou dopamina) na fenda sináptica — inspirada na observação de que a reserpina (que depleta monoaminas) causava depressão e os primeiros antidepressivos aumentavam esses neurotransmissores.<br><strong>2. Hipótese da Regulação de Receptores (Down-regulation):</strong> Para explicar por que o fármaco aumenta a serotonina em horas mas só melhora o humor em semanas, propôs-se que o aumento crônico do neurotransmissor dessensibiliza/reduz receptores pré e pós-sinápticos hiperativos (<em>down-regulation</em>), processo que demora semanas.<br><strong>3. Teoria da Neuroplasticidade e Neurotrofinas (BDNF):</strong> Visão contemporânea central. O estresse crônico e a hiperatividade do <strong>eixo HPA (cortisol elevado)</strong> reduzem o fator neurotrófico <strong>BDNF</strong>, causando atrofia dendrítica e redução da neurogênese no <strong>hipocampo</strong> e no córtex pré-frontal. Os antidepressivos restauram a expressão do BDNF e a plasticidade sináptica.<br><strong>4. Teoria Neuroinflamatória:</strong> Demonstra que citocinas pró-inflamatórias elevadas interferem no metabolismo do triptofano e no humor.",
        pontosChave: [
          "Teoria Monoaminérgica: associa depressão à redução funcional de serotonina, noradrenalina e dopamina.",
          "Regulação de receptores (down-regulation) ajuda a explicar a latência de 2 a 4 semanas dos antidepressivos.",
          "Teoria da Neuroplasticidade: estresse crônico/cortisol reduz BDNF e sinapses no hipocampo; antidepressivos revertem esse processo.",
          "A depressão é multifatorial: envolve interação entre genética, neurobiologia, história afetiva e estressores psicossociais."
        ],
        exemplo: "A hipótese monoaminérgica pura não explica sozinha por que o paciente demora 3 semanas para melhorar; a teoria da neuroplasticidade (BDNF) e a dessensibilização de receptores completam essa explicação.",
        alerta: "A depressão NÃO é causada por uma única 'falta de serotonina simples' — hoje a neurociência entende a interação entre monoaminas, BDNF/neuroplasticidade, eixo do estresse (HPA) e fatores psicossociais."
      },
      {
        subtopico: "3.3 Mecanismos de Ação I: ISRS, IRSN e Antidepressivos Atípicos",
        resumo: "Os antidepressivos modernos bloqueiam seletivamente a recaptação de serotonina (ISRS), de serotonina e noradrenalina (IRSN) ou modulam dopamina e receptores específicos.",
        explicacao: "Os antidepressivos mais prescritos atualmente combinam eficácia com melhor perfil de segurança e tolerabilidade:<br><br>• <strong>ISRS (Inibidores Seletivos da Recaptação de Serotonina):</strong> Exemplos: <strong>fluoxetina, sertralina, escitalopram, citalopram, paroxetina e fluvoxamina</strong>. <em>Mecanismo:</em> Bloqueiam seletivamente o transportador pré-sináptico de serotonina (<strong>SERT</strong>), aumentando a disponibilidade de 5-HT na fenda sináptica. São 1ª escolha por terem baixa toxicidade em superdosagem. Efeitos adversos comuns: náuseas iniciais, insônia ou sonolência e disfunção sexual.<br>• <strong>IRSN (Inibidores da Recaptação de Serotonina e Noradrenalina — 'Duais'):</strong> Exemplos: <strong>venlafaxina, desvenlafaxina e duloxetina</strong>. <em>Mecanismo:</em> Bloqueiam os transportadores de serotonina (SERT) e noradrenalina (NET). Úteis também em quadros com dor crônica/neuropática e fadiga acentuada.<br>• <strong>Antidepressivos Atípicos:</strong><br>  - <strong>Bupropiona:</strong> Inibidor da recaptação de <strong>dopamina e noradrenalina (IRDN)</strong> — melhora energia/motivação, não causa disfunção sexual e auxilia na cessação do tabagismo (contraindicada em epilepsia e bulimia/anorexia pelo risco convulsivo).<br>  - <strong>Mirtazapina:</strong> Antagonista alfa-2 pré-sináptico e de receptores 5-HT2/5-HT3 — aumenta liberação de NA e 5-HT, provoca sedação e ganho de apetite (útil em depressão com insônia e perda de peso).<br>  - <strong>Trazodona:</strong> Antagonista 5-HT2A e inibidor fraco de SERT (muito usada também em doses baixas para insônia).",
        pontosChave: [
          "ISRS (fluoxetina, sertralina, escitalopram): bloqueiam SERT (recaptação de serotonina) — 1ª linha pela segurança.",
          "IRSN (venlafaxina, duloxetina): bloqueiam recaptação de serotonina e noradrenalina.",
          "Bupropiona atua em dopamina e noradrenalina (poupa função sexual; risco de reduzir limiar convulsivo).",
          "Mirtazapina atua por antagonismo alfa-2, sendo sedativa e estimuladora do apetite."
        ],
        exemplo: "Um paciente com depressão e insônia severa que perdeu muito peso pode se beneficiar da mirtazapina, enquanto um paciente que apresenta disfunção sexual com ISRS pode ter a bupropiona considerada pelo médico.",
        alerta: "Os ISRS são seguros em comparação aos antigos tricíclicos, mas a disfunção sexual (queda de libido/anorgasmia) é um dos motivos mais comuns de abandono do tratamento."
      },
      {
        subtopico: "3.4 Mecanismos de Ação II: Tricíclicos (ADTs) e IMAOs",
        resumo: "Os antidepressivos clássicos (Tricíclicos e IMAOs) possuem alta eficácia, mas foram substituídos como 1ª escolha devido aos efeitos adversos intensos e riscos de toxicidade.",
        explicacao: "Antes dos ISRS, duas grandes classes inauguraram a farmacoterapia da depressão nos anos 1950:<br><br>• <strong>Antidepressivos Tricíclicos (ADTs):</strong> Exemplos: <strong>amitriptilina, nortriptilina, imipramina e clomipramina</strong> (esta última muito eficaz no TOC). <em>Mecanismo:</em> Inibem a recaptação de <strong>serotonina e noradrenalina</strong>, porém de forma <strong>NÃO seletiva</strong> — bloqueando também receptores <strong>muscarínicos</strong> (efeitos anticolinérgicos: boca seca, constipação, retenção urinária, visão turva), <strong>histamínicos H1</strong> (sedação intensa e ganho de peso) e <strong>alfa-1 adrenérgicos</strong> (hipotensão postural/tontura). <em>Risco maior:</em> <strong>Cardiotoxicidade grave</strong> e alta letalidade em superdosagem (perigo elevado em pacientes com risco suicida).<br>• <strong>IMAOs (Inibidores da Monoaminoxidase):</strong> Exemplos: <strong>tranilcipromina e fenelzina</strong> (irreversíveis/não seletivos) e <strong>moclobemida</strong> (reversível para MAO-A). <em>Mecanismo:</em> Inibem a enzima <strong>monoaminoxidase (MAO)</strong>, impedindo a degradação intracelular de serotonina, noradrenalina e dopamina. <em>Risco clássico:</em> <strong>Crise hipertensiva ('efeito do queijo')</strong> quando combinados com alimentos ricos em <strong>tiramina</strong> (queijos curados, vinhos tintos, embutidos), além de interações graves com outros antidepressivos.",
        pontosChave: [
          "Tricíclicos (amitriptilina, clomipramina, imipramina): inibem recaptação de 5-HT e NA + bloqueiam receptores H1, M1 e alfa-1.",
          "Principal perigo dos tricíclicos: cardiotoxicidade (arritmias) em superdosagem.",
          "IMAOs (tranilcipromina): inibem a enzima MAO, impedindo a degradação de monoaminas.",
          "IMAOs clássicos exigem restrição alimentar de tiramina para evitar crise hipertensiva ('efeito do queijo')."
        ],
        exemplo: "A amitriptilina ainda é muito usada em doses baixas na clínica médica para prevenção de enxaqueca e dor neuropática, mas exige cautela em pacientes idosos ou com ideação suicida.",
        alerta: "Questão clássica de psicofarmacologia: 'Efeito do queijo' (crise hipertensiva por tiramina) está associado aos IMAOs; cardiotoxicidade e efeitos anticolinérgicos marcantes aos Tricíclicos."
      }
    ],
    flashcards: [
      { frente: "Qual é o tempo médio de latência para observar a resposta clínica consistente de um antidepressivo?", verso: "Entre 2 e 4 semanas de uso regular (devido à adaptação de receptores e neuroplasticidade/BDNF)." },
      { frente: "Qual o mecanismo de ação dos ISRS (ex.: fluoxetina, sertralina, escitalopram)?", verso: "Bloqueiam seletivamente o transportador pré-sináptico SERT, inibindo a recaptação de serotonina e aumentando sua disponibilidade na fenda sináptica." },
      { frente: "Por que os Antidepressivos Tricíclicos (ADTs) produzem tantos efeitos colaterais (boca seca, sedação, tontura)?", verso: "Porque não são seletivos: além de inibir recaptação de 5-HT e NA, bloqueiam receptores muscarínicos (M1), histamínicos (H1) e alfa-1 adrenérgicos." },
      { frente: "Como atuam os IMAOs e qual é o risco clássico associado à dieta?", verso: "Inibem a enzima monoaminoxidase (evitando a degradação de monoaminas); com alimentos ricos em tiramina (queijos curados, vinhos) podem causar crise hipertensiva grave ('efeito do queijo')." },
      { frente: "O que propõe a Teoria da Neuroplasticidade (BDNF) sobre a depressão?", verso: "O estresse crônico e o cortisol elevado reduzem o BDNF e prejudicam sinapses no hipocampo e córtex pré-frontal; os antidepressivos restauram o BDNF e a plasticidade neuronal." },
      { frente: "Qual antidepressivo atípico atua sobre dopamina e noradrenalina sem causar disfunção sexual?", verso: "A bupropiona (IRDN), que também auxilia no tratamento do tabagismo." }
    ]
  },
  {
    id: 4,
    modulo: "Módulo 4",
    titulo: "Benzodiazepínicos: Conceito, Mecanismo e Uso Racional",
    icone: "fa-moon",
    cor: "amber",
    topicos: [
      {
        subtopico: "4.1 Conceito de Benzodiazepínicos e Indicações Clínicas",
        resumo: "Benzodiazepínicos são fármacos depressores do SNC com ação ansiolítica, hipnótica, anticonvulsivante e relaxante muscular de início rápido.",
        explicacao: "Os <strong>Benzodiazepínicos (BZDs)</strong> — como <strong>diazepam, clonazepam, alprazolam, lorazepam e midazolam</strong> — são uma classe de psicofármacos introduzida nos anos 1960 (começando pelo clordiazepóxido e diazepam) que substituiu amplamente os antigos barbitúricos por possuírem uma <strong>janela terapêutica muito mais segura</strong>.<br><br>Eles apresentam <strong>cinco propriedades farmacológicas clássicas</strong>:<br>1) <strong>Ansiolítica:</strong> Reduzem rapidamente a ansiedade aguda e sintomas autonômicos.<br>2) <strong>Hipnótica / Sedativa:</strong> Facilitam a indução do sono em insônia aguda.<br>3) <strong>Anticonvulsivante:</strong> Interrompem crises epilépticas agudas (ex.: diazepam/midazolam em emergência).<br>4) <strong>Miorrelaxante:</strong> Relaxamento muscular central.<br>5) <strong>Amnésia anterógrada transitória:</strong> Útil em sedação pré-anestésica e exames invasivos.<br><br>Na clínica psiquiátrica moderna, são indicados preferencialmente para <strong>uso de curto prazo (2 a 4 semanas)</strong> em crises agudas de ansiedade/pânico, insônia aguda, agitação psicomotora ou síndrome de abstinência alcoólica — enquanto o tratamento de longo prazo da ansiedade deve ser feito com antidepressivos (ISRS/IRSN) e psicoterapia.",
        pontosChave: [
          "Exemplos clássicos: diazepam, clonazepam, alprazolam, lorazepam e midazolam.",
          "5 ações clínicas: ansiolítica, hipnótica/sedativa, anticonvulsivante, relaxante muscular e amnésia anterógrada.",
          "Substituíram os barbitúricos por terem margem de segurança muito maior (menor risco de overdose isolada).",
          "Indicação recomendada: uso pontual ou de curto prazo (não são 1ª linha para uso crônico em ansiedade)."
        ],
        exemplo: "No início do tratamento de Transtorno de Pânico, o psiquiatra pode prescrever um ISRS (ação de longo prazo) associado a um benzodiazepínico apenas nas primeiras 3 semanas até o antidepressivo fazer efeito.",
        alerta: "Em overdose isolada, os benzodiazepínicos raramente são fatais, MAS combinados com outros depressores (como ÁLCOOL ou OPIOIDES) potencializam a depressão respiratória e podem levar à morte!"
      },
      {
        subtopico: "4.2 Principais Mecanismos de Ação dos Benzodiazepínicos",
        resumo: "Os benzodiazepínicos atuam como moduladores alostéricos positivos do receptor GABA-A, aumentando a frequência de abertura do canal de cloreto.",
        explicacao: "O <strong>mecanismo de ação dos benzodiazepínicos</strong> ocorre no sistema inibitório do SNC, especificamente no <strong>receptor GABA-A</strong> (um canal iônico pentamérico permeável ao íon <strong>cloreto — $Cl^-$</strong>):<br><br>1) Os benzodiazepínicos <strong>NÃO se ligam ao mesmo sítio do GABA</strong>; eles se ligam a um sítio específico próprio (<em>sítio benzodiazepínico / alostérico</em>, localizado entre as subunidades alfa e gama do receptor GABA-A).<br>2) Atuam como <strong>Moduladores Alostéricos Positivos (PAMs)</strong>: aumentam a afinidade do receptor pelo GABA endógeno e <strong>aumentam a FREQUÊNCIA de abertura do canal de cloreto</strong>.<br>3) Com maior entrada de íons $Cl^-$ (carga negativa) no neurônio pós-sináptico, ocorre <strong>hiperpolarização da membrana</strong>, tornando o neurônio menos propenso a disparar potenciais de ação — resultando em diminuição da hiperexcitabilidade da amígdala (efeito ansiolítico) e do córtex (efeito sedativo).<br><br><strong>Por que são mais seguros que os barbitúricos?</strong> Porque os benzodiazepínicos <em>dependem da presença do GABA endógeno</em> (efeito teto), enquanto os barbitúricos em doses altas abrem o canal de cloreto diretamente mesmo sem GABA (causando parada respiratória facilmente).",
        pontosChave: [
          "Alvo: receptor GABA-A (canal de cloreto Cl⁻).",
          "Ação: Moduladores Alostéricos Positivos — aumentam a FREQUÊNCIA de abertura do canal de Cl⁻.",
          "Efeito celular: maior influxo de Cl⁻ -> hiperpolarização -> inibição neuronal.",
          "Antídoto específico em caso de intoxicação grave por benzodiazepínicos: Flumazenil (antagonista competitivo do sítio BZD)."
        ],
        exemplo: "Diferença clássica: Benzodiazepínicos aumentam a FREQUÊNCIA de abertura do canal de cloreto (dependendo do GABA); Barbitúricos aumentam o TEMPO de duração da abertura (e abrem diretamente em altas doses).",
        alerta: "Decore o antídoto específico de intoxicação por benzodiazepínicos: FLUMAZENIL."
      },
      {
        subtopico: "4.3 Classificação por Meia-Vida e Efeitos Cognitivos",
        resumo: "A meia-vida (curta, intermediária ou longa) determina o uso clínico (insônia, crises agudas ou abstinência), o risco de acúmulo em idosos e a intensidade da abstinência.",
        explicacao: "Os benzodiazepínicos diferenciam-se clinicamente sobretudo pela <strong>velocidade de início de ação</strong> e pela <strong>meia-vida de eliminação</strong>:<br>• <strong>Ação Ultracurta / Curta:</strong> Ex.: <strong>midazolam</strong> (sedação em procedimentos e emergências), <strong>triazolam</strong>.<br>• <strong>Ação Intermediária:</strong> Ex.: <strong>alprazolam</strong> (crises de pânico, início rápido, mas alto potencial de abstinência rebote) e <strong>lorazepam</strong> (metabolizado por glicuronidação direta — opção mais segura em pacientes com doença hepática e idosos quando necessário).<br>• <strong>Ação Longa:</strong> Ex.: <strong>diazepam e clonazepam</strong> (geram metabólitos ativos prolongados; úteis em abstinência alcoólica e epilepsia, mas causam sonolência diurna residual e acúmulo em idosos).<br><br><strong>Efeitos Adversos Cognitivos e Motores:</strong> Sonolência diurna, lentificação psicomotora (risco em direção de veículos), prejuízo na memória recente/atenção e, especialmente em <strong>idosos</strong>, aumento significativo do risco de <strong>quedas, fraturas, delirium e declínio cognitivo</strong> (além de possíveis reações paradoxais de agitação).",
        pontosChave: [
          "Ação curta: midazolam; Intermediária: alprazolam e lorazepam; Longa: diazepam e clonazepam.",
          "Lorazepam tem metabolismo hepático mais simples (preferido em hepatopatas).",
          "Em idosos, BZDs elevam drasticamente o risco de quedas, confusão mental (delirium) e prejuízo cognitivo.",
          "Podem causar 'efeito paradoxal' (agitação e desinibição) sobretudo em crianças e idosos."
        ],
        exemplo: "Um idoso de 78 anos usando clonazepam todas as noites há anos apresenta tontura matinal e sofre fratura de fêmur ao levantar para ir ao banheiro — complicação clássica do uso crônico de BZDs na terceira idade.",
        alerta: "Os 'fármacos Z' (zolpidem, eszopiclona) não são quimicamente benzodiazepínicos, mas atuam no mesmo receptor GABA-A (subunidade alfa-1) para induzir o sono e também trazem riscos de dependência e parassonias."
      },
      {
        subtopico: "4.4 Tolerância, Dependência, Abstinência e Uso Racional",
        resumo: "O uso contínuo e prolongado de benzodiazepínicos induz tolerância e dependência física; a suspensão abrupta pode desencadear síndrome de abstinência grave.",
        explicacao: "O maior problema clínico do uso prolongado de benzodiazepínicos (especialmente acima de 4 semanas contínuas) é o desenvolvimento de:<br>• <strong>Tolerância:</strong> Adaptação neuronal (redução da sensibilidade dos receptores GABA-A) que exige doses progressivamente maiores para obter o mesmo efeito sedativo/ansiolítico.<br>• <strong>Dependência Física e Psicológica:</strong> O organismo passa a depender da presença do fármaco para manter o equilíbrio excitação/inibição.<br>• <strong>Síndrome de Abstinência:</strong> A retirada abrupta deixa o sistema excitatório (glutamato) sem freio, gerando <strong>ansiedade rebote</strong> (pior que a original), insônia severa, tremores, sudorese, taquicardia, confusão e, em casos graves de doses altas, <strong>crises convulsivas potencialmente fatais</strong>.<br><br>Por isso, o manejo correto exige <strong>desmame lento e supervisionado</strong> (frequentemente convertendo BZDs de meia-vida curta para meia-vida longa e reduzindo a dose ao longo de semanas/meses) aliado à <strong>psicoterapia</strong> para desenvolver habilidades autônomas de enfrentamento da ansiedade.",
        pontosChave: [
          "Uso contínuo prolongado induz tolerância (necessidade de doses maiores) e dependência física.",
          "Retirada abrupta causa ansiedade/insônia rebote e, em casos graves, convulsões.",
          "A interrupção deve ser SEMPRE gradual e orientada por médico (desmame lento).",
          "Na psicoterapia, o uso crônico de BZDs como 'muleta' pode inclusive atrapalhar o aprendizado emocional nas técnicas de exposição."
        ],
        exemplo: "Um paciente que toma alprazolam 2 mg/dia há 2 anos decide parar 'de uma vez' por conta própria e, 48 horas depois, desenvolve tremores intensos, insônia total e uma crise convulsiva.",
        alerta: "Nunca oriente um paciente a suspender benzodiazepínicos abruptamente; qualquer redução deve ser planejada gradualmente junto ao médico prescritor."
      }
    ],
    flashcards: [
      { frente: "Qual é o mecanismo de ação exato dos Benzodiazepínicos?", verso: "Atuam como moduladores alostéricos positivos no receptor GABA-A, aumentando a frequência de abertura do canal de cloreto (Cl⁻) e hiperpolarizando o neurônio." },
      { frente: "Por que os benzodiazepínicos são mais seguros em overdose isolada do que os barbitúricos?", verso: "Porque os BZDs dependem da presença do GABA endógeno (efeito teto), enquanto os barbitúricos em altas doses abrem diretamente o canal de cloreto mesmo sem GABA." },
      { frente: "Qual é o antídoto específico para intoxicação aguda por benzodiazepínicos?", verso: "Flumazenil (antagonista competitivo do sítio benzodiazepínico no receptor GABA-A)." },
      { frente: "Por que a associação de benzodiazepínicos com álcool é extremamente perigosa?", verso: "Porque ambos atuam como depressores do SNC no sistema GABAérgico, somando efeitos e podendo causar depressão respiratória fatal." },
      { frente: "O que pode ocorrer se um usuário crônico de benzodiazepínicos suspender o medicamento abruptamente?", verso: "Síndrome de abstinência com ansiedade e insônia rebote, tremores, sudorese e até crises convulsivas graves." },
      { frente: "Por que o uso crônico de benzodiazepínicos deve ser evitado especialmente em idosos?", verso: "Pelo alto risco de sedação residual, quedas com fraturas, confusão mental (delirium) e declínio cognitivo." }
    ]
  },
  {
    id: 5,
    modulo: "Módulo 5",
    titulo: "Antipsicóticos: Conceito, Vias Dopaminérgicas e Mecanismos",
    icone: "fa-shield-halved",
    cor: "purple",
    topicos: [
      {
        subtopico: "5.1 Conceito de Antipsicóticos e Hipótese Dopaminérgica",
        resumo: "Antipsicóticos (neurolépticos) são psicofármacos voltados ao tratamento de sintomas psicóticos (esquizofrenia, mania psicótica), atuando centralmente nos receptores dopaminérgicos D2.",
        explicacao: "Os <strong>Antipsicóticos</strong> (historicamente chamados de <em>neurolépticos</em> ou tranquilizantes maiores) são medicamentos essenciais no tratamento da <strong>Esquizofrenia</strong>, outros transtornos psicóticos, episódios maníacos/mistos do Transtorno Bipolar, depressão psicótica e, em alguns casos, como potencializadores na depressão resistente ou manejo de agitação grave.<br><br>Sua descoberta nos anos 1950 (clorpromazina) fundamentou a <strong>Hipótese Dopaminérgica da Esquizofrenia</strong>:<br>• <strong>Hiperatividade dopaminérgica na via mesolímbica</strong> -> gera os <strong>sintomas positivos</strong> (delírios e alucinações).<br>• <strong>Hipoatividade dopaminérgica na via mesocortical</strong> -> contribui para os <strong>sintomas negativos e cognitivos</strong> (embotamento afetivo, avolição, alogia).<br><br>Todo antipsicótico disponível atualmente compartilha a capacidade de modular (geralmente bloquear como antagonista ou estabilizar como agonista parcial) os <strong>receptores dopaminérgicos D2</strong>.",
        pontosChave: [
          "Antipsicóticos tratam sintomas psicóticos (esquizofrenia, mania) e também atuam na estabilização do humor.",
          "Hipótese dopaminérgica: excesso de dopamina na via mesolímbica = sintomas positivos; déficit na via mesocortical = sintomas negativos/cognitivos.",
          "O alvo central comum a todos os antipsicóticos é o receptor dopaminérgico D2.",
          "Dividem-se em Antipsicóticos Típicos (1ª geração) e Antipsicóticos Atípicos (2ª geração)."
        ],
        exemplo: "Drogas que aumentam drasticamente a dopamina (como anfetaminas e cocaína em altas doses) podem induzir psicoses paranoides muito semelhantes à esquizofrenia — evidência clássica da hipótese dopaminérgica.",
        alerta: "Embora a dopamina seja o foco central, a neurobiologia da esquizofrenia envolve também desregulações de glutamato (hipofunção NMDA) e serotonina."
      },
      {
        subtopico: "5.2 As Quatro Vias Dopaminérgicas e Efeitos dos Antipsicóticos",
        resumo: "Compreender as 4 grandes vias dopaminérgicas explica tanto o efeito terapêutico quanto os principais efeitos colaterais neurológicos e hormonais dos antipsicóticos.",
        explicacao: "O bloqueio indiscriminado dos receptores D2 no cérebro produz efeitos totalmente diferentes conforme a <strong>via dopaminérgica</strong> atingida:<br><br><strong>1. Via Mesolímbica (ATV -> Núcleo Accumbens):</strong> Hiperativa na psicose. O bloqueio D2 aqui gera o <strong>efeito terapêutico desejado</strong> (redução de delírios e alucinações).<br><strong>2. Via Mesocortical (ATV -> Córtex Pré-Frontal):</strong> Já tende a ser hipoativa na esquizofrenia. Bloqueio D2 excessivo aqui pode <strong>piorar sintomas negativos e cognitivos</strong> (apatia, lentidão).<br><strong>3. Via Nigroestriatal (Substância Negra -> Estriado):</strong> Controla a motricidade voluntária. Bloqueio D2 intenso (> 80%) causa os <strong>Sintomas Extrapiramidais (SEP)</strong>: parkinsonismo medicamentoso (rigidez, tremor, bradicinesia), distonia aguda, acatisia (inquietação insuportável) e, no uso crônico, <strong>discinesia tardia</strong> (movimentos involuntários da boca/língua).<br><strong>4. Via Tuberoinfundibular (Hipotálamo -> Hipófise):</strong> A dopamina normalmente <em>inibe</em> a liberação do hormônio prolactina. Bloquear D2 nessa via causa <strong>hiperprolactinemia</strong> (galactorreia/secreção de leite, amenorreia, ginecomastia e disfunção sexual).",
        pontosChave: [
          "Via Mesolímbica -> alvo terapêutico (reduz sintomas positivos).",
          "Via Mesocortical -> bloqueio excessivo piora sintomas negativos e cognitivos.",
          "Via Nigroestriatal -> bloqueio D2 causa Sintomas Extrapiramidais (parkinsonismo, distonia, acatisia, discinesia tardia).",
          "Via Tuberoinfundibular -> bloqueio D2 causa hiperprolactinemia (galactorreia e alterações menstruais)."
        ],
        exemplo: "Um paciente em uso de alta dose de haloperidol melhora das vozes (via mesolímbica), mas desenvolve rigidez muscular e tremores nas mãos (bloqueio na via nigroestriatal).",
        alerta: "Decore as 4 vias dopaminérgicas — elas são o coração de qualquer prova de Psicofarmacologia sobre antipsicóticos!"
      },
      {
        subtopico: "5.3 Antipsicóticos Típicos (1ª Geração): Mecanismo e Perfis",
        resumo: "Os antipsicóticos típicos (haloperidol, clorpromazina) atuam principalmente como antagonistas potentes de receptores D2, com alto risco de efeitos extrapiramidais.",
        explicacao: "Os <strong>Antipsicóticos Típicos (ou de 1ª Geração — APGs)</strong> atuam fundamentalmente por <strong>antagonismo direto dos receptores dopaminérgicos D2</strong> em todas as vias. São altamente eficazes nos sintomas positivos, mas apresentam alto risco de <strong>Sintomas Extrapiramidais (SEP)</strong> e hiperprolactinemia. Dividem-se em dois perfis:<br><br>• <strong>Alta Potência (ex.: Haloperidol, Flufenazina):</strong> Alta afinidade por D2 -> <strong>maior risco de SEP</strong> (rigidez, acatisia, distonia), porém menos sedação e menos queda de pressão.<br>• <strong>Baixa Potência (ex.: Clorpromazina, Levomepromazina):</strong> Bloqueiam fortemente também receptores histamínicos H1, muscarínicos M1 e alfa-1 -> <strong>menos SEP</strong>, porém <strong>muita sedação, ganho de peso, boca seca e hipotensão postural</strong>.<br><br>Uma emergência médica rara e grave associada sobretudo a típicos de alta potência é a <strong>Síndrome Neuroléptica Maligna (SNM)</strong>: febre alta, rigidez muscular extrema ('cano de chumbo'), instabilidade autonômica e elevação da enzima CPK.",
        pontosChave: [
          "Mecanismo principal dos típicos: antagonismo potente dos receptores dopaminérgicos D2.",
          "Alta potência (haloperidol) = mais efeitos extrapiramidais (SEP), menos sedação.",
          "Baixa potência (clorpromazina) = mais sedação, hipotensão e efeitos anticolinérgicos, menos SEP.",
          "Síndrome Neuroléptica Maligna (febre alta + rigidez extrema) é uma emergência médica rara."
        ],
        exemplo: "Em emergências psiquiátricas com agitação psicótica severa, o haloperidol (alta potência) é frequentemente utilizado por via intramuscular para controle rápido do quadro.",
        alerta: "A discinesia tardia (movimentos involuntários repetitivos de face/língua após uso crônico de bloqueadores D2) pode ser irreversível, exigindo monitoramento contínuo."
      },
      {
        subtopico: "5.4 Antipsicóticos Atípicos (2ª Geração): Mecanismos e Efeitos Metabólicos",
        resumo: "Os antipsicóticos atípicos combinam antagonismo D2 com antagonismo serotoninérgico 5-HT2A (ou agonismo parcial D2), reduzindo efeitos motores mas exigindo atenção metabólica.",
        explicacao: "Os <strong>Antipsicóticos Atípicos (ou de 2ª Geração — ASGs)</strong> — como <strong>risperidona, olanzapina, quetiapina, clozapina, ziprasidona e aripiprazol</strong> — revolucionaram a clínica ao apresentarem <strong>menor risco de Sintomas Extrapiramidais (SEP)</strong> e melhor impacto sobre sintomas negativos e de humor.<br><br><strong>Principais Mecanismos de Ação:</strong><br>1) <strong>Antagonismo Serotonina–Dopamina (5-HT2A / D2):</strong> A maioria dos atípicos (risperidona, olanzapina, quetiapina, clozapina) bloqueia receptores <strong>D2</strong> (controlando a psicose na via mesolímbica) e simultaneamente bloqueia receptores <strong>5-HT2A</strong>. Como a serotonina em 5-HT2A normalmente <em>freia</em> a liberação de dopamina nas vias nigroestriatal e mesocortical, bloquear 5-HT2A libera dopamina nessas duas vias — <strong>protegendo contra efeitos motores (SEP)</strong> e ajudando nos sintomas negativos!<br>2) <strong>Agonismo Parcial D2 (ex.: Aripiprazol):</strong> Atua como 'estabilizador dopaminérgico', reduzindo o excesso de dopamina na via mesolímbica sem zerar a dopamina na via nigroestriatal.<br><br><strong>Destaques Clínicos e Efeitos Adversos:</strong><br>• <strong>Síndrome Metabólica:</strong> O principal efeito adverso de vários atípicos (especialmente <strong>olanzapina e clozapina</strong>) é o <strong>ganho de peso acentuado, dislipidemia e risco de diabetes tipo 2</strong>.<br>• <strong>Clozapina:</strong> É o antipsicótico <strong>mais eficaz para Esquizofrenia Refratária</strong> (e reduz risco suicida), mas é reservada para casos resistentes pelo risco de <strong>agranulocitose</strong> (queda grave de glóbulos brancos), exigindo hemogramas periódicos obrigatórios.",
        pontosChave: [
          "Mecanismo clássico dos atípicos: antagonismo D2 + antagonismo 5-HT2A (menor risco de SEP).",
          "Aripiprazol atua como agonista parcial D2 (estabilizador dopaminérgico).",
          "Principal efeito adverso de atípicos como olanzapina e clozapina: síndrome metabólica (ganho de peso, diabetes, colesterol alto).",
          "Clozapina = padrão-ouro na esquizofrenia refratária, mas exige controle rigoroso de hemograma (risco de agranulocitose)."
        ],
        exemplo: "Um paciente que não respondeu a dois outros antipsicóticos inicia clozapina com excelente melhora dos sintomas psicóticos, realizando exames de sangue regulares para monitorar seus leucócitos.",
        alerta: "Troca clássica de perfil de efeitos colaterais em provas: Típicos = maior risco MOTOR (SEP); Atípicos (olanzapina/clozapina) = maior risco METABÓLICO (peso/glicemia/lipídios)."
      }
    ],
    flashcards: [
      { frente: "Qual via dopaminérgica é o alvo terapêutico dos antipsicóticos e qual via explica os Sintomas Extrapiramidais (SEP)?", verso: "Alvo terapêutico: via mesolímbica. Sintomas Extrapiramidais (SEP): bloqueio D2 na via nigroestriatal." },
      { frente: "Por que o bloqueio D2 na via tuberoinfundibular causa galactorreia e amenorreia?", verso: "Porque a dopamina normalmente inibe a prolactina; ao bloqueá-la, os níveis de prolactina sobem (hiperprolactinemia)." },
      { frente: "Qual o mecanismo que diferencia os Antipsicóticos Atípicos (2ª geração) dos Típicos (1ª geração)?", verso: "Além do bloqueio D2, os atípicos bloqueiam receptores serotoninérgicos 5-HT2A (ou atuam como agonistas parciais D2, como o aripiprazol), reduzindo o risco de SEP." },
      { frente: "Qual antipsicótico é considerado o padrão-ouro para Esquizofrenia Refratária e qual exame obrigatório ele exige?", verso: "Clozapina; exige monitoramento regular de hemograma pelo risco de agranulocitose." },
      { frente: "Qual o principal grupo de efeitos adversos associados a atípicos como olanzapina e clozapina?", verso: "Efeitos metabólicos: ganho de peso significativo, aumento de colesterol/triglicerídeos e risco de diabetes (síndrome metabólica)." },
      { frente: "O que é a Síndrome Neuroléptica Maligna (SNM)?", verso: "Emergência médica rara ligada ao bloqueio dopaminérgico potente, caracterizada por febre alta, rigidez muscular intensa ('cano de chumbo') e instabilidade autonômica." }
    ]
  },
  {
    id: 6,
    modulo: "Módulo 6",
    titulo: "Drogas Psicotrópicas e Classificações (CID-10 e DSM-5)",
    icone: "fa-flask-vial",
    cor: "pink",
    topicos: [
      {
        subtopico: "6.1 Conceito e Classificação Geral das Drogas Psicotrópicas",
        resumo: "Drogas psicotrópicas (psicoativas) são substâncias que atuam no SNC alterando percepção, humor, consciência ou comportamento, classificadas classicamente em 3 grupos.",
        explicacao: "Chama-se <strong>droga psicotrópica (ou substância psicoativa)</strong> qualquer substância natural, semissintética ou sintética que, ao ingressar no organismo e atravessar a barreira hematoencefálica, modifica o funcionamento do <strong>Sistema Nervoso Central (SNC)</strong>, alterando humor, sensopercepção, consciência, cognição ou comportamento (incluindo tanto medicamentos prescritos quanto substâncias lícitas e ilícitas).<br><br>Classificam-se segundo sua <strong>situação legal</strong> (<em>lícitas</em>: álcool, tabaco, cafeína, medicamentos sob receita; <em>ilícitas</em>: cocaína, crack, LSD, heroína) e, sobretudo na Psicofarmacologia (classificação clássica de <strong>Chaloult</strong> adotada pelo CEBRID/SENAD), segundo seu <strong>efeito predominante no SNC</strong>:<br>1) <strong>Depressoras do SNC (Psicolépticos):</strong> Diminuem a atividade cerebral.<br>2) <strong>Estimulantes do SNC (Psicoanalépticos):</strong> Aumentam a atividade cerebral e a vigília.<br>3) <strong>Perturbadoras / Alucinógenas do SNC (Psicodislépticos):</strong> Alteram qualitativamente o funcionamento cerebral e a percepção.<br><br>Quase todas as drogas de abuso compartilham a capacidade de disparar liberação intensa de <strong>dopamina no Núcleo Accumbens (via mesolímbica de recompensa)</strong>, gerando reforço positivo e potencial de dependência.",
        pontosChave: [
          "Psicotrópico = substância que atua sobre o psiquismo/SNC alterando humor, percepção ou comportamento.",
          "Classificação farmacológica de Chaloult: Depressoras (psicolépticos), Estimulantes (psicoanalépticos) e Perturbadoras (psicodislépticos).",
          "Drogas lícitas (como álcool e tabaco) também são psicotrópicas e causam enorme impacto em saúde pública.",
          "O potencial de abuso associa-se fortemente à ativação da via dopaminérgica de recompensa (ATV -> Núcleo Accumbens)."
        ],
        exemplo: "O álcool é uma droga psicotrópica lícita classificada como DEPRESSORA do SNC — embora em doses baixas dê a falsa impressão inicial de 'animação' por inibir os freios inibitórios do córtex pré-frontal.",
        alerta: "Pegadinha clássica: Álcool NÃO é estimulante! Ele é DEPRESSOR do SNC; a euforia inicial ocorre por desinibição cortical (depressão das áreas de controle inibitório)."
      },
      {
        subtopico: "6.2 Drogas Depressoras e Drogas Estimulantes do SNC",
        resumo: "Depressoras lentificam o SNC (álcool, opioides, benzodiazepínicos, inalantes); Estimulantes aceleram o estado de alerta e a atividade simpática (cocaína, anfetaminas, nicotina, cafeína).",
        explicacao: "<strong>1. Drogas Depressoras do SNC (Psicolépticos):</strong><br>Reduzem a velocidade de funcionamento neuronal (frequentemente potencializando o sistema GABA ou inibindo o glutamato/ativando receptores opioides), gerando relaxamento, sedação, lentificação psicomotora e, em altas doses, coma e parada respiratória.<br>• <em>Principais representantes:</em> <strong>Álcool</strong> (potencializa GABA-A e inibe NMDA; abstinência grave pode causar <em>delirium tremens</em>), <strong>Benzodiazepínicos e Barbitúricos</strong>, <strong>Opioides/Opiáceos</strong> (morfina, codeína, heroína, tramadol, fentanil — analgesia potente, euforia e altíssimo risco de overdose respiratória) e <strong>Inalantes/Solventes</strong> (cola, lança-perfume/loló — alta neurotoxicidade).<br><br><strong>2. Drogas Estimulantes do SNC (Psicoanalépticos):</strong><br>Aumentam a atividade neuronal, a vigília, a energia motora, a pressão arterial e reduzem o sono e o apetite (atuando sobretudo aumentando dopamina, noradrenalina ou acetilcolina).<br>• <em>Principais representantes:</em> <strong>Cocaína e Crack</strong> (bloqueiam recaptação de dopamina/noradrenalina/serotonina; o crack tem absorção pulmonar ultrarrápida, pico intenso e curtíssimo, gerando fissura extrema), <strong>Anfetaminas e Metanfetamina</strong> (além de bloquear recaptação, forçam liberação de dopamina/NA), <strong>Metilfenidato</strong> (uso terapêutico no TDAH), <strong>Nicotina</strong> (agonista nicotínico de acetilcolina — altíssimo potencial de dependência) e <strong>Cafeína</strong> (antagonista de receptores de adenosina).",
        pontosChave: [
          "Depressoras: álcool, benzodiazepínicos, barbitúricos, opioides (heroína/morfina/fentanil) e inalantes.",
          "Estimulantes: cocaína/crack, anfetaminas/metanfetamina, metilfenidato, nicotina e cafeína.",
          "Crack é a mesma molécula da cocaína em forma de base livre fumada -> chegada ultrarrápida ao cérebro e fissura intensa.",
          "Cafeína bloqueia receptores de adenosina (que normalmente sinalizam fadiga/sono)."
        ],
        exemplo: "A intoxicação por opioides (depressor) apresenta a tríade clássica: depressão respiratória, rebaixamento da consciência e pupilas puntiformes (miose); já a intoxicação por cocaína (estimulante) gera agitação, taquicardia, hipertensão e pupilas dilatadas (midríase).",
        alerta: "Na abstinência grave de álcool (depressor), o cérebro entra em hiperexcitabilidade extrema (delirium tremens), podendo causar alucinações, convulsões e risco de morte."
      },
      {
        subtopico: "6.3 Drogas Perturbadoras (Alucinógenas) do SNC",
        resumo: "Drogas perturbadoras (psicodislépticos) modificam qualitativamente a atividade cerebral, produzindo distorções perceptivas, sensoriais, temporais e, por vezes, alucinações.",
        explicacao: "As <strong>Drogas Perturbadoras ou Alucinógenas do SNC (Psicodislépticos)</strong> não têm como efeito primário apenas 'acelerar' ou 'frear' o cérebro, mas <strong>modificar qualitativamente a percepção da realidade</strong>, gerando sinestesias ('ouvir cores'), alterações na noção de tempo/espaço, ilusões, alucinações ou estados de alteração da consciência.<br><br><strong>Principais representantes e mecanismos:</strong><br>• <strong>Cannabis (Maconha / THC):</strong> Principal princípio psicoativo é o <strong>THC</strong> (atua como agonista parcial nos receptores endocanabinoides <strong>CB1</strong>, modulando percepção, apetite, memória recente e relaxamento; o canabidiol — CBD — não é alucinógeno e tem propriedades ansiolíticas/anticonvulsivantes). O uso precoce e pesado de alto teor de THC em adolescentes vulneráveis associa-se a maior risco de desencadear quadros psicóticos.<br>• <strong>Alucinógenos Clássicos (Serotoninérgicos):</strong> <strong>LSD</strong> (sintético), <strong>Psilocibina</strong> (cogumelos), <strong>Mescalina</strong> (cacto peiote) e <strong>DMT / Ayahuasca</strong>. Atuam sobretudo como <strong>agonistas de receptores serotoninérgicos 5-HT2A</strong> no córtex, gerando intensas distorções visuais e emocionais ('bad trips' em contextos adversos).<br>• <strong>Anestésicos Dissociativos:</strong> <strong>Cetamina e Fenciclidina (PCP)</strong> — antagonistas de receptores <strong>NMDA</strong> (glutamato), gerando sensação de dissociação corpo-mente.<br>• <strong>MDMA (Ecstasy):</strong> Droga mista (<em>entactógena/empatógena</em>) com ação <strong>estimulante + perturbadora leve</strong>, promovendo liberação maciça de serotonina, dopamina e noradrenalina (risco de hipertermia e desidratação).",
        pontosChave: [
          "Perturbadoras alteram qualitativamente a sensopercepção, o pensamento e a experiência de tempo/espaço.",
          "Maconha (THC) atua em receptores endocanabinoides CB1; classificada no Brasil (CEBRID) entre as perturbadoras.",
          "LSD, psilocibina e DMT atuam principalmente como agonistas serotoninérgicos 5-HT2A.",
          "MDMA (ecstasy) tem perfil misto (estimulante + perturbador) com forte liberação de serotonina."
        ],
        exemplo: "Um usuário de LSD relata ver paredes respirando e sentir que músicas possuem cores vivas (sinestesia) devido à hiperativação dos receptores corticais 5-HT2A.",
        alerta: "Pegadinha clássica em provas brasileiras: A Maconha (Cannabis/THC) é classificada como droga PERTURBADORA do SNC (e não depressora pura)."
      },
      {
        subtopico: "6.4 CID-10 e DSM-5: Classificações dos Transtornos por Uso de Substâncias",
        resumo: "Enquanto a CID-10 separa 'Uso Nocivo' e 'Síndrome de Dependência' em categorias distintas, o DSM-5 unifica tudo no espectro de 'Transtorno por Uso de Substância' graduado por gravidade.",
        explicacao: "A compreensão clínica e diagnóstica do uso problemático de substâncias evoluiu significativamente entre a <strong>CID-10</strong> e o <strong>DSM-5 / DSM-5-TR</strong>:<br><br><strong>1. Classificação na CID-10 (Grupo F10–F19):</strong><br>Agrupa os transtornos mentais e comportamentais devidos ao uso de substância psicoativa (F10 álcool, F11 opioides, F12 canabinoides, F13 sedativos/hipnóticos, F14 cocaína, F15 outros estimulantes, F16 alucinógenos, F17 tabaco, F18 solventes, F19 múltiplas drogas). Separa em categorias distintas:<br>• <em>Intoxicação Aguda</em>;<br>• <em>Uso Nocivo para a Saúde</em> (padrão que já causa dano físico ou mental, sem fechar dependência);<br>• <em>Síndrome de Dependência</em> (exige >= 3 de 6 critérios em 12 meses: forte desejo/compulsão, perda de controle, abstinência, tolerância, abandono progressivo de prazeres/interesses e persistência apesar dos danos);<br>• <em>Estado de Abstinência</em> e <em>Transtorno Psicótico induzido</em>.<br><br><strong>2. Classificação no DSM-5 / DSM-5-TR:</strong><br><strong>Eliminou a divisão antiga entre 'Abuso' e 'Dependência'</strong> (que existia no DSM-IV) e unificou em um único diagnóstico dimensional: <strong>Transtorno por Uso de Substância (TUS)</strong>, avaliado por <strong>11 critérios em 12 meses</strong> (agrupados em: baixo controle, prejuízo social, uso arriscado e critérios farmacológicos de <strong>tolerância e abstinência</strong> — incluindo agora a <strong>fissura / craving</strong> e excluindo 'problemas legais'). A gravidade é classificada pelo número de critérios:<br>• <strong>Leve:</strong> 2 a 3 critérios;<br>• <strong>Moderado:</strong> 4 a 5 critérios;<br>• <strong>Grave:</strong> 6 ou mais critérios.<br><em>Nota clínica:</em> Tolerância e abstinência isoladas durante uso médico prescrito adequado (ex.: opioides para dor oncológica ou BZDs sob orientação) NÃO fecham diagnóstico de TUS.",
        pontosChave: [
          "CID-10 (F10–F19): separa 'Uso Nocivo' de 'Síndrome de Dependência' (>= 3 de 6 critérios em 12 meses).",
          "DSM-5: unificou abuso e dependência em 'Transtorno por Uso de Substância' (espectro contínuo de 11 critérios).",
          "Gravidade no DSM-5: Leve (2–3 critérios), Moderado (4–5 critérios) e Grave (6 ou mais critérios).",
          "O DSM-5 incluiu o critério de 'fissura/craving' e retirou o critério de 'problemas legais'."
        ],
        exemplo: "Um paciente apresenta há 1 ano forte fissura por álcool, tolerância aumentada, falhas repetidas em reduzir o consumo e faltas frequentes ao trabalho (4 critérios): no DSM-5 classifica-se como Transtorno por Uso de Álcool Moderado.",
        alerta: "Questão campeã de prova: Diferença estrutural entre CID-10 (categorias separadas: Uso Nocivo vs. Dependência) e DSM-5 (categoria única dimensional: Leve 2–3, Moderado 4–5, Grave >= 6)."
      }
    ],
    flashcards: [
      { frente: "Quais são as 3 grandes classes farmacológicas das drogas psicotrópicas segundo seu efeito no SNC?", verso: "Depressoras (psicolépticos), Estimulantes (psicoanalépticos) e Perturbadoras/Alucinógenas (psicodislépticos)." },
      { frente: "Por que o álcool é classificado como DEPRESSOR do SNC mesmo causando euforia inicial?", verso: "Porque em doses baixas ele deprime primeiro as áreas corticais responsáveis pelo controle inibitório (desinibição), mas seu efeito farmacológico global é depressor (GABA-A / NMDA)." },
      { frente: "Qual é a classificação da Maconha (THC) e em qual receptor cerebral ela atua?", verso: "É classificada como droga PERTURBADORA do SNC e atua principalmente como agonista parcial dos receptores endocanabinoides CB1." },
      { frente: "Qual o mecanismo de ação principal dos alucinógenos clássicos (LSD, psilocibina, DMT)?", verso: "Agonismo de receptores serotoninérgicos 5-HT2A no córtex cerebral." },
      { frente: "Como a CID-10 (F10–F19) e o DSM-5 diferem na classificação dos transtornos por uso de substâncias?", verso: "A CID-10 separa 'Uso Nocivo' e 'Síndrome de Dependência'; o DSM-5 unifica em 'Transtorno por Uso de Substância' em espectro único de 11 critérios." },
      { frente: "Quais são as faixas de gravidade do Transtorno por Uso de Substância no DSM-5?", verso: "Leve (2 a 3 critérios), Moderado (4 a 5 critérios) e Grave (6 ou mais critérios presentes em 12 meses)." }
    ]
  }
];
