
import Anime from "@/pages/animePage/anime"
import Announcements from "@/pages/announcements/announcements"
import Completed from "@/pages/completed/completed"
import Home from "@/pages/home/home"
import Movies from "@/pages/movies/movies"
import MyTab from "@/pages/myTab/myTab"
import Ongoings from "@/pages/ongings/ongoings"


export const ROUTES = [
    {
        pathname: '/',
        component: <Home/>,
    },
    {
        pathname: '/announcements',
        component: <Announcements/>,
    },
    {
        pathname: '/complited',
        component: <Completed/>,
    },
    {
        pathname: '/movies',
        component: <Movies/>,
    },
    {
        pathname: '/mytab',
        component: <MyTab/>,
    },
    {
        pathname: '/ongoings',
        component: <Ongoings/>,
    },
    {
        pathname: '/Animepage/:id',
        component: <Anime/>,
    },
]