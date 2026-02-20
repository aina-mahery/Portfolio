const portfolioData = {
  fr: {
    navHome: "Accueil",
    navAbout: "Biographie",
    navPassion: "Passion",
    navStrategy: "Vision",
    navSkills: "Compétences",
    navExperience: "Parcours Professionnel",
    navConnection: "Contact",
    
    greetingName: "Bonjour,\nJe suis Aina Mahery,",
    greetingRole: "Analyste stratégique, créateur de solutions et passionné par la performance durable.",
    greetingDescription: "J'ai forgé mon expertise sur le terrain. De conseiller à team leader, en passant par le coaching et la supervision, j'ai redéfini chaque échelon pour en extraire une loi physique : la performance ne dure que si elle est structurée.<br><br>Aujourd’hui, j’interviens là où la donnée devient un langage d’action. Je conçois des systèmes qui éclairent les angles morts et transforment l’information brute en décision pure.<br><br><strong>Bienvenue dans mon égosystème.</strong> C'est une proposition de valeur où la rigueur technique sert un impact intentionnel. Pensons, construisons et agissons ensemble.",
    
    aboutTitle: "MON ÉGOSYSTÈME",
    aboutText: "Spécialiste du reporting et de la performance, j’ai accompagné plus de 20 marques internationales pour transformer leurs données en leviers d'action immédiats.<br><b>Ma règle d'or :</b> Je ne produis pas de l'esthétique pour \"embellir\" des diapositives. Je bâtis des outils pour transformer la donnée en décision.<br><br>Mon architecture repose sur trois organes spécialisés :<br><li><strong>L’Analyse Fine :</strong> Interpréter les signaux faibles, pas seulement afficher des chiffres.</li><li><strong>L’Optimisation :</strong> Fluidifier les processus métiers pour que la structure serve l'action.</li><li><strong>Le Pilotage Humain :</strong> Parce qu’une donnée n’a de valeur que par l'intelligence de ceux qui l'activent.</li><br>Mon objectif : Que chaque dashboard soit un moteur stratégique, chaque limite une opportunité de dépassement, et chaque engagement une performance exécutée avec précision.",
    
    passionTitle: "MON MOTEUR DE RÉFLEXION",
    passionDescription: "L’égosystème ne s’arrête pas au bureau. Il se nourrit d’influences qui transforment ma vision stratégique.<br><li>🎮 <b>Gaming & Stratégie :</b> L'art de la pensée en arborescence. Modéliser des scénarios, anticiper les risques et improviser.</li><li>💻 <b>Code & Logique :</b> Mon laboratoire personnel. Maîtriser la structure invisible derrière chaque interface.</li><li>🎌 <b>Culture Japonaise :</b> Rigueur, esthétique épurée et philosophie du Kaizen (amélioration continue).</li><li>🎧 <b>Musique & Rythme :</b> Le métronome de ma productivité. Elle cadence mes cycles.</li>Loin d'être de simples loisirs, elles constituent mon infrastructure d'apprentissage continu.",
    
    strategicTitle: "MON ARCHITECTURE STRATÉGIQUE",
    strategicText: "Mon expertise ne sort pas de manuels, elle a été forgée par l’obsession du résultat. Je ne me contente pas de suivre des règles : je crée les principes et je conçois les systèmes.",
    architecture: [
      { id: "vision", title: "👁️‍🗨️ La Vision", content: "<b>La donnée comme langage.</b> Mon parcours m'a appris à lire entre les lignes. Je ne manipule pas des chiffres : je révèle des intentions. Chaque dashboard est un levier narratif, structuré pour transformer la donnée brute en langage stratégique." },
      { id: "ambition", title: "🚀 L'Ambition", content: "<b>L'humain au centre de l'analyse.</b> La donnée sans l'humain est morte. Mon but est de transformer l'analyse en action concrète où les processus sont choisis, faisant du facteur humain une force motrice et non une variable d'ajustement." },
      { id: "demarche", title: "⚙️ La Démarche", content: "<b>Dompter la complexité.</b> Là où d'autres voient des contraintes, je vois un terrain de jeu. Je conçois des outils qui sont des déclencheurs de décision. Ma signature : rendre le complexe lisible, fluide et durable." },
      { id: "engagement", title: "🔒 L'Engagement", content: "<b>Anticiper pour impacter.</b> J’ai piloté des équipes multiculturelles. Mon engagement est une pratique : j’anticipe et je structure là où d’autres improvisent, garantissant un impact réel, mesurable et éthique." },
      { id: "reperes", title: "🧭 Les Repères", content: "<b>Rigueur et Intégrité.</b> L’excellence est mon exigence quotidienne. Chaque optimisation que je livre vise une valeur identifiable et responsable, ancrée dans une intégrité qui définit ma manière de piloter et d'influencer." },
      { id: "signature", title: "🧠 La Signature", content: "<b>La technicité au service du sens.</b> Mes créations catalysent les décisions. Mon travail ne se contente pas d’être efficace : il laisse une empreinte durable là où la performance rencontre le sens." }
    ],

    experienceTitle: "MES ÉTAPES CLÉS",
    experience: [
      { role: "Reporting & Analyse de Données – Performance", company: "Odity Andraharo | Juin 2023 → à présent", tasks: ["Analyse des données & suivi des KPI pour orienter les décisions", "Création & automatisation de reportings (quotidiens, hebdos, mensuels)", "Conception de tableaux de bord dynamiques et visuels", "Collaboration avec les équipes pour optimiser process & performance"] },
      { role: "Superviseur d’Équipe → Team Leader", company: "Odity Andraharo | Déc 2020 → Mai 2023", tasks: ["Pilotage et supervision opérationnelle d’une équipe", "Coordination de l’activité et résolution des cas complexes", "Formation continue & accompagnement", "Amélioration continue des processus"] },
      { role: "Coach Formateur", company: "Odity Andraharo | Juin 2020 → Déc 2020", tasks: ["Suivi des performances dans le respect qualité & conformité", "Encadrement opérationnel et gestion des priorités", "Formation continue et accompagnement", "Coordination avec les services transverses"] },
      { role: "Agent KYC/B & Dépôt de Capital", company: "Odity Andraharo | Déc 2018 → Mai 2020", tasks: ["Vérification des pièces justificatives clients et entreprises", "Coordination avec les équipes juridiques et bancaires", "Conformité réglementaire (KYC / LCB-FT)", "Gestion des cas sensibles et amélioration continue"] }
    ],

    skillsTitle: "MON ARSENAL TECHNIQUE",
    skills: [
      { title: "🛠️ Techniques & Outils", list: ["Excel avancé : Power Query, VBA", "Power BI : Dashboards, DAX", "SQL : requêtes, bases de données", "Microsoft 365 (SharePoint, Power Automate)", "Bases : HTML, CSS, JS, Python"] },
      { title: "📊 Analyse & Reporting", list: ["Conception & Fiabilisation (Data Quality)", "Suivi et interprétation de KPI", "Data Storytelling", "Audit & Diagnostic"] },
      { title: "👥 Management & Leadership", list: ["Supervision d’équipes multiculturelles", "Accompagnement au changement", "Pilotage de Performance", "Ingénierie de Décision"] },
      { title: "🌟 Soft Skills", list: ["Esprit analytique & sens critique", "Autonomie & adaptabilité", "Vision stratégique", "Résilience sous pression"] }
    ],

    connectionTitle: "CONTACTEZ-MOI",
    connectionText: "Curieux de collaborer ou simplement d’échanger sur vos enjeux stratégiques ? Connectons-nous.",
    btnDownload: "Télécharger mon CV",
    btnSend: "Envoyer le message"
  },
  
  en: {
  navHome: "Home",
  navAbout: "Biography",
  navPassion: "Passion",
  navStrategy: "Vision",
  navSkills: "Skills",
  navExperience: "Professional Background",
  navConnection: "Contact",
  
  greetingName: "Hello,\nI am Aina Mahery,",
  greetingRole: "Strategic analyst, solutions creator and passionate about sustainable performance.",
  greetingDescription: "I've forged my expertise in the field. From advisor to team leader, including coaching and supervision, I've redefined each rung to extract a physical law: performance only lasts if it is structured.<br><br>Today, I operate where data becomes a language of action. I design systems that illuminate blind spots and transform raw information into pure decision.<br><br><strong>Welcome to my egosystem.</strong> It's a value proposition where technical rigor serves intentional impact. Let's think, build and act together.",
  
  aboutTitle: "MY EGOSYSTEM",
  aboutText: "Specialist in reporting and performance, I have supported more than 20 international brands to transform their data into immediate levers of action.<br><b>My golden rule :</b> I do not produce aesthetics to \"beautify\" slides. I build tools to turn data into decisions.<br><br>My architecture rests on three specialized organs :<br><li><strong>Fine Analysis :</strong> Interpreting weak signals, not just displaying numbers.</li><li><strong>Optimization :</strong> Streamlining business processes so that structure serves action.</li><li><strong>Human Steering :</strong> Because data only has value through the intelligence of those who activate it.</li><br>My objective : That each dashboard is a strategic engine, each limit an opportunity to surpass, and each commitment a performance executed with precision.",
  
  passionTitle: "MY THINKING ENGINE",
  passionDescription: "The egosystem does not stop at the office. It is nourished by influences that transform my strategic vision.<br><li>🎮 <b>Gaming & Strategy :</b> The art of branching thinking. Modeling scenarios, anticipating risks and improvising.</li><li>💻 <b>Code & Logic :</b> My personal laboratory. Mastering the invisible structure behind every interface.</li><li>🎌 <b>Japanese Culture :</b> Rigor, clean aesthetics and the philosophy of Kaizen (continuous improvement).</li><li>🎧 <b>Music & Rhythm :</b> The metronome of my productivity. It paces my cycles.</li>Far from mere hobbies, they constitute my continuous learning infrastructure.",
  
  strategicTitle: "MY STRATEGIC ARCHITECTURE",
  strategicText: "My expertise does not come from manuals, it was forged by an obsession with results. I do not merely follow rules: I create principles and design systems.",
  architecture: [
   { id: "vision", title: "👁️‍🗨️ Vision", content: "<b>Data as language.</b> My journey has taught me to read between the lines. I do not handle numbers: I reveal intentions. Each dashboard is a narrative lever, structured to turn raw data into strategic language." },
    { id: "ambition", title: "🚀 Ambition", content: "<b>Human-centered analysis.</b> Data without humans is dead. My aim is to turn analysis into concrete action where processes are chosen, making the human factor a driving force and not a variable to adjust." },
    { id: "demarche", title: "⚙️ Approach", content: "<b>Taming complexity.</b> Where others see constraints, I see a playground. I design tools that are decision triggers. My signature: make the complex readable, fluid and sustainable." },
    { id: "engagement", title: "🔒 Commitment", content: "<b>Anticipate to impact.</b> I have led multicultural teams. My commitment is a practice: I anticipate and structure where others improvise, guaranteeing a real, measurable and ethical impact." },
    { id: "reperes", title: "🧭 Landmarks", content: "<b>Rigor and Integrity.</b> Excellence is my daily requirement. Every optimization I deliver aims for identifiable and responsible value, anchored in an integrity that defines how I steer and influence." },
    { id: "signature", title: "🧠 Signature", content: "<b>Technicality in the service of meaning.</b> My creations catalyze decisions. My work is not satisfied with being efficient: it leaves a lasting imprint where performance meets meaning." }
  ],

  experienceTitle: "MY KEY STAGES",
  experience: [
    { role: "Reporting & Data Analysis – Performance", company: "Odity Andraharo | June 2023 → present", tasks: ["Data analysis & KPI monitoring to guide decisions", "Creation & automation of reportings (daily, weekly, monthly)", "Design of dynamic and visual dashboards", "Collaboration with teams to optimize processes & performance"] },
    { role: "Team Supervisor → Team Leader", company: "Odity Andraharo | Dec 2020 → May 2023", tasks: ["Operational management and supervision of a team", "Coordination of activity and resolution of complex cases", "Continuous training & support", "Continuous improvement of processes"] },
    { role: "Coach Trainer", company: "Odity Andraharo | June 2020 → Dec 2020", tasks: ["Performance follow-up respecting quality & compliance", "Operational supervision and priority management", "Continuous training and support", "Coordination with transversal services"] },
    { role: "KYC/B Agent & Capital Deposit", company: "Odity Andraharo | Dec 2018 → May 2020", tasks: ["Verification of client and company supporting documents", "Coordination with legal and banking teams", "Regulatory compliance (KYC / AML-CFT)", "Management of sensitive cases and continuous improvement"] }
  ],

  skillsTitle: "MY TECHNICAL ARSENAL",
  skills: [
    { title: "🛠️ Techniques & Tools", list: ["Advanced Excel: Power Query, VBA", "Power BI: Dashboards, DAX", "SQL: queries, databases", "Microsoft 365 (SharePoint, Power Automate)", "Basics: HTML, CSS, JS, Python"] },
    { title: "📊 Analysis & Reporting", list: ["Design & Reliability (Data Quality)", "Monitoring and interpretation of KPIs", "Data Storytelling", "Audit & Diagnostic"] },
    { title: "👥 Management & Leadership", list: ["Supervision of multicultural teams", "Change support", "Performance steering", "Decision engineering"] },
    { title: "🌟 Soft Skills", list: ["Analytical mindset & critical thinking", "Autonomy & adaptability", "Strategic vision", "Resilience under pressure"] }
  ],

  connectionTitle: "CONTACT ME",
  connectionText: "Curious to collaborate or simply to discuss your strategic issues? Let's connect.",
  btnDownload: "Download my CV",
  btnSend: "Send the message"


  } 
};

