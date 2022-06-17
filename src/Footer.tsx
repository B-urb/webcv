import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const Footer = () => {
    return <div className="relative bottom-0 from-black to-gray-700 text-2xl text-amber-50 self-stretch w-screen flex justify-center max-h-96 items-center text-center">
            <ul className="relative bottom-0 inline">
                <li key={0} onClick={()=> window.open("https://github.com")} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faGithub}/></li>
                <li key={1} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faLinkedin}/></li>
                <li key={2} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faTwitter}/></li>
                <li key={3} className="inline m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faInstagram}/></li>
            </ul>
        </div>

}

export default Footer;