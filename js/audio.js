// =========================================================================
// js/audio.js — Sintetizador de Áudio & Feedback Visual de Dopamina
// =========================================================================

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

window.playTone = function(freq, type = 'triangle', duration = 0.14) {
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
};

window.soundSuccess = function() {
  window.playTone(523.25, 'triangle', 0.12);
  setTimeout(() => window.playTone(659.25, 'triangle', 0.12), 80);
  setTimeout(() => window.playTone(783.99, 'triangle', 0.25), 160);
};

window.soundError = function() {
  window.playTone(310, 'sawtooth', 0.18);
  setTimeout(() => window.playTone(240, 'sawtooth', 0.26), 120);
};

// Adiciona XP e Moedas (incrementando também o contador vitalício de moedas ganhas!)
window.addReward = function(xpAmount, coinsAmount, reasonText = '') {
  window.userState.xp += xpAmount;
  window.userState.coins += coinsAmount;
  if (coinsAmount > 0) {
    window.userState.stats.lifetimeCoinsEarned = (window.userState.stats.lifetimeCoinsEarned || 0) + coinsAmount;
  }

  window.saveUserState();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
  if (typeof window.fetchSupabaseLeaderboard === 'function') window.fetchSupabaseLeaderboard();

  const container = document.getElementById('dopamine-toast-container');
  if (!container) return;
  const pill = document.createElement('div');
  pill.className = 'dopamine-pop bg-amber-400 text-slate-950 px-4 py-2 rounded-2xl font-extrabold text-xs sm:text-sm shadow-xl border-2 border-white flex items-center gap-2';
  pill.innerHTML = `<i class="fa-solid fa-bolt"></i> +${xpAmount} XP &nbsp;|&nbsp; +${coinsAmount} 🧪 <span class="opacity-75">(${reasonText})</span>`;
  container.appendChild(pill);
  setTimeout(() => pill.remove(), 1350);
};