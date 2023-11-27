"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

function NavItems() {
  const [activeIdex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    //when users press esc key it closes the nav items
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isAnyOpen = activeIdex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  {
    /* TODO: add modal to open each product */
  }
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIdex === index) setActiveIndex(null);
          else setActiveIndex(index);
        };

        const isOpen = index === activeIdex;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
