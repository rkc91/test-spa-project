import HomePageCarousel from "./components/HomePageCarousel/HomePageCarousel.tsx";

interface HomePageProps {
    carouselIndex : number;
    onCarouselChange : (index : number) => void;
}


const HomePage = ( props : HomePageProps) => {
    const { carouselIndex, onCarouselChange } = props;
    return (
        <>
        <section className="hero">
            <HomePageCarousel 
            carouselIndex={carouselIndex}
            onCarouselChange={onCarouselChange}/>
        </section>
        </>
    )
};

export default HomePage;