import { motion } from "framer-motion";

const testimonials = [
  {
    name: "kingsel sunday",
    text: "King’s Kitchen never disappoints — the food is always fresh, flavorful, and perfectly prepared",
    date: "May 10, 2024",
  },
  {
    name: "Samuel Ebuka",
    text: "One of the best meals I’ve had in a long time. Great service and amazing taste.",
    date: "April 10, 2025",
  },
  {
    name: "chidi",
    text: "The consistency at King’s Kitchen is outstanding. ",
    date: "April 12, 2024",
  },
  {
    name: "Albert Goodness",
    text: "You can truly taste the quality and care in every dish.",
    date: "June 10, 2026",
  },
  {
    name: "Emmanuel",
    text: "King’s Kitchen sets the standard for good food and great hospitality. ",
    date: "jan 28, 2026",
  },
   {
    name: "Chiamaka Igwe",
    text: "From the first bite to the last, everything was perfect.",
    date: "Sep 29, 2024",
  },
   {
    name: "Peace Godwin",
    text: "Every visit feels special. Delicious food, clean environment, and friendly staff. Highly recommended.",
    date: "Oct 14, 2026",
  },
   {
    name: "Ugo Sam",
    text: "If you love well-prepared meals, King’s Kitchen is the place to be.",
    date: "Dec 25, 2026",
  },
];

export default function Content() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
  
    
      <div className="absolute inset-0 bg-orange-100" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
          What Customers Think <br /> About Our Meals
        </h2>
        <p className="text-gray-800 max-w-xl mb-12">
          Our in this kitchen is to delivers a symphony of flavours and an unforgettable dining experience
        </p>
      </div>

      <div className="relative flex gap-6 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[340px] rounded-2xl bg-white/10 backdrop-blur-xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-orange-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-orange-800 mb-4">“{item.text}”</p>
              <div className="text-gray-700 text-white/60">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
