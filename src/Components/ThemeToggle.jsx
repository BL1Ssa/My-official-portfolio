import { Moon, Sun } from "lucide-react";
import { useState , useEffect } from "react";
import { cn } from "@/lib/utils";
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const themeStored = localStorage.getItem("theme");

    // Check if the theme is stored in localStorage and set the initial state accordingly
    if(themeStored === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } 
    else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, [])

  const toggleTheme = () => {

    // Toggle the dark mode class on the document element
     if (isDarkMode){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
     }
     else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
     }

  };

  return (
    // Add the onClick handler here
    <button onClick={toggleTheme} className = {cn("fixed max-sm:hidden top-5 right-5 z-50 p-2"
      ,"rounded-full transition-colors duration-300"
      ,"focus:outline-hidden"
      )} >
      {" "}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};