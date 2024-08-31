import { HiOutlinePlus, HiMinus } from 'react-icons/hi2'

const Accordion = (props) => {
    return (
        <div className='w-full border-y py-8 md:py-12'>
            <div onClick={props.handelClick} className='flex items-center justify-between gap-4'>
                <h3 className="text-left text-lg md:text-xl">{props.title}</h3>
                {  
                    props.isShown ? <HiMinus className='rounded-[50%] cursor-pointer text-white w-5 h-5 md:mr-6 bg-[#DC458B]' />
                    : <HiOutlinePlus className='rounded-[50%] cursor-pointer text-white w-5 h-5 md:mr-6 bg-[#DC458B]'/>}
            </div>
            {props.isShown && <p className="w-[90%] text-lg pt-8 leading-loose">{props.description}</p>}
        </div>
    )
}

export default Accordion;