// =========================================================================
// js/avatar_engine.js — Motor SVG do Avatar, Mascote Único "Doc" e Loja Segura
// =========================================================================

window.renderAvatarSvg = function(rawConfig) {
  const config = rawConfig || {};
  const bg = config.bgColor || '#1e1b4b';
  const cloth = config.bodyColor || '#16a34a';
  const skin = config.skinTone || '#f9d4b8';
  const hColor = config.hairColor || '#1e293b';
  const eColor = config.eyeColor || '#0f172a';

  const legacyMap = {
    'human_short': 'style_short',
    'duo_boy_short': 'style_short',
    'duo_girl_bob': 'style_bob',
    'duo_girl_long': 'style_long',
    'human_long': 'style_long',
    'duo_boy_curly': 'style_curly',
    'human_curly': 'style_curly',
    'duo_girl_bun': 'style_bun',
    'duo_spiky': 'style_spiky',
    'human_spiky': 'style_spiky'
  };

  const headId = legacyMap[config.head] || config.head || 'style_short';
  const eyesId = config.eyes || 'happy';
  const mouthId = config.mouth || 'smile';
  const hatId = config.hat || 'none';
  const bodyId = config.body || 'hoodie';

  const neckLayer = `
    <rect x="42" y="60" width="16" height="19" rx="6" fill="${skin}" stroke="#0f172a" stroke-width="2.4"/>
    <path d="M 42 66 Q 50 71 58 66" fill="rgba(0,0,0,0.14)"/>
  `;

  const baseTorsoPath = `M 16 100 L 18 82 C 19 72, 31 69, 42 69 L 58 69 C 69 69, 81 72, 82 82 L 84 100 Z`;
  let backCapeLayer = '';
  let bodyLayer = '';

  if (bodyId === 'tshirt') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="${cloth}" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 39 69 Q 50 79 61 69 Z" fill="${skin}" stroke="#0f172a" stroke-width="2.2"/>
      <path d="M 37 69 Q 50 82 63 69" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
      <line x1="28" y1="84" x2="28" y2="100" stroke="#0f172a" stroke-width="2" opacity="0.35"/>
      <line x1="72" y1="84" x2="72" y2="100" stroke="#0f172a" stroke-width="2" opacity="0.35"/>
    `;
  } else if (bodyId === 'suit') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="${cloth}" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="39,69 61,69 50,96" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
      <polygon points="48,72 52,72 53.5,94 50,99 46.5,94" fill="#dc2626" stroke="#0f172a" stroke-width="1.2"/>
      <polygon points="39,69 32,83 45,88" fill="${cloth}" stroke="#0f172a" stroke-width="2"/>
      <polygon points="61,69 68,83 55,88" fill="${cloth}" stroke="#0f172a" stroke-width="2"/>
    `;
  } else if (bodyId === 'lab_coat') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="#f8fafc" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="40,69 60,69 50,100" fill="${cloth}" stroke="#0f172a" stroke-width="1.8"/>
      <polygon points="40,69 31,84 44,91 46,100 38,100" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
      <polygon points="60,69 69,84 56,91 54,100 62,100" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
      <path d="M 35 72 C 33 84, 42 88, 42 93" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="42" cy="94" r="3" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
    `;
  } else if (bodyId === 'slasher_jacket') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="#334155" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="41,69 59,69 55,100 45,100" fill="${cloth}" stroke="#0f172a" stroke-width="1.8"/>
      <polygon points="41,69 31,79 39,85" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <polygon points="59,69 69,79 61,85" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <line x1="44" y1="74" x2="44" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="2,2"/>
      <line x1="56" y1="74" x2="56" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="2,2"/>
    `;
  } else if (bodyId === 'freddy_sweater') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="${cloth}" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 20 79 L 80 79 L 81 85 L 19 85 Z" fill="#14532d"/>
      <path d="M 18 90 L 82 90 L 83 96 L 17 96 Z" fill="#14532d"/>
      <path d="M 39 69 Q 50 76 61 69" fill="none" stroke="#0f172a" stroke-width="3"/>
    `;
  } else if (bodyId === 'vampire_cape') {
    backCapeLayer = `<polygon points="16,54 84,54 76,78 24,78" fill="#991b1b" stroke="#0f172a" stroke-width="2.5"/>`;
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="#0f172a" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="38,69 62,69 50,94" fill="${cloth}" stroke="#0f172a" stroke-width="2"/>
      <circle cx="50" cy="76" r="3" fill="#fbbf24" stroke="#0f172a" stroke-width="1.5"/>
    `;
  } else if (bodyId === 'overalls') {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="${cloth}" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 39 69 Q 50 76 61 69 Z" fill="${skin}" stroke="#0f172a" stroke-width="2"/>
      <rect x="33" y="70" width="6" height="16" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>
      <rect x="61" y="70" width="6" height="16" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>
      <rect x="32" y="81" width="36" height="19" rx="2" fill="#1d4ed8" stroke="#0f172a" stroke-width="2.2"/>
      <circle cx="36" cy="84" r="2" fill="#fbbf24"/>
      <circle cx="64" cy="84" r="2" fill="#fbbf24"/>
    `;
  } else {
    bodyLayer = `
      <path d="${baseTorsoPath}" fill="${cloth}" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 34 69 C 34 78, 66 78, 66 69" fill="${cloth}" stroke="#0f172a" stroke-width="2.4"/>
      <path d="M 40 69 Q 50 76 60 69 Z" fill="#0f172a"/>
      <line x1="44" y1="74" x2="44" y2="86" stroke="#f8fafc" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="56" y1="74" x2="56" y2="86" stroke="#f8fafc" stroke-width="2.4" stroke-linecap="round"/>
    `;
  }

  let eyesLayer = '';
  if (eyesId === 'confident') {
    eyesLayer = `
      <ellipse cx="40" cy="45" rx="3.8" ry="4.2" fill="${eColor}"/>
      <ellipse cx="60" cy="45" rx="3.8" ry="4.2" fill="${eColor}"/>
      <circle cx="39" cy="43.5" r="1.4" fill="#ffffff"/>
      <circle cx="59" cy="43.5" r="1.4" fill="#ffffff"/>
      <line x1="34" y1="38.5" x2="45" y2="40.5" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="66" y1="38.5" x2="55" y2="40.5" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"/>
    `;
  } else if (eyesId === 'wink') {
    eyesLayer = `
      <ellipse cx="40" cy="45" rx="4" ry="4.6" fill="${eColor}"/>
      <circle cx="38.5" cy="43.5" r="1.5" fill="#ffffff"/>
      <path d="M 55 45 Q 60 40 65 45" stroke="#0f172a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    `;
  } else if (eyesId === 'glasses') {
    eyesLayer = `
      <circle cx="40" cy="45" r="6.5" fill="none" stroke="#0f172a" stroke-width="2.4"/>
      <circle cx="60" cy="45" r="6.5" fill="none" stroke="#0f172a" stroke-width="2.4"/>
      <line x1="46.5" y1="45" x2="53.5" y2="45" stroke="#0f172a" stroke-width="2.4"/>
      <circle cx="40" cy="45" r="3.2" fill="${eColor}"/>
      <circle cx="60" cy="45" r="3.2" fill="${eColor}"/>
    `;
  } else if (eyesId === 'sunglasses') {
    eyesLayer = `
      <rect x="32" y="40" width="16" height="9" rx="3" fill="#0f172a"/>
      <rect x="52" y="40" width="16" height="9" rx="3" fill="#0f172a"/>
      <line x1="48" y1="43" x2="52" y2="43" stroke="#f59e0b" stroke-width="2.5"/>
      <line x1="34" y1="42" x2="39" y2="42" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="54" y1="42" x2="59" y2="42" stroke="#ffffff" stroke-width="1.5"/>
    `;
  } else if (eyesId === 'hypno') {
    eyesLayer = `
      <circle cx="40" cy="45" r="5.2" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
      <circle cx="60" cy="45" r="5.2" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
      <circle cx="40" cy="45" r="2.4" fill="${eColor}"/>
      <circle cx="60" cy="45" r="2.4" fill="${eColor}"/>
    `;
  } else if (eyesId === 'glow_red') {
    eyesLayer = `
      <ellipse cx="40" cy="45" rx="4.2" ry="3.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5"/>
      <ellipse cx="60" cy="45" rx="4.2" ry="3.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5"/>
      <circle cx="39" cy="44" r="1.4" fill="#fecaca"/>
      <circle cx="59" cy="44" r="1.4" fill="#fecaca"/>
    `;
  } else if (eyesId === 'anime_star') {
    eyesLayer = `
      <ellipse cx="40" cy="45" rx="4.5" ry="5" fill="${eColor}"/>
      <ellipse cx="60" cy="45" rx="4.5" ry="5" fill="${eColor}"/>
      <circle cx="40" cy="45" r="2" fill="#facc15"/>
      <circle cx="60" cy="45" r="2" fill="#facc15"/>
    `;
  } else {
    eyesLayer = `
      <ellipse cx="40" cy="45" rx="4" ry="4.6" fill="${eColor}"/>
      <ellipse cx="60" cy="45" rx="4" ry="4.6" fill="${eColor}"/>
      <circle cx="38.5" cy="43.5" r="1.6" fill="#ffffff"/>
      <circle cx="58.5" cy="43.5" r="1.6" fill="#ffffff"/>
      <path d="M 35 38 Q 40 35.5 45 38" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M 55 38 Q 60 35.5 65 38" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round"/>
    `;
  }

  let mouthLayer = '';
  if (mouthId === 'smirk') {
    mouthLayer = `<path d="M 44 55 Q 51 57 57 52" stroke="#0f172a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  } else if (mouthId === 'cat') {
    mouthLayer = `<path d="M 43 55 Q 46.5 59 50 55 Q 53.5 59 57 55" stroke="#0f172a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  } else if (mouthId === 'fangs') {
    mouthLayer = `
      <path d="M 43 54 Q 50 58 57 54" stroke="#0f172a" stroke-width="2.2" fill="none"/>
      <polygon points="44.5,54.5 46.5,60 48.5,54.5" fill="#ffffff" stroke="#0f172a" stroke-width="1"/>
      <polygon points="51.5,54.5 53.5,60 55.5,54.5" fill="#ffffff" stroke="#0f172a" stroke-width="1"/>
    `;
  } else if (mouthId === 'surprised') {
    mouthLayer = `<circle cx="50" cy="56" r="3.6" fill="#7f1d1d" stroke="#0f172a" stroke-width="2"/>`;
  } else if (mouthId === 'mustache') {
    mouthLayer = `<path d="M 38 55 Q 44 50 50 54 Q 56 50 62 55 Q 56 58 50 55 Q 44 58 38 55 Z" fill="${hColor}" stroke="#0f172a" stroke-width="1.5"/>`;
  } else if (mouthId === 'tongue') {
    mouthLayer = `
      <path d="M 43 54 Q 50 59 57 54" stroke="#0f172a" stroke-width="2.2" fill="none"/>
      <path d="M 47 55 L 47 60 C 47 63, 53 63, 53 60 L 53 55 Z" fill="#fb7185" stroke="#0f172a" stroke-width="1.5"/>
    `;
  } else if (mouthId === 'mask_surgical') {
    mouthLayer = `
      <rect x="35" y="49" width="30" height="14" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>
      <line x1="29" y1="50" x2="35" y2="52" stroke="#f8fafc" stroke-width="2"/>
      <line x1="71" y1="50" x2="65" y2="52" stroke="#f8fafc" stroke-width="2"/>
    `;
  } else {
    mouthLayer = `
      <path d="M 43 53.5 Q 50 61.5 57 53.5 Z" fill="#991b1b" stroke="#0f172a" stroke-width="1.8"/>
      <path d="M 46 57 Q 50 60 54 57" fill="#fb7185"/>
    `;
  }

  const baseFace = `
    <circle cx="28" cy="46" r="4.5" fill="${skin}" stroke="#0f172a" stroke-width="2.2"/>
    <circle cx="72" cy="46" r="4.5" fill="${skin}" stroke="#0f172a" stroke-width="2.2"/>
    <rect x="29" y="23" width="42" height="41" rx="18" fill="${skin}" stroke="#0f172a" stroke-width="2.5"/>
    <ellipse cx="35" cy="49" rx="3.2" ry="2" fill="#f43f5e" opacity="0.32"/>
    <ellipse cx="65" cy="49" rx="3.2" ry="2" fill="#f43f5e" opacity="0.32"/>
    ${eyesLayer}
    ${mouthLayer}
  `;

  let backHairLayer = '';
  let frontHeadLayer = '';

  if (headId === 'style_bob') {
    backHairLayer = `<path d="M 24 36 C 24 16, 76 16, 76 36 L 77 58 C 77 63, 70 65, 66 63 L 34 63 C 30 65, 23 63, 23 58 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.4"/>`;
    frontHeadLayer = `
      ${baseFace}
      <path d="M 28 35 C 34 21, 66 21, 72 35 C 62 27, 38 27, 28 35 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'style_long') {
    backHairLayer = `<path d="M 23 36 C 23 14, 77 14, 77 36 L 80 74 C 80 79, 71 80, 67 75 L 33 75 C 29 80, 20 79, 20 74 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.4"/>`;
    frontHeadLayer = `
      ${baseFace}
      <path d="M 28 36 C 32 19, 68 19, 72 36 C 64 25, 54 26, 50 31 C 46 26, 36 25, 28 36 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'style_curly') {
    backHairLayer = `
      <circle cx="33" cy="24" r="10" fill="${hColor}" stroke="#0f172a" stroke-width="2"/>
      <circle cx="50" cy="19" r="12" fill="${hColor}" stroke="#0f172a" stroke-width="2"/>
      <circle cx="67" cy="24" r="10" fill="${hColor}" stroke="#0f172a" stroke-width="2"/>
    `;
    frontHeadLayer = `${baseFace}`;
  } else if (headId === 'style_bun') {
    backHairLayer = `
      <circle cx="30" cy="19" r="8.5" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
      <circle cx="70" cy="19" r="8.5" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
    frontHeadLayer = `
      ${baseFace}
      <path d="M 29 35 C 34 20, 66 20, 71 35 C 60 27, 40 27, 29 35 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'style_ponytail') {
    backHairLayer = `<path d="M 65 22 C 82 18, 88 38, 78 52 C 72 45, 70 32, 65 22 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>`;
    frontHeadLayer = `
      ${baseFace}
      <path d="M 28 35 C 34 19, 66 19, 72 35 C 61 26, 39 26, 28 35 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'style_mohawk') {
    frontHeadLayer = `
      ${baseFace}
      <polygon points="44,25 42,8 50,13 58,8 56,25" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'style_bald') {
    frontHeadLayer = `
      ${baseFace}
      <path d="M 38 28 Q 45 25 52 28" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round"/>
    `;
  } else if (headId === 'style_spiky') {
    frontHeadLayer = `
      ${baseFace}
      <polygon points="26,34 33,14 42,25 50,11 58,25 67,14 74,34" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  } else if (headId === 'jason') {
    frontHeadLayer = `
      <rect x="29" y="22" width="42" height="43" rx="19" fill="#fef3c7" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="50,26 46,33 54,33" fill="#dc2626"/>
      <circle cx="40" cy="43" r="4.2" fill="#0f172a"/>
      <circle cx="60" cy="43" r="4.2" fill="#0f172a"/>
      <circle cx="47" cy="54" r="1.3" fill="#451a03"/>
      <circle cx="53" cy="54" r="1.3" fill="#451a03"/>
      <circle cx="47" cy="59" r="1.3" fill="#451a03"/>
      <circle cx="53" cy="59" r="1.3" fill="#451a03"/>
    `;
  } else if (headId === 'myers') {
    frontHeadLayer = `
      <rect x="29" y="22" width="42" height="43" rx="19" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 28 34 C 33 16, 67 16, 72 34 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
      <ellipse cx="40" cy="43" rx="4.2" ry="3.5" fill="#090d16"/>
      <ellipse cx="60" cy="43" rx="4.2" ry="3.5" fill="#090d16"/>
      <line x1="43" y1="56" x2="57" y2="56" stroke="#64748b" stroke-width="2.2" stroke-linecap="round"/>
    `;
  } else if (headId === 'freddy') {
    frontHeadLayer = `
      <rect x="29" y="22" width="42" height="43" rx="19" fill="#b91c1c" stroke="#0f172a" stroke-width="2.6"/>
      <circle cx="40" cy="43" r="4" fill="#fef08a" stroke="#0f172a" stroke-width="1.6"/>
      <circle cx="60" cy="43" r="4" fill="#fef08a" stroke="#0f172a" stroke-width="1.6"/>
      <path d="M 42 56 Q 50 61 58 55" stroke="#450a0a" stroke-width="2.5" fill="none"/>
    `;
  } else if (headId === 'leatherface') {
    frontHeadLayer = `
      <rect x="29" y="22" width="42" height="43" rx="19" fill="#d97706" stroke="#0f172a" stroke-width="2.6"/>
      <path d="M 28 35 C 35 18, 65 18, 72 35 Z" fill="#292524"/>
      <circle cx="40" cy="43" r="4.2" fill="#0f172a"/>
      <circle cx="60" cy="43" r="4.2" fill="#0f172a"/>
      <line x1="39" y1="56" x2="61" y2="56" stroke="#451a03" stroke-width="2.4"/>
    `;
  } else if (headId === 'pumpkin') {
    frontHeadLayer = `
      <rect x="47" y="13" width="6" height="10" rx="2" fill="#15803d" stroke="#0f172a" stroke-width="2"/>
      <ellipse cx="50" cy="45" rx="24" ry="20" fill="#f97316" stroke="#0f172a" stroke-width="2.6"/>
      <polygon points="39,37 34,45 44,45" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
      <polygon points="61,37 56,45 66,45" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
      <polygon points="36,53 43,57 50,52 57,57 64,53 57,61 43,61" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
    `;
  } else if (headId === 'skellington') {
    frontHeadLayer = `
      <circle cx="50" cy="44" r="21" fill="#f8fafc" stroke="#0f172a" stroke-width="2.6"/>
      <circle cx="40" cy="41" r="5" fill="#0f172a"/>
      <circle cx="60" cy="41" r="5" fill="#0f172a"/>
      <path d="M 36 54 Q 50 60 64 54" stroke="#0f172a" stroke-width="2.2" fill="none"/>
    `;
  } else if (headId === 'vampire') {
    frontHeadLayer = `
      ${baseFace}
      <polygon points="28,33 50,39 72,33 67,18 33,18" fill="${hColor}"/>
    `;
  } else if (headId === 'werewolf') {
    frontHeadLayer = `
      <polygon points="27,32 31,13 43,25" fill="#57534e" stroke="#0f172a" stroke-width="2"/>
      <polygon points="73,32 69,13 57,25" fill="#57534e" stroke="#0f172a" stroke-width="2"/>
      <rect x="28" y="23" width="44" height="41" rx="19" fill="#57534e" stroke="#0f172a" stroke-width="2.6"/>
      <circle cx="40" cy="43" r="4" fill="#facc15" stroke="#0f172a" stroke-width="1.5"/>
      <circle cx="60" cy="43" r="4" fill="#facc15" stroke="#0f172a" stroke-width="1.5"/>
    `;
  } else if (headId === 'alien') {
    frontHeadLayer = `
      <ellipse cx="50" cy="43" rx="22" ry="22" fill="#4ade80" stroke="#0f172a" stroke-width="2.6"/>
      <ellipse cx="39" cy="43" rx="5.5" ry="7.5" transform="rotate(-15 39 43)" fill="#0f172a"/>
      <ellipse cx="61" cy="43" rx="5.5" ry="7.5" transform="rotate(15 61 43)" fill="#0f172a"/>
    `;
  } else if (headId === 'bubo_mask') {
    // Máscara Oficial do Doc (Corvo Chibi Médico da Peste olhando para a esquerda)
    frontHeadLayer = `
      <path d="M 22 50 C 20 34, 28 22, 50 22 C 72 22, 80 34, 78 52 C 74 60, 62 63, 50 63 C 36 63, 25 58, 22 50 Z" fill="#1f1f28" stroke="#090d16" stroke-width="2.6"/>
      <path d="M 21 53 C 25 60, 31 59, 34 55 C 37 62, 45 62, 49 56 C 53 62, 61 61, 64 55 C 69 59, 76 57, 78 51" fill="#18181f" stroke="#090d16" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 25 38 C 25 22, 72 22, 72 40 C 72 51, 59 56, 46 55 C 36 55, 29 59, 25 65 C 23 56, 26 48, 25 38 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M 32 54 Q 44 51 54 52" fill="none" stroke="#090d16" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="33" cy="40" r="7" fill="#090d16"/>
      <circle cx="57" cy="40" r="7.5" fill="#090d16"/>
    `;
  } else {
    frontHeadLayer = `
      ${baseFace}
      <path d="M 28 35 C 28 17, 72 17, 72 35 C 63 25, 37 25, 28 35 Z" fill="${hColor}" stroke="#0f172a" stroke-width="2.2"/>
    `;
  }

  let hatLayer = '';
  if (hatId === 'capelo') {
    hatLayer = `
      <polygon points="50,6 16,18 50,30 84,18" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <rect x="35" y="22" width="30" height="6" rx="2" fill="#1e293b"/>
      <line x1="76" y1="20" x2="80" y2="35" stroke="#f59e0b" stroke-width="2.2"/>
      <circle cx="80" cy="36" r="2.5" fill="#f59e0b"/>
    `;
  } else if (hatId === 'beanie') {
    hatLayer = `
      <path d="M 28 28 C 28 10, 72 10, 72 28 Z" fill="${cloth}" stroke="#0f172a" stroke-width="2.2"/>
      <rect x="26" y="24" width="48" height="6" rx="3" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
      <circle cx="50" cy="10" r="5" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
    `;
  } else if (hatId === 'headphones') {
    hatLayer = `
      <path d="M 25 46 C 22 16, 78 16, 75 46" fill="none" stroke="${cloth}" stroke-width="4.5"/>
      <rect x="20" y="38" width="8" height="16" rx="4" fill="#0f172a" stroke="${cloth}" stroke-width="2"/>
      <rect x="72" y="38" width="8" height="16" rx="4" fill="#0f172a" stroke="${cloth}" stroke-width="2"/>
    `;
  } else if (hatId === 'fedora') {
    hatLayer = `
      <ellipse cx="50" cy="23" rx="32" ry="5.5" fill="#27272a" stroke="#090d16" stroke-width="2.2"/>
      <path d="M 33 23 L 35 6 C 45 4, 55 4, 65 6 L 67 23 Z" fill="#3f3f46" stroke="#090d16" stroke-width="2.2"/>
      <rect x="34" y="17" width="32" height="4" fill="#18181b"/>
    `;
  } else if (hatId === 'witch') {
    hatLayer = `
      <ellipse cx="50" cy="24" rx="32" ry="5" fill="#581c87" stroke="#0f172a" stroke-width="2"/>
      <polygon points="50,3 33,24 67,24" fill="#6b21a8" stroke="#0f172a" stroke-width="2"/>
    `;
  } else if (hatId === 'crown') {
    hatLayer = `<polygon points="30,24 34,10 44,18 50,7 56,18 66,10 70,24" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>`;
  } else if (hatId === 'horns') {
    hatLayer = `
      <path d="M 32 25 Q 24 12 36 14" stroke="#dc2626" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 68 25 Q 76 12 64 14" stroke="#dc2626" stroke-width="5" fill="none" stroke-linecap="round"/>
    `;
  }

  return `
    <svg viewBox="0 0 100 100" class="w-full h-full select-none">
      <rect width="100" height="100" fill="${bg}"/>
      <circle cx="50" cy="45" r="38" fill="#ffffff" opacity="0.05"/>
      ${backCapeLayer}
      ${backHairLayer}
      ${neckLayer}
      ${bodyLayer}
      ${frontHeadLayer}
      ${hatLayer}
    </svg>
  `;
};

// =========================================================================
// MASCOTE ÚNICO "DOC": Auto-deteção de .jpeg, .jpg, .png + Fallback SVG
// =========================================================================
window.handleDocMascotImgError = function(imgEl) {
  const attempts = ['../assets/doc_mascot.jpeg'];
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
        <defs>
          <radialGradient id="docNightCircle" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.98"/>
          </radialGradient>
        </defs>
        <circle cx="48" cy="56" r="41" fill="url(#docNightCircle)" stroke="#090d16" stroke-width="2.5"/>
        <path d="M 76 82 C 84 84, 90 79, 92 71 L 89 70 L 95 62 L 98 72 L 94 72 C 91 82, 83 88, 74 86 Z" fill="#141419" stroke="#090d16" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M 16 74 C 12 56, 24 46, 50 46 C 76 46, 86 58, 82 76 C 78 88, 66 93, 50 93 C 30 93, 19 86, 16 74 Z" fill="#18181f" stroke="#090d16" stroke-width="2.8"/>
        <path d="M 66 56 C 78 60, 84 71, 79 80 C 74 80, 69 76, 67 71 C 64 66, 64 60, 66 56 Z" fill="#272730" stroke="#090d16" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M 20 51 C 18 35, 28 24, 50 24 C 72 24, 80 35, 78 52 C 74 58, 64 61, 50 61 C 36 61, 24 58, 20 51 Z" fill="#272730" stroke="#090d16" stroke-width="2.6"/>
        <path d="M 21 53 C 25 60, 31 59, 34 55 C 37 62, 45 62, 49 56 C 53 62, 61 61, 64 55 C 69 59, 76 57, 78 51" fill="#18181f" stroke="#090d16" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 25 38 C 25 22, 72 22, 72 40 C 72 51, 59 56, 46 55 C 36 55, 29 59, 25 65 C 23 56, 26 48, 25 38 Z" fill="#f8fafc" stroke="#090d16" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M 32 54 Q 44 51 54 52" fill="none" stroke="#090d16" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="33" cy="40" r="7.5" fill="#090d16"/>
        <circle cx="57" cy="40" r="8" fill="#090d16"/>
        <path d="M 25 84 L 22 93 M 25 88 L 28 94 M 25 88 L 19 91" stroke="#27272a" stroke-width="3" stroke-linecap="round"/>
        <path d="M 54 85 L 53 94 M 54 89 L 58 94 M 54 89 L 49 92" stroke="#27272a" stroke-width="3" stroke-linecap="round"/>
        <g transform="rotate(4 50 25)">
          <ellipse cx="50" cy="26" rx="33" ry="6.5" fill="#27272a" stroke="#090d16" stroke-width="2.6"/>
          <path d="M 34 25 L 36 6 C 45 3, 57 3, 66 6 L 65 25 Z" fill="#3f3f46" stroke="#090d16" stroke-width="2.6" stroke-linejoin="round"/>
          <path d="M 34.5 21 Q 50 24 65 21 L 65.2 16 Q 50 19 34.8 16 Z" fill="#18181b" stroke="#090d16" stroke-width="1.8"/>
        </g>
      </svg>
    </div>
  `;
};
// =========================================================================
// CONTROLE DO ATELIÊ COM TRAVA ANTI-EXPLOIT EM TODAS AS CAMADAS
// =========================================================================
let activeStudioCategory = 'head';
let studioPreviewAvatar = null;

