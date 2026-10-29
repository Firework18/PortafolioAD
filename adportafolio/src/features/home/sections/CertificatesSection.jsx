import React from "react";
import { certificatesData } from "../../../data/CertificatesData";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <span className="badge badge-secondary px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Logros
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            Certificaciones
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-khand">
            Cursos y certificaciones que respaldan mis habilidades prácticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-base-100/70 border border-secondary/20 hover:border-secondary/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-secondary">
                  <i className="bi bi-award-fill text-3xl group-hover:scale-110 transition-transform"></i>
                  <span className="text-xs font-khand font-bold tracking-wider text-gray-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-khand text-white mt-4 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-secondary font-khand mt-1">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-ghost badge-sm font-khand text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {cert.url && cert.url !== "#" && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-secondary hover:underline font-khand uppercase tracking-wider font-semibold mt-6"
                >
                  Ver Credencial <i className="bi bi-arrow-up-right"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
