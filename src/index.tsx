import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import Chapter1 from './pages/chapter1/chapter1';

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                retry: false,
                refetchOnWindowFocus: false
            }
        }
    }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/chapter1' element={<Chapter1 />}/>
                {/* add here Route*/}
            </Routes>
        </Router>
        {process.env.NODE_ENV !== "production" ? <ReactQueryDevtools /> : null}
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
