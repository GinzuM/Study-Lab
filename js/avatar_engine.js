// =========================================================================
// js/avatar_engine.js — Motor Modular Estilo South Park / Picrew
// Com Previews Isolados por Peça e Trava Anti-Exploit
// =========================================================================

// Normaliza configurações antigas para o novo padrão South Park
window.normalizeAvatarConfig = function(raw) {
  const cfg = raw || {};
  return {
    skinTone: cfg.skinTone || '#fcd0b4',
    hairColor: cfg.hairColor || '#7f432b',
    eyeColor: cfg.eyeColor || '#090d16',
    bodyColor: cfg.bodyColor || '#dc2626',
    pantsColor: cfg.pantsColor || '#334155',
    bgColor: cfg.bgColor || '#bceeff',
    hair: (cfg.hair && window.AVATAR_CATALOG.hair.some(i => i.id === cfg.hair)) ? cfg.hair : 'sp_curly_messy',
    eyes: (cfg.eyes && window.AVATAR_CATALOG.eyes.some(i => i.id === cfg.eyes)) ? cfg.eyes : 'sp_standard',
    eyelids: (cfg.eyelids && window.AVATAR_CATALOG.eyelids.some(i => i.id === cfg.eyelids)) ? cfg.eyelids : 'lid_bored_blush',
    eyebrows: (cfg.eyebrows && window.AVATAR_CATALOG.eyebrows.some(i => i.id === cfg.eyebrows)) ? cfg.eyebrows : 'none',
    mouth: (cfg.mouth && window.AVATAR_CATALOG.mouth.some(i => i.id === cfg.mouth)) ? cfg.mouth : 'mouth_frown_small',
    body: (cfg.body && window.AVATAR_CATALOG.body.some(i => i.id === cfg.body)) ? cfg.body : 'shirt_raglan',
    pants: (cfg.pants && window.AVATAR_CATALOG.pants.some(i => i.id === cfg.pants)) ? cfg.pants : 'pants_jeans_stitch',
    shoes: (cfg.shoes && window.AVATAR_CATALOG.shoes.some(i => i.id === cfg.shoes)) ? cfg.shoes : 'shoes_red_sneakers',
    hat: (cfg.hat && window.AVATAR_CATALOG.hat.some(i => i.id === cfg.hat)) ? cfg.hat : 'none',
    faceAcc: (cfg.faceAcc && window.AVATAR_CATALOG.faceAcc.some(i => i.id === cfg.faceAcc)) ? cfg.faceAcc : 'none'
  };
};

// =========================================================================
// GERADORES INDIVIDUAIS DE CAMADAS (Usados tanto no Boneco quanto no Preview Isolado!)
// =========================================================================

function buildBackHairSvg(hairId, hColor) {
  if (hairId === 'sp_bob_long') {
    return `<path d="M 18 42 C 14 58, 16 74, 24 76 L 76 76 C 84 74, 86 58, 82 42 Z" fill="${hColor}" stroke="#18181b" stroke-width="1.8"/>`;
  }
  if (hairId === 'sp_twintails') {
    return `
      <path d="M 18 40 C 6 44, 4 68, 14 74 C 20 72, 22 58, 22 46 Z" fill="${hColor}" stroke="#18181b" stroke-width="1.8"/>
      <path d="M 82 40 C 94 44, 96 68, 86 74 C 80 72, 78 58, 78 46 Z" fill="${hColor}" stroke="#18181b" stroke-width="1.8"/>
    `;
  }
  return '';
}

function buildShoesSvg(shoesId) {
  if (shoesId === 'none') return '';
  if (shoesId === 'shoes_red_sneakers') {
    // Idêntico à print image_4e953c.png (tênis vermelhos achatados com sola branca e detalhe)
    return `
      <g>
        <path d="M 27 95 C 32 91, 44 91, 49 95 Z" fill="#dc2626" stroke="#18181b" stroke-width="1.4"/>
        <path d="M 51 95 C 56 91, 68 91, 73 95 Z" fill="#dc2626" stroke="#18181b" stroke-width="1.4"/>
        <rect x="25" y="94.5" width="50" height="1.8" rx="0.8" fill="#ffffff" stroke="#18181b" stroke-width="1"/>
        <circle cx="35" cy="93.2" r="0.8" fill="#ffffff"/>
        <circle cx="65" cy="93.2" r="0.8" fill="#ffffff"/>
      </g>
    `;
  }
  if (shoesId === 'shoes_white_clean') {
    return `
      <path d="M 27 95.5 C 31 90.5, 45 90.5, 49 95.5 Z" fill="#f8fafc" stroke="#18181b" stroke-width="1.4"/>
      <path d="M 51 95.5 C 55 90.5, 69 90.5, 73 95.5 Z" fill="#f8fafc" stroke="#18181b" stroke-width="1.4"/>
    `;
  }
  if (shoesId === 'shoes_green_skate') {
    return `
      <path d="M 27 95 C 31 90.5, 45 90.5, 49 95 Z" fill="#16a34a" stroke="#18181b" stroke-width="1.4"/>
      <path d="M 51 95 C 55 90.5, 69 90.5, 73 95 Z" fill="#16a34a" stroke="#18181b" stroke-width="1.4"/>
      <rect x="25" y="94.5" width="50" height="1.6" fill="#fef08a" stroke="#18181b" stroke-width="0.9"/>
    `;
  }
  if (shoesId === 'shoes_brown_boots') {
    return `
      <path d="M 27 95.5 C 29 89, 46 89, 49 95.5 Z" fill="#78350f" stroke="#18181b" stroke-width="1.5"/>
      <path d="M 51 95.5 C 54 89, 71 89, 73 95.5 Z" fill="#78350f" stroke="#18181b" stroke-width="1.5"/>
    `;
  }
  // Padrão South Park Clássico Preto
  return `
    <path d="M 26 95.5 C 31 91, 45 91, 49.5 95.5 Z" fill="#18181b"/>
    <path d="M 50.5 95.5 C 55 91, 69 91, 74 95.5 Z" fill="#18181b"/>
  `;
}

