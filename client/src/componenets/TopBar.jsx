import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove 'dark' class based on isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="flex justify-between px-4 py-4">
        <div className="flex ml-8 items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="lucide lucide-leaf"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <Link to="/">
            <h1 className="text-lg  font-bold">StyleHive</h1>
          </Link>
        </div>
        <ul className="flex gap-8 mr-6 justify-end">
          <Link to="/store">
            <li>Store</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/signup">
            <li>Signin/Register</li>
          </Link>
          <Switch
            id="airplane-mode"
            onCheckedChange={toggleDarkMode}
            checked={isDarkMode}
          />
        </ul>
      </div>
    </div>
  );
}
