import { Button } from "./ui/button";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="scroll-pr-6 flex justify-between items-center">
      <a>
        <span className="hidden font-bold font-mono text-2xl sm:block">
          Ayush Singh
        </span>
        <span className="block font-bold font-mono text-2xl sm:hidden">AS</span>
      </a>
      <div className="flex text-white/70">
        <a href="/files/resume_final.pdf" download="resume">
          <Button variant="ghost" className="rounded-xl hover:bg-secondary/60">
            resume
          </Button>
        </a>
        <Button
          onClick={() => scrollToSection("experience")}
          variant="ghost"
          className="rounded-xl hover:bg-secondary/60"
        >
          exp
        </Button>
        <Button
          onClick={() => scrollToSection("projects")}
          variant="ghost"
          className="rounded-xl hover:bg-secondary/60"
        >
          projects
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="ghost"
          className="rounded-xl hover:bg-secondary/60"
        >
          contact
        </Button>
      </div>
    </nav>
  );
}