function buildPantsSvg(pantsId, pColor, skin) {
  if (pantsId === 'shorts_sp') {
    return `
      <rect x="31" y="88" width="15" height="6" fill="${skin}" stroke="#18181b" stroke-width="1.2"/>
      <rect x="54" y="88" width="15" height="6" fill="${skin}" stroke="#18181b" stroke-width="1.2"/>
      <path d="M 29 82 L 71 82 L 70 90 L 52 90 L 50 86 L 48 90 L 30 90 Z" fill="${pColor}" stroke="#18181b" stroke-width="1.6"/>
    `;
  }
  if (pantsId === 'skirt_pleated') {
    return `
      <rect x="33" y="88" width="12" height="6" fill="${skin}" stroke="#18181b" stroke-width="1.2"/>
      <rect x="55" y="88" width="12" height="6" fill="${skin}" stroke="#18181b" stroke-width="1.2"/>
      <polygon points="30,81 70,81 74,90 26,90" fill="${pColor}" stroke="#18181b" stroke-width="1.6"/>
      <line x1="40" y1="82" x2="38" y2="90" stroke="#18181b" stroke-width="1.2"/>
      <line x1="50" y1="82" x2="50" y2="90" stroke="#18181b" stroke-width="1.2"/>
      <line x1="60" y1="82" x2="62" y2="90" stroke="#18181b" stroke-width="1.2"/>
    `;
  }
  if (pantsId === 'pants_plain') {
    return `
      <path d="M 29 82 L 71 82 L 70 94 L 30 94 Z" fill="${pColor}" stroke="#18181b" stroke-width="1.6"/>
      <line x1="50" y1="86" x2="50" y2="94" stroke="#18181b" stroke-width="1.4"/>
    `;
  }
  // Jeans com costura cinza claro nos bolsos (Idêntico à ref image_4ee7d9.png)
  return `
    <path d="M 29 81 L 71 81 L 70 94 L 30 94 Z" fill="${pColor}" stroke="#18181b" stroke-width="1.6"/>
    <line x1="50" y1="84" x2="50" y2="94" stroke="#18181b" stroke-width="1.5"/>
    <path d="M 30 85 Q 37 86 38 81" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
    <path d="M 70 85 Q 63 86 62 81" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="30" y1="91" x2="70" y2="91" stroke="#94a3b8" stroke-width="1" opacity="0.6"/>
  `;
}

function buildBodyShirtSvg(bodyId, clothColor, skin) {
  let shirtSvg = '';

  if (bodyId === 'shirt_raglan') {
    // Camiseta Raglan de peito branco e mangas/gola coloridas (Idêntica à ref image_4ee7d9.png!)
    shirtSvg = `
      <!-- Mangas coloridas -->
      <path d="M 29 62 C 23 65, 20 72, 19 79 L 28 81 L 32 66 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.4"/>
      <path d="M 71 62 C 77 65, 80 72, 81 79 L 72 81 L 68 66 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.4"/>
      <!-- Tronco Branco Arredondado -->
      <path d="M 30 63 L 70 63 L 72 84 Q 50 88 28 84 Z" fill="#ffffff" stroke="#18181b" stroke-width="1.5"/>
      <!-- Gola Redonda Colorida -->
      <path d="M 33 63 Q 50 72 67 63 Q 50 69 33 63 Z" fill="${clothColor}" stroke="#dc2626" stroke-width="2.2"/>
    `;
  } else if (bodyId === 'jacket_zip') {
    // Casaco fechado clássico de South Park com linha central e botões
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.6"/>
      <path d="M 34 63 Q 50 70 66 63" fill="none" stroke="#18181b" stroke-width="2"/>
      <line x1="50" y1="66" x2="50" y2="86" stroke="#18181b" stroke-width="1.8"/>
      <circle cx="47" cy="72" r="1.1" fill="#18181b"/>
      <circle cx="47" cy="79" r="1.1" fill="#18181b"/>
    `;
  } else if (bodyId === 'hoodie_open') {
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.6"/>
      <line x1="45" y1="67" x2="45" y2="77" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="55" y1="67" x2="55" y2="77" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 35 78 L 65 78 L 63 85 L 37 85 Z" fill="rgba(0,0,0,0.18)"/>
    `;
  } else if (bodyId === 'lab_coat_sp') {
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="#f8fafc" stroke="#18181b" stroke-width="1.6"/>
      <polygon points="42,64 58,64 54,86 46,86" fill="${clothColor}"/>
      <polyline points="41,64 36,75 44,77 45,86" fill="none" stroke="#18181b" stroke-width="1.4"/>
      <polyline points="59,64 64,75 56,77 55,86" fill="none" stroke="#18181b" stroke-width="1.4"/>
    `;
  } else if (bodyId === 'suit_tie_sp') {
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="#1e293b" stroke="#18181b" stroke-width="1.6"/>
      <polygon points="41,64 59,64 50,84" fill="#ffffff"/>
      <polygon points="48,66 52,66 53,82 50,86 47,82" fill="${clothColor}"/>
    `;
  } else if (bodyId === 'sweater_stripes') {
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.6"/>
      <rect x="26" y="70" width="48" height="4" fill="#14532d"/>
      <rect x="28" y="78" width="44" height="4" fill="#14532d"/>
    `;
  } else if (bodyId === 'overalls_sp') {
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.6"/>
      <rect x="35" y="64" width="5" height="14" fill="#1d4ed8" stroke="#18181b" stroke-width="1.2"/>
      <rect x="60" y="64" width="5" height="14" fill="#1d4ed8" stroke="#18181b" stroke-width="1.2"/>
      <rect x="33" y="73" width="34" height="13" fill="#1d4ed8" stroke="#18181b" stroke-width="1.4"/>
      <circle cx="37.5" cy="76" r="1.5" fill="#fbbf24"/>
      <circle cx="62.5" cy="76" r="1.5" fill="#fbbf24"/>
    `;
  } else {
    // Camiseta Lisa Básica
    shirtSvg = `
      <path d="M 28 62 C 22 65, 19 73, 19 80 L 28 82 L 30 84 Q 50 88 70 84 L 72 82 L 81 80 C 81 73, 78 65, 72 62 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.6"/>
    `;
  }

  // Mãozinhas Redondas Clássicas de South Park com dedinho sutil (Idênticas à ref image_4ee7d9.png)
  const handsSvg = `
    <g>
      <circle cx="22.5" cy="81.5" r="5.5" fill="${skin}" stroke="#d4a373" stroke-width="0.9"/>
      <circle cx="26" cy="80.5" r="2.2" fill="${skin}" stroke="#d4a373" stroke-width="0.8"/>
      <circle cx="77.5" cy="81.5" r="5.5" fill="${skin}" stroke="#d4a373" stroke-width="0.9"/>
      <circle cx="74" cy="80.5" r="2.2" fill="${skin}" stroke="#d4a373" stroke-width="0.8"/>
    </g>
  `;

  return shirtSvg + handsSvg;
}

