import { useState, useEffect } from "react";
import "./Carousel.css";

const imagesArray = [
    {  id: 0,
        src: "/carouselImg/pexels-8.jpg",
    },
    {
        id: 1,
        src: "/carouselImg/pexels-7.jpg",
    },
    {
        id: 2,
        src: "/carouselImg/pexels-3.jpg",
    },
    {
        id: 3,
        src: "/carouselImg/pexels-4.jpg",
    },
    {
        id: 4,
        src: "/carouselImg/pexels-5.jpg",
    },
    {
        id: 5,
        src: "/carouselImg/pexels-6.jpg",
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

    function nextImage () {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    };

    function prevImage () {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container">
            <div className= "carouselContainer">
                <img
                    src={imagesArray[currentIndex].src}
                    alt="Carousel Image"
                    className="carouselImg"
                />
                <button
                    className="leftBtn"
                    onClick={prevImage}
                >
                    ◀
                </button>
                <button
                    className="rightBtn"
                    onClick={nextImage}
                >
                    ▶
                </button>
            </div>
            
        </div>
    );
}