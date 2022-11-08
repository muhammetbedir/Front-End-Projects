const { default: axios } = require("axios");

const getData = async () => {
  const { data: userInfo } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
};
