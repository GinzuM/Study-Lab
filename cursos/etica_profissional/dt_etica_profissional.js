// =========================================================================
// cursos/etica_profissional/dt_etica_profissional.js
// Base de Dados Teórica, Leituras da Trilha, Grimório e Flashcards
// =========================================================================

window.DT_MODULES = [
  {
    id: 1,
    modulo: "Módulo 1",
    titulo: "Fundamentos Filosóficos da Ética e da Moral",
    icone: "fa-scale-balanced",
    cor: "amber",
    topicos: [
      {
        subtopico: "1.1 Conceitos de Moral e Ética e suas Relações",
        resumo: "A Moral refere-se ao conjunto de normas e costumes de uma sociedade; a Ética é a reflexão crítica e filosófica sobre esses valores.",
        explicacao: "Embora frequentemente usados como sinônimos no cotidiano, <strong>Moral</strong> e <strong>Ética</strong> possuem distinções fundamentais na Filosofia e na Psicologia:<br><br>• <strong>Moral</strong> (do latim <em>mos/mores</em>, 'costumes'): É o conjunto de regras, valores, hábitos e proibições adquiridos pela cultura, tradição, família e religião que orientam o comportamento em uma determinada época e sociedade. A moral é <strong>prática, normativa e mutável</strong> historicamente.<br>• <strong>Ética</strong> (do grego <em>ethos</em>, 'caráter / modo de ser'): É a <strong>reflexão crítica, racional e filosófica</strong> sobre a moral. A ética pergunta 'por que devemos agir assim?' e busca princípios universais baseados na dignidade humana, na justiça e na autonomia.<br><br><strong>Relações entre Ética e Moral:</strong> Elas são interdependentes. A moral fornece o campo prático dos costumes e normas; a ética analisa criticamente se essas normas são justas ou se perpetuam opressões, permitindo transformar a moral quando ela fere direitos humanos.",
        pontosChave: [
          "Moral (mores) = normas, costumes e valores práticos vigentes em um grupo ou época.",
          "Ética (ethos) = investigação racional e crítica sobre os fundamentos da moral.",
          "A moral tende a ser particular e histórica; a ética busca princípios de validade mais ampla e reflexiva.",
          "Ética e Moral se relacionam dialeticamente: a reflexão ética permite revisar costumes morais injustos."
        ],
        exemplo: "Em épocas passadas, a escravidão era aceita pela moral vigente de certas sociedades; foi a reflexão ética baseada na dignidade e igualdade humana que demonstrou sua ilegitimidade.",
        alerta: "Pegadinha clássica: Moral e Ética NÃO são opostas nem idênticas. A ética é a ciência/reflexão crítica que toma a moral como seu objeto de estudo."
      },
      {
        subtopico: "1.2 Diferenças entre Juízo de Fato e Juízo de Valor",
        resumo: "Juízos de fato descrevem a realidade de forma objetiva; juízos de valor avaliam algo como bom, mau, justo ou injusto.",
        explicacao: "Para pensar eticamente, é essencial distinguir dois modos de julgar a realidade (muito explorados pela filósofa Marilena Chauí):<br><br>• <strong>Juízo de Fato:</strong> São enunciados <strong>descritivos e objetivos</strong> que afirmam o que uma coisa é, como ela é ou por que ocorre. Podem ser verificados como verdadeiros ou falsos por meio da observação empírica ou da ciência (ex.: 'Está chovendo agora', 'A água ferve a 100 °C ao nível do mar').<br>• <strong>Juízo de Valor:</strong> São enunciados <strong>avaliativos e normativos</strong> que atribuem qualidades morais, estéticas ou afetivas a fatos, pessoas ou ações — definindo o que é bom, mau, belo, feio, justo, injusto, certo ou errado (ex.: 'A chuva de hoje é desagradável', 'Mentir para lucrar é injusto').<br><br>Na prática psicológica, o profissional precisa diferenciar o <strong>fato clínico observado</strong> (juízo de fato) de suas <strong>crenças ou julgamentos pessoais</strong> (juízo de valor) para evitar preconceitos e avaliações enviesadas.",
        pontosChave: [
          "Juízo de fato: descreve 'o que é'; pode ser testado como verdadeiro ou falso.",
          "Juízo de valor: avalia 'o que deve ser' ou qual o valor moral/estético de algo.",
          "A ética lida diretamente com juízos de valor fundamentados racionalmente.",
          "Na clínica e nos documentos psicológicos, o psicólogo evita impor juízos de valor pessoais sobre o paciente."
        ],
        exemplo: "Dizer 'O paciente relatou consumir álcool diariamente há 3 anos' é um juízo de fato; dizer 'O paciente é irresponsável por beber' é um juízo de valor inadequado à prática técnica.",
        alerta: "Um juízo de valor não pode ser reduzido a simples 'opinião sem critério' na ética; a ética exige justificar racionalmente os valores defendidos."
      },
      {
        subtopico: "1.3 Senso Moral e Consciência Moral",
        resumo: "O senso moral é a reação afetiva imediata diante de valores; a consciência moral é a capacidade reflexiva de deliberar e assumir responsabilidade.",
        explicacao: "A vida ética do sujeito estrutura-se em duas dimensões complementares:<br><br>• <strong>Senso Moral:</strong> É a maneira imediata e afetiva como avaliamos situações e ações a partir dos valores internalizados. Manifesta-se em sentimentos como <strong>indignação</strong> diante de uma injustiça, <strong>compaixão</strong> diante do sofrimento alheio, <strong>vergonha</strong> ou <strong>culpa</strong> quando violamos um valor importante.<br>• <strong>Consciência Moral:</strong> Vai além do sentimento imediato. É a capacidade racional e deliberativa de <strong>analisar conflitos, ponderar consequências, escolher livremente e assumir a responsabilidade</strong> pelas próprias decisões.<br><br>Para que exista um <strong>agente moral (sujeito ético)</strong>, são necessárias quatro condições: ser <strong>consciente</strong> de si e dos outros, ser dotado de <strong>vontade/autonomia</strong> (capaz de controlar impulsos), ser <strong>livre</strong> (poder escolher entre alternativas) e ser <strong>responsável</strong> (responder pelos efeitos de seus atos).",
        pontosChave: [
          "Senso moral = dimensão afetiva e imediata (indignação, empatia, culpa, vergonha).",
          "Consciência moral = dimensão reflexiva, deliberativa e decisória diante de dilemas.",
          "Requisitos do sujeito ético: consciência, autonomia, liberdade e responsabilidade.",
          "Não há responsabilidade moral onde não existe consciência nem liberdade de escolha."
        ],
        exemplo: "Sentir revolta instantânea ao presenciar um ato de racismo é expressão do senso moral; refletir sobre a melhor forma de intervir, denunciar e acolher a vítima é exercício da consciência moral.",
        alerta: "Confundir senso moral com consciência moral é erro frequente: o senso é o sentimento avaliativo inicial; a consciência é a deliberação racional e responsável."
      },
      {
        subtopico: "1.4 Ética, Cidadania e Compromisso Social da Psicologia",
        resumo: "A cidadania envolve o exercício pleno de direitos e deveres, sendo indissociável do compromisso ético-político da Psicologia.",
        explicacao: "A <strong>cidadania</strong> não se limita ao direito ao voto; compreende o conjunto de <strong>direitos civis</strong> (liberdade, igualdade perante a lei), <strong>direitos políticos</strong> (participação nas decisões coletivas) e <strong>direitos sociais</strong> (saúde, educação, moradia, trabalho digno), além dos deveres de respeito à coletividade.<br><br>Na Psicologia brasileira, a ética profissional assume um caráter <strong>crítico e comprometido com os Direitos Humanos</strong>. Isso significa que o psicólogo não atua de forma 'neutra' diante de violências estruturais, discriminações ou violações de direitos: sua prática deve promover a autonomia dos sujeitos, a saúde integral, a equidade e a eliminação de qualquer forma de negligência, discriminação, exploração, violência, crueldade e opressão.",
        pontosChave: [
          "Cidadania integra direitos civis, políticos e sociais e corresponsabilidade coletiva.",
          "A Psicologia possui compromisso ético-político com a Declaração Universal dos Direitos Humanos.",
          "Neutralidade técnica não significa indiferença diante de violações de direitos.",
          "O fazer psicológico deve promover dignidade, liberdade e autonomia dos indivíduos e coletivos."
        ],
        exemplo: "Um psicólogo escolar que atua contra a exclusão de estudantes com deficiência e promove a inclusão institucional exerce o compromisso ético-cidadão da profissão.",
        alerta: "Em provas de Psicologia, respostas que defendam 'total neutralidade política diante de discriminação ou violência' estão incorretas frente ao Código de Ética."
      }
    ],
    flashcards: [
      { frente: "Qual a diferença entre Moral e Ética?", verso: "Moral é o conjunto de costumes, normas e valores práticos de uma sociedade; Ética é a reflexão crítica e filosófica sobre esses valores." },
      { frente: "Diferencie Juízo de Fato de Juízo de Valor.", verso: "Juízo de fato descreve objetivamente o que algo é (verificável como verdadeiro/falso); juízo de valor avalia algo como bom, mau, justo ou injusto." },
      { frente: "O que é Senso Moral?", verso: "A avaliação imediata e afetiva diante de valores e ações, expressa em sentimentos como indignação, compaixão, vergonha ou culpa." },
      { frente: "O que é Consciência Moral?", verso: "A capacidade racional de refletir diante de dilemas, deliberar livremente, escolher e assumir responsabilidade pelas consequências dos atos." },
      { frente: "Quais são as 4 condições para alguém ser considerado um sujeito ético?", verso: "Consciência (de si e do outro), vontade/autonomia, liberdade de escolha e responsabilidade." },
      { frente: "Como a Psicologia articula Ética e Cidadania?", verso: "Assumindo compromisso ativo com os Direitos Humanos, a dignidade, a equidade e o combate a toda forma de opressão, violência e discriminação." }
    ]
  },
  {
    id: 2,
    modulo: "Módulo 2",
    titulo: "Código de Ética Profissional do Psicólogo",
    icone: "fa-book-open",
    cor: "blue",
    topicos: [
      {
        subtopico: "2.1 Código de Ética (Res. CFP 010/2005) e Princípios Fundamentais",
        resumo: "O Código de Ética Profissional do Psicólogo (CEPP) orienta a profissão por meio de 7 Princípios Fundamentais baseados nos Direitos Humanos.",
        explicacao: "Instituído pela <strong>Resolução CFP nº 010/2005</strong>, o Código de Ética Profissional do Psicólogo (CEPP) não é um mero manual punitivo, mas um instrumento de reflexão e pacto social da categoria. Ele abre com <strong>7 Princípios Fundamentais</strong>:<br><br><strong>I.</strong> Basear o trabalho no respeito e na promoção da liberdade, dignidade, igualdade e integridade do ser humano, apoiado na <strong>Declaração Universal dos Direitos Humanos</strong>.<br><strong>II.</strong> Trabalhar visando promover a saúde e a qualidade de vida das pessoas e coletividades e contribuir para a eliminação de negligência, discriminação, exploração, violência, crueldade e opressão.<br><strong>III.</strong> Atuar com <strong>responsabilidade social</strong>, analisando crítica e historicamente a realidade política, econômica, social e cultural.<br><strong>IV.</strong> Atuar com responsabilidade, por meio do <strong>contínuo aprimoramento profissional</strong>, contribuindo para o desenvolvimento da Psicologia como campo científico e prática.<br><strong>V.</strong> Contribuir para promover a <strong>universalização do acesso</strong> da população às informações, ao conhecimento e aos serviços da Psicologia.<br><strong>VI.</strong> Zelar para que o exercício profissional seja efetuado com dignidade, rejeitando situações em que a Psicologia esteja sendo aviltada.<br><strong>VII.</strong> Considerar as relações de poder nos contextos em que atua e os impactos dessas relações sobre suas atividades profissionais.",
        pontosChave: [
          "O CEPP vigente foi aprovado pela Resolução CFP nº 010/2005.",
          "Baseia-se explicitamente na Declaração Universal dos Direitos Humanos (Princípio I).",
          "Exige contínuo aprimoramento técnico-científico (Princípio IV) e análise crítica da realidade social (Princípio III).",
          "Determina atenção às relações de poder nos contextos de atuação (Princípio VII)."
        ],
        exemplo: "Recusar uma vaga que impõe atendimentos de 10 minutos sem sigilo em condições indignas cumpre o Princípio VI (rejeitar o aviltamento da profissão).",
        alerta: "Decore o número da resolução do Código de Ética: Resolução CFP nº 010/2005 — costuma cair literalmente em provas e concursos."
      },
      {
        subtopico: "2.2 Deveres Fundamentais do Psicólogo (Art. 1º)",
        resumo: "O Artigo 1º do CEPP define as obrigações essenciais do psicólogo quanto à competência técnica, transparência, registro e respeito ao usuário.",
        explicacao: "Entre os principais <strong>deveres fundamentais</strong> estabelecidos no Art. 1º do CEPP destacam-se:<br><br>• Conhecer, divulgar, cumprir e fazer cumprir o Código de Ética.<br>• Assumir responsabilidades profissionais <strong>somente por atividades para as quais esteja capacitado</strong> pessoal, teórica e tecnicamente.<br>• Prestar serviços psicológicos de qualidade, em condições de trabalho dignas e apropriadas, utilizando princípios, conhecimentos e técnicas <strong>reconhecidamente fundamentados na ciência psicológica, na ética e na legislação</strong>.<br>• Prestar serviços em situações de <strong>calamidade pública ou de emergência</strong>, sem visar benefício pessoal.<br>• Estabelecer acordos claros com o cliente/usuário sobre objetivos, procedimentos, honorários e sigilo, fornecendo informações concernentes ao trabalho a ser realizado.<br>• Fornecer, a quem de direito, na prestação de serviços psicológicos, informações concernentes ao trabalho a ser realizado e ao seu objetivo profissional.<br>• Levar ao conhecimento das instâncias competentes (CRP) o exercício ilegal ou irregular da profissão e transgressões éticas.",
        pontosChave: [
          "Só assumir demandas para as quais possua capacitação pessoal, teórica e técnica.",
          "Usar exclusivamente técnicas fundamentadas na ciência psicológica, na ética e na legislação.",
          "Dever de atuar em emergências e calamidades públicas sem visar lucro pessoal.",
          "Dever de informar claramente o usuário sobre o serviço, contrato terapêutico e encaminhamentos."
        ],
        exemplo: "Um psicólogo recém-formado sem formação em avaliação neuropsicológica recusa realizar um exame complexo e encaminha o paciente para um colega habilitado, cumprindo o Art. 1º, alínea 'b'.",
        alerta: "Atender sem estar capacitado ou usar práticas pseudocientíficas/esotéricas associadas ao título de psicólogo viola diretamente o Art. 1º e o Art. 2º do CEPP."
      },
      {
        subtopico: "2.3 Vedações e Problemas Relativos à Conduta Ética (Art. 2º)",
        resumo: "O Artigo 2º lista as condutas estritamente proibidas ao psicólogo, protegendo o usuário de abusos, conflitos de interesse e práticas não reconhecidas.",
        explicacao: "Os <strong>problemas relativos à conduta ética</strong> mais frequentes nos processos disciplinares dos Conselhos Regionais de Psicologia (CRPs) envolvem violações ao <strong>Art. 2º (Vedações)</strong>:<br><br>• <strong>Indução de convicções:</strong> É proibido induzir a convicções políticas, filosóficas, morais, ideológicas, religiosas, de orientação sexual ou qualquer tipo de preconceito.<br>• <strong>Práticas não reconhecidas:</strong> É vedado utilizar ou favorecer práticas que não estejam de acordo com os critérios científicos da Psicologia (ex.: tarô, constelação como técnica psicológica sem respaldo, terapias de 'reversão sexual').<br>• <strong>Relações duplas e conflito de interesses:</strong> É proibido estabelecer com a pessoa atendida, familiar ou terceiro vínculo que possa interferir negativamente nos objetivos do serviço (como relacionamento afetivo-sexual ou comercial com paciente) e ser perito/avaliador de pessoa com quem tenha vínculo pessoal.<br>• <strong>Pleitear ou receber comissão:</strong> É vedado receber ou pagar comissão por encaminhamento de pacientes.<br>• <strong>Publicidade sensacionalista (Art. 20):</strong> É proibido usar o preço do serviço como propaganda, fazer autopromoção sensacionalista, prometer cura garantida ou divulgar fotos/depoimentos identificáveis de pacientes.<br>• <strong>Conivência com tortura/violência:</strong> Estritamente proibido praticar ou ser conivente com atos de tortura, discriminação ou violação de direitos.",
        pontosChave: [
          "Vedado induzir convicções religiosas, políticas, morais ou de orientação sexual.",
          "Vedado estabelecer relações duplas (afetivas, sexuais ou financeiras paralelas) que prejudiquem o atendimento.",
          "Vedado atuar como perito de amigos, parentes ou próprios pacientes em psicoterapia.",
          "Vedado pagar/receber comissão por encaminhamento e usar preço baixo como forma de propaganda."
        ],
        exemplo: "Um psicólogo clínico que atende um paciente há 2 anos é chamado para ser perito judicial na guarda dos filhos desse mesmo paciente; ele deve recusar a função de perito por conflito de papéis (Art. 2º, alínea 'k').",
        alerta: "Na publicidade profissional (Art. 20), o psicólogo deve SEMPRE informar seu nome completo, profissão e número de inscrição no CRP, sem jamais divulgar valores promocionais ou promessas de resultado."
      },
      {
        subtopico: "2.4 Sigilo Profissional, Quebra de Sigilo e Penalidades",
        resumo: "O sigilo é um dever fundamental (Art. 9º), mas pode ser quebrado em situações excepcionais visando o menor prejuízo (Art. 10º).",
        explicacao: "O <strong>sigilo profissional (Art. 9º)</strong> é a base da confiança na relação psicológica: o psicólogo deve respeitar o sigilo a fim de proteger a intimidade das pessoas, grupos ou organizações a que tenha acesso no exercício profissional.<br><br><strong>Quebra de Sigilo (Art. 10º):</strong> Nas situações em que se configure conflito entre as exigências do sigilo e os Princípios Fundamentais (como risco iminente à vida — suicídio ou homicídio — ou violência grave contra criança/adolescente/idoso), o psicólogo <strong>poderá decidir pela quebra de sigilo</strong>, baseando sua decisão na busca do <strong>menor prejuízo</strong>. Caso decida quebrar o sigilo, deve restringir-se a prestar as <strong>informações estritamente necessárias</strong>.<br><br><strong>Atendimento a Crianças/Adolescentes e Trabalho em Equipe:</strong> Aos responsáveis legais (Art. 8º) e à equipe multiprofissional (Art. 6º), devem ser fornecidas apenas as informações estritamente necessárias para a tomada de decisões que afetem o usuário.<br><br><strong>Penalidades (Art. 21):</strong> As transgressões ao CEPP sujeitam o profissional a: 1) Advertência; 2) Multa; 3) Censura pública; 4) Suspensão do exercício profissional por até 30 dias; 5) Cassação do exercício profissional (<em>ad referendum</em> do CFP).",
        pontosChave: [
          "Art. 9º: Sigilo é regra geral para proteger a intimidade do usuário.",
          "Art. 10º: Quebra de sigilo é exceção deliberada pelo psicólogo com foco no MENOR PREJUÍZO e restrição ao estritamente necessário.",
          "Em equipes multiprofissionais e com pais de menores, compartilha-se apenas o estritamente necessário.",
          "Penalidades éticas vão de advertência e multa até censura pública, suspensão (até 30 dias) e cassação."
        ],
        exemplo: "Um adolescente revela em sessão um plano concreto e imediato de suicídio; o psicólogo avalia o risco iminente à vida, informa ao paciente a necessidade de proteção e aciona os responsáveis apenas com os dados necessários para garantir segurança (busca do menor prejuízo).",
        alerta: "Pegadinha de prova: O sigilo profissional NÃO é absoluto; o Art. 10º prevê a possibilidade de quebra quando há conflito com os Princípios Fundamentais, sempre guiada pelo critério do menor prejuízo."
      }
    ],
    flashcards: [
      { frente: "Qual resolução instituiu o Código de Ética Profissional do Psicólogo vigente?", verso: "Resolução CFP nº 010/2005." },
      { frente: "Qual documento internacional fundamenta o Princípio Fundamental I do CEPP?", verso: "A Declaração Universal dos Direitos Humanos." },
      { frente: "O psicólogo pode usar o preço da consulta como propaganda ou fazer promoções?", verso: "Não. O Art. 20 veda utilizar o preço do serviço como forma de propaganda ou realizar publicidade sensacionalista." },
      { frente: "O sigilo profissional do psicólogo é absoluto?", verso: "Não. Pelo Art. 10º, o psicólogo pode decidir pela quebra de sigilo diante de conflito com os Princípios Fundamentais, visando o menor prejuízo e restringindo-se ao estritamente necessário." },
      { frente: "O psicólogo clínico pode atuar como perito judicial do seu próprio paciente?", verso: "Não. O Art. 2º veda ser perito, avaliador ou parecerista em situações nas quais seus vínculos pessoais ou profissionais possam afetar a qualidade do trabalho." },
      { frente: "Quais são as 5 penalidades previstas no Código de Ética?", verso: "Advertência, multa, censura pública, suspensão do exercício profissional (até 30 dias) e cassação do exercício profissional." }
    ]
  },
  {
    id: 3,
    modulo: "Módulo 3",
    titulo: "Bioética, Ética em Pesquisa e Documentos Psicológicos",
    icone: "fa-file-signature",
    cor: "purple",
    topicos: [
      {
        subtopico: "3.1 Bioética e os Quatro Princípios Bioéticos",
        resumo: "A Bioética estuda os dilemas morais nas ciências da vida e da saúde, guiada sobretudo pelos princípios da autonomia, beneficência, não maleficência e justiça.",
        explicacao: "O termo <strong>Bioética</strong> (cunhado por Van Rensselaer Potter em 1970 como 'ponte para o futuro') designa o campo interdisciplinar que analisa os conflitos éticos decorrentes dos avanços biomédicos, da assistência em saúde e da relação com a vida e o meio ambiente.<br><br>O modelo mais difundido na prática clínica é a <strong>Bioética Principialista</strong> de <strong>Tom Beauchamp e James Childress</strong>, estruturada em <strong>4 princípios fundamentais</strong>:<br><br><strong>1. Autonomia:</strong> Respeito à capacidade de autodeterminação do indivíduo, garantindo que ele tome decisões livres e esclarecidas sobre sua saúde e seu corpo.<br><strong>2. Beneficência:</strong> Obrigação ética de agir sempre em benefício do paciente, maximizando ganhos terapêuticos e promovendo seu bem-estar.<br><strong>3. Não Maleficência:</strong> Dever primordial de <strong>não causar dano intencional</strong> ou evitável ao paciente (<em>primum non nocere</em> — 'primeiro, não causar dano').<br><strong>4. Justiça:</strong> Distribuição justa, equitativa e universal dos recursos, benefícios e riscos em saúde, sem discriminação.<br><br>Na América Latina e no Brasil, destaca-se também a <strong>Bioética de Proteção e de Intervenção</strong>, que amplia o foco para vulnerabilidades sociais, desigualdade e acesso coletivo à saúde.",
        pontosChave: [
          "Bioética estuda conflitos morais na saúde, biotecnologia, pesquisa e cuidado com a vida.",
          "Os 4 princípios de Beauchamp e Childress: Autonomia, Beneficência, Não Maleficência e Justiça.",
          "Não maleficência = evitar danos; Beneficência = promover o bem ativo.",
          "Autonomia exige informação clara para que o sujeito consinta ou recuse intervenções."
        ],
        exemplo: "Explicar claramente os riscos e benefícios de um procedimento para que o paciente lúcido decida se aceita ou recusa o tratamento concretiza o princípio bioético da Autonomia.",
        alerta: "Não confunda Beneficência com paternalismo: fazer o que o profissional acha 'melhor' passando por cima da vontade consciente do paciente viola a Autonomia."
      },
      {
        subtopico: "3.2 Ética em Pesquisa com Seres Humanos",
        resumo: "Toda pesquisa envolvendo seres humanos no Brasil exige aprovação prévia de um Comitê de Ética (Sistema CEP/CONEP) e consentimento livre e esclarecido.",
        explicacao: "Após graves violações históricas (como experimentos nazistas que originaram o <strong>Código de Nuremberg</strong> em 1947 e a <strong>Declaração de Helsinque</strong> em 1964), a ética em pesquisa tornou-se rigorosamente regulamentada.<br><br>No Brasil, o controle é feito pelo <strong>Sistema CEP/CONEP</strong> (Comitês de Ética em Pesquisa / Comissão Nacional de Ética em Pesquisa), regido principalmente por duas normas do Conselho Nacional de Saúde:<br>• <strong>Resolução CNS nº 466/2012:</strong> Diretrizes gerais para pesquisas com seres humanos (área biomédica e geral).<br>• <strong>Resolução CNS nº 510/2016:</strong> Normas específicas para pesquisas em <strong>Ciências Humanas e Sociais</strong> (como grande parte da Psicologia), reconhecendo métodos qualitativos e especificidades do registro de consentimento.<br><br><strong>Pilares obrigatórios da pesquisa ética (também no Art. 16 do CEPP):</strong><br>1) Submissão e aprovação prévia pelo CEP antes de iniciar a coleta de dados.<br>2) Obtenção do <strong>TCLE (Termo de Consentimento Livre e Esclarecido)</strong> para maiores de 18 anos/responsáveis, e <strong>TALE (Termo de Assentimento Livre e Esclarecido)</strong> para crianças e adolescentes.<br>3) Garantia de <strong>anonimato/sigilo</strong>, participação voluntária e direito de desistir a qualquer momento sem prejuízo.<br>4) Avaliação da relação risco-benefício e garantia de assistência imediata caso o participante sofra desconforto ou dano.",
        pontosChave: [
          "Resolução CNS 466/2012 (geral) e Resolução CNS 510/2016 (específica para Ciências Humanas e Sociais).",
          "TCLE = consentimento do adulto/responsável; TALE = assentimento da criança/adolescente.",
          "É obrigatória a aprovação prévia do projeto pelo CEP (via Plataforma Brasil) antes da coleta de dados.",
          "O participante tem direito absoluto ao sigilo, voluntariedade e retirada do consentimento sem penalidades."
        ],
        exemplo: "Antes de entrevistar adolescentes de 15 anos sobre ansiedade escolar, o pesquisador obtém aprovação do CEP, colhe o TCLE assinado pelos pais e o TALE assinado pelos próprios adolescentes.",
        alerta: "Nunca inicie a coleta de dados com seres humanos antes do parecer favorável do Comitê de Ética (CEP) — isso constitui infração ética grave."
      },
      {
        subtopico: "3.3 Elaboração de Documentos Psicológicos: Regras Gerais",
        resumo: "A Resolução CFP nº 06/2019 define os princípios técnicos, éticos e linguísticos obrigatórios para qualquer documento escrito pelo psicólogo.",
        explicacao: "A elaboração de documentos psicológicos é regida pela <strong>Resolução CFP nº 06/2019</strong> (que substituiu a antiga 07/2003). Todo documento produzido pelo psicólogo tem valor legal, técnico e ético e deve obedecer a princípios rigorosos:<br><br>• <strong>Linguagem técnica, clara e objetiva:</strong> Redação culta, concisa, sem jargões incompreensíveis ao destinatário e <strong>livre de preconceitos ou juízos de valor</strong>.<br>• <strong>Fundamentação técnico-científica:</strong> Toda conclusão deve basear-se nos dados efetivamente colhidos e em referenciais teóricos reconhecidos pela Psicologia.<br>• <strong>Restrição ao estritamente necessário (Sigilo):</strong> Deve constar apenas o que responde à demanda solicitada, preservando a intimidade do avaliado.<br>• <strong>Identificação obrigatória e Guarda:</strong> Deve conter nome completo do psicólogo, número do CRP, assinatura e data. Os documentos e registros devem ser guardados por no mínimo <strong>5 anos</strong> (podendo ser ampliado por lei).<br>• <strong>Entrevista Devolutiva:</strong> É dever do psicólogo realizar entrevista devolutiva ao entregar documentos decorrentes de avaliação psicológica.",
        pontosChave: [
          "Norma vigente: Resolução CFP nº 06/2019.",
          "Linguagem deve ser precisa, objetiva, técnica e isenta de julgamentos morais.",
          "O prazo mínimo de guarda dos documentos e registros psicológicos é de 5 anos.",
          "É obrigatório respeitar o sigilo (apenas informações necessárias) e realizar entrevista devolutiva na entrega."
        ],
        exemplo: "Ao redigir um documento para a escola de uma criança, o psicólogo descreve estratégias pedagógicas recomendadas sem expor conflitos conjugais íntimos dos pais relatados em sessão.",
        alerta: "A Resolução CFP nº 07/2003 foi REVOGADA. A norma atual que rege documentos psicológicos é a Resolução CFP nº 06/2019."
      },
      {
        subtopico: "3.4 Modalidades de Documentos Psicológicos (Res. CFP 06/2019)",
        resumo: "A Resolução CFP nº 06/2019 estabelece 6 modalidades oficiais de documentos, cada uma com finalidade e estrutura específicas.",
        explicacao: "A Resolução CFP nº 06/2019 define <strong>6 modalidades de documentos psicológicos</strong>:<br><br><strong>1. Declaração:</strong> Documento conciso que registra <strong>informações objetivas</strong> sobre a prestação de serviço (comparecimento, dias/horários de atendimento, acompanhamento em curso). <strong>NÃO pode conter diagnóstico nem registro de sintomas</strong>.<br><strong>2. Atestado Psicológico:</strong> Certifica uma determinada <strong>situação ou estado psicológico</strong> (afirmando condições para atividades, justificativa de faltas, necessidade de afastamento ou impedimento), fundamentado em diagnóstico psicológico (pode incluir CID se necessário).<br><strong>3. Relatório Psicológico:</strong> Documento descritivo resultante de <strong>atuação psicológica</strong> (psicoterapia, atendimento escolar, institucional etc.) que expõe procedimentos, análise e conclusão — <strong>sem ser fruto de avaliação psicológica com testes</strong>.<br><strong>4. Relatório Multiprofissional:</strong> Resultante da atuação do psicólogo em <strong>equipe multiprofissional</strong>; o psicólogo assina e se responsabiliza exclusivamente pela parte referente à sua área.<br><strong>5. Laudo Psicológico:</strong> Documento técnico mais completo, resultante especificamente de um processo de <strong>Avaliação Psicológica</strong> (com métodos, técnicas e instrumentos psicológicos). Possui 6 itens obrigatórios: Identificação, Descrição da Demanda, Procedimento, Análise, Conclusão e Referências.<br><strong>6. Parecer Psicológico:</strong> Pronunciamento por escrito que responde a uma <strong>questão-problema</strong> (quesito) ou analisa um documento já existente, emitido por especialista na área — <strong>não resulta de avaliação psicológica direta do sujeito</strong>.",
        pontosChave: [
          "Declaração: apenas fatos objetivos (comparecimento/horário) — PROIBIDO incluir sintomas ou diagnóstico.",
          "Atestado Psicológico: certifica estado/condição psicológica para afastamento, aptidão ou justificativa.",
          "Laudo Psicológico: resultado obrigatório de uma Avaliação Psicológica (exige 6 seções, incluindo Referências).",
          "Relatório Psicológico (atuação geral) vs. Relatório Multiprofissional (equipe) vs. Parecer (resposta técnica a questão-problema)."
        ],
        exemplo: "Um paciente pede um papel apenas para comprovar no trabalho que esteve na sessão de psicoterapia das 14h às 15h. O documento correto é a Declaração (sem mencionar diagnóstico).",
        alerta: "Pegadinha clássica da Res. 06/2019: Apenas o LAUDO PSICOLÓGICO resulta de Avaliação Psicológica; o Relatório Psicológico resulta de outras atuações (como psicoterapia)."
      }
    ],
    flashcards: [
      { frente: "Quais são os 4 princípios da Bioética Principialista (Beauchamp e Childress)?", verso: "Autonomia, Beneficência, Não Maleficência e Justiça." },
      { frente: "Qual resolução do CNS trata especificamente da ética em pesquisa nas Ciências Humanas e Sociais?", verso: "Resolução CNS nº 510/2016 (complementando a Resolução CNS nº 466/2012)." },
      { frente: "Qual a diferença entre TCLE e TALE em pesquisas?", verso: "TCLE (Termo de Consentimento Livre e Esclarecido) é assinado por adultos ou responsáveis legais; TALE (Termo de Assentimento) é assinado por crianças/adolescentes." },
      { frente: "Qual resolução do CFP regulamenta atualmente a elaboração de documentos psicológicos?", verso: "Resolução CFP nº 06/2019." },
      { frente: "A Declaração psicológica pode conter diagnóstico ou descrição de sintomas?", verso: "Não! A Declaração registra apenas informações objetivas (comparecimento, horários, acompanhamento)." },
      { frente: "Qual a diferença entre Relatório Psicológico e Laudo Psicológico na Res. CFP 06/2019?", verso: "O Laudo resulta especificamente de uma Avaliação Psicológica (e exige Referências); o Relatório descreve outras atuações psicológicas (como psicoterapia ou atuação escolar)." }
    ]
  }
];
