'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./components/EventCard";
import { Event } from "@/types/Event";
import { BASE_URL } from "@/utils/constants/UrlConstants";
import Navbar from "@/components/ui/navbar";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const EventPage = () => { 
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch(`${BASE_URL}/api/getEvents`)
            .then((response) => response.json())
            .then((data) => setEvents(data));
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Navbar />
            <div className="h-screen w-full grid grid-cols-1 md:grid-cols-3 py-20 px-20 gap-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1, // Stagger effect
                            ease: "easeOut",
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <EventCard 
                                title={event.title} 
                                description={event.description} 
                                image={event.image} 
                                id={event.id} 
                                location={event.location} 
                                startDate={event.startDate} 
                                endDate={event.endDate} 
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default EventPage;