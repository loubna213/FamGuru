import Button from "../../components/Button";

const SalesContact = () => {
  return (
    <div className="bg-[#F7F7F7] w-full px-4 md:px-12 pt-12 pb-8 rounded-lg">
        <h4 className='text-2xl'>Are you an agency owner, Fam organizer, or other Travel Advisor group?</h4>
        <p className='text-[#DC458B] my-4'>Talk to us today about a customized plan.</p>
        <div className="flex justify-center md:justify-end ">
            <Button>Contact Sales</Button>
        </div>
    </div>
  )
}

export default SalesContact;