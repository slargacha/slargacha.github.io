/* ===== MAIN SCRIPTS ===== */

(function () {
  // --- DOM references ---
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const bgGradient = document.querySelector('.bg-gradient');
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  // --- Consolidated scroll handler (single listener) ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 40);
        if (scrollIndicator) scrollIndicator.style.opacity = y > 80 ? '0' : '1';
        if (y < 100) navAnchors.forEach(a => a.classList.remove('active'));
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // --- Mobile menu ---
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    if (isOpen) navLinks.querySelector('a')?.focus();
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navbar.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });

  navLinks.addEventListener('focusout', (e) => {
    if (!navbar.contains(e.relatedTarget)) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.focus();
    }
  });

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // --- Background animation pause on hidden tab ---
  document.addEventListener('visibilitychange', () => {
    if (bgGradient) bgGradient.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });

  // --- Scroll spy ---
  if (sections.length && navAnchors.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.classList.remove('active');
            a.removeAttribute('aria-current');
          });
          const active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
          if (active) {
            active.classList.add('active');
            active.setAttribute('aria-current', 'location');
          }
        }
      });
    }, { threshold: 0.15, rootMargin: '-10% 0px -70% 0px' });
    sections.forEach(s => {
      if (s.id !== 'certifications') spyObserver.observe(s);
    });
  }

  // --- Lazy loading for post images ---
  document.querySelectorAll('.post-content img').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  // --- Wrap post tables for mobile horizontal scroll ---
  document.querySelectorAll('.post-content table').forEach(table => {
    if (!table.parentElement.classList.contains('table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  // --- Language toggle ---
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      if (typeof toggleLanguage === 'function') toggleLanguage();
    });
  }

  // --- Back to top ---
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      window.scrollTo({ top: 0, behavior: behavior });
    });
  }

  // --- Typewriter animation for terminal ---
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const terminalLines = [
    { prompt: true, text: 'whoami', delay: 400 },
    { prompt: false, text: 'Sebastian Largacha', delay: 300, type: 'output' },
    { prompt: true, text: 'cat role.txt', delay: 500 },
    { prompt: false, text: 'Systems Engineer', delay: 300, type: 'output' },
    { prompt: true, text: 'echo $SKILLS', delay: 500 },
    { prompt: false, text: 'AWS \u00b7 K8s \u00b7 Terraform \u00b7 Docker \u00b7 CI/CD', delay: 300, type: 'highlight' },
    { prompt: true, text: 'uptime', delay: 400 },
    { prompt: false, text: null, delay: 0, i18nKey: 'about.terminal.output', fallback: 'always building, always learning', type: 'highlight' },
  ];
  var terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) {
    var lineIndex = 0;

    function getTranslation(key, fallback) {
      var t = (typeof translations !== 'undefined' ? translations : null);
      try { var lang = localStorage.getItem('lang') || 'en'; } catch (e) { var lang = 'en'; }
      return (t && t[lang] && t[lang][key]) ? t[lang][key] : fallback;
    }

    function renderInstant() {
      terminalLines.forEach(function (line, idx) {
        var resolvedText = line.i18nKey ? getTranslation(line.i18nKey, line.fallback) : line.text;
        var div = document.createElement('div');
        if (line.prompt) {
          var promptSpan = document.createElement('span');
          promptSpan.className = 'prompt';
          promptSpan.textContent = '$';
          var cmdSpan = document.createElement('span');
          cmdSpan.className = 'command';
          cmdSpan.textContent = resolvedText;
          div.appendChild(promptSpan);
          div.appendChild(document.createTextNode(' '));
          div.appendChild(cmdSpan);
          terminalBody.appendChild(div);
        } else {
          div.className = line.type || 'output';
          div.textContent = resolvedText;
          terminalBody.appendChild(div);
          if (idx < terminalLines.length - 1) {
            var sep = document.createElement('div');
            sep.className = 'terminal-sep';
            terminalBody.appendChild(sep);
          }
        }
      });
      var cursor = document.createElement('div');
      var cursorPrompt = document.createElement('span');
      cursorPrompt.className = 'prompt';
      cursorPrompt.textContent = '$';
      var cursorSpan = document.createElement('span');
      cursorSpan.className = 'cursor';
      cursor.appendChild(cursorPrompt);
      cursor.appendChild(document.createTextNode(' '));
      cursor.appendChild(cursorSpan);
      terminalBody.appendChild(cursor);
    }

    function typeNextLine() {
      if (lineIndex >= terminalLines.length) {
        var cursor = document.createElement('div');
        var cursorPrompt = document.createElement('span');
        cursorPrompt.className = 'prompt';
        cursorPrompt.textContent = '$';
        var cursorSpan = document.createElement('span');
        cursorSpan.className = 'cursor';
        cursor.appendChild(cursorPrompt);
        cursor.appendChild(document.createTextNode(' '));
        cursor.appendChild(cursorSpan);
        terminalBody.appendChild(cursor);
        return;
      }
      var line = terminalLines[lineIndex++];
      var resolvedText = line.i18nKey ? getTranslation(line.i18nKey, line.fallback) : line.text;
      var div = document.createElement('div');
      if (line.prompt) {
        var promptSpan = document.createElement('span');
        promptSpan.className = 'prompt';
        promptSpan.textContent = '$';
        var cmdSpan = document.createElement('span');
        cmdSpan.className = 'command';
        div.appendChild(promptSpan);
        div.appendChild(document.createTextNode(' '));
        div.appendChild(cmdSpan);
        terminalBody.appendChild(div);
        var i = 0;
        var typeChar = function () {
          if (i < resolvedText.length) {
            cmdSpan.textContent += resolvedText[i++];
            setTimeout(typeChar, 55);
          } else {
            setTimeout(typeNextLine, line.delay);
          }
        };
        setTimeout(typeChar, 200);
      } else {
        div.className = line.type || 'output';
        div.textContent = resolvedText;
        terminalBody.appendChild(div);
        if (lineIndex < terminalLines.length) {
          var sep = document.createElement('div');
          sep.className = 'terminal-sep';
          terminalBody.appendChild(sep);
        }
        setTimeout(typeNextLine, line.delay);
      }
    }

    if (reducedMotion) {
      renderInstant();
    } else {
      var termObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          termObserver.disconnect();
          terminalBody.innerHTML = '';
          setTimeout(typeNextLine, 600);
        }
      }, { threshold: 0.5 });
      termObserver.observe(terminalBody);
    }
  }
})();