function buildHeadBaseSvg(skin) {
  // Cabeça redonda grande característica do South Park
  return `
    <ellipse cx="50" cy="43" rx="26.5" ry="25" fill="${skin}"/>
    <path d="M 26 51 Q 50 69 74 51" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1.5"/>
  `;
}

function buildEyesSvg(eyesId, eColor) {
  if (eyesId === 'sp_closed_happy') {
    return `
      <path d="M 32 43 Q 40 35 48 43" fill="none" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 52 43 Q 60 35 68 43" fill="none" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>
    `;
  }
  if (eyesId === 'sp_dead_x') {
    return `
      <ellipse cx="41.5" cy="42" rx="8.8" ry="10.2" transform="rotate(-5 41.5 42)" fill="#ffffff"/>
      <ellipse cx="58.5" cy="42" rx="8.8" ry="10.2" transform="rotate(5 58.5 42)" fill="#ffffff"/>
      <path d="M 38 39 L 44 45 M 44 39 L 38 45" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <path d="M 56 39 L 62 45 M 62 39 L 56 45" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
    `;
  }

  // Globos oculares brancos ovais grandes e juntos (Idênticos à ref South Park!)
  let pupils = `
    <circle cx="44" cy="42.5" r="1.8" fill="${eColor}"/>
    <circle cx="56" cy="42.5" r="1.8" fill="${eColor}"/>
  `;
  if (eyesId === 'sp_look_side') {
    pupils = `
      <circle cx="46.5" cy="42.5" r="1.8" fill="${eColor}"/>
      <circle cx="61.5" cy="42.5" r="1.8" fill="${eColor}"/>
    `;
  } else if (eyesId === 'sp_big_anime') {
    pupils = `
      <circle cx="43.5" cy="42.5" r="3.8" fill="${eColor}"/>
      <circle cx="56.5" cy="42.5" r="3.8" fill="${eColor}"/>
      <circle cx="42.2" cy="41" r="1.3" fill="#ffffff"/>
      <circle cx="55.2" cy="41" r="1.3" fill="#ffffff"/>
    `;
  } else if (eyesId === 'sp_crazy') {
    pupils = `
      <circle cx="41" cy="40" r="1.3" fill="${eColor}"/>
      <circle cx="59" cy="44" r="2.6" fill="${eColor}"/>
    `;
  }

  return `
    <g>
      <ellipse cx="41.5" cy="42" rx="8.8" ry="10.2" transform="rotate(-4 41.5 42)" fill="#ffffff" stroke="rgba(0,0,0,0.06)" stroke-width="0.8"/>
      <ellipse cx="58.5" cy="42" rx="8.8" ry="10.2" transform="rotate(4 58.5 42)" fill="#ffffff" stroke="rgba(0,0,0,0.06)" stroke-width="0.8"/>
      ${pupils}
    </g>
  `;
}

function buildEyelidsSvg(eyelidsId, skin) {
  if (eyelidsId === 'none') return '';
  if (eyelidsId === 'lid_bored_blush') {
    // Pálpebra superior rosada/sombreada idêntica à caixa selecionada na sua print image_4e94e6.png!
    return `
      <defs>
        <linearGradient id="spLidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e59882"/>
          <stop offset="50%" stop-color="#f7c8b6"/>
          <stop offset="100%" stop-color="#e59882"/>
        </linearGradient>
      </defs>
      <path d="M 32.5 38.5 C 34 31, 48 31, 50 38.5 Z" fill="url(#spLidGrad)"/>
      <path d="M 50 38.5 C 52 31, 66 31, 67.5 38.5 Z" fill="url(#spLidGrad)"/>
      <line x1="32.5" y1="38.5" x2="67.5" y2="38.5" stroke="#d98a73" stroke-width="1"/>
    `;
  }
  if (eyelidsId === 'lid_half_skin') {
    return `
      <path d="M 32.5 39 C 34 31, 48 31, 50 39 Z" fill="${skin}"/>
      <path d="M 50 39 C 52 31, 66 31, 67.5 39 Z" fill="${skin}"/>
      <line x1="32.5" y1="39" x2="67.5" y2="39" stroke="#18181b" stroke-width="1.2"/>
    `;
  }
  if (eyelidsId === 'lid_angry') {
    return `
      <polygon points="32,33 50,40 50,31" fill="${skin}"/>
      <polygon points="68,33 50,40 50,31" fill="${skin}"/>
      <polyline points="32,34 50,40 68,34" fill="none" stroke="#18181b" stroke-width="1.6"/>
    `;
  }
  if (eyelidsId === 'lid_sad') {
    return `
      <polygon points="32,40 50,34 32,31" fill="${skin}"/>
      <polygon points="68,40 50,34 68,31" fill="${skin}"/>
      <line x1="32" y1="40" x2="49" y2="34" stroke="#18181b" stroke-width="1.5"/>
      <line x1="68" y1="40" x2="51" y2="34" stroke="#18181b" stroke-width="1.5"/>
    `;
  }
  if (eyelidsId === 'lid_suspect') {
    return `
      <path d="M 32.5 40 C 34 31, 48 31, 50 40 Z" fill="${skin}"/>
      <path d="M 50 40 C 52 31, 66 31, 67.5 40 Z" fill="${skin}"/>
      <path d="M 33 48 Q 41 53 49 48" fill="none" stroke="#d4a373" stroke-width="1.5"/>
      <path d="M 51 48 Q 59 53 67 48" fill="none" stroke="#d4a373" stroke-width="1.5"/>
    `;
  }
  if (eyelidsId === 'lid_bottom_bags') {
    return `
      <path d="M 34 50 Q 41.5 54 48.5 50" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M 51.5 50 Q 58.5 54 66 50" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-linecap="round"/>
    `;
  }
  return '';
}

