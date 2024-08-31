import { HiEnvelope, HiPhone } from "react-icons/hi2"
import { Ri24HoursLine } from "react-icons/ri"

function GetInTouch() {
    return (
        <div className="flex-[50%] flex justify-center items-start flex-col">
            <h4 className="text-2xl mb-6">Stay in touch!</h4>
            <p className="w-4/5">Fill up the form and our Team will get back to you within 24 hours.</p>
            <p className="mt-12 mb-4 w-4/5">Fill up the form and our Team will get back to you within 24 hours.</p>
            <div className="mt-16">
                <p className="mt-8 mb-3 p-2 hover:border hover:border-[#e91b63] flex hover:bg-[#faccdc] hover:rounded-xl transition-all duration-3000">
                    <HiPhone className="text-3xl mb-[-5px] text-[var(--second-main-color)]"/>
                    <span className="ml-4">+213 54945025</span>
                </p>
                <p className="my-3 p-2 hover:border hover:border-[#e91b63] flex hover:bg-[#faccdc] hover:rounded-xl transition-all duration-3000">
                    <HiEnvelope className="text-3xl mb-[-5px] text-[var(--second-main-color)]" />
                    <span className="ml-4">info@famguru.app</span>
                </p>
                <p className="my-3 p-2 hover:border hover:border-[#e91b63] flex hover:bg-[#faccdc] hover:rounded-xl transition-all duration-3000">
                    <Ri24HoursLine className="text-3xl mb-[-5px] text-[var(--second-main-color)]"/>
                    <span className="ml-4">
                        <p>Mon-Fri</p>
                        <p>09am-7pm</p>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default GetInTouch;