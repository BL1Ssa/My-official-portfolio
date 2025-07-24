import { useState } from "react";
import { cn } from "@/lib/utils"; // make sure cn is a valid util or replace with clsx/classnames

const allSkills = [
  // Front-End Skills
  { name: "HTML", level: 85, category: "Front-End" },
  { name: "CSS", level: 80, category: "Front-End" },
  { name: "Javascript", level: 75, category: "Front-End" },
  { 
    name: "ReactJS", 
    level: 68, 
    category: "Front-End", 
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
  },

  // Back-End Skills
  { name: "NodeJS", level: 60, category: "Back-End" },
  { name: "C++", level: 50, category: "Back-End" },
  { name: "Python", level: 65, category: "Back-End" },
  { name: "Java", level: 45, category: "Back-End" },
  { name: "MySQL", level: 55, category: "Back-End" },

  // Design Skills
  { name: "Figma", level: 70, category: "Design" },

  // Other Tools
  { name: "GitHub", level: 80, category: "Tools" },
  { name: "Visual Studio Code", level: 90, category: "Tools" }
];

const categories = ["All", "Front-End", "Back-End", "Design", "Tools"];

export const Skillset = () => { 
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = allSkills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
