import React from "react";
import valeriaImage from "../assets/valeria.png";
import murilloImage from "../assets/murillo.png";
import aliceImage from "../assets/alice.jpg";

export function Team() {
  const doctors = [
    {
      name: "Dra. Valéria de Matos Caires",
      role: "Cardiologista / Ultrassonografista / Clínico Geral",
      crm: "CRM-BA 21318 - RQE 23946 / RQE 28101",
      img: valeriaImage,
    },
    {
      name: "Dr. Murillo Caires Ribeiro",
      role: "Cardiologista / Ergometria / Ultrassonografista",
      crm: "CRM-BA 20958 - RQE 23879",
      img: murilloImage,
    },
    {
      name: "Dra. Alice Ramalho Gomes",
      role: "Ginecologista / Estética Íntima",
      crm: "CRM-BA 47636 - RQE 26580",
      img: aliceImage,
    },
  ];

  return (
    <section
      id="team"
      className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-ultracardio-red "
    >
      <div className="flex justify-center mb-8">
        <span className="inline-block bg-white text-ultracardio-red px-4 py-2 rounded-full text-sm font-medium">
          Nossa Equipe
        </span>
      </div>
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white  mb-4">Nossa Equipe</h3>
          <p className="text-xl text-white">
            Profissionais altamente qualificados e especializados
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] text-center hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-gray-400"
              />
              <h4 className="text-lg font-semibold mb-3">{doc.name}</h4>

              {/* Especialidades em cápsulas */}
              <div className="flex flex-wrap gap-1 mb-3 justify-center">
                {doc.role.split(" / ").map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm">{doc.crm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
