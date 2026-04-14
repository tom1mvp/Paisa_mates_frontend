import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Mate from '../assets/imgs/icons/mate.svg';
import Termo from '../assets/imgs/icons/termo.svg';
import Matera from '../assets/imgs/icons/matera.svg';
import Bombilla from '../assets/imgs/icons/bombilla.png';

const Card = () => {
    const products = [
        { id: 1, name: 'Mates', image: Mate, path: '/catalogo/mates' },
        { id: 2, name: 'Termos', image: Termo, path: '/catalogo/termos' },
        { id: 3, name: 'Materas', image: Matera, path: '/catalogo/materas' },
        { id: 4, name: 'Bombillas', image: Bombilla, path: '/catalogo/bombillas' }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-items-center px-4 max-w-7xl mx-auto">
            {products.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="bg-[#F5E6CA] rounded-3xl border border-[#5D3A2E]/10 shadow-2xl flex flex-col items-center text-center w-64 overflow-hidden group"
                >
                    <div className="w-20 h-20 bg-[#3E5622] rounded-full flex items-center justify-center mt-10 mb-6 shadow-md border-2 border-white/20">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-contain brightness-0 invert"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl text-[#21100B] font-extrabold mb-10 px-4">
                            {item.name}
                        </h3>
                    </div>

                    <Link to={item.path} className="w-full">
                        <button className="w-full bg-[#3D1D13] py-4 hover:bg-[#21100B] transition-colors duration-300">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#F5E6CA]">
                                Ver Catálogo
                            </span>
                        </button>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

export default Card;