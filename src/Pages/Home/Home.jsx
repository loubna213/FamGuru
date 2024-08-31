import React from 'react';
import LandingPage from './LandingPage';
import Steps from './Steps';
import Pros from './Pros';
import Testimonials from './Testimonials';
import StickyHeader from '../../components/StickyHeader'

const Home = () => {
  return (
    <>
      <StickyHeader/>
      <LandingPage/>
      <Steps/>
      <Pros/>
      <Testimonials/>
    </>
  )
}

export default Home;