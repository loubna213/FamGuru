import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import DownloadApp from './DownloadApp';
import Partners from './Partners';

const Layout = () => {
  return (
    <>
      <Outlet/>
      <DownloadApp/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default Layout;