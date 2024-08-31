import Button from "../../components/Button";


function BookCall() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-12 rounded-xl bg-[#f799c5]">
            <div className="flex-[70%]">
                <h3 className="text-xl font-medium">Book a call with our experts</h3>
                <p className="text-[#DC458B] my-4 ">You love traveling, want more and better clients, and have no time. We get that. FamGuru helps make Travel Advising easier and more lucrative.</p>
            </div>
            <div className="flex-[30%] flex justify-end">
                <button className="bg-white py-[10px] px-8 border-none rounded-3xl cursor-pointer text-base">Book a Call</button>
            </div>
        </div>
    )
}

export default BookCall;