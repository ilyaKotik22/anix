import { MyInput } from "@/components/ui/myInput/MyInput";
import { Search } from "lucide-react";

const SearchInput = () => {
    return ( <>
        <MyInput leftIcon={<Search size={15} />} />
        
    </> );
}
 
export default SearchInput;