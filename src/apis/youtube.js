import axios from "axios";

const KEY = "AIzaSyBkIa05fxFoSnIbsW8Ff3Phpf_hsH1azxE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
