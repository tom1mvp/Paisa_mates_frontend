import React from 'react';
import { motion } from 'framer-motion';

const Pagination = ({ totalPages, currentPage, paginate }) => {
    if (totalPages <= 1) return null;

    return (
        <nav className="flex justify-center items-center space-x-4 mt-16 pb-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <motion.button
                    key={number}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(number)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 font-bold text-lg ${
                        currentPage === number
                            ? "bg-[#21100B] border-[#21100B] text-white shadow-lg"
                            : "bg-white border-zinc-200 text-zinc-400 hover:border-[#3E5622] hover:text-[#3E5622]"
                    }`}
                >
                    {number}
                </motion.button>
            ))}
        </nav>
    );
};

export default Pagination;