function buildEyebrowsSvg(browId) {
  if (browId === 'none') return '';
  if (browId === 'brow_angry') {
    return `
      <line x1="33" y1="31" x2="47" y2="36" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="67" y1="31" x2="53" y2="36" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/>
    `;
  }
  if (browId === 'brow_worried') {
    return `
      <line x1="33" y1="36" x2="46" y2="31" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <line x1="67" y1="36" x2="54" y2="31" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
    `;
  }
  if (browId === 'brow_thick') {
    return `
      <path d="M 33 32 Q 41 29 47 32" fill="none" stroke="#18181b" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M 53 32 Q 59 29 67 32" fill="none" stroke="#18181b" stroke-width="3.4" stroke-linecap="round"/>
    `;
  }
  return `
    <path d="M 33 33 Q 41 29 47 33" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 53 33 Q 59 29 67 33" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>
  `;
}

function buildMouthSvg(mouthId) {
  if (mouthId === 'mouth_smile') {
    return `<path d="M 45 57 Q 50 61 55 57" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>`;
  }
  if (mouthId === 'mouth_open_happy') {
    return `
      <path d="M 43 55 L 57 55 C 57 62, 43 62, 43 55 Z" fill="#7f1d1d" stroke="#18181b" stroke-width="1.5"/>
      <path d="M 46 59 Q 50 61.5 54 59" fill="#fb7185"/>
    `;
  }
  if (mouthId === 'mouth_smirk') {
    return `<path d="M 45 58 Q 51 59 56 55" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>`;
  }
  if (mouthId === 'mouth_cat') {
    return `<path d="M 44 57 Q 47 60 50 57 Q 53 60 56 57" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>`;
  }
  if (mouthId === 'mouth_surprised') {
    return `<ellipse cx="50" cy="58" rx="3" ry="3.8" fill="#18181b"/>`;
  }
  if (mouthId === 'mouth_teeth_grit') {
    return `
      <rect x="43" y="55" width="14" height="5" rx="2" fill="#ffffff" stroke="#18181b" stroke-width="1.5"/>
      <line x1="43" y1="57.5" x2="57" y2="57.5" stroke="#18181b" stroke-width="1.2"/>
      <line x1="47.5" y1="55" x2="47.5" y2="60" stroke="#18181b" stroke-width="1"/>
      <line x1="52.5" y1="55" x2="52.5" y2="60" stroke="#18181b" stroke-width="1"/>
    `;
  }
  if (mouthId === 'mouth_tongue') {
    return `
      <path d="M 45 56 Q 50 59 55 56" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 48 57 L 48 61 C 48 63, 52 63, 52 61 L 52 57 Z" fill="#fb7185" stroke="#18181b" stroke-width="1.2"/>
    `;
  }
  if (mouthId === 'mouth_fangs') {
    return `
      <path d="M 44 57 Q 50 59 56 57" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="45.5,57.5 47,61.5 48.5,57.5" fill="#ffffff" stroke="#18181b" stroke-width="1"/>
      <polygon points="51.5,57.5 53,61.5 54.5,57.5" fill="#ffffff" stroke="#18181b" stroke-width="1"/>
    `;
  }
  // Padrão da referência (image_4ee7d9.png): boquinha pequena levemente curvada
  return `<path d="M 46.5 57.5 Q 50 55.8 53.5 57.5" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/>`;
}

function buildFaceAccSvg(accId) {
  if (accId === 'none') return '';
  if (accId === 'acc_blush') {
    return `
      <ellipse cx="31" cy="49" rx="4.2" ry="2.2" fill="#fb7185" opacity="0.45"/>
      <ellipse cx="69" cy="49" rx="4.2" ry="2.2" fill="#fb7185" opacity="0.45"/>
    `;
  }
  if (accId === 'acc_glasses_round') {
    return `
      <circle cx="41.5" cy="42" r="9.5" fill="none" stroke="#18181b" stroke-width="2"/>
      <circle cx="58.5" cy="42" r="9.5" fill="none" stroke="#18181b" stroke-width="2"/>
      <line x1="51" y1="42" x2="49" y2="42" stroke="#18181b" stroke-width="2"/>
      <line x1="25" y1="41" x2="32" y2="42" stroke="#18181b" stroke-width="1.8"/>
      <line x1="68" y1="42" x2="75" y2="41" stroke="#18181b" stroke-width="1.8"/>
    `;
  }
  if (accId === 'acc_glasses_square') {
    return `
      <rect x="31.5" y="34" width="18" height="15" rx="2" fill="none" stroke="#18181b" stroke-width="2"/>
      <rect x="50.5" y="34" width="18" height="15" rx="2" fill="none" stroke="#18181b" stroke-width="2"/>
      <line x1="25" y1="39" x2="31.5" y2="39" stroke="#18181b" stroke-width="1.8"/>
      <line x1="68.5" y1="39" x2="75" y2="39" stroke="#18181b" stroke-width="1.8"/>
    `;
  }
  if (accId === 'acc_sunglasses') {
    return `
      <rect x="31" y="35" width="18" height="13" rx="2.5" fill="#090d16" stroke="#18181b" stroke-width="1.8"/>
      <rect x="51" y="35" width="18" height="13" rx="2.5" fill="#090d16" stroke="#18181b" stroke-width="1.8"/>
      <line x1="49" y1="39" x2="51" y2="39" stroke="#f59e0b" stroke-width="2.2"/>
      <line x1="34" y1="38" x2="40" y2="38" stroke="#ffffff" stroke-width="1.5" opacity="0.7"/>
      <line x1="54" y1="38" x2="60" y2="38" stroke="#ffffff" stroke-width="1.5" opacity="0.7"/>
    `;
  }
  if (accId === 'acc_bandaid') {
    return `
      <g transform="rotate(-12 63 50)">
        <rect x="56" y="47" width="13" height="5.5" rx="1.8" fill="#f5cbe1" stroke="#18181b" stroke-width="1.2"/>
        <rect x="60.5" y="47" width="4" height="5.5" fill="#f8fafc" stroke="#18181b" stroke-width="0.8"/>
      </g>
    `;
  }
  if (accId === 'acc_surgical_mask') {
    return `
      <rect x="32" y="49" width="36" height="15" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>
      <line x1="24" y1="48" x2="32" y2="52" stroke="#f8fafc" stroke-width="1.8"/>
      <line x1="76" y1="48" x2="68" y2="52" stroke="#f8fafc" stroke-width="1.8"/>
    `;
  }
  if (accId === 'acc_plague_mask') {
    return `
      <path d="M 25 38 C 25 22, 72 22, 72 40 C 72 51, 59 56, 46 55 C 36 55, 29 59, 25 65 C 23 56, 26 48, 25 38 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.4" stroke-linejoin="round"/>
      <circle cx="35" cy="40" r="6.5" fill="#090d16"/>
      <circle cx="57" cy="40" r="7" fill="#090d16"/>
    `;
  }
  if (accId === 'acc_jason_mask') {
    return `
      <ellipse cx="50" cy="43" rx="23" ry="23" fill="#fef3c7" stroke="#18181b" stroke-width="2.2"/>
      <polygon points="50,26 46,32 54,32" fill="#dc2626"/>
      <circle cx="40" cy="41" r="4.2" fill="#090d16"/>
      <circle cx="60" cy="41" r="4.2" fill="#090d16"/>
      <circle cx="46" cy="54" r="1.3" fill="#18181b"/>
      <circle cx="54" cy="54" r="1.3" fill="#18181b"/>
      <circle cx="46" cy="58" r="1.3" fill="#18181b"/>
      <circle cx="54" cy="58" r="1.3" fill="#18181b"/>
    `;
  }
  return '';
}

