import { Code, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutMe = () =>{

    return(
        <section id="about" className="py-24 px-24 relative">
            <div className= "container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Fresh Front-End Web Developer & Tech Enthusiast</h3>
                        <p className="text-lg text-muted-foreground">
                            I am passionate about crafting interactive and visually appealing web experiences using modern technologies. Wi
                            th a strong foundation in HTML, CSS, and JavaScript, I enjoy building responsive user interfaces and continuously le
                            arning new frameworks and tools to enhance my skills. My goal is to create seamless digital solutions that delight users 
                            and solve real-world problems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                            href="mailto:brandonlsantosa@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Brandon%2C%20I%20saw%20your%20portfolio%20and..."
                            className="cosmic-btn"
                            >
                                Contact
                            </a>
                            <a 
                                href="/cv.pdf" 
                                download 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Get My CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover min-h-[120px] min-w-[200px] flex flex-col items-center justify-center bg-background/80 rounded-xl">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <span className="text-lg font-medium text-foreground">Front-End</span>
                                <span className="text-sm text-muted-foreground text-center">Building interactive and responsive UIs with React and modern web tech.</span>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover min-h-[120px] min-w-[200px] flex flex-col items-center justify-center bg-background/80 rounded-xl">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <span className="text-lg font-medium text-foreground">UI/UX</span>
                                <span className="text-sm text-muted-foreground text-center">Designing user-friendly and visually appealing interfaces.</span>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover min-h-[120px] min-w-[200px] flex flex-col items-center justify-center bg-background/80 rounded-xl">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-2">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <span className="text-lg font-medium text-foreground">Tech Enthusiast</span>
                                <span className="text-sm text-muted-foreground text-center">Exploring new technologies and best practices in web development.</span>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );

}