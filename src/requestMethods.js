import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTQxMWJiNDk2ZTE1MTVkZjBkMjY1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDAxOTgzNSwiZXhwIjoxNjcwMjc5MDM1fQ.bxxwmuEsOgONQN-vZhqxlBJ2ozIi28moy_FxoAHpY-8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURLL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
