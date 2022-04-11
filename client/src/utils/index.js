export const URL_API = "http://localhost:4000";

export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};