import { Card, CardContent, CardDescription, CardTitle,CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Article } from "@/types/Article";
import TruncateString from "@/utils/helpers/StringHelper";

const ArticleCard = (props : Article) => { 

    return (
        <Card className="w-full h-full col-span-1 ">
            <CardHeader className="p-0 mb-8"> 
                <img src={props.image} alt="Article Image" className = "object-cover h-80 rounded-lg" />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-2xl">{props.title}</CardTitle>
                <CardDescription className="text-lg">{TruncateString(props.description, 64)}</CardDescription>
            </CardContent>
            <CardFooter>
                <Link to={`/articles/${props.id}`} className="text-white z-20 w-full bg-blue-700 p-2 rounded-lg">Read Article</Link>
            </CardFooter>
        </Card>
    )


} 



export default ArticleCard