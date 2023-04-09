import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Uploader } from './components/Uploader/Uploader';
import { ImagesList } from './components/ImagesList/ImagesList';



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Uploader/>
        <ImagesList/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
