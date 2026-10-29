// =========================================================================
// js/avatar_engine.js — Motor Oficial de Produção (South Park Style v6)
// =========================================================================

const HATS_THAT_CLIP_HAIR = ['hat_beanie_pom', 'hat_ushanka', 'hat_capelo', 'hat_tophat_doc', 'hat_witch'];
const FULL_FACE_MASKS = ['mask_jason', 'mask_ghostface', 'mask_freddy', 'mask_myers', 'mask_skellington', 'mask_pumpkin', 'mask_zombie'];

window.normalizeAvatarConfig = function(raw) {
  const cfg = raw || {};
  const cat = window.AVATAR_CATALOG || {};
  const check = (key, val, fallback) => (val && cat[key] && cat[key].some(i => i.id === val)) ? val : fallback;

  // Mapeamento de compatibilidade caso o perfil antigo no Supabase tenha chaves da v1
  const legacyHair = cfg.hair || cfg.head;
  const mappedHair = legacyHair === 'bubo_mask' ? 'sp_short_clean' : legacyHair;
  const legacyAcc = cfg.faceAcc || (cfg.head === 'bubo_mask' ? 'acc_plague_mask' : 'none');

  return {
    skinTone: check('skinTone', cfg.skinTone, '#fcd0b4'),
    hairColor: check('hairColor', cfg.hairColor, '#18181b'),
    eyeColor: check('eyeColor', cfg.eyeColor, '#090d16'),
    bodyColor: check('bodyColor', cfg.bodyColor, '#dc2626'),
    stripeColor: check('stripeColor', cfg.stripeColor, '#15803d'),
    hatColor: check('hatColor', cfg.hatColor, '#2563eb'),
    gloveColor: check('gloveColor', cfg.gloveColor, '#dc2626'),
    pantsColor: check('pantsColor', cfg.pantsColor, '#334155'),
    shoeColor: check('shoeColor', cfg.shoeColor, '#dc2626'),
    bgColor: check('bgColor', cfg.bgColor, '#1e1b4b'),
    hair: check('hair', mappedHair, 'sp_curly_messy'),
    eyes: check('eyes', cfg.eyes, 'sp_standard'),
    eyelids: check('eyelids', cfg.eyelids, 'lid_bored_blush'),
    eyebrows: check('eyebrows', cfg.eyebrows, 'brow_normal'),
    mouth: check('mouth', cfg.mouth, 'mouth_frown_small'),
    body: check('body', cfg.body, 'shirt_raglan'),
    gloves: check('gloves', cfg.gloves, 'none'),
    pants: check('pants', cfg.pants, 'pants_jeans_stitch'),
    shoes: check('shoes', cfg.shoes, 'shoes_sneakers'),
    hat: check('hat', cfg.hat, 'none'),
    faceAcc: check('faceAcc', legacyAcc, 'none')
  };
};

// Verifica se um item está desbloqueado para o usuário atual (respeitando itens exclusivos de ADM)
window.isAvatarItemUnlocked = function(itemObj) {
  if (!itemObj) return true;
  if (itemObj.adminOnly) {
    return Boolean(window.isCurrentUserAdmin);
  }
  if (window.isCurrentUserAdmin) return true;
  return itemObj.cost === 0 || (window.userState && Array.isArray(window.userState.unlockedItems) && window.userState.unlockedItems.includes(itemObj.id));
};

// =========================================================================
// CAMADAS GEOMÉTRICAS SVG (SOUTH PARK STYLE)
// =========================================================================
function getBackHairSvg(c) {
  if (c.faceAcc === 'mask_pumpkin' || c.faceAcc === 'mask_ghostface') return '';

  if (c.hair === 'sp_bob_long') {
    return `<path d="M 23.5 34 C 20 48, 20 66, 26 70 L 74 70 C 80 66, 80 48, 76.5 34 Z" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>`;
  }
  if (c.hair === 'sp_wavy_mid') {
    return `<path d="M 23.5 34 C 19 44, 18 57, 25 62 C 29 64, 71 64, 75 62 C 82 57, 81 44, 76.5 34 Z" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>`;
  }
  if (c.hair === 'sp_twintails') {
    return `
      <path d="M 25 32 C 13 33, 9 52, 15 63 C 20 63, 24 52, 25 39 Z" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M 75 32 C 87 33, 91 52, 85 63 C 80 63, 76 52, 75 39 Z" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
      <circle cx="24" cy="34" r="2.8" fill="#dc2626" stroke="#18181b" stroke-width="1.2"/>
      <circle cx="76" cy="34" r="2.8" fill="#dc2626" stroke="#18181b" stroke-width="1.2"/>
    `;
  }
  if (c.hair === 'sp_braids') {
    return `
      <g fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6">
        <circle cx="24.5" cy="42" r="4.5"/><circle cx="23.5" cy="49" r="4.3"/><circle cx="22.5" cy="56" r="4"/><circle cx="22" cy="62.5" r="3.5"/>
        <circle cx="75.5" cy="42" r="4.5"/><circle cx="76.5" cy="49" r="4.3"/><circle cx="77.5" cy="56" r="4"/><circle cx="78" cy="62.5" r="3.5"/>
      </g>
      <rect x="20" y="64" width="4.5" height="2.2" rx="1" fill="#dc2626" stroke="#18181b" stroke-width="1"/>
      <rect x="75.5" y="64" width="4.5" height="2.2" rx="1" fill="#dc2626" stroke="#18181b" stroke-width="1"/>
    `;
  }
  if (c.hair === 'sp_afro_puff') {
    return `<circle cx="50" cy="31" r="29" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.8"/>`;
  }
  return '';
}

