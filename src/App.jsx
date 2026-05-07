import React, { useState, useEffect } from 'react';
import { Globe, Phone, Mail, MapPin, CheckCircle, Users, FileText, CreditCard, Scale, Heart, MessageCircle, Menu, X, ChevronRight, Star } from 'lucide-react';

const App = () => {
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    es: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto',
        contactBtn: 'Contáctanos'
      },
      hero: {
        title: 'Te ayudamos en tus procesos migratorios y administrativos con confianza y experiencia',
        subtitle: 'Especialistas en formularios USCIS, mejora de crédito y divorcios en RD y Maryland',
        ctaWhatsApp: 'Escríbenos por WhatsApp',
        ctaInfo: 'Solicita Información',
        slogan: 'Déjanos hacerlo por ti, déjanos ayudarte'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Ofrecemos asistencia profesional en todos tus procesos migratorios y administrativos',
        items: [
          {
            title: 'Formularios USCIS',
            description: 'Asistencia completa en el llenado de formularios de inmigración',
            icon: '📋'
          },
          {
            title: 'Guía Migratoria',
            description: 'Orientación personalizada en tu proceso migratorio',
            icon: '🗺️'
          },
          {
            title: 'Ajuste de Estatus',
            description: 'Te ayudamos a ajustar tu estatus migratorio',
            icon: '📝'
          },
          {
            title: 'Peticiones Familiares',
            description: 'Reunificación familiar a través de peticiones',
            icon: '👨‍👩‍👧‍👦'
          },
          {
            title: 'Mejora de Crédito',
            description: 'Reparación y mejora de tu historial crediticio',
            icon: '💳'
          },
          {
            title: 'Divorcios en RD',
            description: 'Procesos de divorcio en República Dominicana',
            icon: '⚖️'
          },
          {
            title: 'Divorcios en Maryland',
            description: 'Asistencia en procesos de divorcio en Maryland',
            icon: '📄'
          }
        ],
        cta: 'Más Información'
      },
      why: {
        title: '¿Por qué elegirnos?',
        subtitle: 'Somos tu aliado de confianza en Estados Unidos',
        reasons: [
          {
            title: 'Atención Personalizada',
            description: 'Cada caso es único y lo tratamos con dedicación',
            icon: Users
          },
          {
            title: 'Bilingüe',
            description: 'Asistencia en español e inglés',
            icon: Globe
          },
          {
            title: 'Procesos Rápidos',
            description: 'Organización y eficiencia en cada paso',
            icon: CheckCircle
          },
          {
            title: 'Experiencia Latina',
            description: 'Entendemos las necesidades de nuestra comunidad',
            icon: Heart
          }
        ]
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte. Escríbenos y te responderemos pronto',
        form: {
          name: 'Nombre completo',
          phone: 'Teléfono',
          email: 'Correo electrónico',
          service: 'Servicio de interés',
          servicePlaceholder: 'Selecciona un servicio',
          message: 'Mensaje',
          submit: 'Enviar Mensaje',
          sending: 'Enviando...'
        }
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes',
        subtitle: 'Testimonios reales de personas que confiaron en nosotros',
        items: [
          {
            name: 'María González',
            text: 'Excelente servicio. Me ayudaron con mi ajuste de estatus de manera profesional y rápida.',
            rating: 5
          },
          {
            name: 'Carlos Rodríguez',
            text: 'Gracias a Infoservice pude mejorar mi crédito y ahora califico para una hipoteca.',
            rating: 5
          },
          {
            name: 'Ana Martínez',
            text: 'La atención es personalizada y en español. Me sentí acompañada todo el proceso.',
            rating: 5
          }
        ]
      },
      footer: {
        slogan: 'Déjanos hacerlo por ti, déjanos ayudarte',
        contact: 'Contacto',
        location: 'Salisbury, Maryland 21804',
        rights: 'Todos los derechos reservados',
        disclaimer: 'Infoservice LLC no es un bufete de abogados. Ofrecemos servicios de asistencia administrativa.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact',
        contactBtn: 'Contact Us'
      },
      hero: {
        title: 'We help you with your immigration and administrative processes with confidence and experience',
        subtitle: 'Specialists in USCIS forms, credit improvement, and divorces in DR and Maryland',
        ctaWhatsApp: 'WhatsApp Us',
        ctaInfo: 'Request Information',
        slogan: 'Let us do it for you, let us help you'
      },
      services: {
        title: 'Our Services',
        subtitle: 'We offer professional assistance in all your immigration and administrative processes',
        items: [
          {
            title: 'USCIS Forms',
            description: 'Complete assistance in filling out immigration forms',
            icon: '📋'
          },
          {
            title: 'Immigration Guidance',
            description: 'Personalized guidance in your immigration process',
            icon: '🗺️'
          },
          {
            title: 'Status Adjustment',
            description: 'We help you adjust your immigration status',
            icon: '📝'
          },
          {
            title: 'Family Petitions',
            description: 'Family reunification through petitions',
            icon: '👨‍👩‍👧‍👦'
          },
          {
            title: 'Credit Improvement',
            description: 'Repair and improvement of your credit history',
            icon: '💳'
          },
          {
            title: 'Divorces in DR',
            description: 'Divorce processes in the Dominican Republic',
            icon: '⚖️'
          },
          {
            title: 'Divorces in Maryland',
            description: 'Assistance in divorce processes in Maryland',
            icon: '📄'
          }
        ],
        cta: 'More Info'
      },
      why: {
        title: 'Why Choose Us?',
        subtitle: 'We are your trusted partner in the United States',
        reasons: [
          {
            title: 'Personalized Attention',
            description: 'Each case is unique and we treat it with dedication',
            icon: Users
          },
          {
            title: 'Bilingual',
            description: 'Assistance in Spanish and English',
            icon: Globe
          },
          {
            title: 'Fast Processes',
            description: 'Organization and efficiency in every step',
            icon: CheckCircle
          },
          {
            title: 'Latino Experience',
            description: 'We understand the needs of our community',
            icon: Heart
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you. Write to us and we will respond soon',
        form: {
          name: 'Full name',
          phone: 'Phone',
          email: 'Email address',
          service: 'Service of interest',
          servicePlaceholder: 'Select a service',
          message: 'Message',
          submit: 'Send Message',
          sending: 'Sending...'
        }
      },
      testimonials: {
        title: 'What our clients say',
        subtitle: 'Real testimonials from people who trusted us',
        items: [
          {
            name: 'María González',
            text: 'Excellent service. They helped me with my status adjustment professionally and quickly.',
            rating: 5
          },
          {
            name: 'Carlos Rodríguez',
            text: 'Thanks to Infoservice I was able to improve my credit and now I qualify for a mortgage.',
            rating: 5
          },
          {
            name: 'Ana Martínez',
            text: 'The attention is personalized and in Spanish. I felt accompanied throughout the process.',
            rating: 5
          }
        ]
      },
      footer: {
        slogan: 'Let us do it for you, let us help you',
        contact: 'Contact',
        location: 'Salisbury, Maryland 21804',
        rights: 'All rights reserved',
        disclaimer: 'Infoservice LLC is not a law firm. We offer administrative assistance services.'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `*Nuevo contacto desde la web*\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14432073624?text=${encodedMessage}`, '_blank');
  };

  const openWhatsApp = () => {
    const message = language === 'es' 
      ? '¡Hola! Me gustaría obtener más información sobre sus servicios.'
      : 'Hello! I would like to get more information about your services.';
    window.open(`https://wa.me/14432073624?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Montserrat', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gradient-text {
          background: linear-gradient(135deg, #062B4A 0%, #6EA9E4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(110, 169, 228, 0.1);
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(110, 169, 228, 0.1), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(6, 43, 74, 0.15);
          border-color: #6EA9E4;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-gradient {
          background: linear-gradient(135deg, #062B4A 0%, #0a3d63 50%, #6EA9E4 100%);
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .testimonial-card {
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: scale(1.03);
        }

        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
          }
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }
      `}</style>

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="data:image/png;base64,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"
                alt="Infoservice LLC" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#062B4A] font-medium transition">{t.nav.home}</a>
              <a href="#services" className="text-gray-700 hover:text-[#062B4A] font-medium transition">{t.nav.services}</a>
              <a href="#why-us" className="text-gray-700 hover:text-[#062B4A] font-medium transition">{t.nav.about}</a>
              <a href="#contact" className="text-gray-700 hover:text-[#062B4A] font-medium transition">{t.nav.contact}</a>
            </nav>

            {/* Language Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <Globe className="w-4 h-4 text-[#062B4A]" />
                <span className="text-sm font-medium">{language === 'es' ? '🇺🇸 EN' : '🇩🇴 ES'}</span>
              </button>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#062B4A] text-white rounded-lg hover:bg-[#6EA9E4] transition font-medium"
              >
                {t.nav.contactBtn}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#062B4A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 text-gray-700 hover:text-[#062B4A]">{t.nav.home}</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-[#062B4A]">{t.nav.services}</a>
              <a href="#why-us" className="block py-2 text-gray-700 hover:text-[#062B4A]">{t.nav.about}</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-[#062B4A]">{t.nav.contact}</a>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2 py-2"
              >
                <Globe className="w-4 h-4 text-[#062B4A]" />
                <span className="text-sm font-medium">{language === 'es' ? '🇺🇸 English' : '🇩🇴 Español'}</span>
              </button>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-[#062B4A] text-white rounded-lg hover:bg-[#6EA9E4] transition font-medium"
              >
                {t.nav.contactBtn}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6EA9E4] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                {t.hero.slogan}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight section-title">
                {t.hero.title}
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition font-semibold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.hero.ctaWhatsApp}</span>
                </button>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-[#062B4A] rounded-lg hover:bg-gray-100 transition font-semibold text-center shadow-lg"
                >
                  {t.hero.ctaInfo}
                </a>
              </div>
            </div>
            
            <div className="floating hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop" 
                  alt="Immigration Services"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B4A] mb-4 section-title">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#6EA9E4]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#062B4A] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <button
                  onClick={openWhatsApp}
                  className="text-[#6EA9E4] font-semibold flex items-center space-x-2 hover:space-x-3 transition-all"
                >
                  <span>{t.services.cta}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B4A] mb-4 section-title">
              {t.why.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.why.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why.reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6EA9E4] bg-opacity-10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#062B4A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#062B4A] mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B4A] mb-4 section-title">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-bold text-[#062B4A]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B4A] mb-4 section-title">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#062B4A] to-[#6EA9E4] p-8 md:p-12 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:bg-white/20 transition backdrop-blur-sm"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:bg-white/20 transition backdrop-blur-sm"
                    placeholder="443-207-3624"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:bg-white/20 transition backdrop-blur-sm"
                  placeholder="ejemplo@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t.contact.form.service}</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white focus:border-white focus:bg-white/20 transition backdrop-blur-sm"
                >
                  <option value="" className="text-gray-900">{t.contact.form.servicePlaceholder}</option>
                  {t.services.items.map((service, index) => (
                    <option key={index} value={service.title} className="text-gray-900">{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t.contact.form.message}</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:bg-white/20 transition backdrop-blur-sm resize-none"
                  placeholder={t.contact.form.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-[#062B4A] rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl"
              >
                {t.contact.form.submit}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20 grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-80">Teléfono</p>
                  <p className="font-semibold">443-207-3624</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-80">Email</p>
                  <p className="font-semibold">infoserviceusa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-80">Ubicación</p>
                  <p className="font-semibold">Salisbury, MD 21804</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#062B4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="data:image/png;base64,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"
                alt="Infoservice LLC" 
                className="h-10 mb-4 brightness-0 invert"
              />
              <p className="text-sm opacity-80 leading-relaxed">{t.footer.slogan}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>443-207-3624 | 829-573-5667</p>
                <p>infoserviceusa@gmail.com</p>
                <p>{t.footer.location}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.nav.services}</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Formularios USCIS</p>
                <p>Ajuste de Estatus</p>
                <p>Mejora de Crédito</p>
                <p>Divorcios RD & Maryland</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Infoserviceusa.com</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-sm opacity-80">
            <p>© {new Date().getFullYear()} Infoservice LLC. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div
        className="whatsapp-float"
        onClick={openWhatsApp}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
    </div>
  );
};

export default App;
