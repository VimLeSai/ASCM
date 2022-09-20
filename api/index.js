const baseURL = process.env.NEXT_PUBLIC_API_END_POINT;

export const fetcher = (url, ...args) =>
  fetch(`${baseURL}${url}`, ...args).then((res) => res.json());
