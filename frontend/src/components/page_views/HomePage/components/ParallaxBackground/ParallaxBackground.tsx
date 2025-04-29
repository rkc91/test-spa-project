import { useEffect } from "react";
import Parallax from "parallax-js";
import "./ParallaxBackground.css";

interface ParallaxBackgroundProps {
    carouselIndex: number;
}

const ParallaxBackground = ( props : ParallaxBackgroundProps) => {  

    const {carouselIndex} = props;

    useEffect(() => {
        const scene = document.getElementById("scene");
        if (scene) {
            const parallaxInstance = new Parallax(scene, {
                calibrateX: false,
                calibrateY: false,
                invertX: true,
                invertY: true,
                scalarX: 1,
                scalarY: 2,
                frictionX: 0.025,
                frictionY: 0.025,
            });

            // clean up on unmount
            return () => {
                parallaxInstance.destroy();
            }
        }
    }, []);

    return (
        <div id="scene" className="parallax-container">
            <div data-depth="0.0" className="parallax-layer background-layer">
                <img src="img/ParallaxSplashArt/Space.png"/>
            </div>
            <div data-depth="0.05" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Main Planet.png"/>
            </div>
            <div data-depth="0.05" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Sun Flare.png"/>
            </div>
            <div data-depth="0.1" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Small Planet 1.png"/>
            </div>
            <div data-depth="0.1" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Small Planet 2.png"/>
            </div>
            <div data-depth="0.1" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Small Planet 3.png"/>
            </div>
            <div data-depth="0.2" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Middle Ship.png"/>
            </div>
            <div data-depth="0.225" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Medium Planet.png"/>
            </div>
            <div data-depth="0.4" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Top ship.png"/>
            </div>
            <div data-depth="0.5" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Left Ship.png"/>
            </div>
            <div data-depth="0.6" className="parallax-layer">
                <img src="img/ParallaxSplashArt/Large Ship.png"/>
            </div>
        </div>
    );
};

export default ParallaxBackground;