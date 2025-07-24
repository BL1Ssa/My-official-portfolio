import { useState, useEffect } from "react";

export const StarBg = () => {
    // Generate stars and meteors when the component mounts
    //stars and meteors state
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Generate stars when the component mounts
    useEffect(() => {
        generateStars();
        generateMeteors();

        const resizeHandler = () =>{
            generateStars();
        };

        window.addEventListener('resize', resizeHandler)
    }, []);

    const generateStars = () => {
        const starsNumber = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for (let i = 0; i < starsNumber; i++) {
            newStars.push({
                id: i, 
                size: Math.random() * 4 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 1,
            });
        }
        setStars(newStars);
    };

     const generateMeteors = () => {
        const meteorsNumber = 6;
        const newMeteors = [];
        for (let i = 0; i < meteorsNumber; i++) { // fix: use meteorsNumber
            newMeteors.push({
                id: i, 
                size: Math.random() * 2 + 3,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 20,
                animationDuration: Math.random() * 3 + 4,
            });
        }
        setMeteors(newMeteors);
    };

    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle"
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))}

             {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor"
                style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 2+ "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay, // fix: use animationDelay
                    animationDuration: meteor.animationDuration + "s",
                }} />
            ))}
        </div>
    );
}

