import axios from "axios";

export const getCardDetails = async (): Promise<any> => {
   return await axios.get("http://localhost:3001/example").then((result) => {
      const { title, body, imgSrc } = result.data;
      return {title, body, imgSrc};
    });
}
