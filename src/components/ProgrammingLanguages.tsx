import Tech from "./ui/tech";

export type Language = {
  icon: string;
  name: string;
};
const languages: Language[] = [
  {
    icon: "typescript-logo.svg",
    name: "Typescript",
  },
  {
    icon: "javascript-logo.svg",
    name: "Javascript",
  },
  {
    icon: "go-logo.svg",
    name: "Go",
  },
  {
    icon: "python-logo.svg",
    name: "Python",
  },
  {
    icon: "java-logo.svg",
    name: "JAVA",
  },
  {
    icon: "cpp-logo.svg",
    name: "C++",
  },
  {
    icon: "c-logo.svg",
    name: "C",
  },
  {
    icon: "html-logo.svg",
    name: "html",
  },
];
export default function ProgrammingLanguages() {
  return (
    <>
      {languages.map((lang, index) => (
        <Tech
          key={index + Math.random() * 100}
          icon={lang.icon}
          name={lang.name}
        />
      ))}
    </>
  );
}
