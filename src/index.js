import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Committee from './components/pages/Committee';
import Ethicalprinciples from './components/pages/Ethical_principles';
import Guidance from './components/pages/Guidance';
import Statements from './components/pages/Statements';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/committee", 
    element: <Committee />,
  },
  {
    path: "/ethical_principles",
    element: <Ethicalprinciples />,
  }, 
  {
    path: "/guidance",
    element: <Guidance />,
  },
  {
    path: "/statements",
    element: <Statements />,
  }
]);

ReactDOM.render(
  <RouterProvider router={router}>
    {router}
  </RouterProvider>,
  document.getElementById('root')
);