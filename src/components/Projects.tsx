import { AnimatePresence, motion, Variants } from "framer-motion";
import { projects } from "@/utils/constants";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Link,
  Link2,
  Link2Off,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [key, setKey] = useState(0);

  const contentVariants: Variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const imageVariants: Variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setKey((prev) => prev + 1);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) {
        return projects.length - 1;
      }
      if (nextIndex >= projects.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  return (
    <section id="projects" className="flex flex-col gap-10">
      <h1 className="text-2xl font-medium">Recent Projects</h1>
      <div className="relative flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-[-3rem] z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-between w-full">
          <div className="relative h-72 w-60 bg-white/10">
            <motion.div
              key={key}
              className="absolute inset-0 origin-bottom-left"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -6 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                rotate: 6,
              }}
              whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
            >
              <div className="h-full w-full p-2 bg-white shadow-xl">
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={currentIndex}
                      src={"images/" + projects[currentIndex].img}
                      alt={projects[currentIndex].title}
                      className="w-full h-auto min-h-full object-cover"
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        opacity: { duration: 0.3 },
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-start gap-3 w-1/2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                className="flex flex-col gap-3"
                key={currentIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
              >
                <motion.h3 className="text-2xl">
                  {projects[currentIndex].title}
                </motion.h3>
                <motion.p className="text-sm text-white/70">
                  {projects[currentIndex].description}
                </motion.p>
                <div className="flex justify-start gap-3 mt-3">
                  <motion.a
                    href={projects[currentIndex].githubLink}
                    whileHover={{ rotate: [0, 2, -2, 2, -2, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Github className="text-primary" />
                  </motion.a>
                  {projects[currentIndex].prodLink && (
                    <motion.a
                      href={projects[currentIndex].prodLink}
                      whileHover={{ rotate: [0, 2, -2, 2, -2, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Link className="text-blue-400" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={() => navigate(1)}
          className="absolute right-[-3rem] z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
