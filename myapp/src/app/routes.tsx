
import Anime from "@/pages/animePage/Anime"
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
    animePage: (el:string)=> `animepage/:${el}`,
    newReleases: '/new-releases',
    latestCompleted: '/latest-completed',
    ova: '/ova',
    ona: '/ona',

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
        pathname: PATHNAMES.animePage('id'),
        component: <Anime/>,
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
]