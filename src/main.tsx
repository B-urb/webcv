import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App'
import './index.css'
import 'devicon'
import {QueryClient, QueryClientProvider} from "react-query";
import UIProvider from "./context/ui-context";


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <UIProvider><App/></UIProvider>
      </QueryClientProvider>

    </React.StrictMode>
)
