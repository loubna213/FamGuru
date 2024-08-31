import React from 'react';
import hero_bg from '../../assets/images/hero-bg.png'
import Button from '../../components/Button';

const LandingPage = () => {
  return (
    <section className='h-[100vh] bg-cover bg-center pt-12 pb-12 bg-no-repeat relative' style={{ backgroundImage: `url(${hero_bg})` }}>
      <div className="absolute inset-0 z-[1] bg-black/50"></div>
      <div className="relative z-[2] w-[95%] md:w-[90%] pl-4 pr-4 ml-auto mr-auto h-full flex justify-start items-center">
        <div className="w-[500px] h-[200px] text-white md:p-8 flex justify-start items-start flex-col gap-8">
          <h1 className='text-[22px] leading-relaxed md:text-4xl'>Organize your FamTrip knowledge so you can sell more travel</h1>
          <p>Travel, Share & Grow your business with FamGuru</p>
          <Button>Download the App</Button>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;