function buildFrontHairSvg(hairId, hColor) {
  if (hairId === 'none') return '';
  if (hairId === 'sp_curly_messy') {
    // Cabelo cacheado volumoso com mechas recortadas idêntico à ref image_4ee7d9.png!
    return `
      <path d="
        M 23 39
        C 17 39, 16 32, 22 30
        C 18 25, 22 19, 28 21
        C 26 14, 34 11, 39 15
        C 42 9, 52 7, 56 13
        C 62 9, 71 13, 69 20
        C 76 19, 80 26, 75 30
        C 82 33, 80 40, 74 39
        C 75 43, 69 44, 67 40
        C 65 34, 62 32, 58 35
        C 56 29, 51 28, 49 33
        C 45 28, 39 30, 37 36
        C 34 39, 29 36, 28 41
        C 25 43, 22 41, 23 39 Z
      " fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_short_clean') {
    return `
      <path d="M 23 36 C 23 14, 77 14, 77 36 C 68 27, 58 28, 50 31 C 42 28, 32 27, 23 36 Z" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_spiky') {
    return `
      <polygon points="21,37 26,18 35,26 43,10 51,24 61,11 67,26 76,17 79,37 66,31 50,33 34,31" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_bob_long') {
    return `
      <path d="M 22 38 C 23 14, 77 14, 78 38 C 66 28, 34 28, 22 38 Z" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_afro_puff') {
    return `
      <circle cx="50" cy="24" r="22" fill="${hColor}"/>
      <circle cx="31" cy="31" r="14" fill="${hColor}"/>
      <circle cx="69" cy="31" r="14" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_twintails') {
    return `
      <path d="M 23 37 C 25 15, 75 15, 77 37 C 64 28, 36 28, 23 37 Z" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_emo_side') {
    return `
      <path d="M 22 37 C 24 14, 76 14, 77 36 C 64 32, 48 45, 27 46 Z" fill="${hColor}"/>
    `;
  }
  if (hairId === 'sp_mohawk') {
    return `
      <polygon points="43,30 40,6 50,12 60,6 57,30" fill="${hColor}"/>
    `;
  }
  return '';
}

function buildHatSvg(hatId, clothColor) {
  if (hatId === 'none') return '';
  if (hatId === 'hat_beanie_pom') {
    // Touca clássica South Park (estilo Stan/Cartman)
    return `
      <path d="M 22 31 C 23 11, 77 11, 78 31 Z" fill="${clothColor}" stroke="#18181b" stroke-width="1.8"/>
      <rect x="20" y="27" width="60" height="6" rx="3" fill="#dc2626" stroke="#18181b" stroke-width="1.6"/>
      <circle cx="50" cy="10" r="6" fill="#dc2626" stroke="#18181b" stroke-width="1.5"/>
    `;
  }
  if (hatId === 'hat_ushanka') {
    // Gorro estilo Kyle
    return `
      <path d="M 21 30 L 21 48 C 21 53, 28 53, 28 46 L 28 30 Z" fill="#16a34a" stroke="#18181b" stroke-width="1.6"/>
      <path d="M 79 30 L 79 48 C 79 53, 72 53, 72 46 L 72 30 Z" fill="#16a34a" stroke="#18181b" stroke-width="1.6"/>
      <rect x="20" y="13" width="60" height="19" rx="5" fill="#16a34a" stroke="#18181b" stroke-width="1.8"/>
      <rect x="26" y="20" width="48" height="11" rx="2" fill="#065f46" stroke="#18181b" stroke-width="1.4"/>
    `;
  }
  if (hatId === 'hat_capelo') {
    return `
      <polygon points="50,5 14,18 50,30 86,18" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
      <line x1="76" y1="20" x2="80" y2="36" stroke="#f59e0b" stroke-width="2.2"/>
      <circle cx="80" cy="37" r="2.5" fill="#f59e0b"/>
    `;
  }
  if (hatId === 'hat_tophat_doc') {
    return `
      <ellipse cx="50" cy="24" rx="33" ry="5.5" fill="#27272a" stroke="#090d16" stroke-width="2"/>
      <path d="M 33 23 L 35 5 L 65 5 L 67 23 Z" fill="#3f3f46" stroke="#090d16" stroke-width="2"/>
      <rect x="34" y="17" width="32" height="4" fill="#18181b"/>
    `;
  }
  if (hatId === 'hat_witch') {
    return `
      <ellipse cx="50" cy="24" rx="34" ry="5.5" fill="#581c87" stroke="#18181b" stroke-width="2"/>
      <polygon points="50,2 32,24 68,24" fill="#6b21a8" stroke="#18181b" stroke-width="2"/>
    `;
  }
  if (hatId === 'hat_crown') {
    return `<polygon points="28,25 32,9 43,18 50,6 57,18 68,9 72,25" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>`;
  }
  if (hatId === 'hat_horns') {
    return `
      <path d="M 30 24 Q 20 9 35 12" stroke="#dc2626" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path d="M 70 24 Q 80 9 65 12" stroke="#dc2626" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    `;
  }
  return '';
}

