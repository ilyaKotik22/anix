import { MyInput } from "@/components/ui/myInput/MyInput";
import { useSeacrh } from "@/hooks/anime/useSearch";
import { Search } from "lucide-react";
import { useState } from "react";
import DropdownSearch from "./dropdownSearch/dropdownSearch";

const SearchInput = () => {
  const [text, setText] = useState<string>("");
  const { data } = useSeacrh(text);

  return (
    <section style={{ width: "100%" }}>
      <MyInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        leftIcon={<Search size={15} />}
      />
      <DropdownSearch
        action={()=> setText("")}
        data={Array.isArray(data) ? data : []}
      />
    </section>
  );
};

export default SearchInput;
