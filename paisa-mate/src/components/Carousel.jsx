import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    return (
        <div className="relative group w-full aspect-square overflow-hidden rounded-2xl shadow-inner bg-[#F5E6CA]">
            {/* Contenedor de Imágenes */}
            <motion.div
                className="flex h-full w-full"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {items.map((img, i) => (
                    <div key={i} className="w-full h-full shrink-0">
                        <img
                            src={img}
                            alt={`Producto ${i + 1}`}
                            className="w-full h-full object-cover select-none pointer-events-none"
                        />
                    </div>
                ))}
            </motion.div>

            {/* Capa invisible para detectar el Swipe (Opcional pero recomendado) */}
            <motion.div 
                className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                    if (info.offset.x < -50) nextSlide();
                    if (info.offset.x > 50) prevSlide();
                }}
            />

            {/* Controles (Botones) - Subidos de Z-index para que funcionen sobre el drag */}
            <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1.5 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <ChevronLeft size={24} />
            </button>

            <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1.5 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicadores (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                            currentIndex === i ? "bg-[#3E5622] w-6" : "bg-white/60 w-2"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;