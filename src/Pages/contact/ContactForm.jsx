import { Form } from "react-router-dom";

function ContactForm() {
    return (
        <Form method="POST" action="/contact">
            <div className="bg-white p-3 my-4 rounded-xl">
                <label className="mt-4 text-[#d8d8d8]" htmlFor="from_name">Name</label>
                <input
                    className="focus:border-b-[#e91b63] focus:placeholder:text-[#e91b63] focus:border-b focus:border-solid w-[100%] py-2 outline-none"
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="bg-white p-3 my-4 rounded-xl">
                <label className="mt-4 text-[#d8d8d8]" htmlFor="from_email">mail</label>
                <input 
                    className="focus:border-b-[#e91b63] focus:placeholder:text-[#e91b63] focus:border-b focus:border-solid w-[100%] py-2 outline-none"
                    type="email"
                    name="from_email" 
                    placeholder="Your Mail" 
                    required
                />
            </div>

            <div className="bg-white p-3 my-4 rounded-xl">
                <label className="mt-4 text-[#d8d8d8]" htmlFor="message">Your message</label>
                <textarea 
                    className=" w-full outline-none py-3 mt-1"
                    id="message" 
                    name="message"
                    placeholder="Your Message" 
                    rows="10" 
                    required
                >
                </textarea>
            </div>
            <button className="hover:bg-[#ec3903] w-full p-2 mt-4 bg-orange-400 text-white border-none rounded-[50px] cursor-pointer text-base transition-all duration-[3000]" type="submit">Send message</button>
        </Form>
    )
}

export default ContactForm;