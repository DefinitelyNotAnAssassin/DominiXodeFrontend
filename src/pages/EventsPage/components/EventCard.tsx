import { Card, CardContent, CardDescription, CardTitle,CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Event } from "@/types/Event";
import TruncateString from "@/utils/helpers/StringHelper";
import { DEFAULT_EVENT_IMAGE } from "@/utils/defaults/ImageDefaults";

const EventCard = (props : Event) => { 

    return (
        <Card className="w-full col-span-1 ">
            <CardHeader className="p-0 mb-8"> 
                <img src={DEFAULT_EVENT_IMAGE} alt="Article Image" className = "object-cover h-80 rounded-lg" />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-2xl">{props.title}</CardTitle>
                <CardDescription className="text-lg">{TruncateString(props.description, 64)}</CardDescription>
            </CardContent>

        </Card>
    )


} 



export default EventCard