function getFrontHairSvg(c) {
  if (c.hair === 'none' || c.faceAcc === 'mask_pumpkin' || c.faceAcc === 'mask_ghostface') return '';
  let rawHair = '';

  if (c.hair === 'sp_curly_messy') {
    rawHair = `
      <path d="
        M 23.5 38
        C 18 37, 17 30, 22 27
        C 19 21, 24 15, 30 17
        C 29 11, 37 9, 42 13
        C 45 8, 55 8, 58 13
        C 63 9, 71 11, 70 17
        C 76 15, 81 21, 78 27
        C 83 30, 82 37, 76.5 38
        C 75 41, 70 40, 68 36
        C 65 31, 61 30, 58 33
        C 55 28, 49 28, 47 32
        C 43 28, 38 30, 36 34
        C 33 37, 29 36, 27 39
        C 25 40, 23.5 39, 23.5 38 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_short_clean') {
    rawHair = `
      <path d="
        M 23.5 37
        C 22.5 22, 33 14.5, 50 14.5
        C 67 14.5, 77.5 22, 76.5 37
        C 74 31, 69 27, 62 26.5
        C 56 26, 53 28, 50 28.5
        C 47 28, 44 26, 38 26.5
        C 31 27, 26 31, 23.5 37 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_spiky') {
    rawHair = `
      <path d="
        M 23.2 37
        L 18 26 L 26 23
        L 25 12 L 37 16.5
        L 45 5 L 51 14.5
        L 60 5.5 L 65 16.5
        L 76 12 L 74 23
        L 82 26 L 76.8 37
        C 71 30, 63 27, 56 30
        L 50 25 L 44 30
        C 37 27, 29 30, 23.2 37 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_wavy_mid' || c.hair === 'sp_bob_long' || c.hair === 'sp_twintails' || c.hair === 'sp_braids') {
    rawHair = `
      <path d="
        M 23.5 39
        C 22 21, 33 14, 50 14
        C 67 14, 78 21, 76.5 39
        C 73 34, 70 29, 63 27
        C 56 25, 52 23, 50 21
        C 48 23, 44 25, 37 27
        C 30 29, 27 34, 23.5 39 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_afro_puff') {
    rawHair = `
      <path d="
        M 23 36
        C 21 22, 32 13, 50 13
        C 68 13, 79 22, 77 36
        C 73 29, 67 27, 62 29
        C 58 25, 53 25, 50 28
        C 47 25, 42 25, 38 29
        C 33 27, 27 29, 23 36 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_emo_side') {
    rawHair = `
      <path d="
        M 23.5 37
        C 22.5 21, 33 14, 50 14
        C 67 14, 77.5 21, 76.5 37
        C 66 30, 52 42, 31 43
        C 27 42, 25 39, 23.5 37 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_pompadour') {
    rawHair = `
      <path d="
        M 23.5 37
        C 22 25, 25 14, 36 11
        C 46 7, 68 6, 74 15
        C 79 22, 78 30, 76.5 37
        C 73 30, 68 25, 58 24
        C 44 23, 30 26, 23.5 37 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_samurai_bun') {
    rawHair = `
      <circle cx="50" cy="10.5" r="7" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6"/>
      <rect x="44" y="14.5" width="12" height="3" rx="1.5" fill="#dc2626" stroke="#18181b" stroke-width="1.2"/>
      <path d="
        M 23.5 36
        C 23 21, 34 15, 50 15
        C 66 15, 77 21, 76.5 36
        C 71 27, 61 24, 50 24
        C 39 24, 29 27, 23.5 36 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  } else if (c.hair === 'sp_mad_scientist') {
    rawHair = `
      <path d="
        M 24.2 42
        L 13 38 L 19 31 L 10 23 L 22 21 L 19 13 L 33 21
        C 28 26, 25.5 34, 24.2 42 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="
        M 75.8 42
        L 87 38 L 81 31 L 90 23 L 78 21 L 81 13 L 67 21
        C 72 26, 74.5 34, 75.8 42 Z
      " fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M 48 16.5 Q 45 11 41 13 M 51 16.5 Q 55 10 58 13" fill="none" stroke="#18181b" stroke-width="1.6" stroke-linecap="round"/>
    `;
  } else if (c.hair === 'sp_mohawk') {
    rawHair = `
      <path d="M 43 26 L 38 6 L 46 11 L 50 3 L 54 11 L 62 6 L 57 26 Q 50 24 43 26 Z" fill="${c.hairColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/>
    `;
  }

  if (HATS_THAT_CLIP_HAIR.includes(c.hat)) {
    return `<g clip-path="url(#hatHairClip)">${rawHair}</g>`;
  }
  return rawHair;
}

function getPantsSvg(c) {
  if (c.pants === 'shorts_sp') {
    return `
      <rect x="32" y="86" width="14" height="7" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.5"/>
      <rect x="54" y="86" width="14" height="7" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.5"/>
      <path d="M 29 79 L 71 79 L 70 88 L 52 88 L 50 84 L 48 88 L 30 88 Z" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
    `;
  }
  if (c.pants === 'skirt_pleated') {
    return `
      <rect x="33" y="86" width="12" height="7" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.5"/>
      <rect x="55" y="86" width="12" height="7" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.5"/>
      <polygon points="30,79 70,79 74,88 26,88" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="40" y1="80" x2="38" y2="88" stroke="#18181b" stroke-width="1.3"/>
      <line x1="50" y1="80" x2="50" y2="88" stroke="#18181b" stroke-width="1.3"/>
      <line x1="60" y1="80" x2="62" y2="88" stroke="#18181b" stroke-width="1.3"/>
    `;
  }
  if (c.pants === 'pants_cargo') {
    return `
      <path d="M 29 79 L 71 79 L 70 93 L 30 93 Z" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="50" y1="83" x2="50" y2="93" stroke="#18181b" stroke-width="1.6"/>
      <rect x="28.5" y="84" width="6" height="6" rx="1" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.3"/>
      <rect x="65.5" y="84" width="6" height="6" rx="1" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.3"/>
    `;
  }
  if (c.pants === 'pants_ripped') {
    return `
      <path d="M 29 79 L 71 79 L 70 93 L 30 93 Z" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="50" y1="83" x2="50" y2="93" stroke="#18181b" stroke-width="1.6"/>
      <ellipse cx="38" cy="87" rx="4" ry="1.6" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.1"/>
      <ellipse cx="62" cy="88" rx="4" ry="1.6" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.1"/>
    `;
  }
  if (c.pants === 'pants_plain') {
    return `<path d="M 29 79 L 71 79 L 70 93 L 30 93 Z" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><line x1="50" y1="83" x2="50" y2="93" stroke="#18181b" stroke-width="1.6"/>`;
  }
  return `<path d="M 29 79 L 71 79 L 70 93 L 30 93 Z" fill="${c.pantsColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><line x1="50" y1="83" x2="50" y2="93" stroke="#18181b" stroke-width="1.6"/><path d="M 30 84 Q 37 85 38 80" fill="none" stroke="#94a3b8" stroke-width="1.3"/><path d="M 70 84 Q 63 85 62 80" fill="none" stroke="#94a3b8" stroke-width="1.3"/>`;
}

function getShoesSvg(c) {
  if (c.shoes === 'none') return '';
  if (c.shoes === 'shoes_sneakers') {
    return `<path d="M 27 94.5 C 31 90, 45 90, 49 94.5 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/><path d="M 51 94.5 C 55 90, 69 90, 73 94.5 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/><rect x="26" y="94" width="48" height="1.8" rx="0.9" fill="#ffffff" stroke="#18181b" stroke-width="1.1"/>`;
  }
  if (c.shoes === 'shoes_boots') {
    return `<path d="M 27 95 C 28 88.5, 47 88.5, 49 95 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.6"/><path d="M 51 95 C 53 88.5, 72 88.5, 73 95 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.6"/>`;
  }
  if (c.shoes === 'shoes_allstar') {
    return `
      <path d="M 27 94.5 C 30 89.5, 45 89.5, 49 94.5 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/>
      <path d="M 51 94.5 C 55 89.5, 70 89.5, 73 94.5 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/>
      <path d="M 27 94.5 C 29 91.5, 34 91.5, 35 94.5 Z" fill="#ffffff" stroke="#18181b" stroke-width="1"/>
      <path d="M 73 94.5 C 71 91.5, 66 91.5, 65 94.5 Z" fill="#ffffff" stroke="#18181b" stroke-width="1"/>
      <rect x="26" y="94" width="48" height="1.8" rx="0.8" fill="#ffffff" stroke="#18181b" stroke-width="1.1"/>
    `;
  }
  if (c.shoes === 'shoes_slippers') {
    return `
      <ellipse cx="38" cy="93.5" rx="11.5" ry="3.2" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/>
      <ellipse cx="62" cy="93.5" rx="11.5" ry="3.2" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/>
    `;
  }
  return `<path d="M 26 95 C 31 90.5, 45 90.5, 49.5 95 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/><path d="M 50.5 95 C 55 90.5, 69 90.5, 74 95 Z" fill="${c.shoeColor}" stroke="#18181b" stroke-width="1.5"/>`;
}

