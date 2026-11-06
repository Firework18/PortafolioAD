import React, { useState } from 'react'
import Button from '../../../shared/ui/buttons/Button'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'
import Card from '../../../shared/ui/card/Card'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 scroll-mt-28">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          tag="06 • Contacto Directo"
          title="¿Tienes un proyecto en mente?"
          highlight="Trabajemos juntos"
          subtitle="Estoy abierto a propuestas de proyectos, oportunidades laborales y colaboraciones tecnológicas. Escríbeme y responderé en breve."
          watermark="CONTACTO"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Columna Izquierda: Tarjetas de Información */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <FadeIn delay={0.1}>
              <Card className="p-6 flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.04] text-celeste text-2xl border border-white/10 flex-shrink-0">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-arena-muted">
                    Correo Electrónico
                  </span>
                  <h3 className="font-bold text-arena font-display text-lg mt-0.5">
                    alessandro.delcarpio@gmail.com
                  </h3>
                  <a
                    href="mailto:alessandro.delcarpio@gmail.com"
                    className="text-xs text-celeste hover:underline font-mono mt-1 inline-block"
                  >
                    Enviar correo directo →
                  </a>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-6 flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.04] text-indigo-tech text-2xl border border-white/10 flex-shrink-0">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-arena-muted">
                    Ubicación y Disponibilidad
                  </span>
                  <h3 className="font-bold text-arena font-display text-lg mt-0.5">
                    Lima, Perú
                  </h3>
                  <p className="text-xs text-esmeralda font-mono mt-1">
                    • Disponible para trabajo remoto o presencial
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="p-6 flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.04] text-ambar text-2xl border border-white/10 flex-shrink-0">
                  <i className="bi bi-share-fill"></i>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-arena-muted">
                    Redes Profesionales
                  </span>
                  <h3 className="font-bold text-arena font-display text-lg mt-0.5">
                    Conéctate conmigo
                  </h3>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://github.com/Firework18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-carbon border border-white/10 text-xs font-mono text-arena hover:text-celeste hover:border-celeste/40 transition-colors flex items-center gap-1.5"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-carbon border border-white/10 text-xs font-mono text-arena hover:text-indigo-tech hover:border-indigo-tech/40 transition-colors flex items-center gap-1.5"
                    >
                      <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <Card className="p-7 sm:p-9" hoverable={false}>
                {sent && (
                  <div className="alert alert-success mb-6 text-sm font-sans rounded-xl bg-esmeralda/15 text-esmeralda border border-esmeralda/30">
                    <i className="bi bi-check-circle-fill text-lg"></i>
                    <span>¡Mensaje enviado con éxito! Te responderé lo más pronto posible.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-carbon/70 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/50 transition-colors outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-carbon/70 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/50 transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                      Asunto o Tipo de Proyecto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Desarrollo de aplicación, consultoría, etc."
                      className="w-full px-4 py-3 rounded-xl bg-carbon/70 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/50 transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre los requerimientos, tiempos y objetivos de tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl bg-carbon/70 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/50 transition-colors outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon="bi-send-fill"
                      className="w-full sm:w-auto"
                    >
                      Enviar Mensaje
                    </Button>
                    <span className="text-xs text-arena-muted font-mono">
                      🔒 Información tratada con confidencialidad
                    </span>
                  </div>
                </form>
              </Card>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
