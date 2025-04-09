import HomePageCarousel from "./components/HomePageCarousel/HomePageCarousel.tsx";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground.tsx";

interface HomePageProps {
    carouselIndex : number;
    onCarouselChange : (index : number) => void;
}


const HomePage = ( props : HomePageProps) => {
    const { carouselIndex, onCarouselChange } = props;
    return (
        <>
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
        </>
    )
};

export default HomePage;