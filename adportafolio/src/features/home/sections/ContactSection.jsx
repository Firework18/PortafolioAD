import React, { useState } from 'react'
import Button from '../../../shared/ui/buttons/Button'
import SectionHeader from '../../../shared/ui/section/SectionHeader'
import FadeIn from '../../../shared/ui/motion/FadeIn'
import Card from '../../../shared/ui/card/Card'

const inputClass =
  'w-full rounded-lg border border-white/10 bg-carbon/60 px-4 py-3 text-sm text-arena outline-none transition-colors placeholder:text-arena-muted/40 focus:border-celeste/60 focus:ring-2 focus:ring-celeste/20'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
          title="¿Tienes algo en mente?"
          highlight="Hablemos"
          subtitle="Siempre dispuesto a escuchar nuevas ideas y proyectos. No importa si es grande o pequeño, me encanta colaborar."
          watermark="CONTACTO"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Columna Izquierda: Bloque único de presentación */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <Card className="p-8 sm:p-10 h-full flex flex-col gap-8" hoverable={false}>

                <div>
                  <h3 className="text-2xl font-bold font-display text-arena leading-snug">
                    Hablemos de tu
                    <span className="text-celeste"> proyecto</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-arena-muted leading-relaxed font-sans">
                    Me encantaría saber en qué estás trabajando. Estoy abierto a conversar sobre
                    diferentes tipos de proyectos, desde una idea freelance hasta una oportunidad de
                    equipo. Escucho con atención lo que necesitas y aporto lo mejor de mí en cada
                    línea de código.
                  </p>
                  <p className="mt-3 text-sm text-arena-muted leading-relaxed font-sans">
                    Si tienes un proyecto en mente o simplemente quieres charlar sobre tecnología,
                    escríbeme con confianza. Respondo con gusto.
                  </p>
                </div>

                {/* Info de contacto */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2">
                  <a
                    href="mailto:alessandro.delcarpio@gmail.com"
                    className="flex items-center gap-2 group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-arena-muted transition-colors group-hover:border-celeste/30 group-hover:text-celeste">
                      <i className="bi bi-envelope" />
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-arena-muted">Escríbeme</span>
                      <span className="text-sm font-medium text-arena transition-colors group-hover:text-celeste">
                        alessandro.delcarpio@gmail.com
                      </span>
                    </div>
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-arena-muted">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-arena-muted block">Desde</span>
                      <span className="text-sm text-arena font-medium">Lima, Perú · Remoto disponible</span>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="mb-3 block font-mono text-[11px] uppercase tracking-wider text-arena-muted">
                    Redes
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Firework18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-carbon/60 px-4 py-2 font-mono text-xs text-arena-muted transition-colors hover:border-white/20 hover:text-arena"
                    >
                      <i className="bi bi-github text-sm" /> GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-carbon/60 px-4 py-2 font-mono text-xs text-arena-muted transition-colors hover:border-white/20 hover:text-arena"
                    >
                      <i className="bi bi-linkedin text-sm" /> LinkedIn
                    </a>
                  </div>
                </div>

              </Card>
            </FadeIn>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <Card className="p-7 sm:p-9" hoverable={false}>
                {sent && (
                  <div className="alert alert-success mb-6 rounded-lg border border-esmeralda/30 bg-esmeralda/15 font-sans text-sm text-esmeralda">
                    <i className="bi bi-check-circle-fill text-lg" />
                    <span>¡Mensaje enviado! Te responderé lo antes posible.</span>
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
                        placeholder="Juan Pérez"
                        className={inputClass}
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
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                      Asunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Desarrollo web, consultoría, colaboración..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-arena-muted mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto, qué necesitas y en qué te puedo ayudar..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon="bi-send-fill"
                      className="w-full sm:w-auto"
                    >
                      Enviar Mensaje
                    </Button>
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
