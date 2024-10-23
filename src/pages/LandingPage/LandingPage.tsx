import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowDown } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect } from 'react';
import { BASE_URL } from '@/utils/constants/UrlConstants';
import Navbar from '@/components/ui/navbar';


type CarouselItem = { 
    image: string;
    title: string;
    description: string;

} 

export default function LandingPage() {
   const CarouselItems: CarouselItem[] = [ 
        {
            image: "/static/domini_xode_logo.jpg",
            title: "Domini Xode",
            description: "The Student Organization of the Bachelor of Science in Information Technology at St. Dominic College of Asia ",
        },
        {
            image: "/static/domini_xode_outreach.jpg",
            title: "Outreach",
            description: "",
        },
        {
            image: "/static/domini_xode_event.jpg",
            title: "Events and Activities",
            description: "",
        },
    ];

    const [carouselImages, setCarouselImages] = useState<string[]>([]);

    useEffect(() => {
        setCarouselImages(CarouselItems.map((item) => item.image));
    }, [
   ]);


    return (

        <>
        <Navbar isDark isTransparent />
        <section className="relative h-screen flex flex-col overflow-hidden">
            <Carousel
                className="flex-1 w-full h-full"
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
            >
                <CarouselContent>
                    {CarouselItems.map((item, index) => (
                        <CarouselItem key={index} className="relative w-full h-full">
                            <div className="absolute z-20 inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div>
                                        <h1 className="text-4xl font-semibold mb-4 leading-tight">
                                            {item.title}
                                        </h1>
                                        <p className=" mb-8">
                                            {item.description}
                                        </p>
                                 
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
                            <img
                                src={BASE_URL + item.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-screen object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
         
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <ArrowDown className="text-white h-8 w-8" />
            </div>
        </section>
        </>
        
    );
}
