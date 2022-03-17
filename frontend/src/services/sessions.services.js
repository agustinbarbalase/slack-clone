import axios from "axios";

export const loginServices = (data) => {
  return axios.post("/api/sessions/login", {
    data: { ...data },
  });
};

export const signUpServices = (data) => {
  return axios.post("/api/sessions/signup", {
    data: { ...data },
  });
};
