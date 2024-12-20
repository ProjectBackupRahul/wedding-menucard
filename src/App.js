import "./styles.css";
import Menu from "./Components/Menu";
import ResponsiveFooter from "./Components/Footer";
import Categories from "./Components/Categories";
import items from "./Data/data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      
      </section>
      <ResponsiveFooter />
    </main>
  );
}
