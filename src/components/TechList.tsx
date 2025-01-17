import { TechIcon } from "@/utils/types";
import Tech from "./ui/tech";

export default function TechList({ list }: { list: TechIcon[] }) {
  return (
    <>
      {list.map((list, index) => (
        <Tech
          key={index + Math.random() * 100}
          icon={list.icon}
          name={list.name}
        />
      ))}
    </>
  );
}
