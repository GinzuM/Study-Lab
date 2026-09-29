// =========================================================================
// BANCO DE DADOS EM BRANCO (TEMPLATE)
// A IA DEVE PREENCHER ESTAS VARIÁVEIS COM BASE NO NOVO MATERIAL FORNECIDO
// =========================================================================

const studyData = {
  // 1. RESUMOS E TÓPICOS (Injete aqui a teoria mastigada)
  topics: [
    {
      id: "topico_1",
      title: "Exemplo de Título do Tópico 1",
      content: `O conteúdo detalhado e formatado entra aqui. Pode ter múltiplas linhas e quebras de parágrafo.`,
      mnemonic: "💡 Mnemónica: Dica de memorização aqui."
    }
  ],

  // 2. MAPA MENTAL (Defina a hierarquia dos tópicos criados acima)
  tree: [
    { id: "topico_1", title: "Título Curto", level: 1, unlocked: true }
  ],

  // 3. FLASHCARDS (Crie dezenas de perguntas e respostas diretas)
  flashcards: [
    { topicId: "topico_1", category: "Categoria Exemplo", question: "Qual é a pergunta do flashcard?", answer: "Esta é a resposta." }
  ],

  // 4. QUIZ (Crie um banco vasto de múltipla escolha)
  quiz: [
    { 
      topicId: "topico_1", 
      question: "Exemplo de pergunta do quiz?", 
      hint: "Dica opcional para ajudar o usuário.", 
      options: ["Alternativa A", "Alternativa B (Correta)", "Alternativa C", "Alternativa D"], 
      correct: 1 // Índice da resposta certa (0 a 3)
    }
  ]
};
