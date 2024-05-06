import axios from "axios";

export const LoginUsers = ({ email, password }) => {
  if (!email || !password) {
    return Promise.reject("email or password is missing");
  }
  const config = {
    method: "POST",
    data: {
      email,
      password,
    },
    url: "https://reqres.in/api/login",
  };
  return axios(config);
};
