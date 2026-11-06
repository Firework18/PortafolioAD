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
          tone="primary"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Columna Izquierda: Bloque único de presentación */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <Card className="p-8 sm:p-10 h-full flex flex-col gap-8" hoverable={false}>

                <div>
                  <h3 className="text-2xl font-bold font-display text-arena leading-snug">
                    Construyamos algo
                    <span className="text-ambar"> juntos</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-arena-muted leading-relaxed font-sans">
                    Estoy abierto a cualquier tipo de colaboración, ya sea un proyecto freelance,
                    una oportunidad laboral o simplemente intercambiar ideas sobre tecnología.
                    Me gusta trabajar de forma cercana, escuchar bien lo que necesitas y dar lo
                    mejor de mí en cada línea de código.
                  </p>
                  <p className="mt-3 text-sm text-arena-muted leading-relaxed font-sans">
                    Si tienes una idea en la cabeza o un problema que necesita solución digital,
                    no dudes en escribirme. Respondo con gusto.
                  </p>
                </div>

                {/* Info de contacto */}
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:alessandro.delcarpio@gmail.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-celeste group-hover:border-celeste/40 transition-colors">
                      <i className="bi bi-envelope" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-arena-muted block">Email</span>
                      <span className="text-sm text-arena group-hover:text-celeste transition-colors font-medium">
                        alessandro.delcarpio@gmail.com
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-ambar">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-arena-muted block">Ubicación</span>
                      <span className="text-sm text-arena font-medium">Lima, Perú · Remoto disponible</span>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-arena-muted block mb-3">
                    Redes
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Firework18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-carbon border border-white/10 text-xs font-mono text-arena hover:text-celeste hover:border-celeste/40 transition-colors flex items-center gap-2"
                    >
                      <i className="bi bi-github text-sm" /> GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-carbon border border-white/10 text-xs font-mono text-arena hover:text-ambar hover:border-ambar/40 transition-colors flex items-center gap-2"
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
                  <div className="alert mb-6 text-sm font-sans rounded-xl bg-celeste/15 text-celeste border border-celeste/30">
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
                        className="w-full px-4 py-3 rounded-xl bg-carbon/80 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/40 transition-colors outline-none"
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
                        className="w-full px-4 py-3 rounded-xl bg-carbon/80 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/40 transition-colors outline-none"
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
                      className="w-full px-4 py-3 rounded-xl bg-carbon/80 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/40 transition-colors outline-none"
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
                      className="w-full px-4 py-3 rounded-xl bg-carbon/80 border border-white/10 focus:border-celeste/60 focus:ring-1 focus:ring-celeste/60 text-arena text-sm placeholder:text-arena-muted/40 transition-colors outline-none resize-none"
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