// =========================================================================
// RENDERIZADOR PRINCIPAL DO BONECO COMPLETO (SOUTH PARK / PICREW)
// =========================================================================
window.renderAvatarSvg = function(rawConfig) {
  const c = window.normalizeAvatarConfig(rawConfig);

  return `
    <svg viewBox="0 0 100 100" class="w-full h-full select-none">
      <!-- Fundo com Círculo Suave estilo Picrew -->
      <rect width="100" height="100" fill="${c.bgColor}"/>
      <circle cx="50" cy="50" r="43" fill="#ffffff" opacity="0.22"/>

      <!-- Linha de Chão estilo South Park -->
      <line x1="22" y1="95.8" x2="78" y2="95.8" stroke="#18181b" stroke-width="1.2"/>

      <!-- Camadas Empilhadas na Ordem Anatômica Exata -->
      ${buildBackHairSvg(c.hair, c.hairColor)}
      ${buildPantsSvg(c.pants, c.pantsColor, c.skinTone)}
      ${buildShoesSvg(c.shoes)}
      ${buildBodyShirtSvg(c.body, c.bodyColor, c.skinTone)}
      ${buildHeadBaseSvg(c.skinTone)}
      ${buildEyesSvg(c.eyes, c.eyeColor)}
      ${buildEyelidsSvg(c.eyelids, c.skinTone)}
      ${buildEyebrowsSvg(c.eyebrows)}
      ${buildMouthSvg(c.mouth)}
      ${buildFaceAccSvg(c.faceAcc)}
      ${buildFrontHairSvg(c.hair, c.hairColor)}
      ${buildHatSvg(c.hat, c.bodyColor)}
    </svg>
  `;
};

// =========================================================================
// MINI-PREVIEW ISOLADO DA PEÇA (Idêntico às suas prints do Picrew!)
// =========================================================================
window.renderItemMiniPreviewSvg = function(category, itemId, rawAvatar) {
  const c = window.normalizeAvatarConfig(rawAvatar);

  // Se o item for "none" (Remover peça), mostra o X elegante igual ao Picrew!
  if (itemId === 'none') {
    return `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-white">
        <line x1="25" y1="25" x2="75" y2="75" stroke="#cbd5e1" stroke-width="7" stroke-linecap="round"/>
        <line x1="75" y1="25" x2="25" y2="75" stroke="#cbd5e1" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `;
  }

  // Cada categoria dá zoom exatamente na peça isolada em fundo branco limpo!
  if (category === 'shoes') {
    return `
      <svg viewBox="18 82 64 18" class="w-full h-full bg-white">
        <line x1="20" y1="95.8" x2="80" y2="95.8" stroke="#94a3b8" stroke-width="0.8"/>
        ${buildShoesSvg(itemId)}
      </svg>
    `;
  }
  if (category === 'eyelids') {
    return `
      <svg viewBox="26 24 48 34" class="w-full h-full bg-white">
        <ellipse cx="41.5" cy="42" rx="8.8" ry="10.2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <ellipse cx="58.5" cy="42" rx="8.8" ry="10.2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        ${buildEyelidsSvg(itemId, c.skinTone)}
      </svg>
    `;
  }
  if (category === 'eyes') {
    return `
      <svg viewBox="26 26 48 32" class="w-full h-full bg-slate-100">
        ${buildEyesSvg(itemId, c.eyeColor)}
      </svg>
    `;
  }
  if (category === 'eyebrows') {
    return `
      <svg viewBox="26 22 48 24" class="w-full h-full bg-white">
        ${buildEyebrowsSvg(itemId)}
      </svg>
    `;
  }
  if (category === 'mouth') {
    return `
      <svg viewBox="34 46 32 24" class="w-full h-full bg-white">
        ${buildMouthSvg(itemId)}
      </svg>
    `;
  }
  if (category === 'body') {
    return `
      <svg viewBox="12 56 76 36" class="w-full h-full bg-white">
        ${buildBodyShirtSvg(itemId, c.bodyColor, c.skinTone)}
      </svg>
    `;
  }
  if (category === 'pants') {
    return `
      <svg viewBox="20 76 60 22" class="w-full h-full bg-white">
        ${buildPantsSvg(itemId, c.pantsColor, c.skinTone)}
      </svg>
    `;
  }
  if (category === 'hair') {
    return `
      <svg viewBox="10 4 80 65" class="w-full h-full bg-white">
        <ellipse cx="50" cy="43" rx="25" ry="23" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2"/>
        ${buildBackHairSvg(itemId, c.hairColor)}
        ${buildFrontHairSvg(itemId, c.hairColor)}
      </svg>
    `;
  }
  if (category === 'hat') {
    return `
      <svg viewBox="10 0 80 56" class="w-full h-full bg-white">
        <ellipse cx="50" cy="42" rx="24" ry="20" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2"/>
        ${buildHatSvg(itemId, c.bodyColor)}
      </svg>
    `;
  }
  if (category === 'faceAcc') {
    return `
      <svg viewBox="18 18 64 52" class="w-full h-full bg-white">
        <ellipse cx="50" cy="43" rx="25" ry="23" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
        ${buildFaceAccSvg(itemId)}
      </svg>
    `;
  }

  const temp = { ...c, [category]: itemId };
  return window.renderAvatarSvg(temp);
};

// =========================================================================
// MASCOTE ÚNICO "DOC": Auto-detecção de imagem + Fallback SVG
// =========================================================================
window.handleDocMascotImgError = function(imgEl) {
  const attempts = [
    'assets/doc_mascot.jpg',
    'assets/doc_mascot.png',
    'assets/doc_mascot.jpeg.jpeg',
    '../assets/doc_mascot.jpeg',
    '../assets/doc_mascot.jpg'
  ];
  const step = parseInt(imgEl.dataset.tryStep || '0', 10);
  if (step < attempts.length) {
    imgEl.dataset.tryStep = step + 1;
    imgEl.src = attempts[step];
  } else {
    imgEl.style.display = 'none';
    if (imgEl.nextElementSibling) {
      imgEl.nextElementSibling.style.display = 'block';
    }
  }
};

