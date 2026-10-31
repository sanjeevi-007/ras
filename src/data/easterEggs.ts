export interface EasterEgg {
  id: number;
  trigger: string;
  message: string;
}

export const easterEggs: EasterEgg[] = [
  {
    id: 1,
    trigger: "heart-click-5",
    message: "Okay fine. I really, really like you.",
  },
  {
    id: 2,
    trigger: "hidden-rasgulla",
    message: "You found the Rasgulla.",
  },
  {
    id: 3,
    trigger: "corner-text",
    message: "P.S. you're cute.",
  },
];

export default easterEggs;
