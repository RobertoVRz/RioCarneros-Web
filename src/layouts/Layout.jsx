import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { barlow } from "@/fonts";

function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div data-theme={theme}>
      <Navbar handleTheme={handleTheme} />
      <main className={barlow.className} data-theme={theme}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
