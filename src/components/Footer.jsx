import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter  } from 'react-icons/fa'
import logoImg from '../assets/images/black-logo.png'
import Button from './Button';


function Footer() {
    return (
        <footer className='pt-12 pb-6'>
            <div className="w-[90%] pl-4 pr-4 ml-auto mr-auto">
                <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8'>
                    <Link to='/' className='logo'>
                        <img className='logo-img' src={logoImg} alt="logo image" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed</p>
                    <ul>
                        <li><Link>Security</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Service Agreement</Link></li>
                        <li><Link>Supplier Agreement</Link></li> 
                        <li><Link>Reseller Agreement</Link></li>
                    </ul>
                    <div>
                        <Button>Download the App</Button>
                    </div>  
                </div>
                <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 md:gap-0 pt-8'>
                    <p>© Copyright FamGuru {new Date().getFullYear()}</p>
                    <div className='flex gap-2'>
                        <FaFacebookSquare/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;