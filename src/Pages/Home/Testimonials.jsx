import React, { useState } from 'react';
import testsData from '../../data/testsData';

const Testimonials = () => {
    const [testsArray] = useState(testsData);
    const [count, setCount] = useState(0);
    const displayCount = 3; // Number of boxes to display at a time

    const increaseCount = () => {
        setCount((prevCount) => (prevCount + displayCount) % testsData.length);
    };

    const decreaseCount = () => {
        setCount((prevCount) => (prevCount - displayCount + testsData.length) % testsData.length);
    };

    const testElements = testsArray.slice(count, count + displayCount).map((test) => (
        <div key={test.id} className='bg-white rounded-[20px] min-h-[600px]'>
            <img className='w-full h-[60%] md:h-[70%]' src={test.image} alt="testimonial" />
           <div className='px-4'>
            <p className="my-4">{test.review}</p>
                <div>
                    <span className='mr-4 py-2 px-3 rounded-[50%] bg-[#e91e63] text-white'>{test.name.slice(0, 1)}</span>
                    <span>{test.name}</span>
                </div>
           </div>
        </div>
    ));

    return (
        <section className="pt-12 pb-12 bg-[#F2F2F2]">
            <div className="w-[95%] md:w-[90%] pl-4 pr-4 ml-auto mr-auto">
                <div className="items-start">
                    <h3 className="mb-4 font-normal text-2xl">FamGuru: The Fam Trip App for Travel Advisors</h3>
                    <div>
                        <p className="leading-7 text-left w-[60%]">
                            You love traveling, want more and better clients, and have no time. We get that.
                        </p>
                        <p className="leading-7 mt-8 md:mt--2 text-left w-[60%]">FamGuru helps make Travel Advising easier and more lucrative.</p>
                        <div className="items-center flex justify-end">
                            <span><i onClick={decreaseCount} className='fa-solid fa-arrow-left p-2 rounded-[50%] text-white bg-[#e91e63] transition-all duration-3000 cursor-pointer ml-4 hover:bg-[#d81b60]'></i></span>
                            <span><i onClick={increaseCount} className='fa-solid fa-arrow-right p-2 rounded-[50%] text-white bg-[#e91e63] transition-all duration-3000 cursor-pointer ml-4 hover:bg-[#d81b60]'></i></span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 mx-auto mt-8 py-4">
                    {testElements}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
