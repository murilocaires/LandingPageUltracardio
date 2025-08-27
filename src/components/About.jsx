import { Check, ArrowRight, Heart } from "@phosphor-icons/react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-ultracardio-gray py-20 px-2 sm:px-8 lg:px-16"
    >
      <div className="container mx-auto px-4">
        {/* Tag centralizada */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-ultracardio-red text-white px-4 py-2 rounded-full text-sm font-medium">
            Sobre a Ultracardio
          </span>
        </div>

        {/* Título centralizado */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Excelência em{" "}
          <span className="text-ultracardio-red">Cardiologia</span>
        </h2>

        {/* Grid com texto lado a lado */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Coluna esquerda - Texto */}
          <div>
            <p className="text-lg text-ultracardio-gray-dark mb-6 leading-relaxed">
              Há mais de duas décadas, a Ultracardio tem sido referência em
              cuidados cardiológicos, oferecendo diagnósticos precisos e
              tratamentos inovadores para preservar e melhorar a saúde
              cardiovascular de nossos pacientes.
            </p>

            <p className="text-lg text-ultracardio-gray-dark mb-8 leading-relaxed">
              Nossa missão é proporcionar cuidados cardiológicos de excelência,
              combinando tecnologia de ponta com o atendimento humanizado,
              sempre priorizando o bem-estar e a qualidade de vida de cada
              paciente.
            </p>
          </div>

          {/* Coluna direita - Lista de diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Tecnologia Avançada",
                desc: "Equipamentos de última geração",
              },
              {
                title: "Equipe Especializada",
                desc: "Médicos altamente qualificados",
              },
              {
                title: "Atendimento Humanizado",
                desc: "Cuidado personalizado",
              },
              { title: "Resultados Rápidos", desc: "Diagnósticos precisos" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-ultracardio-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={16} weight="bold" color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-ultracardio-gray-dark text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