function getBodySvg(c) {
  const torsoOutline = `M 28 60 C 22 63, 19 71, 19 78 L 28 80 L 30 82 Q 50 86 70 82 L 72 80 L 81 78 C 81 71, 78 63, 72 60 Z`;
  if (c.body === 'shirt_raglan') {
    return `<path d="M 29 60 C 22 63, 19 71, 19 78 L 28 80 L 32 64 Z" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/><path d="M 71 60 C 78 63, 81 71, 81 78 L 72 80 L 68 64 Z" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/><path d="M 30 61 L 70 61 L 71 82 Q 50 86 29 82 Z" fill="${c.stripeColor === '#15803d' ? '#ffffff' : c.stripeColor}" stroke="#18181b" stroke-width="1.6" stroke-linejoin="round"/><path d="M 34 61 Q 50 69 66 61" fill="none" stroke="${c.bodyColor}" stroke-width="2.6" stroke-linecap="round"/>`;
  }
  if (c.body === 'jacket_zip') {
    return `<path d="${torsoOutline}" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><line x1="50" y1="63" x2="50" y2="84" stroke="#18181b" stroke-width="1.8"/><circle cx="47" cy="70" r="1.2" fill="#18181b"/><circle cx="47" cy="77" r="1.2" fill="#18181b"/>`;
  }
  if (c.body === 'hoodie_open') {
    return `<path d="${torsoOutline}" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><path d="M 36 76 L 64 76 L 62 83 L 38 83 Z" fill="rgba(0,0,0,0.2)"/><line x1="45" y1="64" x2="45" y2="74" stroke="${c.stripeColor}" stroke-width="1.8" stroke-linecap="round"/><line x1="55" y1="64" x2="55" y2="74" stroke="${c.stripeColor}" stroke-width="1.8" stroke-linecap="round"/>`;
  }
  if (c.body === 'lab_coat_sp') {
    return `<path d="${torsoOutline}" fill="#f8fafc" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><polygon points="42,62 58,62 54,84 46,84" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.2"/><polyline points="41,62 36,73 44,75 45,84" fill="none" stroke="#18181b" stroke-width="1.4"/><polyline points="59,62 64,73 56,75 55,84" fill="none" stroke="#18181b" stroke-width="1.4"/>`;
  }
  if (c.body === 'suit_tie_sp') {
    return `<path d="${torsoOutline}" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><polygon points="41,62 59,62 50,82" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/><polygon points="48,64 52,64 53,80 50,84 47,80" fill="${c.stripeColor}"/>`;
  }
  if (c.body === 'sweater_stripes') {
    return `
      <path d="${torsoOutline}" fill="${c.bodyColor}"/>
      <g clip-path="url(#spTorsoClip)">
        <rect x="15" y="65.5" width="70" height="4.2" fill="${c.stripeColor}" stroke="#18181b" stroke-width="0.7"/>
        <rect x="15" y="73.5" width="70" height="4.2" fill="${c.stripeColor}" stroke="#18181b" stroke-width="0.7"/>
      </g>
      <path d="${torsoOutline}" fill="none" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
    `;
  }
  if (c.body === 'overalls_sp') {
    return `<path d="${torsoOutline}" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><rect x="35" y="62" width="5" height="14" fill="#1d4ed8" stroke="#18181b" stroke-width="1.4"/><rect x="60" y="62" width="5" height="14" fill="#1d4ed8" stroke="#18181b" stroke-width="1.4"/><rect x="33" y="71" width="34" height="13" rx="1.5" fill="#1d4ed8" stroke="#18181b" stroke-width="1.5"/><circle cx="37.5" cy="74" r="1.5" fill="#fbbf24"/><circle cx="62.5" cy="74" r="1.5" fill="#fbbf24"/>`;
  }
  if (c.body === 'vampire_cloak') {
    return `<polygon points="18,54 82,54 75,78 25,78" fill="#7f1d1d" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><path d="${torsoOutline}" fill="#18181b" stroke="#18181b" stroke-width="1.8"/><polygon points="40,62 60,62 50,82" fill="${c.bodyColor}"/>`;
  }
  return `<path d="${torsoOutline}" fill="${c.bodyColor}" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>`;
}

function getHandsSvg(c) {
  if (c.gloves === 'none') {
    return `<g fill="${c.skinTone}" stroke="#18181b" stroke-width="1.5"><circle cx="22.5" cy="79.5" r="5.2"/><circle cx="26" cy="78.5" r="2.1"/><circle cx="77.5" cy="79.5" r="5.2"/><circle cx="74" cy="78.5" r="2.1"/></g>`;
  }
  if (c.gloves === 'glove_boxing') {
    return `<g fill="${c.gloveColor}" stroke="#18181b" stroke-width="1.6"><circle cx="22.5" cy="79.5" r="6.5"/><circle cx="26.5" cy="78" r="2.8"/><circle cx="77.5" cy="79.5" r="6.5"/><circle cx="73.5" cy="78" r="2.8"/></g>`;
  }
  if (c.gloves === 'glove_fingerless') {
    return `<g stroke="#18181b" stroke-width="1.5"><circle cx="22.5" cy="79.5" r="5.2" fill="${c.skinTone}"/><path d="M 17.5 78 A 5.2 5.2 0 0 1 27.5 78 L 27 81 L 18 81 Z" fill="${c.gloveColor}"/><circle cx="77.5" cy="79.5" r="5.2" fill="${c.skinTone}"/><path d="M 72.5 78 A 5.2 5.2 0 0 1 82.5 78 L 82 81 L 73 81 Z" fill="${c.gloveColor}"/></g>`;
  }
  const fillCol = c.gloves === 'glove_surgical' ? '#38bdf8' : c.gloveColor;
  return `<g fill="${fillCol}" stroke="#18181b" stroke-width="1.5"><circle cx="22.5" cy="79.5" r="5.3"/><circle cx="26" cy="78.5" r="2.2"/><circle cx="77.5" cy="79.5" r="5.3"/><circle cx="74" cy="78.5" r="2.2"/></g>`;
}

function getHeadSvg(c) {
  if (c.faceAcc === 'mask_pumpkin' || c.faceAcc === 'mask_ghostface') return '';
  return `<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="${c.skinTone}" stroke="#18181b" stroke-width="1.8"/>`;
}

function getEyesSvg(c) {
  if (FULL_FACE_MASKS.includes(c.faceAcc)) return '';
  if (c.eyes === 'sp_closed_happy') return `<path d="M 33 41 Q 41 33 48 41" fill="none" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/><path d="M 52 41 Q 59 33 67 41" fill="none" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>`;
  if (c.eyes === 'sp_wink') return `<ellipse cx="41.5" cy="40" rx="8.5" ry="10" transform="rotate(-4 41.5 40)" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/><circle cx="43.5" cy="40.5" r="2" fill="${c.eyeColor}"/><path d="M 52 41 Q 59 34 67 41" fill="none" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>`;
  if (c.eyes === 'sp_dead_x') return `<ellipse cx="41.5" cy="40" rx="8.5" ry="10" transform="rotate(-4 41.5 40)" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/><ellipse cx="58.5" cy="40" rx="8.5" ry="10" transform="rotate(4 58.5 40)" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/><path d="M 38 37 L 44 43 M 44 37 L 38 43" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/><path d="M 56 37 L 62 43 M 62 37 L 56 43" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/>`;

  let pupils = `<circle cx="44" cy="40.5" r="2" fill="${c.eyeColor}"/><circle cx="56" cy="40.5" r="2" fill="${c.eyeColor}"/>`;
  if (c.eyes === 'sp_look_side') pupils = `<circle cx="46.5" cy="40.5" r="2" fill="${c.eyeColor}"/><circle cx="61" cy="40.5" r="2" fill="${c.eyeColor}"/>`;
  else if (c.eyes === 'sp_big_anime') pupils = `<circle cx="43.5" cy="40.5" r="3.8" fill="${c.eyeColor}"/><circle cx="56.5" cy="40.5" r="3.8" fill="${c.eyeColor}"/><circle cx="42" cy="39" r="1.3" fill="#ffffff"/><circle cx="55" cy="39" r="1.3" fill="#ffffff"/>`;
  else if (c.eyes === 'sp_crazy') pupils = `<circle cx="41" cy="38.5" r="1.3" fill="${c.eyeColor}"/><circle cx="59" cy="42" r="2.8" fill="${c.eyeColor}"/>`;
  else if (c.eyes === 'sp_star') pupils = `<circle cx="43.5" cy="40.5" r="3.6" fill="${c.eyeColor}"/><circle cx="56.5" cy="40.5" r="3.6" fill="${c.eyeColor}"/><polygon points="43.5,38 44.3,40 46.3,40.5 44.3,41 43.5,43 42.7,41 40.7,40.5 42.7,40" fill="#facc15"/><polygon points="56.5,38 57.3,40 59.3,40.5 57.3,41 56.5,43 55.7,41 53.7,40.5 55.7,40" fill="#facc15"/>`;

  return `<g><ellipse cx="41.5" cy="40" rx="8.5" ry="10" transform="rotate(-4 41.5 40)" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/><ellipse cx="58.5" cy="40" rx="8.5" ry="10" transform="rotate(4 58.5 40)" fill="#ffffff" stroke="#18181b" stroke-width="1.2"/>${pupils}</g>`;
}

