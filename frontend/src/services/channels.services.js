import axios from "axios";

export const createChannel = (token, data) => {
  return axios.post(
    "/api/channels",
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

export const getChannel = (id, token) => {
  return axios.get(`/api/channels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllChannels = (token) => {
  return axios.get("/api/channels", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editChannel = (id, token, data) => {
  return axios.put(
    `/api/channels/${id}`,
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

export const deleteChannel = (id, token) => {
  return axios.delete(`/api/channels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
