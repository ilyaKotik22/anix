import { useState } from "react";
import style from "./PlayerBlock.module.css";
export type Episodes = {
  id: string;
  number: number;
  title: string;
  url: string;
};
type PlayerBlock = {
  data: Episodes[];
};

const PlayerBlock = ({ data }: PlayerBlock) => {
  const [seriaVis, setSeriaVis] = useState<boolean>(false);
  const [seriasValue, setSeriasValue] = useState<string>("");
  console.log(data[1])
  return (
    <section className={style.playerBlock}>
      <section className={style.navBar}>
        <section className={style.chose} onClick={() => setSeriaVis((e) => !e)}>
          {seriasValue ? seriasValue : "выбрать"}
        </section>
        <ul>
          {seriaVis &&
            data.map((item: Episodes, index) => (
              <li
                onClick={() => {
                  setSeriasValue(String(index + 1));
                  setSeriaVis((e) => !e);
                }}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
};

export default PlayerBlock;