window.renderDocPlagueMascotSvg = function() {
  return `
    <div class="w-full h-full relative flex items-center justify-center overflow-hidden">
      <img src="assets/doc_mascot.jpeg" alt="Doc Mascot" data-try-step="0"
           class="w-full h-full object-cover rounded-2xl"
           onerror="window.handleDocMascotImgError(this)">
      <svg viewBox="0 0 100 100" class="w-full h-full select-none hidden">
        <circle cx="48" cy="56" r="41" fill="#1e1b4b" stroke="#090d16" stroke-width="2.5"/>
        <path d="M 76 82 C 84 84, 90 79, 92 71 L 89 70 L 95 62 L 98 72 L 94 72 C 91 82, 83 88, 74 86 Z" fill="#141419" stroke="#090d16" stroke-width="2.5"/>
        <path d="M 16 74 C 12 56, 24 46, 50 46 C 76 46, 86 58, 82 76 C 78 88, 66 93, 50 93 C 30 93, 19 86, 16 74 Z" fill="#18181f" stroke="#090d16" stroke-width="2.8"/>
        <path d="M 25 38 C 25 22, 72 22, 72 40 C 72 51, 59 56, 46 55 C 36 55, 29 59, 25 65 C 23 56, 26 48, 25 38 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.8"/>
        <circle cx="33" cy="40" r="7.5" fill="#090d16"/>
        <circle cx="57" cy="40" r="8" fill="#090d16"/>
        <g transform="rotate(4 50 25)">
          <ellipse cx="50" cy="26" rx="33" ry="6.5" fill="#27272a" stroke="#090d16" stroke-width="2.6"/>
          <path d="M 34 25 L 36 6 C 45 3, 57 3, 66 6 L 65 25 Z" fill="#3f3f46" stroke="#090d16" stroke-width="2.6"/>
        </g>
      </svg>
    </div>
  `;
};

// =========================================================================
// CONTROLE DO ATELIÊ ESTILO PICREW + DADO ALEATÓRIO + TRAVA ANTI-EXPLOIT
// =========================================================================
let activeStudioCategory = 'hair';
let studioPreviewAvatar = null;

function getLockedPreviewedItems() {
  if (!studioPreviewAvatar) return [];
  const lockedList = [];
  const categories = Object.keys(window.AVATAR_CATALOG);

  categories.forEach(cat => {
    const equippedId = studioPreviewAvatar[cat];
    if (!equippedId) return;
    const catalogArr = window.AVATAR_CATALOG[cat] || [];
    const itemObj = catalogArr.find(i => i.id === equippedId);
    if (itemObj && itemObj.cost > 0 && !window.userState.unlockedItems.includes(itemObj.id)) {
      lockedList.push({ category: cat, ...itemObj });
    }
  });

  return lockedList;
}

window.openAvatarStudio = function() {
  window.userState.avatar = window.normalizeAvatarConfig(window.userState.avatar);
  studioPreviewAvatar = JSON.parse(JSON.stringify(window.userState.avatar));
  document.getElementById('studioCoinsDisplay').textContent = window.userState.coins;
  document.getElementById('avatarStudioModal').classList.remove('hidden');
  window.selectStudioCategory('hair');
  refreshStudioStage();
};

window.closeAvatarStudio = function() {
  document.getElementById('avatarStudioModal').classList.add('hidden');
};

window.toggleAvatarZoom = function() {
  document.getElementById('studioStageContainer').classList.toggle('zoomed');
};

// Botão de Dado Aleatório igual ao Picrew (Sorteia entre os itens liberados!)
window.randomizeAvatarPicrew = function() {
  const keys = ['skinTone', 'hairColor', 'eyeColor', 'bodyColor', 'pantsColor', 'bgColor', 'hair', 'eyes', 'eyelids', 'eyebrows', 'mouth', 'body', 'pants', 'shoes'];
  keys.forEach(k => {
    const unlockedPool = (window.AVATAR_CATALOG[k] || []).filter(i => i.cost === 0 || window.userState.unlockedItems.includes(i.id));
    if (unlockedPool.length > 0) {
      const pick = unlockedPool[Math.floor(Math.random() * unlockedPool.length)];
      studioPreviewAvatar[k] = pick.id;
    }
  });
  window.playTone(580, 'triangle', 0.08);
  refreshStudioStage();
  renderStudioCategoryItems();
};

function refreshStudioStage() {
  document.getElementById('studioAvatarSvgBox').innerHTML = window.renderAvatarSvg(studioPreviewAvatar);
  const tryBadge = document.getElementById('studioTryOnBadge');
  const btnSave = document.getElementById('btnSaveAvatar');
  const btnBuy = document.getElementById('btnBuyTryOnItem');

  const lockedItems = getLockedPreviewedItems();

  if (lockedItems.length > 0) {
    const totalCost = lockedItems.reduce((acc, it) => acc + it.cost, 0);
    const names = lockedItems.map(it => it.name).join(' + ');

    tryBadge.classList.remove('hidden');
    tryBadge.textContent = lockedItems.length === 1
      ? `👀 Testando: ${lockedItems[0].name}`
      : `👀 Testando ${lockedItems.length} itens (${totalCost} 🧪)`;

    btnSave.classList.add('hidden');
    btnBuy.classList.remove('hidden');
    btnBuy.innerHTML = lockedItems.length === 1
      ? `<i class="fa-solid fa-cart-shopping"></i> Desbloquear ${lockedItems[0].name} (${totalCost} 🧪)`
      : `<i class="fa-solid fa-cart-shopping"></i> Desbloquear ${lockedItems.length} Itens (${totalCost} 🧪)`;
    btnBuy.title = names;
  } else {
    tryBadge.classList.add('hidden');
    btnSave.classList.remove('hidden');
    btnBuy.classList.add('hidden');
  }

  renderSideColorSwatches();
}

