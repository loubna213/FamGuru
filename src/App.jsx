import React from 'react';
import ReactDOM from 'react-dom/client'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Layout from './components/Layout';
import OurStory from './Pages/OurStory';
import Pricing from './Pages/pricing/Pricing';
import Monthly from './Pages/pricing/Monthly';
import Yearly from './Pages/pricing/Yearly';
import Contact from './Pages/contact/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='ourstory' element={<OurStory/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='pricing' element={<Pricing/>}>
      <Route index element={<Navigate replace to='Monthly'/>}/>
      <Route path='monthly' element={<Monthly/>}/>
      <Route path='yearly' element={<Yearly/>}/>
    </Route>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)