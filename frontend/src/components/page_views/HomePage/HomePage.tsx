import { useEffect } from "react";
import HomePageCarousel from "./components/HomePageCarousel/HomePageCarousel.tsx";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground.tsx";

interface HomePageProps {
    carouselIndex : number;
    onCarouselChange : (index : number) => void;
}


const HomePage = ( props : HomePageProps) => {
    const { carouselIndex, onCarouselChange } = props;

    useEffect(() => {
        const handleScrollWheel = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                //scroll down, increase carouselIndex
                onCarouselChange(Math.min(carouselIndex + 1, 2));
            }
            else if (event.deltaY < 0) {
                //scroll up, decrease carouselIndex
                onCarouselChange(Math.max(carouselIndex - 1, 0)); // prevent negative index
            }
        };

        // add mouse scroll listener
        window.addEventListener("wheel", handleScrollWheel);

        // clean up event listener on demount
        return () => {
            window.removeEventListener("wheel", handleScrollWheel);
        };
    }, [carouselIndex, onCarouselChange]);

    return (
        <section className="hero">
            <div className="parallax-wrapper">
                <ParallaxBackground carouselIndex={carouselIndex}/>
            </div>

            <div className="carousel-wrapper">
                <HomePageCarousel 
                carouselIndex={carouselIndex}
                onCarouselChange={onCarouselChange}/>
            </div>
        </section>
    )
};

export default HomePage;