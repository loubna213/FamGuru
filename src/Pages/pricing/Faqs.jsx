import { useState } from "react";
import Accordion from "./Accordion";
import content from './data'

const Faqs = () => {
    const [dataArray, setDataArray] = useState(content);

    const handleClick = (id) => {
        setDataArray((prevArray) => prevArray.map((item) => {
        let updatedItem = { ...item, isShown: false };

        if (item.id === id) {
            updatedItem.isShown = !item.isShown;
        }

        return updatedItem;})
        )
    }
  
    const dataElements = dataArray.map((item) => {
        return (
        <Accordion 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            isShown={item.isShown}
            handelClick={() => handleClick(item.id)}
        />
        )
    })

  return (
    <div className="w-full px-0 md:px-12 pt-12 pb-8 flex justify-center items-center flex-col">
        <h4 className='text-2xl'>Frequently Asked Question</h4>
        <p className=' mt-4 mb-16'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
        {dataElements}
    </div>
  )
}

export default Faqs;