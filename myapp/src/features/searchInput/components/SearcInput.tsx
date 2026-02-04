import { MyInput } from "@/components/ui/myInput/MyInput";
import { useSeacrh } from "@/hooks/useSearch";
import { Search } from "lucide-react";
import { useState } from "react";
import DropdownSearch from "./dropdownSearch";

const SearchInput = () => {
  const [text, setText] = useState<string>("");
  const { data, isLoading, isSuccess, isError } = useSeacrh(text);

  
  return (
    <section style={{ width: "100%" }}>
      <MyInput
        onChange={(e) => setText(e.target.value)}
        leftIcon={<Search size={15} />}
      />
      <DropdownSearch data={Array.isArray(data) ? data : []}/>
    </section>
  );
};

export default SearchInput;
