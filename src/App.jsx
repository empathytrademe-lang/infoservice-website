import React, { useState, useEffect } from 'react';

const App = () => {
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    es: {
      nav: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', contact: 'Contacto', btn: 'Contáctanos' },
      hero: {
        badge: 'Servicio profesional en español e inglés',
        title: 'Te ayudamos en tus procesos migratorios con confianza y experiencia',
        sub: 'Especialistas en formularios USCIS, mejora de crédito y divorcios en RD y Maryland.',
        wa: 'Escríbenos por WhatsApp',
        info: 'Solicitar Información',
      },
      services: {
        title: 'Nuestros Servicios',
        sub: 'Asistencia profesional en todos tus procesos migratorios y administrativos',
        btn: 'Más Información',
        items: [
          { icon: '📋', title: 'Formularios USCIS', desc: 'Asistencia completa en el llenado correcto de formularios de inmigración.' },
          { icon: '🗺️', title: 'Guía Migratoria', desc: 'Orientación personalizada paso a paso en tu proceso migratorio.' },
          { icon: '📝', title: 'Ajuste de Estatus', desc: 'Te ayudamos a cambiar o regularizar tu estatus migratorio.' },
          { icon: '👨‍👩‍👧', title: 'Peticiones Familiares', desc: 'Reunificación familiar a través de peticiones de visa y residencia.' },
          { icon: '💳', title: 'Mejora de Crédito', desc: 'Reparamos y mejoramos tu historial crediticio en EE.UU.' },
          { icon: '⚖️', title: 'Divorcios en RD', desc: 'Tramitamos tu divorcio en República Dominicana desde EE.UU.' },
          { icon: '📄', title: 'Divorcios en Maryland', desc: 'Asistencia completa en procesos de divorcio en el estado de Maryland.' },
        ],
      },
      why: {
        title: '¿Por qué elegirnos?',
        sub: 'Somos tu aliado de confianza en Estados Unidos',
        items: [
          { icon: '🤝', title: 'Atención Personalizada', desc: 'Cada caso es único. Te acompañamos en cada paso del proceso.' },
          { icon: '🌎', title: 'Español e Inglés', desc: 'Comunicación clara en tu idioma sin barreras.' },
          { icon: '⚡', title: 'Procesos Rápidos', desc: 'Organizados y eficientes para ahorrarte tiempo.' },
          { icon: '❤️', title: 'Comunidad Latina', desc: 'Entendemos las necesidades de nuestra comunidad.' },
        ],
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes',
        sub: 'Experiencias reales de personas que confiaron en nosotros',
        items: [
          { name: 'María González', text: 'Me ayudaron con mi ajuste de estatus de forma rápida y profesional. ¡Muy recomendados!', stars: 5 },
          { name: 'Carlos Rodríguez', text: 'Gracias a Infoservice mejoré mi crédito y ahora califico para una hipoteca. Excelente servicio.', stars: 5 },
          { name: 'Ana Martínez', text: 'La atención es personalizada y siempre en español. Me sentí acompañada todo el proceso.', stars: 5 },
        ],
      },
      contact: {
        title: 'Contáctanos',
        sub: 'Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.',
        name: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico',
        service: 'Servicio de interés', selectService: 'Selecciona un servicio',
        message: 'Mensaje', send: 'Enviar por WhatsApp',
        infoTitle: 'Información de contacto',
        infoSub: 'Comunícate con nosotros por el canal que prefieras.',
      },
      footer: {
        rights: '© 2025 Infoservice LLC. Todos los derechos reservados.',
        disclaimer: 'Infoservice LLC no es un bufete de abogados. Ofrecemos servicios de asistencia administrativa.',
        contactTitle: 'Contacto',
        servicesTitle: 'Servicios',
      },
    },
    en: {
      nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact', btn: 'Contact Us' },
      hero: {
        badge: 'Professional service in Spanish & English',
        title: 'We help you navigate immigration and administrative processes with confidence',
        sub: 'Specialists in USCIS forms, credit improvement, and divorces in DR and Maryland.',
        wa: 'WhatsApp Us',
        info: 'Request Information',
      },
      services: {
        title: 'Our Services',
        sub: 'Professional assistance in all your immigration and administrative processes',
        btn: 'More Info',
        items: [
          { icon: '📋', title: 'USCIS Forms', desc: 'Complete assistance filling out immigration forms correctly.' },
          { icon: '🗺️', title: 'Immigration Guidance', desc: 'Step-by-step personalized guidance throughout your process.' },
          { icon: '📝', title: 'Status Adjustment', desc: 'We help you change or regularize your immigration status.' },
          { icon: '👨‍👩‍👧', title: 'Family Petitions', desc: 'Family reunification through visa and residency petitions.' },
          { icon: '💳', title: 'Credit Improvement', desc: 'We repair and improve your US credit history.' },
          { icon: '⚖️', title: 'Divorces in DR', desc: 'Process your divorce in the Dominican Republic from the US.' },
          { icon: '📄', title: 'Divorces in Maryland', desc: 'Full assistance in Maryland divorce proceedings.' },
        ],
      },
      why: {
        title: 'Why Choose Us?',
        sub: 'Your trusted partner in the United States',
        items: [
          { icon: '🤝', title: 'Personalized Attention', desc: 'Every case is unique. We accompany you every step of the way.' },
          { icon: '🌎', title: 'Spanish & English', desc: 'Clear communication in your language, no barriers.' },
          { icon: '⚡', title: 'Fast Processes', desc: 'Organized and efficient to save you time.' },
          { icon: '❤️', title: 'Latino Community', desc: 'We understand the needs of our community.' },
        ],
      },
      testimonials: {
        title: 'What our clients say',
        sub: 'Real experiences from people who trusted us',
        items: [
          { name: 'María González', text: 'They helped me with my status adjustment quickly and professionally. Highly recommended!', stars: 5 },
          { name: 'Carlos Rodríguez', text: 'Thanks to Infoservice I improved my credit and now qualify for a mortgage. Excellent service.', stars: 5 },
          { name: 'Ana Martínez', text: 'The attention is personalized and always in Spanish. I felt supported throughout the process.', stars: 5 },
        ],
      },
      contact: {
        title: 'Contact Us',
        sub: 'We are here to help. Write to us and we will respond soon.',
        name: 'Full name', phone: 'Phone', email: 'Email address',
        service: 'Service of interest', selectService: 'Select a service',
        message: 'Message', send: 'Send via WhatsApp',
        infoTitle: 'Contact Information',
        infoSub: 'Reach out to us through your preferred channel.',
      },
      footer: {
        rights: '© 2025 Infoservice LLC. All rights reserved.',
        disclaimer: 'Infoservice LLC is not a law firm. We offer administrative assistance services.',
        contactTitle: 'Contact',
        servicesTitle: 'Services',
      },
    },
  }[language];

  const waIcon = (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const openWhatsApp = (msg) => {
    const text = msg || (language === 'es' ? '¡Hola! Me gustaría información sobre sus servicios.' : 'Hello! I would like information about your services.');
    window.open(`https://wa.me/14432073624?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Nuevo contacto - Infoservice*\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
    openWhatsApp(msg);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',system-ui,sans-serif;color:#1a2a3a;background:#fff;line-height:1.6}
        a{text-decoration:none}
        button{font-family:'DM Sans',system-ui,sans-serif;cursor:pointer}

        /* NAV */
        .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,0.97);border-bottom:1px solid #e4eff9;transition:box-shadow .3s}
        .nav.scrolled{box-shadow:0 2px 24px rgba(110,169,228,0.14)}
        .nav-inner{max-width:1120px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:68px}
        .logo{display:flex;align-items:center;gap:2px;font-family:'DM Serif Display',serif;font-size:19px;color:#062B4A;letter-spacing:-.2px}
        .logo span{color:#6EA9E4}
        .logo-dot{width:7px;height:7px;background:#6EA9E4;border-radius:50%;margin:0 6px;flex-shrink:0}
        .nav-links{display:flex;gap:28px}
        .nav-links a{color:#4a6070;font-size:15px;font-weight:500;transition:color .2s}
        .nav-links a:hover{color:#6EA9E4}
        .nav-actions{display:flex;align-items:center;gap:10px}
        .btn-lang{background:none;border:1.5px solid #d4e6f5;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;color:#062B4A;transition:all .2s}
        .btn-lang:hover{border-color:#6EA9E4;color:#6EA9E4}
        .btn-cta{background:#6EA9E4;color:#fff;border:none;padding:9px 20px;border-radius:9px;font-size:14px;font-weight:600;transition:background .2s}
        .btn-cta:hover{background:#5595d4}
        .hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:4px}
        .hamburger span{display:block;width:22px;height:2px;background:#062B4A;border-radius:2px;transition:all .3s}
        .mob-menu{display:none;background:#fff;border-top:1px solid #e4eff9;padding:12px 24px 20px}
        .mob-menu.open{display:block}
        .mob-menu a{display:block;padding:11px 0;color:#4a6070;font-size:15px;font-weight:500;border-bottom:1px solid #f0f7fd}
        .mob-actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}

        /* HERO */
        .hero{padding:120px 24px 72px;background:linear-gradient(150deg,#edf6ff 0%,#deeefa 40%,#cfe5f7 100%);min-height:580px;display:flex;align-items:center}
        .hero-inner{max-width:720px;margin:0 auto;text-align:center}
        .badge{display:inline-block;background:#fff;color:#6EA9E4;border:1.5px solid #b5d8f5;border-radius:50px;padding:6px 18px;font-size:13px;font-weight:600;margin-bottom:22px;letter-spacing:.2px}
        .hero h1{font-family:'DM Serif Display',serif;font-size:clamp(30px,4.5vw,52px);color:#062B4A;line-height:1.18;margin-bottom:18px}
        .hero p{font-size:18px;color:#4a6a80;line-height:1.7;margin-bottom:34px;max-width:580px;margin-left:auto;margin-right:auto}
        .hero-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:48px}
        .btn-wa{display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;transition:all .2s;box-shadow:0 4px 16px rgba(37,211,102,.3)}
        .btn-wa:hover{background:#1eb85c;transform:translateY(-1px)}
        .btn-secondary{display:inline-flex;align-items:center;background:#fff;color:#062B4A;border:2px solid #6EA9E4;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;transition:all .2s}
        .btn-secondary:hover{background:#6EA9E4;color:#fff}
        .hero-stats{display:flex;justify-content:center;gap:48px;flex-wrap:wrap}
        .stat{text-align:center}
        .stat-num{font-family:'DM Serif Display',serif;font-size:30px;color:#6EA9E4}
        .stat-lbl{font-size:13px;color:#6a8a9a;margin-top:2px}

        /* SECTION BASE */
        .section{padding:80px 24px}
        .section-inner{max-width:1120px;margin:0 auto}
        .section-header{text-align:center;margin-bottom:52px}
        .section-header h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3.5vw,40px);color:#062B4A;margin-bottom:12px}
        .section-header p{font-size:16px;color:#5a7589;max-width:520px;margin:0 auto;line-height:1.65}

        /* SERVICES */
        .bg-light{background:#f6fbff}
        .grid-services{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}
        .card{background:#fff;border:1.5px solid #deeaf5;border-radius:16px;padding:30px 26px;transition:all .3s}
        .card:hover{border-color:#6EA9E4;box-shadow:0 8px 32px rgba(110,169,228,.17);transform:translateY(-4px)}
        .card-icon{font-size:34px;margin-bottom:14px}
        .card h3{font-size:16px;font-weight:700;color:#062B4A;margin-bottom:8px}
        .card p{font-size:14px;color:#6a8096;line-height:1.65;margin-bottom:18px}
        .link-btn{background:none;border:none;color:#6EA9E4;font-size:14px;font-weight:600;padding:0;display:inline-flex;align-items:center;gap:4px;transition:gap .2s}
        .link-btn:hover{gap:8px}

        /* WHY */
        .grid-why{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:28px}
        .why-card{text-align:center;padding:32px 20px;border-radius:16px;transition:background .2s}
        .why-card:hover{background:#f0f8ff}
        .why-icon{width:62px;height:62px;background:#e4f0fc;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px}
        .why-card h3{font-size:16px;font-weight:700;color:#062B4A;margin-bottom:8px}
        .why-card p{font-size:14px;color:#6a8096;line-height:1.6}

        /* TESTIMONIALS */
        .grid-test{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}
        .test-card{background:#fff;border:1.5px solid #deeaf5;border-radius:16px;padding:30px 26px;transition:box-shadow .3s}
        .test-card:hover{box-shadow:0 8px 32px rgba(110,169,228,.15)}
        .stars{color:#f5a623;font-size:17px;margin-bottom:14px}
        .test-card blockquote{font-size:15px;color:#4a6278;line-height:1.7;margin-bottom:14px;font-style:italic}
        .test-card cite{font-size:14px;font-weight:700;color:#062B4A;font-style:normal}

        /* CONTACT */
        .contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:52px;align-items:start}
        .contact-side h3{font-family:'DM Serif Display',serif;font-size:26px;color:#062B4A;margin-bottom:12px}
        .contact-side>p{font-size:15px;color:#5a7589;line-height:1.7;margin-bottom:28px}
        .contact-item{display:flex;align-items:flex-start;gap:14px;padding:16px;background:#f6fbff;border-radius:12px;border:1px solid #deeaf5;margin-bottom:14px}
        .ci-icon{width:40px;height:40px;background:#6EA9E4;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
        .ci-label{font-size:12px;color:#8aa0b4;font-weight:500;margin-bottom:2px}
        .ci-value{font-size:15px;color:#062B4A;font-weight:600}
        .form-box{background:#062B4A;border-radius:20px;padding:34px}
        .form-row2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .fg{margin-bottom:14px}
        .fg label{display:block;font-size:12px;font-weight:600;color:rgba(255,255,255,.75);margin-bottom:5px}
        .fg input,.fg select,.fg textarea{width:100%;padding:11px 14px;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.2);border-radius:9px;color:#fff;font-size:14px;font-family:'DM Sans',system-ui,sans-serif;outline:none;transition:border-color .2s}
        .fg input::placeholder,.fg textarea::placeholder{color:rgba(255,255,255,.35)}
        .fg input:focus,.fg select:focus,.fg textarea:focus{border-color:#6EA9E4;background:rgba(255,255,255,.14)}
        .fg select option{background:#062B4A;color:#fff}
        .fg textarea{resize:none}
        .submit{width:100%;padding:14px;background:#6EA9E4;color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:700;font-family:'DM Sans',system-ui,sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px;transition:background .2s}
        .submit:hover{background:#5595d4}

        /* FOOTER */
        footer{background:#062B4A;color:rgba(255,255,255,.8);padding:56px 24px 28px}
        .footer-inner{max-width:1120px;margin:0 auto}
        .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:36px}
        .footer-brand h3{font-family:'DM Serif Display',serif;font-size:20px;color:#fff;margin-bottom:10px}
        .footer-brand p{font-size:14px;color:rgba(255,255,255,.55);line-height:1.7}
        .footer-col h4{font-size:13px;font-weight:700;color:#fff;margin-bottom:14px;letter-spacing:.5px;text-transform:uppercase}
        .footer-col ul{list-style:none}
        .footer-col li{font-size:14px;color:rgba(255,255,255,.55);padding:3px 0}
        .footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:22px;text-align:center;font-size:13px;color:rgba(255,255,255,.35)}
        .footer-disc{margin-top:5px;font-size:12px;color:rgba(255,255,255,.25)}

        /* WA FLOAT */
        .wa-float{position:fixed;bottom:26px;right:26px;width:56px;height:56px;border-radius:50%;background:#25D366;border:none;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,211,102,.45);z-index:200;transition:transform .2s,box-shadow .2s;animation:waPulse 2.5s ease-in-out infinite}
        .wa-float:hover{transform:scale(1.1);box-shadow:0 6px 26px rgba(37,211,102,.65)}
        @keyframes waPulse{0%,100%{box-shadow:0 4px 18px rgba(37,211,102,.45)}50%{box-shadow:0 4px 28px rgba(37,211,102,.7)}}

        /* MOBILE */
        @media(max-width:768px){
          .nav-links,.nav-actions{display:none}
          .hamburger{display:flex}
          .hero{padding:100px 20px 60px}
          .contact-grid{grid-template-columns:1fr}
          .form-row2{grid-template-columns:1fr}
          .footer-grid{grid-template-columns:1fr;gap:30px}
          .hero-stats{gap:28px}
          .section{padding:60px 20px}
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="logo">INFO<div className="logo-dot"/><span>SERVICE</span></a>
          <div className="nav-links">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#why-us">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-actions">
            <button className="btn-lang" onClick={() => setLanguage(l => l==='es'?'en':'es')}>
              {language==='es'?'🇺🇸 EN':'🇩🇴 ES'}
            </button>
            <a href="#contact" className="btn-cta">{t.nav.btn}</a>
          </div>
          <button className="hamburger" onClick={() => setMobileMenuOpen(o => !o)}>
            <span/><span/><span/>
          </button>
        </div>
        <div className={`mob-menu${mobileMenuOpen?' open':''}`}>
          {[['home',t.nav.home],['services',t.nav.services],['why-us',t.nav.about],['contact',t.nav.contact]].map(([id,label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)}>{label}</a>
          ))}
          <div className="mob-actions">
            <button className="btn-lang" onClick={() => setLanguage(l => l==='es'?'en':'es')}>
              {language==='es'?'🇺🇸 EN':'🇩🇴 ES'}
            </button>
            <a href="#contact" className="btn-cta" onClick={() => setMobileMenuOpen(false)}>{t.nav.btn}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <span className="badge">{t.hero.badge}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.sub}</p>
          <div className="hero-btns">
            <button className="btn-wa" onClick={() => openWhatsApp()}>
              {waIcon} {t.hero.wa}
            </button>
            <a href="#contact" className="btn-secondary">{t.hero.info}</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">7+</div><div className="stat-lbl">{language==='es'?'Servicios disponibles':'Services'}</div></div>
            <div className="stat"><div className="stat-num">2</div><div className="stat-lbl">{language==='es'?'Idiomas de atención':'Languages'}</div></div>
            <div className="stat"><div className="stat-num">100%</div><div className="stat-lbl">{language==='es'?'Comprometidos contigo':'Committed to you'}</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.sub}</p>
          </div>
          <div className="grid-services">
            {t.services.items.map((s,i) => (
              <div key={i} className="card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button className="link-btn" onClick={() => openWhatsApp(`Hola, necesito información sobre: ${s.title}`)}>
                  {t.services.btn} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.why.title}</h2>
            <p>{t.why.sub}</p>
          </div>
          <div className="grid-why">
            {t.why.items.map((w,i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{t.testimonials.sub}</p>
          </div>
          <div className="grid-test">
            {t.testimonials.items.map((test,i) => (
              <div key={i} className="test-card">
                <div className="stars">{'★'.repeat(test.stars)}</div>
                <blockquote>"{test.text}"</blockquote>
                <cite>— {test.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.sub}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-side">
              <h3>{t.contact.infoTitle}</h3>
              <p>{t.contact.infoSub}</p>
              {[
                {icon:'📞', label: language==='es'?'Teléfono':'Phone', val:'443-207-3624 | 829-573-5667'},
                {icon:'✉️', label:'Email', val:'infoserviceusa@gmail.com'},
                {icon:'📍', label: language==='es'?'Ubicación':'Location', val:'Salisbury, Maryland 21804'},
              ].map((c,i) => (
                <div key={i} className="contact-item">
                  <div className="ci-icon">{c.icon}</div>
                  <div><div className="ci-label">{c.label}</div><div className="ci-value">{c.val}</div></div>
                </div>
              ))}
            </div>
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="form-row2">
                <div className="fg">
                  <label>{t.contact.name}</label>
                  <input type="text" required placeholder={t.contact.name} value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})}/>
                </div>
                <div className="fg">
                  <label>{t.contact.phone}</label>
                  <input type="tel" required placeholder="443-000-0000" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})}/>
                </div>
              </div>
              <div className="fg">
                <label>{t.contact.email}</label>
                <input type="email" required placeholder="correo@ejemplo.com" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})}/>
              </div>
              <div className="fg">
                <label>{t.contact.service}</label>
                <select required value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})}>
                  <option value="">{t.contact.selectService}</option>
                  {t.services.items.map((s,i)=><option key={i} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>{t.contact.message}</label>
                <textarea rows="4" placeholder={t.contact.message} value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})}/>
              </div>
              <button type="submit" className="submit">
                {waIcon} {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>INFOSERVICE LLC</h3>
              <p>{language==='es'?'Asistencia migratoria y administrativa para la comunidad hispana en Maryland y más allá.':'Immigration and administrative assistance for the Hispanic community in Maryland and beyond.'}</p>
            </div>
            <div className="footer-col">
              <h4>{t.footer.contactTitle}</h4>
              <ul>
                <li>443-207-3624</li>
                <li>829-573-5667</li>
                <li>infoserviceusa@gmail.com</li>
                <li>Salisbury, MD 21804</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t.footer.servicesTitle}</h4>
              <ul>
                <li>Formularios USCIS</li>
                <li>Ajuste de Estatus</li>
                <li>Mejora de Crédito</li>
                <li>Divorcios RD & MD</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            {t.footer.rights}
            <div className="footer-disc">{t.footer.disclaimer}</div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <button className="wa-float" onClick={() => openWhatsApp()} title="WhatsApp">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </>
  );
};

export default App;