const dom = {
  navHome: () => document.getElementById('nav-home'),
  navAbout: () => document.getElementById('nav-about'),
  navPassion: () => document.getElementById('nav-passion'),
  navStrategy: () => document.getElementById('nav-strategy'),
  navSkills: () => document.getElementById('nav-skills'),
  navExperience: () => document.getElementById('nav-experience'),
  navConnection: () => document.getElementById('nav-connection'),
  greetingName: () => document.getElementById('greeting-name'),
  greetingRole: () => document.getElementById('greeting-role'),
  greetingDescription: () => document.getElementById('greeting-description'),
  aboutTitle: () => document.getElementById('about-title'),
  aboutText: () => document.getElementById('about-text'),
  passionTitle: () => document.getElementById('passion-title'),
  passionDescription: () => document.getElementById('passion-description'),
  strategicTitle: () => document.getElementById('strategic-title'),
  strategicText: () => document.getElementById('strategic-text'),
  archButtons: () => document.getElementById('arch-buttons'),
  archContent: () => document.getElementById('arch-content'),
  experienceTitle: () => document.getElementById('experience-title'),
  experienceList: () => document.getElementById('experience-list'),
  skillsTitle: () => document.getElementById('skills-title'),
  skillsList: () => document.getElementById('skills-list'),
  connectionTitle: () => document.getElementById('connection-title'),
  connectionText: () => document.getElementById('connection-text'),
  downloadBtns: () => document.querySelectorAll('.download-cv'),
  submitBtn: () => document.querySelector('#contact-form button[type="submit"]'),
  langButtons: () => document.querySelectorAll('.lang-switch [data-lang]')
};

