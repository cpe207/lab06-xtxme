// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try {
    const res1 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const res2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${res1.data.userId}`);
    return {
      owner : res2.data.name,
      title : res1.data.title,
      completed : res1.data.completed
    }
  }

  catch (error) {
    return `INVALID TODO ID`;
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//นางสาวธนพร ตั้งผดุงสุข 660610762