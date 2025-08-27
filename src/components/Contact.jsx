import React from "react";

export function Contact() {
  return (
    <section
      id="contato"
      className="pt-20 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 bg-gray-100"
    >
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-ultracardio-red text-white px-4 py-2 rounded-full text-sm font-medium">
            Contato
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Localização e Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para cuidar da sua saúde cardiovascular
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-auto lg:h-64 flex flex-col justify-center transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ultracardio-red mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Endereço</p>
                    <p className="text-gray-600 text-sm">
                      Rua das Palmeiras, 123 - Centro
                      <br />
                      Serrinha, BA - CEP 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ultracardio-red mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">WhatsApp</p>
                    <p className="text-gray-600 text-sm">(75) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ultracardio-red mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-gray-600 text-sm">
                      contato@ultracardio.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-xl h-48 sm:h-56 lg:h-64 flex items-center justify-center transform hover:scale-[1.02] transition-all duration-300 border border-gray-200">
              <div className="text-center p-4">
                <div className="bg-white p-4 rounded-full inline-block mb-3 shadow-lg">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  Mapa do Google Maps
                </p>
                <p className="text-xs text-gray-500 mt-1">Clique para abrir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
