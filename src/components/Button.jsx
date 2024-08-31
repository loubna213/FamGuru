import { Link } from "react-router-dom";

function Button({ children }) {
    return (
        <Link className='bg-[#e91e63] text-white py-[10px] px-5 border-none rounded-3xl cursor-pointer text-base hover:bg-[#d81b60]'>{children}</Link>
    )
}

export default Button;