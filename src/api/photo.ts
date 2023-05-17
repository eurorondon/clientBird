const API_URL = process.env.REACT_APP_API_URL || "http://localhostoo:3009";

export const uploadPhoto = (body: FormData) => {
  return fetch(API_URL, {
    method: "POST",
    body,
  });
};

export const fetchPhotos = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return []; // Devuelve un array vacío en caso de error
    });
};
