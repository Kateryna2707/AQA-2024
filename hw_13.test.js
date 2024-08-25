/* eslint-env node, jest */
const axios = require('axios');

  test('GET /posts', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
    expect(response.data[0]).toHaveProperty('body');
  })

  test('GET /posts/1', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  })

  test('GET /posts/1/comments', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('postId', 1);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('body');
  })

  test('GET /comments?postId=1', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`);
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
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newpost);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newpost.title);
    expect(response.data.body).toBe(newpost.body);
    expect(response.data.userId).toBe(newpost.userId);
  })