import React from 'react';
import Button from '../../components/Button'
import stepsImage from '../../assets/images/steps.png'
import stepsImagePhone from '../../assets/images/FamGuru-–-Figma.png'

const Steps = () => {
  return (
    <section className="pt-12 pb-12">
        <div className="w-[95%] md:w-[90%] pl-4 pr-4 ml-auto mr-auto flex justify-center items-center flex-col gap-16">
            <div className="flex justify-center items-center flex-col pt-8 w-4/5 md:w-[60%]">
              <h3 className="mb-4 font-normal text-2xl text-center md:text-left">FamGuru:  The Fam Trip App for Travel Advisors</h3>
              <p className="leading-7 text-center md:text-left">You love traveling, want more and better clients, and have no time.  We get that. </p>
              <p className="mt-8 md:mt-0 leading-7 text-center md:text-left">FamGuru helps make Travel Advising easier and more lucrative.</p>
            </div>
            <img className='w-[80%] hidden md:block' src={stepsImage} alt="staps image" />
            <img className='md:hidden w-[40%]' src={stepsImagePhone} alt="staps image" />
            <Button>Download the App</Button>
        </div>
    </section>
  )
}

export default Steps;

