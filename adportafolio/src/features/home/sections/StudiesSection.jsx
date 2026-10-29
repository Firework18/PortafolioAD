import React from "react";
import { studiesData } from "../../../data/StudiesData";

export default function StudiesSection() {
  return (
    <section id="studies" className="py-24 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <span className="badge badge-primary px-4 py-2 font-khand font-bold tracking-wider text-sm uppercase">
            Formación
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 font-array text-white">
            Mis Estudios
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-khand">
            Mi trayectoria académica y formación técnica continua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {studiesData.map((item) => (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl bg-base-100/70 border border-primary/20 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary text-2xl group-hover:scale-110 transition-transform">
                  <i className={item.icon}></i>
                </div>
                <span className="badge badge-outline badge-primary font-khand text-xs uppercase">
                  {item.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-khand text-white mt-4">
                {item.degree}
              </h3>
              <p className="text-primary font-semibold text-sm font-khand">
                {item.institution}
              </p>
              <p className="text-xs text-gray-400 font-khand tracking-wider mt-1">
                <i className="bi bi-calendar3 mr-1.5"></i>
                {item.period}
              </p>

              <p className="text-gray-300 text-sm mt-4 leading-relaxed font-khand">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
