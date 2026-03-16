export interface FooterLinks {
  title: string;
  link?: string;
  children: { title: string; link?: string }[];
}

export const footerLinks: FooterLinks[] = [
  {
    title: "Company",
    children: [
      { title: "About", link: "#" },
      { title: "Features", link: "#" },
      { title: "Works", link: "#" },
      { title: "Career", link: "#" },
    ],
  },

  {
    title: "Help",
    children: [
      { title: "Customer Support", link: "#" },
      { title: "Delivery Details", link: "#" },
      { title: "Terms & Conditions", link: "#" },
      { title: "Privacy Policy", link: "#" },
    ],
  },

  {
    title: "FAQ",
    children: [
      { title: "Account", link: "#" },
      { title: "Manage Deliveries", link: "#" },
      { title: "Orders", link: "#" },
      { title: "Payments", link: "#" },
    ],
  },

  {
    title: "Resources",
    children: [
      { title: "Free eBooks", link: "#" },
      { title: "Development Tutorial", link: "#" },
      { title: "How to - Blog", link: "#" },
      { title: "Youtube Playlist", link: "#" },
    ],
  },
];
