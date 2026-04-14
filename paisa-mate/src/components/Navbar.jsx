import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from '../assets/imgs/Logo.png';

const Navbar = () => {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, 150], [1, 0]);
    const scale = useTransform(scrollY, [0, 150], [1, 0.8]);
    const y = useTransform(scrollY, [0, 150], [0, -100]);

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.nav 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity, y }}
            className="w-full h-20 md:h-24 bg-[#21100B] border-b border-[#5D3A2E]/30 shadow-2xl flex items-center justify-center px-4 md:px-10 shrink-0 z-50 sticky top-0"
        >
            <Link to="/">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3E5622] flex items-center justify-center shrink-0 shadow-xl cursor-pointer"
                >
                    <img 
                        src={Logo} 
                        alt="Paisa Mates Logo" 
                        className="w-32 md:w-44 h-auto min-w-32 md:min-w-44 object-contain drop-shadow-2xl" 
                    />
                </motion.div>
            </Link>
        </motion.nav>
    );
}

export default Navbar;