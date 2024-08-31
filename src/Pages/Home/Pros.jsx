import React from 'react';
import prosData from '../../data/propsData'
import { Link } from 'react-router-dom'
import Button from '../../components/Button';

const Pros = () => {

    const prosElements = prosData.map((pro) => {
        return pro.position === 'right' ? (
            <div key={pro.id} className='text-center md:text-left flex items-center flex-col md:flex-row md:justify-between gap-16 my-12 mx-0'>
                <div className="w-[90%] md:w-[60%]">
                    <h3>{pro.title}</h3>
                    <p className='mt-4 mx-0 mb-8 leading-7'>{pro.description}</p>
                    <Button>Download the App</Button>
                </div>
                <img className='h-[370px]' src={pro.image} alt="pros image" />
            </div>
            ) : (
                <div key={pro.id} className='text-center flex items-center flex-col md:flex-row md:justify-between gap-16 my-12 mx-0 md:text-right'>
                    <img className='h-[370px]' src={pro.image} alt="" />
                    <div className="w-[90%] md:w-[60%]">
                        <h3>{pro.title}</h3>
                        <p className='mt-4 mx-0 mb-8 leading-7'>{pro.description}</p>
                        <Button>Download the App</Button>
                    </div>
                </div>
            )
    })

  return (
    <section className="pt-12 pb-12">
        <div className="w-[95%] md:w-[90%] pl-4 pr-4 ml-auto mr-auto flex justify-center items-center flex-col gap-16">
            {prosElements}
        </div>
    </section>
  )
}

export default Pros;