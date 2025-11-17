"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="btn btn-outline-secondary d-flex align-items-center gap-2"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <Moon size={18} />
          Dark
        </>
      ) : (
        <>
          <Sun size={18} />
          Light
        </>
      )}
    </button>
  );
}
