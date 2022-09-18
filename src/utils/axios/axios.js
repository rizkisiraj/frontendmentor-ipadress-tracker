import axios from "axios"

export const getAddress = async (ip) => {
    const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_AMezo1Vo6aCOzPCih0E2KgZD7PnSB&ipAddress=${ip}`);
    return response;
}