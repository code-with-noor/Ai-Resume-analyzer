import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-3-bawn.onrender.com/api"
});

export const uploadResume = (formData) =>
  API.post("/resume/analyze", formData);