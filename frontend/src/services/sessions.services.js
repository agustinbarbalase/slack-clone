import axios from "axios";

export const loginServices = (data) => {
  return axios.post("/api/sessions/login", {
    body: {
      data: {
        ...data
      },
    },
  });
};

export const signUpServices = (data) => {
  return axios.post("/api/sessions/signup", {
    body: {
      data: {
        ...data
      },
    },
  });
};
