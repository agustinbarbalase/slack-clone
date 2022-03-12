import axios from "axios";

export const loginServices = (email, password) => {
  return axios.post("/api/sessions/login", {
    body: {
      data: {
        email,
        password,
      },
    },
  });
};

export const signUpServices = (name, surname, email, password) => {
  return axios.post("/api/sessions/signup", {
    body: {
      data: {
        name,
        surname,
        email,
        password,
      },
    },
  });
};
