import axios from "axios";

const getProducts = async () =>{
    const response = await axios.get("http://localhost:3001/api/get");
    return response.data;
}

export {getProducts};