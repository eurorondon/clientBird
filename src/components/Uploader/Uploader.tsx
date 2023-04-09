import React, { ChangeEvent } from "react";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadPhoto } from "../../api/photo";

export const Uploader: React.FC = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(uploadPhoto, {
    onSuccess(response) {
      queryClient.invalidateQueries({ queryKey: ["photos"] })
      response.json().then((data) => console.log(data))
    }
  });
  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    const formData = new FormData()
    Object.values(files as ArrayLike<File>).forEach(file => formData.append("file",  file))
    mutation.mutate(formData)
  };
  return (
    <form>
      <p> Upload files:</p>
      <input type="file" multiple onChange={uploadFile} />
    </form>
  );
};
