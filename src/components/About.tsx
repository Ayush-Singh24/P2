import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import TechList from "./TechList";
import { frameworks, languages, tools } from "@/utils/constants";

const tabs = [
  {
    id: "languages",
    label: "Languages",
    component: <TechList list={languages} />,
  },
  {
    id: "frameworks",
    label: "Frameworks",
    component: <TechList list={frameworks} />,
  },
  { id: "tools", label: "Tools", component: <TechList list={tools} /> },
];
export default function About() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("languages");
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
      <div className="space-y-4">
        <div className="flex gap-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/70 hover:text-white/90"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-md"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-4 gap-2"
          >
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