function getEyelidsSvg(c) {
  if (c.eyelids === 'none' || c.eyes === 'sp_closed_happy' || FULL_FACE_MASKS.includes(c.faceAcc)) return '';
  if (c.eyelids === 'lid_bottom_bags') return `<path d="M 34 49 Q 41.5 53 48.5 49" fill="none" stroke="#64748b" stroke-width="1.6" stroke-linecap="round"/><path d="M 51.5 49 Q 58.5 53 66 49" fill="none" stroke="#64748b" stroke-width="1.6" stroke-linecap="round"/>`;

  let lidContent = '';
  if (c.eyelids === 'lid_bored_blush') lidContent = `<rect x="30" y="28" width="40" height="9.5" fill="#e59882"/><line x1="30" y1="37.5" x2="70" y2="37.5" stroke="#18181b" stroke-width="1.3"/>`;
  else if (c.eyelids === 'lid_half_skin') lidContent = `<rect x="30" y="28" width="40" height="9.5" fill="${c.skinTone}"/><line x1="30" y1="37.5" x2="70" y2="37.5" stroke="#18181b" stroke-width="1.4"/>`;
  else if (c.eyelids === 'lid_sleepy') lidContent = `<rect x="30" y="28" width="40" height="12.5" fill="${c.skinTone}"/><line x1="30" y1="40.5" x2="70" y2="40.5" stroke="#18181b" stroke-width="1.5"/>`;
  else if (c.eyelids === 'lid_angry') lidContent = `<polygon points="30,28 50,40 70,28" fill="${c.skinTone}"/><polyline points="31,32 50,40 69,32" fill="none" stroke="#18181b" stroke-width="1.8"/>`;
  else if (c.eyelids === 'lid_sad') lidContent = `<polygon points="30,40 50,31 30,28" fill="${c.skinTone}"/><polygon points="70,40 50,31 70,28" fill="${c.skinTone}"/><line x1="31" y1="39.5" x2="49" y2="32" stroke="#18181b" stroke-width="1.6"/><line x1="69" y1="39.5" x2="51" y2="32" stroke="#18181b" stroke-width="1.6"/>`;
  else if (c.eyelids === 'lid_suspect') lidContent = `<rect x="30" y="28" width="40" height="9" fill="${c.skinTone}"/><rect x="30" y="45" width="40" height="7" fill="${c.skinTone}"/><line x1="30" y1="37" x2="70" y2="37" stroke="#18181b" stroke-width="1.4"/><line x1="30" y1="45" x2="70" y2="45" stroke="#18181b" stroke-width="1.4"/>`;

  return `<g clip-path="url(#spEyesClip)">${lidContent}</g>`;
}

function getEyebrowsSvg(c) {
  if (c.eyebrows === 'none' || FULL_FACE_MASKS.includes(c.faceAcc)) return '';
  if (c.eyebrows === 'brow_angry') return `<line x1="33" y1="29" x2="47" y2="34" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/><line x1="67" y1="29" x2="53" y2="34" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/>`;
  if (c.eyebrows === 'brow_worried') return `<line x1="33" y1="34" x2="46" y2="29" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/><line x1="67" y1="34" x2="54" y2="29" stroke="#18181b" stroke-width="2.2" stroke-linecap="round"/>`;
  if (c.eyebrows === 'brow_thick') return `<path d="M 33 30 Q 41 27 47 30" fill="none" stroke="${c.hairColor}" stroke-width="3.5" stroke-linecap="round"/><path d="M 53 30 Q 59 27 67 30" fill="none" stroke="${c.hairColor}" stroke-width="3.5" stroke-linecap="round"/>`;
  if (c.eyebrows === 'brow_raised') return `<path d="M 33 32 Q 41 30 47 32" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/><path d="M 53 28 Q 59 24 67 28" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>`;
  return `<path d="M 33 31 Q 41 27 47 31" fill="none" stroke="#18181b" stroke-width="1.9" stroke-linecap="round"/><path d="M 53 31 Q 59 27 67 31" fill="none" stroke="#18181b" stroke-width="1.9" stroke-linecap="round"/>`;
}

function getMouthSvg(c) {
  if (FULL_FACE_MASKS.includes(c.faceAcc) || c.faceAcc === 'acc_surgical_mask' || c.faceAcc === 'acc_plague_mask') return '';
  if (c.mouth === 'mouth_smile') return `<path d="M 45 55 Q 50 59 55 55" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>`;
  if (c.mouth === 'mouth_open_happy') return `<path d="M 43 53 L 57 53 C 57 60, 43 60, 43 53 Z" fill="#7f1d1d" stroke="#18181b" stroke-width="1.6"/><path d="M 46 57 Q 50 59.5 54 57" fill="#fb7185"/>`;
  if (c.mouth === 'mouth_smirk') return `<path d="M 45 56 Q 51 57 56 53" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>`;
  if (c.mouth === 'mouth_cat') return `<path d="M 44 55 Q 47 58 50 55 Q 53 58 56 55" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>`;
  if (c.mouth === 'mouth_surprised') return `<ellipse cx="50" cy="56" rx="3.2" ry="4" fill="#18181b"/>`;
  if (c.mouth === 'mouth_teeth_grit') return `<rect x="43" y="53" width="14" height="5" rx="2" fill="#ffffff" stroke="#18181b" stroke-width="1.5"/><line x1="43" y1="55.5" x2="57" y2="55.5" stroke="#18181b" stroke-width="1.2"/>`;
  if (c.mouth === 'mouth_tongue') return `<path d="M 45 54 Q 50 57 55 54" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/><path d="M 48 55 L 48 59 C 48 61, 52 61, 52 59 L 52 55 Z" fill="#fb7185" stroke="#18181b" stroke-width="1.3"/>`;
  if (c.mouth === 'mouth_fangs') return `<path d="M 44 55 Q 50 57 56 55" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/><polygon points="45.5,55.5 47,59.5 48.5,55.5" fill="#ffffff" stroke="#18181b" stroke-width="1"/><polygon points="51.5,55.5 53,59.5 54.5,55.5" fill="#ffffff" stroke="#18181b" stroke-width="1"/>`;
  if (c.mouth === 'mouth_drool') return `<path d="M 46 56 Q 50 54.5 54 56" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/><path d="M 52 56 L 52 61 C 52 62.5, 54 62.5, 54 61 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="0.8"/>`;
  return `<path d="M 46.5 55.5 Q 50 53.8 53.5 55.5" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>`;
}

