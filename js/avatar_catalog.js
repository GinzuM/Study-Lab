// =========================================================================
// js/avatar_catalog.js — Catálogo Puro de Cosméticos, Cores e Preços
// =========================================================================

window.AVATAR_CATALOG = {
  skinTone: [
    { id: '#fde6d8', name: 'Porcelana', cost: 0 },
    { id: '#f9d4b8', name: 'Clara Rosada', cost: 0 },
    { id: '#e5b887', name: 'Bege Média', cost: 0 },
    { id: '#c68642', name: 'Morena Bronze', cost: 0 },
    { id: '#8d5524', name: 'Parda Escura', cost: 0 },
    { id: '#4b2810', name: 'Retinta Profunda', cost: 0 },
    { id: '#00f0ff', name: 'Azul Choque (Meme)', cost: 80 },
    { id: '#39ff14', name: 'Verde Ogro (Meme)', cost: 90 },
    { id: '#ff007f', name: 'Rosa Gritante (Meme)', cost: 100 }
  ],

  hairColor: [
    { id: '#1e293b', name: 'Preto Azulado', cost: 0 },
    { id: '#451a03', name: 'Castanho Escuro', cost: 0 },
    { id: '#92400e', name: 'Castanho Mel', cost: 0 },
    { id: '#facc15', name: 'Loiro Dourado', cost: 0 },
    { id: '#dc2626', name: 'Ruivo Intenso', cost: 15 },
    { id: '#7c3aed', name: 'Roxo Místico', cost: 25 },
    { id: '#ec4899', name: 'Rosa Pastel', cost: 30 },
    { id: '#06b6d4', name: 'Azul Neon', cost: 35 },
    { id: '#e2e8f0', name: 'Platinado', cost: 40 }
  ],

  eyeColor: [
    { id: '#0f172a', name: 'Castanho Profundo', cost: 0 },
    { id: '#78350f', name: 'Mel / Âmbar', cost: 0 },
    { id: '#0284c7', name: 'Azul Oceano', cost: 0 },
    { id: '#16a34a', name: 'Verde Esmeralda', cost: 0 },
    { id: '#7c3aed', name: 'Violeta Raro', cost: 20 },
    { id: '#dc2626', name: 'Vermelho Rubi', cost: 30 },
    { id: '#00f0ff', name: 'Ciano Cibernético', cost: 35 }
  ],

  head: [
    { id: 'style_short', name: 'Curto Casual', cost: 0 },
    { id: 'style_bob', name: 'Chanel Liso', cost: 0 },
    { id: 'style_long', name: 'Longo Ondulado', cost: 0 },
    { id: 'style_curly', name: 'Cacheado Volumoso', cost: 0 },
    { id: 'style_bun', name: 'Coque Duplo', cost: 15 },
    { id: 'style_spiky', name: 'Espetado Moderno', cost: 20 },
    { id: 'style_ponytail', name: 'Rabo de Cavalo', cost: 25 },
    { id: 'style_mohawk', name: 'Moicano Punk', cost: 35 },
    { id: 'style_bald', name: 'Careca Lustroso', cost: 0 },
    { id: 'jason', name: 'Jason Voorhees', cost: 60 },
    { id: 'myers', name: 'Michael Myers', cost: 75 },
    { id: 'freddy', name: 'Freddy Krueger', cost: 85 },
    { id: 'leatherface', name: 'Leatherface', cost: 95 },
    { id: 'pumpkin', name: "Jack O'Lantern", cost: 50 },
    { id: 'skellington', name: 'Jack Skellington', cost: 70 },
    { id: 'vampire', name: 'Conde Vampiro', cost: 45 },
    { id: 'werewolf', name: 'Lobisomem', cost: 65 },
    { id: 'alien', name: 'Alienígena', cost: 80 },
    { id: 'bubo_mask', name: 'Máscara Dr. Bubo', cost: 110 }
  ],

  eyes: [
    { id: 'happy', name: 'Olhos Brilhantes', cost: 0 },
    { id: 'confident', name: 'Olhar Determinado', cost: 0 },
    { id: 'wink', name: 'Piscadinha', cost: 20 },
    { id: 'glasses', name: 'Óculos Intelectual', cost: 25 },
    { id: 'sunglasses', name: 'Óculos Escuros', cost: 35 },
    { id: 'hypno', name: 'Olhos Hipnóticos', cost: 40 },
    { id: 'glow_red', name: 'Olhos Noturnos', cost: 50 },
    { id: 'anime_star', name: 'Olhos Estrelados', cost: 45 }
  ],

  mouth: [
    { id: 'smile', name: 'Sorriso Aberto', cost: 0 },
    { id: 'smirk', name: 'Sorriso de Canto', cost: 0 },
    { id: 'cat', name: 'Boca Gatinho (:3)', cost: 20 },
    { id: 'fangs', name: 'Presas de Vampiro', cost: 40 },
    { id: 'surprised', name: 'Surpreso', cost: 15 },
    { id: 'mustache', name: 'Bigode Clássico', cost: 30 },
    { id: 'tongue', name: 'Mostrando a Língua', cost: 25 },
    { id: 'mask_surgical', name: 'Máscara Cirúrgica', cost: 35 }
  ],

  hat: [
    { id: 'none', name: 'Sem Chapéu', cost: 0 },
    { id: 'capelo', name: 'Capelo de Formatura', cost: 40 },
    { id: 'beanie', name: 'Touca de Inverno', cost: 25 },
    { id: 'headphones', name: 'Headphone Gamer', cost: 45 },
    { id: 'fedora', name: 'Chapéu Fedora', cost: 55 },
    { id: 'witch', name: 'Chapéu de Bruxa', cost: 50 },
    { id: 'crown', name: 'Coroa Dourada', cost: 120 },
    { id: 'horns', name: 'Chifres Sombrios', cost: 65 }
  ],

  body: [
    { id: 'hoodie', name: 'Moletom Universitário', cost: 0 },
    { id: 'tshirt', name: 'Camiseta Básica', cost: 0 },
    { id: 'suit', name: 'Terno com Gravata', cost: 35 },
    { id: 'lab_coat', name: 'Jaleco Clínico', cost: 40 },
    { id: 'slasher_jacket', name: 'Jaqueta Camp Crystal', cost: 45 },
    { id: 'freddy_sweater', name: 'Suéter Listrado', cost: 55 },
    { id: 'vampire_cape', name: 'Manto de Vampiro', cost: 65 },
    { id: 'overalls', name: 'Macacão Jeans', cost: 30 }
  ],

  bodyColor: [
    { id: '#16a34a', name: 'Verde Esmeralda', cost: 0 },
    { id: '#2563eb', name: 'Azul Royal', cost: 0 },
    { id: '#7c3aed', name: 'Roxo Alquimia', cost: 0 },
    { id: '#dc2626', name: 'Vermelho Rubi', cost: 20 },
    { id: '#1e293b', name: 'Preto Gótico', cost: 25 },
    { id: '#f59e0b', name: 'Dourado Solar', cost: 35 },
    { id: '#ec4899', name: 'Rosa Choque', cost: 30 },
    { id: '#0d9488', name: 'Turquesa Boticário', cost: 20 }
  ],

  bgColor: [
    { id: '#1e1b4b', name: 'Noite Índigo', cost: 0 },
    { id: '#064e3b', name: 'Floresta Escura', cost: 0 },
    { id: '#3b0764', name: 'Laboratório Roxo', cost: 0 },
    { id: '#450a0a', name: 'Lua de Sangue', cost: 30 },
    { id: '#0f172a', name: 'Abismo Sombrio', cost: 20 },
    { id: '#0284c7', name: 'Céu Radiante', cost: 25 },
    { id: '#b45309', name: 'Outubro Dourado', cost: 30 }
  ]
};