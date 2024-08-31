import partner1 from '../assets/images/partner1.png'
import partner2 from '../assets/images/partner2.png'
import partner3 from '../assets/images/partner3.png'
import partner4 from '../assets/images/partner4.png'
import partner5 from '../assets/images/partner5.png'

const partners = [partner1, partner2, partner3, partner5, partner4]

const imgElements = partners.map(img => <img src={img} alt="parnter" />)

function Partners() {
    return (
        <section className="pt-16 pb-16">
            <div className="w-[90%] pl-4 pr-4 ml-auto mr-auto flex justify-center items-center flex-col gap-4">
                <h4 className='uppercase text-[#848B9B] text-center md:text-left'>WE ARE PROUD TO HAVE SOME BIG BRANDS AS OUR PARTNERS</h4>
                <h3 className='font-normal text-2xl text-center md:text-left'>Join over 30,000+ happy users & and learn fast</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-9 mt-4">
                    {imgElements}
                </div>
            </div>
        </section>
    )
}

export default Partners;