const safeText = (el, text) => {
  if (!el) return;
  el.textContent = text ?? '';
};

const sanitizeHTML = (html) => {
  if (!html) return '';
  const template = document.createElement('template');
  template.innerHTML = html;
  template.content.querySelectorAll('script, iframe, object, embed').forEach(n => n.remove());
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    [...node.attributes].forEach(attr => {
      if (/^on/i.test(attr.name) || (attr.name === 'href' && /^javascript:/i.test(attr.value))) {
        node.removeAttribute(attr.name);
      }
    });
  }
  return template.innerHTML;
};

const safeHTML = (el, html) => {
  if (!el) return;
  el.innerHTML = sanitizeHTML(html);
};

const detectBrowserLang = () => {
  const lang = navigator.languages?.[0] || navigator.language || 'fr';
  const short = lang.slice(0, 2).toLowerCase();
  return short === 'en' ? 'en' : 'fr';
};

let currentLang = detectBrowserLang();

const initPortfolio = () => {
  const langBtns = dom.langButtons();
  if (langBtns && langBtns.length) {
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }
  setLanguage(currentLang);
};

const setLanguage = (lang) => {
  currentLang = lang || 'fr';
  const data = portfolioData[currentLang] || portfolioData['fr'];

  safeText(dom.navHome(), data.navHome);
  safeText(dom.navAbout(), data.navAbout);
  safeText(dom.navPassion(), data.navPassion);
  safeText(dom.navStrategy(), data.navStrategy);
  safeText(dom.navSkills(), data.navSkills);
  safeText(dom.navExperience(), data.navExperience);
  safeText(dom.navConnection(), data.navConnection);

  if (dom.greetingName()) dom.greetingName().innerHTML = (data.greetingName || '').replace(/\n/g, '<br>');
  safeText(dom.greetingRole(), data.greetingRole);
  safeHTML(dom.greetingDescription(), data.greetingDescription);

  safeText(dom.aboutTitle(), data.aboutTitle);
  safeHTML(dom.aboutText(), data.aboutText);

  safeText(dom.passionTitle(), data.passionTitle);
  safeHTML(dom.passionDescription(), data.passionDescription);

  safeText(dom.strategicTitle(), data.strategicTitle);
  safeHTML(dom.strategicText(), data.strategicText);

  safeText(dom.experienceTitle(), data.experienceTitle);
  safeText(dom.skillsTitle(), data.skillsTitle);
  safeText(dom.connectionTitle(), data.connectionTitle);
  safeText(dom.connectionText(), data.connectionText);

  dom.downloadBtns() && dom.downloadBtns().forEach(b => b.textContent = data.btnDownload);

  const submit = dom.submitBtn();
  if (submit) submit.textContent = data.btnSend;

  renderArchitecture(data.architecture || []);
  renderExperience(data.experience || []);
  renderSkills(data.skills || []);

  const buttons = dom.langButtons();
  if (buttons && buttons.length) {
    buttons.forEach(b => {
      const isActive = b.getAttribute('data-lang') === currentLang;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
  }
};

const renderArchitecture = (archData) => {
  const btnContainer = dom.archButtons();
  const contentContainer = dom.archContent();
  if (!btnContainer || !contentContainer) return;
  btnContainer.innerHTML = '';
  contentContainer.innerHTML = '';

  if (!archData.length) {
    contentContainer.textContent = '';
    return;
  }

  const frag = document.createDocumentFragment();

  archData.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = `arch-btn`;
    btn.type = 'button';
    btn.setAttribute('data-id', item.id || index);
    btn.textContent = item.title;
    btn.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
    btn.tabIndex = 0;

    btn.addEventListener('click', () => {
      btnContainer.querySelectorAll('.arch-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      contentContainer.innerHTML = `<div class="arch-content-box">${sanitizeHTML(item.content)}</div>`;
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });

    if (index === 0) btn.classList.add('active');

    frag.appendChild(btn);
  });

  btnContainer.appendChild(frag);
  contentContainer.innerHTML = `<div class="arch-content-box">${sanitizeHTML(archData[0].content)}</div>`;
};

const renderExperience = (expData) => {
  const container = dom.experienceList();
  if (!container) return;
  container.innerHTML = '';

  if (!Array.isArray(expData) || expData.length === 0) {
    container.innerHTML = '<p>Aucune expérience renseignée.</p>';
    return;
  }

  const frag = document.createDocumentFragment();

  expData.forEach(item => {
    const itemWrap = document.createElement('div');
    itemWrap.className = 'accordion-item';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.tabIndex = 0;
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');

    header.innerHTML = `
      <div>
        <b>${item.role}</b><br>
        <small style="color: var(--text-secondary);">${item.company}</small>
      </div>
    `;

    const icon = document.createElement('span');
    icon.textContent = '➕';
    header.appendChild(icon);

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = `<ul>${(item.tasks || []).map(t => `<li>${t}</li>`).join('')}</ul>`;

    body.classList.remove('active');

    const toggle = () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      container.querySelectorAll('.accordion-header').forEach(h => h.setAttribute('aria-expanded', 'false'));
      container.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.accordion-header span').forEach(s => s.textContent = '➕');

      if (!expanded) {
        header.setAttribute('aria-expanded', 'true');
        body.classList.add('active');
        icon.textContent = '➖';
      } else {
        header.setAttribute('aria-expanded', 'false');
        body.classList.remove('active');
        icon.textContent = '➕';
      }
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    itemWrap.appendChild(header);
    itemWrap.appendChild(body);
    frag.appendChild(itemWrap);
  });

  container.appendChild(frag);
};

const renderSkills = (skillsData) => {
  const container = dom.skillsList();
  if (!container) return;
  container.innerHTML = '';

  if (!Array.isArray(skillsData) || skillsData.length === 0) {
    container.innerHTML = '<p>Aucune compétence renseignée.</p>';
    return;
  }

  const frag = document.createDocumentFragment();

  skillsData.forEach(skill => {
    const li = document.createElement('li');
    li.className = 'skill-card';
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'group');
    li.setAttribute('aria-expanded', 'false');

    const header = document.createElement('div');
    header.className = 'skill-card-header';
    header.innerHTML = `<h4>${skill.title}</h4>`;

    const icon = document.createElement('span');
    icon.className = 'skill-card-icon';
    icon.textContent = '▼';
    header.appendChild(icon);

    const content = document.createElement('div');
    content.className = 'skill-card-content';
    content.innerHTML = `<ul>${(skill.list || []).map(s => `<li>${s}</li>`).join('')}</ul>`;

    const toggle = () => {
      const isActive = li.classList.contains('active');
      container.querySelectorAll('.skill-card').forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-expanded', 'false');
        c.querySelector('.skill-card-icon') && (c.querySelector('.skill-card-icon').textContent = '▼');
      });

      if (!isActive) {
        li.classList.add('active');
        li.setAttribute('aria-expanded', 'true');
        icon.textContent = '▲';
      } else {
        li.classList.remove('active');
        li.setAttribute('aria-expanded', 'false');
        icon.textContent = '▼';
      }
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    li.appendChild(header);
    li.appendChild(content);
    frag.appendChild(li);
  });

  container.appendChild(frag);
};

