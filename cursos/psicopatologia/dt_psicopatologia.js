// =========================================================================
// DADOS TEÓRICOS (dt_psicopatologia.js) — Doc's Lab
// Revisado integralmente: Espelhamento pedagógico exato com o Quiz e Simulado
// =========================================================================

const studyData = {
  topics: [
    {
      id: "conceito_objeto",
      title: "1. Conceito, Objeto e a Advertência de Jaspers",
      content: `A Psicopatologia é a ciência autônoma teórica e descritiva que investiga a natureza essencial, as causas e as formas de manifestação do sofrimento mental. Diferencia-se da Psiquiatria porque esta última constitui uma prática médica pragmática focada na intervenção, diagnóstico nosológico e tratamento farmacológico.

O fundador da Psicopatologia Fenomenológica Moderna, Karl Jaspers (1913), estabeleceu que o verdadeiro **objeto da psicopatologia é o acontecimento psíquico consciente**, ou seja, aquilo que o paciente vivencia subjetivamente. 

⚠️ **A Advertência Ética Central de Jaspers:** Jaspers deixou expresso que **nunca podemos reduzir inteiramente o ser humano aos conceitos psicopatológicos**. O indivíduo é sempre maior e transcende qualquer diagnóstico ou rótulo clínico.

* **Exemplo Prático:** O médico prescreve lítio para conter a euforia de um paciente (Psiquiatria). O psicopatólogo analisa como a vivência do tempo, do espaço e do eu se alterou durante esse episódio maníaco (Psicopatologia).`,
      mnemonic: "💡 Mnemônico: Psicopatologia = Ciência descritiva do vivido. Psiquiatria = Prática médica curativa. Jaspers = A pessoa transcende o diagnóstico."
    },
    {
      id: "normal_patologico",
      title: "2. Critérios de Normalidade em Saúde Mental",
      content: `Definir normalidade na mente humana exige múltiplos critérios integrados (Dalgalarrondo):
      1. **Normalidade Estatística:** Baseia-se na frequência matemática (Curva de Gauss). O que está na média é normal; o que se afasta muito é patológico. *Falha:* Fenômenos comuns podem ser patológicos (cárie dentária, ansiedade leve) e traços raros podem ser saudáveis (genialidade artística).
      2. **Normalidade como Processo (Dinâmica do Desenvolvimento):** Considera a faixa etária e a etapa evolutiva. O que é normal e esperado em uma criança de 3 anos pode ser altamente disfuncional em um adulto de 35 anos.
      3. **Normalidade Subjetiva:** O indivíduo avalia o próprio estado de saúde. *Falha:* Em quadros psicóticos graves ou mania avançada, o paciente sente-se "perfeito" e nega absolutamente a doença (ausência de crítica).
      4. **Normalidade Funcional:** Considera o grau de prejuízo adaptativo e o sofrimento gerado para o indivíduo ou para o seu grupo social.

* **Exemplo Prático:** Uma criança de 4 anos conversar com um amigo invisível está dentro do normal para a etapa criativa do processo de desenvolvimento; um adulto de 40 anos manter conversas verbais diárias com esse mesmo amigo invisível evidencia rompimento funcional.`,
      mnemonic: "💡 Mnemônico: Estatística = Frequência da média; Processo = Idade/fase evolutiva; Subjetiva = Autopercepção; Funcional = Prejuízo/Sofrimento."
    },
    {
      id: "forma_conteudo",
      title: "3. A Distinção entre Forma e Conteúdo dos Sintomas",
      content: `Todo sintoma psicopatológico desdobra-se em duas dimensões fundamentais:
      * **A Forma do Sintoma:** É a estrutura psiquiátrica universal, a arquitetura básica do fenômeno (ex: delírio, alucinação, obsessão, fobia). A forma decorre da alteração estrutural da função mental e é **decisiva para o diagnóstico**.
      * **O Conteúdo do Sintoma:** É o tema particular, o enredo biográfico, religioso, político ou cultural que preenche aquela estrutura (ex: achar que a polícia secreta espiona pelos dentes, ou que demônios vigiam a casa). O conteúdo varia amplamente conforme a cultura e a época.

* **Exemplo Prático:** Dois pacientes com esquizofrenia apresentam a mesma *forma* (delírio persecutório). Contudo, o paciente do século XIX sentia-se perseguido por espíritos malignos feudais, enquanto o paciente atual sente-se perseguido por satélites de inteligência artificial. A forma é idêntica; o conteúdo mudou com a tecnologia.`,
      mnemonic: "💡 Mnemônico: Forma = Pote estrutural universal (Diagnóstico). Conteúdo = Recheio cultural e biográfico."
    },
    {
      id: "semiologia",
      title: "4. Semiologia: Sinais, Sintomas e Síndromes",
      content: `A Semiologia estuda os signos dos transtornos mentais através de dois eixos técnicos:
      * **Semiotécnica:** O conjunto de procedimentos, técnicas de entrevista e observação clínica para coletar dados.
      * **Semiogênese:** A investigação da origem, dos mecanismos e do significado dos sintomas.
      
      No registro clínico, distinguimos:
      * **Sinal:** Dado **objetivo**, diretamente observável pelo examinador (ex: taquilalia, choro, tremores, agitação psicomotora).
      * **Sintoma:** Vivência **subjetiva** relatada pelo paciente, não observável diretamente de fora (ex: angústia, tristeza profunda interna, sensação de desrealização).
      * **Síndrome:** Agrupamento recorrente de múltiplos sinais e sintomas que aparecem juntos de forma constante, mas que podem ser causados por diferentes etiologias subjacentes.`,
      mnemonic: "💡 Mnemônico: Sinal = Visto de fora (Objetivo). Sintoma = Sentido por dentro (Subjetivo). Síndrome = Pacote clínico associado."
    },
    {
      id: "jaspers_compreender_explicar",
      title: "5. Fenomenologia: Explicar vs. Compreender",
      content: `Karl Jaspers separou rigorosamente dois métodos em psicopatologia:
      * **Explicar (Erklären - Ciências Naturais):** Busca de causas objetivas e orgânicas de *fora para dentro*. Relaciona um fenômeno a uma causa física (ex: delirium causado por infecção urinária e febre; demência por atrofia cortical).
      * **Compreender (Verstehen - Ciências do Espírito):** Imersão empática de *dentro para fora* para captar a conexão de sentido lógico-emocional entre vivências (ex: compreender o luto profundo após a perda de um ente querido).
      
      * **O Delírio Primário:** Para Jaspers, o delírio autêntico da esquizofrenia é psicologicamente **incompreensível**, pois surge como uma mudança total e inexplicável da vivência, sem derivar logicamente de um trauma ou tristeza comum.`,
      mnemonic: "💡 Mnemônico: Explicar = Causa orgânica cerebral (De fora). Compreender = Sentido empático e humano (De dentro)."
    },
    {
      id: "abordagens",
      title: "6. Principais Perspectivas Teóricas em Psicopatologia",
      content: `Os transtornos mentais são interpretados por diferentes lentes:
      * **Perspectiva Descritiva / Categorial (DSM / CID):** Foca na catalogação ateórica de critérios observáveis para padronizar diagnósticos globais.
      * **Perspectiva Psicodinâmica (Psicanalítica):** Vê o sintoma como uma formação de compromisso contra conflitos inconscientes, desejos recalcados e defesas psíquicas.
      * **Perspectiva Cognitivo-Comportamental:** Enfatiza crenças disfuncionais, esquemas cognitivos rígidos e distorções no processamento da informação.
      * **Perspectiva Biológica:** Foca em desequilíbrios de neurotransmissores e circuitos neuroanatômicos.`,
      mnemonic: "💡 Mnemônico: Descritiva = Catálogo de sintomas; Psicodinâmica = Conflito inconsciente; Cognitiva = Pensamentos disfuncionais."
    },
    {
      id: "funcoes_psiquicas",
      title: "7. As Funções Psíquicas e a Totalidade da Mente",
      content: `A divisão da mente em funções (consciência, atenção, memória, pensamento, afetividade, vontade) é um recurso puramente **didático e semiológico**. Na realidade clínica, **quem adoece é a pessoa inteira em sua totalidade**. Uma alteração intensa em uma função impacta imediatamente todas as demais.

* **Exemplo Prático:** Um paciente com depressão severa tem alteração primária no humor (afetividade triste), mas isso paralisa sua atenção, desorganiza sua memória operacional e lentifica todo o seu pensamento.`,
      mnemonic: "💡 Mnemônico: A mente é uma orquestra integrada; separar em funções serve apenas para estudar."
    },
    {
      id: "avaliacao_exame",
      title: "8. Avaliação Clínica: Anamnese vs. Exame do Estado Mental",
      content: `Dois pilares formam a avaliação psiquiátrica e psicológica:
      * **Anamnese:** Corte **longitudinal** (o "filme" da vida do paciente: história pregressa, infância, antecedentes familiares e evolução até o presente).
      * **Exame do Estado Mental (Exame Psíquico):** Corte **transversal** (a "fotografia" de como a mente do paciente está funcionando exatamente agora na consulta: orientação, humor, sensopercepção, pensamento e insight/crítica).
      
      * **Consciência de Morbidade (Insight):** Capacidade de o paciente reconhecer que seus sintomas (alucinações ou delírios) são fruto de uma doença mental e não da realidade externa.`,
      mnemonic: "💡 Mnemônico: Anamnese = Filme longitudinal do passado. Exame Psíquico = Fotografia transversal do presente."
    }
  ],

  tree: [
    { id: "conceito_objeto", title: "1. Conceito e Objeto", level: 1, unlocked: true },
    { id: "normal_patologico", title: "2. Normal vs Patológico", level: 1, unlocked: true },
    { id: "forma_conteudo", title: "3. Forma vs Conteúdo", level: 2, unlocked: true },
    { id: "semiologia", title: "4. Sinais, Sintomas e Síndromes", level: 2, unlocked: true },
    { id: "jaspers_compreender_explicar", title: "5. Explicar vs Compreender", level: 3, unlocked: true },
    { id: "abordagens", title: "6. Abordagens Teóricas", level: 3, unlocked: true },
    { id: "funcoes_psiquicas", title: "7. Funções Psíquicas", level: 4, unlocked: true },
    { id: "avaliacao_exame", title: "8. Anamnese e Exame Psíquico", level: 5, unlocked: true }
  ],

  flashcards: [
    { topicId: "conceito_objeto", category: "Fundamentos", question: "Qual a diferença central entre Psicopatologia e Psiquiatria?", answer: "A Psicopatologia é a ciência teórica e descritiva do sofrimento mental; a Psiquiatria é a prática médica de intervenção e tratamento." },
    { topicId: "conceito_objeto", category: "Karl Jaspers", question: "O que diz a advertência ética fundamental de Karl Jaspers?", answer: "Que nunca podemos reduzir inteiramente o ser humano aos conceitos psicopatológicos." },
    { topicId: "normal_patologico", category: "Normalidade", question: "Qual a falha do critério estatístico de normalidade?", answer: "Confunde o normal com a média; ignora que doenças comuns são frequentes e traços raros podem ser geniais." },
    { topicId: "normal_patologico", category: "Normalidade", question: "O que avalia a normalidade como processo?", answer: "A faixa etária e a etapa do desenvolvimento evolutivo do indivíduo." },
    { topicId: "forma_conteudo", category: "Sintomatologia", question: "Qual a diferença entre a Forma e o Conteúdo do sintoma?", answer: "A Forma é a estrutura universal (ex: delírio); o Conteúdo é o enredo cultural e biográfico que a preenche." },
    { topicId: "forma_conteudo", category: "Diagnóstico", question: "Para o diagnóstico, qual elemento é decisivo: a forma ou o conteúdo?", answer: "A forma do sintoma." },
    { topicId: "semiologia", category: "Semiologia", question: "Qual a diferença entre Sinal e Sintoma?", answer: "Sinal é objetivo e observável de fora (ex: tremor); Sintoma é subjetivo e sentido por dentro (ex: angústia)." },
    { topicId: "semiologia", category: "Semiologia", question: "O que caracteriza uma Síndrome clínica?", answer: "Um agrupamento recorrente de múltiplos sinais e sintomas que ocorrem juntos no mesmo momento." },
    { topicId: "jaspers_compreender_explicar", category: "Fenomenologia", question: "Segundo Jaspers, o que diferencia Explicar de Compreender?", answer: "Explicar busca a causa orgânica de fora para dentro; Compreender capta o sentido empático de dentro para fora." },
    { topicId: "jaspers_compreender_explicar", category: "Fenomenologia", question: "Como Jaspers classifica o delírio primário verdadeiro da esquizofrenia?", answer: "Como psicologicamente incompreensível, pois surge sem derivar logicamente da biografia." },
    { topicId: "abordagens", category: "Perspectivas", question: "Como a abordagem psicodinâmica interpreta o sintoma?", answer: "Como uma formação de compromisso contra conflitos inconscientes e desejos recalcados." },
    { topicId: "abordagens", category: "Perspectivas", question: "O que enfatiza a abordagem cognitivo-comportamental?", answer: "As crenças disfuncionais e as distorções no processamento da informação." },
    { topicId: "funcoes_psiquicas", category: "Exame Psíquico", question: "Por que dizemos que a divisão das funções psíquicas é apenas didática?", answer: "Porque a mente funciona como uma totalidade integrada; quem adoece é a pessoa inteira." },
    { topicId: "avaliacao_exame", category: "Avaliação", question: "Qual a diferença temporal entre Anamnese e Exame do Estado Mental?", answer: "Anamnese é longitudinal (história de vida); Exame Psíquico é transversal (estado mental atual na consulta)." },
    { topicId: "avaliacao_exame", category: "Avaliação", question: "O que significa 'consciência de morbidade' (insight)?", answer: "A capacidade de o paciente reconhecer que seus sintomas são decorrentes de um transtorno mental." }
  ]
};