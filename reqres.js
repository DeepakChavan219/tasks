import axios from "axios";
const Instance = axios.create({
  baseURL: "https://reqres.in/api",
});
export default Instance;
