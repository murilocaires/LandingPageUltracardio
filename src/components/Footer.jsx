import React from "react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
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
            <p className="text-gray-400 mb-4">
              Cuidando do seu coração com excelência e carinho há mais de 15
              anos.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Consultas
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Eletrocardiograma
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Ecocardiograma
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Teste Ergométrico
                </span>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Sobre Nós
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Nossa Equipe
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Blog</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Contato</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 3456-7890</li>
              <li>(11) 99999-9999</li>
              <li>contato@ultracardio.com.br</li>
              <li>Rua das Palmeiras, 123</li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © 2024 Ultracardio. Todos os direitos reservados. |{" "}
            <span className="hover:text-white cursor-pointer">
              Política de Privacidade
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
