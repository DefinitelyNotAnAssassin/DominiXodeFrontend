import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ViewArticle from "./pages/ArticlesPage/components/ViewArticle";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import EventPage from "./pages/EventsPage/EventsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/articles",  
        element: <ArticlesPage />,
    },
    {
        path: "/articles/:id",
        element: <ViewArticle />,
    },
    {
        path: "/events",  
        element: <EventPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "*",
        element: <NoMatch />,
    },
])
