/* eslint-env node, jest */
const axios = require('axios');
const JsonPlaceController = require("../src/controllers/JsonPlaceController");

  test('GET /posts', async () => {
    const response = await JsonPlaceController.getAllPosts();
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
    expect(response.data[0]).toHaveProperty('body');
  })

  test('GET /posts/1', async () => {
    const response = await JsonPlaceController.getPostById(1);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  })

  test('GET /posts/1/comments', async () => {
    const response = await JsonPlaceController.getCommentsForPost(1);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('postId', 1);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('body');
  })

  test('GET /comments?postId=1', async () => {
    const response = await JsonPlaceController.getCommentsByPostId(1);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('postId', 1);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('body');
  })

  test('POST /posts', async () => {
    const newpost = {
      userId: "3",
      title: "new user",
      body: "this is new post"
    }
    const response = await JsonPlaceController.addPost(newpost.userId, newpost.title, newpost.body);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newpost.title);
    expect(response.data.body).toBe(newpost.body);
    expect(response.data.userId).toBe(newpost.userId);
  })