// import emailjs from '@emailjs/browser';
// import toast from 'react-hot-toast';
import GetInTouch from "./GetInTouch";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";
import BookCall from "./BookCall";

// export async function action({ request }) {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     console.log(data)

//     try {
//         const result = await emailjs.send(
//             'service_iu69d2z',
//             'template_x9298nr',
//             {
//                 from_name: data.from_name,
//                 from_email: data.from_email,
//                 interest: data.interest,
//                 message: data.message,
//             },
//             'bwPKqBfBmEu4e07Uy'
//         );
//         toast.success('Message sent successfully!');

//     } catch (error) {
//         toast.error('Failed to send message.');
//     }

//     return null;
// }

const Contact = () => {

    return (
        <>
            <Header/>
            <section className="pt-28">
                <div className="w-[95%] pl-4 pr-4 mr-auto ml-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-2 md:px-12 py-8 rounded-xl">
                        <GetInTouch/>
                        <div className="flex-[50%] bg-[#F7F7F7] h-full p-8 rounded-xl">
                            <ContactForm/>
                        </div>
                    </div>
                    <BookCall/>
                </div>
            </section>
        </>
    )
}

export default Contact;