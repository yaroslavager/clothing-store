export interface NavLink {
  title: string;
  link?: string;
  children?: {title: string, link: string}[];
}

export const navLinks = [
  {
    title: "Shop",
    children: [
      { title: "Man", link: "#" },
      { title: "Women", link: "#" },
    ],
  },
  { title: "On Sale", link: "#" },
  { title: "New Arrivals", link: "#" },
  { title: "Brands", link: "#" },
];
