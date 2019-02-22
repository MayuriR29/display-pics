import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization:
      "Client-ID 27dcaaec595f2e63853490d502aa701a0ec2ebc6412cb026706de1a35e0c0a75"
  }
});