function getFaceAccSvg(c) {
  if (c.faceAcc === 'none') return '';
  if (c.faceAcc === 'acc_blush') return `<ellipse cx="31" cy="47" rx="4.2" ry="2.2" fill="#fb7185" opacity="0.5"/><ellipse cx="69" cy="47" rx="4.2" ry="2.2" fill="#fb7185" opacity="0.5"/>`;
  if (c.faceAcc === 'acc_freckles') return `<g fill="#78350f" opacity="0.65"><circle cx="30" cy="46" r="0.9"/><circle cx="33" cy="47.5" r="0.9"/><circle cx="28.5" cy="48" r="0.9"/><circle cx="70" cy="46" r="0.9"/><circle cx="67" cy="47.5" r="0.9"/><circle cx="71.5" cy="48" r="0.9"/></g>`;
  if (c.faceAcc === 'acc_glasses_round') return `<circle cx="41.5" cy="40" r="9.5" fill="none" stroke="#18181b" stroke-width="2"/><circle cx="58.5" cy="40" r="9.5" fill="none" stroke="#18181b" stroke-width="2"/><line x1="49" y1="40" x2="51" y2="40" stroke="#18181b" stroke-width="2"/><line x1="24" y1="39" x2="32" y2="40" stroke="#18181b" stroke-width="1.8"/><line x1="68" y1="40" x2="76" y2="39" stroke="#18181b" stroke-width="1.8"/>`;
  if (c.faceAcc === 'acc_glasses_square') return `<rect x="31.5" y="32.5" width="18" height="14.5" rx="2" fill="none" stroke="#18181b" stroke-width="2"/><rect x="50.5" y="32.5" width="18" height="14.5" rx="2" fill="none" stroke="#18181b" stroke-width="2"/><line x1="24" y1="38" x2="31.5" y2="38" stroke="#18181b" stroke-width="1.8"/><line x1="68.5" y1="38" x2="76" y2="38" stroke="#18181b" stroke-width="1.8"/>`;
  if (c.faceAcc === 'acc_sunglasses') return `<rect x="31" y="33.5" width="18" height="13" rx="2.5" fill="#090d16" stroke="#18181b" stroke-width="1.8"/><rect x="51" y="33.5" width="18" height="13" rx="2.5" fill="#090d16" stroke="#18181b" stroke-width="1.8"/><line x1="49" y1="37.5" x2="51" y2="37.5" stroke="#f59e0b" stroke-width="2.2"/><line x1="34" y1="36.5" x2="40" y2="36.5" stroke="#ffffff" stroke-width="1.5" opacity="0.75"/><line x1="54" y1="36.5" x2="60" y2="36.5" stroke="#ffffff" stroke-width="1.5" opacity="0.75"/>`;
  if (c.faceAcc === 'acc_bandaid') return `<g transform="rotate(-12 63 48)"><rect x="56" y="45" width="13" height="5.5" rx="1.8" fill="#f5cbe1" stroke="#18181b" stroke-width="1.3"/><rect x="60.5" y="45" width="4" height="5.5" fill="#f8fafc" stroke="#18181b" stroke-width="0.9"/></g>`;
  if (c.faceAcc === 'acc_surgical_mask') return `<rect x="32" y="47" width="36" height="14.5" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/><line x1="24.5" y1="46" x2="32" y2="50" stroke="#f8fafc" stroke-width="1.8"/><line x1="75.5" y1="46" x2="68" y2="50" stroke="#f8fafc" stroke-width="1.8"/>`;
  if (c.faceAcc === 'acc_plague_mask') return `<path d="M 25 36 C 25 20, 72 20, 72 38 C 72 49, 59 54, 46 53 C 36 53, 29 57, 25 63 C 23 54, 26 46, 25 36 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.2" stroke-linejoin="round"/><circle cx="35" cy="38" r="6.5" fill="#090d16"/><circle cx="57" cy="38" r="7" fill="#090d16"/>`;

  if (c.faceAcc === 'mask_jason') {
    return `<line x1="24" y1="36" x2="76" y2="36" stroke="#18181b" stroke-width="3"/><ellipse cx="50" cy="41.5" rx="22.5" ry="22.5" fill="#fef3c7" stroke="#18181b" stroke-width="2"/><polygon points="50,23 45.5,31 54.5,31" fill="#dc2626"/><polygon points="32,48 39,46 36,51" fill="#dc2626"/><polygon points="68,48 61,46 64,51" fill="#dc2626"/><circle cx="40.5" cy="39.5" r="4.8" fill="#090d16"/><circle cx="59.5" cy="39.5" r="4.8" fill="#090d16"/><g fill="#451a03"><circle cx="46" cy="51" r="1.2"/><circle cx="54" cy="51" r="1.2"/><circle cx="46" cy="55.5" r="1.2"/><circle cx="54" cy="55.5" r="1.2"/><circle cx="50" cy="58.5" r="1.2"/></g>`;
  }

  // GHOSTFACE REDESENHADO (Exclusivo ADM): Mortalha preta detalhada + Máscara Scream esculpida com maçãs do rosto, queixo alongado, olhos caídos tristes e boca contínua de grito!
  if (c.faceAcc === 'mask_ghostface') {
    return `
      <!-- Mortalha Preta / Capuz com caimento nos ombros -->
      <path d="M 21 44 C 19 24, 31 12, 50 12 C 69 12, 81 24, 79 44 C 78 55, 73 64, 64 67 L 36 67 C 27 64, 22 55, 21 44 Z" fill="#141418" stroke="#090d16" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- Dobra interna do capuz -->
      <path d="M 25 43 C 24 26, 34 15, 50 15 C 66 15, 76 26, 75 43" fill="none" stroke="#27272a" stroke-width="1.5"/>
      <!-- Face Branca Esculpida (Têmporas -> Maçãs do rosto salientes -> Bochechas cavadas -> Queixo longo de grito) -->
      <path d="
        M 50 17
        C 63 17, 68 24, 67 32
        C 69.5 36, 69.5 41, 65 45
        C 61 49, 59 55, 57 60
        C 55 65, 45 65, 43 60
        C 41 55, 39 49, 35 45
        C 30.5 41, 30.5 36, 33 32
        C 32 24, 37 17, 50 17 Z
      " fill="#f8fafc" stroke="#090d16" stroke-width="2" stroke-linejoin="round"/>
      <!-- Sombras suaves das bochechas cavadas e têmporas -->
      <path d="M 34 42 C 38 46, 40 52, 42 58" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 66 42 C 62 46, 60 52, 58 58" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Sobrancelhas franzidas de angústia -->
      <path d="M 35 26 Q 41 23 46 26" fill="none" stroke="#cbd5e1" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M 65 26 Q 59 23 54 26" fill="none" stroke="#cbd5e1" stroke-width="1.6" stroke-linecap="round"/>
      <!-- Órbitas Oculares Caídas Características do Ghostface (Gotas inclinadas) -->
      <path d="M 46 31 C 44 26, 35 28, 34 35 C 33 41, 40 44, 45 39 C 47 37, 47 33, 46 31 Z" fill="#090d16"/>
      <path d="M 54 31 C 56 26, 65 28, 66 35 C 67 41, 60 44, 55 39 C 53 37, 53 33, 54 31 Z" fill="#090d16"/>
      <!-- Cavidade Nasal Dupla -->
      <path d="M 48.5 41 L 50 38.5 L 51.5 41 L 50 42.5 Z" fill="#090d16"/>
      <!-- Boca Alongada Contínua em "O" de Grito -->
      <path d="M 50 44.5 C 54.5 44.5, 56 50, 55 56 C 54 61, 46 61, 45 56 C 44 50, 45.5 44.5, 50 44.5 Z" fill="#090d16"/>
      <path d="M 47.5 47 C 47 52, 47.5 56, 50 58.5" fill="none" stroke="#27272a" stroke-width="1.2" stroke-linecap="round"/>
    `;
  }

  if (c.faceAcc === 'mask_freddy') {
    return `<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#b91c1c" stroke="#18181b" stroke-width="1.8"/><g stroke="#7f1d1d" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M 29 33 Q 35 35 32 41"/><path d="M 67 31 Q 72 37 66 43"/><path d="M 33 51 Q 41 48 44 54"/><path d="M 57 53 Q 64 49 69 54"/></g><ellipse cx="41.5" cy="40" rx="8" ry="9" fill="#fef08a" stroke="#18181b" stroke-width="1.4"/><ellipse cx="58.5" cy="40" rx="8" ry="9" fill="#fef08a" stroke="#18181b" stroke-width="1.4"/><polygon points="32,31 50,39 68,31 68,26 32,26" fill="#991b1b"/><polyline points="32,32 50,39 68,32" fill="none" stroke="#18181b" stroke-width="1.8"/><circle cx="43.5" cy="41" r="2.2" fill="#dc2626"/><circle cx="56.5" cy="41" r="2.2" fill="#dc2626"/><rect x="42" y="53" width="16" height="5" rx="2" fill="#fef08a" stroke="#18181b" stroke-width="1.5"/><line x1="42" y1="55.5" x2="58" y2="55.5" stroke="#18181b" stroke-width="1.2"/>`;
  }
  if (c.faceAcc === 'mask_myers') {
    return `<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#e2e8f0" stroke="#18181b" stroke-width="1.8"/><path d="M 35 46 Q 38 53 41 56" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/><path d="M 65 46 Q 62 53 59 56" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="40.5" cy="39.5" rx="5.5" ry="4" fill="#090d16"/><ellipse cx="59.5" cy="39.5" rx="5.5" ry="4" fill="#090d16"/><path d="M 34 33 Q 40.5 31 46 33" fill="none" stroke="#64748b" stroke-width="1.8" stroke-linecap="round"/><path d="M 54 33 Q 59.5 31 66 33" fill="none" stroke="#64748b" stroke-width="1.8" stroke-linecap="round"/><line x1="43" y1="55" x2="57" y2="55" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>`;
  }
  if (c.faceAcc === 'mask_skellington') {
    return `<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#f8fafc" stroke="#18181b" stroke-width="2"/><ellipse cx="40" cy="38.5" rx="6.8" ry="7.2" transform="rotate(-8 40 38.5)" fill="#090d16"/><ellipse cx="60" cy="38.5" rx="6.8" ry="7.2" transform="rotate(8 60 38.5)" fill="#090d16"/><path d="M 48 46 L 49.2 43 L 50 46 M 52 46 L 50.8 43 L 50 46" fill="#090d16"/><path d="M 29 50 Q 50 61 71 50" fill="none" stroke="#090d16" stroke-width="2" stroke-linecap="round"/><g stroke="#090d16" stroke-width="1.6" stroke-linecap="round"><line x1="34" y1="49" x2="33" y2="54"/><line x1="40" y1="51.5" x2="39.5" y2="56.5"/><line x1="46.5" y1="53" x2="46.5" y2="58"/><line x1="53.5" y1="53" x2="53.5" y2="58"/><line x1="60" y1="51.5" x2="60.5" y2="56.5"/><line x1="66" y1="49" x2="67" y2="54"/></g>`;
  }
  if (c.faceAcc === 'mask_pumpkin') {
    return `<path d="M 47 16 C 46 9, 52 7, 55 10 L 53 17 Z" fill="#15803d" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/><ellipse cx="50" cy="41" rx="27" ry="24.5" fill="#ea580c" stroke="#18181b" stroke-width="2"/><ellipse cx="50" cy="41" rx="19" ry="24.5" fill="#f97316" stroke="#c2410c" stroke-width="1.2"/><ellipse cx="50" cy="41" rx="9.5" ry="24.5" fill="#f97316" stroke="#c2410c" stroke-width="1.2"/><polygon points="39,30 32,41 45,41" fill="#fef08a" stroke="#18181b" stroke-width="1.5" stroke-linejoin="round"/><polygon points="61,30 55,41 68,41" fill="#fef08a" stroke="#18181b" stroke-width="1.5" stroke-linejoin="round"/><polygon points="48,43 52,43 50,47" fill="#fef08a" stroke="#18181b" stroke-width="1.2"/><polygon points="31,49 38,53 43,49 50,53 57,49 62,53 69,49 64,59 56,56 50,60 44,56 36,59" fill="#fef08a" stroke="#18181b" stroke-width="1.5" stroke-linejoin="round"/>`;
  }
  if (c.faceAcc === 'mask_zombie') {
    return `<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#84cc16" stroke="#18181b" stroke-width="1.8"/><path d="M 55 22 L 66 29" stroke="#18181b" stroke-width="2" stroke-linecap="round"/><line x1="57" y1="26" x2="60" y2="21" stroke="#18181b" stroke-width="1.5"/><line x1="61" y1="29" x2="64" y2="24" stroke="#18181b" stroke-width="1.5"/><ellipse cx="41.5" cy="40" rx="8.5" ry="10" fill="#fef08a" stroke="#18181b" stroke-width="1.4"/><circle cx="42" cy="40" r="2.2" fill="#dc2626"/><ellipse cx="58.5" cy="41" rx="7" ry="7" fill="#fef08a" stroke="#18181b" stroke-width="1.4"/><circle cx="58.5" cy="41" r="1.5" fill="#18181b"/><path d="M 40 53 L 60 53 C 60 60, 40 60, 40 53 Z" fill="#450a0a" stroke="#18181b" stroke-width="1.5"/><rect x="43" y="53" width="3.5" height="4" fill="#fef3c7" stroke="#18181b" stroke-width="1"/><rect x="49" y="53" width="3.5" height="4.5" fill="#fef3c7" stroke="#18181b" stroke-width="1"/><rect x="54.5" y="53" width="3" height="3.5" fill="#fef3c7" stroke="#18181b" stroke-width="1"/>`;
  }
  return '';
}

