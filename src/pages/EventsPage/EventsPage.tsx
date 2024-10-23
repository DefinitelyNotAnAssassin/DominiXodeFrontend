
import { useEffect, useState } from "react";
import EventCard from "./components/EventCard";
import { Event } from "@/types/Event";
import { BASE_URL } from "@/utils/constants/UrlConstants";
import Navbar from "@/components/ui/navbar";


const EventPage = () => { 
    
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        fetch(`${BASE_URL}/api/getEvents`)
            .then((response) => response.json())
            .then((data) => setEvents(data));
    }, []);


    return (

        <div>
            <Navbar />
            <div className = "h-screen w-full grid grid-cols-1 md:grid-cols-3 py-20 px-20 gap-8">
                {events.map((event) => (
                    <EventCard key={event.id} title={event.title} description={event.description} image={event.image} id={event.id} location = {event.location} startDate= {event.startDate} endDate={event.endDate} />
                ))}
            </div>
        </div>

    );

} 


export default EventPage;