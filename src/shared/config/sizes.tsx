export type Sizes="xs" | "s" | "m" | "l" | "xl";
export const sizes: Sizes[]=["xs","s","m","l","xl"]
export interface FilterProps{
 chosenSize: "xs" | "s" | "m" | "l" | "xl" | null;
  setSize: (size: Sizes | null) => void; 
}