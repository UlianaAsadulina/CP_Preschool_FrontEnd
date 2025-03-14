import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsHandIndex } from "react-icons/bs";
import "./Carousel.css";

const imagesArray = [
    {  id: 0,
        src: "/carouselImg/pexels-0.jpg",
    },
    {
        id: 1,
        src: "/carouselImg/pexels-1.jpg",
    },
    {
        id: 2,
        src: "/carouselImg/pexels-2.jpg",
    },
    {
        id: 3,
        src: "/carouselImg/pexels-3.jpg",
    },
    {
        id: 4,
        src: "/carouselImg/pexels-4.jpg",
    },
    {
        id: 5,
        src: "/carouselImg/pexels-5.jpg",
    },
    {
        id: 6,
        src: "/carouselImg/pexels-6.jpg",
    },
    {
        id: 7,
        src: "/carouselImg/pexels-7.jpg",
    },
    {
        id: 8,
        src: "/carouselImg/pexels-8.jpg",
    },
    {
        id: 9,
        src: "/carouselImg/pexels-9.jpg",
    },
    
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // function nextImage () {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    // };

    // function prevImage () {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    //     );
    // };


    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill onClick={prevImage} className="arrow arrow-left" /> */}
            {imagesArray.map((item, index) => {
                return (
                <img 
                    src={item.src}
                    alt={`Carousel Image ${index}`}            
                    className={currentIndex === index ? "slide" : "slide slide-hidden"}
                    key={index}
                />
                );
            })}
            {/* <BsArrowRightCircleFill onClick={nextImage} className="arrow arrow-right" /> */}
            <span className="indicators">
                {imagesArray.map((_, index) => {
                    return (
                        <button key={index}
                        className={ currentIndex === index ? "indicator" : "indicator indicator-inactive" }
                        onClick={() => setCurrentIndex(index)}
                        ></button>
                        );
                })}
            </span>
        </div>
    );
}
    