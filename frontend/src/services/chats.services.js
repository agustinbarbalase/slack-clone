import axios from "axios";

export const createChat = (token, data) => {
  return axios.post(
    "/api/chats",
    {
      data: { ...data },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getChat = (id, token) => {
  return axios.get(`/api/chats/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllChats = (token) => {
  return axios.get("/api/chats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editChat = (id, token, data) => {
  return axios.put(
    `/api/chats/${id}`,
    {
      data: { ...data },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteChat = (id, token) => {
  return axios.delete(`/api/chats/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
