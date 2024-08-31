import ourstory from '../assets/images/ourstory.png'
import Header from '../components/Header';

function OurStory() {
    return (
        <>
            <Header/>
            <section className="pt-28 pb-12">
                <div className="w-[90%] pl-4 pr-4 ml-auto mr-auto text-center md:text-left  flex justify-center items-center flex-col gap-6">
                    <h4 className='uppercase text-[#848B9B]'>OUR STORY</h4>
                    <h3 className='font-normal text-2xl'>The moment we realized there had to be a better way…</h3>
                    <img className='my-10' src={ourstory} alt="" />
                    <p className='text-center leading-[1.8]'>My client asked me about the beach at a resort in Mexico and how it compared to the beach of another resort nearby. I’d been on a fam and seen both hotels two years prior, but I could not remember even seeing the beach at the first property. I didn’t have a photo and couldn’t find a good review online. I fudged it “they’re both nice.” He booked the first resort. Fast forward two months, he and his family are at the resort.</p>
                    <p className='text-center leading-[1.8]'> Fast forward two months, he and his family are at the resort. The dreaded phone call comes: “The beach is awful – too rocky – the kids can’t swim. Get us out of here.” He hasn’t booked with me since. If only I’d had notes, observations, comparisons, something to remind me of what I’d seen! </p>
                    <p className='text-center leading-[1.8]'>Patchy memory and imperfect information can get us Travel Advisors into trouble. It can also hold us back from using what we learn to market and sell to clients. And when we can’t market and sell as we should, we miss out on future revenue and can’t grow our businesses and enhance the lifestyle we’ve chosen as Travel Advisors.</p>
                    <p className='text-center leading-[1.8]'>This is why we created FamGuru – to eliminate Fam disorganization, provide structure to what we learn and use this insight for our own and our clients’ benefit. Our team are all Travel Advisors ourselves, so we understand the need to create this structure and save time in our days so we can do what we do best: sell travel. FamGuru allows Travel Advisors to do just that: travel, share our insights and grow our businesses through simplification, organization and tools to market to clients.</p>
                    <div className='flex justify-center items-center mt-6'>
                        <div className='w-40 h-20 md:w-20 md:h-20 bg-[#e9bba7] mr-4 rounded-[50%]'></div>
                        <div>
                            <h3 className='font-normal text-xl md:text-2xl mb-2'>Carrie Wallace</h3>
                            <h4 className='uppercase text-[#848B9B]'>TRAVEL ADVISOR & FOUNDER, FAMGURU</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory;