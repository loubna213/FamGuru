import app_store from '../assets/images/app-store.png'
import google_play from '../assets/images/google-play.png'


function DownloadApp() {
    return (
        <section className="pt-16 pb-16">
            <div className="w-[90%] pl-4 pr-4 ml-auto mr-auto flex justify-center items-center flex-col gap-4">
                <h4 className='uppercase text-[#848B9B]'>FOR AGENTS BY AGENTS</h4>
                <h3 className='text-center md:text-left font-normal text-2xl'>Join over 30,000+ happy users & and learn fast</h3>
                <p className='leading-7 text-center w-[70%]'>You love traveling, want more and better clients, and have no time. We get that. FamGuru helps make Travel Advising easier and more lucrative.</p>
                <div className="flex justify-center items-center gap-4 md:gap-8 mt-4">
                    <img className='w-32' src={app_store} alt="app store" />
                    <img className='w-32' src={google_play} alt="google store" />
                </div>
            </div>
        </section>
    )
}

export default DownloadApp;