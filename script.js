/**
 * Screen 1, 2, 3, 4, 5, 6 & 7: Cinematic Romantic Personal Story
 * Theme: Sophisticated Dark Romantic (Burgundy, Dark Wine, Muted Rose, Warm Cream)
 * Timing: Fast, Responsive, Fluid (cubic-bezier(0.22, 1, 0.36, 1))
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Narrative Content Beats (Chapter III — The Things I Notice About You)
     -------------------------------------------------------------------------- */
  const STORY_BEATS = [
    {
      type: 'heading',
      title: 'The Things I Notice About You',
      subtitle: 'Chapter III'
    },
    {
      type: 'text',
      content: 'There are little things about you that I don’t think you realize.'
    },
    {
      type: 'text',
      content: 'Like your pretty voice — the kind of voice that somehow makes an ordinary conversation feel a little more special.'
    },
    {
      type: 'text',
      content: 'And your face… not just because you’re pretty, but because there’s something about your expressions that makes you feel familiar.'
    },
    {
      type: 'list',
      items: [
        'The way you smile.',
        'The way your eyes change when you’re excited.',
        'The little expressions you make without even noticing them.'
      ]
    },
    {
      type: 'text',
      content: 'But honestly, it’s not just about how you look.'
    },
    {
      type: 'text',
      content: 'You’re a genuinely nice person, and that’s something I noticed more and more with time.'
    },
    {
      type: 'text',
      content: 'There’s a warmth in the way you talk and the way you treat people.'
    },
    {
      type: 'text',
      content: 'I like the little things.'
    },
    {
      type: 'text',
      content: 'The conversations.'
    },
    {
      type: 'text',
      content: 'The random moments.'
    },
    {
      type: 'text',
      content: 'The way you laugh.'
    },
    {
      type: 'text',
      content: 'The way your voice sounds when you’re telling me something you’re excited about.'
    },
    {
      type: 'text',
      content: 'Maybe that’s why I enjoy thinking about you.'
    },
    {
      type: 'pause',
      lead: 'Not because of one particular thing...',
      reveal: '...but because of all those little things together.'
    },
    {
      type: 'climax',
      lead: 'And somehow, without even trying,',
      main: 'you became someone I really wanted to make this little story for.'
    }
  ];

  /* --------------------------------------------------------------------------
     2. DOM Elements
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('particleCanvas');
  const screenStage = document.getElementById('screen-stage');
  const envelopeContainer = document.getElementById('envelopeContainer');
  const envelope = document.getElementById('envelope');
  const envelopeLetter = document.getElementById('envelopeLetter');
  const letterText = document.getElementById('letterText');
  const textLine1 = document.getElementById('textLine1');
  const textLine2 = document.getElementById('textLine2');
  const actionContainer = document.getElementById('actionContainer');
  const openBtn = document.getElementById('openBtn');
  const lightBurst = document.getElementById('lightBurst');
  const screen3 = document.getElementById('screen-3');

  // Screen 3 Elements (Text Story)
  const storyProgress = document.getElementById('storyProgress');
  const storyTextDisplay = document.getElementById('storyTextDisplay');
  const btnPrev = document.getElementById('btnPrev');
  const btnContinue = document.getElementById('btnContinue');
  const btnContinueText = document.getElementById('btnContinueText');

  // Screen 4 Elements
  const screen4 = document.getElementById('screen-4');
  const pauseStage = document.getElementById('pauseStage');
  const pauseTextGroup = document.getElementById('pauseTextGroup');
  const pauseLine1 = document.getElementById('pauseLine1');
  const pauseLine2 = document.getElementById('pauseLine2');
  const pauseLine3 = document.getElementById('pauseLine3');
  const pauseActionContainer = document.getElementById('pauseActionContainer');
  const btnReady = document.getElementById('btnReady');
  const pauseLightExpand = document.getElementById('pauseLightExpand');

  // Screen 5 Elements (The Question)
  const screen5 = document.getElementById('screen-5');
  const questionStage = document.getElementById('questionStage');
  const questionHeaderGroup = document.getElementById('questionHeaderGroup');
  const questionLead1 = document.getElementById('questionLead1');
  const questionLead2 = document.getElementById('questionLead2');
  const questionTextGlow = document.querySelector('.question-text-glow');
  const mainQuestionText = document.getElementById('mainQuestionText');
  const questionChoicesContainer = document.getElementById('questionChoicesContainer');
  const btnChoiceYes = document.getElementById('btnChoiceYes');
  const btnChoiceLetsSee = document.getElementById('btnChoiceLetsSee');
  const chapter5LightExpand = document.getElementById('chapter5LightExpand');

  // Screen 6 Elements ("Feel It" / Music Chapter)
  const screen6 = document.getElementById('screen-6');
  const musicStage = document.getElementById('musicStage');
  const musicIntroGroup = document.getElementById('musicIntroGroup');
  const whisper1 = document.getElementById('whisper1');
  const whisper2 = document.getElementById('whisper2');
  const whisper3 = document.getElementById('whisper3');
  const musicPlayerContainer = document.getElementById('musicPlayerContainer');
  const storyAudio = document.getElementById('storyAudio');
  const btnPlayToggle = document.getElementById('btnPlayToggle');
  const iconPlay = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');
  const playerScrubberWrapper = document.getElementById('playerScrubberWrapper');
  const playerScrubberTrack = document.getElementById('playerScrubberTrack');
  const playerScrubberFill = document.getElementById('playerScrubberFill');
  const playerScrubberHandle = document.getElementById('playerScrubberHandle');
  const playerCurrentTime = document.getElementById('playerCurrentTime');
  const playerTotalDuration = document.getElementById('playerTotalDuration');
  const btnVolumeToggle = document.getElementById('btnVolumeToggle');
  const iconVolOn = document.getElementById('iconVolOn');
  const iconVolMuted = document.getElementById('iconVolMuted');
  const musicOutroGroup = document.getElementById('musicOutroGroup');
  const refl1 = document.getElementById('refl1');
  const refl2 = document.getElementById('refl2');
  const refl3 = document.getElementById('refl3');
  const musicActionWrapper = document.getElementById('musicActionWrapper');
  const btnMusicReady = document.getElementById('btnMusicReady');
  const chapter6LightExpand = document.getElementById('chapter6LightExpand');

  // Screen 7 Elements (Final Chapter)
  const screen7 = document.getElementById('screen-7');
  const finalChapterStage = document.getElementById('finalChapterStage');
  const finalOpeningGroup = document.getElementById('finalOpeningGroup');
  const finalLine1 = document.getElementById('finalLine1');
  const finalLine2 = document.getElementById('finalLine2');
  const finalLine3 = document.getElementById('finalLine3');
  const finalLine4 = document.getElementById('finalLine4');
  const finalChoicesContainer = document.getElementById('finalChoicesContainer');
  const btnFinalYes = document.getElementById('btnFinalYes');
  const btnFinalLetsSee = document.getElementById('btnFinalLetsSee');
  const btnFinalLetsTalk = document.getElementById('btnFinalLetsTalk');
  const finalResponseContainer = document.getElementById('finalResponseContainer');
  const finalClosingContainer = document.getElementById('finalClosingContainer');
  const closingLine1 = document.getElementById('closingLine1');
  const closingLine2 = document.getElementById('closingLine2');
  const closingLine3 = document.getElementById('closingLine3');
  const finalRestartContainer = document.getElementById('finalRestartContainer');
  const btnRestart = document.getElementById('btnRestart');

  /* --------------------------------------------------------------------------
     3b. Timeline Timeout Manager
     -------------------------------------------------------------------------- */
  let activeTimelineTimeouts = [];

  function safeTimeout(callback, delay) {
    const id = setTimeout(() => {
      callback();
      const idx = activeTimelineTimeouts.indexOf(id);
      if (idx !== -1) activeTimelineTimeouts.splice(idx, 1);
    }, delay);
    activeTimelineTimeouts.push(id);
    return id;
  }

  function clearAllTimeouts() {
    activeTimelineTimeouts.forEach(id => clearTimeout(id));
    activeTimelineTimeouts = [];
  }

  /* --------------------------------------------------------------------------
     4. Canvas Particle System
     -------------------------------------------------------------------------- */
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let upwardEmitterActive = false;
  let emitterOrigin = { x: 0, y: 0 };
  let lastEmitTime = 0;

  function initCanvas() {
    dpr = window.devicePixelRatio || 1;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  function createParticle(options = {}) {
    const isPetal = options.type ? options.type === 'petal' : Math.random() < 0.35;
    
    return {
      type: isPetal ? 'petal' : 'mote',
      x: options.x !== undefined ? options.x : Math.random() * width,
      y: options.y !== undefined ? options.y : Math.random() * height,
      size: isPetal ? (3.5 + Math.random() * 4) : (1.2 + Math.random() * 2),
      alpha: 0,
      targetAlpha: options.targetAlpha || (isPetal ? (0.25 + Math.random() * 0.3) : (0.2 + Math.random() * 0.35)),
      vx: options.vx !== undefined ? options.vx : (Math.random() - 0.5) * 0.25,
      vy: options.vy !== undefined ? options.vy : (isPetal ? (0.2 + Math.random() * 0.35) : (0.1 + Math.random() * 0.2)),
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.006 + Math.random() * 0.01,
      swayWidth: isPetal ? (0.5 + Math.random() * 0.7) : (0.2 + Math.random() * 0.3),
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      isUpward: options.isUpward || false,
      lifespan: options.lifespan || null,
      age: 0,
      color: isPetal
        ? (Math.random() > 0.5 ? 'rgba(215, 140, 155, ' : 'rgba(195, 115, 130, ')
        : 'rgba(255, 235, 215, '
    };
  }

  function populateAmbientParticles(count = 14) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function emitUpwardParticle() {
    if (!upwardEmitterActive) return;
    
    const isPetal = Math.random() < 0.4;
    const p = createParticle({
      type: isPetal ? 'petal' : 'mote',
      x: emitterOrigin.x + (Math.random() - 0.5) * 70,
      y: emitterOrigin.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -(0.9 + Math.random() * 1.4),
      targetAlpha: isPetal ? 0.6 : 0.7,
      isUpward: true,
      lifespan: 110 + Math.random() * 60
    });
    particles.push(p);
  }

  function renderParticles(timestamp) {
    ctx.clearRect(0, 0, width, height);

    if (upwardEmitterActive && timestamp - lastEmitTime > 80) {
      emitUpwardParticle();
      lastEmitTime = timestamp;
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      if (p.alpha < p.targetAlpha) {
        p.alpha += 0.015;
      }

      p.sway += p.swaySpeed;
      p.x += p.vx + Math.sin(p.sway) * p.swayWidth;
      p.y += p.vy;
      p.angle += p.rotationSpeed;

      if (p.isUpward) {
        p.age++;
        if (p.age > p.lifespan * 0.55) {
          p.alpha *= 0.95;
        }
        if (p.age >= p.lifespan || p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }
      } else {
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.type === 'petal') {
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.7, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.8, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        ctx.fill();
      } else {
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
        grad.addColorStop(0, p.color + p.alpha + ')');
        grad.addColorStop(1, p.color + '0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    requestAnimationFrame(renderParticles);
  }

  /* --------------------------------------------------------------------------
     5. Screen 1: Accelerated Opening Timeline (~3.3s)
     -------------------------------------------------------------------------- */
  function startOpeningTimeline() {
    safeTimeout(() => {
      document.body.classList.add('ambient-active');
    }, 150);

    safeTimeout(() => {
      canvas.classList.add('particles-active');
      populateAmbientParticles(14);
      requestAnimationFrame(renderParticles);
    }, 300);

    safeTimeout(() => {
      envelopeContainer.classList.add('envelope-visible');
    }, 500);

    safeTimeout(() => {
      envelopeContainer.classList.add('envelope-floating');
    }, 700);

    safeTimeout(() => {
      textLine1.classList.add('visible');
    }, 900);

    safeTimeout(() => {
      textLine1.classList.remove('visible');
      textLine1.classList.add('fade-out');

      safeTimeout(() => {
        textLine2.classList.add('visible');
      }, 350);
    }, 2100);

    safeTimeout(() => {
      actionContainer.classList.add('visible');
    }, 3300);
  }

  /* --------------------------------------------------------------------------
     6. Screen 2: Accelerated Envelope Opening Sequence (~2.3s)
     -------------------------------------------------------------------------- */
  function handleOpenEnvelope() {
    if (openBtn.disabled) return;
    openBtn.disabled = true;

    actionContainer.classList.remove('visible');
    actionContainer.classList.add('fade-away');
    textLine2.classList.remove('visible');
    textLine2.classList.add('fade-out');

    document.body.classList.add('scene-focused');
    envelopeContainer.classList.remove('envelope-floating');
    envelopeContainer.classList.add('envelope-approaching');

    const rect = envelope.getBoundingClientRect();
    emitterOrigin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height * 0.4
    };

    setTimeout(() => {
      envelope.classList.add('is-open');
    }, 350);

    setTimeout(() => {
      envelopeLetter.classList.add('letter-risen');
      upwardEmitterActive = true;
    }, 650);

    setTimeout(() => {
      letterText.classList.add('revealed');
    }, 950);

    setTimeout(() => {
      envelope.classList.add('is-blooming');
    }, 1400);

    setTimeout(() => {
      lightBurst.classList.add('active');
    }, 1800);

    setTimeout(() => {
      screenStage.classList.remove('active');
      screenStage.setAttribute('aria-hidden', 'true');
      upwardEmitterActive = false;

      screen3.classList.add('active');
      screen3.removeAttribute('aria-hidden');

      initTextStory();

      setTimeout(() => {
        lightBurst.classList.remove('active');

        document.dispatchEvent(
          new CustomEvent('screenTransition', {
            detail: { fromScreen: 2, toScreen: 3 }
          })
        );
      }, 400);

    }, 2300);
  }

  /* --------------------------------------------------------------------------
     7. Screen 3 / Chapter 3: Cinematic Text Story State Machine
     -------------------------------------------------------------------------- */
  let currentStep = 0;
  let isTransitioning = false;

  function initTextStory() {
    currentStep = 0;
    isTransitioning = false;
    updateProgressIndicator();
    renderStep(currentStep, true);
  }

  function handleKeyboardNavigation(e) {
    if (!screen3.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      handleNextBeat();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevBeat();
    }
  }

  function updateProgressIndicator() {
    const displayIndex = String(currentStep + 1).padStart(2, '0');
    const displayTotal = String(STORY_BEATS.length).padStart(2, '0');
    if (storyProgress) {
      storyProgress.textContent = `${displayIndex} / ${displayTotal}`;
    }
  }

  function renderStep(index, isImmediate = false) {
    if (index < 0 || index >= STORY_BEATS.length) return;

    const beat = STORY_BEATS[index];
    updateProgressIndicator();

    if (btnPrev) {
      btnPrev.disabled = index === 0;
    }

    let html = '';
    if (beat.type === 'heading') {
      html = `
        <div class="story-beat">
          <h1 class="story-heading">${beat.title}</h1>
          <div class="story-heading-divider"></div>
        </div>
      `;
    } else if (beat.type === 'text') {
      html = `
        <div class="story-beat">
          <p class="story-body-text">${beat.content}</p>
        </div>
      `;
    } else if (beat.type === 'list') {
      const itemsHtml = beat.items.map(item => `<p>${item}</p>`).join('');
      html = `
        <div class="story-beat">
          <div class="story-multi-line">
            ${itemsHtml}
          </div>
        </div>
      `;
    } else if (beat.type === 'pause') {
      html = `
        <div class="story-beat">
          <p class="story-body-text">${beat.lead}</p>
          <p class="story-body-text story-paused-reveal">${beat.reveal}</p>
        </div>
      `;
    } else if (beat.type === 'climax') {
      html = `
        <div class="story-beat">
          <p class="story-climax-lead">${beat.lead}</p>
          <p class="story-climax-main">${beat.main}</p>
        </div>
      `;
    }

    if (isImmediate) {
      storyTextDisplay.innerHTML = html;
      const beatEl = storyTextDisplay.querySelector('.story-beat');
      if (beatEl) {
        requestAnimationFrame(() => beatEl.classList.add('visible'));
      }
      isTransitioning = false;
      return;
    }

    const currentBeatEl = storyTextDisplay.querySelector('.story-beat');
    if (currentBeatEl) {
      currentBeatEl.classList.remove('visible');
      currentBeatEl.classList.add('fade-out');
    }

    safeTimeout(() => {
      storyTextDisplay.innerHTML = html;
      const newBeatEl = storyTextDisplay.querySelector('.story-beat');
      if (newBeatEl) {
        requestAnimationFrame(() => {
          newBeatEl.classList.add('visible');
        });
      }
      isTransitioning = false;
    }, 220);
  }

  function handleNextBeat() {
    if (isTransitioning) return;

    if (currentStep < STORY_BEATS.length - 1) {
      isTransitioning = true;
      currentStep++;
      renderStep(currentStep);
    } else {
      transitionToScreen4();
    }
  }

  function handlePrevBeat() {
    if (isTransitioning || currentStep <= 0) return;

    isTransitioning = true;
    currentStep--;
    renderStep(currentStep);
  }

  /* --------------------------------------------------------------------------
     8. Screen 4 / Chapter 4: Emotional Pause Sequence
     -------------------------------------------------------------------------- */
  function transitionToScreen4() {
    isTransitioning = true;

    screen3.classList.remove('active');
    screen3.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      screen4.classList.add('active');
      screen4.removeAttribute('aria-hidden');

      startScreen4Sequence();
    }, 400);
  }

  function startScreen4Sequence() {
    setTimeout(() => {
      pauseLine1.classList.add('visible');
    }, 150);

    setTimeout(() => {
      pauseLine1.classList.add('dimmed');
      pauseLine2.classList.add('visible');
    }, 1100);

    setTimeout(() => {
      pauseLine3.classList.add('visible');
    }, 1900);

    setTimeout(() => {
      pauseActionContainer.classList.add('visible');
      btnReady.addEventListener('click', handleReadyClick, { once: true });
    }, 2400);
  }

  /* --------------------------------------------------------------------------
     9. Screen 4 -> Chapter 5 Transition (Expanding Light Bloom 800ms)
     -------------------------------------------------------------------------- */
  function handleReadyClick() {
    btnReady.disabled = true;

    document.body.classList.add('transition-darken');

    pauseTextGroup.style.opacity = '0';
    pauseTextGroup.style.transform = 'translateY(-8px)';
    pauseTextGroup.style.transition = 'opacity 0.45s var(--ease-snappy), transform 0.45s var(--ease-snappy)';
    pauseActionContainer.classList.add('fade-away');

    setTimeout(() => {
      pauseLightExpand.classList.add('active');

      setTimeout(() => {
        screen4.classList.remove('active');
        screen4.setAttribute('aria-hidden', 'true');

        screen5.classList.add('active');
        screen5.removeAttribute('aria-hidden');

        startScreen5Sequence();

        setTimeout(() => {
          pauseLightExpand.classList.remove('active');
          document.body.classList.remove('transition-darken');

          document.dispatchEvent(
            new CustomEvent('screenTransition', {
              detail: { fromScreen: 4, toScreen: 5 }
            })
          );
        }, 350);

      }, 800);

    }, 300);
  }

  /* --------------------------------------------------------------------------
     10. Screen 5 / Chapter 5: The Question Reveal & Choices
     -------------------------------------------------------------------------- */
  function startScreen5Sequence() {
    // 1. "Okay..." (500ms fade-in)
    setTimeout(() => {
      questionLead1.classList.add('visible');
    }, 120);

    // 2. After ~600ms: "Here's what I've been wanting to ask you." (600ms)
    setTimeout(() => {
      questionLead2.classList.add('visible');
    }, 720);

    // 3. Pause briefly -> Soft-dim leads and reveal the main question: "Can we become best friends?" (700ms)
    setTimeout(() => {
      questionHeaderGroup.classList.add('soft-dim');
      if (questionTextGlow) questionTextGlow.classList.add('visible');
      mainQuestionText.classList.add('visible');
    }, 1600);

    // 4. After ~500ms: reveal both choice buttons (500ms)
    setTimeout(() => {
      questionChoicesContainer.classList.add('visible');
      btnChoiceYes.addEventListener('click', handleChoiceSelection, { once: true });
      btnChoiceLetsSee.addEventListener('click', handleChoiceSelection, { once: true });
    }, 2200);
  }

  /* --------------------------------------------------------------------------
     11. Chapter 5 Choice Handler & Transition to Chapter 6 (800-1000ms)
     -------------------------------------------------------------------------- */
  function handleChoiceSelection(e) {
    const choice = e.currentTarget.getAttribute('data-choice');
    
    // Save user choice in JavaScript state and localStorage
    window.userStoryChoice = choice;
    try {
      localStorage.setItem('best_friends_choice', choice);
    } catch (err) {
      // Storage unavailable in restricted sandboxes
    }

    // Disable buttons
    btnChoiceYes.disabled = true;
    btnChoiceLetsSee.disabled = true;

    // 1. Buttons fade away (350ms)
    questionChoicesContainer.classList.remove('visible');
    questionChoicesContainer.classList.add('fade-away');

    // 2. Question slowly fades away (450ms)
    mainQuestionText.style.opacity = '0';
    mainQuestionText.style.transform = 'translateY(-8px) scale(0.98)';
    mainQuestionText.style.transition = 'opacity 0.45s var(--ease-snappy), transform 0.45s var(--ease-snappy)';
    
    questionHeaderGroup.style.opacity = '0';
    questionHeaderGroup.style.transition = 'opacity 0.35s var(--ease-snappy)';
    
    if (questionTextGlow) {
      questionTextGlow.style.opacity = '0';
      questionTextGlow.style.transition = 'opacity 0.4s ease';
    }

    // 3. Background darkens
    document.body.classList.add('transition-darken');

    // 4. Warm light expands from center (800ms)
    setTimeout(() => {
      chapter5LightExpand.classList.add('active');

      // 5. Transition into Chapter 6 (music / "Feel it" chapter)
      setTimeout(() => {
        screen5.classList.remove('active');
        screen5.setAttribute('aria-hidden', 'true');

        screen6.classList.add('active');
        screen6.removeAttribute('aria-hidden');

        setTimeout(() => {
          chapter5LightExpand.classList.remove('active');
          document.body.classList.remove('transition-darken');

          document.dispatchEvent(
            new CustomEvent('screenTransition', {
              detail: { fromScreen: 5, toScreen: 6, choice: choice }
            })
          );

          startScreen6Sequence();
        }, 350);

      }, 800);

    }, 300);
  }

  /* --------------------------------------------------------------------------
     12. Screen 6 / Chapter 6: "Feel It" Sequence & Custom Audio Player
     -------------------------------------------------------------------------- */
  function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function initAudioPlayer() {
    if (!storyAudio) return;

    // Autoplay is strictly disabled
    storyAudio.autoplay = false;

    // Update total duration once metadata is loaded
    function setDuration() {
      if (storyAudio.duration && isFinite(storyAudio.duration)) {
        playerTotalDuration.textContent = formatTime(storyAudio.duration);
      }
    }

    storyAudio.addEventListener('loadedmetadata', setDuration);
    storyAudio.addEventListener('durationchange', setDuration);
    if (storyAudio.readyState >= 1) {
      setDuration();
    }

    // Play / Pause toggle
    btnPlayToggle.addEventListener('click', () => {
      if (storyAudio.paused) {
        storyAudio.play().then(() => {
          syncPlayState(true);
        }).catch(err => {
          console.warn('Audio playback error:', err);
        });
      } else {
        storyAudio.pause();
        syncPlayState(false);
      }
    });

    storyAudio.addEventListener('play', () => syncPlayState(true));
    storyAudio.addEventListener('pause', () => syncPlayState(false));
    storyAudio.addEventListener('ended', () => {
      syncPlayState(false);
      updateScrubber(0);
      playerCurrentTime.textContent = '0:00';
    });

    function syncPlayState(isPlaying) {
      if (isPlaying) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
        musicPlayerContainer.classList.add('is-playing');
      } else {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        musicPlayerContainer.classList.remove('is-playing');
      }
    }

    // Progress updates
    storyAudio.addEventListener('timeupdate', () => {
      if (isDraggingScrubber) return;
      const cur = storyAudio.currentTime;
      const dur = storyAudio.duration;
      playerCurrentTime.textContent = formatTime(cur);

      if (dur && isFinite(dur) && dur > 0) {
        const pct = (cur / dur) * 100;
        updateScrubber(pct);
      }
    });

    function updateScrubber(pct) {
      const clamped = Math.max(0, Math.min(100, pct));
      playerScrubberFill.style.width = clamped + '%';
      playerScrubberHandle.style.left = clamped + '%';
    }

    // Scrubber click & drag seek
    let isDraggingScrubber = false;

    function seekFromEvent(e) {
      if (!storyAudio.duration || !isFinite(storyAudio.duration)) return;
      const rect = playerScrubberTrack.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const fraction = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      updateScrubber(fraction * 100);
      playerCurrentTime.textContent = formatTime(fraction * storyAudio.duration);
      return fraction * storyAudio.duration;
    }

    playerScrubberWrapper.addEventListener('pointerdown', (e) => {
      isDraggingScrubber = true;
      const newTime = seekFromEvent(e);
      if (newTime !== undefined) {
        storyAudio.currentTime = newTime;
      }
      if (playerScrubberWrapper.setPointerCapture) {
        try {
          playerScrubberWrapper.setPointerCapture(e.pointerId);
        } catch (_) {}
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDraggingScrubber) return;
      seekFromEvent(e);
    });

    window.addEventListener('pointerup', (e) => {
      if (!isDraggingScrubber) return;
      isDraggingScrubber = false;
      const newTime = seekFromEvent(e);
      if (newTime !== undefined) {
        storyAudio.currentTime = newTime;
      }
    });

    // Volume / Mute toggle
    btnVolumeToggle.addEventListener('click', () => {
      storyAudio.muted = !storyAudio.muted;
      if (storyAudio.muted) {
        iconVolOn.style.display = 'none';
        iconVolMuted.style.display = 'block';
      } else {
        iconVolOn.style.display = 'block';
        iconVolMuted.style.display = 'none';
      }
    });

    // Screen 6 "I'm ready" transition button
    btnMusicReady.addEventListener('click', handleMusicReadyTransition);
  }

  function startScreen6Sequence() {
    // 1. "Before anything else..."
    setTimeout(() => {
      if (whisper1) whisper1.classList.add('visible');
    }, 120);

    // 2. "Just listen to this."
    setTimeout(() => {
      if (whisper2) whisper2.classList.add('visible');
    }, 720);

    // 3. "Take a moment."
    setTimeout(() => {
      if (whisper3) whisper3.classList.add('visible');
    }, 1320);

    // 4. Music Player emerges
    setTimeout(() => {
      if (musicPlayerContainer) musicPlayerContainer.classList.add('visible');
    }, 1950);

    // 5. "Close your eyes for a moment."
    setTimeout(() => {
      if (refl1) refl1.classList.add('visible');
    }, 2550);

    // 6. "Feel the song."
    setTimeout(() => {
      if (refl2) refl2.classList.add('visible');
    }, 3150);

    // 7. "And when you’re ready… continue. ❤️"
    setTimeout(() => {
      if (refl3) refl3.classList.add('visible');
    }, 3750);

    // 8. "I'm ready →" button
    setTimeout(() => {
      if (musicActionWrapper) musicActionWrapper.classList.add('visible');
    }, 4250);
  }

  function handleMusicReadyTransition() {
    btnMusicReady.disabled = true;

    // 1. UI elements smoothly fade away
    if (musicActionWrapper) {
      musicActionWrapper.classList.remove('visible');
      musicActionWrapper.classList.add('fade-away');
    }
    if (musicIntroGroup) {
      musicIntroGroup.style.opacity = '0';
      musicIntroGroup.style.transition = 'opacity 0.4s ease';
    }
    if (musicPlayerContainer) {
      musicPlayerContainer.style.opacity = '0';
      musicPlayerContainer.style.transition = 'opacity 0.4s ease';
    }
    if (musicOutroGroup) {
      musicOutroGroup.style.opacity = '0';
      musicOutroGroup.style.transition = 'opacity 0.4s ease';
    }

    // 2. Keep music playing for ~300ms, then smoothly fade volume and pause
    setTimeout(() => {
      if (storyAudio && !storyAudio.paused) {
        let vol = storyAudio.volume;
        const fadeInterval = setInterval(() => {
          vol -= 0.1;
          if (vol <= 0.05) {
            clearInterval(fadeInterval);
            storyAudio.pause();
            storyAudio.volume = 1;
          } else {
            storyAudio.volume = Math.max(0, vol);
          }
        }, 40);
      }
    }, 300);

    // 3. Central light expansion (800-1000ms)
    setTimeout(() => {
      if (chapter6LightExpand) chapter6LightExpand.classList.add('active');

      // 4. Transition into Screen 7 / Final Screen
      setTimeout(() => {
        screen6.classList.remove('active');
        screen6.setAttribute('aria-hidden', 'true');

        if (screen7) {
          screen7.classList.add('active');
          screen7.removeAttribute('aria-hidden');
        }

        setTimeout(() => {
          if (chapter6LightExpand) chapter6LightExpand.classList.remove('active');
          document.dispatchEvent(
            new CustomEvent('screenTransition', {
              detail: { fromScreen: 6, toScreen: 7 }
            })
          );

          startScreen7Sequence();
        }, 350);

      }, 850);

    }, 300);
  }

  /* --------------------------------------------------------------------------
     13. Screen 7 / Final Chapter: Emotional Closure & Reflection
     -------------------------------------------------------------------------- */

  function startScreen7Sequence() {
    // 1. "Whatever your answer is..." (500–700ms entrance)
    safeTimeout(() => {
      if (finalLine1) finalLine1.classList.add('visible');
    }, 150);

    // 2. After ~700ms: "I'm really glad you made it this far."
    safeTimeout(() => {
      if (finalLine2) finalLine2.classList.add('visible');
    }, 850);

    // 3. "And now..."
    safeTimeout(() => {
      if (finalLine3) finalLine3.classList.add('visible');
    }, 1550);

    // 4. Pause briefly -> Reveal: "Tell me what you actually feel." (slightly larger)
    safeTimeout(() => {
      if (finalLine4) finalLine4.classList.add('visible');
    }, 2350);

    // 5. Reveal three balanced choices: YES 🫶, LET'S SEE 👀, LET'S TALK ❤️
    safeTimeout(() => {
      if (finalChoicesContainer) {
        finalChoicesContainer.classList.add('visible');
        btnFinalYes.disabled = false;
        btnFinalLetsSee.disabled = false;
        btnFinalLetsTalk.disabled = false;

        btnFinalYes.addEventListener('click', () => handleFinalChoice('yes'), { once: true });
        btnFinalLetsSee.addEventListener('click', () => handleFinalChoice('lets-see'), { once: true });
        btnFinalLetsTalk.addEventListener('click', () => handleFinalChoice('lets-talk'), { once: true });
      }
    }, 2950);
  }

  function handleFinalChoice(choice) {
    // Save choice state
    window.finalStoryChoice = choice;
    try {
      localStorage.setItem('final_story_choice', choice);
    } catch (_) {}

    // 1. Hide the three buttons smoothly
    if (finalChoicesContainer) {
      finalChoicesContainer.classList.remove('visible');
      finalChoicesContainer.classList.add('fade-away');
      btnFinalYes.disabled = true;
      btnFinalLetsSee.disabled = true;
      btnFinalLetsTalk.disabled = true;
    }

    // 2. Keep the background calm & softly dim initial prompt
    if (finalOpeningGroup) {
      finalOpeningGroup.style.opacity = '0.35';
      finalOpeningGroup.style.transition = 'opacity 0.6s ease';
    }

    // 3. Show personalized warm response based on the selected choice
    let responseData = [];
    if (choice === 'yes') {
      responseData = [
        { text: 'Then I guess it’s official. 🫶', class: 'response-line-lead' },
        { text: 'Best friends?', class: 'response-line-sub' },
        { text: 'Sounds pretty good to me.', class: 'response-line-detail' }
      ];
    } else if (choice === 'lets-see') {
      responseData = [
        { text: 'Fair enough. 👀', class: 'response-line-lead' },
        { text: 'Let’s take it one moment at a time.', class: 'response-line-sub' },
        { text: 'If something good grows from it, I’ll be happy.', class: 'response-line-detail' }
      ];
    } else if (choice === 'lets-talk') {
      responseData = [
        { text: 'Then let’s talk. ❤️', class: 'response-line-lead' },
        { text: 'I’d genuinely like to know what you’re thinking.', class: 'response-line-sub' }
      ];
    }

    if (finalResponseContainer) {
      finalResponseContainer.innerHTML = '';
      const responseElements = responseData.map(item => {
        const p = document.createElement('p');
        p.className = `response-line ${item.class}`;
        p.textContent = item.text;
        finalResponseContainer.appendChild(p);
        return p;
      });

      // Staggered reveal of response lines (600–800ms)
      responseElements.forEach((el, idx) => {
        safeTimeout(() => {
          el.classList.add('visible');
        }, 300 + idx * 700);
      });
    }

    const responseDuration = 300 + responseData.length * 700;

    // 4. Final Message Sequence
    // "Whatever happens from here..."
    safeTimeout(() => {
      if (closingLine1) closingLine1.classList.add('visible');
    }, responseDuration + 600);

    // "I'm glad I got to make this little world for you."
    safeTimeout(() => {
      if (closingLine2) closingLine2.classList.add('visible');
    }, responseDuration + 1400);

    // "Thank you for being you. ❤️"
    safeTimeout(() => {
      if (closingLine3) closingLine3.classList.add('visible');
    }, responseDuration + 2200);

    // 5. Small Restart Button: "Start again ↻"
    safeTimeout(() => {
      if (finalRestartContainer) {
        finalRestartContainer.classList.add('visible');
        if (btnRestart) {
          btnRestart.disabled = false;
          btnRestart.addEventListener('click', handleRestart, { once: true });
        }
      }
    }, responseDuration + 3000);
  }

  /* --------------------------------------------------------------------------
     14. Comprehensive Restart Handler: Reset to Screen 1
     -------------------------------------------------------------------------- */
  function handleRestart() {
    clearAllTimeouts();

    // 1. Audio cleanup
    if (storyAudio) {
      storyAudio.pause();
      storyAudio.currentTime = 0;
      storyAudio.volume = 1;
    }
    if (musicPlayerContainer) {
      musicPlayerContainer.classList.remove('is-playing', 'visible');
      musicPlayerContainer.style.opacity = '';
    }
    if (iconPlay && iconPause) {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    }
    if (playerCurrentTime) playerCurrentTime.textContent = '0:00';
    if (playerScrubberFill) playerScrubberFill.style.width = '0%';
    if (playerScrubberHandle) playerScrubberHandle.style.left = '0%';

    // 2. Clear stored choices
    window.userStoryChoice = null;
    window.finalStoryChoice = null;
    try {
      localStorage.removeItem('best_friends_choice');
      localStorage.removeItem('final_story_choice');
    } catch (_) {}

    // 3. Reset screens display state
    const screens = [screenStage, screen3, screen4, screen5, screen6, screen7];
    screens.forEach(s => {
      if (s) {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
      }
    });

    // 4. Reset body & background classes
    document.body.className = '';
    canvas.classList.remove('particles-active');

    // 5. Reset Screen 1 & 2
    envelopeContainer.className = 'envelope-container';
    envelope.className = 'envelope';
    envelope.style.transform = '';
    envelope.style.transition = '';
    envelopeLetter.className = 'envelope-letter';
    envelopeLetter.style.transform = '';
    envelopeLetter.style.opacity = '';
    letterText.className = 'letter-text';
    textLine1.className = 'text-line text-line-1';
    textLine2.className = 'text-line text-line-2';
    actionContainer.className = 'action-container';
    actionContainer.style.opacity = '';
    actionContainer.style.transform = '';
    actionContainer.style.transition = '';
    openBtn.disabled = false;
    openBtn.style.pointerEvents = '';
    upwardEmitterActive = false;
    lightBurst.className = 'transition-light-burst';

    // 6. Reset Screen 3 (text story)
    currentStep = 0;
    isTransitioning = false;
    if (storyTextDisplay) storyTextDisplay.innerHTML = '';
    if (btnPrev) btnPrev.disabled = true;
    if (btnContinue) {
      btnContinue.disabled = false;
      btnContinue.classList.remove('is-final');
    }
    if (btnContinueText) btnContinueText.textContent = 'Continue';
    updateProgressIndicator();

    // 7. Reset Screen 4
    if (pauseLine1) {
      pauseLine1.classList.remove('visible', 'dimmed');
    }
    if (pauseLine2) pauseLine2.classList.remove('visible');
    if (pauseLine3) pauseLine3.classList.remove('visible');
    if (pauseTextGroup) {
      pauseTextGroup.style.opacity = '';
      pauseTextGroup.style.transform = '';
      pauseTextGroup.style.transition = '';
    }
    if (pauseActionContainer) pauseActionContainer.classList.remove('visible', 'fade-away');
    if (btnReady) btnReady.disabled = false;
    if (pauseLightExpand) pauseLightExpand.classList.remove('active');

    // 8. Reset Screen 5
    if (questionLead1) questionLead1.classList.remove('visible');
    if (questionLead2) questionLead2.classList.remove('visible');
    if (questionHeaderGroup) {
      questionHeaderGroup.classList.remove('soft-dim');
      questionHeaderGroup.style.opacity = '';
    }
    if (questionTextGlow) {
      questionTextGlow.classList.remove('visible');
      questionTextGlow.style.opacity = '';
    }
    if (mainQuestionText) {
      mainQuestionText.classList.remove('visible');
      mainQuestionText.style.opacity = '';
      mainQuestionText.style.transform = '';
    }
    if (questionChoicesContainer) questionChoicesContainer.classList.remove('visible', 'fade-away');
    if (btnChoiceYes) btnChoiceYes.disabled = false;
    if (btnChoiceLetsSee) btnChoiceLetsSee.disabled = false;
    if (chapter5LightExpand) chapter5LightExpand.classList.remove('active');

    // 9. Reset Screen 6
    if (whisper1) whisper1.classList.remove('visible');
    if (whisper2) whisper2.classList.remove('visible');
    if (whisper3) whisper3.classList.remove('visible');
    if (refl1) refl1.classList.remove('visible');
    if (refl2) refl2.classList.remove('visible');
    if (refl3) refl3.classList.remove('visible');
    if (musicActionWrapper) musicActionWrapper.classList.remove('visible', 'fade-away');
    if (btnMusicReady) btnMusicReady.disabled = false;
    if (musicIntroGroup) {
      musicIntroGroup.style.opacity = '';
      musicIntroGroup.style.transition = '';
    }
    if (musicOutroGroup) {
      musicOutroGroup.style.opacity = '';
      musicOutroGroup.style.transition = '';
    }
    if (chapter6LightExpand) chapter6LightExpand.classList.remove('active');

    // 10. Reset Screen 7
    if (finalLine1) finalLine1.classList.remove('visible');
    if (finalLine2) finalLine2.classList.remove('visible');
    if (finalLine3) finalLine3.classList.remove('visible');
    if (finalLine4) finalLine4.classList.remove('visible');
    if (finalOpeningGroup) {
      finalOpeningGroup.style.opacity = '';
      finalOpeningGroup.style.transition = '';
    }
    if (finalChoicesContainer) finalChoicesContainer.classList.remove('visible', 'fade-away');
    if (btnFinalYes) btnFinalYes.disabled = false;
    if (btnFinalLetsSee) btnFinalLetsSee.disabled = false;
    if (btnFinalLetsTalk) btnFinalLetsTalk.disabled = false;
    if (finalResponseContainer) finalResponseContainer.innerHTML = '';
    if (closingLine1) closingLine1.classList.remove('visible');
    if (closingLine2) closingLine2.classList.remove('visible');
    if (closingLine3) closingLine3.classList.remove('visible');
    if (finalRestartContainer) finalRestartContainer.classList.remove('visible');
    if (btnRestart) btnRestart.disabled = false;

    // 11. Activate Screen 1 and start fresh opening timeline
    screenStage.classList.add('active');
    screenStage.removeAttribute('aria-hidden');

    safeTimeout(() => {
      startOpeningTimeline();
    }, 200);
  }

  /* --------------------------------------------------------------------------
     14. Initialization
     -------------------------------------------------------------------------- */
  window.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    startOpeningTimeline();
    if (openBtn) openBtn.addEventListener('click', handleOpenEnvelope);
    if (btnContinue) btnContinue.addEventListener('click', handleNextBeat);
    if (btnPrev) btnPrev.addEventListener('click', handlePrevBeat);
    window.addEventListener('keydown', handleKeyboardNavigation);
    initAudioPlayer();
  });

})();
