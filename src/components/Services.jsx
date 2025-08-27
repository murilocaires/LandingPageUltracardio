import React from "react";

export function Services() {
  return (
    <section id="servicos" className="py-20 px-2 sm:px-8 lg:px-16 bg-white">
      <div className="flex justify-center mb-8">
        <span className="inline-block bg-ultracardio-red text-white px-4 py-2 rounded-full text-sm font-medium">
          Serviços
        </span>
      </div>
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Exames e consultas especializadas para cuidar da sua saúde
            cardiovascular
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-heart-pulse text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Eletrocardiograma</h3>
            <p className="text-gray-600">
              Exame não invasivo que registra a atividade elétrica do coração,
              essencial para diagnósticos precisos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-stethoscope text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Ecocardiograma</h3>
            <p className="text-gray-600">
              Ultrassom do coração que avalia estrutura e funcionamento das
              câmaras cardíacas e válvulas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-dumbbell text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Teste Ergométrico</h3>
            <p className="text-gray-600">
              Avaliação da resposta cardiovascular durante exercício físico
              controlado e monitorado.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-user-doctor text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">
              Consultas Especializadas
            </h3>
            <p className="text-gray-600">
              Atendimento personalizado com cardiologistas experientes para
              diagnóstico e tratamento.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-clipboard-check text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">
              Check-up Cardiológico
            </h3>
            <p className="text-gray-600">
              Avaliação completa da saúde cardiovascular com bateria de exames
              preventivos.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fa-solid fa-calendar-days text-ultracardio-red text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Acompanhamento</h3>
            <p className="text-gray-600">
              Monitoramento contínuo e personalizado para pacientes com
              condições cardíacas crônicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
