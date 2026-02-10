import { motion } from "framer-motion";


const products = [
  {
    id: 1,
    name: "BitterLeaf Soup",
    price: "2500",
    imageSrc: "/img/biterleaf1.jpeg",
    imageAlt: "BitterLeaf soup.",
    href: "#bitterleaf",
  },
  {
    id: 2,
    name: "Oha Soup",
    price: "3000",
    imageSrc: "/img/òha2.jpeg", 
    imageAlt: "Oha Soup.",
    href: "#oha",
  },
  {
    id: 3,
    name: "Smoky Jollof Rice",
    price: "4000",
    imageSrc: "/img/smoky-Nigerian-jollof.webp",
    imageAlt: "Smoky jollof Rice.",
    href: "#jollof",
  },
  {
    id: 4,
    name: "Vegetable Soup",
    price: "3500",
    imageSrc: "/img/vegetable-soup.jpeg",
    imageAlt: "Vegetable Soup.",
    href: "#vegetable",
  },
  {
    id: 5,
    name: "African Salad (Abacha)",
    price: "3000",
    imageSrc: "/img/african-salad.jpeg",
    imageAlt: "African Salad (Abacha).",
    href: "#abacha",
  },
  {
    id: 6,
    name: "BitterLeaf Soup Large", 
    price: "5000",
    imageSrc: "/img/bitterleaf.jpeg",
    imageAlt: "BitterLeaf Soup large portion.",
    href: "#bitterleaf-large",
  },
  {
    id: 7,
    name: "Egusi Soup",
    price: "4000",
    imageSrc: "/img/egusi-soup1.jpeg",
    imageAlt: "Egusi Soup.",
    href: "#egusi",
  },
  {
    id: 8,
    name: "King's Kitchen Special Rice",
    price: "7000",
    imageSrc: "/img/Specal-rice.jpeg", 
    imageAlt: "Igwe kitchen special rice",
    href: "#special-rice",
  },
]
    


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.92 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" }
  },
};

export default function Viewmore() {
  return (
    <div className="bg-orange-50 text-gray-800 pt-10 min-h-screen">
  
  <motion.h1 
        className="font-semibold text-orange-800 text-3xl md:text-4xl text-center mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        MEALS AVAILABLE
      </motion.h1>

         <motion.p
        className=" text-gray-800 text-center "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
     In this kitchen, standards are high, flavors are bold, and every plate tells a story
      </motion.p>
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>


        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-x-6 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.a
              key={product.id}
              href={product.href}
              className="group relative overflow-hidden rounded-xl bg-white p-3 md:p-4 shadow-md hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 border border-gray-100 hover:border-orange-200"
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image with hover effect */}
              <motion.div className="relative overflow-hidden rounded-lg mb-3 aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <motion.img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:opacity-90 xl:aspect-[7/8] transition-all duration-500 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                />
           
                <motion.div 
                  className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1.1 }}
                >
                  &#8358;{product.price}
                </motion.div>
              </motion.div>
              
          
              <div className="text-center">
                <motion.h3 
                  className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-all duration-300 line-clamp-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {product.name}
                </motion.h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
