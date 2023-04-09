import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Uploader } from "./components/Uploader/Uploader";
import { ImagesList } from "./components/ImagesList/ImagesList";
import { NavBar } from "./components/NavBar/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavBar />
        <div className="App container mx-auto py-8 max-w-7xl">
          <Uploader />
          <ImagesList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
