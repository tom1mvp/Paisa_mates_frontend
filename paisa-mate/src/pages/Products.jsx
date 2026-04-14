import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../components/CardsProducts';
import Pagination from '../components/Pagination';

import Mate_01 from '../assets/products/mates/Mate01.jpg';
import Mate_02 from '../assets/products/mates/Mate02.jpg';
import Mate_03 from '../assets/products/mates/Mate03.jpg';
import Mate_04 from '../assets/products/mates/Mate04.jpg';
import Mate_05 from '../assets/products/mates/Mate05.jpg';
import Mate_07 from '../assets/products/mates/Mate07.jpg';
import Mate_08 from '../assets/products/mates/Mate08.jpg';
import Mate_09 from '../assets/products/mates/Mate09.jpg';
import Mate_10 from '../assets/products/mates/Mate10.jpg';
import Mate_11 from '../assets/products/mates/Mate11.jpg';
import Mate_12 from '../assets/products/mates/Mate12.jpg';
import Mate_13 from '../assets/products/mates/Mate13.jpg';
import Mate_14 from '../assets/products/mates/Mate14.jpg';
import Mate_15 from '../assets/products/mates/Mate15.jpg';
import Mate_16 from '../assets/products/mates/Mate16.jpg';
import Mate_17 from '../assets/products/mates/Mate17.jpg';
import Mate_18 from '../assets/products/mates/Mate18.jpg';
import Mate_19 from '../assets/products/mates/Mate19.jpg';
import Mate_20 from '../assets/products/mates/Mate20.jpg';
import Mate_21 from '../assets/products/mates/Mate21.jpg';
import Mate_22 from '../assets/products/mates/Mate22.jpg';
import Mate_23 from '../assets/products/mates/Mate23.jpg';
import Mate_24 from '../assets/products/mates/Mate24.jpg';
import Mate_25 from '../assets/products/mates/Mate25.jpeg';
import Mate_26 from '../assets/products/mates/Mate26.jpeg';
import Mate_27 from '../assets/products/mates/Mate27.jpeg';
import Mate_28 from '../assets/products/mates/Mate28.jpeg';
import Mate_29 from '../assets/products/mates/Mate29.jpeg';
import Mate_31 from '../assets/products/mates/Mate31.jpeg';
import Mate_32 from '../assets/products/mates/Mate32.jpeg';
import Mate_33 from '../assets/products/mates/Mate33.jpeg';
import Mate_34 from '../assets/products/mates/Mate34.jpeg';
import Mate_35 from '../assets/products/mates/Mate35.jpeg';
import Mate_36 from '../assets/products/mates/Mate36.jpeg';
import Mate_37 from '../assets/products/mates/Mate37.jpeg';
import Mate_38 from '../assets/products/mates/Mate38.jpeg';
import Mate_39 from '../assets/products/mates/Mate39.jpeg';


import Termo_01 from '../assets/products/termos/Termo01.jpeg';
import Termo_02 from '../assets/products/termos/Termo02.jpeg';
import Termo_05 from '../assets/products/termos/Termo05.jpeg';
import Termo_06 from '../assets/products/termos/Termo06.jpeg';
import Termo_07 from '../assets/products/termos/Termo07.jpeg';
import Termo_08 from '../assets/products/termos/Termo08.jpeg';
import Termo_09 from '../assets/products/termos/Termo09.jpeg';
import Termo_10 from '../assets/products/termos/Termo10.jpeg';

import Matera_01 from '../assets/products/materas/Matera01.jpg';
import Matera_02 from '../assets/products/materas/Matera02.jpg';
import Matera_03 from '../assets/products/materas/Matera03.jpg';
import Matera_04 from '../assets/products/materas/Matera04.jpg';
import Matera_05 from '../assets/products/materas/Matera05.jpg';
import Matera_06 from '../assets/products/materas/Matera06.jpg';
import Matera_07 from '../assets/products/materas/Matera07.jpg';
import Matera_08 from '../assets/products/materas/Matera08.jpg';
import Matera_09 from '../assets/products/materas/Matera09.jpg';
import Matera_10 from '../assets/products/materas/Matera10.jpg';


import Bombilla_01 from '../assets/products/bombillas/Bombilla01.jpg';
import Bombilla_02 from '../assets/products/bombillas/Bombilla02.jpg';
import Bombilla_05 from '../assets/products/bombillas/Bombilla05.jpeg';
import Bombilla_06 from '../assets/products/bombillas/Bombilla06.jpeg';


