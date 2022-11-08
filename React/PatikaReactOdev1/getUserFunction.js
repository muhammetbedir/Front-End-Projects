// import axios from "axios";
const axios = require("axios");

const getData = async (userId) => {
  const { data: userInfo } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: userPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const result = [];
  result.push(userInfo);
  result.push(userPosts);
  return result;
};
module.exports = getData;
