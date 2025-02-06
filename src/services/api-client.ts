import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params:{
        key: "f1102a3f03f14266a0896fda6d7ef46e"
    }
});