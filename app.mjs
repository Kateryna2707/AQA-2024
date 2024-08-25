import axios from "axios";
const res = await axios.get("https://bookstore.toolsqa.com/BookStore/BookStoreV1BookGet");
console.log ( res.data);