function renderSideColorSwatches() {
  const bgContainer = document.getElementById('studioBgColorSwatches');
  if (!bgContainer) return;
  bgContainer.innerHTML = '';

  window.AVATAR_CATALOG.bgColor.forEach(c => {
    const unlocked = c.cost === 0 || window.userState.unlockedItems.includes(c.id);
    const active = studioPreviewAvatar.bgColor === c.id;
    const btn = document.createElement('button');
    btn.className = `w-7 h-7 rounded-lg border-2 transition transform hover:scale-110 flex items-center justify-center text-[9px] ${active ? 'border-white ring-2 ring-emerald-400 scale-110' : 'border-slate-700'}`;
    btn.style.backgroundColor = c.id;
    btn.innerHTML = unlocked ? '' : '🔒';
    btn.onclick = () => {
      studioPreviewAvatar.bgColor = c.id;
      window.playTone(500, 'sine', 0.04);
      refreshStudioStage();
    };
    bgContainer.appendChild(btn);
  });

  const ctxContainer = document.getElementById('studioContextColorSwatches');
  const ctxLabel = document.getElementById('studioContextColorLabel');
  ctxContainer.innerHTML = '';

  let targetColorKey = 'hairColor';
  if (activeStudioCategory === 'eyes') {
    targetColorKey = 'eyeColor';
    ctxLabel.textContent = 'Olhos';
  } else if (activeStudioCategory === 'body' || activeStudioCategory === 'hat') {
    targetColorKey = 'bodyColor';
    ctxLabel.textContent = 'Roupa';
  } else if (activeStudioCategory === 'pants') {
    targetColorKey = 'pantsColor';
    ctxLabel.textContent = 'Calça';
  } else if (activeStudioCategory === 'eyelids' || activeStudioCategory === 'mouth') {
    targetColorKey = 'skinTone';
    ctxLabel.textContent = 'Pele';
  } else {
    targetColorKey = 'hairColor';
    ctxLabel.textContent = 'Cabelo';
  }

  (window.AVATAR_CATALOG[targetColorKey] || []).forEach(c => {
    const unlocked = c.cost === 0 || window.userState.unlockedItems.includes(c.id);
    const active = studioPreviewAvatar[targetColorKey] === c.id;
    const btn = document.createElement('button');
    btn.className = `w-7 h-7 rounded-lg border-2 transition transform hover:scale-110 flex items-center justify-center text-[9px] ${active ? 'border-white ring-2 ring-purple-400 scale-110' : 'border-slate-700'}`;
    btn.style.backgroundColor = c.id;
    btn.innerHTML = unlocked ? '' : '🔒';
    btn.onclick = () => {
      studioPreviewAvatar[targetColorKey] = c.id;
      window.playTone(520, 'sine', 0.04);
      refreshStudioStage();
      renderStudioCategoryItems();
    };
    ctxContainer.appendChild(btn);
  });
}

window.selectStudioCategory = function(catKey) {
  activeStudioCategory = catKey;
  document.querySelectorAll('.studio-cat-btn').forEach(btn => {
    btn.classList.replace('btn-purple', 'btn-surface');
  });
  const activeBtn = document.getElementById(`catBtn_${catKey}`);
  if (activeBtn) activeBtn.classList.replace('btn-surface', 'btn-purple');
  renderSideColorSwatches();
  renderStudioCategoryItems();
};

function renderStudioCategoryItems() {
  const grid = document.getElementById('studioItemsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = window.AVATAR_CATALOG[activeStudioCategory] || [];

  items.forEach(item => {
    const isUnlocked = item.cost === 0 || window.userState.unlockedItems.includes(item.id);
    const isSelected = studioPreviewAvatar[activeStudioCategory] === item.id;

    const card = document.createElement('button');
    card.className = `btn-3d p-2.5 rounded-2xl flex flex-col items-center justify-between gap-1.5 text-center border-2 ${isSelected ? 'border-pink-500 ring-2 ring-pink-500/30 bg-slate-900' : 'border-slate-700 bg-slate-950'} text-slate-100`;

    const miniSvg = window.renderItemMiniPreviewSvg(activeStudioCategory, item.id, studioPreviewAvatar);

    card.innerHTML = `
      <div class="w-16 h-16 rounded-xl overflow-hidden border-2 ${isSelected ? 'border-pink-400' : 'border-slate-700'} shadow-inner relative bg-white">
        ${miniSvg}
        ${!isUnlocked ? '<span class="absolute top-0.5 right-0.5 bg-slate-900/90 text-amber-300 text-[10px] px-1 rounded">🔒</span>' : ''}
      </div>
      <div class="text-[11px] font-bold leading-tight line-clamp-1">${item.name}</div>
      <div class="text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isUnlocked ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
        ${isUnlocked ? 'Liberado' : `${item.cost} 🧪`}
      </div>
    `;

    card.onclick = () => {
      studioPreviewAvatar[activeStudioCategory] = item.id;
      window.playTone(480, 'sine', 0.06);
      refreshStudioStage();
      renderStudioCategoryItems();
    };

    grid.appendChild(card);
  });
}

window.buyPreviewedItem = function() {
  const lockedItems = getLockedPreviewedItems();
  if (lockedItems.length === 0) return;

  const totalCost = lockedItems.reduce((acc, it) => acc + it.cost, 0);
  if (window.userState.coins < totalCost) {
    window.soundError();
    alert(`Moedas insuficientes! Você precisa de ${totalCost} 🧪 (seu saldo: ${window.userState.coins} 🧪).`);
    return;
  }

  window.userState.coins -= totalCost;
  lockedItems.forEach(it => {
    if (!window.userState.unlockedItems.includes(it.id)) {
      window.userState.unlockedItems.push(it.id);
    }
    window.userState.avatar[it.category] = it.id;
  });

  window.saveUserState();
  window.soundSuccess();
  confetti({ particleCount: 45, spread: 65 });
  document.getElementById('studioCoinsDisplay').textContent = window.userState.coins;
  refreshStudioStage();
  renderStudioCategoryItems();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
};

window.saveEquippedAvatar = function() {
  const lockedItems = getLockedPreviewedItems();
  if (lockedItems.length > 0) {
    window.soundError();
    const names = lockedItems.map(i => i.name).join(', ');
    alert(`Você ainda está testando itens bloqueados (${names}). Desbloqueie-os primeiro ou escolha um item liberado!`);
    refreshStudioStage();
    return;
  }

  window.userState.avatar = JSON.parse(JSON.stringify(studioPreviewAvatar));
  window.saveUserState();
  window.soundSuccess();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
  window.closeAvatarStudio();
};