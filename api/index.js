const baseURL = "http://18.118.158.95/v1";

export const fetcher = (url, ...args) =>
  fetch(`${baseURL}${url}`, ...args).then((res) => res.json());
