
const BaseJsController = require("./BaseJsController");

class JsonPlaceController extends BaseJsController {
  constructor() {
    super();
  }

  async getAllPosts() {
    return await this.axiosInstance.get(`/posts`);
  }
  async getPostById(id) {
    return await this.axiosInstance.get(`/posts/${id}`);
  }
  async getCommentsForPost(postId) {
    return await this.axiosInstance.get(`/posts/${postId}/comments`);
  }
  async getCommentsByPostId(postId) {
    return await this.axiosInstance.get(`/comments?postId=${postId}`);
  }

  async addPost(userId, title, body) {
    return await this.axiosInstance.post(
      "/posts",
      {
        userId,
        title,
        body
      }
    );
  }

  // async removeAllUserBooks(userId, token) {
  //   return await this.axiosInstance.delete(
  //     `https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userId}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  // }
}

module.exports = new JsonPlaceController();
