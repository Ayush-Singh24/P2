import { Github, Instagram, Mail, Twitter } from "lucide-react";

const contacts = [
  {
    icon: <Github />,
    link: "https://github.com/ayush-singh24",
    color: "text-primary",
    social: "Github",
  },
  {
    icon: <Mail />,
    link: "mailto:asayushsingh80@gmail.com",
    social: "Mail",
    color: "text-red-400",
  },
  {
    icon: <Twitter />,
    link: "https://x.com/I_m_Ayush_Singh",
    color: "text-blue-400",
    social: "Twitter",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/ayush.singh.24/?theme=dark",
    color: "text-pink-400",
    social: "Instagram",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pb-10">
      <h1 className="text-white/70 text-xl mb-5">Socials</h1>
      <div className="flex gap-5 justify-between">
        {contacts.map(({ icon, link, color, social }) => {
          return (
            <a
              href={link}
              key={link}
              className={`flex items-center justify-center gap-2 ${color}`}
            >
              {icon}
              <p className="hidden sm:block">{social}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
