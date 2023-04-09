import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Uploader } from './components/Uploader/Uploader';



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Uploader/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
