import React from "react";
import {
  HeartbeatIcon,
  PulseIcon,
  PersonSimpleRunIcon,
  StethoscopeIcon,
  ListChecksIcon,
  CalendarDotsIcon,
  UserIcon,
  HeartIcon,
  MonitorIcon,
  ClockIcon,
  BabyIcon,
} from "@phosphor-icons/react";
export function Services() {
  return (
    <section
      id="servicos"
      className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-white"
    >
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
            <UserIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Clínico Geral</h3>
            <p className="text-gray-600">
              Atendimento médico geral para prevenção e tratamento de doenças
              comuns.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <HeartIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Cardiologista</h3>
            <p className="text-gray-600">
              Especialista em diagnóstico e tratamento de doenças
              cardiovasculares.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <svg
              className="text-ultracardio-red"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="9"
            >
              <path d="M156.267 191.851c2.14-2.143 5.477-2.467 7.933-.772 24.404 16.836 57.197 16.836 81.602 0a8 8 0 1 0-9.086-13.17c-18.969 13.086-44.46 13.087-63.431-.001-8.813-6.078-20.729-4.974-28.332 2.629L88.61 236.878c-6.931 6.931-8.554 17.372-4.04 25.981 23.569 44.95 69.715 72.873 120.43 72.873s96.86-27.923 120.43-72.873c4.514-8.609 2.891-19.051-4.04-25.981l-39.554-39.553a8 8 0 0 0-11.314 11.314l39.554 39.553c1.924 1.923 2.41 4.899 1.185 7.237-20.798 39.663-61.514 64.303-106.26 64.303s-85.462-24.64-106.26-64.303c-1.226-2.338-.739-5.314 1.185-7.237z" />
              <path d="M410 40.5h-21.242C387.042 27.813 376.149 18 363 18h-56.259C303.359 7.565 293.547 0 282 0h-6.5C248.757 0 227 21.757 227 48.5S248.757 97 275.5 97h6.5c11.913 0 21.979-8.052 25.043-19h37.506a8 8 0 0 0 0-16H300a8 8 0 0 0-8 8v1c0 5.514-4.486 10-10 10h-6.5C257.579 81 243 66.421 243 48.5S257.579 16 275.5 16h6.5c5.514 0 10 4.486 10 10a8 8 0 0 0 8 8h63c5.514 0 10 4.486 10 10v4.5a8 8 0 0 0 8 8h29c24.262 0 44 19.738 44 44V420c0 24.262-19.738 44-44 44h-1.903c-21.529 0-39.483-15.546-43.258-36H376c13.233 0 24-10.767 24-24V140c0-13.233-10.767-24-24-24H34c-13.233 0-24 10.767-24 24v264c0 13.233 10.767 24 24 24h108.352l-7.455 19.384c-6.043 15.71 5.575 32.616 22.4 32.616h95.406a8 8 0 0 0 0-16h-95.406c-5.616 0-9.488-5.619-7.467-10.872L159.495 428h160.444a8 8 0 0 0 0-16H34c-4.411 0-8-3.589-8-8v-24h318.742a8 8 0 0 0 0-16H26V140c0-4.411 3.589-8 8-8h342c4.411 0 8 3.589 8 8v264c0 4.411-3.589 8-8 8h-19.903a8 8 0 0 0-8 8c0 33.084 26.916 60 60 60H410c33.084 0 60-26.916 60-60V100.5c0-33.084-26.916-60-60-60z" />
            </svg>
            <h3 className="text-xl font-semibold mb-3">Ultrassonografia</h3>
            <p className="text-gray-600">
              Exames de ultrassom para diagnóstico preciso de diversas condições
              médicas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <BabyIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">
              Obstetrícia e Ginecologia
            </h3>
            <p className="text-gray-600">
              Cuidados especializados para a saúde da mulher, incluindo inserção
              de DIU / Implanon, reposição hormonal e estética íntima.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <PulseIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Eletrocardiograma</h3>
            <p className="text-gray-600">
              Exame não invasivo que registra a atividade elétrica do coração,
              essencial para diagnósticos precisos.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <PersonSimpleRunIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Teste Ergométrico</h3>
            <p className="text-gray-600">
              Avaliação da resposta cardiovascular durante exercício físico
              controlado e monitorado.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <HeartbeatIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Ecocardiograma</h3>
            <p className="text-gray-600">
              Ultrassom do coração que avalia estrutura e funcionamento das
              câmaras cardíacas e válvulas.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <MonitorIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Mapa 24H</h3>
            <p className="text-gray-600">
              Monitoramento ambulatorial da pressão arterial durante 24 horas
              para diagnóstico preciso.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <ClockIcon className="text-ultracardio-red " size={32} />
            <h3 className="text-xl font-semibold mb-3">Holter 24H</h3>
            <p className="text-gray-600">
              Monitoramento contínuo do ritmo cardíaco durante 24 horas para
              detectar arritmias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