function getHatSvg(c) {
  if (c.hat === 'none') return '';
  if (c.hat === 'hat_beanie_pom') return `<path d="M 22 29 C 23 10, 77 10, 78 29 Z" fill="${c.hatColor}" stroke="#18181b" stroke-width="1.8"/><rect x="20" y="25" width="60" height="6" rx="3" fill="#dc2626" stroke="#18181b" stroke-width="1.6"/><circle cx="50" cy="9" r="5.8" fill="#dc2626" stroke="#18181b" stroke-width="1.6"/>`;
  if (c.hat === 'hat_ushanka') return `<path d="M 21 28 L 21 46 C 21 51, 28 51, 28 44 L 28 28 Z" fill="${c.hatColor}" stroke="#18181b" stroke-width="1.6"/><path d="M 79 28 L 79 46 C 79 51, 72 51, 72 44 L 72 28 Z" fill="${c.hatColor}" stroke="#18181b" stroke-width="1.6"/><rect x="20" y="12" width="60" height="18" rx="5" fill="${c.hatColor}" stroke="#18181b" stroke-width="1.8"/><rect x="26" y="18" width="48" height="10" rx="2" fill="rgba(0,0,0,0.28)" stroke="#18181b" stroke-width="1.4"/>`;
  if (c.hat === 'hat_capelo') return `<polygon points="50,5 14,17 50,28 86,17" fill="#18181b" stroke="#f59e0b" stroke-width="2"/><line x1="76" y1="19" x2="80" y2="34" stroke="#f59e0b" stroke-width="2.2"/><circle cx="80" cy="35" r="2.5" fill="#f59e0b"/>`;
  if (c.hat === 'hat_tophat_doc') return `<ellipse cx="50" cy="23" rx="33" ry="5.5" fill="#27272a" stroke="#090d16" stroke-width="2"/><path d="M 33 22 L 35 4 L 65 4 L 67 22 Z" fill="#3f3f46" stroke="#090d16" stroke-width="2"/><rect x="34" y="16" width="32" height="4" fill="${c.hatColor}"/>`;
  if (c.hat === 'hat_witch') return `<ellipse cx="50" cy="23" rx="34" ry="5.5" fill="${c.hatColor}" stroke="#18181b" stroke-width="2"/><polygon points="50,2 32,23 68,23" fill="${c.hatColor}" stroke="#18181b" stroke-width="2"/>`;
  if (c.hat === 'hat_crown') return `<polygon points="28,24 32,8 43,17 50,5 57,17 68,8 72,24" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>`;
  if (c.hat === 'hat_horns') return `<path d="M 30 22 Q 20 7 35 10" stroke="#dc2626" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M 70 22 Q 80 7 65 10" stroke="#dc2626" stroke-width="5.5" fill="none" stroke-linecap="round"/>`;
  if (c.hat === 'hat_halo') return `<ellipse cx="50" cy="7" rx="18" ry="4" fill="none" stroke="#facc15" stroke-width="3"/>`;
  return '';
}

