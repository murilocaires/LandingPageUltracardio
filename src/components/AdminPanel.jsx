import React, { useState, useEffect } from 'react';
import { 
  SignOut, 
  Save, 
  User, 
  Heart, 
  Baby, 
  Phone, 
  MapPin,
  InstagramLogo,
  Building,
  FileText,
  Image as ImageIcon
} from '@phosphor-icons/react';

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    // Hero Section
    hero: {
      title: 'Cuidando da sua saúde com excelência e carinho',
      subtitle: 'Especialistas em cardiologia, obstetrícia e ultrassonografia com tecnologia de ponta e atendimento humanizado para cuidar da sua saúde integral.',
      whatsappMessage: 'Olá, eu gostaria de agendar um procedimento.'
    },
    // About Section
    about: {
      title: 'Excelência em Medicina',
      description: 'Localizada no município de Serrinha na Bahia, a Ultracardio é referência em cuidados médicos especializados, oferecendo diagnósticos precisos em cardiologia, obstetrícia e ultrassonografia para preservar e melhorar a saúde integral de nossos pacientes.',
      mission: 'Nossa missão é proporcionar cuidados médicos de excelência, combinando tecnologia de ponta com o atendimento humanizado, sempre priorizando o bem-estar e a qualidade de vida de cada paciente.'
    },
    // Contact Info
    contact: {
      phone: '(75) 99136-4147',
      address: 'Edf. Empresarial Maria do Carmo, Av. Josias Alves Santiago, S/N, Sala 14, Térreo, Serrinha, BA',
      instagram: 'instagram.com/ultracardio'
    },
    // Team
    team: [
      {
        name: 'Dra. Valéria de Matos Caires',
        role: 'Cardiologista / Ultrassonografista / Clínico Geral',
        crm: 'CRM-BA 21318 - RQE 23946 / RQE 28101'
      },
      {
        name: 'Dr. Murillo Caires Ribeiro',
        role: 'Cardiologista / Ergometria / Ultrassonografista',
        crm: 'CRM-BA 20958 - RQE 23879'
      },
      {
        name: 'Dra. Alice Ramalho Gomes',
        role: 'Ginecologista / Estética Íntima',
        crm: 'CRM-BA 47636 - RQE 26580'
      }
    ]
  });

  const tabs = [
    { id: 'hero', name: 'Hero', icon: Heart },
    { id: 'about', name: 'Sobre', icon: FileText },
    { id: 'contact', name: 'Contato', icon: Phone },
    { id: 'team', name: 'Equipe', icon: User },
    { id: 'services', name: 'Serviços', icon: Building }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleTeamChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      team: prev.team.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const handleSave = () => {
    // Aqui você implementaria a lógica para salvar no backend
    console.log('Dados salvos:', formData);
    alert('Alterações salvas com sucesso!');
    setIsEditing(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hero':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seção Hero</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título Principal
              </label>
              <textarea
                value={formData.hero.title}
                onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtítulo
              </label>
              <textarea
                value={formData.hero.subtitle}
                onChange={(e) => handleInputChange('hero', 'subtitle', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem do WhatsApp
              </label>
              <input
                type="text"
                value={formData.hero.whatsappMessage}
                onChange={(e) => handleInputChange('hero', 'whatsappMessage', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seção Sobre</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                value={formData.about.title}
                onChange={(e) => handleInputChange('about', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição Principal
              </label>
              <textarea
                value={formData.about.description}
                onChange={(e) => handleInputChange('about', 'description', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Missão
              </label>
              <textarea
                value={formData.about.mission}
                onChange={(e) => handleInputChange('about', 'mission', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={3}
              />
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone/WhatsApp
              </label>
              <input
                type="text"
                value={formData.contact.phone}
                onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Endereço
              </label>
              <textarea
                value={formData.contact.address}
                onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="text"
                value={formData.contact.instagram}
                onChange={(e) => handleInputChange('contact', 'instagram', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Equipe Médica</h3>
            
            {formData.team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Médico {index + 1}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleTeamChange(index, 'name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Especialidades
                    </label>
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleTeamChange(index, 'role', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CRM/RQE
                    </label>
                    <input
                      type="text"
                      value={member.crm}
                      onChange={(e) => handleTeamChange(index, 'crm', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'services':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Serviços</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Nota:</strong> A edição de serviços será implementada em uma versão futura.
                Por enquanto, os serviços são gerenciados diretamente no código.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-600 mr-3" weight="bold" />
              <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isEditing 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isEditing ? 'Modo Edição' : 'Editar'}
              </button>
              
              {isEditing && (
                <button
                  onClick={handleSave}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </button>
              )}
              
              <button
                onClick={onLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center"
              >
                <SignOut className="w-4 h-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-red-100 text-red-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