function getLockedPreviewedItems() {
  if (!studioPreviewAvatar) return [];
  const lockedList = [];
  const categories = ['skinTone', 'hairColor', 'eyeColor', 'head', 'eyes', 'mouth', 'hat', 'body', 'bodyColor', 'bgColor'];

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
  studioPreviewAvatar = JSON.parse(JSON.stringify(window.userState.avatar));
  document.getElementById('studioCoinsDisplay').textContent = window.userState.coins;
  document.getElementById('avatarStudioModal').classList.remove('hidden');
  window.selectStudioCategory('head');
  refreshStudioStage();
};

window.closeAvatarStudio = function() {
  document.getElementById('avatarStudioModal').classList.add('hidden');
};

window.toggleAvatarZoom = function() {
  document.getElementById('studioStageContainer').classList.toggle('zoomed');
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
  } else if (activeStudioCategory === 'skinTone') {
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
    card.className = `btn-3d p-2.5 rounded-2xl flex flex-col items-center justify-between gap-1.5 text-center border-2 ${isSelected ? 'border-emerald-400 bg-emerald-950/40' : 'border-slate-700 bg-slate-950'} text-slate-100`;

    const miniSvg = window.renderItemMiniPreviewSvg(activeStudioCategory, item.id, studioPreviewAvatar);

    card.innerHTML = `
      <div class="w-14 h-14 rounded-2xl overflow-hidden border border-slate-700 shadow-inner relative bg-slate-900">
        ${miniSvg}
        ${!isUnlocked ? '<span class="absolute top-0.5 right-0.5 bg-black/75 text-[10px] px-1 rounded">🔒</span>' : ''}
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
    alert(`Moedas insuficientes! Para desbloquear os itens selecionados você precisa de ${totalCost} 🧪 (seu saldo atual: ${window.userState.coins} 🧪).`);
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
    alert(`Você ainda está vestindo itens bloqueados (${names}). Desbloqueie-os primeiro ou volte para um item liberado!`);
    refreshStudioStage();
    return;
  }

  window.userState.avatar = JSON.parse(JSON.stringify(studioPreviewAvatar));
  window.saveUserState();
  window.soundSuccess();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
  window.closeAvatarStudio();
};