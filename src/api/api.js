import axios from "axios"

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do"


export const topAlbums = async () => {
    try {
        let res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
      //  console.log(res.data)
        return res.data;
    } catch (err) {
        console.error(err)
    }
} 