// =========================================================================
// RENDERIZADOR PRINCIPAL DO AVATAR (PRODUÇÃO)
// =========================================================================
window.renderAvatarSvg = function(rawConfig) {
  const c = window.normalizeAvatarConfig(rawConfig);

  return `
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" class="w-full h-full select-none">
      <defs>
        <clipPath id="spEyesClip">
          <ellipse cx="41.5" cy="40" rx="8.5" ry="10" transform="rotate(-4 41.5 40)"/>
          <ellipse cx="58.5" cy="40" rx="8.5" ry="10" transform="rotate(4 58.5 40)"/>
        </clipPath>
        <clipPath id="hatHairClip">
          <rect x="0" y="25" width="100" height="80"/>
        </clipPath>
        <clipPath id="spTorsoClip">
          <path d="M 28 60 C 22 63, 19 71, 19 78 L 28 80 L 30 82 Q 50 86 70 82 L 72 80 L 81 78 C 81 71, 78 63, 72 60 Z"/>
        </clipPath>
      </defs>
      <rect width="100" height="100" fill="${c.bgColor}"/>
      <circle cx="50" cy="50" r="42" fill="#ffffff" opacity="0.16"/>
      <line x1="22" y1="95.5" x2="78" y2="95.5" stroke="#18181b" stroke-width="1.2"/>

      ${getBackHairSvg(c)}
      ${getPantsSvg(c)}
      ${getShoesSvg(c)}
      ${getBodySvg(c)}
      ${getHandsSvg(c)}
      ${getHeadSvg(c)}
      ${getEyesSvg(c)}
      ${getEyelidsSvg(c)}
      ${getEyebrowsSvg(c)}
      ${getMouthSvg(c)}
      ${getFrontHairSvg(c)}
      ${getFaceAccSvg(c)}
      ${getHatSvg(c)}
    </svg>
  `;
};