const Product = () => {
    const { category } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    let products = [];

    if(category === 'mates') {
        products = [
{
        id: 1, 
        name: "Mate de Calabaza Pulido", 
        tag: "Calabaza",
        badge: "Curado Artesanal",
        image: [Mate_01, Mate_02, Mate_24]
    },
    {
        id: 2,
        name: "Mate Artesanal",
        tag: "Algarrobo",
        badge: "Madera Seleccionada",
        image: [Mate_13, Mate_03, Mate_17]
    },
    {
        id: 3,
        name: "Mate Torpedo Repujado",
        tag: "Premium",
        badge: "Edición de Lujo",
        image: [Mate_34, Mate_35, Mate_25]
    },
    {
        id: 4,
        name: "Mate Torpedo de Cuero Crudo",
        tag: "Cuero Crudo",
        badge: "Estilo Tradicional",
        image: [Mate_09, Mate_08, Mate_14]
    },
    {
        id: 5,
        name: "Mate Imperial Clásico",
        tag: "Imperial",
        badge: "Pieza de Autor",
        image: [Mate_22, Mate_15, Mate_29]
    },
    {
        id: 6,
        name: "Mate Camionero Cincelado",
        tag: "Cincelado",
        badge: "Trabajo en Virola",
        image: [Mate_04, Mate_10, Mate_11, Mate_19]
    },
    {
        id: 7,
        name: "Mate Torpedo Campero",
        tag: "Con Pelo",
        badge: "Textura Única",
        image: [Mate_05, Mate_07, Mate_21]
    },
    {
        id: 8,
        name: "Mate Imperial Campero Cincelado",
        tag: "Exclusivo",
        badge: "Serie Limitada",
        image: [Mate_12, Mate_23, Mate_26]
    },
    {
        id: 9,
        name: "Mate Torpedo Terracota",
        tag: "Nuevo Ingreso",
        badge: "Calidad de exportación",
        image:[Mate_32, Mate_31, Mate_33]
    },
    {
        id: 10,
        name: "Mate Ranchero",
        tag: "Exclusivo",
        badge: "Diseño Sasha Original",
        image: [Mate_36, Mate_37, Mate_38, Mate_39]
    }
]
    } else if (category == 'termos') {
        products = [
            {
                id: 1,
                name: "Termo Hudson Black Edition",
                tag: "Acero Inoxidable",
                badge: "12hs de Calor",
                image: [Termo_01, Termo_02]
            },
            {
                id: 2,
                name: "Termo Hudson Steel Classic",
                tag: "Acero Pulido",
                badge: "Máxima Durabilidad",
                image: [Termo_05, Termo_06]
            },
            {
                id: 3,
                name: "Termo Bigstar Plus Black",
                tag: "Con Manija",
                badge: "Fácil Transporte",
                image: [Termo_07, Termo_08]
            },
            {
                id: 4,
                name: "Termo Bigstar Explorer Black",
                tag: "Uso Extremo",
                badge: "Manija Rebatible",
                image: [Termo_09, Termo_10]
            }
        ]
    } else if (category == "materas") {
        products = [
            {
                id: 1,
                name: "Matera Hudson Travel",
                tag: "Línea Adventure",
                badge: "Incluye Neceser",
                image: [Matera_01, Matera_02, Matera_03, Matera_04, Matera_05]
            },

            {
                id: 2,
                name:"Matera tradicional",
                tag: "de Cuero",
                badge:"Costuras reforzadas",
                image:[Matera_06, Matera_07, Matera_08, Matera_09, Matera_10]
            }
        ]
    } else if (category == "bombillas") {
        products = [
            {
                id: 1,
                name: "Bombilla Alpaca Premium Cincelada",
                tag: "Artesanal",
                badge: "Detalles en Bronce",
                image: [Bombilla_01, Bombilla_02]
            },

            {
                id: 2,
                name: "Bombilla Pico de Loro Classic",
                tag: "Acero Inoxidable",
                badge: "Antitapa",
                image: [Bombilla_05, Bombilla_06]
            }
        ]
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const totalPages = Math.ceil(products.length / productsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="min-h-screen bg-[#FDFCFB] pb-20">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-24 mb-16 text-center px-4"
            >
                <h1 className="title text-4xl md:text-6xl text-[#21100B] leading-tight tracking-tight uppercase">
                    Catálogo de {category}
                </h1>
                <div className="w-24 h-1 bg-[#3E5622] mx-auto mt-4 rounded-full" />
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center"
            >
                {currentProducts.map((product) => (
                    <motion.div key={product.id} variants={itemVariants} className="w-full flex justify-center">
                        <CardProduct
                            product={{
                                name: product.name,
                                images: product.image,
                                tag: product.tag,
                                badge: product.badge
                            }} 
                        />
                    </motion.div>
                ))}
            </motion.div>

            <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage} 
                paginate={paginate} 
            />
        </section>
    );
};

export default Product;