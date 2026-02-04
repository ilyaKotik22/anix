import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const MySkeleton = () => {
  return (
    <SkeletonTheme baseColor="#242424" highlightColor="#3f3f3f">
      <Skeleton style={{height: '100%',width: '100%'}} />

        
      <br />
    </SkeletonTheme>
  );
};

export default MySkeleton;
