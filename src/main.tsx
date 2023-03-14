//import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';



import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 // <React.StrictMode> ==> Chama duas vezes a chamada no consele.
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
