import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="scroll-pr-6 flex justify-between items-center">
      <a>
        <div className="hidden font-bold font-mono text-2xl sm:block">
          Ayush Singh
        </div>
        <div className="block font-bold font-mono text-2xl sm:hidden">AS</div>
      </a>
      <div className="flex">
        <Button
          variant="ghost"
          className="rounded-xl text-white/70 hover:bg-secondary/60"
        >
          resume
        </Button>
        <Button
          variant="ghost"
          className="rounded-xl text-white/70 hover:bg-secondary/60"
        >
          exp
        </Button>
        <Button
          variant="ghost"
          className="rounded-xl text-white/70 hover:bg-secondary/60"
        >
          projects
        </Button>
        <Button
          variant="ghost"
          className="rounded-xl text-white/70 hover:bg-secondary/60"
        >
          contact
        </Button>
      </div>
    </nav>
  );
}
