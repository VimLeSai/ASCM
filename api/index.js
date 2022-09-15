const baseURL = "http://localhost:1212/v1";

export const fetcher = (url, ...args) =>
  fetch(`${baseURL}${url}`, ...args).then((res) => res.json());
