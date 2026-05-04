export interface Product {
  id: number;
  name: string;
  category: string;
  sex: string;
  style: string;
  color?: string[] | null;
  size: ("xs" | "s" | "m" | "l" | "xl")[];
  description: string;
  date: "new" | "old";
  img: string | string[];
  reviews?: {
    stars: string;
    total: number;
  };
  price: number;
  discount?: number | null;
}

export const products: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    category: "T-shirts",
    sex: "men",
    style: "casual",
    color: ["black"],
    size: ["xs", "s", "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: [
      "/imgs/products/id1.jpg",
      "/imgs/products/id1-1.jpg",
      "/imgs/products/id1-2.jpg",
      "/imgs/products/id1-3.jpg",
    ],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id1.svg",
      total: 4.5,
    },
    price: 120,
    discount: null,
  },

  {
    id: 2,
    name: "Skinny Fit Jeans",
    category: "Jeans",
    sex: "men",
    style: "casual",
    color: ["dark blue", "light blue"],
    size: ["xs", "s", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: [
      "/imgs/products/id2.jpg",
      "/imgs/products/id2-1.jpg",
      "/imgs/products/id2-2.jpg",
      "/imgs/products/id2-3.jpg",
    ],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id2.svg",
      total: 3.5,
    },
    price: 260,
    discount: 20,
  },

  {
    id: 3,
    name: "Checkered Shirt",
    category: "Shirts",
    sex: "men",
    style: "casual",
    color: ["pink"],
    size: ["s", "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: ["/imgs/products/id3.jpg", "/imgs/products/id3-1.jpg", "/imgs/products/id3-2.jpg", "/imgs/products/id3-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id3.svg",
      total: 4.5,
    },

    price: 180,
    discount: null,
  },

  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    category: "T-shirts",
    sex: "men",
    style: "casual",
    color: ["orange"],
    size: ["xs", "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: ["/imgs/products/id4.jpg", "/imgs/products/id4-1.jpg", "/imgs/products/id4-2.jpg", "/imgs/products/id4-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id4.svg ",
      total: 4.5,
    },
    price: 160,
    discount: 30,
  },

  {
    id: 5,
    name: "Vertical Striped Shirt",
    category: "Shirts",
    sex: "men",
    style: "formal",
    color: ["green"],
    size: ["xs", "s", "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id5.jpg", "/imgs/products/id5-1.jpg", "/imgs/products/id5-2.jpg", "/imgs/products/id5-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id5.svg",
      total: 5.0,
    },

    price: 232,
    discount: 20,
  },

  {
    id: 6,
    name: "Courage Graphic T-shirt",
    category: "T-shirts",
    sex: "men",
    style: "casual",
    color: ["orange"],
    size: ["m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id6.jpg", "/imgs/products/id6-1.jpg", "/imgs/products/id6-2.jpg", "/imgs/products/id6-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id6.svg",
      total: 4.0,
    },

    price: 145,
    discount: null,
  },

  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    category: "Shorts",
    sex: "women",
    style: "casual",
    color: ["light blue"],
    size: ["xs", "s"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: ["/imgs/products/id7.jpg", "/imgs/products/id7-1.jpg", "/imgs/products/id7-2.jpg", "/imgs/products/id7-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id7.svg",
      total: 3.0,
    },

    price: 80,
    discount: null,
  },

  {
    id: 8,
    name: "Faded Skinny Jeans",
    category: "Jeans",
    sex: "women",
    style: "casual",
    color: ["black"],
    size: ["s", "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id8.jpg", "/imgs/products/id8-1.jpg", "/imgs/products/id8-2.jpg", "/imgs/products/id8-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id8.svg",
      total: 4.5,
    },
    price: 210,
    discount: null,
  },

  {
    id: 9,
    name: "One Life Graphic T-shirt",
    category: "T-shirts",
    sex: "men",
    style: "party",
    color: ["green"],
    size: ["xs", "s", "m", "l", "xl"],
    description:
      " This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. ",
    date: "new",
    img: ["/imgs/products/id9.jpg", "/imgs/products/id9-1.jpg", "/imgs/products/id9-2.jpg","/imgs/products/id9-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id9.svg",
      total: 4.5,
    },

    price: 300,
    discount: 40,
  },

  {
    id: 10,
    name: "Polo with Contrast Trims",
    category: "T-shirts",
    sex: "men",
    style: "casual",
    color: ["dark blue"],
    size: ["xs", "s", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id10.jpg", "/imgs/products/id10-1.jpg", "/imgs/products/id10-2.jpg","/imgs/products/id10-3.jpg" ],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id10.svg",
      total: 4.0,
    },

    price: 242,
    discount: 20,
  },

  {
    id: 11,
    name: "Gradient Graphic T-shirt",
    category: "T-shirts",
    sex: "women",
    style: "casual",
    color: ["white"],
    size: ["xs", "s", "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: ["/imgs/products/id11.jpg", "/imgs/products/id11-1.jpg", "/imgs/products/id11-2.jpg", "/imgs/products/id11-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id11.svg",
      total: 3.5,
    },

    price: 145,
    discount: null,
  },

  {
    id: 12,
    name: "Polo with Tipping Details",
    category: "T-shirts",
    sex: "women",
    style: "casual",
    color: ["pink"],
    size: ["s", "m", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id12.jpg", "/imgs/products/id12-1.jpg", "/imgs/products/id12-2.jpg", "/imgs/products/id12-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id12.svg",
      total: 4.5,
    },

    price: 180,
    discount: null,
  },

  {
    id: 13,
    name: "Black Striped T-shirt",
    category: "T-shirts",
    sex: "men",
    style: "sport",
    color: ["black"],
    size: ["xs", "s", "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: ["/imgs/products/id13.jpg", "/imgs/products/id13-1.jpg", "/imgs/products/id13-2.jpg", "/imgs/products/id13-3.jpg"],
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id13.svg",
      total: 5.0,
    },

    price: 150,
    discount: 30,
  },
];
