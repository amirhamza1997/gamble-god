"use client"
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

const AppProvider = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    const [queryClient] = useState(new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          },
        }
      }))
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default AppProvider
