// =========================================================================
// cursos/psicopatologia/dt_psicopatologia.js
// Base de Dados Teórica, Leituras da Trilha, Grimório e Flashcards
// =========================================================================

window.DT_MODULES = [
  {
    id: 1,
    modulo: "Módulo 1",
    titulo: "Conceitos de Psicopatologia, História da Loucura e Século XIX",
    icone: "fa-landmark",
    cor: "purple",
    topicos: [
      {
        subtopico: "1.1 Principais Conceitos de Psicopatologia",
        resumo: "A Psicopatologia é o estudo sistemático das alterações, fenômenos e processos relacionados ao sofrimento psíquico e aos transtornos mentais.",
        explicacao: "A <strong>Psicopatologia</strong> (do grego <em>psyche</em> = mente/alma, <em>pathos</em> = sofrimento/paixão, <em>logos</em> = estudo) é a disciplina que estuda a natureza, as manifestações e as causas do sofrimento psíquico e das alterações mentais. Diferencia-se da psiquiatria (especialidade médica focada em diagnóstico e tratamento) por constituir o campo teórico-clínico que fundamenta tanto a Psicologia Clínica quanto a Psiquiatria.<br><br>No estudo psicopatológico (como sistematizado por Paulo Dalgalarrondo e Karl Jaspers), distinguem-se conceitos essenciais:<br>• <strong>Sinal:</strong> Dado objetivo observável pelo clínico (ex.: agitação psicomotora, fala acelerada, choro).<br>• <strong>Sintoma:</strong> Vivência subjetiva relatada pelo paciente (ex.: tristeza profunda, angústia, alucinação auditiva).<br>• <strong>Síndrome:</strong> Conjunto de sinais e sintomas que ocorrem juntos de forma recorrente, mas que podem ter diversas causas.<br>• <strong>Nosologia / Transtorno:</strong> Classificação diagnóstica que reúne critérios sintomáticos, duração, curso e prejuízo funcional.",
        pontosChave: [
          "Psicopatologia estuda o sofrimento psíquico e as alterações das funções mentais.",
          "Sinal = objetivo/observável; Sintoma = subjetivo/relatado pelo sujeito.",
          "Síndrome = agrupamento recorrente de sinais e sintomas; Transtorno = categoria nosológica delimitada.",
          "Existem múltiplas abordagens psicopatológicas: descritiva/fenomenológica, psicodinâmica, comportamental-cognitiva e sociocultural."
        ],
        exemplo: "Um paciente relata sentir 'um aperto insuportável no peito e medo de morrer' (sintoma subjetivo), enquanto o clínico observa sudorese intensa e tremores nas mãos (sinais objetivos).",
        alerta: "A Psicopatologia não se reduz a decorar critérios de manuais; ela exige escuta da singularidade e compreensão do sofrimento no contexto de vida do sujeito."
      },
      {
        subtopico: "1.2 História da Loucura: Da Antiguidade à Grande Internação",
        resumo: "A percepção social da loucura mudou radicalmente ao longo dos séculos: de fenômeno sagrado ou demoníaco até objeto de exclusão social e, depois, doença médica.",
        explicacao: "Conforme analisado por <strong>Michel Foucault</strong> em <em>História da Loucura na Idade Clássica</em>, a loucura não foi sempre vista como 'doença mental':<br><br>• <strong>Antiguidade:</strong> Alternava entre explicações mágico-religiosas (possessão divina ou castigo dos deuses) e as primeiras hipóteses médicas de <strong>Hipócrates</strong> (teoria dos quatro humores — sangue, fleuma, bile amarela e bile negra, origem do termo <em>melancolia</em>).<br>• <strong>Idade Média:</strong> Forte influência teológica, associando comportamentos desviantes a possessões demoníacas, pecados ou bruxaria, frequentemente punidos pela Inquisição.<br>• <strong>Renascimento:</strong> A loucura era vista como expressão trágica ou satírica dos limites da razão (símbolo da <em>Nau dos Loucos</em>), circulando ainda nos espaços sociais.<br>• <strong>Idade Clássica (Século XVII — A Grande Internação):</strong> Com a ascensão do racionalismo e do Estado absolutista, surgem os grandes <strong>Hospitais Gerais</strong> (como o de Paris em 1656), que funcionavam como depósitos policiais e morais — confinando juntos loucos, mendigos, desempregados, órfãos e transgressores para 'limpar' as cidades.",
        pontosChave: [
          "Na Antiguidade, Hipócrates propôs a teoria humoral, rompendo com a visão puramente mítica.",
          "Na Idade Média predominou a leitura demonológica e moral da loucura.",
          "Na Idade Clássica (século XVII), a 'Grande Internação' (Foucault) isolou loucos junto a pobres e marginais nos Hospitais Gerais.",
          "Até o final do século XVIII, o internamento tinha função policial e de exclusão social, não médica."
        ],
        exemplo: "O Hospital Geral de Paris (1656) não tinha médicos voltados à cura mental; seu objetivo era recolher e disciplinar qualquer indivíduo considerado ocioso ou fora da ordem racional.",
        alerta: "Pegadinha clássica: A loucura só se tornou formalmente 'doença mental' sob tutela médica no final do século XVIII e início do século XIX (com Pinel)."
      },
      {
        subtopico: "1.3 Formas de Tratamento da Loucura a partir do Século XIX",
        resumo: "No século XIX nasceu a Psiquiatria moderna com Philippe Pinel, o Tratamento Moral, o hospital psiquiátrico (asilo) e a nosografia de Emil Kraepelin.",
        explicacao: "No final do século XVIII e ao longo do <strong>século XIX</strong>, a loucura foi apropriada pelo saber médico, inaugurando a <strong>Psiquiatria</strong>:<br><br>• <strong>Philippe Pinel (França) e o Tratamento Moral:</strong> Em 1793, Pinel simbolicamente 'desacorrentou os loucos' em Bicêtre e Salpêtrière, separando-os de criminosos e definindo a loucura como <em>alienação mental</em> (passível de cura). Contudo, propôs o <strong>isolamento terapêutico</strong> no asilo e o <strong>Tratamento Moral</strong> — baseado em disciplina rígida, trabalho obrigatório, ordem, vigilância constante e autoridade médica para 'reeducar' a razão perdida.<br>• <strong>Consolidação do Modelo Asilar/Manicomial:</strong> Ao longo do século XIX, os asilos superlotaram, transformando-se em instituições fechadas, cronificadoras e violentas (<em>instituições totais</em>, como analisou Erving Goffman), onde o isolamento produzia perda de identidade e exclusão permanente.<br>• <strong>Emil Kraepelin (Alemanha):</strong> No final do século XIX, consolidou o modelo organicista-descritivo, classificando transtornos pelo curso e prognóstico (diferenciando <em>demência precoce</em> [futura esquizofrenia] de <em>psicose maníaco-depressiva</em> [futuro transtorno bipolar]).",
        pontosChave: [
          "Pinel inaugurou a psiquiatria moderna, transformando o louco em 'alienado/doente mental'.",
          "O Tratamento Moral usava isolamento asilar, disciplina, trabalho e autoridade médica.",
          "Ao longo do século XIX, os asilos superlotaram e tornaram-se manicômios cronificadores e excludentes.",
          "Emil Kraepelin lançou as bases da nosografia psiquiátrica moderna (classificação de transtornos)."
        ],
        exemplo: "No modelo asilar do século XIX, um paciente internado tinha seus pertences retirados, usava uniforme padronizado e perdia o contato com a família e o direito civil de decisão.",
        alerta: "O gesto de Pinel tirou as correntes físicas, mas substituiu o controle policial pelo poder disciplinar do asilo — o que mais tarde a Reforma Psiquiátrica criticaria."
      },
      {
        subtopico: "1.4 Terapias Biológicas e a Crise do Modelo Manicomial",
        resumo: "Na primeira metade do século XX surgiram intervenções biológicas invasivas (lobotomia, choques) e, depois, os primeiros psicofármacos, revelando a crise dos manicômios.",
        explicacao: "Diante da superlotação e da ineficácia curativa dos manicômios do século XIX, a psiquiatria da primeira metade do século XX recorreu a <strong>terapias biológicas radicais</strong> e muitas vezes iatrogênicas: <strong>malarioterapia</strong>, <strong>coma insulínico</strong>, <strong>eletroconvulsoterapia (ECT)</strong> aplicada sem anestesia como punição ou contenção, e a <strong>psicocirurgia (lobotomia pré-frontal)</strong>, que deixava pacientes apáticos e com graves sequelas neurológicas.<br><br>Na década de 1950, a descoberta dos primeiros <strong>psicofármacos</strong> (como a <strong>clorpromazina</strong> em 1952) permitiu reduzir sintomas psicóticos agudos sem necessidade de contenção física constante, abrindo caminho técnico para o tratamento fora dos muros do hospital. Paralelamente, após a Segunda Guerra Mundial, comparações entre manicômios e campos de concentração escancararam as violações de direitos humanos nas instituições asilares, desencadeando o movimento global pela <strong>Reforma Psiquiátrica</strong>.",
        pontosChave: [
          "Século XX inicial: uso de coma insulínico, lobotomia e ECT sem anestesia em manicômios superlotados.",
          "Anos 1950: surgimento da clorpromazina (primeiro antipsicótico) possibilitou o manejo ambulatorial.",
          "Erving Goffman descreveu o manicômio como 'instituição total' que mortifica a identidade do sujeito.",
          "Denúncias de maus-tratos, cronificação e violação de direitos impulsionaram a Reforma Psiquiátrica."
        ],
        exemplo: "No Brasil, o Hospital Colônia de Barbacena (MG) ficou tristemente conhecido como o 'Holocausto Brasileiro', onde dezenas de milhares de pessoas (muitas sem doença mental) morreram em condições desumanas.",
        alerta: "Os psicofármacos ajudaram a viabilizar o cuidado fora do manicômio, mas sozinhos não substituem a transformação cultural e social proposta pela Reforma Psiquiátrica."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre Sinal, Sintoma e Síndrome em Psicopatologia?", verso: "Sinal é dado objetivo observável pelo clínico; Sintoma é vivência subjetiva relatada pelo paciente; Síndrome é um conjunto recorrente de sinais e sintomas." },
      { frente: "O que Michel Foucault chamou de 'A Grande Internação' no século XVII?", verso: "O confinamento policial e moral nos Hospitais Gerais que isolava loucos junto a pobres, mendigos e desempregados para manter a ordem social." },
      { frente: "Qual foi o papel histórico de Philippe Pinel no tratamento da loucura?", verso: "Inaugurou a psiquiatria moderna definindo a loucura como alienação mental (doença) e instituindo o isolamento asilar e o Tratamento Moral." },
      { frente: "Qual a contribuição de Emil Kraepelin no final do século XIX?", verso: "Estruturou a nosografia psiquiátrica moderna pelo curso clínico, diferenciando demência precoce (esquizofrenia) de psicose maníaco-depressiva (bipolar)." },
      { frente: "Por que Erving Goffman classificou os manicômios como 'instituições totais'?", verso: "Porque controlam todos os aspectos da vida do interno em um espaço fechado, promovendo perda de autonomia e 'mortificação do eu'." },
      { frente: "Qual marco farmacológico dos anos 1950 facilitou o tratamento fora dos manicômios?", verso: "A descoberta da clorpromazina (1952), primeiro antipsicótico eficaz no controle de sintomas psicóticos agudos." }
    ]
  },
  {
    id: 2,
    modulo: "Módulo 2",
    titulo: "Reforma Psiquiátrica, Normal/Patológico e Sintoma",
    icone: "fa-dove",
    cor: "emerald",
    topicos: [
      {
        subtopico: "2.1 Reforma Psiquiátrica no Mundo",
        resumo: "Após a Segunda Guerra Mundial, movimentos na Inglaterra, França, EUA e Itália questionaram o manicômio, culminando na Psiquiatria Democrática de Franco Basaglia.",
        explicacao: "A <strong>Reforma Psiquiátrica no mundo</strong> desenvolveu-se em ondas distintas a partir da década de 1940:<br><br>• <strong>Comunidades Terapêuticas (Inglaterra — Maxwell Jones) e Psicoterapia Institucional (França — François Tosquelles):</strong> Buscavam humanizar e democratizar o interior do hospital psiquiátrico, sem ainda propor sua extinção.<br>• <strong>Psiquiatria de Setor (França) e Psiquiatria Comunitária/Preventiva (EUA):</strong> Levaram equipes de saúde mental para os bairros/territórios para reduzir internações, mas mantiveram o hospital como retaguarda.<br>• <strong>Antipsiquiatria (Inglaterra — Ronald Laing e David Cooper):</strong> Questionou radicalmente o próprio conceito médico de doença mental, vendo a loucura como resposta a contradições familiares e sociais.<br>• <strong>Psiquiatria Democrática Italiana (Franco Basaglia — anos 1960–70):</strong> Principal inspiração da reforma brasileira. Em Gorizia e Trieste, Basaglia propôs a <strong>desinstitucionalização</strong>: desmontar o manicômio, colocar a doença 'entre parênteses' para enxergar o sujeito cidadão e criar serviços comunitários substitutivos. Em 1978, a Itália aprovou a histórica <strong>Lei 180 (Lei Basaglia)</strong>, proibindo a construção de novos hospitais psiquiátricos.",
        pontosChave: [
          "Comunidades Terapêuticas (Inglaterra) e Psicoterapia Institucional (França) focaram na reforma interna do hospital.",
          "Psiquiatria de Setor e Comunitária introduziram o cuidado territorial.",
          "Antipsiquiatria (Laing e Cooper) questionou o saber psiquiátrico tradicional.",
          "Psiquiatria Democrática Italiana (Franco Basaglia / Lei 180) inspirou diretamente a Reforma Psiquiátrica brasileira."
        ],
        exemplo: "Em Trieste, Franco Basaglia fechou o manicômio e construiu centros de saúde mental 24h no território, cooperativas de trabalho e moradias assistidas, devolvendo cidadania aos ex-internos.",
        alerta: "Desinstitucionalização (Basaglia) NÃO significa apenas 'dar alta e abandonar na rua' (desospitalização irresponsável); exige criar uma rede comunitária substitutiva real."
      },
      {
        subtopico: "2.2 Desdobramentos da Reforma Psiquiátrica no Brasil",
        resumo: "No Brasil, o Movimento da Luta Antimanicomial conquistou a Lei nº 10.216/2001 e substituiu o modelo hospitalocêntrico pela Rede de Atenção Psicossocial (RAPS).",
        explicacao: "A <strong>Reforma Psiquiátrica brasileira</strong> nasceu no final dos anos 1970 articulada à redemocratização e à Reforma Sanitária (com o Movimento dos Trabalhadores em Saúde Mental — MTSM — e o lema <em>'Por uma sociedade sem manicômios'</em>, celebrado no dia <strong>18 de maio</strong>, Dia Nacional da Luta Antimanicomial).<br><br>Seus principais <strong>desdobramentos legais e assistenciais</strong> são:<br>• <strong>Lei nº 10.216/2001 (Lei Paulo Delgado / Lei da Reforma Psiquiátrica):</strong> Garante os direitos das pessoas com transtornos mentais, proíbe internações em instituições com características asilares e define três modalidades de internação (apenas quando recursos extra-hospitalares se mostrarem insuficientes): <strong>voluntária</strong>, <strong>involuntária</strong> (com comunicação ao Ministério Público em 72h) e <strong>compulsória</strong> (determinada pela Justiça).<br>• <strong>Criação da RAPS (Portaria nº 3.088/2011):</strong> Substitui leitos asilares por <strong>CAPS</strong> (I, II, III, CAPSi, CAPSad), <strong>Serviços Residenciais Terapêuticos (SRTs)</strong>, <strong>Programa De Volta para Casa</strong>, Consultórios na Rua e leitos breves em hospitais gerais.",
        pontosChave: [
          "Lei nº 10.216/2001 é o marco legal da Reforma Psiquiátrica no Brasil.",
          "Internação só deve ocorrer como último recurso, sendo proibida em instituições de caráter asilar.",
          "Tipos de internação na Lei 10.216: voluntária, involuntária (aviso ao MP em 72h) e compulsória (judicial).",
          "Desdobramentos práticos: fechamento progressivo de manicômios e expansão dos CAPS, SRTs e RAPS."
        ],
        exemplo: "Um paciente que passou 20 anos em um hospital psiquiátrico recebe alta para um Serviço Residencial Terapêutico (casa inserida no bairro), passa a receber o benefício do Programa De Volta para Casa e faz acompanhamento no CAPS.",
        alerta: "Pegadinha clássica: A Lei nº 10.216/2001 NÃO proíbe toda e qualquer internação psiquiátrica; ela proíbe internações em manicômios/asilos e determina que a internação seja breve e último recurso."
      },
      {
        subtopico: "2.3 Pensamento Crítico sobre as Noções de Normal e Patológico",
        resumo: "Os conceitos de normal e patológico são históricos e relativos; Georges Canguilhem define saúde como normatividade — a capacidade de criar novas normas diante da vida.",
        explicacao: "Definir o que é <strong>normal</strong> e o que é <strong>patológico</strong> é um dos dilemas centrais da Psicopatologia. Existem diversos critérios tradicionalmente usados, todos com limitações:<br>• <strong>Critério Estatístico:</strong> Normal = o que é mais frequente na média populacional (falha: ter QI genial ou ser canhoto é raro, mas não é doença; cárie é frequente, mas é patologia).<br>• <strong>Critério Social/Cultural:</strong> Normal = o que segue as normas da cultura (falha: pode patologizar dissidentes políticos, minorias ou criatividade).<br>• <strong>Critério Subjetivo:</strong> Baseado na percepção pessoal de sofrimento (falha: alguém em mania aguda pode não sentir sofrimento, apesar de grave risco).<br>• <strong>Critério Funcional:</strong> Avalia se há prejuízo na autonomia e na vida cotidiana.<br><br>O filósofo e médico <strong>Georges Canguilhem</strong> (<em>O Normal e o Patológico</em>) propôs uma visão crítica revolucionária: o patológico não é apenas um 'desvio quantitativo' da média, mas uma <strong>outra norma de vida, mais estreita e rígida</strong>. Ter saúde (normalidade real) é possuir <strong>normatividade</strong> — capacidade flexível de tolerar crises, adaptar-se e criar novas normas diante das infidelidades do meio.",
        pontosChave: [
          "Critérios isolados (estatístico, social ou subjetivo) são insuficientes para definir o patológico.",
          "Georges Canguilhem: saúde é 'normatividade' — capacidade de criar novas normas e superar adversidades.",
          "O que uma sociedade chama de 'patológico' sofre forte influência de valores históricos, políticos e econômicos.",
          "A avaliação crítica pondera sofrimento psíquico, prejuízo funcional, perda de liberdade/flexibilidade e contexto cultural."
        ],
        exemplo: "Até 1973 no DSM e 1990 na CID, a homossexualidade era classificada como transtorno mental — prova histórica de como preconceitos sociais interferem na fronteira entre normal e patológico.",
        alerta: "Para Canguilhem, ser saudável não é 'nunca adoecer' nem 'obedecer cegamente à média'; é ter margem de segurança para adoecer e se recuperar criando novas formas de viver."
      },
      {
        subtopico: "2.4 Concepção de Sintoma: Psiquiatria Contemporânea vs. Psicanálise",
        resumo: "Para a Psiquiatria contemporânea (DSM/CID), o sintoma é um sinal objetivo de disfunção a ser eliminado; para a Psicanálise, é uma formação de compromisso portadora de sentido inconsciente.",
        explicacao: "Há uma diferença epistemológica profunda entre como a <strong>Psiquiatria Contemporânea</strong> e a <strong>Psicanálise</strong> concebem o <strong>sintoma</strong>:<br><br><strong>1. Psiquiatria Contemporânea (DSM-5-TR / CID-11):</strong><br>• Abordagem <strong>descritiva, ateórica e categorial</strong> (baseada em checklists de critérios observáveis e duração temporal).<br>• O sintoma é entendido como um <strong>indicador de disfunção biológica/mental</strong> ou desvio que causa prejuízo.<br>• O objetivo principal é a <strong>classificação nosológica</strong> e a <strong>eliminação/remissão rápida do sintoma</strong> (frequentemente via psicofarmacologia e protocolos focais).<br><br><strong>2. Psicanálise (Freud / Lacan / Winnicott):</strong><br>• O sintoma NÃO é um 'defeito sem sentido' a ser apagado de fora para dentro; é uma <strong>formação do inconsciente</strong> e uma <strong>formação de compromisso</strong> entre um desejo recalcado e a defesa do ego.<br>• O sintoma <strong>carrega uma verdade singular e uma mensagem cifrada</strong> sobre a história e os conflitos do sujeito (além de oferecer certo 'ganho' ou equilíbrio precário).<br>• A clínica psicanalítica busca <strong>escutar e decifrar</strong> o sintoma na transferência para que o sujeito encontre saídas menos sofridas, sem silenciar sua subjetividade.",
        pontosChave: [
          "Psiquiatria contemporânea (DSM/CID): sintoma = critério descritivo de disfunção; foco = diagnóstico categorial e remissão sintomática.",
          "Psicanálise: sintoma = formação de compromisso com sentido inconsciente singular; foco = escuta, implicação e elaboração.",
          "O modelo do DSM privilegia a universalização estatística (o que é igual em todos com depressão).",
          "A Psicanálise privilegia a singularidade (o que aquela tristeza específica significa na história daquele sujeito)."
        ],
        exemplo: "Diante de uma insônia persistente, a psiquiatria contemporânea investiga critérios de transtorno do sono/ansiedade e pode indicar medicação indutora; a psicanálise escuta o que mantém aquele sujeito em vigília, quais angústias e pensamentos emergem quando a casa silencia.",
        alerta: "Em saúde mental integrada (como nos CAPS), essas duas perspectivas não precisam guerrear: o cuidado pode aliviar o sofrimento agudo sem apagar a escuta da singularidade."
      }
    ],
    flashcards: [
      { frente: "Quem liderou a Psiquiatria Democrática Italiana (Lei 180) que inspirou a Reforma Psiquiátrica no Brasil?", verso: "Franco Basaglia." },
      { frente: "Quais são os 3 tipos de internação previstos na Lei nº 10.216/2001?", verso: "Voluntária (com consentimento do usuário), Involuntária (sem consentimento, a pedido de terceiro, avisando o MP em 72h) e Compulsória (determinada pela Justiça)." },
      { frente: "Qual o conceito de saúde proposto por Georges Canguilhem em 'O Normal e o Patológico'?", verso: "Normatividade: a capacidade flexível do organismo e do sujeito de tolerar crises e instituir novas normas diante das mudanças do meio." },
      { frente: "Por que o critério estatístico isolado falha ao definir normalidade em psicopatologia?", verso: "Porque fenômenos raros podem ser saudáveis/positivos (ex.: altas habilidades) e fenômenos muito frequentes podem ser patológicos (ex.: cárie ou estresse crônico)." },
      { frente: "Como a Psiquiatria contemporânea (DSM/CID) concebe o sintoma?", verso: "Como um indicador descritivo e objetivo de disfunção/transtorno, cujo objetivo clínico principal é a classificação e a remissão/eliminação." },
      { frente: "Como a Psicanálise concebe o sintoma?", verso: "Como uma formação de compromisso portadora de sentido inconsciente singular, resultante do conflito entre desejo recalcado e defesa." }
    ]
  },
  {
    id: 3,
    modulo: "Módulo 3",
    titulo: "Exame do Estado Mental (EEM) e Funções Psíquicas",
    icone: "fa-stethoscope",
    cor: "blue",
    topicos: [
      {
        subtopico: "3.1 Exame do Estado Mental (EEM): Conceito e Aparência/Atitude",
        resumo: "O Exame do Estado Mental (EEM) é a avaliação sistemática do funcionamento psíquico do paciente no momento presente ('fotografia clínica'), realizada durante a entrevista.",
        explicacao: "O <strong>Exame do Estado Mental (EEM)</strong> — também chamado de Exame Psíquico — é o equivalente em saúde mental ao exame físico na clínica médica. Enquanto a anamnese investiga o passado (história longitudinal), o EEM avalia de forma estruturada as <strong>funções psíquicas no aqui-e-agora da entrevista</strong>.<br><br>O EEM inicia-se pela observação da <strong>Aparência Geral e Atitude</strong>:<br>• <strong>Aparência:</strong> Higiene pessoal, vestimentas (adequadas ao clima e contexto ou bizarras/desleixadas), fácies (expressão facial de dor, tristeza, perplexidade) e contato visual.<br>• <strong>Atitude perante o entrevistador:</strong> Cooperativa, hostil, desconfiada/persecutória, sedutora, apática, evasiva ou querelante.<br><br>O registro do EEM deve ser sempre descritivo e objetivo, evitando rótulos precipitados e fornecendo linha de base para acompanhar a evolução do tratamento.",
        pontosChave: [
          "EEM avalia o funcionamento psíquico atual (corte transversal); Anamnese investiga a história de vida (longitudinal).",
          "Não é um interrogatório mecânico: grande parte do EEM é colhida pela observação atenta durante a entrevista.",
          "Aparência (higiene, vestuário, postura) e Atitude (cooperativa, hostil, retraída) abrem o exame.",
          "Serve para fundamentar hipóteses diagnósticas, avaliar risco e monitorar resposta ao tratamento."
        ],
        exemplo: "Registrar 'Paciente apresenta-se com vestes adequadas, higiene preservada, postura tensa, contato visual esquivo e atitude inicialmente desconfiada, tornando-se cooperativa ao longo da entrevista'.",
        alerta: "Sempre avalie aparência e comportamento considerando o contexto socioeconômico e cultural do paciente para não confundir pobreza ou estilo cultural com psicopatologia."
      },
      {
        subtopico: "3.2 Funções Psíquicas I: Consciência, Atenção, Orientação e Memória",
        resumo: "Avaliam o nível de lucidez, a capacidade de foco, a localização no tempo/espaço/si mesmo e a integridade da fixação e evocação mnemônica.",
        explicacao: "No EEM (referência clássica de Paulo Dalgalarrondo), o primeiro grande bloco de funções psíquicas envolve:<br><br>• <strong>Consciência:</strong> Avalia o nível de vigilância (<strong>lúcido/vígil</strong>) e alterações quantitativas (<strong>obnubilação</strong>, <strong>sopor/torpor</strong>, <strong>coma</strong>) ou qualitativas (<strong>delirium</strong> — confusão mental aguda com flutuação, comum em causas orgânicas/idosos; estado crepuscular).<br>• <strong>Orientação:</strong> Divide-se em <strong>autopsíquica</strong> (saber quem é: nome, idade, história) e <strong>alopsíquica</strong> (saber onde está — espaço — e quando está — tempo: dia, mês, ano). Em quadros orgânicos, a desorientação costuma começar pelo <em>tempo</em>.<br>• <strong>Atenção:</strong> Avalia <strong>tenacidade</strong> (manter o foco) e <strong>vigilância</strong> (mudar o foco para estímulos novos). Alterações: <strong>hipoprosexia</strong> (diminuição global da atenção, comum na depressão) e <strong>hipervigilância com hipotenacidade</strong> (distrai-se com tudo, típica da mania e TDAH).<br>• <strong>Memória:</strong> Avalia fixação (curto prazo/recente) e evocação (longo prazo/remota). Alterações: amnésias (anterógrada/retrógrada), <strong>paramnésias</strong> e <strong>confabulação</strong> (preencher lacunas de memória com relatos inventados sem intenção de mentir).",
        pontosChave: [
          "Consciência: lucidez vs. rebaixamento (obnubilação -> torpor -> coma) ou delirium (confusão aguda).",
          "Orientação: autopsíquica (sobre si) e alopsíquica (tempo e espaço).",
          "Atenção: hipoprosexia (queda global); na mania há hipervigilância com hipotenacidade.",
          "Memória: avalia memória imediata, recente e remota, além de amnésias e confabulações."
        ],
        exemplo: "Um idoso com infecção urinária que fica subitamente agitado à noite, sem saber que dia é hoje nem onde está, apresenta alteração da consciência (delirium) e desorientação alopsíquica.",
        alerta: "Pegadinha clássica: Na maioria dos transtornos psiquiátricos primários (como esquizofrenia ou depressão), o paciente está LÚCIDO; rebaixamento da consciência/delirium aponta fortemente para causa orgânica/clínica."
      },
      {
        subtopico: "3.3 Funções Psíquicas II: Sensopercepção, Pensamento e Linguagem",
        resumo: "Investigam a presença de ilusões e alucinações, bem como alterações no curso, forma e conteúdo (delírios) do pensamento e da fala.",
        explicacao: "Este bloco é central na investigação de quadros psicóticos, ansiosos e do humor:<br><br>• <strong>Sensopercepção:</strong> Distingue-se <strong>Ilusão</strong> (percepção <em>distorcida</em> de um objeto real presente — ex.: ver um casaco pendurado como se fosse uma pessoa) de <strong>Alucinação</strong> (percepção sensorial vívida <em>SEM objeto real presente</em> — auditivas [vozes comentando ou comandando, mais comuns na esquizofrenia], visuais [muito ligadas a causas orgânicas/substâncias], táteis, olfativas ou gustativas).<br>• <strong>Pensamento:</strong> Avaliado em três dimensões:<br>  1) <em>Curso (velocidade):</em> Acelerado/<strong>taquipsiquismo</strong> (mania), lentificado/<strong>bradipsiquismo</strong> (depressão), <strong>bloqueio do pensamento</strong> (interrupção súbita).<br>  2) <em>Forma (estrutura):</em> <strong>Fuga de ideias</strong> (associações rápidas que perdem o fio, típica da mania), <strong>afrouxamento dos nexos / desagregação</strong> (perda da lógica, típica da esquizofrenia), prolixidade.<br>  3) <em>Conteúdo:</em> Ideias prevalentes, obsessivas, suicidas e <strong>Delírios</strong> (crenças falsas, irredutíveis à argumentação lógica e não compartilhadas culturalmente — persecutórios, de grandeza, de referência, místicos, somáticos, de ruína/culpa).<br>• <strong>Linguagem:</strong> Avalia fluência, volume, ritmo (<strong>logorreia</strong> = fala incessante; <strong>mutismo</strong>), <strong>neologismos</strong> (palavras inventadas) e <strong>ecolalia</strong> (repetir a fala do outro).",
        pontosChave: [
          "Ilusão = distorção de estímulo REAL; Alucinação = percepção SEM estímulo externo real.",
          "Pensamento tem 3 eixos: Curso (velocidade), Forma (organização) e Conteúdo (temas/delírios).",
          "Delírio é alteração do CONTEÚDO do pensamento (crença falsa, irredutível e fora do contexto cultural).",
          "Fuga de ideias + taquipsiquismo + logorreia = tríade clássica da mania; bradipsiquismo = típico da depressão."
        ],
        exemplo: "Ouvir vozes claras xingando quando não há ninguém no quarto é uma alucinação auditiva (sensopercepção); acreditar com certeza absoluta que a TV está enviando mensagens secretas da CIA é um delírio de referência/persecutório (conteúdo do pensamento).",
        alerta: "Nunca confunda Alucinação (alteração da SENSOPERCEPÇÃO) com Delírio (alteração do CONTEÚDO DO PENSAMENTO) — questão campeã em provas!"
      },
      {
        subtopico: "3.4 Funções Psíquicas III: Afetividade, Vontade, Psicomotricidade e Juízo Crítico",
        resumo: "Avaliam o estado de humor e a expressão afetiva, a energia volitiva e motora, além da consciência de morbidade (insight).",
        explicacao: "O último bloco do EEM integra emoção, ação e autopercepção:<br><br>• <strong>Afetividade (Humor e Afeto):</strong> O <strong>humor</strong> é o estado emocional basal e sustentado ('o clima'); o <strong>afeto</strong> é a expressão emocional observável no momento ('o tempo hoje'). Estados do humor: <strong>eutímico</strong> (normal), <strong>hipotímico/deprimido</strong>, <strong>hipertímico/eufórico</strong> (mania), <strong>disfórico/irritável</strong>. Alterações do afeto: <strong>embotamento afetivo</strong> (expressão reduzida/fria, comum na esquizofrenia), <strong>labilidade afetiva</strong> (mudanças bruscas), <strong>inadequação afetiva</strong> (rir ao relatar uma tragédia) e <strong>anedonia</strong> (perda da capacidade de sentir prazer).<br>• <strong>Vontade (Volição) e Pragmatismo:</strong> Avalia a disposição para agir. <strong>Hipobulia / Abulia</strong> = redução ou perda da vontade/iniciativa (depressão e esquizofrenia negativa); impulsividade = atos sem deliberação prévia.<br>• <strong>Psicomotricidade:</strong> Agitação psicomotora, lentificação/retardo psicomotor, <strong>estupor</strong> e <strong>catatonia</strong> (imobilidade, flexibilidade cérea ou negativismo).<br>• <strong>Juízo Crítico e Insight (Consciência de Morbidade):</strong> Capacidade de avaliar a realidade e reconhecer que apresenta um sofrimento/transtorno e precisa de cuidado (insight preservado, parcial ou ausente).",
        pontosChave: [
          "Humor = estado emocional basal duradouro (eutímico, hipotímico, hipertímico); Afeto = expressão emocional momentânea.",
          "Anedonia (perda do prazer) e hipobulia (queda da vontade) são marcantes na depressão.",
          "Embotamento afetivo é sintoma negativo clássico na esquizofrenia.",
          "Insight (juízo crítico de morbidade) indica o grau de reconhecimento do próprio adoecimento."
        ],
        exemplo: "Um paciente que diz 'não sinto mais vontade de levantar da cama nem prazer em ver meus filhos' apresenta hipotimia, hipobulia e anedonia.",
        alerta: "Humor é o estado interno sustentado ao longo de dias/semanas; afeto é a manifestação externa observada na face, voz e gestos durante a entrevista."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre Ilusão e Alucinação?", verso: "Ilusão é a percepção distorcida de um objeto real presente; Alucinação é uma percepção sensorial vívida sem nenhum estímulo externo real." },
      { frente: "A qual função psíquica pertencem o Delírio e a Alucinação, respectivamente?", verso: "Delírio pertence ao CONTEÚDO DO PENSAMENTO; Alucinação pertence à SENSOPERCEPÇÃO." },
      { frente: "Diferencie Orientação Autopsíquica de Orientação Alopsíquica.", verso: "Autopsíquica refere-se ao conhecimento sobre si mesmo (identidade); Alopsíquica refere-se à localização no tempo e no espaço." },
      { frente: "Qual a diferença entre Humor e Afeto no Exame do Estado Mental?", verso: "Humor é o estado emocional basal e sustentado ('clima'); Afeto é a expressão emocional observável no momento da entrevista ('tempo agora')." },
      { frente: "O que significam Anedonia, Hipobulia e Embotamento Afetivo?", verso: "Anedonia = perda da capacidade de sentir prazer; Hipobulia = diminuição da vontade/iniciativa; Embotamento afetivo = redução acentuada da expressão emocional." },
      { frente: "O que indica o rebaixamento do nível de consciência (ex.: delirium) no EEM?", verso: "Sugere fortemente etiologia orgânica/clínica (infecção, intoxicação, distúrbio metabólico), diferenciando-se da maioria dos transtornos psiquiátricos primários." }
    ]
  },
  {
    id: 4,
    modulo: "Módulo 4",
    titulo: "Transtornos do Humor: Depressivos e Bipolar",
    icone: "fa-cloud-sun-rain",
    cor: "amber",
    topicos: [
      {
        subtopico: "4.1 Principais Manifestações dos Transtornos Depressivos",
        resumo: "Os Transtornos Depressivos caracterizam-se por humor deprimido ou perda de prazer (anedonia) persistentes, acompanhados de alterações somáticas, cognitivas e volitivas.",
        explicacao: "Os <strong>Transtornos Depressivos</strong> (DSM-5-TR) diferem radicalmente da tristeza normal ou do luto adaptativo pela intensidade, duração e comprometimento funcional. O principal quadro é o <strong>Transtorno Depressivo Maior (TDM)</strong>, cujo diagnóstico exige <strong>pelo menos 5 sintomas durante no mínimo 2 semanas</strong>, sendo obrigatório apresentar <strong>(1) humor deprimido</strong> (ou irritável em crianças/adolescentes) e/ou <strong>(2) anedonia</strong> (perda acentuada de interesse ou prazer).<br><br>Os demais sintomas incluem: alteração significativa de peso/apetite, insônia ou hipersonia, agitação ou retardo psicomotor, fadiga/perda de energia (hipobulia), sentimentos de inutilidade ou culpa excessiva, dificuldade de concentração/indecisão e pensamentos recorrentes de morte ou ideação suicida.<br><br>Outros quadros incluem o <strong>Transtorno Depressivo Persistente (Distimia)</strong> — humor deprimido crônico por pelo menos <strong>2 anos</strong> em adultos (1 ano em crianças/adolescentes), de intensidade mais branda porém contínua — e o <strong>Transtorno Disfórico Pré-Menstrual</strong>.",
        pontosChave: [
          "TDM exige >= 5 sintomas por >= 2 semanas, incluindo obrigatoriamente humor deprimido e/ou anedonia.",
          "Sintomas abrangem esfera afetiva (tristeza/culpa), cognitiva (desatenção/pessimismo) e somática (sono/apetite/fadiga).",
          "Transtorno Depressivo Persistente (Distimia): sintomas depressivos crônicos por no mínimo 2 anos em adultos.",
          "Em crianças e adolescentes, o humor depressivo pode manifestar-se principalmente como irritabilidade persistente."
        ],
        exemplo: "Uma mulher de 30 anos relata que há 1 mês não sente prazer em nada, dorme mal, perdeu 5 kg, sente culpa constante e não consegue trabalhar — preenchendo critérios para Episódio Depressivo Maior.",
        alerta: "A depressão NÃO é 'falta de força de vontade'; envolve alterações neurobiológicas, cognitivas e psicossociais que demandam cuidado clínico."
      },
      {
        subtopico: "4.2 Diagnóstico Diferencial, Risco Suicida e Manejo na Depressão",
        resumo: "Na avaliação depressiva, é indispensável diferenciar de luto normal, descartar episódios prévios de mania (bipolaridade) e avaliar ativamente o risco suicida.",
        explicacao: "O manejo clínico dos transtornos depressivos exige três cuidados diagnósticos cruciais:<br>1) <strong>Depressão vs. Luto Normal:</strong> No luto, a dor vem em 'ondas' associadas às lembranças da perda, a autoestima costuma estar preservada e ainda há momentos de afeto positivo; no TDM, o humor deprimido é persistente, generalizado e frequentemente acompanhado de autodesvalorização intensa e culpa.<br>2) <strong>Investigar Histórico de Mania/Hipomania:</strong> Antes de confirmar depressão unipolar, deve-se sempre perguntar se o paciente já teve fases de euforia/energia exagerada no passado — pois prescrever antidepressivo isolado a um paciente bipolar pode desencadear <em>virada maníaca</em>.<br>3) <strong>Avaliação de Risco Suicida:</strong> Perguntar diretamente sobre ideação, plano e intenção suicida <strong>NÃO induz o suicídio</strong>; pelo contrário, acolhe a dor e permite acionar proteção imediata, rede de apoio e tratamento combinado (psicoterapia + acompanhamento psiquiátrico em casos moderados/graves).",
        pontosChave: [
          "Luto normal: dor em ondas ligada à perda e autoestima preservada; TDM: tristeza persistente com desvalorização global.",
          "Sempre descartar história prévia de mania/hipomania (para não confundir depressão bipolar com unipolar).",
          "Investigar ideação suicida com empatia e clareza é dever ético e medida protetiva essencial.",
          "Psicoterapia baseada em evidências e farmacoterapia (em casos moderados/graves) são os pilares do cuidado."
        ],
        exemplo: "Um paciente busca ajuda em fase depressiva; durante a anamnese, o psicólogo descobre que há 2 anos ele ficou 10 dias sem dormir, gastou todas as economias e acreditava ter poderes especiais — sinalizando Transtorno Bipolar, não depressão unipolar.",
        alerta: "Mito perigoso: Falar abertamente e de forma acolhedora sobre suicídio com um paciente em sofrimento NÃO 'coloca a ideia na cabeça dele' — reduz o isolamento e salva vidas."
      },
      {
        subtopico: "4.3 Transtorno Bipolar e Transtornos Relacionados",
        resumo: "O Transtorno Bipolar envolve alternância entre episódios de elevação anormal do humor/energia (mania ou hipomania) e episódios depressivos.",
        explicacao: "O <strong>Transtorno Bipolar</strong> caracteriza-se por oscilações patológicas do humor, da energia e do nível de atividade, que vão muito além das variações emocionais cotidianas. Classifica-se principalmente em:<br><br>• <strong>Transtorno Bipolar Tipo I:</strong> Definido pela ocorrência de <strong>pelo menos 1 Episódio Maníaco</strong> ao longo da vida (duração mínima de <strong>7 dias</strong>, ou qualquer duração se exigir hospitalização). Embora a maioria também tenha episódios depressivos, o episódio depressivo NÃO é obrigatório para o diagnóstico de Tipo I.<br>• <strong>Transtorno Bipolar Tipo II:</strong> Exige a ocorrência de <strong>pelo menos 1 Episódio Hipomaníaco</strong> (duração mínima de <strong>4 dias</strong>, sem prejuízo funcional grave, sem hospitalização e sem psicose) <strong>E pelo menos 1 Episódio Depressivo Maior</strong> — nunca tendo apresentado mania plena.<br>• <strong>Transtorno Ciclotímico:</strong> Alternância crônica (por pelo menos <strong>2 anos</strong> em adultos) entre sintomas hipomaníacos e sintomas depressivos mais leves que não chegam a preencher critérios completos de hipomania ou TDM.",
        pontosChave: [
          "Bipolar Tipo I = pelo menos 1 Episódio Maníaco (>= 7 dias ou hospitalização); pode ter sintomas psicóticos.",
          "Bipolar Tipo II = pelo menos 1 Episódio Hipomaníaco (>= 4 dias, sem psicose/hospitalização) + pelo menos 1 Episódio Depressivo Maior.",
          "Ciclotimia = oscilações subsindrômicas crônicas por >= 2 anos.",
          "Estabilizadores do humor (como lítio) + psicoeducação e psicoterapia são fundamentais no tratamento."
        ],
        exemplo: "Uma paciente apresenta episódios depressivos recorrentes alternados com fases de 5 dias em que dorme apenas 3 horas, fica muito falante e produtiva sem perder o controle total nem precisar de internação — quadro compatível com Bipolar Tipo II.",
        alerta: "Pegadinha clássica: Se houver sintomas psicóticos (delírios/alucinações) ou necessidade de internação durante a fase de euforia, o episódio é automaticamente classificado como MANIA (Bipolar Tipo I), nunca hipomania!"
      },
      {
        subtopico: "4.4 Episódios Maníacos, Hipomaníacos e Mistos",
        resumo: "Mania e hipomania compartilham sintomas de euforia/irritabilidade e hiperenergia, diferenciando-se pela duração, gravidade funcional e presença de psicose.",
        explicacao: "Os sintomas nucleares dos <strong>episódios maníacos e hipomaníacos</strong> envolvem humor anormalmente elevado, expansivo ou irritável e aumento persistente da energia/atividade, acompanhados de (mnemônico clássico <strong>DIGFAST</strong>):<br>• <strong>D</strong>istratibilidade;<br>• <strong>I</strong>ndiscrição / envolvimento excessivo em atividades de alto risco (gastos impulsivos, direção perigosa, exposição sexual);<br>• <strong>G</strong>randiosidade / autoestima inflada;<br>• <strong>F</strong>uga de ideias / pensamento acelerado;<br>• <strong>A</strong>umento da atividade dirigida a objetivos ou agitação psicomotora;<br>• <strong>S</strong>ono com necessidade diminuída (sente-se descansado após 2–3 horas);<br>• <strong>T</strong>aquilalia / pressão para falar (logorreia).<br><br>Existem também <strong>características mistas</strong>, quando sintomas depressivos e maníacos/hipomaníacos coexistem no mesmo episódio — condição de <strong>altíssimo risco suicida</strong> por combinar dor depressiva com impulsividade e energia elevada.",
        pontosChave: [
          "Sintomas da mania/hipomania: redução da necessidade de sono, grandiosidade, logorreia, fuga de ideias, distratibilidade e impulsividade.",
          "Diferença Mania vs. Hipomania: Mania dura >= 7 dias, causa prejuízo acentuado e pode ter psicose/internação; Hipomania dura >= 4 dias, sem psicose nem internação.",
          "Episódios com características mistas combinam tristeza/angústia com energia/agitação, elevando muito o risco de suicídio.",
          "Regularidade do sono e psicoeducação sobre sinais precoces de recaída são essenciais na psicoterapia do transtorno bipolar."
        ],
        exemplo: "Um homem fica 10 dias dormindo apenas 2 horas por noite, faz empréstimos milionários para um negócio impossível, fala sem parar e acredita ser um escolhido divino — quadro típico de Episódio Maníaco.",
        alerta: "Privação de sono é um dos gatilhos mais potentes para desencadear novos episódios maníacos em pessoas com Transtorno Bipolar."
      }
    ],
    flashcards: [
      { frente: "Quais são os dois sintomas obrigatórios (ao menos um presente) e a duração mínima do Transtorno Depressivo Maior?", verso: "Humor deprimido e/ou anedonia (perda de prazer), com pelo menos 5 sintomas no total por no mínimo 2 semanas." },
      { frente: "O que é o Transtorno Depressivo Persistente (Distimia)?", verso: "Um estado depressivo crônico de intensidade mais leve que o TDM, mas contínuo por pelo menos 2 anos em adultos." },
      { frente: "Qual a diferença fundamental entre Transtorno Bipolar Tipo I e Tipo II?", verso: "Tipo I exige ao menos 1 Episódio Maníaco (>= 7 dias, prejuízo grave ou psicose/internação); Tipo II exige ao menos 1 Episódio Hipomaníaco (>= 4 dias, sem psicose/internação) + 1 Episódio Depressivo Maior." },
      { frente: "O que significa 'redução da necessidade de sono' na mania (diferente de insônia)?", verso: "Na insônia a pessoa quer dormir e fica exausta; na mania ela dorme apenas 2–3 horas e acorda cheia de energia." },
      { frente: "Por que episódios com características mistas exigem alerta redobrado?", verso: "Porque combinam sofrimento/desesperança depressiva com agitação e impulsividade maníaca, aumentando drasticamente o risco suicida." },
      { frente: "O que diferencia o luto normal de um Episódio Depressivo Maior?", verso: "No luto a dor vem em ondas ligadas à perda e a autoestima permanece preservada; no TDM a tristeza é pervasiva com sentimento intenso de inutilidade e culpa." }
    ]
  },
  {
    id: 5,
    modulo: "Módulo 5",
    titulo: "Transtornos de Ansiedade, TOC e Relacionados a Traumas",
    icone: "fa-bolt",
    cor: "pink",
    topicos: [
      {
        subtopico: "5.1 Transtornos de Ansiedade",
        resumo: "Os Transtornos de Ansiedade envolvem medo e preocupação excessivos e persistentes, gerando sintomas autonômicos, esquiva e prejuízo funcional.",
        explicacao: "Enquanto o medo e a ansiedade normais têm função adaptativa de proteção, nos <strong>Transtornos de Ansiedade</strong> a resposta é desproporcional, persistente (geralmente >= 6 meses em adultos) e limitante. Os principais quadros do DSM-5-TR são:<br><br>• <strong>Transtorno de Ansiedade Generalizada (TAG):</strong> Preocupação excessiva, difusa e difícil de controlar sobre múltiplos temas cotidianos (saúde, finanças, trabalho) por >= 6 meses, com inquietação, fadiga, tensão muscular, irritabilidade e alteração do sono.<br>• <strong>Transtorno de Pânico:</strong> <strong>Ataques de pânico recorrentes e inesperados</strong> (surtos abruptos de medo intenso com pico em minutos: taquicardia, falta de ar, tontura, sudorese, medo de morrer ou enlouquecer), seguidos de medo persistente de ter novos ataques.<br>• <strong>Agorafobia:</strong> Medo acentuado de locais onde escapar seja difícil ou não haja socorro em caso de mal-estar (transporte público, locais abertos, fechados, filas ou multidões).<br>• <strong>Fobias Específicas:</strong> Medo intenso e circunscrito a um objeto ou situação (altura, sangue/injeção, animais, avião).<br>• <strong>Transtorno de Ansiedade Social (Fobia Social):</strong> Medo intenso de situações sociais em que o indivíduo teme ser avaliado negativamente, julgado ou humilhado.",
        pontosChave: [
          "TAG: preocupação crônica e difusa por >= 6 meses com sintomas físicos (tensão muscular, fadiga, insônia).",
          "Transtorno de Pânico: ataques de pânico inesperados + ansiedade antecipatória de novos ataques.",
          "Agorafobia: medo de lugares dos quais é difícil escapar ou conseguir ajuda.",
          "Ansiedade Social: medo acentuado de julgamento negativo ou humilhação em interações ou desempenhos públicos."
        ],
        exemplo: "Um universitário evita apresentar seminários, comer em público e conversar com desconhecidos por terror de parecer ridículo e ser julgado — quadro típico de Transtorno de Ansiedade Social.",
        alerta: "Ter um único ataque de pânico isolado na vida NÃO fecha diagnóstico de Transtorno de Pânico; é preciso recorrência e medo persistente de novos ataques ou mudança comportamental de esquiva."
      },
      {
        subtopico: "5.2 Transtorno Obsessivo-Compulsivo (TOC) e Relacionados",
        resumo: "No DSM-5, o TOC ganhou capítulo próprio, caracterizado por obsessões intrusivas geradoras de angústia e compulsões executadas para neutralizá-la.",
        explicacao: "O <strong>Transtorno Obsessivo-Compulsivo (TOC)</strong> caracteriza-se pela presença de <strong>obsessões</strong>, <strong>compulsões</strong> ou (mais frequentemente) ambas, consumindo tempo significativo (> 1 hora/dia) ou causando grande sofrimento:<br><br>• <strong>Obsessões:</strong> Pensamentos, impulsos ou imagens recorrentes, persistentes, <strong>intrusivos e indesejados (egodistônicos)</strong> que causam intensa ansiedade (ex.: medo extremo de contaminação, dúvida obsessiva de ter deixado o gás aberto, pensamentos agressivos ou blasfemos indesejados).<br>• <strong>Compulsões (Rituais):</strong> Comportamentos repetitivos (lavar as mãos dezenas de vezes, checar trancas, alinhar objetos) ou <strong>atos mentais</strong> (contar, rezar repetitivamente, repetir palavras em silêncio) que o sujeito se sente impelido a executar para reduzir a ansiedade ou evitar um desastre temido — mas que oferecem apenas alívio temporário e reforçam o ciclo.<br><br>O capítulo de <strong>transtornos relacionados ao TOC</strong> inclui ainda: <strong>Transtorno Dismórfico Corporal</strong> (preocupação obsessiva com defeito físico mínimo ou inexistente), <strong>Transtorno de Acumulação</strong>, <strong>Tricotilomania</strong> (arrancar cabelos) e <strong>Transtorno de Escoriação</strong> (beliscar a pele).",
        pontosChave: [
          "Obsessões = pensamentos/imagens intrusivos e angustiantes (egodistônicos).",
          "Compulsões = rituais comportamentais ou mentais realizados para neutralizar a angústia das obsessões.",
          "Transtornos relacionados ao TOC: Dismórfico Corporal, Acumulação, Tricotilomania e Escoriação.",
          "O TOC é diferente do Transtorno de Personalidade Obsessivo-Compulsiva (que é egossintônico e sem obsessões/compulsões verdadeiras)."
        ],
        exemplo: "Uma pessoa tem o pensamento intrusivo constante de que suas mãos estão contaminadas por germes mortais (obsessão) e lava as mãos 40 vezes ao dia até ferir a pele para aliviar a angústia (compulsão).",
        alerta: "Pegadinha clássica: Obsessões do TOC são EGODISTÔNICAS (causam sofrimento e o paciente quer se livrar delas); perfeccionismo rígido do Transtorno de Personalidade Obsessivo-Compulsiva é EGOSSINTÔNICO."
      },
      {
        subtopico: "5.3 Transtornos Relacionados a Traumas e Estressores",
        resumo: "Englobam quadros desencadeados diretamente por eventos traumáticos ou estressores identificáveis, com destaque para o TEPT, Estresse Agudo e Adaptação.",
        explicacao: "Este grupo de transtornos exige explicitamente a <strong>exposição a um evento traumático ou estressor</strong> como critério etiológico:<br><br>• <strong>Transtorno de Estresse Pós-Traumático (TEPT):</strong> Surge após exposição (direta, testemunhada ou envolvendo entes queridos) a morte real/ameaça de morte, lesão grave ou violência sexual, com duração <strong>superior a 1 mês</strong>. Organiza-se em <strong>4 agrupamentos de sintomas</strong>:<br>  1) <em>Intrusão/Revivescência:</em> Flashbacks vívidos, pesadelos recorrentes e lembranças invasivas.<br>  2) <em>Evitação:</em> Esquiva persistente de lugares, pessoas, conversas ou pensamentos ligados ao trauma.<br>  3) <em>Alterações negativas na cognição e no humor:</em> Culpa distorcida, crenças negativas globais, distanciamento afetivo.<br>  4) <em>Alterações na excitabilidade e reatividade:</em> Hipervigilância, sobressalto exagerado, irritabilidade e insônia.<br><br>• <strong>Transtorno de Estresse Agudo (TEA):</strong> Sintomas muito semelhantes aos do TEPT, mas ocorrendo no período inicial de <strong>3 dias a 1 mês</strong> após o trauma.<br>• <strong>Transtorno de Adaptação:</strong> Sofrimento emocional ou comportamental desproporcional em resposta a um estressor comum da vida (demissão, divórcio, mudança), iniciando em até 3 meses após o evento.",
        pontosChave: [
          "TEPT exige duração > 1 mês após trauma grave e 4 grupos: Intrusão, Evitação, Cognição/Humor negativos e Hiperexcitabilidade.",
          "Transtorno de Estresse Agudo (TEA): duração de 3 dias até 1 mês após o trauma.",
          "Transtorno de Adaptação: resposta desproporcional a estressores não necessariamente traumáticos de vida.",
          "Flashbacks são vivências dissociativas em que o sujeito sente como se o trauma estivesse acontecendo novamente agora."
        ],
        exemplo: "Dois meses após sofrer um assalto armado, um motorista tem pesadelos diários, flashbacks ao ouvir motos, evita passar pela avenida do crime e vive em estado constante de sobressalto — quadro clássico de TEPT.",
        alerta: "Critério temporal decisivo na prova: 3 dias a 1 mês = Transtorno de Estresse Agudo; mais de 1 mês = TEPT."
      },
      {
        subtopico: "5.4 Diagnóstico Diferencial e Intervenções Clínicas",
        resumo: "A esquiva mantém os transtornos de ansiedade, TOC e trauma; a intervenção clínica combina acolhimento, psicoeducação, exposição/elaboração e suporte multidisciplinar.",
        explicacao: "Um mecanismo psicológico central que cronifica os transtornos de ansiedade, o TOC e o TEPT é o <strong>ciclo da evitação (reforço negativo)</strong>: ao fugir da situação temida ou executar uma compulsão, a ansiedade cai no curto prazo, o que 'ensina' ao cérebro que o perigo era real e reforça cada vez mais o medo no longo prazo.<br><br>No cuidado clínico:<br>• <strong>Psicoterapia:</strong> Intervenções como a <strong>Exposição e Prevenção de Resposta (EPR)</strong> no TOC, exposição gradual e reestruturação cognitiva nos transtornos de ansiedade, psicoterapias focadas no trauma (como TCC focada no trauma e EMDR) e escuta psicanalítica da angústia e do traumático permitem ressignificar o medo e interromper a esquiva.<br>• <strong>Farmacoterapia (quando indicada):</strong> Antidepressivos ISRS (primeira linha para TAG, Pânico, TOC e TEPT), evitando o uso crônico e indiscriminado de benzodiazepínicos pelo risco de dependência e prejuízo no aprendizado emocional.",
        pontosChave: [
          "A esquiva e os rituais trazem alívio imediato, mas mantêm e amplificam o transtorno no longo prazo.",
          "Exposição e Prevenção de Resposta (EPR) é referência comportamental para o TOC.",
          "Antidepressivos ISRS são primeira linha farmacológica nos quadros ansiosos, TOC e TEPT.",
          "O acolhimento seguro e sem revitimização é indispensável no manejo de pacientes com TEPT."
        ],
        exemplo: "No tratamento do TOC por EPR, o paciente toca em uma maçaneta considerada 'contaminada' com apoio terapêutico e permanece sem lavar as mãos até perceber que a ansiedade diminui naturalmente (habituação).",
        alerta: "Nunca force uma exposição abrupta em pacientes com trauma grave (TEPT) sem estabilização emocional e aliança terapêutica sólida."
      }
    ],
    flashcards: [
      { frente: "Qual é a principal diferença entre TAG e Transtorno de Pânico?", verso: "O TAG envolve preocupação crônica, difusa e persistente (>= 6 meses); o Transtorno de Pânico envolve ataques súbitos e inesperados de terror intenso acompanhados de medo de novos ataques." },
      { frente: "Diferencie Obsessão de Compulsão no TOC.", verso: "Obsessão é um pensamento, imagem ou impulso intrusivo que gera angústia; Compulsão é um comportamento repetitivo ou ato mental executado para aliviar essa angústia." },
      { frente: "Quais são os 4 grupos de sintomas do TEPT?", verso: "1) Intrusão/revivescência (flashbacks/pesadelos); 2) Evitação; 3) Alterações negativas na cognição e humor; 4) Alterações na excitabilidade/reatividade (hipervigilância)." },
      { frente: "Qual o critério temporal que diferencia Transtorno de Estresse Agudo de TEPT?", verso: "Estresse Agudo dura de 3 dias a 1 mês após o trauma; TEPT tem duração superior a 1 mês." },
      { frente: "Cite 3 transtornos classificados no capítulo de 'TOC e transtornos relacionados' no DSM-5.", verso: "Transtorno Dismórfico Corporal, Transtorno de Acumulação, Tricotilomania e Transtorno de Escoriação." },
      { frente: "Por que a esquiva e as compulsões pioram os quadros ansiosos no longo prazo?", verso: "Porque oferecem alívio imediato (reforço negativo), impedindo o cérebro de aprender que a situação é tolerável e mantendo o ciclo do medo." }
    ]
  },
  {
    id: 6,
    modulo: "Módulo 6",
    titulo: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    icone: "fa-eye-low-vision",
    cor: "purple",
    topicos: [
      {
        subtopico: "6.1 Espectro da Esquizofrenia: Definição e Critérios",
        resumo: "A Esquizofrenia é um transtorno psicótico complexo que afeta o contato com a realidade, o pensamento, a percepção, a afetividade e o funcionamento global.",
        explicacao: "O termo <strong>Esquizofrenia</strong> (criado por <strong>Eugen Bleuler</strong> em 1911 — 'mente cindida', referindo-se à cisão entre pensamento, afeto e realidade, e NÃO à 'dupla personalidade') designa o principal quadro do <strong>Espectro da Esquizofrenia e Outros Transtornos Psicóticos</strong>.<br><br>Segundo o DSM-5-TR, o diagnóstico de Esquizofrenia exige:<br>1) Presença de <strong>pelo menos 2 sintomas característicos</strong> por no mínimo <strong>1 mês</strong> na fase ativa — sendo obrigatório ao menos um dos três primeiros: <strong>delírios, alucinações ou discurso desorganizado</strong> (os outros dois são comportamento grosseiramente desorganizado/catatônico e sintomas negativos).<br>2) Sinais contínuos da perturbação persistindo por <strong>pelo menos 6 meses</strong> (incluindo fases prodrômica e residual).<br>3) Prejuízo significativo no funcionamento social, acadêmico ou ocupacional.<br>4) Exclusão de efeitos de substâncias, condições médicas ou transtornos do humor.",
        pontosChave: [
          "Esquizofrenia NÃO é dupla personalidade (isso corresponde ao Transtorno Dissociativo de Identidade).",
          "Exige >= 2 sintomas ativos por >= 1 mês (sendo ao menos 1: delírio, alucinação ou discurso desorganizado).",
          "Duração total contínua mínima de 6 meses (incluindo pródromo/residual) + queda funcional.",
          "Início típico ocorre no final da adolescência e início da vida adulta (18–25 anos em homens; um pouco mais tardio em mulheres)."
        ],
        exemplo: "Um jovem de 21 anos começa a se isolar e cair no rendimento da faculdade (pródromo); após alguns meses passa a ouvir vozes comentando seus atos e acredita que vizinhos implantaram chips em sua cabeça por mais de 6 meses.",
        alerta: "Pegadinha clássica: Duração mínima total para Esquizofrenia é de 6 MESES (com pelo menos 1 mês de sintomas ativos)."
      },
      {
        subtopico: "6.2 Sintomas Positivos, Negativos, Desorganizados e Cognitivos",
        resumo: "Os sintomas da esquizofrenia dividem-se em positivos (excesso/distorção da realidade), negativos (perda de funções normais), desorganizados e déficits cognitivos.",
        explicacao: "Na Psicopatologia moderna, os sintomas da Esquizofrenia são agrupados em dimensões clínicas que têm impacto direto no prognóstico:<br><br>• <strong>Sintomas Positivos ('acréscimos' à experiência normal):</strong> <strong>Delírios</strong> (persecutórios, de controle/inserção de pensamento, de referência) e <strong>Alucinações</strong> (predominantemente <strong>auditivas</strong> — vozes que dialogam entre si ou comentam o comportamento). Costumam responder melhor aos antipsicóticos.<br>• <strong>Sintomas Negativos ('redução/ausência' de funções normais):</strong> Os '5 As' — <strong>Embotamento Afetivo</strong> (expressão emocional diminuída), <strong>Alogia</strong> (pobreza da fala/pensamento), <strong>Avolição/Abulia</strong> (falta de iniciativa), <strong>Anedonia</strong> (redução do prazer) e <strong>Associalidade</strong> (retraimento social). São os mais difíceis de tratar com remédios e os maiores causadores de incapacidade funcional.<br>• <strong>Sintomas Desorganizados:</strong> Discurso incoerente (afrouxamento dos nexos, tangencialidade, salada de palavras) e comportamento motor bizarro ou catatônico.<br>• <strong>Sintomas Cognitivos:</strong> Prejuízos na memória de trabalho, atenção, velocidade de processamento e cognição social.",
        pontosChave: [
          "Sintomas Positivos = delírios e alucinações (não significa 'bons', mas sim 'presentes em excesso').",
          "Sintomas Negativos = embotamento afetivo, alogia, avolição, anedonia e retraimento social (perda de funções).",
          "Sintomas positivos respondem melhor à medicação; sintomas negativos exigem forte reabilitação psicossocial.",
          "Alucinações auditivas (vozes) são as mais frequentes na esquizofrenia."
        ],
        exemplo: "Após controlar as vozes e os delírios com medicação, o paciente permanece muito quieto, sem iniciativa para sair de casa e com expressão facial neutra — manifestação típica de sintomas negativos residuais.",
        alerta: "Nunca interprete 'sintomas positivos' como algo benéfico e 'sintomas negativos' como algo ruim: na psicopatologia, positivo = excesso/acréscimo e negativo = déficit/falta."
      },
      {
        subtopico: "6.3 Outros Transtornos Psicóticos do Espectro",
        resumo: "Os demais transtornos psicóticos diferenciam-se da Esquizofrenia sobretudo pela duração, pela ausência de desorganização global ou pela combinação com transtorno do humor.",
        explicacao: "Além da Esquizofrenia, o espectro psicótico no DSM-5-TR inclui quadros importantes para o diagnóstico diferencial:<br><br>• <strong>Transtorno Psicótico Breve:</strong> Presença de sintomas psicóticos (delírios, alucinações ou discurso desorganizado) com duração de <strong>pelo menos 1 dia e menos de 1 mês</strong>, com retorno completo ao nível prévio de funcionamento (frequentemente após estressor grave ou no pós-parto).<br>• <strong>Transtorno Esquizofreniforme:</strong> Sintomas idênticos aos da Esquizofrenia, porém com duração total entre <strong>1 mês e menos de 6 meses</strong>.<br>• <strong>Transtorno Delirante:</strong> Presença de <strong>1 ou mais delírios por >= 1 mês</strong> (ex.: persecutório, ciúme, erotomaníaco, grandioso ou somático), <strong>SEM</strong> desorganização severa, sem sintomas negativos marcantes e com funcionamento cotidiano relativamente preservado fora da área do delírio.<br>• <strong>Transtorno Esquizoafetivo:</strong> Combinação de um episódio de humor maior (depressivo ou maníaco) simultâneo aos critérios da esquizofrenia, exigindo porém <strong>pelo menos 2 semanas de delírios ou alucinações na AUSÊNCIA de sintomas de humor</strong> (para diferenciá-lo de depressão ou mania com sintomas psicóticos).",
        pontosChave: [
          "Psicótico Breve: 1 dia a < 1 mês (recuperação total).",
          "Esquizofreniforme: 1 mês a < 6 meses; Esquizofrenia: >= 6 meses.",
          "Transtorno Delirante: delírio estruturado >= 1 mês com preservação relativa do funcionamento global.",
          "Esquizoafetivo: psicose + episódio de humor, com >= 2 semanas de psicose isolada sem alteração de humor."
        ],
        exemplo: "Um homem trabalha normalmente e cuida dos filhos, mas mantém há 1 ano a convicção inabalável e sem provas de que a esposa o trai com todos os vizinhos, sem alucinações nem discurso desorganizado — quadro compatível com Transtorno Delirante (tipo ciúme).",
        alerta: "Decore a régua temporal das psicoses: < 1 mês = Psicótico Breve; 1 a 6 meses = Esquizofreniforme; >= 6 meses = Esquizofrenia."
      },
      {
        subtopico: "6.4 Intervenção Psicossocial e Manejo Clínico nas Psicoses",
        resumo: "O tratamento contemporâneo das psicoses integra antipsicóticos, psicoterapia, apoio familiar, CAPS e combate ao estigma, promovendo autonomia e cidadania.",
        explicacao: "A intervenção clínica nas psicoses rompeu com a ideia antiga de 'deterioração inevitável' e de isolamento perpétuo. O cuidado integral e baseado na Reforma Psiquiátrica envolve:<br>• <strong>Manejo na Entrevista com o Paciente Delirante:</strong> O psicólogo <strong>não deve confrontar agressivamente</strong> o delírio (o que gera hostilidade e rompe o vínculo) nem <strong>alimentar/confirmar</strong> a crença delirante; deve validar o <em>sentimento</em> real vivido pelo sujeito ('vejo o quanto você está assustado com isso') e construir vínculo seguro.<br>• <strong>Acompanhamento Multiprofissional (CAPS / RAPS):</strong> Combina antipsicóticos (atípicos/típicos), psicoterapia individual e grupal, oficinas terapêuticas, terapia ocupacional e inserção comunitária.<br>• <strong>Psicoeducação e Suporte Familiar:</strong> Reduzir a 'Emoção Expressa' elevada (críticas constantes e hostilidade familiar) diminui drasticamente as taxas de recaída e reinternação.",
        pontosChave: [
          "Não confrontar brutalmente nem confirmar o delírio: validar a emoção real e sustentar o vínculo.",
          "Tratamento eficaz une farmacoterapia + psicoterapia + reabilitação psicossocial (CAPS) + suporte familiar.",
          "Psicoeducação familiar reduz recaídas ao diminuir críticas excessivas e sobrecarga dos cuidadores.",
          "O estigma que associa pessoas com esquizofrenia à violência é um preconceito falso; elas são muito mais frequentemente vítimas do que autoras de violência."
        ],
        exemplo: "Ao ouvir um paciente dizer 'estão me vigiando pelas câmeras da rua', o psicólogo responde: 'Deve ser exaustivo viver com essa sensação constante de perigo; quero entender como você tem passado os últimos dias e como podemos te ajudar a se sentir mais seguro'.",
        alerta: "A adesão ao tratamento contínuo e o suporte social são os maiores preditores de estabilidade e qualidade de vida nas psicoses."
      }
    ],
    flashcards: [
      { frente: "Qual a régua temporal que diferencia Transtorno Psicótico Breve, Esquizofreniforme e Esquizofrenia?", verso: "Psicótico Breve: 1 dia a < 1 mês; Esquizofreniforme: 1 a < 6 meses; Esquizofrenia: >= 6 meses." },
      { frente: "Qual a diferença entre sintomas positivos e sintomas negativos na Esquizofrenia?", verso: "Positivos são acréscimos/distorções da realidade (delírios, alucinações); Negativos são perdas/reduções de funções normais (embotamento, avolição, alogia, anedonia, associalidade)." },
      { frente: "Qual o critério decisivo para diferenciar Transtorno Esquizoafetivo de Depressão/Mania com psicose?", verso: "No Esquizoafetivo, deve haver pelo menos 2 semanas de delírios ou alucinações na AUSÊNCIA de episódio de humor maior." },
      { frente: "O que caracteriza o Transtorno Delirante em comparação à Esquizofrenia?", verso: "Delírio(s) por >= 1 mês sem desorganização severa nem sintomas negativos marcantes, com funcionamento cotidiano relativamente preservado." },
      { frente: "Como o psicólogo deve manejar verbalmente o discurso delirante de um paciente?", verso: "Sem confrontar agressivamente e sem confirmar o delírio: validar o sofrimento/afeto real e preservar a aliança terapêutica." },
      { frente: "A Esquizofrenia significa ter 'múltiplas personalidades'?", verso: "Não! Esse é um mito popular. Múltiplas identidades referem-se ao Transtorno Dissociativo de Identidade (TDI)." }
    ]
  },
  {
    id: 7,
    modulo: "Módulo 7",
    titulo: "Transtornos Dissociativos e Transtornos Alimentares",
    icone: "fa-utensils",
    cor: "amber",
    topicos: [
      {
        subtopico: "7.1 Transtornos Dissociativos e Transtorno Dissociativo de Identidade",
        resumo: "Os Transtornos Dissociativos caracterizam-se pela ruptura involuntária na integração normal da consciência, memória, identidade, percepção e controle motor.",
        explicacao: "A <strong>dissociação</strong> é um mecanismo psíquico frequentemente ativado diante de traumas severos e insuportáveis, funcionando como uma 'desconexão protetiva' da experiência. Quando crônica e desintegradora, configura os <strong>Transtornos Dissociativos</strong>.<br><br>O quadro mais complexo é o <strong>Transtorno Dissociativo de Identidade (TDI)</strong> (antigo 'transtorno de múltiplas personalidades'), caracterizado por:<br>1) Ruptura da identidade caracterizada pela presença de <strong>dois ou mais estados de personalidade distintos</strong> (com mudanças marcantes no senso de self, afeto, comportamento, memória e cognição).<br>2) <strong>Lacunas recorrentes na recordação</strong> de eventos cotidianos, informações pessoais importantes ou eventos traumáticos (incompatíveis com esquecimento normal).<br>3) Forte associação histórica com <strong>traumas graves e crônicos na infância</strong> (abuso físico, emocional ou sexual precoce). Deve-se sempre excluir práticas culturais/religiosas aceitas no grupo do sujeito e efeitos de substâncias.",
        pontosChave: [
          "Dissociação = ruptura na integração normal entre consciência, memória, identidade e percepção.",
          "TDI envolve >= 2 estados de personalidade distintos + amnésia dissociativa recorrente.",
          "Possui altíssima correlação com traumas graves e repetidos na infância.",
          "Experiências cultural ou religiosamente normativas (como transes espirituais) NÃO constituem transtorno dissociativo."
        ],
        exemplo: "Uma paciente com histórico de abuso severo na infância descobre roupas novas em casa e mensagens enviadas de seu celular das quais não possui nenhuma memória, enquanto pessoas próximas relatam mudanças abruptas em sua voz e postura.",
        alerta: "Nunca confunda Transtorno Dissociativo de Identidade (ruptura de identidade/memória ligada a trauma) com Esquizofrenia (transtorno psicótico)."
      },
      {
        subtopico: "7.2 Amnésia Dissociativa e Transtorno de Despersonalização/Desrealização",
        resumo: "Englobam perdas de memória autobiográfica de origem traumática e sensações persistentes de distanciamento do próprio corpo ou do ambiente.",
        explicacao: "Os outros dois grandes quadros dos <strong>Transtornos Dissociativos</strong> são:<br><br>• <strong>Amnésia Dissociativa:</strong> Incapacidade de recordar informações autobiográficas importantes, geralmente de natureza <strong>traumática ou estressante</strong>, que não pode ser explicada por esquecimento comum nem por lesão neurológica/substância. Pode ser <em>localizada</em> (um período específico), <em>seletiva</em> (partes de um evento) ou, mais raramente, <em>generalizada</em>. Quando acompanhada de viagem aparentemente intencional ou perambulação desnorteada, usa-se o especificador <strong>com fuga dissociativa</strong>.<br>• <strong>Transtorno de Despersonalização/Desrealização:</strong> Episódios persistentes ou recorrentes de:<br>  - <strong>Despersonalização:</strong> Sensação de estranhamento ou distanciamento em relação a si mesmo, ao próprio corpo ou pensamentos (como se fosse um 'observador externo' ou estivesse em um sonho).<br>  - <strong>Desrealização:</strong> Sensação de irrealidade ou estranhamento em relação ao ambiente externo (pessoas ou objetos parecem artificiais, nebulosos ou sem vida).<br>  <em>Ponto crucial:</em> Durante os episódios, o <strong>teste de realidade permanece INTACTO</strong> (a pessoa sabe que aquilo é uma sensação estranha e não um fato literal).",
        pontosChave: [
          "Amnésia Dissociativa: perda de memória autobiográfica ligada a trauma/estresse (sem causa orgânica).",
          "Fuga dissociativa: deslocamento geográfico súbito associado à amnésia da própria identidade.",
          "Despersonalização = estranhamento de si mesmo; Desrealização = estranhamento do mundo externo.",
          "Na Despersonalização/Desrealização o teste de realidade está PRESERVADO (não é psicose)."
        ],
        exemplo: "Após um período de estresse extremo, um jovem relata sentir-se 'olhando para si mesmo de fora do corpo, como se estivesse dentro de um filme', sabendo perfeitamente que isso não é real — quadro típico de Despersonalização.",
        alerta: "Pegadinha clássica: Na Despersonalização/Desrealização o teste de realidade está INTACTO — o paciente diz 'parece que estou em um sonho', e não 'eu morri e fui substituído por um robô' (que seria delírio)."
      },
      {
        subtopico: "7.3 Transtornos Alimentares: Anorexia Nervosa e Bulimia Nervosa",
        resumo: "Os Transtornos Alimentares envolvem grave perturbação do comportamento alimentar e da imagem corporal, com alto risco clínico e necessidade de equipe multiprofissional.",
        explicacao: "Os <strong>Transtornos Alimentares</strong> apresentam elevada gravidade médica e psíquica, marcados por profunda distorção da autoavaliação corporal:<br><br>• <strong>Anorexia Nervosa (AN):</strong> Caracteriza-se por três critérios centrais: 1) <strong>Restrição persistente da ingestão calórica</strong> levando a <strong>peso corporal significativamente baixo</strong>; 2) <strong>Medo intenso de ganhar peso</strong> ou comportamento persistente que interfere no ganho de peso; 3) <strong>Distorção grave da imagem corporal</strong> (a pessoa se vê acima do peso mesmo em desnutrição severa) ou falta de reconhecimento da gravidade do baixo peso. Subtipos: <em>restritivo</em> e <em>compulsão alimentar purgativa</em>. Possui uma das maiores taxas de mortalidade entre os transtornos mentais (por complicações cardíacas/metabólicas e suicídio).<br>• <strong>Bulimia Nervosa (BN):</strong> Caracteriza-se por: 1) <strong>Episódios recorrentes de compulsão alimentar</strong> (comer quantidade muito grande em curto período com sensação de perda de controle); 2) <strong>Comportamentos compensatórios inapropriados recorrentes</strong> para evitar ganho de peso (vômitos autoinduzidos, laxantes, diuréticos, jejuns extremos ou exercício compulsivo); 3) Ocorrência mínima de <strong>1 vez por semana durante 3 meses</strong>; 4) Autoavaliação indevidamente influenciada pelo peso/forma. <em>Diferença chave:</em> Na Bulimia, o peso corporal costuma estar <strong>normal ou levemente acima</strong> (não significativamente baixo como na Anorexia).",
        pontosChave: [
          "Anorexia Nervosa = peso significativamente baixo + medo intenso de engordar + distorção grave da imagem corporal.",
          "Bulimia Nervosa = compulsão alimentar + comportamentos compensatórios/purgativos (>= 1x/semana por 3 meses) + peso geralmente normal.",
          "A Anorexia Nervosa apresenta alto risco de morte clínica (desnutrição, arritmias) e exige monitoramento médico rigoroso.",
          "Sinais físicos comuns na Bulimia: desgaste do esmalte dentário, sinal de Russell (calosidades nos dedos) e alterações eletrolíticas."
        ],
        exemplo: "Uma adolescente com IMC muito abaixo do normal recusa refeições, faz 3 horas diárias de exercício e chora ao olhar no espelho dizendo estar 'enorme' — quadro típico de Anorexia Nervosa.",
        alerta: "Questão clássica de diagnóstico diferencial: Se o paciente tem compulsão + purgação E está com peso significativamente baixo, o diagnóstico é Anorexia Nervosa (subtipo purgativo), e NÃO Bulimia."
      },
      {
        subtopico: "7.4 Transtorno de Compulsão Alimentar e Fatores Socioculturais",
        resumo: "O Transtorno de Compulsão Alimentar (TCA) apresenta episódios de descontrole alimentar sem métodos compensatórios, refletindo também pressões culturais sobre o corpo.",
        explicacao: "O <strong>Transtorno de Compulsão Alimentar (TCA)</strong> caracteriza-se por episódios recorrentes de compulsão alimentar (comer rapidamente até sentir desconforto físico, sem fome física, sozinho por vergonha, seguido de intensa culpa/nojo de si mesmo), ocorrendo pelo menos <strong>1 vez por semana por 3 meses</strong>, <strong>SEM comportamentos compensatórios regulares</strong> (sem vômitos ou uso sistemático de laxantes — principal diferença frente à Bulimia).<br><br><strong>Fatores Socioculturais e Manejo Clínico:</strong> Além de vulnerabilidades biológicas e emocionais (dificuldade de regulação afetiva, perfeccionismo, traumas), os transtornos alimentares são fortemente atravessados pela <strong>cultura da magreza, gordofobia e redes sociais</strong> que transformam o corpo em objeto de controle e valor moral. O tratamento padrão-ouro exige <strong>equipe interdisciplinar</strong>: psicólogo (psicoterapia focada em imagem corporal, emoções e família), nutricionista comportamental (sem dietas punitivas), clínico/endocrinologista e psiquiatra.",
        pontosChave: [
          "TCA = compulsão alimentar recorrente (>= 1x/semana por 3 meses) com intenso sofrimento/culpa, SEM purgação regular.",
          "Diferença Bulimia vs. TCA: Bulimia TEM comportamentos compensatórios; TCA NÃO tem.",
          "Fatores socioculturais (padrões estéticos rígidos, gordofobia, mídias) atuam como importantes desencadeadores e mantenedores.",
          "Tratamento exige equipe interdisciplinar: Psicologia, Nutrição, Medicina Clínica e Psiquiatria."
        ],
        exemplo: "Um adulto come grandes volumes de comida escondido à noite quando está ansioso, sente enorme vergonha e culpa depois, mas nunca provoca vômitos nem usa laxantes — quadro compatível com TCA.",
        alerta: "Dietas restritivas radicais frequentemente funcionam como gatilho direto para iniciar ou agravar ciclos de compulsão alimentar."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre Despersonalização e Desrealização?", verso: "Despersonalização é a sensação de estranhamento/distanciamento em relação a si mesmo; Desrealização é a sensação de irrealidade em relação ao ambiente externo (ambas com teste de realidade intacto)." },
      { frente: "O que diferencia Anorexia Nervosa de Bulimia Nervosa?", verso: "A Anorexia Nervosa caracteriza-se obrigatoriamente por peso corporal significativamente baixo e distorção corporal grave; na Bulimia há compulsão + purgação com peso geralmente normal ou acima." },
      { frente: "O que diferencia Bulimia Nervosa de Transtorno de Compulsão Alimentar (TCA)?", verso: "A presença de comportamentos compensatórios recorrentes (vômitos, laxantes, jejuns extremos) na Bulimia, os quais estão AUSENTES no TCA." },
      { frente: "O que é o Transtorno Dissociativo de Identidade (TDI)?", verso: "Ruptura da identidade com 2 ou mais estados de personalidade distintos e lacunas recorrentes de memória, fortemente associada a traumas severos na infância." },
      { frente: "Na Anorexia Nervosa com vômitos e peso significativamente baixo, qual é o diagnóstico correto?", verso: "Anorexia Nervosa — subtipo compulsão alimentar purgativa (o baixo peso significativo prevalece sobre o diagnóstico de Bulimia)." },
      { frente: "Por que o tratamento dos Transtornos Alimentares deve ser multiprofissional?", verso: "Porque envolvem simultaneamente riscos clínicos/metabólicos graves, distorção da imagem corporal, sofrimento emocional e relação disfuncional com a alimentação." }
    ]
  },
  {
    id: 8,
    modulo: "Módulo 8",
    titulo: "Transtornos de Personalidade (Grupos A, B e C)",
    icone: "fa-masks-theater",
    cor: "emerald",
    topicos: [
      {
        subtopico: "8.1 Conceito Geral e Critérios dos Transtornos de Personalidade",
        resumo: "Transtornos de Personalidade são padrões duradouros, inflexíveis e invasivos de experiência interna e comportamento que causam sofrimento ou prejuízo significativo.",
        explicacao: "A personalidade corresponde ao estilo relativamente estável de pensar, sentir e se relacionar de cada indivíduo. Um <strong>Transtorno de Personalidade (TP)</strong> só se caracteriza quando esse padrão se torna <strong>marcadamente inflexível, invasivo (presente em múltiplos contextos) e desadaptativo</strong>, desviando-se das expectativas culturais em pelo menos duas de quatro áreas: <strong>cognição</strong> (forma de perceber a si e aos outros), <strong>afetividade</strong>, <strong>funcionamento interpessoal</strong> e <strong>controle de impulsos</strong>.<br><br>Características essenciais:<br>• <strong>Início precoce e curso estável:</strong> Geralmente remonta à adolescência ou início da vida adulta (evita-se fechar diagnóstico em menores de 18 anos, exceto em situações muito persistentes, e NUNCA para TP Antissocial antes dos 18).<br>• <strong>Frequentememente egossintônicos:</strong> Muitos pacientes percebem seu modo de agir como 'normal' e atribuem o conflito apenas aos outros (o que pode dificultar a busca inicial por terapia).<br>• No DSM-5-TR, organizam-se em <strong>3 Grupos (Clusters): A, B e C</strong>.",
        pontosChave: [
          "TP = padrão duradouro, rígido, invasivo (múltiplos contextos) e gerador de sofrimento ou prejuízo.",
          "Afeta >= 2 áreas: cognição, afetividade, relações interpessoais e controle de impulsos.",
          "Padrão frequentemente egossintônico (o sujeito identifica os traços como parte natural de si).",
          "Dividem-se em Cluster A (excêntricos), Cluster B (dramáticos/emotivos) e Cluster C (ansiosos/temerosos)."
        ],
        exemplo: "Um traço pontual de ciúme em um relacionamento difícil não é TP; um padrão rígido desde os 19 anos de desconfiar de absolutamente todos os amigos, colegas e parceiros, gerando isolamento total, sugere TP.",
        alerta: "Ter 'traços' de personalidade (como ser perfeccionista ou reservado) é comum e saudável; o Transtorno de Personalidade exige rigidez extrema e prejuízo significativo duradouro."
      },
      {
        subtopico: "8.2 Grupo A (Excêntricos/Estranhos): Paranoide, Esquizoide e Esquizotípico",
        resumo: "O Cluster A reúne padrões marcados por desconfiança extrema, distanciamento emocional ou excentricidades cognitivo-perceptivas.",
        explicacao: "O <strong>Grupo A</strong> agrupa transtornos caracterizados por comportamento excêntrico, retraimento social e desconfiança:<br><br>• <strong>TP Paranoide:</strong> Desconfiança e suspeita difusas e injustificadas em relação aos outros, interpretando gestos neutros ou amigáveis como maliciosos, guardando rancores persistentes e temendo traições constantes (sem delírios psicóticos fixos).<br>• <strong>TP Esquizoide:</strong> Padrão difuso de <strong>distanciamento das relações sociais</strong> e faixa restrita de expressão emocional. A pessoa genuinamente <strong>não deseja nem sente prazer em relacionamentos íntimos</strong>, prefere atividades solitárias e mostra frieza/indiferença a elogios ou críticas.<br>• <strong>TP Esquizotípico:</strong> Desconforto agudo em relações íntimas aliado a <strong>distorções cognitivas ou perceptivas e excentricidades</strong> (pensamento mágico, superstições estranhas, discurso vago/metafórico, aparência peculiar, ideias de referência — fazendo fronteira com o espectro da esquizofrenia, mas sem psicose franca contínua).",
        pontosChave: [
          "TP Paranoide: desconfiança generalizada e interpretação maliciosa das intenções alheias.",
          "TP Esquizoide: indiferença e falta de desejo por vínculos sociais + frieza emocional.",
          "TP Esquizotípico: pensamento mágico, crenças bizarras, excentricidades e desconforto social.",
          "Diferença chave: Esquizoide NÃO quer vínculos; Evitativo (Grupo C) QUER vínculos, mas tem medo de rejeição."
        ],
        exemplo: "Um homem que vive sozinho há 15 anos, não tem amigos nem parceiros, trabalha em turno solitário e afirma sinceramente não sentir falta nenhuma de convívio social exemplifica o padrão do TP Esquizoide.",
        alerta: "Pegadinha clássica: Diferencie Esquizoide (não tem desejo de se relacionar) de Evitativo (deseja muito se relacionar, mas evita por terror de rejeição)."
      },
      {
        subtopico: "8.3 Grupo B (Dramáticos/Emotivos): Antissocial, Borderline, Histriônico e Narcisista",
        resumo: "O Cluster B envolve intensa instabilidade emocional, impulsividade, busca por atenção/admiração ou violação sistemática dos direitos dos outros.",
        explicacao: "O <strong>Grupo B</strong> abrange os transtornos mais frequentes na clínica e no debate social:<br><br>• <strong>TP Antissocial:</strong> Padrão difuso de <strong>desrespeito e violação dos direitos dos outros</strong> desde os 15 anos (exige idade >= 18 anos e evidência de Transtorno da Conduta antes dos 15): engano/manipulação, impulsividade, agressividade, irresponsabilidade persistente e <strong>ausência de remorso</strong>.<br>• <strong>TP Borderline (Limítrofe):</strong> Padrão difuso de <strong>instabilidade intensa</strong> nas relações interpessoais (oscilando entre idealização e desvalorização), na autoimagem e nos afetos, com <strong>esforços frenéticos para evitar abandono real ou imaginado</strong>, sentimento crônico de vazio, raiva intensa, impulsividade autodestrutiva e <strong>comportamentos suicidas ou de automutilação recorrentes</strong>.<br>• <strong>TP Histriônico:</strong> Emotividade excessiva e <strong>busca constante de atenção</strong> (desconforto quando não é o centro das atenções, teatralidade, comportamento sedutor inapropriado, emoções superficiais e rapidamente mutáveis).<br>• <strong>TP Narcisista:</strong> Padrão de <strong>grandiosidade</strong> (em fantasia ou comportamento), <strong>necessidade excessiva de admiração</strong>, senso de direito especial, exploração interpessoal e <strong>falta de empatia</strong> (frequentemente encobrindo autoestima frágil).",
        pontosChave: [
          "Antissocial: violação de direitos, manipulação, falta de remorso (exige >= 18 anos e histórico de conduta < 15).",
          "Borderline: medo intenso de abandono, vazio crônico, instabilidade afetiva/relacional e autolesão/impulsividade.",
          "Histriônico: teatralidade, busca incessante de ser o centro das atenções e emotividade superficial.",
          "Narcisista: grandiosidade, necessidade de admiração e déficit de empatia."
        ],
        exemplo: "Uma jovem alterna entre amar intensamente o parceiro e odiá-lo diante de um atraso de 10 minutos na mensagem, entrando em desespero por medo de abandono e recorrendo a cortes nos braços para aliviar o vazio — quadro característico de TP Borderline.",
        alerta: "O TP Borderline tem ótimo potencial de melhora clínica ao longo dos anos com psicoterapias especializadas (como Terapia Comportamental Dialética — DBT — e Terapia Baseada em Mentalização), desfazendo o estigma de 'caso sem jeito'."
      },
      {
        subtopico: "8.4 Grupo C (Ansiosos/Temerosos) e Manejo Terapêutico",
        resumo: "O Cluster C reúne padrões dominados por ansiedade, inibição, dependência excessiva ou perfeccionismo rígido; o manejo clínico exige aliança sólida e respeito ético.",
        explicacao: "O <strong>Grupo C</strong> caracteriza-se por ansiedade, temor e busca por controle/segurança:<br><br>• <strong>TP Evitativa (Esquiva):</strong> Inibição social extrema, sentimentos de inadequação e <strong>hipersensibilidade à avaliação negativa</strong>. Diferente do esquizoide, a pessoa <em>deseja profundamente afeto e aceitação</em>, mas evita contatos por medo paralisante de crítica ou rejeição.<br>• <strong>TP Dependente:</strong> Necessidade difusa e excessiva de ser cuidado, levando a comportamento submisso, medo intenso de separação, dificuldade extrema em tomar decisões cotidianas sem aprovação alheia e tolerância a relações abusivas para não ficar só.<br>• <strong>TP Obsessivo-Compulsiva (TPOC):</strong> Preocupação excessiva e rígida com <strong>ordem, perfeccionismo e controle</strong> às custas da flexibilidade e eficiência (teimosia, dedicação excessiva ao trabalho, dificuldade de delegar). Diferente do TOC, é <em>egossintônico</em> e não apresenta obsessões intrusivas nem rituais compulsivos verdadeiros.<br><br><strong>Manejo Terapêutico dos TPs:</strong> A psicoterapia é o tratamento principal (ex.: DBT, Terapia do Esquema, Psicoterapia Psicodinâmica/Mentalização), exigindo <strong>contrato claro, constância do setting, validação emocional sem reforçar comportamentos destrutivos</strong> e manejo cuidadoso da contratransferência.",
        pontosChave: [
          "Evitativa: inibição social e medo intenso de rejeição apesar do desejo de vínculo.",
          "Dependente: submissão extrema, medo de ficar só e necessidade constante de outro para decidir.",
          "TPOC: perfeccionismo rígido, controle e ordem (egossintônico — diferente do TOC).",
          "Psicoterapia estruturada e aliança terapêutica consistente são a base do cuidado nos Transtornos de Personalidade."
        ],
        exemplo: "Um gerente que refaz sozinho todas as planilhas da equipe até de madrugada porque 'ninguém faz com a perfeição exata que ele exige', perdendo lazer e amizades mas achando que seu jeito é o único correto, ilustra o TP Obsessivo-Compulsivo.",
        alerta: "Nunca utilize diagnósticos de Transtorno de Personalidade (especialmente Borderline ou Antissocial) de forma pejorativa ou para recusar cuidado ético ao paciente."
      }
    ],
    flashcards: [
      { frente: "Como os Transtornos de Personalidade são divididos nos 3 Grupos (Clusters) do DSM-5?", verso: "Grupo A (excêntricos): Paranoide, Esquizoide, Esquizotípico; Grupo B (dramáticos): Antissocial, Borderline, Histriônico, Narcisista; Grupo C (ansiosos): Evitativa, Dependente, Obsessivo-Compulsiva." },
      { frente: "Qual a diferença entre TP Esquizoide (Grupo A) e TP Evitativa (Grupo C)?", verso: "O Esquizoide não deseja nem sente prazer em relações íntimas; o Evitativo deseja vínculos, mas se isola por medo intenso de crítica e rejeição." },
      { frente: "Quais os principais traços do Transtorno de Personalidade Borderline?", verso: "Medo intenso de abandono, instabilidade afetiva/relacional, sensação crônica de vazio, impulsividade e comportamentos autolesivos/suicidas recorrentes." },
      { frente: "Qual a diferença entre TOC e Transtorno de Personalidade Obsessivo-Compulsiva (TPOC)?", verso: "O TOC tem obsessões intrusivas e compulsões (egodistônico); o TPOC é um padrão rígido de perfeccionismo, ordem e controle sem obsessões/compulsões verdadeiras (egossintônico)." },
      { frente: "Qual requisito de idade e histórico é exigido para o diagnóstico de TP Antissocial?", verso: "Idade mínima de 18 anos e evidência de Transtorno da Conduta iniciado antes dos 15 anos de idade." },
      { frente: "Qual é a abordagem psicoterápica amplamente reconhecida como referência para o TP Borderline?", verso: "Terapia Comportamental Dialética (DBT), além da Terapia Baseada em Mentalização e Terapia do Esquema." }
    ]
  }
];
