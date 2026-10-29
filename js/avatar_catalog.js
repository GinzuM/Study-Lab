// =========================================================================
// js/avatar_catalog.js — Catálogo Oficial de Produção (South Park Style)
// Economia Balanceada:
// - Variantes de Cores: 60 a 120 🧪 (~4 a 7 lições)
// - Peças e Acessórios: 250 a 380 🧪 (~15 a 20 lições)
// - Ghostface: Exclusivo ADM (adminOnly: true)
// =========================================================================

window.AVATAR_CATALOG = {
  // -----------------------------------------------------------------------
  // PALETAS DE CORES (Gratuitas Básicas + Variantes de 4 a 7 Lições)
  // -----------------------------------------------------------------------
  skinTone: [
    { id: '#ffe3d1', name: 'Porcelana', cost: 0 },
    { id: '#fcd0b4', name: 'Pêssego Padrão', cost: 0 },
    { id: '#e8b48a', name: 'Bege Médio', cost: 0 },
    { id: '#c68642', name: 'Morena', cost: 0 },
    { id: '#8d5524', name: 'Parda Escura', cost: 0 },
    { id: '#4b2810', name: 'Retinta', cost: 0 },
    { id: '#cbd5e1', name: 'Pálido Vampiro', cost: 90 },
    { id: '#86efac', name: 'Verde Mutante', cost: 110 },
    { id: '#93c5fd', name: 'Azul Glacial', cost: 110 }
  ],

  hairColor: [
    { id: '#18181b', name: 'Preto Carvão', cost: 0 },
    { id: '#451a03', name: 'Castanho Escuro', cost: 0 },
    { id: '#7f432b', name: 'Castanho Cacheado', cost: 0 },
    { id: '#eab308', name: 'Loiro Clássico', cost: 0 },
    { id: '#ea580c', name: 'Ruivo Cobre', cost: 60 },
    { id: '#dc2626', name: 'Vermelho Rubi', cost: 80 },
    { id: '#7c3aed', name: 'Roxo Místico', cost: 90 },
    { id: '#ec4899', name: 'Rosa Chiclete', cost: 90 },
    { id: '#06b6d4', name: 'Ciano Anime', cost: 100 },
    { id: '#f8fafc', name: 'Platinado / Branco', cost: 120 }
  ],

  eyeColor: [
    { id: '#090d16', name: 'Preto Clássico', cost: 0 },
    { id: '#78350f', name: 'Mel / Castanho', cost: 0 },
    { id: '#1d4ed8', name: 'Azul Oceano', cost: 60 },
    { id: '#15803d', name: 'Verde Esmeralda', cost: 60 },
    { id: '#7c3aed', name: 'Violeta', cost: 85 },
    { id: '#dc2626', name: 'Vermelho Carmesim', cost: 100 }
  ],

  bodyColor: [
    { id: '#dc2626', name: 'Vermelho Clássico', cost: 0 },
    { id: '#16a34a', name: 'Verde Esmeralda', cost: 0 },
    { id: '#2563eb', name: 'Azul Royal', cost: 0 },
    { id: '#ea580c', name: 'Laranja Vibrante', cost: 60 },
    { id: '#7c3aed', name: 'Roxo', cost: 75 },
    { id: '#18181b', name: 'Preto Gótico', cost: 90 },
    { id: '#eab308', name: 'Amarelo Ouro', cost: 80 },
    { id: '#ec4899', name: 'Rosa Choque', cost: 85 },
    { id: '#0d9488', name: 'Turquesa', cost: 85 },
    { id: '#f8fafc', name: 'Branco Puro', cost: 75 }
  ],

  stripeColor: [
    { id: '#15803d', name: 'Verde Listras (Padrão)', cost: 0 },
    { id: '#f8fafc', name: 'Branco Básico', cost: 0 },
    { id: '#18181b', name: 'Preto Carvão', cost: 0 },
    { id: '#14532d', name: 'Verde Floresta Escuro', cost: 60 },
    { id: '#facc15', name: 'Amarelo Dourado', cost: 75 },
    { id: '#7c3aed', name: 'Roxo Neon', cost: 80 },
    { id: '#2563eb', name: 'Azul Elétrico', cost: 75 },
    { id: '#dc2626', name: 'Vermelho Sangue', cost: 80 },
    { id: '#ec4899', name: 'Rosa Choque', cost: 85 }
  ],

  hatColor: [
    { id: '#2563eb', name: 'Azul Touca', cost: 0 },
    { id: '#16a34a', name: 'Verde Gorro', cost: 0 },
    { id: '#dc2626', name: 'Vermelho', cost: 60 },
    { id: '#18181b', name: 'Preto', cost: 75 },
    { id: '#7c3aed', name: 'Roxo Bruxa', cost: 85 },
    { id: '#eab308', name: 'Dourado', cost: 100 },
    { id: '#ea580c', name: 'Laranja', cost: 70 }
  ],

  gloveColor: [
    { id: '#dc2626', name: 'Vermelho', cost: 0 },
    { id: '#18181b', name: 'Preto', cost: 0 },
    { id: '#16a34a', name: 'Verde', cost: 60 },
    { id: '#38bdf8', name: 'Azul Nitrílica', cost: 70 },
    { id: '#f8fafc', name: 'Branco', cost: 75 },
    { id: '#7c3aed', name: 'Roxo', cost: 80 }
  ],

  pantsColor: [
    { id: '#334155', name: 'Jeans Escuro', cost: 0 },
    { id: '#1e3a8a', name: 'Jeans Azul', cost: 0 },
    { id: '#18181b', name: 'Preto', cost: 65 },
    { id: '#451a03', name: 'Marrom Caqui', cost: 65 },
    { id: '#064e3b', name: 'Verde Militar', cost: 80 }
  ],

  shoeColor: [
    { id: '#dc2626', name: 'Vermelho Sneaker', cost: 0 },
    { id: '#18181b', name: 'Preto Clássico', cost: 0 },
    { id: '#f8fafc', name: 'Branco Puro', cost: 70 },
    { id: '#16a34a', name: 'Verde Skate', cost: 75 },
    { id: '#78350f', name: 'Couro Marrom', cost: 75 }
  ],

  bgColor: [
    { id: '#1e1b4b', name: 'Noite Índigo', cost: 0 },
    { id: '#bceeff', name: 'Céu Claro', cost: 0 },
    { id: '#064e3b', name: 'Floresta Escura', cost: 0 },
    { id: '#3b0764', name: 'Alquimia Roxo', cost: 70 },
    { id: '#fee2e2', name: 'Rosa Pastel', cost: 80 },
    { id: '#fef3c7', name: 'Creme Solar', cost: 80 },
    { id: '#450a0a', name: 'Lua de Sangue', cost: 110 }
  ],

  // -----------------------------------------------------------------------
  // PEÇAS DO PERSONAGEM (Itens Pagos: 250 a 380 🧪 = 15 a 20 Lições)
  // -----------------------------------------------------------------------
  hair: [
    { id: 'sp_short_clean', name: 'Curto Clássico', cost: 0 },
    { id: 'sp_curly_messy', name: 'Cacheado Bagunçado', cost: 0 },
    { id: 'sp_bob_long', name: 'Liso Comprido', cost: 0 },
    { id: 'none', name: 'Careca', cost: 0 },
    { id: 'sp_wavy_mid', name: 'Ondulado Médio', cost: 250 },
    { id: 'sp_spiky', name: 'Espetado Anime', cost: 270 },
    { id: 'sp_afro_puff', name: 'Black Power Redondo', cost: 280 },
    { id: 'sp_twintails', name: 'Maria-Chiquinha', cost: 290 },
    { id: 'sp_braids', name: 'Tranças Duplas', cost: 290 },
    { id: 'sp_pompadour', name: 'Topete Rockabilly', cost: 300 },
    { id: 'sp_emo_side', name: 'Franja Gótica Lateral', cost: 310 },
    { id: 'sp_samurai_bun', name: 'Coque Samurai', cost: 320 },
    { id: 'sp_mohawk', name: 'Moicano Punk', cost: 330 },
    { id: 'sp_mad_scientist', name: 'Cientista Maluco', cost: 350 }
  ],

  faceAcc: [
    { id: 'none', name: 'Sem Acessório', cost: 0 },
    { id: 'acc_blush', name: 'Bochechas Rosadas', cost: 240 },
    { id: 'acc_freckles', name: 'Sardas', cost: 240 },
    { id: 'acc_bandaid', name: 'Curativo no Rosto', cost: 250 },
    { id: 'acc_glasses_round', name: 'Óculos Redondos', cost: 270 },
    { id: 'acc_glasses_square', name: 'Óculos Retangulares', cost: 270 },
    { id: 'acc_surgical_mask', name: 'Máscara Cirúrgica', cost: 280 },
    { id: 'acc_sunglasses', name: 'Óculos Escuros', cost: 300 },
    { id: 'mask_pumpkin', name: 'Jack O’Lantern (Abóbora)', cost: 320 },
    { id: 'mask_zombie', name: 'Zumbi Morto-Vivo', cost: 330 },
    { id: 'mask_skellington', name: 'Jack Skellington', cost: 340 },
    { id: 'mask_jason', name: 'Máscara Jason (Hóquei)', cost: 350 },
    { id: 'mask_myers', name: 'Máscara Michael Myers', cost: 350 },
    { id: 'mask_freddy', name: 'Rosto Freddy Krueger', cost: 360 },
    { id: 'acc_plague_mask', name: 'Máscara do Doc (Peste)', cost: 380 },
    { id: 'mask_ghostface', name: 'Ghostface (Scream)', cost: 0, adminOnly: true }
  ],

  body: [
    { id: 'shirt_basic', name: 'Camiseta Básica', cost: 0 },
    { id: 'shirt_raglan', name: 'Raglan Manga Colorida', cost: 0 },
    { id: 'jacket_zip', name: 'Casaco Fechado SP', cost: 260 },
    { id: 'hoodie_open', name: 'Moletom Universitário', cost: 280 },
    { id: 'overalls_sp', name: 'Macacão Jeans', cost: 290 },
    { id: 'sweater_stripes', name: 'Suéter Listrado (2 Cores)', cost: 310 },
    { id: 'suit_tie_sp', name: 'Terno & Gravata', cost: 330 },
    { id: 'lab_coat_sp', name: 'Jaleco Clínico', cost: 350 },
    { id: 'vampire_cloak', name: 'Traje Gótico / Vampiro', cost: 370 }
  ],

  hat: [
    { id: 'none', name: 'Sem Chapéu', cost: 0 },
    { id: 'hat_beanie_pom', name: 'Touca com Pompom', cost: 260 },
    { id: 'hat_ushanka', name: 'Gorro de Orelhas (Kyle)', cost: 280 },
    { id: 'hat_capelo', name: 'Capelo de Formatura', cost: 310 },
    { id: 'hat_witch', name: 'Chapéu de Bruxa', cost: 330 },
    { id: 'hat_horns', name: 'Chifres de Diabinho', cost: 340 },
    { id: 'hat_halo', name: 'Auréola de Anjo', cost: 340 },
    { id: 'hat_tophat_doc', name: 'Cartola do Doc', cost: 360 },
    { id: 'hat_crown', name: 'Coroa Dourada do Placar', cost: 380 }
  ],

  eyes: [
    { id: 'sp_standard', name: 'Clássico South Park', cost: 0 },
    { id: 'sp_look_side', name: 'Olhando de Lado', cost: 0 },
    { id: 'sp_closed_happy', name: 'Feliz Fechado (^ ^)', cost: 240 },
    { id: 'sp_wink', name: 'Piscadinha (;)', cost: 250 },
    { id: 'sp_big_anime', name: 'Olhos Brilhantes', cost: 270 },
    { id: 'sp_crazy', name: 'Cafeína Insana', cost: 290 },
    { id: 'sp_dead_x', name: 'Exausto (X_X)', cost: 300 },
    { id: 'sp_star', name: 'Estrelas nos Olhos', cost: 340 }
  ],

  eyelids: [
    { id: 'none', name: 'Sem Pálpebra (Alerta)', cost: 0 },
    { id: 'lid_bored_blush', name: 'Tédio Sombreado', cost: 0 },
    { id: 'lid_half_skin', name: 'Calmo / Semi-Cerrado', cost: 0 },
    { id: 'lid_angry', name: 'Olhar Bravo', cost: 240 },
    { id: 'lid_sad', name: 'Olhar Triste', cost: 240 },
    { id: 'lid_suspect', name: 'Desconfiado', cost: 260 },
    { id: 'lid_sleepy', name: 'Morrendo de Sono', cost: 270 },
    { id: 'lid_bottom_bags', name: 'Olheiras de Prova', cost: 280 }
  ],

  eyebrows: [
    { id: 'none', name: 'Sem Sobrancelha', cost: 0 },
    { id: 'brow_normal', name: 'Arqueada Suave', cost: 0 },
    { id: 'brow_angry', name: 'Franzida Brava', cost: 0 },
    { id: 'brow_worried', name: 'Preocupada', cost: 220 },
    { id: 'brow_thick', name: 'Grossa Determinada', cost: 240 },
    { id: 'brow_raised', name: 'Desconfiada (1 Alta)', cost: 250 }
  ],

  mouth: [
    { id: 'mouth_frown_small', name: 'Neutro / Sério', cost: 0 },
    { id: 'mouth_smile', name: 'Sorriso Simples', cost: 0 },
    { id: 'mouth_open_happy', name: 'Riso Aberto', cost: 230 },
    { id: 'mouth_smirk', name: 'Sorriso de Canto', cost: 240 },
    { id: 'mouth_surprised', name: 'Surpreso (O)', cost: 240 },
    { id: 'mouth_cat', name: 'Boca Gatinho (:3)', cost: 270 },
    { id: 'mouth_teeth_grit', name: 'Dentes Cerrados', cost: 270 },
    { id: 'mouth_tongue', name: 'Mostrando a Língua', cost: 280 },
    { id: 'mouth_drool', name: 'Babando de Sono', cost: 290 },
    { id: 'mouth_fangs', name: 'Presas de Vampiro', cost: 320 }
  ],

  gloves: [
    { id: 'none', name: 'Mãos Livres (Sem Luva)', cost: 0 },
    { id: 'glove_mittens', name: 'Luvas de Inverno SP', cost: 240 },
    { id: 'glove_surgical', name: 'Luvas Cirúrgicas', cost: 260 },
    { id: 'glove_fingerless', name: 'Luvas Rock Sem Dedos', cost: 280 },
    { id: 'glove_boxing', name: 'Luvas de Boxe', cost: 310 }
  ],

  pants: [
    { id: 'pants_jeans_stitch', name: 'Jeans com Costura', cost: 0 },
    { id: 'pants_plain', name: 'Calça Lisa', cost: 0 },
    { id: 'shorts_sp', name: 'Bermuda Casual', cost: 240 },
    { id: 'skirt_pleated', name: 'Saia Pregueada', cost: 260 },
    { id: 'pants_cargo', name: 'Calça Cargo Tática', cost: 280 },
    { id: 'pants_ripped', name: 'Jeans Rasgado Rock', cost: 300 }
  ],

  shoes: [
    { id: 'shoes_classic_flat', name: 'Sapato Clássico SP', cost: 0 },
    { id: 'shoes_sneakers', name: 'Tênis Esportivo', cost: 0 },
    { id: 'none', name: 'Descalço', cost: 0 },
    { id: 'shoes_slippers', name: 'Pantufas de Quarto', cost: 250 },
    { id: 'shoes_allstar', name: 'Tênis Cano Alto', cost: 280 },
    { id: 'shoes_boots', name: 'Botas Robustas', cost: 290 }
  ]
};