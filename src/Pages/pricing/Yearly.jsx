import { HiOutlineCheck } from 'react-icons/hi'

function Yearly() {
    return (
        <div className="py-2 md:py-12 flex flex-col md:flex-row gap-4 w-full md:w-4/5">
            <div className="bg-[#F7F7F7] rounded-lg py-4">
                <h3 className="h-24 border-b flex justify-center items-center text-2xl font-medium">FamGuru Free</h3>
                <ul className="p-4 h-[65%]">
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/>
                        <span>info@famguru.app</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/> 
                        <span>1 Fam trip up to 14 days in duration</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/>
                        <span>All app features</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <span><HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/></span>
                        <span>Share your Fam on social media, access to your FamInfo and report download</span>
                    </li>
                </ul>
                <div className="p-6">
                    <button className="bg-orange-400 mb-4 py-2 w-full rounded-[50px] text-white">
                        Start Free Trial</button>
                </div>
            </div>
            <div className="bg-[#f3d3e1] border border-[#DC458B] rounded-lg py-4">
                <h3 className="h-24 border-b border-b-[#DC458B] flex justify-center items-center text-2xl font-medium">FamGuru Premium</h3>
                <ul className="p-4 h-[65%]">
                    <li className='flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4'>
                        <span><HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/></span> 
                        <span>Unlimited trips - record as many Fams as you like; Unlimited trip duration</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/>
                        <span>All app features</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/>
                        <span>Add your own branding and logo</span>
                    </li>
                    <li className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 md:flex-row p-4">
                        <span><HiOutlineCheck className='inline rounded-[50%] text-white w-5 h-5 mr-6 bg-[#DC458B]'/></span> 
                        <span>
                            <p>Choose from 3 plans:</p>
                            <p>per Month $9.99</p> 
                            <p>Bi-annual $45 (25% discount | $7.50 per month)</p> 
                            <p>Annual $75 (40% discount | $6.25 per month)</p>
                        </span>
                    </li>
                </ul>
                <div className="p-6">
                    <button className="bg-[#DC458B] mb-4 py-2 w-full rounded-[50px] text-white">
                        Start Free Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Yearly;