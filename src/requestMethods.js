import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Q3MjlkOTZiYTkwM2Q2YmJlNWQ1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjY5NTE3MiwiZXhwIjoxNjUyOTU0MzcyfQ.cTv_UP-c3ck2AzA3urQ0BpEp3y3RypJZkf1wOyZWi2M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
