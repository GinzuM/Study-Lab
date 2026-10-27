// =========================================================================
// js/avatar_catalog.js — Catálogo Modular Estilo South Park / Picrew
// =========================================================================

window.AVATAR_CATALOG = {
  // Paletas de Cores (Quadradinhos ao lado da foto)
  skinTone: [
    { id: '#ffe3d1', name: 'Pele Clara Rosada', cost: 0 },
    { id: '#fcd0b4', name: 'Pele Pêssego (Padrão)', cost: 0 },
    { id: '#e8b48a', name: 'Pele Bege Média', cost: 0 },
    { id: '#c68642', name: 'Pele Morena', cost: 0 },
    { id: '#8d5524', name: 'Pele Parda Escura', cost: 0 },
    { id: '#4b2810', name: 'Pele Retinta', cost: 0 },
    { id: '#d8e2dc', name: 'Pálido Vampiro / Zumbi', cost: 50 },
    { id: '#7ae582', name: 'Verde Alien / Mutante', cost: 75 }
  ],

  hairColor: [
    { id: '#7f432b', name: 'Castanho Cacheado (Ref)', cost: 0 },
    { id: '#18181b', name: 'Preto Carvão', cost: 0 },
    { id: '#451a03', name: 'Castanho Escuro', cost: 0 },
    { id: '#eab308', name: 'Loiro Butters', cost: 0 },
    { id: '#ea580c', name: 'Ruivo Kyle', cost: 0 },
    { id: '#dc2626', name: 'Vermelho Intenso', cost: 20 },
    { id: '#7c3aed', name: 'Roxo Místico', cost: 25 },
    { id: '#ec4899', name: 'Rosa Chiclete', cost: 30 },
    { id: '#06b6d4', name: 'Azul Neon', cost: 30 },
    { id: '#e2e8f0', name: 'Grisalho Cientista', cost: 35 }
  ],

  eyeColor: [
    { id: '#090d16', name: 'Pupila Preta Clássica', cost: 0 },
    { id: '#1d4ed8', name: 'Azul Intenso', cost: 0 },
    { id: '#15803d', name: 'Verde Esmeralda', cost: 0 },
    { id: '#78350f', name: 'Castanho Mel', cost: 0 },
    { id: '#7c3aed', name: 'Violeta', cost: 20 },
    { id: '#dc2626', name: 'Vermelho Noturno', cost: 30 }
  ],

  bodyColor: [
    { id: '#dc2626', name: 'Vermelho Clássico', cost: 0 },
    { id: '#16a34a', name: 'Verde Esmeralda', cost: 0 },
    { id: '#2563eb', name: 'Azul Stan', cost: 0 },
    { id: '#ea580c', name: 'Laranja Kenny', cost: 0 },
    { id: '#7c3aed', name: 'Roxo Token', cost: 0 },
    { id: '#18181b', name: 'Preto Gótico', cost: 20 },
    { id: '#eab308', name: 'Amarelo Ouro', cost: 25 },
    { id: '#ec4899', name: 'Rosa Choque', cost: 25 }
  ],

  pantsColor: [
    { id: '#334155', name: 'Jeans Escuro (Ref)', cost: 0 },
    { id: '#1e3a8a', name: 'Jeans Azul Clássico', cost: 0 },
    { id: '#18181b', name: 'Calça Preta', cost: 0 },
    { id: '#451a03', name: 'Marrom Caqui', cost: 0 },
    { id: '#064e3b', name: 'Verde Militar', cost: 15 }
  ],

  bgColor: [
    { id: '#bceeff', name: 'Céu Picrew (Ref)', cost: 0 },
    { id: '#1e1b4b', name: 'Noite Índigo', cost: 0 },
    { id: '#064e3b', name: 'Floresta Escura', cost: 0 },
    { id: '#3b0764', name: 'Laboratório Roxo', cost: 0 },
    { id: '#fee2e2', name: 'Rosa Pastel Suave', cost: 20 },
    { id: '#fef3c7', name: 'Creme Solar', cost: 20 },
    { id: '#450a0a', name: 'Lua de Sangue', cost: 30 }
  ],

  // 1. Cabelos (Frente + Volume estilo South Park / Picrew)
  hair: [
    { id: 'sp_curly_messy', name: 'Cacheado Bagunçado (Ref)', cost: 0 },
    { id: 'sp_short_clean', name: 'Curto Clássico', cost: 0 },
    { id: 'sp_spiky', name: 'Espetado Anime/SP', cost: 0 },
    { id: 'sp_bob_long', name: 'Liso Comprido', cost: 0 },
    { id: 'sp_afro_puff', name: 'Black Power / Volume', cost: 15 },
    { id: 'sp_twintails', name: 'Maria-Chiquinha Dupla', cost: 25 },
    { id: 'sp_emo_side', name: 'Franja Gótica Lateral', cost: 30 },
    { id: 'sp_mohawk', name: 'Moicano Punk', cost: 35 },
    { id: 'none', name: 'Careca', cost: 0 }
  ],

  // 2. Olhos (Formato dos globos oculares ovais juntos)
  eyes: [
    { id: 'sp_standard', name: 'Olhos Clássicos SP', cost: 0 },
    { id: 'sp_look_side', name: 'Olhando de Lado', cost: 0 },
    { id: 'sp_big_anime', name: 'Olhos Brilhantes', cost: 15 },
    { id: 'sp_closed_happy', name: 'Olhos Fechados Felizes (^ ^)', cost: 15 },
    { id: 'sp_crazy', name: 'Olhos de Cafeína (Insano)', cost: 30 },
    { id: 'sp_dead_x', name: 'Olhos X_X (Exausto)', cost: 35 }
  ],

  // 3. Pálpebras & Sombras de Expressão (Igual à sua print image_4e94e6.png!)
  eyelids: [
    { id: 'none', name: 'Sem Pálpebra (Alerta)', cost: 0 },
    { id: 'lid_bored_blush', name: 'Tédio Sombreado (Ref)', cost: 0 },
    { id: 'lid_half_skin', name: 'Semi-Cerrado Calmo', cost: 0 },
    { id: 'lid_angry', name: 'Olhar Bravo / Focado', cost: 15 },
    { id: 'lid_sad', name: 'Olhar Cansado / Triste', cost: 15 },
    { id: 'lid_suspect', name: 'Desconfiado', cost: 25 },
    { id: 'lid_bottom_bags', name: 'Olheiras de Estudante', cost: 30 }
  ],

  // 4. Sobrancelhas
  eyebrows: [
    { id: 'none', name: 'Sem Sobrancelha', cost: 0 },
    { id: 'brow_normal', name: 'Arqueada Suave', cost: 0 },
    { id: 'brow_angry', name: 'Franzida Brava', cost: 0 },
    { id: 'brow_worried', name: 'Preocupada', cost: 10 },
    { id: 'brow_thick', name: 'Grossa Determinada', cost: 15 }
  ],

  // 5. Bocas
  mouth: [
    { id: 'mouth_frown_small', name: 'Sério / Neutro (Ref)', cost: 0 },
    { id: 'mouth_smile', name: 'Sorriso Simples', cost: 0 },
    { id: 'mouth_open_happy', name: 'Riso Aberto SP', cost: 0 },
    { id: 'mouth_smirk', name: 'Sorriso de Canto', cost: 15 },
    { id: 'mouth_cat', name: 'Boca Gatinho (:3)', cost: 20 },
    { id: 'mouth_surprised', name: 'Surpreso (O)', cost: 15 },
    { id: 'mouth_teeth_grit', name: 'Dentes Cerrados', cost: 25 },
    { id: 'mouth_tongue', name: 'Mostrando a Língua', cost: 25 },
    { id: 'mouth_fangs', name: 'Presas de Vampiro', cost: 40 }
  ],

  // 6. Camisas & Casacos (Estilo South Park com Mãozinhas Redondas)
  body: [
    { id: 'shirt_raglan', name: 'Raglan Branca & Mangas (Ref)', cost: 0 },
    { id: 'shirt_basic', name: 'Camiseta Lisa SP', cost: 0 },
    { id: 'jacket_zip', name: 'Casaco Fechado (Estilo Stan)', cost: 0 },
    { id: 'hoodie_open', name: 'Moletom Universitário', cost: 25 },
    { id: 'lab_coat_sp', name: 'Jaleco Médico com Camisa', cost: 40 },
    { id: 'suit_tie_sp', name: 'Terno Acadêmico & Gravata', cost: 45 },
    { id: 'sweater_stripes', name: 'Suéter Listrado', cost: 50 },
    { id: 'overalls_sp', name: 'Macacão Jeans', cost: 35 }
  ],

  // 7. Calças (Com costura de bolsos igual à ref)
  pants: [
    { id: 'pants_jeans_stitch', name: 'Jeans com Costura (Ref)', cost: 0 },
    { id: 'pants_plain', name: 'Calça Simples SP', cost: 0 },
    { id: 'shorts_sp', name: 'Bermuda Casual', cost: 15 },
    { id: 'skirt_pleated', name: 'Saia Colegial', cost: 20 }
  ],

  // 8. Sapatos (Achatados na base igual à sua print image_4e953c.png)
  shoes: [
    { id: 'shoes_red_sneakers', name: 'Tênis Vermelho & Branco (Ref)', cost: 0 },
    { id: 'shoes_black_flat', name: 'Sapato Preto Clássico SP', cost: 0 },
    { id: 'shoes_white_clean', name: 'Tênis Branco Puro', cost: 15 },
    { id: 'shoes_green_skate', name: 'Tênis Verde Skate', cost: 20 },
    { id: 'shoes_brown_boots', name: 'Botas de Inverno', cost: 25 },
    { id: 'none', name: 'Descalço', cost: 0 }
  ],

  // 9. Chapéus & Toucas
  hat: [
    { id: 'none', name: 'Sem Chapéu', cost: 0 },
    { id: 'hat_beanie_pom', name: 'Touca com Pompom (Estilo SP)', cost: 30 },
    { id: 'hat_ushanka', name: 'Gorro de Orelhas (Estilo Kyle)', cost: 40 },
    { id: 'hat_capelo', name: 'Capelo de Formatura', cost: 45 },
    { id: 'hat_tophat_doc', name: 'Cartola do Doc', cost: 55 },
    { id: 'hat_witch', name: 'Chapéu de Bruxa', cost: 50 },
    { id: 'hat_crown', name: 'Coroa Dourada do Placar', cost: 120 },
    { id: 'hat_horns', name: 'Chifres de Diabinho', cost: 65 }
  ],

  // 10. Acessórios de Rosto & Máscaras
  faceAcc: [
    { id: 'none', name: 'Sem Acessório', cost: 0 },
    { id: 'acc_blush', name: 'Bochechas Rosadas', cost: 15 },
    { id: 'acc_glasses_round', name: 'Óculos Redondos', cost: 25 },
    { id: 'acc_glasses_square', name: 'Óculos de Grau Retangular', cost: 25 },
    { id: 'acc_sunglasses', name: 'Óculos Escuros', cost: 35 },
    { id: 'acc_bandaid', name: 'Curativo no Rosto', cost: 20 },
    { id: 'acc_surgical_mask', name: 'Máscara Cirúrgica', cost: 30 },
    { id: 'acc_plague_mask', name: 'Máscara Branca do Doc (Peste)', cost: 110 },
    { id: 'acc_jason_mask', name: 'Máscara de Hóquei (Slasher)', cost: 80 }
  ]
};