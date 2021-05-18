import axios from "axios";

export default axios.create({
  baseURL: "http://express-env.eba-szhpgriv.us-east-2.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
})