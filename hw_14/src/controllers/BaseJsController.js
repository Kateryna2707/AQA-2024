const axios = require("axios");

class BaseJsController {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
      validateStatus: function (status) {
        return true;
      },
      headers: {'Content-Type': 'application/json'}
    });
  }
}

module.exports = BaseJsController;