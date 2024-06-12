import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Stuff from "./pages/Stuff/Index";
import StuffCreate from "./pages/Stuff/Create";
import StuffEdit from "./pages/Stuff/Edit";
import StuffTrash from "./pages/Stuff/TrashStuff";

import Dashboard from "./pages/Dashboard";

import User from "./pages/User/Index";
import UserCreate from "./pages/User/Create";
import UserEdit from "./pages/User/Edit";
import UserTrash from "./pages/User/TrashUser";

import Lending from "./pages/Lending/Index";
import LendingCreate from "./pages/Lending/Create";

import Inbound from "./pages/Inbound/Index";
import InboundCreate from "./pages/Inbound/Create";


export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/dashboard', element: <Dashboard /> },

    { path: '/stuff/data', element: <Stuff /> },
    { path: '/stuff/store', element: <StuffCreate /> },
    { path: '/stuff/update/{id}', element: <StuffEdit /> }, 
    { path: '/stuff/trash', element: <StuffTrash /> }, 
    

    { path: '/lending/data', element: <Lending /> },
    { path: '/lending/store', element: <LendingCreate /> },

    { path: '/user/data', element: <User /> },
    { path: '/user/trash', element: <UserTrash /> },

    { path: '/user/store', element: <UserCreate /> },
    { path: '/user/update/{id}', element: <UserEdit /> },
    
    { path: 'inbound-stuff/data', element: <Inbound /> },
    { path: 'inbound-stuff/store', element: <InboundCreate /> },

  
])