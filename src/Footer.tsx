import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const Footer = () => {
    return <div className="relative bottom-0 from-black to-gray-700 text-2xl md:text-4xl dark:text-amber-50 self-stretch w-screen md:w-60 flex justify-center max-h-96 items-center text-center">
            <ul className="relative bottom-0 inline">
                <li key={0} onClick={()=> window.open("https://github.com/B-urb")} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faGithub}/></li>
                <li key={1} onClick={()=> window.open("https://www.linkedin.com/in/bj%C3%B6rn-u-3a9347113")} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faLinkedin}/></li>
                <li key={2} onClick={()=> window.open("https://twitter.com/bambusbijoern")} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faTwitter}/></li>
                <li key={3} onClick={()=> window.open("https://www.instagram.com/bambusbijoern/")} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faInstagram}/></li>
            </ul>
        </div>

}

export default Footer;