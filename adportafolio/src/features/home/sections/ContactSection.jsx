import React, { useState } from 'react'
import Button from '../../../shared/ui/buttons/Button'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="bg-base-200 py-24 min-h-screen scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <span className="badge badge-secondary px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-khand">
            ¿Tienes un proyecto en mente o una propuesta laboral? Escríbeme y responderé a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-base-100/70 border border-primary/20">
              <div className="text-primary text-2xl mb-2">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h3 className="font-bold text-white font-khand text-lg">Email</h3>
              <p className="text-gray-400 text-sm font-khand">alessandro@example.com</p>
            </div>

            <div className="p-6 rounded-2xl bg-base-100/70 border border-secondary/20">
              <div className="text-secondary text-2xl mb-2">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h3 className="font-bold text-white font-khand text-lg">Ubicación</h3>
              <p className="text-gray-400 text-sm font-khand">Perú</p>
            </div>

            <div className="p-6 rounded-2xl bg-base-100/70 border border-accent/20">
              <div className="text-accent text-2xl mb-2">
                <i className="bi bi-share-fill"></i>
              </div>
              <h3 className="font-bold text-white font-khand text-lg">Redes</h3>
              <div className="flex gap-4 mt-2 text-xl">
                <a
                  href="https://github.com/Firework18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-base-100/80 border border-primary/25 shadow-xl">
            {sent && (
              <div className="alert alert-success mb-6 font-khand text-sm">
                <i className="bi bi-check-circle-fill"></i>
                <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-khand">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-lg bg-base-300 border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-base-300 border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold uppercase tracking-wider text-gray-300 mb-1">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Propuesta de proyecto, oferta, etc."
                  className="w-full px-4 py-2.5 rounded-lg bg-base-300 border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wider text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-2.5 rounded-lg bg-base-300 border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base resize-none transition-colors"
                ></textarea>
              </div>

              <div className="mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon="bi-send-fill"
                  className="w-full md:w-auto"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

