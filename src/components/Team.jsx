import React from "react";

export function Team() {
  const doctors = [
    {
      name: "Dr. Carlos Silva",
      role: "Cardiologista Clínico",
      crm: "CRM 12345 - 20 anos de experiência",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    },
    {
      name: "Dra. Maria Santos",
      role: "Ecocardiografista",
      crm: "CRM 54321 - 15 anos de experiência",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    {
      name: "Dr. Roberto Lima",
      role: "Cardiologia Intervencionista",
      crm: "CRM 67890 - 18 anos de experiência",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="py-16 px-2 sm:px-8 lg:px-16 bg-ultracardio-red "
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] text-center hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-gray-800"
              />
              <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
              <p className="text-red-600 font-medium mb-1">{doc.role}</p>
              <p className="text-gray-600 text-sm">{doc.crm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
