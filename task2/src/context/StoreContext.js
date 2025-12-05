import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const products = [
  { id: 1, name: "Handmade Bag", price: 300, category: "Bags", image: "https://picsum.photos/400/200?random=1" },
  { id: 2, name: "Wooden Craft", price: 150, category: "Decor", image: "https://picsum.photos/400/200?random=2" },
  { id: 3, name: "Knitted Scarf", price: 200, category: "Clothes", image: "https://picsum.photos/400/200?random=3" },
  { id: 4, name: "Leather Wallet", price: 120, category: "Accessories", image: "https://picsum.photos/400/200?random=4" },
  { id: 5, name: "Ceramic Vase", price: 80, category: "Decor", image: "https://picsum.photos/400/200?random=5" },
  { id: 6, name: "Silk Tie", price: 90, category: "Accessories", image: "https://picsum.photos/400/200?random=6" },
  { id: 7, name: "Wool Sweater", price: 250, category: "Clothes", image: "https://picsum.photos/400/200?random=7" },
  { id: 8, name: "Canvas Shoes", price: 220, category: "Shoes", image: "https://picsum.photos/400/200?random=8" },
  { id: 9, name: "Wooden Table", price: 450, category: "Furniture", image: "https://picsum.photos/400/200?random=9" },
  { id: 10, name: "Decorative Lamp", price: 130, category: "Decor", image: "https://picsum.photos/400/200?random=10" },

  { id: 11, name: "Leather Belt", price: 110, category: "Accessories", image: "https://picsum.photos/400/200?random=11" },
  { id: 12, name: "Glass Vase", price: 95, category: "Decor", image: "https://picsum.photos/400/200?random=12" },
  { id: 13, name: "Canvas Backpack", price: 320, category: "Bags", image: "https://picsum.photos/400/200?random=13" },
  { id: 14, name: "Wool Hat", price: 70, category: "Clothes", image: "https://picsum.photos/400/200?random=14" },
  { id: 15, name: "Coffee Table", price: 500, category: "Furniture", image: "https://picsum.photos/400/200?random=15" },
  { id: 16, name: "Desk Organizer", price: 60, category: "Decor", image: "https://picsum.photos/400/200?random=16" },
  { id: 17, name: "Sneakers", price: 280, category: "Shoes", image: "https://picsum.photos/400/200?random=17" },
  { id: 18, name: "Knitted Gloves", price: 55, category: "Clothes", image: "https://picsum.photos/400/200?random=18" },
  { id: 19, name: "Wall Clock", price: 150, category: "Decor", image: "https://picsum.photos/400/200?random=19" },
  { id: 20, name: "Leather Shoes", price: 400, category: "Shoes", image: "https://picsum.photos/400/200?random=20" }
];



  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(p => p.id !== id));
  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};
