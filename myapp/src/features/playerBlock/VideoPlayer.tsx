// Source - https://stackoverflow.com/a/78700749
// Posted by Itay, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-06, License - CC BY-SA 4.0

import Hls from "hls.js";
import { useEffect, useRef } from "react";

export function VideoPlayer() {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource("http://rrr.lab27core.site/pz78/c5/h6a90f70b8d237f94866b6cfc256349bddedc7dc1328a916da7323e7574fb29a4f447899eb0e27ac0c102a43593daa34230433b153ccb0ab11f97c3d60ebb5bf2/list,Ktm0Vt9-cJyXbGG_O3gV_5vGK-kpiQ.m3u8");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });
    } else {
      console.log("load");
    }
    return () => {
      // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
      hls.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      style={{ width: "100%"}}
    />
  );
}