// =========================================================================
// MINI-PREVIEW ISOLADO PROPORCIONAL 1:1 PARA OS CARDS DA LOJA
// =========================================================================
window.renderItemMiniPreviewSvg = function(catKey, itemId, rawAvatar) {
  if (itemId === 'none') {
    return `
      <svg viewBox="0 0 100 100" class="w-full h-full bg-white">
        <line x1="28" y1="28" x2="72" y2="72" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
        <line x1="72" y1="28" x2="28" y2="72" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `;
  }
  const c = window.normalizeAvatarConfig(rawAvatar);
  const temp = { ...c, [catKey]: itemId, hat: 'none', faceAcc: catKey === 'faceAcc' ? itemId : 'none' };
  const defs = `<defs><clipPath id="spEyesClip"><ellipse cx="41.5" cy="40" rx="8.5" ry="10"/><ellipse cx="58.5" cy="40" rx="8.5" ry="10"/></clipPath><clipPath id="spTorsoClip"><path d="M 28 60 C 22 63, 19 71, 19 78 L 28 80 L 30 82 Q 50 86 70 82 L 72 80 L 81 78 C 81 71, 78 63, 72 60 Z"/></clipPath></defs>`;

  if (catKey === 'hair') return `<svg viewBox="10 0 80 80" class="w-full h-full bg-white">${getBackHairSvg(temp)}<ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#f1f5f9" stroke="#cbd5e1" stroke-dasharray="3,2"/>${getFrontHairSvg(temp)}</svg>`;
  if (catKey === 'faceAcc') return `<svg viewBox="16 7 68 68" class="w-full h-full bg-white"><ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#f8fafc" stroke="#cbd5e1"/>${getFaceAccSvg(temp)}</svg>`;
  if (catKey === 'body') return `<svg viewBox="14 48 72 48" class="w-full h-full bg-white">${defs}${getBodySvg(temp)}</svg>`;
  if (catKey === 'hat') return `<svg viewBox="10 0 80 65" class="w-full h-full bg-white"><ellipse cx="50" cy="41" rx="26" ry="24.5" fill="#f1f5f9" stroke="#cbd5e1" stroke-dasharray="3,2"/>${getHatSvg({ ...c, hat: itemId })}</svg>`;
  if (catKey === 'eyes') return `<svg viewBox="26 22 48 38" class="w-full h-full bg-slate-100">${getEyesSvg(temp)}</svg>`;
  if (catKey === 'eyelids') return `<svg viewBox="26 22 48 38" class="w-full h-full bg-white">${defs}<ellipse cx="41.5" cy="40" rx="8.5" ry="10" fill="#f8fafc" stroke="#cbd5e1"/><ellipse cx="58.5" cy="40" rx="8.5" ry="10" fill="#f8fafc" stroke="#cbd5e1"/>${getEyelidsSvg(temp)}</svg>`;
  if (catKey === 'eyebrows') return `<svg viewBox="26 16 48 34" class="w-full h-full bg-white">${getEyebrowsSvg(temp)}</svg>`;
  if (catKey === 'mouth') return `<svg viewBox="32 40 36 32" class="w-full h-full bg-white">${getMouthSvg(temp)}</svg>`;
  if (catKey === 'gloves') return `<svg viewBox="12 58 76 42" class="w-full h-full bg-white">${getHandsSvg(temp)}</svg>`;
  if (catKey === 'pants') return `<svg viewBox="22 66 56 36" class="w-full h-full bg-white">${getPantsSvg(temp)}</svg>`;
  if (catKey === 'shoes') return `<svg viewBox="22 72 56 30" class="w-full h-full bg-white"><line x1="22" y1="95.5" x2="78" y2="95.5" stroke="#cbd5e1" stroke-width="1"/>${getShoesSvg(temp)}</svg>`;
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
        <path d="M 25 38 C 25 22, 72 22, 72 40 C 72 51, 59 56, 46 55 C 36 55, 29 59, 25 65 C 23 56, 26 48, 25 36 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.8"/>
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
// CONTROLE DO ATELIÊ COM TRAVA ANTI-EXPLOIT & EXCLUSIVIDADE ADM
// =========================================================================
let activeStudioCategory = 'hair';
let activeStudioColorKey = 'hairColor';
let activeStudioColorLabel = 'Cabelo';
let studioPreviewAvatar = null;

const STUDIO_CATEGORY_META = {
  hair: { colorKey: 'hairColor', colorLabel: 'Cabelo' },
  faceAcc: { colorKey: 'skinTone', colorLabel: 'Pele' },
  body: { colorKey: 'bodyColor', colorLabel: 'Blusa' },
  hat: { colorKey: 'hatColor', colorLabel: 'Chapéu' },
  eyes: { colorKey: 'eyeColor', colorLabel: 'Olhos' },
  eyelids: { colorKey: 'skinTone', colorLabel: 'Pele' },
  eyebrows: { colorKey: 'hairColor', colorLabel: 'Cabelo' },
  mouth: { colorKey: 'skinTone', colorLabel: 'Pele' },
  gloves: { colorKey: 'gloveColor', colorLabel: 'Luvas' },
  pants: { colorKey: 'pantsColor', colorLabel: 'Calça' },
  shoes: { colorKey: 'shoeColor', colorLabel: 'Sapatos' }
};

function getLockedPreviewedItems() {
  if (!studioPreviewAvatar) return [];
  const lockedList = [];
  const categories = Object.keys(window.AVATAR_CATALOG);

  categories.forEach(cat => {
    const equippedId = studioPreviewAvatar[cat];
    if (!equippedId) return;
    const catalogArr = window.AVATAR_CATALOG[cat] || [];
    const itemObj = catalogArr.find(i => i.id === equippedId);
    if (itemObj && !window.isAvatarItemUnlocked(itemObj)) {
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

window.setStudioColorPalette = function(colorKey, label) {
  activeStudioColorKey = colorKey;
  activeStudioColorLabel = label;
  renderSideColorSwatches();
};

window.randomizeAvatarPicrew = function() {
  const keys = Object.keys(window.AVATAR_CATALOG);
  keys.forEach(k => {
    const unlockedPool = (window.AVATAR_CATALOG[k] || []).filter(i => window.isAvatarItemUnlocked(i));
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
  const hasAdminLocked = lockedItems.some(it => it.adminOnly);

  if (lockedItems.length > 0) {
    tryBadge.classList.remove('hidden');
    btnSave.classList.add('hidden');
    btnBuy.classList.remove('hidden');

    if (hasAdminLocked) {
      tryBadge.textContent = `👑 Exclusivo do Administrador`;
      btnBuy.innerHTML = `<i class="fa-solid fa-lock"></i> Item Exclusivo ADM (Não Comprável)`;
      btnBuy.disabled = true;
      btnBuy.classList.add('opacity-60', 'cursor-not-allowed');
    } else {
      const totalCost = lockedItems.reduce((acc, it) => acc + it.cost, 0);
      const names = lockedItems.map(it => it.name).join(' + ');
      btnBuy.disabled = false;
      btnBuy.classList.remove('opacity-60', 'cursor-not-allowed');

      tryBadge.textContent = lockedItems.length === 1
        ? `👀 Testando: ${lockedItems[0].name}`
        : `👀 Testando ${lockedItems.length} itens (${totalCost} 🧪)`;

      btnBuy.innerHTML = lockedItems.length === 1
        ? `<i class="fa-solid fa-cart-shopping"></i> Desbloquear ${lockedItems[0].name} (${totalCost} 🧪)`
        : `<i class="fa-solid fa-cart-shopping"></i> Desbloquear ${lockedItems.length} Itens (${totalCost} 🧪)`;
      btnBuy.title = names;
    }
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
    const unlocked = window.isAvatarItemUnlocked(c);
    const active = studioPreviewAvatar.bgColor === c.id;
    const btn = document.createElement('button');
    btn.className = `w-7 h-7 rounded-lg border-2 transition transform hover:scale-110 flex items-center justify-center text-[9px] shrink-0 ${active ? 'border-white ring-2 ring-emerald-400 scale-110' : 'border-slate-700'}`;
    btn.style.backgroundColor = c.id;
    btn.title = unlocked ? c.name : `${c.name} (${c.cost} 🧪)`;
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
  const dualToggle = document.getElementById('studioShirtDualToggle');
  ctxContainer.innerHTML = '';

  ctxLabel.textContent = activeStudioColorLabel;

  // Exibe os botões [1. Blusa] [2. Listras] quando na aba de Blusas
  if (dualToggle) {
    if (activeStudioCategory === 'body' || activeStudioColorKey === 'bodyColor' || activeStudioColorKey === 'stripeColor') {
      dualToggle.classList.remove('hidden');
      dualToggle.classList.add('flex');
      const b1 = document.getElementById('btnStudioSubBody');
      const b2 = document.getElementById('btnStudioSubStripe');
      if (b1) b1.className = `text-[9px] font-extrabold px-1.5 py-0.5 rounded transition ${activeStudioColorKey === 'bodyColor' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`;
      if (b2) b2.className = `text-[9px] font-extrabold px-1.5 py-0.5 rounded transition ${activeStudioColorKey === 'stripeColor' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`;
    } else {
      dualToggle.classList.add('hidden');
      dualToggle.classList.remove('flex');
    }
  }

  (window.AVATAR_CATALOG[activeStudioColorKey] || []).forEach(c => {
    const unlocked = window.isAvatarItemUnlocked(c);
    const active = studioPreviewAvatar[activeStudioColorKey] === c.id;
    const btn = document.createElement('button');
    btn.className = `w-7 h-7 rounded-lg border-2 transition transform hover:scale-110 flex items-center justify-center text-[9px] shrink-0 ${active ? 'border-white ring-2 ring-purple-400 scale-110' : 'border-slate-700'}`;
    btn.style.backgroundColor = c.id;
    btn.title = unlocked ? c.name : `${c.name} (${c.cost} 🧪)`;
    btn.innerHTML = unlocked ? '' : '🔒';
    btn.onclick = () => {
      studioPreviewAvatar[activeStudioColorKey] = c.id;
      window.playTone(520, 'sine', 0.04);
      refreshStudioStage();
      renderStudioCategoryItems();
    };
    ctxContainer.appendChild(btn);
  });
}

window.selectStudioCategory = function(catKey) {
  activeStudioCategory = catKey;
  const meta = STUDIO_CATEGORY_META[catKey];
  if (meta) {
    activeStudioColorKey = meta.colorKey;
    activeStudioColorLabel = meta.colorLabel;
  }

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
    const isUnlocked = window.isAvatarItemUnlocked(item);
    const isSelected = studioPreviewAvatar[activeStudioCategory] === item.id;

    const card = document.createElement('button');
    card.className = `btn-3d h-[134px] p-2.5 rounded-2xl flex flex-col items-center justify-between gap-1 text-center border-2 ${isSelected ? 'border-pink-500 bg-pink-950/30' : 'border-slate-700 bg-slate-950'} text-slate-100`;

    const miniSvg = window.renderItemMiniPreviewSvg(activeStudioCategory, item.id, studioPreviewAvatar);

    let badgeHtml = '';
    if (item.adminOnly) {
      badgeHtml = isUnlocked
        ? `<div class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-400/40">👑 ADM</div>`
        : `<div class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">👑 Só ADM</div>`;
    } else {
      badgeHtml = `
        <div class="text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isUnlocked ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
          ${isUnlocked ? 'Liberado' : `${item.cost} 🧪`}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="w-16 h-16 rounded-xl overflow-hidden border-2 ${isSelected ? 'border-pink-400' : 'border-slate-700'} shadow-inner relative bg-white shrink-0">
        ${miniSvg}
        ${!isUnlocked ? `<span class="absolute top-0.5 right-0.5 bg-slate-900/90 text-amber-300 text-[10px] px-1 rounded">${item.adminOnly ? '👑' : '🔒'}</span>` : ''}
      </div>
      <div class="text-[11px] font-bold leading-tight line-clamp-1 w-full">${item.name}</div>
      ${badgeHtml}
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

  if (lockedItems.some(it => it.adminOnly) && !window.isCurrentUserAdmin) {
    window.soundError();
    alert('A máscara Ghostface é uma insígnia exclusiva do Administrador (rphsaraiva@gmail.com) e não está à venda!');
    return;
  }

  const totalCost = lockedItems.reduce((acc, it) => acc + it.cost, 0);
  if (window.userState.coins < totalCost) {
    window.soundError();
    alert(`Moedas insuficientes! Você precisa de ${totalCost} 🧪 (seu saldo atual: ${window.userState.coins} 🧪). Conclua mais lições na Trilha para ganhar moedas!`);
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
    alert(`Você ainda está testando itens bloqueados (${names}). Desbloqueie-os primeiro ou volte para um item liberado!`);
    refreshStudioStage();
    return;
  }

  window.userState.avatar = JSON.parse(JSON.stringify(studioPreviewAvatar));
  window.saveUserState();
  window.soundSuccess();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
  window.closeAvatarStudio();
};