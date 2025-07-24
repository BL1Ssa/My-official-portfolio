import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    projectID: 1,
    title: "Catering Landing Page",
    desc: "A Catering Website Using Vanilla HTML, CSS, JS",
    image: "/Projects/projects1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    projectID: 2,
    title: "Raicipe Mobile Web App",
    desc: "A Food-To-Recipe Web App Utilizing Machine Learning (CNN)",
    image: "/Projects/projects2.png",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    url: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are the kinds of projects that will be remembered. 
          Utilizing tools and teamwork to create great websites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => 
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                            {tag}
                        </span>
                    )}
                </div>
                
              </div>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
