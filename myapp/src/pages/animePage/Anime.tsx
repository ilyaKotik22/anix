import CommentsList from "@/features/comments/components/CommentsList";
import AnimePageBody from "@/pages/animePage/components/AinmePageBody";

const Anime = () => {
    return ( 
        <main style={{paddingTop:'130px'}}>
            <AnimePageBody/>
            <CommentsList/>
        </main> );
}
 
export default Anime;