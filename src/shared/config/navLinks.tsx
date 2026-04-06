export interface NavLink {
  title: string;
  link?: string;
  children?: {title: string, link: string}[];
}

export const navLinks: NavLink[]= [
  {
    title: "Shop",
    children: [
      { title: "Men", link: "/catalog?sex=men"},
      { title: "Women", link: "/catalog?sex=women" },
    ],
  },
  { title: "On Sale", link: "/catalog?sale=discount" },
  { title: "New Arrivals", link: "/catalog?arrival=new" },
  { title: "Brands", link: "#" },
];
