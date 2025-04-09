import React, { useEffect } from "react";
import Parallax from "parallax-js";
import "./ParallaxBackground.css";

interface ParallaxBackgroundProps {
    carouselIndex: number;
}

const ParallaxBackground = ( props : ParallaxBackgroundProps) => {  

    const { carouselIndex } = props;

    useEffect(() => {
        const scene = document.getElementById("scene");
        if (scene) {
            const parallaxInstance = new Parallax(scene, {
                calibrateX: false,
                calibrateY: false,
                invertX: true,
                invertY: true,
                scalarX: 1,
                scalarY: 1,
                frictionX: 0.05,
                frictionY: 0.05,
            });

            // clean up on unmount
            return () => {
                parallaxInstance.destroy();
            }
        }
    });

    return (
        <div id="scene" className="parallax-container">
            <div data-depth="0.1" className="parallax-layer background-layer">
                <img src="img/Space-BG.png"/>
            </div>
            <div data-depth="0.3" className="parallax-layer moon-layer">
                <img src="img/Moon.png"/>
            </div>
            <div data-depth="0.5" className="parallax-layer surface-layer">
                <img src="img/Surface.png"/>
            </div>
            <div data-depth="0.8" className="parallax-layer ship-layer">
            <img src="img/Ships.png"/>
            </div>
        </div>
    );
};

export default ParallaxBackground;