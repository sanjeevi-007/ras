export interface Memory {
  id: number;
  label: string;
  description: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    label: "We met.",
    description: "The moment that quieted the noise and changed the course of everything.",
  },
  {
    id: 2,
    label: "We talked.",
    description: "Hours felt like minutes, and conversations turned into unspoken comfort.",
  },
  {
    id: 3,
    label: "We laughed.",
    description: "The kind of laughter that comes from deep within and heals every tired day.",
  },
  {
    id: 4,
    label: "We became us.",
    description: "Two different worlds gently finding harmony in the exact same rhythm.",
  },
  {
    id: 5,
    label: "And somehow…",
    description: "Without even trying, you became my favorite thought in every quiet moment.",
  },
  {
    id: 6,
    label: "You became home.",
    description: "Not a place with walls, but the warmth I always want to return to.",
  },
];

export default memories;
