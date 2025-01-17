import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="scroll-pr-6 flex justify-between items-center">
      <a>
        <span className="hidden font-bold font-mono text-2xl sm:block">
          Ayush Singh
        </span>
        <span className="block font-bold font-mono text-2xl sm:hidden">AS</span>
      </a>
      <div className="flex text-white/70">
        <Button variant="ghost" className="rounded-xl hover:bg-secondary/60">
          resume
        </Button>
        <Button variant="ghost" className="rounded-xl hover:bg-secondary/60">
          exp
        </Button>
        <Button variant="ghost" className="rounded-xl hover:bg-secondary/60">
          projects
        </Button>
        <Button variant="ghost" className="rounded-xl hover:bg-secondary/60">
          contact
        </Button>
      </div>
    </nav>
  );
}
