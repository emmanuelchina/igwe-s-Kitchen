import { motion } from "framer-motion";

export default function About() {
  return (
    // ✅ Fixed: Wrap root div with motion.div
    <motion.div
      className="About"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}  // Fixed y: 50 → y: 0
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="bg-orange-50 py-24 sm:py-32"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}  // Fixed y: 1 → scale: 1
          transition={{ delay: 0.5, duration: 0.9 }}
          viewport={{ once: false }}
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-orange-800">
              KING'S KITCHEN
            </h2>

            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance">
              Feast Like Royalty
            </p>

            <p className="mt-6 text-lg/8 text-gray-800">
              Indulge in the art of African cuisine at Igwe's Kitchen where
              every dish delivers a symphony of flavours and an unforgettable
              dining experience
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
