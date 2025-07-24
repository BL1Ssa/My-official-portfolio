import { ThemeToggle } from "../Components/ThemeToggle.jsx";
import { StarBg } from "../Components/StarBg.jsx";  
import { Navbar } from "../Components/Navbar.jsx";
import { HeroSection } from "../Components/HeroSection.jsx";
import { AboutMe } from "../Components/AboutMe.jsx";
import { Skillset } from "../Components/Skillset";
import { Projects } from "../Components/Projects.jsx";

export const Home = () => {
    
    return (
    
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/*Theme toggle*/}
    <ThemeToggle />

    {/*Background effect*/}
    <StarBg />
    {/*navbar*/}
    <Navbar />

    {/*content*/}
    <main>
        <HeroSection />
        <AboutMe />
        <Skillset />
        <Projects />
        {/* Add other sections like Skills, Projects, etc. here */}
    </main>
    {/*footer*/}

    </div>
    
    );
};