document.addEventListener('DOMContentLoaded', initPortfolio);

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-toggle');
    const side = document.querySelector('header');

    if (btn && side) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            side.classList.toggle('active');
            
            if (side.classList.contains('active')) {
                btn.innerText = "FERMER";
            } else {
                btn.innerText = "MENU";
            }
        });

        const links = document.querySelectorAll('.nav-links a');
        links.forEach(l => {
            l.addEventListener('click', () => {
                side.classList.remove('active');
                btn.innerText = "MENU";
            });
        });

        document.addEventListener('click', (e) => {
            if (!side.contains(e.target) && !btn.contains(e.target)) {
                side.classList.remove('active');
                btn.innerText = "MENU";
            }
        });
    } else {
        console.error("Le bouton ou le header n'a pas été trouvé dans le DOM");
    }
});

(function() {
  const btn = document.getElementById('download-cv-btn');
  if (!btn) return;

  if (!btn.getAttribute('aria-label')) {
    btn.setAttribute('aria-label', 'Télécharger le CV');
  }
  btn.setAttribute('role', 'button');
  btn.tabIndex = 0;

  const safeFileName = {
    fr: 'Aina-Mahery-CV_FR.pdf',
    en: 'Aina-Mahery-CV_EN.pdf'
  };

  const getLangFromUI = () => {
    if (typeof currentLang !== 'undefined' && currentLang) {
      return String(currentLang).slice(0,2).toLowerCase();
    }
    const active = document.querySelector('.lang-switch button.active');
    if (active) return active.textContent.trim().slice(0,2).toLowerCase();
    return 'fr';
  };

  const tryDownload = async (fileUrl, fileName) => {
    console.log('Tentative de téléchargement — URL générée :', fileUrl);

    try {
      const head = await fetch(fileUrl, { method: 'HEAD' });
      if (!head.ok) {
        console.warn('HEAD response non OK', head.status, head.statusText);
        window.open(fileUrl, '_blank', 'noopener,noreferrer');
        return;
      }

      // créé le lien et force le téléchargement
      const a = document.createElement('a');
      a.href = fileUrl;
      a.setAttribute('download', fileName || '');
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Erreur fetch/tryDownload:', err);
      window.open(fileUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handler = (e) => {
    e.preventDefault();

    const lang = getLangFromUI();
    const fileName = safeFileName[lang === 'en' ? 'en' : 'fr'];
    const fileUrl = new URL(fileName, window.location.href).href;

    tryDownload(fileUrl, fileName);
  };

  btn.addEventListener('click', handler);
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler(e);
    }
  });
})();
