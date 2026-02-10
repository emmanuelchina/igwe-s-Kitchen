import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";



export default function Hero() {
  const navigate = useNavigate(); 

  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
     <img
    src="/img/hero-kitchen.jpg"
    alt="Hero Kitchen"
    className="absolute inset-0 w-full h-full object-cover"
    fetchPriority="high"/>
      
      
       <div className="absolute inset-0 bg-white/50 min-h-screen flex items-center">

      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute top-1/4 left-10 w-20 h-20 animate-bounce float text-4xl opacity-20 text-orange-50">👑</div>
        <div className="absolute top-1/3 right-20 w-24 h-24 animate-bounce slow delay-1000 text-5xl opacity-30 rotate-12 text-orange-50">welcome</div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 animate-bounce text-3xl opacity-25 -rotate-6 text-orange-50">welcome</div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 animate-bounce slow text-4xl opacity-20 text-orange-50">welcome</div>
      </motion.div>



      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
      
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-orange-900 via-orange-800 to-red-600 bg-clip-text text-transparent uppercase tracking-tight leading-tight drop-shadow-lg">
              King's
              <br />
              <span className="text-5xl lg:text-7xl block">Kitchen</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-slate-700 mt-8 mb-12 max-w-lg leading-relaxed font-medium drop-shadow-sm"
          >
            Authentic flavors • Fresh ingredients • African cuisine
          </motion.p>

 
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 100, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
              onClick={() => navigate("/viewmore")} 
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🍽️</span>
              View Meals
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="px-12 py-5 border-3 border-slate-200 bg-white/90 backdrop-blur-md text-slate-800 text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3"
              onClick={() => navigate("/contact")} // ✅ 
            >
              <span className="text-2xl">📞</span>
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

     </div>
    </section>
  );
}
