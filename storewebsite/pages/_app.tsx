import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {useState,useEffect} from 'react';
import Layout from '../components/Layout';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {  
  useEffect(()=>{
    const jssStyles = document.querySelector("#jss-server-side");
    if(jssStyles){
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  },[])
  return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
  )
}

export default MyApp
