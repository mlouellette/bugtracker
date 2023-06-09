import Home from "./components/home/Home.jsx";
import Ticket from "./components/ticket/Ticket.jsx";
import UserTicket from "./components/userTicket/UserTicket.jsx";
import Administration from "./components/administration/Administration.jsx";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";

const AppRoutes = [
    {
        path: '/tickets',
        element: <Ticket />
    },
    {
        path: '/userticket',
        element: <UserTicket />
    },
    {
        path: '/admin',
        element: <Administration />
    },
    {
        path: '/error',
        element: <ErrorPage />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        index: true,
        path: '/',
        element: <Home />
    }
];

export default AppRoutes;
