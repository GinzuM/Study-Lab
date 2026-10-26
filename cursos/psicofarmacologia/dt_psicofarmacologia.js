// =========================================================================
// CAMADA DE DADOS TEÓRICOS (dt_psicofarmacologia.js) — Doc's Lab
// Revisado integralmente: Espelhamento pedagógico exato com o Quiz e Simulado
// =========================================================================

const studyData = {
  topics: [
    {
      id: "sinapse",
      title: "1. Fisiologia da Sinapse Química e Eventos Eletrofisiológicos",
      content: `A transmissão da informação no Sistema Nervoso Central (SNC) ocorre prioritariamente por sinapses químicas. As etapas sequenciais envolvem:
      1. **Chegada do Potencial de Ação:** Despolariza a membrana do terminal axonal pré-sináptico.
      2. **Influxo de Cálcio ($Ca^{2+}$):** Abrem-se canais de cálcio dependentes de voltagem. O **influxo rápido de $Ca^{2+}$** atua como o gatilho biofísico mandatório para a exocitose vesicular.
      3. **Exocitose Vesicular:** O $Ca^{2+}$ interage com as proteínas do **complexo SNARE**, fundindo as vesículas à membrana e liberando os neurotransmissores na fenda.
      4. **Eventos Pós-Sinápticos:** 
         - **PPSE (Potencial Pós-Sináptico Excitatório):** Induzido pelo influxo de cátions como o **Sódio ($Na^+$)**, despolarizando a membrana e aproximando o neurônio do limiar de disparo.
         - **PPSI (Potencial Pós-Sináptico Inibitório):** Induzido pelo influxo de ânions **Cloreto ($Cl^-$)** (frequentemente via receptores $GABA_A$) ou efluxo de Potássio ($K^+$), hiperpolarizando a célula (tornando o citoplasma mais negativo) e afastando-a do limiar de ação.

* **Exemplo Prático:** A chegada do impulso elétrico abre as portas de cálcio, soltando o neurotransmissor que vai excitar (sódio) ou inibir (cloreto) o próximo neurônio.`,
      mnemonic: "💡 Mnemônico: Cálcio ($Ca^{2+}$) é o gatilho da exocitose; Sódio ($Na^+$) excita (PPSE); Cloreto ($Cl^-$) inibe (PPSI)."
    },
    {
      id: "agonista_antagonista",
      title: "2. Princípios Farmacodinâmicos: Agonistas e Antagonistas",
      content: `A farmacodinâmica estuda o comportamento dos fármacos nos receptores:
      * **Afinidade:** A força ou capacidade de ligação do fármaco ao sítio ativo do receptor.
      * **Atividade Intrínseca (Eficácia):** A capacidade do fármaco de desencadear a transdução de sinal intracelular após a ligação.
      * **Agonista Pleno:** Possui afinidade e atividade intrínseca máxima (**100%**), ativando plenamente o receptor.
      * **Agonista Parcial:** Possui afinidade, mas atividade intrínseca submáxima. Na presença de um agonista pleno, pode atuar competitivamente reduzindo a resposta máxima.
      * **Antagonista Silencioso (ou Neutro):** Possui afinidade, mas atividade intrínseca estritamente **nula (0%)**. Ele ocupa a fechadura sem girar a chave, bloqueando o acesso de agonistas endógenos.`,
      mnemonic: "💡 Mnemônico: Agonista pleno = 100% de eficácia; Agonista parcial = Eficácia submáxima; Antagonista silencioso = 0% de eficácia (apenas bloqueia)."
    },
    {
      id: "neurotransmissores",
      title: "3. Neurotransmissores Clássicos e Seus Papéis Centrais",
      content: `Os principais mensageiros químicos do encéfalo exercem funções regulatórias vitais:
      * **Glutamato:** Principal neurotransmissor excitatório cerebral. Essencial para a plasticidade sináptica (LTP) e memória. O seu excesso crônico provoca **excitotoxicidade** (morte neuronal por influxo descontrolado de $Ca^{2+}$).
      * **GABA:** Principal inibidor encefálico. Promove sedação, ansiólise e relaxamento.
      * **Serotonina (5-HT):** Regulação do humor, sono, impulsividade e saciedade.
      * **Noradrenalina (NA):** Alerta, foco, vigília e resposta de luta ou fuga.
      * **Dopamina (DA):** Recompensa, prazer e controle motor.
      * **Acetilcolina (ACh):** No SNC, atua na atenção e memória (através do **Núcleo Basal de Meynert**). No SNP, atua na placa motora gerando a contração dos músculos esqueléticos (degradada pela enzima **acetilcolinesterase**).`,
      mnemonic: "💡 Mnemônico: Glutamato = Excitador; GABA = Inibidor; Acetilcolina = Memória (Meynert) e Contração muscular."
    },
    {
      id: "psicose_dependencia",
      title: "4. Vias Dopaminérgicas: Psicose, Esquizofrenia e Adição",
      content: `A dopamina organiza quatro vias centrais de grande relevância clínica:
      1. **Via Mesolímbica:** Hiperatividade dopaminérgica gera os **sintomas positivos da esquizofrenia** (delírios e alucinações). Os antipsicóticos típicos bloqueiam receptores $D_2$ aqui.
      2. **Via Mesocortical:** Hipoatividade dopaminérgica correlaciona-se com os **sintomas negativos** (apatia, embotamento) e déficits cognitivos.
      3. **Via Nigroestriatal:** Regula os movimentos. Seu bloqueio induz parkinsonismo medicamentoso e efeitos extrapiramidais.
      4. **Via Tuberoinfundibular:** Regula a prolactina.
      * **Neurobiologia da Adição:** As substâncias de abuso provocam picos rápidos de dopamina no **Núcleo Accumbens** (via mesolímbica), induzindo *down-regulation* crônica de receptores $D_2$ (tolerância e anedonia).`,
      mnemonic: "💡 Mnemônico: Mesolímbica alta = Alucinações e Vício (Accumbens); Mesocortical baixa = Sintomas negativos."
    },
    {
      id: "depressao_teorias",
      title: "5. Teorias Neurobiológicas da Depressão e Plasticidade",
      content: `A depressão é compreendida por duas matrizes complementares:
      * **Teoria Monoaminérgica Clássica:** Atribui o transtorno ao déficit funcional de monoaminas. O *paradoxo temporal* (demora de 2 a 4 semanas para o efeito clínico apesar do aumento imediato de aminas na fenda) é explicado pelo tempo necessário para a **dessensibilização e *down-regulation* progressiva de autorreceptores pré-sinápticos inibitórios**.
      * **Teoria Neurotrófica:** O estresse crônico eleva o cortisol e suprime a expressão do gene do **BDNF** (*Fator Neurotrófico Derivado do Encéfalo*), provocando atrofia dendrítica e perda de sinapses no hipocampo. Os antidepressivos restauram a plasticidade ao reativar o BDNF.`,
      mnemonic: "💡 Mnemônico: Atraso de 2 semanas = Adaptação dos autorreceptores; Teoria Neurotrófica = Falta de BDNF (adubo celular)."
    },
    {
      id: "antidepressivos",
      title: "6. Farmacologia: Tricíclicos (ADTs) vs. ISRS",
      content: `* **Antidepressivos Tricíclicos (ADTs):** Inibem a recaptação de serotonina e noradrenalina, mas possuem perfil **não seletivo**, bloqueando receptores muscarínicos (boca seca, retenção urinária), histamínicos $H_1$ (sedação, ganho de peso) e $\alpha_1$ adrenérgicos (hipotensão postural). São altamente cardiotóxicos em overdose devido ao bloqueio de canais de sódio miocárdicos.
      * **Inibidores Seletivos (ISRS):** Atuam seletivamente sobre o transportador **SERT**, apresentando excelente perfil de segurança e baixíssima letalidade em superdosagem.`,
      mnemonic: "💡 Mnemônico: Tricíclicos bloqueiam vários receptores e são perigosos no coração; ISRS são seletivos e seguros."
    }
  ],

  tree: [
    { id: "sinapse", title: "1. Fisiologia das Sinapses", level: 1, unlocked: true },
    { id: "agonista_antagonista", title: "2. Agonistas e Antagonistas", level: 2, unlocked: true },
    { id: "neurotransmissores", title: "3. Neurotransmissores", level: 2, unlocked: true },
    { id: "psicose_dependencia", title: "4. Vias Dopaminérgicas e Adição", level: 3, unlocked: true },
    { id: "depressao_teorias", title: "5. Teorias da Depressão e BDNF", level: 3, unlocked: true },
    { id: "antidepressivos", title: "6. Tricíclicos vs. ISRS", level: 4, unlocked: true }
  ],

  flashcards: [
    { topicId: "sinapse", category: "Sinapses", question: "Qual íon deflagra a exocitose vesicular no terminal pré-sináptico?", answer: "Cálcio ($Ca^{2+}$), através de influxo por canais dependentes de voltagem." },
    { topicId: "sinapse", category: "Sinapses", question: "O que caracteriza o Potencial Pós-Sináptico Excitatório (PPSE)?", answer: "Despolarização da membrana gerada habitualmente pelo influxo de Sódio ($Na^+$)." },
    { topicId: "agonista_antagonista", category: "Farmacodinâmica", question: "Qual a atividade intrínseca de um antagonista silencioso?", answer: "Atividade intrínseca estritamente nula (0%), pois apenas bloqueia o receptor." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Qual enzima degrada a acetilcolina na fenda sináptica?", answer: "A enzima acetilcolinesterase." },
    { topicId: "neurotransmissores", category: "Neuroquímica", question: "Onde se localiza o núcleo colinérgico degenerado no Alzheimer?", answer: "No Núcleo Basal de Meynert." },
    { topicId: "psicose_dependencia", category: "Psicose", question: "Qual via dopaminérgica gera os sintomas positivos da esquizofrenia?", answer: "A Via Mesolímbica (por hiperatividade dopaminérgica)." },
    { topicId: "psicose_dependencia", category: "Adição", question: "Que estrutura cerebral constitui o alvo central do circuito de recompensa?", answer: "O Núcleo Accumbens." },
    { topicId: "depressao_teorias", category: "Depressão", question: "O que explica o atraso de 2 a 4 semanas na eficácia dos antidepressivos?", answer: "A dessensibilização e down-regulation progressiva de autorreceptores pré-sinápticos." },
    { topicId: "depressao_teorias", category: "Depressão", question: "Qual o papel do BDNF na teoria neurotrófica?", answer: "Promover a plasticidade sináptica, sobrevivência neuronal e neurogênese no hipocampo." },
    { topicId: "antidepressivos", category: "Antidepressivos", question: "Por que os tricíclicos causam efeitos como boca seca e visão turva?", answer: "Devido ao bloqueio não seletivo de receptores colinérgicos muscarínicos." }
  ]
};