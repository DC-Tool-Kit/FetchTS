// import youtubedl from "youtube-dl-exec";
const youtubedl = (...params: any) => {};
export const download = async (url: string) => {
  return await youtubedl(url, {
    dumpSingleJson: true,
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  });
};
