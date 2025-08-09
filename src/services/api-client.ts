import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "3a85541bf7214824aeffc8eeecfd2a76"
  }
})

