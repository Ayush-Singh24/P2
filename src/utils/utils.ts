import { tailwindTextColors } from "./constants";

export const getRandomTextColor = (): (typeof tailwindTextColors)[number] => {
  return tailwindTextColors[
    Math.floor(Math.random() * tailwindTextColors.length)
  ];
};
