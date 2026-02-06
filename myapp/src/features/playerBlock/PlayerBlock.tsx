import { useState } from "react";
import style from "./PlayerBlock.module.css";
import { usePlayerBlock } from "./hooks/usePlayerBlock";
import { VideoPlayer } from "./VideoPlayer";
export type Episodes = {
  id: string;
  number: number;
  title: string;
  url: string;
};
type PlayerBlock = {
  dataa: Episodes[];
};

const PlayerBlock = ({ dataa }: PlayerBlock) => {


  const { data, seriaVis, setSeriaVis, setSeriasValue } = usePlayerBlock(dataa[0]?.id)

  const [voiceVis, setVoiceVis] = useState<boolean>(false)
  const [dub, setDub] = useState('')
  

  return (
    <section className={style.playerBlock}>
      <section className={style.navBar}>
        <section className={style.chose} onClick={() => setSeriaVis((e) => !e)}>
          {"серия"}
        </section>
        <ul>
          {seriaVis &&
            dataa.map((item: Episodes, index) => (
              <li
                onClick={() => {
                  setSeriasValue(String(dataa[index].id));
                  setSeriaVis((e) => !e);
                }}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </section>
      <section className={`${style.navBar} ${style.rightBar}`} >
        <section className={style.chose} onClick={() => setVoiceVis((e) => !e)}>
          {"Озвучка"}
        </section>
        <ul>
          {voiceVis &&
            data?.subtitles.map((item: Episodes) => (
              <li
                onClick={() => {
                  setVoiceVis((e) => !e)
                  setDub(item.url)
                }}
              >
                {item.lang}
              </li>
            ))}
        </ul>
      </section>
      {data?.sources?.[0]?.url && (
        <VideoPlayer src={data.sources[0].url} reff={data.headers.Referer as string} />
      )}
    </section>
  );
};

export default PlayerBlock;
