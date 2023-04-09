import React from "react";

const API_URL = "http://localhost:3009";

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
