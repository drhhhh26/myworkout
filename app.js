'use strict';

/* ═══════════════════════════════════════════════════════════
   Workout Data
═══════════════════════════════════════════════════════════ */
const WORKOUTS = {
  workout1: {
    id: 'workout1',
    name: 'אימון 1',
    subtitle: 'PUSH · רגליים · בטן',
    warmup: 'סקוואטים במשקל גוף (ירידה מבוקרת, גב ישר, ברכיים החוצה) · סיבובי כתפיים + פוש אפים קלים',
    exercises: [
      { id: 'w1e1',  name: 'בנץ פרס',                          zone: 'PUSH',       volume: '3 × 12',         rpe: '7-8', rest: 150, link: 'https://www.youtube.com/watch?v=vcBig73ojpE' },
      { id: 'w1e2',  name: 'שכיבות שמיכה',                     zone: 'PUSH',       volume: '3 × 10-12',      rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/watch?v=0pkjOk0EiAk' },
      { id: 'w1e3',  name: 'לחיצת כתפיים דאמבלים בישיבה',      zone: 'PUSH',       volume: '3 × 12',         rpe: '6-7', rest: 90,  link: 'https://youtube.com/shorts/kzKsy-TtddE' },
      { id: 'w1e4',  name: 'הרחקת כתף',                        zone: 'PUSH',       volume: '3 × 10',         rpe: '6-7', rest: 90,  link: 'https://www.youtube.com/watch?v=kDqklk1ZESo' },
      { id: 'w1e5',  name: 'כפיפת כתף קדמי',                   zone: 'PUSH',       volume: '3 × 8',          rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/watch?v=CH9JzDStL3U', bonus: true },
      { id: 'w1e6',  name: 'פשיטת מרפק מעל הראש בכבל',         zone: 'יד אחורית',  volume: '3 × 12',         rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/shorts/9Ark9S11uXw' },
      { id: 'w1e7',  name: 'מקבילים בגרביטון',                  zone: 'יד אחורית',  volume: '3 × 12',         rpe: '7-8', rest: 150, link: 'https://www.youtube.com/shorts/eicOUO9WaJc' },
      { id: 'w1e8',  name: 'סקווט חופשי',                      zone: 'רגליים',     volume: '3 × 12',         rpe: '8-9', rest: 150, link: 'https://www.youtube.com/shorts/GZrM4zgsdb8' },
      { id: 'w1e9',  name: 'Hack Squat',                        zone: 'רגליים',     volume: '3 × 8',          rpe: '8-9', rest: 150, link: 'https://www.youtube.com/watch?v=rYgNArpwE7E', bonus: true },
      { id: 'w1e10', name: 'הרמות רגליים בשכיבה',              zone: 'בטן',        volume: '2 × 30 שניות',   rpe: '7-8', rest: 30,  link: 'https://youtu.be/l4kQd9eWclE' },
      { id: 'w1e11', name: 'אופניים',                           zone: 'בטן',        volume: '2 × 30 שניות',   rpe: '6-7', rest: 30,  link: 'https://youtube.com/shorts/NWzlS1Lp1e8' },
    ]
  },
  workout2: {
    id: 'workout2',
    name: 'אימון 2',
    subtitle: 'PULL · ישבן · בטן',
    warmup: 'סקוואטים במשקל גוף (הפעלת רגליים וישבן) · משיכת שכמות בעמידה',
    exercises: [
      { id: 'w2e1',  name: 'פולי עליון אחיזה צרה',              zone: 'PULL',   volume: '3 × 12',         rpe: '7-8', rest: 150, link: 'https://www.youtube.com/watch?v=IjoFCmLX7z0' },
      { id: 'w2e2',  name: 'פולי עליון אחיזה רחבה',             zone: 'PULL',   volume: '3 × 12',         rpe: '7-8', rest: 150, link: 'https://www.youtube.com/watch?v=7JnP8dFbS14' },
      { id: 'w2e3',  name: 'חתירה בישיבה בכבל',                 zone: 'PULL',   volume: '3 × 12',         rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/watch?v=lJoozxC0Rns' },
      { id: 'w2e4',  name: 'Face Pulls',                         zone: 'PULL',   volume: '3 × 12',         rpe: '6-7', rest: 90,  link: 'https://www.youtube.com/shorts/I41wK3wTZlo' },
      { id: 'w2e5',  name: 'פטישים',                             zone: 'PULL',   volume: '3 × 12',         rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/watch?v=P5sXHLmXmBM' },
      { id: 'w2e6',  name: 'כיסא רומי',                         zone: 'PULL',   volume: '3 × 10',         rpe: '6-7', rest: 150, link: 'https://www.youtube.com/watch?v=ph3pddpKzzw', bonus: true },
      { id: 'w2e7',  name: 'Hip Thrust',                         zone: 'ישבן',   volume: '3 × 10',         rpe: '8-9', rest: 150, link: 'https://www.youtube.com/shorts/m8g9VogoxMo' },
      { id: 'w2e8',  name: 'מכונת פישוק ירך',                   zone: 'ישבן',   volume: '3 × 12',         rpe: '7-8', rest: 90,  link: 'https://www.youtube.com/watch?v=G_8LItOiZ0Q' },
      { id: 'w2e9',  name: 'Single Leg Glute Bridge',            zone: 'ישבן',   volume: '3 × 10 כ"צ',     rpe: '7-8', rest: 150, link: 'https://www.youtube.com/watch?v=sVfp4LN9niA', bonus: true },
      { id: 'w2e10', name: 'נגיעות עקבים',                      zone: 'בטן',    volume: '2 × דקה',        rpe: '7-8', rest: 60,  link: 'https://youtube.com/shorts/i-BBrCVNT9A' },
      { id: 'w2e11', name: 'בעיטות מספריים נמוכות',             zone: 'בטן',    volume: '2 × 30 שניות',   rpe: '7-8', rest: 30,  link: 'https://youtube.com/shorts/2Hj5UzTzMGs' },
      { id: 'w2e12', name: 'אופניים',                            zone: 'בטן',    volume: '2 × 30 שניות',   rpe: '6-7', rest: 30,  link: 'https://youtube.com/shorts/NWzlS1Lp1e8', bonus: true },
    ]
  }
};

/* Zone → css var mappings – calibrated for light mode contrast */
const ZONE_STYLES = {
  'PUSH':       { color: '#C2410C', bg: '#FFF1EB', border: '#FDBA74' },
  'PULL':       { color: '#0369A1', bg: '#EFF8FF', border: '#BAE6FD' },
  'רגליים':     { color: '#15803D', bg: '#F0FDF4', border: '#86EFAC' },
  'ישבן':       { color: '#BE185D', bg: '#FDF2F8', border: '#F9A8D4' },
  'בטן':        { color: '#92400E', bg: '#FFFBEB', border: '#FCD34D' },
  'יד אחורית':  { color: '#6D28D9', bg: '#F5F3FF', border: '#C4B5FD' },
  'יד קדמית':   { color: '#0F766E', bg: '#F0FDFA', border: '#99F6E4' },
};

/* ═══════════════════════════════════════════════════════════
   State
═══════════════════════════════════════════════════════════ */
const state = {
  activeWorkout: 'workout1',
  checked: {},       // { [exerciseId]: boolean }
  timer: {
    total: 90,
    remaining: 90,
    running: false,
    interval: null,
    exerciseName: '',
  }
};

/* ═══════════════════════════════════════════════════════════
   localStorage helpers
═══════════════════════════════════════════════════════════ */
function todayKey(workoutId) {
  const d = new Date();
  const ymd = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  return `wt_${workoutId}_${ymd}`;
}

function loadChecked(workoutId) {
  try {
    return JSON.parse(localStorage.getItem(todayKey(workoutId))) || {};
  } catch { return {}; }
}

function saveChecked(workoutId) {
  localStorage.setItem(todayKey(workoutId), JSON.stringify(state.checked));
}

/* ═══════════════════════════════════════════════════════════
   Date Header
═══════════════════════════════════════════════════════════ */
function renderDate() {
  const el = document.getElementById('header-date');
  const now = new Date();
  const days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
  const months = ['ינו','פבר','מרץ','אפר','מאי','יוני','יולי','אוג','ספט','אוק','נוב','דצ'];
  el.textContent = `יום ${days[now.getDay()]} · ${now.getDate()} ${months[now.getMonth()]}`;
}

/* ═══════════════════════════════════════════════════════════
   Render workout
═══════════════════════════════════════════════════════════ */
function renderWorkout(workoutId) {
  const workout = WORKOUTS[workoutId];
  state.activeWorkout = workoutId;
  state.checked = loadChecked(workoutId);

  // Warmup
  document.getElementById('warmup-text').textContent = workout.warmup;

  // Exercises
  const list = document.getElementById('exercise-list');
  list.innerHTML = '';

  workout.exercises.forEach((ex, idx) => {
    const isDone = !!state.checked[ex.id];
    const zs = ZONE_STYLES[ex.zone] || { color: '#6B7280', bg: 'rgba(107,114,128,.12)', border: 'rgba(107,114,128,.25)' };
    const restLabel = formatTime(ex.rest);

    const li = document.createElement('li');
    li.className = `exercise-card${isDone ? ' done' : ''}${ex.bonus ? ' bonus' : ''}`;
    li.style.setProperty('--zone-color', zs.color);
    li.dataset.id = ex.id;

    const bonusBadge = ex.bonus
      ? `<span class="bonus-badge" aria-label="תרגיל אופציונלי">
           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
           </svg>
           בונוס
         </span>`
      : '';

    li.innerHTML = `
      <button class="exercise-check${isDone ? ' checked' : ''}"
              data-id="${ex.id}"
              aria-label="${isDone ? 'בטל סימון' : 'סמן כהושלם'}: ${ex.name}"
              aria-pressed="${isDone}">
        <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </button>
      <div class="exercise-body">
        <div class="exercise-name-row">
          <span class="exercise-name">${ex.name}</span>
          ${ex.link ? `<a class="yt-link" href="${ex.link}" target="_blank" rel="noopener noreferrer" aria-label="צפה בסרטון הדגמה: ${ex.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            הדגמה
          </a>` : ''}
        </div>
        <div class="exercise-meta">
          <span class="zone-badge" style="color:${zs.color};background:${zs.bg};border:1px solid ${zs.border}">${ex.zone}</span>
          <span class="volume-tag">${ex.volume}</span>
          <span class="rpe-tag">RPE ${ex.rpe}</span>
          ${bonusBadge}
        </div>
      </div>
      <button class="rest-btn" data-rest="${ex.rest}" data-name="${ex.name}" aria-label="הפעל טיימר מנוחה ${restLabel}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        ${restLabel}
      </button>
    `;
    list.appendChild(li);
  });

  updateProgress();
  attachExerciseEvents();
  triggerPanelAnimation();
}

function triggerPanelAnimation() {
  const panel = document.getElementById('workout-panel');
  panel.style.animation = 'none';
  panel.offsetHeight; // reflow
  panel.style.animation = '';
}

/* ═══════════════════════════════════════════════════════════
   Progress  (bonus exercises excluded from 100% calculation)
═══════════════════════════════════════════════════════════ */
function updateProgress() {
  const workout  = WORKOUTS[state.activeWorkout];
  const required = workout.exercises.filter(e => !e.bonus);
  const total    = required.length;
  const done     = required.filter(e => !!state.checked[e.id]).length;
  const pct      = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('progress-fraction').textContent = `${done} / ${total}`;
  document.getElementById('progress-pct').textContent = `${pct}%`;

  const fill = document.getElementById('progress-fill');
  fill.style.width = `${pct}%`;

  const bar = document.getElementById('progress-bar-container');
  bar.setAttribute('aria-valuenow', pct);

  if (pct === 100 && done > 0) {
    showCompletion();
  }
}

function showCompletion() {
  const existing = document.getElementById('completion-banner');
  if (existing) return;

  const banner = document.createElement('div');
  banner.id = 'completion-banner';
  banner.className = 'completion-banner visible';
  banner.setAttribute('role', 'status');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <div class="completion-emoji" aria-hidden="true">💪</div>
    <div class="completion-title">אימון הושלם!</div>
    <div class="completion-sub">כל הכבוד דולב – כיבשת אותו היום!</div>
  `;

  const list = document.getElementById('exercise-list');
  list.parentNode.insertBefore(banner, list);

  launchConfetti();
}

/* ═══════════════════════════════════════════════════════════
   Event listeners – exercise cards
═══════════════════════════════════════════════════════════ */
function attachExerciseEvents() {
  // Checkboxes
  document.querySelectorAll('.exercise-check').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      state.checked[id] = !state.checked[id];
      saveChecked(state.activeWorkout);

      const card = document.querySelector(`.exercise-card[data-id="${id}"]`);
      card.classList.toggle('done', state.checked[id]);
      btn.classList.toggle('checked', state.checked[id]);
      btn.setAttribute('aria-pressed', state.checked[id]);
      btn.setAttribute('aria-label', `${state.checked[id] ? 'בטל סימון' : 'סמן כהושלם'}: ${card.querySelector('.exercise-name').textContent}`);

      // Remove completion banner if un-checking
      if (!state.checked[id]) {
        const banner = document.getElementById('completion-banner');
        if (banner) banner.remove();
      }

      updateProgress();
    });
  });

  // Rest buttons
  document.querySelectorAll('.rest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const seconds = parseInt(btn.dataset.rest, 10);
      const name = btn.dataset.name;
      openTimer(seconds, name);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Timer
═══════════════════════════════════════════════════════════ */
const CIRCUMFERENCE = 2 * Math.PI * 50; // r=50 → ≈314.16

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}:${String(sec).padStart(2,'0')}` : `${sec}s`;
}

function setTimerDuration(seconds) {
  timerStop();
  state.timer.total     = seconds;
  state.timer.remaining = seconds;
  updateTimerDisplay();
  updateRingProgress();
  document.getElementById('timer-status').textContent = 'מוכן';

  // Mark active preset
  document.querySelectorAll('.preset-btn').forEach(b => {
    b.classList.toggle('preset-active', parseInt(b.dataset.s, 10) === seconds);
  });
}

function updateTimerDisplay() {
  document.getElementById('timer-time').textContent = formatTime(state.timer.remaining);
}

function updateRingProgress() {
  const ring = document.getElementById('ring-progress');
  const progress = state.timer.remaining / state.timer.total;
  const offset = CIRCUMFERENCE * (1 - progress);
  ring.style.strokeDasharray = CIRCUMFERENCE;
  ring.style.strokeDashoffset = offset;
  ring.classList.toggle('done-ring', state.timer.remaining === 0);
}

function timerTick() {
  if (state.timer.remaining <= 0) {
    timerFinish();
    return;
  }
  state.timer.remaining--;
  updateTimerDisplay();
  updateRingProgress();
  document.getElementById('timer-status').textContent = 'רץ...';
}

function timerStart() {
  if (state.timer.running) return;
  if (state.timer.remaining <= 0) {
    state.timer.remaining = state.timer.total;
    updateRingProgress();
  }
  state.timer.running  = true;
  state.timer.interval = setInterval(timerTick, 1000);

  const playBtn  = document.getElementById('ctrl-play');
  playBtn.querySelector('.icon-play').style.display  = 'none';
  playBtn.querySelector('.icon-pause').style.display = '';
  playBtn.classList.add('running');
  playBtn.setAttribute('aria-label', 'השהה');
  document.getElementById('timer-status').textContent = 'רץ...';
}

function timerPause() {
  clearInterval(state.timer.interval);
  state.timer.running = false;

  const playBtn = document.getElementById('ctrl-play');
  playBtn.querySelector('.icon-play').style.display  = '';
  playBtn.querySelector('.icon-pause').style.display = 'none';
  playBtn.classList.remove('running');
  playBtn.setAttribute('aria-label', 'המשך');
  document.getElementById('timer-status').textContent = 'מושהה';
}

function timerStop() {
  clearInterval(state.timer.interval);
  state.timer.running = false;
  const playBtn = document.getElementById('ctrl-play');
  playBtn.querySelector('.icon-play').style.display  = '';
  playBtn.querySelector('.icon-pause').style.display = 'none';
  playBtn.classList.remove('running');
  playBtn.setAttribute('aria-label', 'התחל');
}

function timerReset() {
  timerStop();
  state.timer.remaining = state.timer.total;
  updateTimerDisplay();
  updateRingProgress();
  document.getElementById('timer-status').textContent = 'מוכן';
}

function timerFinish() {
  timerStop();
  state.timer.remaining = 0;
  updateTimerDisplay();
  updateRingProgress();
  document.getElementById('timer-status').textContent = 'הסתיים!';

  // Pulse animation
  const wrap = document.querySelector('.timer-ring-wrap');
  wrap.classList.add('done-pulse');
  setTimeout(() => wrap.classList.remove('done-pulse'), 1400);

  playBeep();
}

function openTimer(seconds, exerciseName) {
  setTimerDuration(seconds);
  document.getElementById('timer-exercise-name').textContent = exerciseName || '';
  state.timer.exerciseName = exerciseName || '';

  const widget   = document.getElementById('timer-widget');
  const backdrop = document.getElementById('timer-backdrop');
  widget.classList.add('open');
  widget.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('visible');
  document.getElementById('timer-fab').classList.add('hidden');

  // Auto-start
  setTimeout(timerStart, 300);
}

function closeTimer() {
  timerPause();
  const widget   = document.getElementById('timer-widget');
  const backdrop = document.getElementById('timer-backdrop');
  widget.classList.remove('open');
  widget.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('visible');
  document.getElementById('timer-fab').classList.remove('hidden');
}

/* ═══════════════════════════════════════════════════════════
   Web Audio – beep
═══════════════════════════════════════════════════════════ */
function playBeep() {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const play = (freq, start, dur) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.35, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    };
    play(880, 0,   0.12);
    play(1100, 0.15, 0.12);
    play(1320, 0.3,  0.18);
  } catch(_) {}
}

/* ═══════════════════════════════════════════════════════════
   Confetti
═══════════════════════════════════════════════════════════ */
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors  = ['#F97316','#22C55E','#38BDF8','#F472B6','#FACC15','#A78BFA','#fff'];
  const pieces  = [];
  const count   = 90;

  for (let i = 0; i < count; i++) {
    pieces.push({
      x:  Math.random() * canvas.width,
      y:  -Math.random() * canvas.height * 0.5,
      w:  6 + Math.random() * 6,
      h:  10 + Math.random() * 6,
      vy: 2.5 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 2.5,
      rot: Math.random() * 360,
      rv:  (Math.random() - 0.5) * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
    });
  }

  let frame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.y < canvas.height + 20) alive = true;
      p.y   += p.vy;
      p.x   += p.vx;
      p.rot += p.rv;
      if (p.y > canvas.height * 0.7) p.alpha -= 0.012;
      p.alpha = Math.max(0, p.alpha);
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (alive) frame = requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  cancelAnimationFrame(frame);
  draw();
}

/* ═══════════════════════════════════════════════════════════
   Tabs
═══════════════════════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.workout;
      if (id === state.activeWorkout) return;

      document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.workout === id);
        t.setAttribute('aria-selected', t.dataset.workout === id);
      });

      // Remove completion banner from previous workout
      const banner = document.getElementById('completion-banner');
      if (banner) banner.remove();

      renderWorkout(id);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Timer controls init
═══════════════════════════════════════════════════════════ */
function initTimer() {
  // Play / Pause
  document.getElementById('ctrl-play').addEventListener('click', () => {
    state.timer.running ? timerPause() : timerStart();
  });

  // Reset
  document.getElementById('ctrl-reset').addEventListener('click', timerReset);

  // +30s
  document.getElementById('ctrl-plus').addEventListener('click', () => {
    state.timer.remaining += 30;
    state.timer.total     += 30;
    updateTimerDisplay();
    updateRingProgress();
  });

  // Presets
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimerDuration(parseInt(btn.dataset.s, 10));
      document.getElementById('timer-exercise-name').textContent = state.timer.exerciseName;
    });
  });

  // Close
  document.getElementById('timer-close-btn').addEventListener('click', closeTimer);
  document.getElementById('timer-backdrop').addEventListener('click', closeTimer);

  // FAB
  document.getElementById('timer-fab').addEventListener('click', () => {
    openTimer(state.timer.total, state.timer.exerciseName);
  });

  // Init ring
  updateTimerDisplay();
  updateRingProgress();
}

/* ═══════════════════════════════════════════════════════════
   Reset workout
═══════════════════════════════════════════════════════════ */
document.getElementById('reset-workout-btn').addEventListener('click', () => {
  if (!confirm('לאפס את האימון הנוכחי?')) return;
  state.checked = {};
  saveChecked(state.activeWorkout);
  const banner = document.getElementById('completion-banner');
  if (banner) banner.remove();
  renderWorkout(state.activeWorkout);
});

/* ═══════════════════════════════════════════════════════════
   Keyboard shortcut: Space to play/pause timer
═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  const widget = document.getElementById('timer-widget');
  if (!widget.classList.contains('open')) return;
  if (e.code === 'Space' && e.target.tagName !== 'BUTTON') {
    e.preventDefault();
    state.timer.running ? timerPause() : timerStart();
  }
  if (e.code === 'Escape') closeTimer();
});

/* ═══════════════════════════════════════════════════════════
   Init
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderDate();
  initTabs();
  initTimer();
  renderWorkout('workout1');
});
