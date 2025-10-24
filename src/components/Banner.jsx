// Nome do arquivo: Banner.jsx

import React, { useEffect, useRef } from 'react';
import Bradesco from '../assets/bradesco-saude.svg';
import UniaoMedica from '../assets/uniao-medica.png';
import NordesteSaude from '../assets/nordeste_saude.png';
import Amil from '../assets/amil.png';
import Petrobras from '../assets/petrobras.png';
import Atitude from '../assets/atitude.png';
import Sulamerica from '../assets/sulamerica.png';

export function Banner() {
  const planos = [
    { nome: 'União Médica', iconeSrc: UniaoMedica },
    { nome: 'Bradesco', iconeSrc: Bradesco },
    { nome: 'Nordeste Saúde', iconeSrc: NordesteSaude },
    { nome: 'Amil', iconeSrc: Amil },
    { nome: 'Saúde Petrobras', iconeSrc: Petrobras },
    { nome: 'Atitude Saúde', iconeSrc: Atitude },
    { nome: 'Sulamerica Saúde', iconeSrc: Sulamerica },
  ];

  // Texto para a nova faixa de chamada (repetido para garantir o preenchimento)
  // Adicionei um separador "•" para ficar mais elegante no loop
  const callText = "NOSSOS CONVÊNIOS • ";
  const repeatedText = callText.repeat(20); // Repete o texto várias vezes

  const trackRef = useRef(null);
  const groupRef = useRef(null);

  // Este useEffect permanece INALTERADO.
  // Ele controla apenas o marquee dos LOGOS.
  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const speed = 120; // pixels per second, adjust to taste

    const measure = () => {
      const groupWidth = Math.ceil(group.getBoundingClientRect().width);
      track.style.setProperty('--move', `${groupWidth}px`);
      const duration = Math.max(8, groupWidth / speed);
      track.style.setProperty('--duration', `${duration}s`);
    };

    const imgs = Array.from(group.querySelectorAll('img'));
    let loaded = 0;
    const tryMeasure = () => {
      setTimeout(measure, 30);
    };

    if (imgs.length === 0) {
      tryMeasure();
    } else {
      imgs.forEach((img) => {
        if (img.complete) {
          loaded += 1;
        } else {
          img.addEventListener('load', () => {
            loaded += 1;
            if (loaded === imgs.length) tryMeasure();
          }, { once: true });
          img.addEventListener('error', () => {
            loaded += 1;
            if (loaded === imgs.length) tryMeasure();
          }, { once: true });
        }
      });
      if (loaded === imgs.length) tryMeasure();
    }

    let rafId = null;
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => measure());
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // 1. Criamos um container principal para agrupar as duas faixas
    <div className="w-full shadow-lg"> {/* Sombra opcional para destacar o bloco todo */}
      
      {/* --- 2. NOVA FAIXA DE CHAMADA (VERMELHA) --- */}
      <div className="w-full overflow-hidden bg-red-600 text-white "> {/* Fundo vermelho, fina */}
        <div className="marquee-reverse-track">
          {/* Grupo de texto 1 */}
          <span className="marquee-reverse-group font-semibold uppercase text-sm tracking-wider">
            {repeatedText}
          </span>
          {/* Grupo de texto 2 (duplicado para loop) */}
          <span className="marquee-reverse-group font-semibold uppercase text-sm tracking-wider" aria-hidden="true">
            {repeatedText}
          </span>
        </div>
      </div>

      {/* --- 3. FAIXA DE LOGOS ORIGINAL --- */}
      <div className="relative w-full overflow-hidden bg-white py-3  border-gray-200">
        <style jsx>{`
          /* --- Animação Logos (Original) --- */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * var(--move))); }
          }

          .marquee-track {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            will-change: transform;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-duration: var(--duration, 12s);
          }

          .marquee-group {
            display: inline-flex;
            align-items: center;
          }

          /* --- 4. NOVOS ESTILOS PARA A FAIXA DE TEXTO --- */
          
          /* Animação inversa (da esquerda para a direita) */
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); } /* Começa na metade (início do grupo 2) */
            100% { transform: translateX(0); }    /* Termina no início (início do grupo 1) */
          }

          .marquee-reverse-track {
            display: flex;
            white-space: nowrap; /* Impede que o texto quebre a linha */
            will-change: transform;
            /* Define a animação: nome, duração longa (lenta), linear, infinita */
            animation: marquee-reverse 45s linear infinite; 
          }

          .marquee-reverse-group {
            flex-shrink: 0; /* Impede que os grupos de texto encolham */
            padding: 0 0.5rem; /* Um leve espaçamento entre as repetições */
          }
        `}</style>

        {/* Estrutura do marquee de logos (inalterada) */}
        <div className="marquee overflow-hidden">
          <div ref={trackRef} className="marquee-track" style={{'--move': '0px', '--duration': '12s'}}>
            
            {/* Grupo 1 de Logos */}
            <div ref={groupRef} className="marquee-group flex flex-nowrap">
              {planos.map((plano, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] mx-4 text-blue-800 font-semibold text-sm sm:text-base">
                  {plano.iconeSrc && (
                    <img 
                      src={plano.iconeSrc} 
                      alt={`Ícone ${plano.nome}`} 
                      className="w-16 h-16 sm:w-20 sm:h-20 mb-1 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Grupo 2 de Logos (duplicado) */}
            <div className="marquee-group flex flex-nowrap" aria-hidden="true">
              {planos.map((plano, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] mx-4 text-blue-800 font-semibold text-sm sm:text-base">
                  {plano.iconeSrc && (
                    <img 
                      src={plano.iconeSrc} 
                      alt="" 
                      className="w-16 h-16 sm:w-20 sm:h-20 mb-1 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}