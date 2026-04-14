import React from 'react';
import { SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#21100B] text-[#F5E6CA] pt-16 pb-8 px-4 mt-20 border-t border-[#5D3A2E]/30">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Nombre y Frase */}
                <div className="text-center mb-10">
                    <h2 className="title text-3xl md:text-5xl mb-4 tracking-tighter text-[#F5E6CA]">
                        Paisa Mates
                    </h2>
                    <p className="italic text-sm md:text-base text-[#F5E6CA]/60 max-w-md mx-auto font-light leading-relaxed">
                        "El compañero ideal para cada momento, <br className="hidden sm:block" /> 
                        uniendo tradición y calidad en cada cebada."
                    </p>
                </div>

                {/* Redes Sociales - Solo Instagram y TikTok */}
                <div className="flex gap-10 mb-12">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/paisamates/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-white hover:text-[#3E5622] active:text-[#3E5622] transition-all duration-300 transform hover:scale-125"
                    >
                        <SiInstagram size={32} />
                    </a>

                    {/* TikTok */}
                    <a 
                        href="https://www.tiktok.com/@paisa.mates?_r=1&_t=ZS-94m4KoxISeK" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-white hover:text-[#3E5622] active:text-[#3E5622] transition-all duration-300 transform hover:scale-125"
                    >
                        <SiTiktok size={32} />
                    </a>
                </div>

                {/* Copyright y Ubicación */}
                <div className="w-full border-t border-[#F5E6CA]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#F5E6CA]/30">
                        © {currentYear} Paisa Mates - Todos los derechos reservados.
                    </p>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#F5E6CA]/30">
                        Río Cuarto, Córdoba, Argentina
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;