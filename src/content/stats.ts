export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: "Projects Delivered", value: 25, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Years Experience", value: 5, suffix: "+" },
];
