
import Anime from "@/pages/animePage/Anime"
import Auth from "@/pages/Auth/Auth"
import GenrePage from "@/pages/genre/GenrePage"
import Home from "@/pages/home/home"
import LatestComplete from "@/pages/latestComplete/LatestComplete"
import Movies from "@/pages/movies/movies"
import MyTab from "@/pages/myTab/myTab"
import NewReleases from "@/pages/newReleases/NewReleases"
import Ona from "@/pages/ona/Ona"
import Ova from "@/pages/ova/Ova"

export const PATHNAMES = {
    home: '/',
    movies: '/movies',
    myTab: '/mytab',
    animePage: (el:string)=> `animepage/${el}`,
    genrePage: (el:string) => `genre/${el}`,
    newReleases: '/new-releases',
    latestCompleted: '/latest-completed',
    ova: '/ova',
    ona: '/ona',
    search: '/seacrh',
    auth: '/auth'

}

export const ROUTES = [
    {
        pathname: PATHNAMES.home,
        component: <Home/>,
    },
    {
        pathname: PATHNAMES.movies,
        component: <Movies/>,
    },
    {
        pathname: PATHNAMES.myTab,
        component: <MyTab/>,
    },
    {
        pathname: '/animepage/:id',
        component: <Anime/>,
    },
    {
        pathname: '/genre/:genre',
        component: <GenrePage/>,
    },

    {
        pathname: PATHNAMES.newReleases,
        component: <NewReleases/>
    },
    {
        pathname: PATHNAMES.latestCompleted,
        component: <LatestComplete/>
    },
    {
        pathname: PATHNAMES.ova,
        component: <Ova/>
    },
    {
        pathname: PATHNAMES.ona,
        component: <Ona/>
    },
    {
        pathname: PATHNAMES.auth,
        component: <Auth/>
    },
    
]