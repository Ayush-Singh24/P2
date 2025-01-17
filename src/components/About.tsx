import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
export default function About() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleEmailClick = () => {
    window.location.href = "mailto:asayushsingh80@gmail.com";
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <Avatar className="size-20">
          <AvatarImage src="/images/ayush.png" className="size-20" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="text-3xl font-semibold flex flex-col gap-3">
          <div>Hey! I am Ayush.</div>
          <div
            className="flex items-center gap-2 cursor-pointer w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleEmailClick}
          >
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <div className="h-5 w-40 relative overflow-hidden text-sm text-white/70 ">
              <AnimatePresence>
                <motion.div
                  className="absolute"
                  key={1}
                  initial={{ y: 0 }}
                  animate={{ y: isHovered ? -30 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span>Looking for Internship!</span>
                </motion.div>
                <motion.div
                  className="absolute flex items-center gap-1"
                  key={2}
                  initial={{ y: 30 }}
                  animate={{ y: isHovered ? 0 : 30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span>Click to reach out!</span>
                  <Mail className="text-white/70" size={20} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <p>
        Full-stack developer, passionate about crafting scalable, efficient, and
        secure applications that deliver seamless user experiences.
      </p>
    </section>
  );
}
