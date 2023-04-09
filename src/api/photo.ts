import React from 'react'

const API_URL = 'http://localhost:3009'

export const uploadPhoto = (body: FormData) => {
    return fetch(API_URL,{
        method:'POST',
        body
    })
}
