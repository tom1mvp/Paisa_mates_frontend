import { motion } from "framer-motion";
import Card from "../components/Cards";

const Home = () => {
    return (
        <main className="w-full min-h-screen pt-12 md:pt-20 px-4">
            
            <div className="flex flex-col items-center w-full max-w-4xl mx-auto mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl md:text-6xl text-[#21100B] text-center leading-tight tracking-tight"
                >
                    Bienvenidos a <br className="hidden sm:block" /> 
                    <span className="text-[#3E5622]">Paisa Mates</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    /* Bajamos el tamaño del párrafo y el margen */
                    className="subtitle text-sm md:text-lg text-[#3D1D13]/70 text-center mt-4 max-w-xl"
                >
                    Tradición artesanal en cada cebada.
                </motion.p>
            </div>

            <div className="w-full max-w-6xl mx-auto mt-20">
                <Card />
            </div>

        </main>
    );
};

export default Home;