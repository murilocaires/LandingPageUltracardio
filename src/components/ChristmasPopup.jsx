import React, { useState, useEffect } from 'react';
import './ChristmasPopup.css'; // Mantivemos o nome do arquivo para facilitar
import anoNovo from "../assets/anonovo.jpg" // ✅ Correto (sem chaves)

const ChristmasPopup = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  
  // Ícones de Ano Novo / Brilhos
  const icons = ['✨', '⭐', '🥂', '🎇', '💫', '🌟', '🍾'];

  useEffect(() => {
    // 1. Criar brilhos espalhados pela tela inteira
    const elements = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      style: {
        // Posição aleatória na tela toda (X e Y)
        left: `${Math.random() * 100}vw`, 
        top: `${Math.random() * 100}vh`, 
        
        // Tamanhos variados
        fontSize: `${Math.random() * 15 + 10}px`, 
        
        // Duração da animação (piscada)
        animationDuration: `${Math.random() * 2+ 2}s`, 
        
        // Atraso para começarem a piscar em momentos diferentes
        animationDelay: `${Math.random() * 5}s` 
      }
    }));
    setSparkles(elements);

    // 2. Timer para mostrar o banner (3.5 segundos)
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {/* Camada dos Brilhos (Fundo) */}
      <div className="newyear-container">
        {sparkles.map((el) => (
          <div 
            key={el.id} 
            className="newyear-sparkle" 
            style={el.style}
          >
            {el.icon}
          </div>
        ))}
      </div>

      {/* Camada do Banner (Modal) */}
      {showBanner && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            {/* --- IMAGEM DE ANO NOVO AQUI --- */}
            {/* Troque este link pela sua imagem de 2024/2025 */}
            <img 
              src={anoNovo} 
              alt="Feliz Ano Novo" 
              className="banner-img" 
            />
            
            <button className="close-btn" onClick={handleClose}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChristmasPopup;