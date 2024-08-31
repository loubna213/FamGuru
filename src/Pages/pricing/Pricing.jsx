import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import PricingNav from './PricingNav';
import SalesContact from './SalesContact';
import Faqs from './Faqs';

function Pricing() {
    return (
        <>
            <Header/>
            <section className="pt-28 pb-12">
                <div className="w-[95%] md:w-[90%] text-center md:text-left pl-4 pr-4 ml-auto mr-auto flex justify-center items-center flex-col gap-6">
                    <h4 className='uppercase text-[#848B9B]'>pricing</h4>
                    <h3 className='font-normal text-[22px]'>Choose from two options to get started with FamGuru</h3>
                    <p>Sign up now and get a 30-day free trial of FamGuru Premium. No credit card required.</p>
                    <PricingNav/>
                    <Outlet/>
                    <SalesContact/>
                    <Faqs/>
                </div>
            </section>
        </>
    )
}

export default Pricing;