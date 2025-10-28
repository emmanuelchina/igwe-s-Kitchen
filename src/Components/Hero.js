import { motion } from "framer-motion";

export default function Hero() {
  const Lines = ["WELCOME", "TO", "IGWE'S", "KITCHEN"];

  return (
    <div className="Hero">
      <div className="hero1 text-center">
        {Lines.map((line, i) => (
          <motion.h1
            key={i}
            className="welcome text-1xl font-bold mb-5 p-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: i * 1.5,
                  repeat: Infinity,
                  repeatDelay: 0,
                },
              },
            }}
          >
            {line.split("").map((word, j) => (
              <motion.span
                key={j}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 2,
                }}
                className="inline-block mx-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
