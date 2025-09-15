import React from "react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-12 sm:pt-16 sm:pb-8  px-4 sm:px-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="text-2xl font-bold text-ultracardio-red mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Ultracardio
            </div>
            <p className="text-gray-400 mb-4">Cuidando bem de sua saúde</p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Clínico Geral
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Cardiologista
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Ultrassonografia
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Eletrocardiograma
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Teste Ergométrico
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Ecocardiograma
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Mapa 24H
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Holter 24H
                </span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-ultracardio-red mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                (75) 99136-4147
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-ultracardio-red mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>

                <a
                  href="https://instagram.com/ultracardio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-white transition-colors"
                >
                  @ultracardio
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-ultracardio-red mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <div>Edf. Empresarial Maria do Carmo</div>
                  <div>Av. Josias Alves Santiago, S/N</div>
                  <div>Sala 14, Térreo - Serrinha, BA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            ©  Ultracardio.
            
          </p>
        </div>
      </div>
    </footer>
  );
}
