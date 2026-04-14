import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Carousel from './Carousel';

const ProductCard = ({ product }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const whatsappLink = `https://wa.me/543585722838?text=Hola!%20Me%20interesa%20el%20producto:%20${product.name}%20(${product.tag})`;

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 40, 
            scale: 0.95 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            onClick={() => {
                if (window.innerWidth >= 768 && !showOverlay) {
                    setShowOverlay(true);
                }
            }}
            className={`bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm flex flex-col relative w-full max-w-87.5 transition-shadow duration-500 hover:shadow-2xl ${!showOverlay ? 'md:cursor-pointer' : ''}`}
        >
            <div className="relative w-full aspect-4/5 overflow-hidden bg-zinc-100">
                <Carousel items={product.images} />
                
                <motion.div 
                    variants={itemVariants}
                    className="absolute top-4 left-4 z-30 pointer-events-none"
                >
                    <span className="bg-[#3E5622] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {product.tag}
                    </span>
                </motion.div>
            </div>

            <div className="p-6 flex flex-col items-center text-center flex-1">
                <motion.h3 
                    variants={itemVariants}
                    className="text-[#21100B] text-2xl font-bold leading-tight uppercase tracking-tighter"
                >
                    {product.name}
                </motion.h3>
                
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-1 bg-[#3E5622] rounded-full mt-3 opacity-40" 
                />
                
                <div className="mt-auto w-full pt-6 md:hidden">
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="block w-full">
                        <motion.button 
                            whileTap={{ 
                                scale: 0.92, 
                                backgroundColor: "#21100B", 
                                color: "#ffffff" 
                            }}
                            whileInView={{ 
                                scale: [1, 1.02, 1],
                                transition: { 
                                    scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                                }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-full border-2 border-[#21100B] py-3 rounded-xl font-black uppercase text-[10px] tracking-tighter bg-white text-[#21100B] transition-colors duration-200"
                        >
                            CONSULTAR WHATSAPP
                        </motion.button>
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {showOverlay && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="absolute inset-0 z-50 bg-[#21100B]/95 flex flex-col items-center justify-center p-8 text-center"
                    >
                        <button 
                            onClick={(e) => { e.stopPropagation(); setShowOverlay(false); }}
                            className="absolute top-4 right-4 text-white/50 hover:text-white"
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-full"
                        >
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-widest">
                                {product.name}
                            </h4>
                            <p className="text-[#3E5622] font-bold text-[10px] tracking-[0.2em] mb-8 uppercase">
                                {product.badge}
                            </p>
                            
                            <a 
                                href={whatsappLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                onClick={(e) => e.stopPropagation()}
                                className="block w-full"
                            >
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#21100B] w-full py-4 rounded-xl font-black uppercase text-[12px] tracking-widest shadow-2xl px-8"
                                >
                                    Consultar por WhatsApp
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProductCard;