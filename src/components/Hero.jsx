import React from "react";
import { Heartbeat } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-white to-[var(--ultracardio-gray)] pt-24 sm:pt-28 px-2 sm:px-8 lg:px-16 py-16 sm:py-20 cursor-default"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div className="text-center md:text-left md:flex md:items-center md:h-full">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Cuidando da sua saúde com{" "}
                <span className="text-[var(--ultracardio-red)]">
                  excelência
                </span>{" "}
                e carinho
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Especialistas em cardiologia com tecnologia de ponta e
                atendimento humanizado para cuidar da sua saúde cardiovascular.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--ultracardio-red)] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-700 transition inline-flex items-center cursor-pointer"
              >
                {/* Ícone WhatsApp */}
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Imagem - Ocultada em mobile */}
          <div className="relative hidden md:block">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9bf232fe7a-e0caa0a7d8a26dfaed77.png"
              alt="Interior moderno da clínica de cardiologia"
            />
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                {/* Ícone Heartbeat do Phosphor Icons */}
                <Heartbeat
                  className="w-5 h-5 mr-2 text-[var(--ultracardio-red)]"
                  weight="fill"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    15+ anos
                  </p>
                  <p className="text-xs text-gray-600">de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
