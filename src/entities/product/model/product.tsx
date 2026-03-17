interface Product {
  id: number;
  name: string;
  category: string;
  sex: string;
  style: string;
  color: string;
  size: ("xs" | "s" | "m" | "l" | "xl")[];
  description: string;
  date: "new" | "old";
  img: string;
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "black",
    size: ["xs", "s" , "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id1.jpg",
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
    color: "dark blue",
    size: ["xs", "s" ,"xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id2.jpg",
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
    category: "Shirt",
    sex: "men",
    style: "casual",
    color: "pink",
    size: [ "s" , "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id3.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "orange",
    size: ["xs", "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id4.jpg",
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
    category: "Shirt",
    sex: "men",
    style: "formal",
    color: "green",
    size: ["xs", "s" , "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id5.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "orange",
    size: [ "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id6.jpg",
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
    sex: "men",
    style: "casual",
    color: "light blue",
    size: ["xs", "s"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id7.jpg",
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
    color: "black",
    size: ["s" , "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id8.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "party",
    color: "green",
    size: ["xs", "s" , "m", "l", "xl"],
    description:
      " This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id9.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "dark blue",
    size: ["xs", "s" , "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id10.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "white",
    size: ["xs", "s" , "m", "l", "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "new",
    img: "src/Components/ItemCard/Imgs/photo/id11.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "casual",
    color: "pink",
    size: ["s" , "m",  "xl"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id12.jpg",
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
    category: "T-shirt",
    sex: "men",
    style: "sport",
    color: "black",
    size: ["xs", "s" , "m", "l"],
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus voluptates quam, quaerat eligendi nobis quos consectetur quod, est necessitatibus atque aspernatur eos asperiores magni excepturi rerum autem reprehenderit fuga! ",
    date: "old",
    img: "src/Components/ItemCard/Imgs/photo/id13.jpg",
    reviews: {
      stars: "src/Components/ItemCard/Imgs/stars/id13.svg",
      total: 5.0,
    },

    price: 150,
    discount: 30,
  },
];
