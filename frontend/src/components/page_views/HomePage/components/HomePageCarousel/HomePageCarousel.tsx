import { Carousel } from "react-bootstrap";
import './HomePageCarousel.css';

interface HomePageCarouselProps {
    carouselIndex : number;
    onCarouselChange?: (index: number) => void;
}
const HomePageCarousel = ( props : HomePageCarouselProps) => {

    const { carouselIndex, onCarouselChange } = props;

    const handleSelect = (selectedIndex : number) => {
        if(onCarouselChange) {
            onCarouselChange(selectedIndex); // inform parent of carousel index change
        }
    };

    return (
        <Carousel activeIndex={carouselIndex}
        onSelect={handleSelect}
        interval={null}
        wrap={false}
        className="carousel">
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Home Slide</h3>
                    <p>This will be linked to Navbar 'Home'.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>About</h3>
                    <p>This will be linked to Navbar 'About'.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Join Us</h3>
                    <p>This will be linked to Navbar 'Join Us'.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default HomePageCarousel;