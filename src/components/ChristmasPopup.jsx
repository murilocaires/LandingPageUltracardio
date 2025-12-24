import React, { useState, useEffect } from 'react';
import './ChristmasPopup.css'; // Importando o CSS acima
import natal from "../assets/natal.jpg"

const ChristmasPopup = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [rainElements, setRainElements] = useState([]);
  
  // Lista de emojis que vão cair
  const icons = ['🎄', '🎁', '🎅', '❄️', '⭐', '🕯️', '🍪'];

  useEffect(() => {
    // 1. Gerar os elementos da chuva apenas uma vez ao montar
    const elements = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      style: {
        left: `${Math.random() * 100}vw`, // Posição horizontal aleatória
        animationDuration: `${Math.random() * 2 + 3}s`, // Duração entre 3s e 5s
        fontSize: `${Math.random() * 20 + 20}px`, // Tamanho aleatório
        animationDelay: `${Math.random() * 2}s` // Atraso para não caírem todos juntos
      }
    }));
    setRainElements(elements);

    // 2. Timer para mostrar o banner após 3.5 segundos
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3500);

    // Limpeza do timer caso o usuário saia da página antes
    return () => clearTimeout(timer);
  }, []);

  // Função para fechar o modal
  const handleClose = () => {
    setShowBanner(false);
    // Opcional: Limpar a chuva também ao fechar? 
    // Se quiser, descomente a linha abaixo:
    // setRainElements([]); 
  };

  return (
    <>
      {/* Camada da Chuva de Emojis */}
      {rainElements.length > 0 && (
        <div className="christmas-rain-container">
          {rainElements.map((el) => (
            <div 
              key={el.id} 
              className="christmas-emoji" 
              style={el.style}
            >
              {el.icon}
            </div>
          ))}
        </div>
      )}

      {/* Camada do Modal (Banner) */}
      {showBanner && (
        <div className="christmas-modal-overlay">
          <div className="christmas-modal-content">
            
            {/* INSIRA SUA IMAGEM AQUI NO SRC */}
            <img 
              src={natal} 
              alt="Feliz Natal" 
              className="christmas-banner-img" 
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