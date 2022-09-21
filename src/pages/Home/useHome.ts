import { useEffect, useState } from "react";

export interface useHomeProps {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  videos: Array<any>;
  downloadVideo: () => void;
}

export const useHome = () => {
  const [url, setUrl] = useState("");
  const [videos, setVideos] = useState<Array<any>>([]);

  useEffect(() => {
    console.log(url);
  }, [url]);

  const downloadVideo = (): void => {
    const videoId = getVideoId(url);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log(videoSrc);
    fetch(
      `https://cors-proxy-9001.herokuapp.com/https://youtube.com/watch?v=${videoId}`
    ).then((res) => {
      res.text().then((text) => convertVideo(text));
    });
  };

  const convertVideo = (rawHTML: string): void => {
    const pattern =
      /ytInitialPlayerResponse\s*=\s*({.+?})\s*;\s*(?:var\s+meta|<\/script|\n)/;
    const matches = pattern.exec(rawHTML) as any;
    const playerResponse = JSON.parse(matches[1]);
    const streamingData = playerResponse.streamingData;
    console.log(streamingData);
    const regularFormats = streamingData["formats"];
    const adaptiveFormats = streamingData["adaptiveFormats"];

    getDecipherFunction([regularFormats, adaptiveFormats], rawHTML);
  };

  function getDecipherFunction(formats: any, rawHTML: string) {
    // Check if any require signature deciphering
    var needDecipher = false;
    for (var i = 0; i < formats.length; i++) {
      for (var j = 0; j < formats[i].length; j++) {
        if (formats[i][j]["signatureCipher"]) {
          needDecipher = true;
          break;
        }
      }
      if (needDecipher) {
        break;
      }
    }
    if (needDecipher) {
      // Get decipher function

      // Stole this regex from ytdl. See player_url in
      // https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py
      var playerPattern = /(?:PLAYER_JS_URL|jsUrl)\"\s*:\s*\"([^\"]+)/;

      var matches = playerPattern.exec(rawHTML);
      if (matches) {
        var playerURL =
          "https://cors-proxy-9001.herokuapp.com/https://youtube.com/" +
          matches[1];
        fetch(playerURL)
          .then((response) => {
            // indicates whether the response is successful (status code 200-299) or not
            if (!response.ok) {
              throw `Request failed with status ${response.status}`;
            }

            response.text().then((text) => decipherURLs(formats as any, text));
          })
          .catch((error) => console.log(error));
      }
    } else {
      setVideos(formats.flatMap((v: any) => v));
    }
  }

  function decipherURLs(formats: any[], rawJS: string) {
    // Stole these regex from ytdl. See _parse_sig_js in
    // https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py

    var patterns = [
      /\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
      /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
      /\bm=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(h\.s\)\)/,
      /\bc&&\(c=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(c\)\)/,
      /(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\);[a-zA-Z0-9$]{2}\.[a-zA-Z0-9$]{2}\(a,\d+\)/,
      /(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/,
      /([a-zA-Z0-9$]+)\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/,
      // Obsolete patterns
      /(["\'])signature\1\s*,\s*([a-zA-Z0-9$]+)\(/,
      /\.sig\|\|([a-zA-Z0-9$]+)\(/,
      /yt\.akamaized\.net\/\)\s*\|\|\s*.*?\s*[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*(?:encodeURIComponent\s*\()?\s*([a-zA-Z0-9$]+)\(/,
      /\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/,
      /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/,
      /\bc\s*&&\s*a\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\('/,
      /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/,
      /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/,
    ];

    var matches: string[] | null = null;
    for (var i = 0; i < patterns.length; i++) {
      matches = patterns[i].exec(rawJS);
      if (matches != null) {
        break;
      }
    }
    if (matches == null) {
      console.log("Error: Couldn't get decipher function.");
    }
    // The ultimate hack. We append functions that need to be run into the entire js and call eval
    if (matches) {
      var toRun = rawJS.replace(
        /}\)\(_yt_player\);/,
        "return " + matches[1] + "();})(_yt_player);"
      );
      var regex = new RegExp(matches[1] + "\\(.*?_yt_player\\);", "gm");
      formats.forEach((formatType: any[]) => {
        formatType.forEach((format: { [x: string]: string }) => {
          if (format["signatureCipher"]) {
            var signatureCipher = format["signatureCipher"];
            var urlPattern = /url=([^&"]*)/;
            const urlPatternD = urlPattern.exec(signatureCipher) as any;
            var url = decodeURIComponent(urlPatternD[1]);
            var spPattern = /sp=([^&"]*)/;
            const spPatternD = spPattern.exec(signatureCipher) as any;
            var sp = decodeURIComponent(spPatternD[1]);
            var sPattern = /s=([^&"]*)/;
            const sPatternD = sPattern.exec(signatureCipher) as any;
            var s = decodeURIComponent(sPatternD[1]);
            if (matches) {
              toRun = toRun.replace(
                regex,
                matches[1] + '("' + s + '");})(_yt_player);'
              );
            }

            var newSig = eval(toRun);
            format["url"] = url.concat("&" + sp + "=" + newSig);
          }
        });
      });
      setVideos(formats.flatMap((v) => v));
    }
  }

  const getVideoId = (url: string): string => {
    const pattern = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
    const matches = pattern.exec(url);

    if (matches) {
      return matches[1];
    }
    return "";
  };
  return { url, setUrl, downloadVideo, videos };
};
