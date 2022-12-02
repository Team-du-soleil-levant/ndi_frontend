import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import {SpecialistePage} from "./pages/SpecialistePage";
import {FinalPage} from "./pages/chapter-5/FinalPage";

import {AfficherTest} from './pages/Test';

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
                <Route path='/test' element={<AfficherTest/>}/>
                <Route path='/specialiste' element={<SpecialistePage />}/>
                <Route path='/final' element={<FinalPage />}/>
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
